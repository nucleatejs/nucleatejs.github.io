webpackJsonp([2],{

/***/ 433:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"layout":["/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/nucleate/lib/webpack/loaders/layout-loader.js","/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js","/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes"],"meta":["/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js","/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes"],"markdown":["/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/raw-loader/index.js","/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyBody"]}!./src/pages/statinamic.md ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = {\"layout\": __webpack_require__(/*! -!./~/nucleate/lib/webpack/loaders/layout-loader.js!./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/statinamic.md */ 496),\"meta\": __webpack_require__(/*! -!./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/statinamic.md */ 477),\"markdown\": __webpack_require__(/*! -!./~/raw-loader!./~/front-matter-loader?onlyBody!./src/pages/statinamic.md */ 517)}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/combine-loader/lib?{\"layout\":[\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/nucleate/lib/webpack/loaders/layout-loader.js\",\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js\",\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes\"],\"meta\":[\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js\",\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes\"],\"markdown\":[\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/raw-loader/index.js\",\"/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyBody\"]}!./src/pages/statinamic.md\n ** module id = 433\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/pages/statinamic.md?./~/combine-loader/lib?%7B%22layout%22:%5B%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/nucleate/lib/webpack/loaders/layout-loader.js%22,%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js%22,%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes%22%5D,%22meta%22:%5B%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/json-loader/index.js%22,%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyAttributes%22%5D,%22markdown%22:%5B%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/raw-loader/index.js%22,%22/Users/spencerelliott/Dev/nucleate/nucleate.github.io/~/front-matter-loader?onlyBody%22%5D%7D");

/***/ },

/***/ 477:
/*!****************************************************************************************!*\
  !*** ./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/statinamic.md ***!
  \****************************************************************************************/
/***/ function(module, exports) {

	eval("module.exports = {\n\t\"title\": \"Comparison with Statinamic\"\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/statinamic.md\n ** module id = 477\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/pages/statinamic.md?./~/json-loader!./~/front-matter-loader?onlyAttributes");

/***/ },

/***/ 496:
/*!******************************************************************************************************************************************!*\
  !*** ./~/nucleate/lib/webpack/loaders/layout-loader.js!./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/statinamic.md ***!
  \******************************************************************************************************************************************/
/***/ function(module, exports) {

	eval("module.exports = undefined;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/nucleate/lib/webpack/loaders/layout-loader.js!./~/json-loader!./~/front-matter-loader?onlyAttributes!./src/pages/statinamic.md\n ** module id = 496\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/pages/statinamic.md?./~/nucleate/lib/webpack/loaders/layout-loader.js!./~/json-loader!./~/front-matter-loader?onlyAttributes");

/***/ },

/***/ 517:
/*!*********************************************************************************!*\
  !*** ./~/raw-loader!./~/front-matter-loader?onlyBody!./src/pages/statinamic.md ***!
  \*********************************************************************************/
/***/ function(module, exports) {

	eval("module.exports = \"\\nCore features of a React-based static site generator:\\n* Use React components to define the structure of layouts & pages, including the root <html>...</html> layout.\\n* Author content using Markdown, with the ability to define arbitrary metadata (e.g. title, description) and specify a custom layout in which the content will be rendered.\\n* Directory-based routing: the path to a page matches its location on the file system.\\n* Static HTML files are generated for *every* route as part of the build step.\\n* Client-side routing is used once a page is loaded by the browser, for instant page transitions.\\n* Able to generate client-side links in both React components *and* Markdown pages.\\n* Able to extend with custom module loaders (e.g. for CoffeeScript or reStructuredText).\\n* Minimal API surface area: by default, little to no configuration should be required to get started, and extending/customizing behaviour should be simple and easy.\\n* Easy-to-use development mode: start a development server with a single command, with in-browser debugging support and sane error messages.\\n* Able to include arbitrary assets (e.g. robots.txt) in the generated static site.\\n* The production-ready static site is optimized for size: at a minimum, JS and CSS are minified.\\n* A sane default 404 page, and the ability to provide a custom one.\\n* A sane API to access all site data from within React components (e.g. to enumerate all pages and their metadata).\\n\\n\\nBonus features:\\n* Hot module replacement: updating a component reloads only the changed component.\\n* Lazily-loaded modules (i.e. code splitting): the initial JS bundle is small; additional modules (e.g. other pages) are downloaded on-the-fly.\\n* Able to define custom path redirects.\\n* Able to serve site on a prefixed path (e.g. a GitHub pages project site).\\n* Able to define a custom path structure for pages based on their metadata, e.g. based on date: `/2015-12-29--some-blog-post`.\\n* Preconfigured project templates are defined for different use cases, e.g. documentation sites / blogs.\\n* Able to persist state between client-side page transitions, e.g. a menu open/close state.\\n* First-class support for localization.\\n* Support for generating [RSS](https://en.wikipedia.org/wiki/RSS) or [Atom](https://en.wikipedia.org/wiki/Atom_(standard)) feeds.\\n* First-class support for GitHub pages: easily publish the static site with a single command.\\n\\n## Features\\n+ Author content using Markdown\\n+\\n\\n## Detractors\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/raw-loader!./~/front-matter-loader?onlyBody!./src/pages/statinamic.md\n ** module id = 517\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/pages/statinamic.md?./~/raw-loader!./~/front-matter-loader?onlyBody");

/***/ }

});