"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Components/Card.jsx":
/*!*****************************!*\
  !*** ./Components/Card.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Card = (param)=>{\n    let { allCampaign , setOpenModel , setDonate , title  } = param;\n    console.log(allCampaign);\n    const daysLeft = (deadline)=>{\n        const difference = new Date(deadline).getTime() - Date.now();\n        const remainingDays = difference / (1000 * 3600 * 24);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Card\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\Card.jsx\",\n        lineNumber: 11,\n        columnNumber: 10\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxPQUFPLFNBQXFEO1FBQXBELEVBQUVDLFlBQVcsRUFBRUMsYUFBWSxFQUFFQyxVQUFTLEVBQUVDLE1BQUssRUFBRTtJQUMzREMsUUFBUUMsR0FBRyxDQUFDTDtJQUVaLE1BQU1NLFdBQVcsQ0FBQ0MsV0FBYTtRQUM3QixNQUFNQyxhQUFhLElBQUlDLEtBQUtGLFVBQVVHLE9BQU8sS0FBS0QsS0FBS0UsR0FBRztRQUMxRCxNQUFNQyxnQkFBZ0JKLGFBQVksUUFBSyxPQUFLLEVBQUM7SUFDL0M7SUFFQSxxQkFBTyw4REFBQ0s7a0JBQUk7Ozs7OztBQUNkO0tBVE1kO0FBV04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DYXJkLmpzeD9lOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENhcmQgPSAoeyBhbGxDYW1wYWlnbiwgc2V0T3Blbk1vZGVsLCBzZXREb25hdGUsIHRpdGxlIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhhbGxDYW1wYWlnbik7ICBcclxuXHJcbiAgY29uc3QgZGF5c0xlZnQgPSAoZGVhZGxpbmUpID0+IHtcclxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBuZXcgRGF0ZShkZWFkbGluZSkuZ2V0VGltZSgpIC0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IHJlbWFpbmluZ0RheXMgPSBkaWZmZXJlbmNlLygxMDAwKjM2MDAqMjQpO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gPGRpdj5DYXJkPC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsImFsbENhbXBhaWduIiwic2V0T3Blbk1vZGVsIiwic2V0RG9uYXRlIiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwiZGF5c0xlZnQiLCJkZWFkbGluZSIsImRpZmZlcmVuY2UiLCJEYXRlIiwiZ2V0VGltZSIsIm5vdyIsInJlbWFpbmluZ0RheXMiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Card.jsx\n"));

/***/ })

});