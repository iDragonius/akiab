module.exports = [
"[project]/Developer/projects/akiab/client/.next-internal/server/app/bonus-cards/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Developer/projects/akiab/client/src/app/favicon.ico.mjs { IMAGE => \"[project]/Developer/projects/akiab/client/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/projects/akiab/client/src/app/favicon.ico.mjs { IMAGE => \"[project]/Developer/projects/akiab/client/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Developer/projects/akiab/client/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/projects/akiab/client/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Developer/projects/akiab/client/src/app/bonus-cards/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projects/akiab/client/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projects/akiab/client/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
async function getBonusCards() {
    const url = new URL(`${("TURBOPACK compile-time value", "https://admin.akiab.az/api")}/bonus-cards`);
    url.searchParams.append("populate[0]", "image");
    const res = await fetch(url.toString(), {
        next: {
            revalidate: 600
        }
    });
    if (!res.ok) throw new Error("Failed to fetch news");
    return res.json();
}
async function Page() {
    const { data } = await getBonusCards();
    console.log(data);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "box",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-center text-primary font-semibold text-[32px] my-[50px]",
                children: [
                    "Bonus Kartları",
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/projects/akiab/client/src/app/bonus-cards/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-4 gap-5 w-full max-sm:grid-cols-1  max-sm:gap-7",
                children: data.map((bonusCard)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " transform perspective-[200px] rotate-y-12  ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: ("TURBOPACK compile-time value", "https://admin.akiab.az") + bonusCard.image.url,
                            alt: "bonus card " + bonusCard.id,
                            width: 300,
                            height: 300,
                            className: "rounded-[24px] w-full h-full object-cover  transform perspective-[800px] rotate-y-6 "
                        }, void 0, false, {
                            fileName: "[project]/Developer/projects/akiab/client/src/app/bonus-cards/page.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    }, bonusCard.id, false, {
                        fileName: "[project]/Developer/projects/akiab/client/src/app/bonus-cards/page.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Developer/projects/akiab/client/src/app/bonus-cards/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/projects/akiab/client/src/app/bonus-cards/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/projects/akiab/client/src/app/bonus-cards/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/projects/akiab/client/src/app/bonus-cards/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__67b88e78._.js.map