import { NextResponse } from "next/server";
import { sanity } from "@/lib/sanity";

export async function GET() {
  const query = `*[_type == "emails"]{_id, to, subject, senderName}`;
  const emails = await sanity.fetch(query);
  return NextResponse.json(emails);
}

// DELETE email
export async function DELETE(req: Request) {
  const { pathname } = new URL(req.url);
  const id = pathname.split("/").pop();

  await sanity.delete(id!);

  return NextResponse.json({ success: true });
}
