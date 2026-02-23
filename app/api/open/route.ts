import { sanity } from "@/lib/sanity";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    await sanity
      .patch(id)
      .set({ opened: true, openedAt: new Date().toISOString() })
      .inc({ clicks: 1 })
      .commit();
  }

  return new Response(
    Buffer.from(
      "R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
      "base64"
    ),
    {
      headers: { "Content-Type": "image/gif" }
    }
  );
}
