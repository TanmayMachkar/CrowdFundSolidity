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

/***/ "./Components/PopUp.jsx":
/*!******************************!*\
  !*** ./Components/PopUp.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst PopUp = (param)=>{\n    let { setOpenModel , donate , donateFunction , getDonations  } = param;\n    _s();\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); //set amount donated by person in state variable\n    const [allDonationData, setAllDonationData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const createDonation = async ()=>{\n        try {\n            const data = await donateFunction(donate.pId, amount);\n            console.log(data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const donationListData = getDonations(donate.pId);\n        return async ()=>{\n            const donationData = await donationListData;\n            setAllDonationData(donationData);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-3xl font-semibold\",\n                            children: donate.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\PopUp.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                            onClick: ()=>setOpenModel(false)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\PopUp.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\PopUp.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\PopUp.jsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\PopUp.jsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Components\\\\PopUp.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PopUp, \"ln037coF/ElUz/07fUnqvtiajlE=\");\n_c = PopUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopUp);\nvar _c;\n$RefreshReg$(_c, \"PopUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL1BvcFVwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBRW5ELE1BQU1HLFFBQVEsU0FBNEQ7UUFBM0QsRUFBRUMsYUFBWSxFQUFFQyxPQUFNLEVBQUVDLGVBQWMsRUFBRUMsYUFBWSxFQUFFOztJQUNuRSxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUMsS0FBSyxnREFBZ0Q7SUFDMUYsTUFBTSxDQUFDUyxpQkFBaUJDLG1CQUFtQixHQUFHViwrQ0FBUUE7SUFFdEQsTUFBTVcsaUJBQWlCLFVBQVc7UUFDaEMsSUFBRztZQUNELE1BQU1DLE9BQU8sTUFBTVAsZUFBZUQsT0FBT1MsR0FBRyxFQUFFTjtZQUM5Q08sUUFBUUMsR0FBRyxDQUFDSDtRQUNkLEVBQUUsT0FBTUksT0FBTTtZQUNaRixRQUFRQyxHQUFHLENBQUNDO1FBQ2Q7SUFDRjtJQUVBZixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWdCLG1CQUFtQlgsYUFBYUYsT0FBT1MsR0FBRztRQUNoRCxPQUFPLFVBQVc7WUFDaEIsTUFBTUssZUFBZSxNQUFNRDtZQUMzQlAsbUJBQW1CUTtRQUNyQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFZO2tCQUNmLDRFQUFDRDtZQUFJQyxXQUFZO3NCQUVmLDRFQUFDRDtnQkFBSUMsV0FBWTswQkFFZiw0RUFBQ0Q7b0JBQUlDLFdBQVk7O3NDQUNmLDhEQUFDQzs0QkFBR0QsV0FBWTtzQ0FDYmhCLE9BQU9rQixLQUFLOzs7Ozs7c0NBRWYsOERBQUNDOzRCQUNDSCxXQUFZOzRCQUNaSSxTQUFXLElBQU1yQixhQUFhLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqRDtHQXpDTUQ7S0FBQUE7QUEyQ04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3BVcC5qc3g/MWM2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUG9wVXAgPSAoeyBzZXRPcGVuTW9kZWwsIGRvbmF0ZSwgZG9uYXRlRnVuY3Rpb24sIGdldERvbmF0aW9ucyB9KSA9PiB7XHJcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKFwiXCIpOyAvL3NldCBhbW91bnQgZG9uYXRlZCBieSBwZXJzb24gaW4gc3RhdGUgdmFyaWFibGVcclxuICBjb25zdCBbYWxsRG9uYXRpb25EYXRhLCBzZXRBbGxEb25hdGlvbkRhdGFdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlRG9uYXRpb24gPSBhc3luYygpID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRvbmF0ZUZ1bmN0aW9uKGRvbmF0ZS5wSWQsIGFtb3VudCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfSBjYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkb25hdGlvbkxpc3REYXRhID0gZ2V0RG9uYXRpb25zKGRvbmF0ZS5wSWQpO1xyXG4gICAgcmV0dXJuIGFzeW5jKCkgPT4ge1xyXG4gICAgICBjb25zdCBkb25hdGlvbkRhdGEgPSBhd2FpdCBkb25hdGlvbkxpc3REYXRhO1xyXG4gICAgICBzZXRBbGxEb25hdGlvbkRhdGEoZG9uYXRpb25EYXRhKTtcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWUgPSAnanVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXggb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIGZpeGVkIGluc2V0LTAgei01MCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAncmVsYXRpdmUgdy1hdXRvIG15LTYgbXgtYXV0byBtYXgtdy0zeGwnPlxyXG4gICAgICAgIHsvKntjb250ZW50fSovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2JvcmRlci0wIHJvdW5kZWQtbGcgc2hhZG93LWxnIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgdy1mdWxsIGJnLXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUnPlxyXG4gICAgICAgICAgey8qaGVhZGVyKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwLTUgYm9yZGVyLWIgYm9yZGVyLXNvbGlkIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC10Jz5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZSA9ICd0ZXh0LTN4bCBmb250LXNlbWlib2xkJz5cclxuICAgICAgICAgICAgICB7ZG9uYXRlLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJ3AtMSBtbC1hdXRvIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wIHRleHQtYmxhY2sgb3BhY2l0eS01IGZsb2F0LXJpZ2h0IHRleHQtM3hsIGxlYWRpbmctbm9uZSBmb250LXNlbWlib2xkIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUnXHJcbiAgICAgICAgICAgICAgb25DbGljayA9IHsoKSA9PiBzZXRPcGVuTW9kZWwoZmFsc2UpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcFVwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBvcFVwIiwic2V0T3Blbk1vZGVsIiwiZG9uYXRlIiwiZG9uYXRlRnVuY3Rpb24iLCJnZXREb25hdGlvbnMiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJhbGxEb25hdGlvbkRhdGEiLCJzZXRBbGxEb25hdGlvbkRhdGEiLCJjcmVhdGVEb25hdGlvbiIsImRhdGEiLCJwSWQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkb25hdGlvbkxpc3REYXRhIiwiZG9uYXRpb25EYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJ0aXRsZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/PopUp.jsx\n"));

/***/ })

});