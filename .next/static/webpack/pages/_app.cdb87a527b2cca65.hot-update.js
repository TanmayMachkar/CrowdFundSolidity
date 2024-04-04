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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Card = (param)=>{\n    let { allCampaign , setOpenModel , setDonate , title  } = param;\n    console.log(allCampaign);\n    const daysLeft = (deadline)=>{\n        const difference = new Date(deadline).getTime() - Date.now();\n        const remainingDays = difference / (1000 * 3600 * 24);\n        return remainingDays.toFixed(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"py-16 text-2xl font-bold leading-5\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\Card.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full\",\n                children: allCampaign === null || allCampaign === void 0 ? void 0 : allCampaign.map((campaign, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>(setDonate(campaign), setOpenModel(true)),\n                        className: \"cursor-pointer border overflow-hidden transition-shadow duration-300 bg-white rounded\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260\",\n                            className: \"object-cover w-full h-64 rounded\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\Card.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 12\n                        }, undefined)\n                    }, i + 1, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\Card.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\Card.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\Card.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxPQUFPLFNBQXFEO1FBQXBELEVBQUVDLFlBQVcsRUFBRUMsYUFBWSxFQUFFQyxVQUFTLEVBQUVDLE1BQUssRUFBRTtJQUMzREMsUUFBUUMsR0FBRyxDQUFDTDtJQUVaLE1BQU1NLFdBQVcsQ0FBQ0MsV0FBYTtRQUM3QixNQUFNQyxhQUFhLElBQUlDLEtBQUtGLFVBQVVHLE9BQU8sS0FBS0QsS0FBS0UsR0FBRztRQUMxRCxNQUFNQyxnQkFBZ0JKLGFBQVksUUFBSyxPQUFLLEVBQUM7UUFDN0MsT0FBT0ksY0FBY0MsT0FBTyxDQUFDO0lBQy9CO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVk7OzBCQUNmLDhEQUFDQztnQkFBRUQsV0FBWTswQkFBdUNaOzs7Ozs7MEJBQ3RELDhEQUFDVztnQkFBSUMsV0FBWTswQkFDZGYsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhaUIsR0FBRyxDQUFDLENBQUNDLFVBQVVDLGtCQUMzQiw4REFBQ0w7d0JBQ0NNLFNBQVcsSUFBT2xCLENBQUFBLFVBQVVnQixXQUFXakIsYUFBYSxJQUFJLENBQUM7d0JBRXpEYyxXQUFZO2tDQUViLDRFQUFDTTs0QkFDQUMsS0FBTTs0QkFDTlAsV0FBWTs0QkFDWlEsS0FBTTs7Ozs7O3VCQU5DSixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FBYXZCO0tBN0JNcEI7QUErQk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9DYXJkLmpzeD9lOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENhcmQgPSAoeyBhbGxDYW1wYWlnbiwgc2V0T3Blbk1vZGVsLCBzZXREb25hdGUsIHRpdGxlIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhhbGxDYW1wYWlnbik7ICBcclxuXHJcbiAgY29uc3QgZGF5c0xlZnQgPSAoZGVhZGxpbmUpID0+IHtcclxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBuZXcgRGF0ZShkZWFkbGluZSkuZ2V0VGltZSgpIC0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IHJlbWFpbmluZ0RheXMgPSBkaWZmZXJlbmNlLygxMDAwKjM2MDAqMjQpO1xyXG4gICAgcmV0dXJuIHJlbWFpbmluZ0RheXMudG9GaXhlZCgwKTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWUgPSAncHgtNCBweS0xNiBteC1hdXRvIHNtOm1heC13LXhsIG1kOm1heC13LWZ1bGwgbGc6bWF4LXctc2NyZWVuLXhsIG1kOnB4LTI0IGxnOnB4LTggbGc6cHktMjAnPlxyXG4gICAgICA8cCBjbGFzc05hbWUgPSAncHktMTYgdGV4dC0yeGwgZm9udC1ib2xkIGxlYWRpbmctNSc+eyB0aXRsZSB9PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdncmlkIGdhcC01IGxnOmdyaWQtY29scy0zIHNtOm1heC13LXNtIHNtOm14LWF1dG8gbGc6bWF4LXctZnVsbCc+XHJcbiAgICAgICAge2FsbENhbXBhaWduPy5tYXAoKGNhbXBhaWduLCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4gKHNldERvbmF0ZShjYW1wYWlnbiksIHNldE9wZW5Nb2RlbCh0cnVlKSl9XHJcbiAgICAgICAgICAgIGtleSA9IHtpICsgMX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lID0gJ2N1cnNvci1wb2ludGVyIGJvcmRlciBvdmVyZmxvdy1oaWRkZW4gdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMzAwIGJnLXdoaXRlIHJvdW5kZWQnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmMgPSAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvOTMyNjM4L3BleGVscy1waG90by05MzI2MzguanBlZz9hdXRvPWNvbXByZXNzJmFtcDtjcz10aW55c3JnYiZhbXA7ZHByPTMmYW1wO2g9NzUwJmFtcDt3PTEyNjAnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9ICdvYmplY3QtY292ZXIgdy1mdWxsIGgtNjQgcm91bmRlZCdcclxuICAgICAgICAgICAgYWx0ID0gJydcclxuICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJhbGxDYW1wYWlnbiIsInNldE9wZW5Nb2RlbCIsInNldERvbmF0ZSIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImRheXNMZWZ0IiwiZGVhZGxpbmUiLCJkaWZmZXJlbmNlIiwiRGF0ZSIsImdldFRpbWUiLCJub3ciLCJyZW1haW5pbmdEYXlzIiwidG9GaXhlZCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJjYW1wYWlnbiIsImkiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Card.jsx\n"));

/***/ })

});