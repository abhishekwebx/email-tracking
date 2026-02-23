import { NextResponse } from "next/server";
import { sanity } from "@/lib/sanity";

/* =========================
   GET TEMPLATE
========================= */
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const template = await sanity.fetch(
      `*[_type == "emailTemplate" && _id == $id][0]`,
      { id }
    );

    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(template);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch template" },
      { status: 500 }
    );
  }
}

/* =========================
   DELETE TEMPLATE
========================= */
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await sanity.delete(id);

    return NextResponse.json({
      success: true,
      message: "Template deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete template" },
      { status: 500 }
    );
  }
}

/* =====================
   UPDATE TEMPLATE
===================== */
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    console.log("Updating Template ID:", id);
    console.log("Payload:", body);

    // Safety remove restricted fields
    delete body._id;
    delete body._type;
    delete body.id;

    const updated = await sanity
      .patch(id)
      .set(body)
      .commit();

    return NextResponse.json(updated);
  } catch (error) {
    console.error("UPDATE ERROR:", error);

    return NextResponse.json(
      { error: "Template update failed" },
      { status: 500 }
    );
  }
}
