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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Card = (param)=>{\n    let { allCampaign , setOpenModel , setDonate , title  } = param;\n    console.log(allCampaign);\n    const daysLeft = (deadline)=>{\n        const difference = new Date(deadline).getTime() - Date.now();\n        const remainingDays = difference / (1000 * 3600 * 24);\n        return remainingDays.toFixed(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"py-16 text-2xl font-bold leading-5\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\Card.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full\",\n                children: allCampaign === null || allCampaign === void 0 ? void 0 : allCampaign.map((campaign, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>(setDonate(campaign), setOpenModel(true))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\Card.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\Card.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\Card.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxPQUFPLFNBQXFEO1FBQXBELEVBQUVDLFlBQVcsRUFBRUMsYUFBWSxFQUFFQyxVQUFTLEVBQUVDLE1BQUssRUFBRTtJQUMzREMsUUFBUUMsR0FBRyxDQUFDTDtJQUVaLE1BQU1NLFdBQVcsQ0FBQ0MsV0FBYTtRQUM3QixNQUFNQyxhQUFhLElBQUlDLEtBQUtGLFVBQVVHLE9BQU8sS0FBS0QsS0FBS0UsR0FBRztRQUMxRCxNQUFNQyxnQkFBZ0JKLGFBQVksUUFBSyxPQUFLLEVBQUM7UUFDN0MsT0FBT0ksY0FBY0MsT0FBTyxDQUFDO0lBQy9CO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVk7OzBCQUNmLDhEQUFDQztnQkFBRUQsV0FBWTswQkFBdUNaOzs7Ozs7MEJBQ3RELDhEQUFDVztnQkFBSUMsV0FBWTswQkFDZGYsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhaUIsR0FBRyxDQUFDLENBQUNDLFVBQVVDLGtCQUMzQiw4REFBQ0w7d0JBQ0NNLFNBQVcsSUFBT2xCLENBQUFBLFVBQVVnQixXQUFXakIsYUFBYSxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JFO0tBdEJNRjtBQXdCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0NhcmQuanN4P2U5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7IGFsbENhbXBhaWduLCBzZXRPcGVuTW9kZWwsIHNldERvbmF0ZSwgdGl0bGUgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGFsbENhbXBhaWduKTsgIFxyXG5cclxuICBjb25zdCBkYXlzTGVmdCA9IChkZWFkbGluZSkgPT4ge1xyXG4gICAgY29uc3QgZGlmZmVyZW5jZSA9IG5ldyBEYXRlKGRlYWRsaW5lKS5nZXRUaW1lKCkgLSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgcmVtYWluaW5nRGF5cyA9IGRpZmZlcmVuY2UvKDEwMDAqMzYwMCoyNCk7XHJcbiAgICByZXR1cm4gcmVtYWluaW5nRGF5cy50b0ZpeGVkKDApO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZSA9ICdweC00IHB5LTE2IG14LWF1dG8gc206bWF4LXcteGwgbWQ6bWF4LXctZnVsbCBsZzptYXgtdy1zY3JlZW4teGwgbWQ6cHgtMjQgbGc6cHgtOCBsZzpweS0yMCc+XHJcbiAgICAgIDxwIGNsYXNzTmFtZSA9ICdweS0xNiB0ZXh0LTJ4bCBmb250LWJvbGQgbGVhZGluZy01Jz57IHRpdGxlIH08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2dyaWQgZ2FwLTUgbGc6Z3JpZC1jb2xzLTMgc206bWF4LXctc20gc206bXgtYXV0byBsZzptYXgtdy1mdWxsJz5cclxuICAgICAgICB7YWxsQ2FtcGFpZ24/Lm1hcCgoY2FtcGFpZ24sIGkpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiAoc2V0RG9uYXRlKGNhbXBhaWduKSwgc2V0T3Blbk1vZGVsKHRydWUpKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiYWxsQ2FtcGFpZ24iLCJzZXRPcGVuTW9kZWwiLCJzZXREb25hdGUiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJkYXlzTGVmdCIsImRlYWRsaW5lIiwiZGlmZmVyZW5jZSIsIkRhdGUiLCJnZXRUaW1lIiwibm93IiwicmVtYWluaW5nRGF5cyIsInRvRml4ZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiY2FtcGFpZ24iLCJpIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Card.jsx\n"));

/***/ })

});