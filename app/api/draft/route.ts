import { NextResponse } from "next/server";
import { sanity } from "@/lib/sanity";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const token = authHeader.replace("Bearer ", "");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const { id: draftId, to, subject, body, senderName } = await req.json();

    if (!to && !subject && !body) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    let emailDoc;

    if (draftId) {
      // Update existing draft
      emailDoc = await sanity
        .patch(draftId)
        .set({
          to,
          subject,
          body,
          senderName,
          updatedAt: new Date().toISOString(),
          status: "draft",
        })
        .commit();
    } else {
      // Create new draft
      emailDoc = await sanity.create({
        _type: "emails",
        user: { _type: "reference", _ref: decoded.userId },
        to,
        subject,
        body,
        senderName,
        status: "draft",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        openCount: 0,
        clickCount: 0,
      });
    }

    return NextResponse.json(emailDoc);
  } catch (err: any) {
    console.error("Draft API error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
