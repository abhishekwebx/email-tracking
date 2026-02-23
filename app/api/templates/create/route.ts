import { NextResponse } from "next/server";
import { sanity } from "@/lib/sanity";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const doc = await sanity.create({
      _type: "emailTemplate",
      ...body,
    });

    return NextResponse.json(doc);
  } catch (error) {
    return NextResponse.json({ error: "Template create failed" }, { status: 500 });
  }
}
