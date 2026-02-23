import { NextResponse } from "next/server";
import { sanity } from "@/lib/sanity";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search") || "";
    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 6);

    const start = (page - 1) * limit;
    const end = start + limit;

    const filter = search
      ? `&& (title match $search || subject match $search)`
      : "";

    // ✅ Fetch Templates
    const templates = await sanity.fetch(
      `*[_type == "emailTemplate" ${filter}]
        | order(_createdAt desc)[$start...$end]{
          _id,
          title,
          subject,
          body,
          category
        }`,
      {
        search: `${search}*`,
        start,
        end,
      }
    );

    // ✅ Total Count
    const total = await sanity.fetch(
      `count(*[_type == "emailTemplate" ${filter}])`,
      { search: `${search}*` }
    );

    return NextResponse.json({
      data: templates,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch templates" },
      { status: 500 }
    );
  }
}
