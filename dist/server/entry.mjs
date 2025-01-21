import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/src/pages/detail/Detail.page.tsx": () => import("./entries/src_pages_detail_Detail-page.mjs") });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-XhNS7_By.js": {
    "file": "assets/chunks/chunk-XhNS7_By.js",
    "name": "getCurrentUrl"
  },
  "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.B_H6CoQb.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-XhNS7_By.js"
    ],
    "dynamicImports": [
      "src/pages/detail/Detail.page.tsx"
    ]
  },
  "node_modules/vike/dist/esm/client/server-routing-runtime/entry.js": {
    "file": "assets/entries/entry-server-routing.DWqiBHZl.js",
    "name": "entries/entry-server-routing",
    "src": "node_modules/vike/dist/esm/client/server-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-XhNS7_By.js"
    ],
    "dynamicImports": [
      "src/pages/detail/Detail.page.tsx"
    ]
  },
  "src/pages/detail/Detail.page.tsx": {
    "file": "assets/entries/src_pages_detail_Detail.page.DHAguQqq.js",
    "name": "entries/src/pages/detail/Detail.page",
    "src": "src/pages/detail/Detail.page.tsx",
    "isEntry": true,
    "isDynamicEntry": true
  }
};
  const pluginManifest = {
    "version": "0.4.218",
    "usesClientRouter": false,
    "baseServer": "/SM-137-Frontend/",
    "baseAssets": "/SM-137-Frontend/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
