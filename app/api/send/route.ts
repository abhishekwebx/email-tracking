// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import { sanity } from "@/lib/sanity";
// import jwt from "jsonwebtoken";

// // ✅ Track links
// function trackLinks(html: string, emailId: string) {
//   return html.replace(
//     /href="(.*?)"/g,
//     (_, url) =>
//       `href="${process.env.NEXT_PUBLIC_BASE_URL}/api/click?id=${emailId}&url=${encodeURIComponent(url)}"`
//   );
// }

// // ✅ Create transporter once
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });

// export async function POST(req: Request) {
//   try {
//     const authHeader = req.headers.get("authorization");

//     if (!authHeader) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const token = authHeader.replace("Bearer ", "");
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

//     const { to, subject, body, senderName } = await req.json();

//     const recipients: string[] = Array.isArray(to)
//       ? to
//       : to.split(",").map((e: string) => e.trim());

//     if (!recipients.length || !subject || !body) {
//       return NextResponse.json(
//         { error: "Missing fields" },
//         { status: 400 }
//       );
//     }

//     for (const recipient of recipients) {

//       const emailDoc = await sanity.create({
//         _type: "emails",

//         user: {
//           _type: "reference",
//           _ref: decoded.userId,
//         },

//         to: [recipient], // ✅ ALWAYS ARRAY
//         subject,
//         body,
//         senderName,

//         status: "sent",

//         sentAt: new Date().toISOString(),
//         createdAt: new Date().toISOString(),

//         openCount: 0,
//         clickCount: 0,
//       });

//       const trackedBody = trackLinks(body, emailDoc._id);

//       const pixel = `
//         <img src="${process.env.NEXT_PUBLIC_BASE_URL}/api/open?id=${emailDoc._id}"
//         width="1" height="1" style="display:none;" />
//       `;

//       await transporter.sendMail({
//         from: `"${senderName || "CRM"}" <${process.env.MAIL_USER}>`,
//         replyTo: decoded.email,
//         to: recipient,
//         subject,
//         html: trackedBody + pixel,
//       });
//     }

//     return NextResponse.json({ success: true });

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: any) {
//     return NextResponse.json(
//       { error: error.message },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sanity } from "@/lib/sanity";
import jwt from "jsonwebtoken";

// ✅ Track links for click tracking
function trackLinks(html: string, emailId: string) {
  return html.replace(
    /href="(.*?)"/g,
    (_, url) =>
      `href="${process.env.NEXT_PUBLIC_BASE_URL}/api/click?id=${emailId}&url=${encodeURIComponent(
        url,
      )}"`,
  );
}

// ✅ Create transporter once
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const { id: draftId, to, subject, body, senderName } = await req.json();

    // Normalize recipients
    const recipients: string[] = Array.isArray(to)
      ? to
      : typeof to === "string"
        ? to.split(",").map((e) => e.trim())
        : [];

    if (!recipients.length || !subject || !body) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // ✅ Update existing draft if id exists
    let emailDoc;
    if (draftId) {
      emailDoc = await sanity
        .patch(draftId)
        .set({
          status: "sent",
          sentAt: new Date().toISOString(),
          subject,
          body,
          senderName,
          to: recipients,
          updatedAt: new Date().toISOString(),
        })
        .commit();
    } else {
      // ✅ Create new email document
      emailDoc = await sanity.create({
        _type: "emails",
        user: { _type: "reference", _ref: decoded.userId },
        to: recipients,
        subject,
        body,
        senderName,
        status: "sent",
        sentAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        openCount: 0,
        clickCount: 0,
      });
    }

    // ✅ Send emails individually with tracking
    for (const recipient of recipients) {
      const trackedBody = trackLinks(body, emailDoc._id);

      const pixel = `<img src="${process.env.NEXT_PUBLIC_BASE_URL}/api/open?id=${emailDoc._id}" width="1" height="1" style="display:none;" />`;

      await transporter.sendMail({
        from: `"${senderName || "CRM"}" <${process.env.MAIL_USER}>`,
        replyTo: decoded.email,
        to: recipient,
        subject,
        html: trackedBody + pixel,
      });
    }

    return NextResponse.json({ success: true, id: emailDoc._id });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Send email error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
