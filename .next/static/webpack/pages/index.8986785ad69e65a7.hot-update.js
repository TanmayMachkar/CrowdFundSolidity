"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context_CrowdFunding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/CrowdFunding */ \"./Context/CrowdFunding.js\");\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst index = ()=>{\n    _s();\n    const { titleData , getCampaigns , createCampaign , donate , getUserCampaigns , getDonations  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_CrowdFunding__WEBPACK_IMPORTED_MODULE_2__.CrowdFundingContext);\n    const [allCampaign, setAllCampaign] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [userCampaign, setUserCampaign] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getCampaignsData = getCampaigns();\n        const userCampaignsData = getUserCampaigns();\n        return async ()=>{\n            const allData = await getCampaignsData;\n            const userData = await userCampaignsData;\n            setAllCampaign(allData);\n            setUserCampaign(userData);\n        };\n    }, []);\n    //donate popup model\n    const [openModel, setOpenModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [donateCampaign, setDonateCampaign] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    console.log(donateCampaign);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Hero, {\n                titleData: titleData,\n                createCampaign: createCampaign\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\pages\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-y-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                        title: \"All Listed Campaign\",\n                        allCampaign: allCampaign,\n                        setOpenModel: setOpenModel,\n                        setDonate: setDonateCampaign\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                        title: \"Your Created Campaigns\",\n                        allCampaign: userCampaign,\n                        setOpenModel: setOpenModel,\n                        setDonate: setDonateCampaign\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\pages\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            openModel && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.PopUp, {\n                setOpenModel: setOpenModel,\n                getDonations: getDonations,\n                donate: donateCampaign,\n                donateFunction: donate\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\pages\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\pages\\\\index.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"9UCwbDrXOcmqLfR19JEh9SrLxDQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0Q7QUFDRDtBQUNaO0FBRWxELE1BQU1RLFFBQVEsSUFBTTs7SUFDbEIsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLGFBQVksRUFBRUMsZUFBYyxFQUFFQyxPQUFNLEVBQUVDLGlCQUFnQixFQUFFQyxhQUFZLEVBQUUsR0FBR2IsaURBQVVBLENBQUNHLHNFQUFtQkE7SUFFMUgsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQTtJQUM5QyxNQUFNLENBQUNlLGNBQWNDLGdCQUFnQixHQUFHaEIsK0NBQVFBO0lBRWhEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWdCLG1CQUFtQlQ7UUFDekIsTUFBTVUsb0JBQW9CUDtRQUMxQixPQUFPLFVBQVc7WUFDaEIsTUFBTVEsVUFBVSxNQUFNRjtZQUN0QixNQUFNRyxXQUFXLE1BQU1GO1lBQ3ZCSixlQUFlSztZQUNmSCxnQkFBZ0JJO1FBQ2xCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsb0JBQW9CO0lBQ3BCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHdEIsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNLENBQUN1QixnQkFBZUMsa0JBQWtCLEdBQUd4QiwrQ0FBUUE7SUFFbkR5QixRQUFRQyxHQUFHLENBQUNIO0lBQ1oscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ3hCLDZDQUFJQTtnQkFBQ0ksV0FBYUE7Z0JBQVdFLGdCQUFrQkE7Ozs7OzswQkFDaEQsOERBQUNrQjtnQkFBS0MsV0FBWTs7a0NBQ2xCLDhEQUFDeEIsNkNBQUlBO3dCQUNIeUIsT0FBUTt3QkFDUmhCLGFBQWVBO3dCQUNmUyxjQUFnQkE7d0JBQ2hCUSxXQUFhTjs7Ozs7O2tDQUVmLDhEQUFDcEIsNkNBQUlBO3dCQUNIeUIsT0FBUTt3QkFDUmhCLGFBQWVFO3dCQUNmTyxjQUFnQkE7d0JBQ2hCUSxXQUFhTjs7Ozs7Ozs7Ozs7O1lBR2RILDJCQUNDLDhEQUFDaEIsOENBQUtBO2dCQUNKaUIsY0FBZ0JBO2dCQUNoQlYsY0FBZ0JBO2dCQUNoQkYsUUFBVWE7Z0JBQ1ZRLGdCQUFrQnJCOzs7Ozs7Ozs7Ozs7QUFLNUI7R0FqRE1KO0FBbUROLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ3Jvd2RGdW5kaW5nQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQvQ3Jvd2RGdW5kaW5nJztcclxuaW1wb3J0IHsgSGVybywgQ2FyZCwgUG9wVXAgfSBmcm9tICcuLi9Db21wb25lbnRzJztcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGVEYXRhLCBnZXRDYW1wYWlnbnMsIGNyZWF0ZUNhbXBhaWduLCBkb25hdGUsIGdldFVzZXJDYW1wYWlnbnMsIGdldERvbmF0aW9ucyB9ID0gdXNlQ29udGV4dChDcm93ZEZ1bmRpbmdDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW2FsbENhbXBhaWduLCBzZXRBbGxDYW1wYWlnbl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt1c2VyQ2FtcGFpZ24sIHNldFVzZXJDYW1wYWlnbl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0Q2FtcGFpZ25zRGF0YSA9IGdldENhbXBhaWducygpO1xyXG4gICAgY29uc3QgdXNlckNhbXBhaWduc0RhdGEgPSBnZXRVc2VyQ2FtcGFpZ25zKCk7XHJcbiAgICByZXR1cm4gYXN5bmMoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFsbERhdGEgPSBhd2FpdCBnZXRDYW1wYWlnbnNEYXRhO1xyXG4gICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHVzZXJDYW1wYWlnbnNEYXRhO1xyXG4gICAgICBzZXRBbGxDYW1wYWlnbihhbGxEYXRhKTtcclxuICAgICAgc2V0VXNlckNhbXBhaWduKHVzZXJEYXRhKTtcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgLy9kb25hdGUgcG9wdXAgbW9kZWxcclxuICBjb25zdCBbb3Blbk1vZGVsLCBzZXRPcGVuTW9kZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkb25hdGVDYW1wYWlnbixzZXREb25hdGVDYW1wYWlnbl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zb2xlLmxvZyhkb25hdGVDYW1wYWlnbik7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlcm8gdGl0bGVEYXRhID0ge3RpdGxlRGF0YX0gY3JlYXRlQ2FtcGFpZ24gPSB7Y3JlYXRlQ2FtcGFpZ259Lz5cclxuICAgICAgPGRpdiAgY2xhc3NOYW1lID0gJ292ZXJmbG93LXktaGlkZGVuJz5cclxuICAgICAgPENhcmRcclxuICAgICAgICB0aXRsZSA9ICdBbGwgTGlzdGVkIENhbXBhaWduJ1xyXG4gICAgICAgIGFsbENhbXBhaWduID0ge2FsbENhbXBhaWdufVxyXG4gICAgICAgIHNldE9wZW5Nb2RlbCA9IHtzZXRPcGVuTW9kZWx9XHJcbiAgICAgICAgc2V0RG9uYXRlID0ge3NldERvbmF0ZUNhbXBhaWdufVxyXG4gICAgICAvPlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIHRpdGxlID0gJ1lvdXIgQ3JlYXRlZCBDYW1wYWlnbnMnXHJcbiAgICAgICAgYWxsQ2FtcGFpZ24gPSB7dXNlckNhbXBhaWdufVxyXG4gICAgICAgIHNldE9wZW5Nb2RlbCA9IHtzZXRPcGVuTW9kZWx9XHJcbiAgICAgICAgc2V0RG9uYXRlID0ge3NldERvbmF0ZUNhbXBhaWdufSAvL2NoZWNraW5nIGhvdyBtYW55IHVzZXJzIGhhdmUgZG9uYXRlZCArIGl0J3MgZGV0YWlscyBcclxuICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtvcGVuTW9kZWwgJiYgKFxyXG4gICAgICAgIDxQb3BVcFxyXG4gICAgICAgICAgc2V0T3Blbk1vZGVsID0ge3NldE9wZW5Nb2RlbH1cclxuICAgICAgICAgIGdldERvbmF0aW9ucyA9IHtnZXREb25hdGlvbnN9XHJcbiAgICAgICAgICBkb25hdGUgPSB7ZG9uYXRlQ2FtcGFpZ259XHJcbiAgICAgICAgICBkb25hdGVGdW5jdGlvbiA9IHtkb25hdGV9XHJcbiAgICAgICAgLz4gIFxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDcm93ZEZ1bmRpbmdDb250ZXh0IiwiSGVybyIsIkNhcmQiLCJQb3BVcCIsImluZGV4IiwidGl0bGVEYXRhIiwiZ2V0Q2FtcGFpZ25zIiwiY3JlYXRlQ2FtcGFpZ24iLCJkb25hdGUiLCJnZXRVc2VyQ2FtcGFpZ25zIiwiZ2V0RG9uYXRpb25zIiwiYWxsQ2FtcGFpZ24iLCJzZXRBbGxDYW1wYWlnbiIsInVzZXJDYW1wYWlnbiIsInNldFVzZXJDYW1wYWlnbiIsImdldENhbXBhaWduc0RhdGEiLCJ1c2VyQ2FtcGFpZ25zRGF0YSIsImFsbERhdGEiLCJ1c2VyRGF0YSIsIm9wZW5Nb2RlbCIsInNldE9wZW5Nb2RlbCIsImRvbmF0ZUNhbXBhaWduIiwic2V0RG9uYXRlQ2FtcGFpZ24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzZXREb25hdGUiLCJkb25hdGVGdW5jdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});