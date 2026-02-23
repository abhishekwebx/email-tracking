
"use client";
import AuthGuard from "@/components/AuthGuard";
import { useParams } from "next/navigation";
import SendEmail from "../page";
import EmailDetailsPage from "../../dashboard/preview/page";

export default function EditEmail() {
  const params = useParams();
  const route = sessionStorage.getItem("route");

  return (
    <AuthGuard>
      {route !== "/crm/dashboard" && <SendEmail emailId={params?.id as string} />}
      {route === "/crm/dashboard" && (
        <EmailDetailsPage />
      )}
    </AuthGuard>
  );
}
