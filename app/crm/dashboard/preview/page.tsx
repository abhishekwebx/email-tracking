"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AuthGuard from "@/components/AuthGuard";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, MousePointerClick, MailCheck } from "lucide-react";

interface EmailDetails {
  _id: string;
  to: string;
  subject: string;
  body: string;
  sentAt: string;
  opened: boolean;
  openCount: number;
  clickCount: number;
}

export default function EmailDetailsPage() {
  const { id } = useParams();

  const [email, setEmail] = useState<EmailDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmail = async () => {
      const res = await fetch(`/api/emails/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setEmail(data);
      setLoading(false);
    };
    if (id) fetchEmail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-xl font-semibold text-muted-foreground">
        Loading Email...
      </div>
    );
  }

  if (!email) return <p>Email not found</p>;

  return (
    <AuthGuard>
      <main className="p-6 md:p-10 max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold tracking-tight">Email Details</h1>
          <p className="text-muted-foreground">
            Complete activity and message preview
          </p>
        </header>

        {/* Stats */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard
            title="Open Count"
            value={email.openCount}
            icon={<Eye />}
            gradient="from-green-500 to-emerald-500"
          />

          <StatCard
            title="Click Count"
            value={email.clickCount}
            icon={<MousePointerClick />}
            gradient="from-pink-500 to-rose-500"
          />

          <StatCard
            title="Delivery"
            value="Sent"
            icon={<MailCheck />}
            gradient="from-blue-500 to-indigo-500"
          />
        </section>
        {/* Top Info Card */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 space-y-3">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Info label="Recipient" value={email.to} />
              <Info label="Subject" value={email.subject} />
              <Info
                label="Sent At"
                value={new Date(email.sentAt).toLocaleString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              />

              <div>
                <p className="text-muted-foreground text-xs">Status</p>

                <span
                  className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    email.opened
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {email.opened ? "Opened" : "Pending"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Email Preview */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Email Preview</h2>

            <div className="border rounded-xl p-5 bg-muted/30 prose max-w-none">
              <div className="email-body" dangerouslySetInnerHTML={{ __html: email.body }} />
            </div>
          </CardContent>
        </Card>
      </main>
    </AuthGuard>
  );
}

/* ---------------- Small Components ---------------- */

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p
        className="text-muted-foreground text-xs"
        style={{ marginBottom: "5px" }}
      >
        {label}
      </p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  gradient,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  gradient: string;
}) {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
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