// import { sanity } from "@/lib/sanity";

// export async function POST(req: Request) {
//   const data = await req.json();

//   await sanity.createOrReplace({
//     _type: "profile",
//     _id: "user-profile",
//     ...data,
//   });

//   return Response.json({ success: true });
// }

import { NextResponse } from "next/server";
import { sanity } from "@/lib/sanity";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const profile = await sanity.fetch(
      `*[_type == "user" && _id == $userId][0]{
        _id,
        name,
        email,
        phone,
        company,
        "avatar": avatar.asset->url
      }`,
      {
        userId: decoded.userId,
      }
    );

    return NextResponse.json(profile);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

