"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, MousePointerClick, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import AuthGuard from "@/components/AuthGuard";

/* ---------------- Types ---------------- */
interface EmailLog {
  _id: string;
  to: string;
  subject: string;
  opened: boolean;
  clickCount: number;
  sentAt: string;
}

/* ---------------- Component ---------------- */

export default function DashboardPage() {
  const filters = [
    { label: "All", value: "all" },
    { label: "Today", value: "today" },
    { label: "Last Week", value: "last_week" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
  ];

  const router = useRouter();

  const [emails, setEmails] = useState<EmailLog[]>([]);
  const [loading, setLoading] = useState(true);

  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const [filter, setFilter] = useState<
    "all" | "today" | "last_week" | "week" | "month"
  >("all");

  const totalPages = Math.ceil(emails.length / ITEMS_PER_PAGE);

  const paginatedEmails = emails.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  /* ---------------- Fetch Emails ---------------- */

  useEffect(() => {
    const fetchEmails = async () => {
      setLoading(true);

      // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/emails?filter=${filter}`, {
      //   headers: {
      //     authorization: `Bearer ${localStorage.getItem("token")}`,
      //   },
      // });
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/emails?filter=${filter}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setEmails(data);
        setCurrentPage(1);
      } catch (err) {
        console.error("Error fetching emails:", err);
        setEmails([]);
      } finally {
        setLoading(false);
      }

      // const data = await res.json();
      // setEmails(data);
      // setCurrentPage(1);
      // setLoading(false);
    };
    fetchEmails();
    sessionStorage.removeItem("route");
  }, [filter]);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-xl font-semibold text-muted-foreground">
        Loading dashboard...
      </div>
    );
  }

  /* ---------------- UI ---------------- */

  return (
    <AuthGuard>
      <main className="p-4 md:p-10 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Email Tracking Dashboard
          </h1>

          <Button
            className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 cursor-pointer"
            onClick={() => {
              router.push("/crm/send");
            }}
          >
            + Send Email
          </Button>
        </header>

        {/* Stat Cards */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Total Emails"
            value={emails.length}
            icon={<Mail />}
            gradient="from-blue-500 to-indigo-500"
          />

          <StatCard
            title="Opened"
            value={emails.filter((e) => e.opened).length}
            icon={<Eye />}
            gradient="from-green-500 to-emerald-500"
          />

          <StatCard
            title="Total Clicks"
            value={emails.reduce((a, b) => a + (b.clickCount || 0), 0)}
            icon={<MousePointerClick />}
            gradient="from-pink-500 to-rose-500"
          />
        </section>

        {/* Filters */}
        <div className="flex gap-2">
          {filters.map((f) => (
            <Button
              key={f.value}
              size="sm"
              variant={filter === f.value ? "primary" : "outline"}
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setFilter(f.value as any);
                setCurrentPage(1);
              }}
              className="capitalize cursor-pointer"
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Table */}
        <section className="rounded-2xl border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/60">
                <tr>
                  <th className="p-4 text-left">Recipient</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-center">Status</th>
                  <th className="p-4 text-center">Sent At</th>
                  <th className="p-4 text-center">Clicks</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {paginatedEmails.map((email: any) => (
                  <tr key={email._id} className="border-t hover:bg-muted/40">
                    <td className="p-4 font-medium">
                      {email.to.map((e: any) => e).join(", ")}
                    </td>

                    <td className="p-4">{email.subject}</td>

                    <td className="p-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          email.opened
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {email.opened != null
                          ? email.opened
                            ? "Opened"
                            : "Pending"
                          : (email.status ?? "")}
                      </span>
                    </td>

                    <td className="p-4 text-center text-muted-foreground">
                      {new Date(email.sentAt).toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>

                    <td className="p-4 text-center font-semibold">
                      {email.clickCount}
                    </td>
                    {/*  DETAILS BUTTON */}
                    <td className="p-4 text-center">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          router.push(`/crm/send/${email._id}`);
                          sessionStorage.setItem("route", "/crm/dashboard");
                        }}
                        className="cursor-pointer"
                      >
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}

                {paginatedEmails.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center p-10">
                      No emails found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-between">
            <p className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </p>

            <div className="flex gap-2">
              <Button
                className="cursor-pointer"
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                Previous
              </Button>

              <Button
                className="cursor-pointer"
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </main>
    </AuthGuard>
  );
}

/* ---------------- Stat Card ---------------- */

function StatCard({
  title,
  value,
  icon,
  gradient,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  gradient: string;
}) {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md">
      <CardContent className="p-6 flex items-center gap-4">
        <div
          className={`p-3 rounded-xl text-white bg-gradient-to-br ${gradient}`}
        >
          {icon}
        </div>

        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
