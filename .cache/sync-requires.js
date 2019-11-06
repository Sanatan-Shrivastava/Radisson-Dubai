const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/sanatan/Radisson-Dubai/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/sanatan/Radisson-Dubai/src/pages/404.js"))),
  "component---src-pages-aboutus-js": hot(preferDefault(require("/Users/sanatan/Radisson-Dubai/src/pages/aboutus.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/Users/sanatan/Radisson-Dubai/src/pages/elements.js"))),
  "component---src-pages-generic-js": hot(preferDefault(require("/Users/sanatan/Radisson-Dubai/src/pages/generic.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/sanatan/Radisson-Dubai/src/pages/index.js"))),
  "component---src-pages-landing-js": hot(preferDefault(require("/Users/sanatan/Radisson-Dubai/src/pages/landing.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/Users/sanatan/Radisson-Dubai/src/pages/login.js"))),
  "component---src-pages-register-js": hot(preferDefault(require("/Users/sanatan/Radisson-Dubai/src/pages/register.js"))),
  "component---src-pages-custom-js": hot(preferDefault(require("/Users/sanatan/Radisson-Dubai/src/pages/custom.js")))
}

