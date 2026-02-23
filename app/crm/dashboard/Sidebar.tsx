"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  LayoutDashboard,
  Mail,
  Save,
  Settings,
  X,
} from "lucide-react";
import AuthGuard from "@/components/AuthGuard";

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const pathname = usePathname();

  const menu = [
    { title: "Dashboard", icon: LayoutDashboard, href: "/crm/dashboard" },
    { title: "Send Email", icon: Mail, href: "/crm/send" },
    { title: "Draft Emails", icon: Save, href: "/crm/draft-mail" },
    { title: "Category/Templates", icon: Settings, href: "/crm/templates" },
    { title: "Profile", icon: BarChart3, href: "/crm/profile" },
  ];

  return (
    <AuthGuard>
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
<aside
  className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r transition-transform
  ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
  // style={{background: "linear-gradient(90deg,rgba(180, 58, 58, 0.34) 0%, rgba(138, 62, 128, 0.24) 39%, rgba(252, 69, 69, 0.29) 91%)"}}
>
        {/* Logo */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-bold">Email Tracking</h2>

          <button
            className="md:hidden"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl transition font-medium
                  ${
                    active
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <Icon size={18} />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
    </AuthGuard>
  );
}
