module.exports = [
"[project]/Developer/projects/akiab/client/.next-internal/server/app/news/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Developer/projects/akiab/client/src/app/favicon.ico.mjs { IMAGE => \"[project]/Developer/projects/akiab/client/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/projects/akiab/client/src/app/favicon.ico.mjs { IMAGE => \"[project]/Developer/projects/akiab/client/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Developer/projects/akiab/client/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/projects/akiab/client/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Developer/projects/akiab/client/src/utils/slug.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slug",
    ()=>slug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projects/akiab/client/node_modules/slugify/slugify.js [app-rsc] (ecmascript)");
;
function slug(text) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(text, {
        lower: true
    });
}
}),
"[project]/Developer/projects/akiab/client/src/app/news/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projects/akiab/client/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projects/akiab/client/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projects/akiab/client/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projects/akiab/client/src/utils/slug.ts [app-rsc] (ecmascript)");
;
;
;
;
async function getNews() {
    const url = new URL(`${("TURBOPACK compile-time value", "https://admin.akiab.az/api")}/activities`);
    url.searchParams.append("populate[0]", "seo");
    url.searchParams.append("populate[1]", "seo.shareImage");
    url.searchParams.append("populate[2]", "image");
    url.searchParams.append("populate[3]", "activity_category");
    url.searchParams.set("pagination[limit]", "500");
    url.searchParams.set("sort", "publishDate:desc");
    const res = await fetch(url.toString(), {
        next: {
            revalidate: 600
        }
    });
    if (!res.ok) throw new Error("Failed to fetch news");
    return res.json();
}
async function Page() {
    const { data } = await getNews();
    console.log(data);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "box",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-center text-primary font-semibold text-[32px] my-[50px]",
                children: "Xəbərlər"
            }, void 0, false, {
                fileName: "[project]/Developer/projects/akiab/client/src/app/news/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-4 gap-5 w-full max-sm:grid-cols-1 max-sm:gap-8",
                children: data.map((newsElement)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: ("TURBOPACK compile-time value", "https://admin.akiab.az") + newsElement.image[0].url,
                                alt: "",
                                width: 300,
                                height: 300,
                                className: "h-[200px]"
                            }, void 0, false, {
                                fileName: "[project]/Developer/projects/akiab/client/src/app/news/page.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] text-primary mb-3",
                                        children: newsElement.publishDate
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/projects/akiab/client/src/app/news/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-primary font-semibold h-[54px] line-clamp-2 text-[18px] mb-3  text-left",
                                        children: newsElement.title
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/projects/akiab/client/src/app/news/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "line-clamp-3 text-[#9b9b9b] text-[14px] h-[63px] ",
                                        children: newsElement.description
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/projects/akiab/client/src/app/news/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/news/${newsElement.documentId}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projects$2f$akiab$2f$client$2f$src$2f$utils$2f$slug$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["slug"])(newsElement.title)}`,
                                        className: "text-white bg-primary font-medium mt-3 flex w-max px-4 rounded-[6px]  ",
                                        children: "Ətrfalı"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/projects/akiab/client/src/app/news/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/projects/akiab/client/src/app/news/page.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        ]
                    }, newsElement.id, true, {
                        fileName: "[project]/Developer/projects/akiab/client/src/app/news/page.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Developer/projects/akiab/client/src/app/news/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/projects/akiab/client/src/app/news/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/projects/akiab/client/src/app/news/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/projects/akiab/client/src/app/news/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2ff414e0._.js.map