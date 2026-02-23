import { NextRequest, NextResponse } from "next/server";
import { sanity } from "@/lib/sanity";

// GET -> Fetch Drafts OR Single Draft
export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    // 👉 Get Single Draft
    if (id) {
      const draft = await sanity.fetch(
        `*[_type == "emails" && _id == $id][0]`,
        { id }
      );

      if (!draft) {
        return NextResponse.json(
          { error: "Draft not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(draft);
    }

    // 👉 Get All Drafts
    const drafts = await sanity.fetch(`
      *[_type == "emails" && status == "draft"] 
      | order(_createdAt desc)
    `);

    return NextResponse.json(drafts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch drafts" },
      { status: 500 }
    );
  }
}
