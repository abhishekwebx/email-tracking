import jwt from "jsonwebtoken";
import { sanity } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  // { params }: { params: { id: string } }
   { params }: { params: Promise<{ id: string }> }
) {
  try {
    // const emailId = params.id;
    const { id: emailId } = await params;

    if (!emailId) {
      return NextResponse.json(
        { error: "Missing Email ID" },
        { status: 400 }
      );
    }

   const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.replace("Bearer ", "");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    // Fetch email from sanity
    const email = await sanity.fetch(
      `*[_type == "emails" && _id == $id && user._ref == $userId][0]`,
      {
        id: emailId,
        userId: decoded.userId,
      }
    );

    if (!email) {
      return NextResponse.json(
        { error: "Email not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(email);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Email Detail Error:", error);

    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
