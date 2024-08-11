/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 545:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 96:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(545);
const github = __nccwpck_require__(96);

const fs = __nccwpck_require__(147);
const path = __nccwpck_require__(17);

// Contents/mods/MODNAME
const modName = core.getInput('modName')
const workshopModFullDir = path.join("Contents", "mods", modName);
fs.mkdirSync(workshopModFullDir, { recursive: true });


// Various locations
const mediaFolder = path.join("media");
fs.cpSync(mediaFolder, path.join(workshopModFullDir, "media"), { recursive: true });

// Root files
const rootFilesToCopy = ["workshop.txt", "preview.png"];
for (const file of rootFilesToCopy) {
    try {
        const sourcePath = path.join("workshop_files", file);
        fs.copyFileSync(sourcePath, path.join(workshopModRootDir, file));
    } catch (error) {
        console.log("Error copying " + file);
    }
}

////////////

const modFilesToCopy = ["mod.info", "poster.png", "icon.png"];
for (const file of modFilesToCopy) {
    try {
        const sourcePath = path.join(file);
        fs.copyFileSync(sourcePath, path.join(workshopModFullDir, file));
    } catch (error) {
        console.log("Error copying " + file);
    }
}

// TODO: change mod.info with additional_text

console.log("All done!");
})();

module.exports = __webpack_exports__;
/******/ })()
;