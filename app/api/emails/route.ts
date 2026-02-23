import jwt from "jsonwebtoken";
import { sanity } from "@/lib/sanity";

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return new Response("Unauthorized", { status: 401 });
  }

  const token = authHeader.replace("Bearer ", "");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let decoded: any;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET!);
  } catch {
    return new Response("Invalid token", { status: 401 });
  }

  const userId = decoded.userId;

  const { searchParams } = new URL(req.url);
  const filter = searchParams.get("filter");

  const now = new Date();

  const startToday = new Date(now);
  startToday.setHours(0, 0, 0, 0);

  const startWeek = new Date(now);
  startWeek.setDate(now.getDate() - now.getDay());
  startWeek.setHours(0, 0, 0, 0);

  const startLastWeek = new Date(startWeek);
  startLastWeek.setDate(startWeek.getDate() - 7);

  const startMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  let query = `*[_type == "emails" && user._ref == $userId`;

  if (filter === "today") {
    query += ` && sentAt >= $startToday`;
  }

  if (filter === "week") {
    query += ` && sentAt >= $startWeek`;
  }

  if (filter === "last_week") {
    query += ` && sentAt >= $startLastWeek && sentAt < $startWeek`;
  }

  if (filter === "month") {
    query += ` && sentAt >= $startMonth`;
  }

  query += `] | order(sentAt desc)`;

  const emails = await sanity.fetch(query, {
    userId,
    startToday: startToday.toISOString(),
    startWeek: startWeek.toISOString(),
    startLastWeek: startLastWeek.toISOString(),
    startMonth: startMonth.toISOString(),
  });

  return Response.json(emails);
}
