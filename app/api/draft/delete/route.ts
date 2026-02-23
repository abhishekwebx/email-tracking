import { NextRequest, NextResponse } from "next/server";
import { sanity } from "@/lib/sanity";

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Draft ID required" },
        { status: 400 }
      );
    }

    await sanity.delete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete draft" },
      { status: 500 }
    );
  }
}
