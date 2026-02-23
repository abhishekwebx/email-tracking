"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";
import AuthGuard from "@/components/AuthGuard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <AuthGuard>
      <div
        className="flex"
        // style={{
        //   background: "linear-gradient(90deg,rgba(131, 58, 180, 0.58) 0%, rgba(138, 62, 138, 0.61) 39%, rgba(252, 69, 69, 0.53) 91%)",
        // }}
      >
        {/* Fixed Sidebar */}
        <Sidebar open={open} setOpen={setOpen}  />

        {/* Main Content */}
        <div className="flex-1 md:ml-64 min-h-screen bg-gray-50">
          {/* Mobile Topbar */}
          <div className="md:hidden flex items-center justify-between bg-white border-b p-4 sticky top-0 z-30">
            <button onClick={() => setOpen(true)}>
              <Menu />
            </button>
            <h1 className="font-semibold">Email Tracking</h1>
          </div>
          <main className="p-4 md:p-8">{children}</main>
        </div>
      </div>
    </AuthGuard>
  );
}
