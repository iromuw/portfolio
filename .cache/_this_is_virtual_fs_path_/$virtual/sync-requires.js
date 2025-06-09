
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/moyun/Side-Projects/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/moyun/Side-Projects/portfolio/src/pages/404.js")),
  "component---src-pages-archive-js": preferDefault(require("/Users/moyun/Side-Projects/portfolio/src/pages/archive.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/moyun/Side-Projects/portfolio/src/pages/index.js")),
  "component---src-pages-pensieve-index-js": preferDefault(require("/Users/moyun/Side-Projects/portfolio/src/pages/pensieve/index.js")),
  "component---src-pages-pensieve-tags-js": preferDefault(require("/Users/moyun/Side-Projects/portfolio/src/pages/pensieve/tags.js")),
  "component---src-templates-post-js": preferDefault(require("/Users/moyun/Side-Projects/portfolio/src/templates/post.js")),
  "component---src-templates-tag-js": preferDefault(require("/Users/moyun/Side-Projects/portfolio/src/templates/tag.js"))
}

