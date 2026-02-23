"use client";

import SendEmail from "@/app/crm/send/page";


interface PageProps {
  params: { id: string };
}

export default function EmailPage({ params }: PageProps) {
  return <SendEmail emailId={params.id} />;
}
