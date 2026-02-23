module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/lib/sanity.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanity",
    ()=>sanity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/@sanity/client/dist/index.browser.js [app-route] (ecmascript) <locals>");
;
const sanity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: ("TURBOPACK compile-time value", "lgzekbmp"),
    dataset: 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false
});
}),
"[project]/Desktop/email-traking sainty/email-tracking-next/app/api/emails/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$lib$2f$sanity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/email-traking sainty/email-tracking-next/lib/sanity.ts [app-route] (ecmascript)");
;
;
async function GET(req, { params }) {
    try {
        const email = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$lib$2f$sanity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanity"].fetch(`*[_type == "emails" && _id == $id][0]`, {
            id: params.id
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(email);
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch email"
        }, {
            status: 500
        });
    }
}
async function PUT(req, { params }) {
    try {
        const body = await req.json();
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$lib$2f$sanity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanity"].patch(params.id).set(body).commit();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(updated);
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to update email"
        }, {
            status: 500
        });
    }
}
async function DELETE(req, { params }) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$lib$2f$sanity$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanity"].delete(params.id);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$email$2d$traking__sainty$2f$email$2d$tracking$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Delete failed"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__13b8e9d7._.js.map