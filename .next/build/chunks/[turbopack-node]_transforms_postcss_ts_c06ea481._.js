module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/Developer/projects/akiab/client/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/72632_6d195a41._.js",
  "build/chunks/[root-of-the-server]__d739f2c1._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/Developer/projects/akiab/client/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];