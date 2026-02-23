import { sanity } from "@/lib/sanity";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");
  const url = searchParams.get("url");

  if (id && url) {

    await sanity.create({
      _type: "emailClick",
      emailId: id,
      url,
      clickedAt: new Date().toISOString()
    });

    await sanity.patch(id)
      .inc({ clickCount: 1 })
      .commit();
  }

  return Response.redirect(url || "/");
}
