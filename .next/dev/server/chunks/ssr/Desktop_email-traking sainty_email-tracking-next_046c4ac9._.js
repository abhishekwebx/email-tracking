module.exports = [
"[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SendEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$components$2f$AuthGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/components/AuthGuard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$react$2d$email$2d$editor$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/react-email-editor/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function SendEmail({ emailId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [to, setTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [body, setBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [senderName, setSenderName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draftId, setDraftId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(emailId || null);
    // Load logged-in user
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        setSenderName(user?.email || "");
    }, []);
    // Load draft if emailId is present
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!emailId) return;
        const loadDraft = async ()=>{
            try {
                const res = await fetch(`/api/emails/${emailId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error);
                setTo(data.to || []);
                setSubject(data.subject || "");
                setBody(data.body || "");
                setSenderName(data.senderName || "");
                setDraftId(data._id);
            } catch (err) {
                console.error("Draft load error", err);
            }
        };
        loadDraft();
    }, [
        emailId
    ]);
    // Email validation
    const isValidEmail = (email)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const addEmail = (email)=>{
        email = email.trim();
        if (!isValidEmail(email)) {
            setError("Invalid email format");
            return;
        }
        if (!to.includes(email)) setTo([
            email,
            ...to
        ]);
        setInputValue("");
        setError(null);
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && inputValue.trim()) {
            e.preventDefault();
            addEmail(inputValue);
        }
    };
    const removeEmail = (email)=>{
        setTo(to.filter((e)=>e !== email));
    };
    const handlePaste = (e)=>{
        const paste = e.clipboardData.getData("text");
        const emails = paste.split(/[,;\s]+/);
        emails.forEach((email)=>{
            if (isValidEmail(email) && !to.includes(email)) setTo((prev)=>[
                    email,
                    ...prev
                ]);
        });
        e.preventDefault();
    };
    const isFormValid = ()=>to.length > 0 && subject.trim() !== "" && body.trim() !== "";
    // Save draft
    const saveAsDraft = async ()=>{
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const res = await fetch("/api/draft", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    id: draftId,
                    senderName,
                    to,
                    subject,
                    body
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            setDraftId(data._id); // save new draft ID if created
            router.push("/crm/draft-mail");
            setSuccess(true);
        } catch (err) {
            setError(err.message || "Failed to save draft");
        } finally{
            setLoading(false);
        }
    };
    // Send email
    const sendEmail = async ()=>{
        if (!isFormValid()) {
            setError("All fields are required");
            return;
        }
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    id: draftId,
                    to,
                    subject,
                    body,
                    senderName
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            setSuccess(true);
            setTo([]);
            setSubject("");
            setBody("");
            setDraftId(null); // email sent, reset draftId
        } catch (err) {
            setError(err.message || "Failed to send email");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$components$2f$AuthGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Send Email"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "subtitle",
                        children: "Track opens in real-time"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "error",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                        lineNumber: 184,
                        columnNumber: 21
                    }, this),
                    success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "success",
                        children: "Email saved/sent successfully!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                        lineNumber: 186,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "To"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "email-wrapper",
                        children: [
                            to.map((email)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: [
                                        email,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeEmail(email),
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, email, true, {
                                    fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                placeholder: "Type email & press Enter",
                                value: inputValue,
                                onChange: (e)=>setInputValue(e.target.value),
                                onKeyDown: handleKeyDown,
                                onPaste: handlePaste
                            }, void 0, false, {
                                fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Subject"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: subject,
                        placeholder: "Enter subject",
                        onChange: (e)=>setSubject(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Message"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$react$2d$email$2d$editor$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        body: body,
                        setBody: setBody
                    }, void 0, false, {
                        fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "send-button ml-2",
                        disabled: loading && !to.length,
                        onClick: saveAsDraft,
                        children: loading ? "Saving..." : "Save Email as Draft"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "send-button",
                        disabled: !isFormValid(),
                        onClick: sendEmail,
                        children: loading && isFormValid() ? "Sending..." : "Send Email"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
            lineNumber: 179,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/email-traking sainty/email-tracking-next/app/crm/send/page.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/react-email-editor/dist/react-email-editor.cjs.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopDefault(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}
var React = __turbopack_context__.r("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var React__default = _interopDefault(React);
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
var name = "react-email-editor";
var version = "1.7.11";
var description = "Unlayer's Email Editor Component for React.js";
var main = "dist/index.js";
var typings = "dist/index.d.ts";
var files = [
    "dist"
];
var engines = {
    node: ">=10"
};
var scripts = {
    start: "tsdx watch",
    build: "tsdx build",
    test: "tsdx test",
    "test:watch": "tsdx test --watch",
    "test:coverage": "tsdx test --coverage",
    lint: "tsdx lint",
    prepare: "tsdx build",
    release: "npm run build && npm publish",
    "netlify-build": "cd demo && npm install && npm run build"
};
var peerDependencies = {
    react: ">=15"
};
var husky = {
    hooks: {
        "pre-commit": "tsdx lint"
    }
};
var dependencies = {
    "unlayer-types": "latest"
};
var devDependencies = {
    "@rollup/plugin-replace": "^5.0.2",
    "@testing-library/react": "^13.4.0",
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    husky: "^8.0.3",
    react: "^18.2.0",
    "react-dom": "^18.2.0",
    "rollup-plugin-copy": "^3.4.0",
    tsdx: "^0.14.1",
    tslib: "^2.4.1",
    typescript: "^4.9.4"
};
var author = "";
var homepage = "https://github.com/unlayer/react-email-editor#readme";
var license = "MIT";
var repository = "https://github.com/unlayer/react-email-editor.git";
var keywords = [
    "react-component"
];
var pkg = {
    name: name,
    version: version,
    description: description,
    main: main,
    typings: typings,
    files: files,
    engines: engines,
    scripts: scripts,
    peerDependencies: peerDependencies,
    husky: husky,
    dependencies: dependencies,
    devDependencies: devDependencies,
    author: author,
    homepage: homepage,
    license: license,
    repository: repository,
    keywords: keywords
};
var defaultScriptUrl = 'https://editor.unlayer.com/embed.js?2';
var callbacks = [];
var loaded = false;
var isScriptInjected = function isScriptInjected(scriptUrl) {
    var scripts = document.querySelectorAll('script');
    var injected = false;
    scripts.forEach(function(script) {
        if (script.src.includes(scriptUrl)) {
            injected = true;
        }
    });
    return injected;
};
var addCallback = function addCallback(callback) {
    callbacks.push(callback);
};
var runCallbacks = function runCallbacks() {
    if (loaded) {
        var callback;
        while(callback = callbacks.shift()){
            callback();
        }
    }
};
var loadScript = function loadScript(callback, scriptUrl) {
    if (scriptUrl === void 0) {
        scriptUrl = defaultScriptUrl;
    }
    addCallback(callback);
    if (!isScriptInjected(scriptUrl)) {
        var embedScript = document.createElement('script');
        embedScript.setAttribute('src', scriptUrl);
        embedScript.onload = function() {
            loaded = true;
            runCallbacks();
        };
        document.head.appendChild(embedScript);
    } else {
        runCallbacks();
    }
};
var win = ("TURBOPACK compile-time truthy", 1) ? {
    __unlayer_lastEditorId: 0
} : "TURBOPACK unreachable";
win.__unlayer_lastEditorId = win.__unlayer_lastEditorId || 0;
var EmailEditor = /*#__PURE__*/ React__default.forwardRef(function(props, ref) {
    var _props$appearance, _props$options, _props$options2, _props$locale, _props$options3, _props$projectId, _props$options4, _props$tools, _props$options5;
    var onLoad = props.onLoad, onReady = props.onReady, scriptUrl = props.scriptUrl, _props$minHeight = props.minHeight, minHeight = _props$minHeight === void 0 ? 500 : _props$minHeight, _props$style = props.style, style = _props$style === void 0 ? {} : _props$style;
    var _useState = React.useState(null), editor = _useState[0], setEditor = _useState[1];
    var _useState2 = React.useState(false), hasLoadedEmbedScript = _useState2[0], setHasLoadedEmbedScript = _useState2[1];
    var editorId = React.useMemo(function() {
        return props.editorId || "editor-" + ++win.__unlayer_lastEditorId;
    }, [
        props.editorId
    ]);
    var options = _extends({}, props.options || {}, {
        appearance: (_props$appearance = props.appearance) != null ? _props$appearance : (_props$options = props.options) == null ? void 0 : _props$options.appearance,
        displayMode: (props == null ? void 0 : props.displayMode) || ((_props$options2 = props.options) == null ? void 0 : _props$options2.displayMode) || 'email',
        locale: (_props$locale = props.locale) != null ? _props$locale : (_props$options3 = props.options) == null ? void 0 : _props$options3.locale,
        projectId: (_props$projectId = props.projectId) != null ? _props$projectId : (_props$options4 = props.options) == null ? void 0 : _props$options4.projectId,
        tools: (_props$tools = props.tools) != null ? _props$tools : (_props$options5 = props.options) == null ? void 0 : _props$options5.tools,
        id: editorId,
        source: {
            name: pkg.name,
            version: pkg.version
        }
    });
    React.useImperativeHandle(ref, function() {
        return {
            editor: editor
        };
    }, [
        editor
    ]);
    React.useEffect(function() {
        return function() {
            editor == null ? void 0 : editor.destroy();
        };
    }, []);
    React.useEffect(function() {
        setHasLoadedEmbedScript(false);
        loadScript(function() {
            return setHasLoadedEmbedScript(true);
        }, scriptUrl);
    }, [
        scriptUrl
    ]);
    React.useEffect(function() {
        if (!hasLoadedEmbedScript) return;
        editor == null ? void 0 : editor.destroy();
        setEditor(unlayer.createEditor(options));
    }, [
        JSON.stringify(options),
        hasLoadedEmbedScript
    ]);
    var methodProps = Object.keys(props).filter(function(propName) {
        return /^on/.test(propName);
    });
    React.useEffect(function() {
        if (!editor) return;
        onLoad == null ? void 0 : onLoad(editor);
        // All properties starting with on[Name] are registered as event listeners.
        methodProps.forEach(function(methodProp) {
            if (/^on/.test(methodProp) && methodProp !== 'onLoad' && methodProp !== 'onReady' && typeof props[methodProp] === 'function') {
                editor.addEventListener(methodProp, props[methodProp]);
            }
        });
        if (onReady) {
            editor.addEventListener('editor:ready', function() {
                onReady(editor);
            });
        }
    }, [
        editor,
        Object.keys(methodProps).join(',')
    ]);
    return React__default.createElement("div", {
        style: {
            flex: 1,
            display: 'flex',
            minHeight: minHeight
        }
    }, React__default.createElement("div", {
        id: editorId,
        style: _extends({}, style, {
            flex: 1
        })
    }));
});
exports.EmailEditor = EmailEditor;
exports.default = EmailEditor; //# sourceMappingURL=react-email-editor.cjs.development.js.map
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/react-email-editor/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/react-email-editor/dist/react-email-editor.cjs.development.js [app-ssr] (ecmascript)");
}
}),
];

//# sourceMappingURL=Desktop_email-traking%20sainty_email-tracking-next_046c4ac9._.js.map