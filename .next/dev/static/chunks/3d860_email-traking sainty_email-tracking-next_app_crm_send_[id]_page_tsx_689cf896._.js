(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>editEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$components$2f$AuthGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/components/AuthGuard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// "use client";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import AuthGuard from "@/components/AuthGuard";
// import { Card, CardContent } from "@/components/ui/card";
// import { Eye, MousePointerClick, MailCheck } from "lucide-react";
// interface EmailDetails {
//   _id: string;
//   to: string;
//   subject: string;
//   body: string;
//   sentAt: string;
//   opened: boolean;
//   openCount: number;
//   clickCount: number;
// }
// export default function EmailDetailsPage() {
//   const { id } = useParams();
//   const [email, setEmail] = useState<EmailDetails | null>(null);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchEmail = async () => {
//       const res = await fetch(`/api/emails/${id}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       const data = await res.json();
//       setEmail(data);
//       setLoading(false);
//     };
//     if (id) fetchEmail();
//   }, [id]);
//   if (loading) {
//     return (
//       <div className="flex h-[60vh] items-center justify-center text-xl font-semibold text-muted-foreground">
//         Loading Email...
//       </div>
//     );
//   }
//   if (!email) return <p>Email not found</p>;
//   return (
//     <AuthGuard>
//       <main className="p-6 md:p-10 max-w-6xl mx-auto space-y-8">
//         {/* Header */}
//         <header>
//           <h1 className="text-3xl font-bold tracking-tight">Email Details</h1>
//           <p className="text-muted-foreground">
//             Complete activity and message preview
//           </p>
//         </header>
//         {/* Stats */}
//         <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           <StatCard
//             title="Open Count"
//             value={email.openCount}
//             icon={<Eye />}
//             gradient="from-green-500 to-emerald-500"
//           />
//           <StatCard
//             title="Click Count"
//             value={email.clickCount}
//             icon={<MousePointerClick />}
//             gradient="from-pink-500 to-rose-500"
//           />
//           <StatCard
//             title="Delivery"
//             value="Sent"
//             icon={<MailCheck />}
//             gradient="from-blue-500 to-indigo-500"
//           />
//         </section>
//         {/* Top Info Card */}
//         <Card className="rounded-2xl shadow-sm">
//           <CardContent className="p-6 space-y-3">
//             <div className="grid md:grid-cols-2 gap-4 text-sm">
//               <Info label="Recipient" value={email.to} />
//               <Info label="Subject" value={email.subject} />
//               <Info
//                 label="Sent At"
//                 value={new Date(email.sentAt).toLocaleString("en-IN", {
//                   day: "2-digit",
//                   month: "short",
//                   year: "numeric",
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   hour12: true,
//                 })}
//               />
//               <div>
//                 <p className="text-muted-foreground text-xs">Status</p>
//                 <span
//                   className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${
//                     email.opened
//                       ? "bg-green-100 text-green-700"
//                       : "bg-gray-200 text-gray-600"
//                   }`}
//                 >
//                   {email.opened ? "Opened" : "Pending"}
//                 </span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         {/* Email Preview */}
//         <Card className="rounded-2xl shadow-sm">
//           <CardContent className="p-6">
//             <h2 className="text-lg font-semibold mb-4">Email Preview</h2>
//             <div className="border rounded-xl p-5 bg-muted/30 prose max-w-none">
//               <div dangerouslySetInnerHTML={{ __html: email.body }} />
//             </div>
//           </CardContent>
//         </Card>
//       </main>
//     </AuthGuard>
//   );
// }
// /* ---------------- Small Components ---------------- */
// function Info({ label, value }: { label: string; value: string }) {
//   return (
//     <div>
//       <p
//         className="text-muted-foreground text-xs"
//         style={{ marginBottom: "5px" }}
//       >
//         {label}
//       </p>
//       <p className="font-medium">{value}</p>
//     </div>
//   );
// }
// function StatCard({
//   title,
//   value,
//   icon,
//   gradient,
// }: {
//   title: string;
//   value: string | number;
//   icon: React.ReactNode;
//   gradient: string;
// }) {
//   return (
//     <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
//       <CardContent className="p-6 flex items-center gap-4">
//         <div
//           className={`p-3 rounded-xl text-white bg-gradient-to-br ${gradient}`}
//         >
//           {icon}
//         </div>
//         <div>
//           <p className="text-sm text-muted-foreground">{title}</p>
//           <p className="text-2xl font-bold">{value}</p>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
"use client";
;
;
;
function editEmail() {
    _s();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    // const [to, setTo] = useState<string[]>([]);
    // const [inputValue, setInputValue] = useState("");
    // const [subject, setSubject] = useState("");
    // const [body, setBody] = useState("");
    // const [senderName, setSenderName] = useState("");
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState<string | null>(null);
    // const [success, setSuccess] = useState("");
    // const [draftId, setDraftId] = useState<string | null>(id as string);
    // const isValidEmail = (email: string) =>
    //   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // const addEmail = (email: string) => {
    //   email = email.trim();
    //   if (!isValidEmail(email)) {
    //     setError("Invalid email format");
    //     return;
    //   }
    //   if (!to.includes(email)) {
    //     setTo((prev) => [email, ...prev]);
    //   }
    //   setInputValue("");
    //   setError(null);
    // };
    // const removeEmail = (email: string) => {
    //   setTo(to.filter((e) => e !== email));
    // };
    // // -----------------------------
    // // Enter Key Support
    // // -----------------------------
    // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //   if (e.key === "Enter" && inputValue.trim()) {
    //     e.preventDefault();
    //     addEmail(inputValue);
    //   }
    // };
    // const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    //   const paste = e.clipboardData.getData("text");
    //   const emails = paste.split(/[,;\s]+/);
    //   emails.forEach((email) => {
    //     if (isValidEmail(email) && !to.includes(email)) {
    //       setTo((prev) => [email, ...prev]);
    //     }
    //   });
    //   e.preventDefault();
    // };
    // useEffect(() => {
    //   const user = JSON.parse(localStorage.getItem("user") || "{}");
    //   setSenderName(user?.email || "");
    // }, []);
    // useEffect(() => {
    //   if (!id) return;
    //   const fetchDraft = async () => {
    //     try {
    //       const res = await fetch(`api/emails/${id}`);
    //       const data = await res.json();
    //       if (!res.ok) throw new Error(data.error);
    //       setTo(data.to || []);
    //       setSubject(data.subject || "");
    //       setBody(data.body || "");
    //       setDraftId(data._id);
    //     } catch (err) {
    //       console.error("Draft load failed", err);
    //     }
    //   };
    //   fetchDraft();
    // }, [id]);
    // const saveAsDraft = async () => {
    //   setLoading(true);
    //   setError(null);
    //   try {
    //     const res = await fetch("/api/draft", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //       },
    //       body: JSON.stringify({
    //         id: draftId,
    //         to,
    //         subject,
    //         body,
    //         senderName,
    //       }),
    //     });
    //     const data = await res.json();
    //     if (!res.ok) throw new Error(data.error);
    //     setDraftId(data._id);
    //     setSuccess("Draft saved successfully!");
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   } catch (err: any) {
    //     setError(err.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // // -----------------------------
    // // Send Email
    // // -----------------------------
    // const sendEmail = async () => {
    //   if (!to.length || !subject || !body) {
    //     setError("All fields required");
    //     return;
    //   }
    //   setLoading(true);
    //   setError(null);
    //   try {
    //     const res = await fetch("/api/send", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //       },
    //       body: JSON.stringify({
    //         to,
    //         subject,
    //         body,
    //         senderName,
    //       }),
    //     });
    //     const data = await res.json();
    //     if (!res.ok) throw new Error(data.error);
    //     setSuccess("Email sent successfully!");
    //     // Clear form after send
    //     setTo([]);
    //     setSubject("");
    //     setBody("");
    //     setDraftId(null);
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   } catch (err: any) {
    //     setError(err.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // const isFormValid = () =>
    //   to.length > 0 && subject.trim() && body.trim();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$components$2f$AuthGuard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SendEmail, {
            emailId: id
        }, void 0, false, {
            fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/[id]/page.tsx",
            lineNumber: 363,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/[id]/page.tsx",
        lineNumber: 362,
        columnNumber: 5
    }, this);
}
_s(editEmail, "yQgCIz/jJfqV1l9s2yoba81MT5A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=3d860_email-traking%20sainty_email-tracking-next_app_crm_send_%5Bid%5D_page_tsx_689cf896._.js.map