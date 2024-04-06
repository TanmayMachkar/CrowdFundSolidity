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

/***/ "./Context/CrowdFunding.js":
/*!*********************************!*\
  !*** ./Context/CrowdFunding.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CrowdFundingContext\": function() { return /* binding */ CrowdFundingContext; },\n/* harmony export */   \"CrowdFundingProvider\": function() { return /* binding */ CrowdFundingProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./Context/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst fetchContract = (signerOrProvider)=>{\n    return new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_constants__WEBPACK_IMPORTED_MODULE_3__.CrowdFundingAddress, _constants__WEBPACK_IMPORTED_MODULE_3__.CrowdFundingABI, signerOrProvider);\n};\nconst CrowdFundingContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst CrowdFundingProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const titleData = \"Crowd Funding Contract\";\n    const [currentAccount, setCurrentAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [openError, setOpenError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const createCampaign = async (campaign)=>{\n        const { title , description , amount , deadline  } = campaign;\n        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())();\n        const connection = await web3Modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(connection);\n        const signer = provider.getSigner();\n        const contract = fetchContract(signer);\n        console.log(currentAccount);\n        try {\n            const transaction = await contract.createCampaign(currentAccount, title, description, ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseUnits(amount, 18), new Date(deadline).getTime());\n            await transaction.wait();\n            console.log(\"Contract called succesfully\", transaction);\n        } catch (error) {\n            console.log(\"contract call failure\", error);\n        }\n    };\n    const getCampaigns = async ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.JsonRpcProvider(\"https://polygon-mumbai-bor-rpc.publicnode.com\");\n        const contract = fetchContract(provider);\n        const campaigns = await contract.getCampaigns();\n        const parsedCampaigns = campaigns.map((campaign, i)=>({\n                owner: campaign.owner,\n                title: campaign.title,\n                description: campaign.description,\n                target: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(campaign.target.toString()),\n                deadline: campaign.deadline.toNumber(),\n                amountCollected: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(campaign.amountCollected.toString()),\n                pId: i\n            }));\n        return parsedCampaigns;\n    };\n    const getUserCampaigns = async ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.JsonRpcProvider(\"https://polygon-mumbai-bor-rpc.publicnode.com\");\n        const contract = fetchContract(provider);\n        const allCampaigns = await contract.getCampaigns();\n        const accounts = await window.ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        const currentUser = accounts[0];\n        const filteredCampaigns = allCampaigns.filter((campaign)=>campaign.owner === currentUser);\n        console.log(currentAccount);\n        const userData = filteredCampaigns.map((campaign, i)=>({\n                owner: campaign.owner,\n                title: campaign.title,\n                description: campaign.description,\n                target: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(campaign.target.toString()),\n                deadline: campaign.deadline.toNumber(),\n                amountCollected: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(campaign.amountCollected.toString()),\n                pId: i\n            }));\n        return userData;\n    };\n    const donate = async (pId, amount)=>{\n        //use web3modal whenever we want to change the data of the smart contract(here we are donating therefore the state variables of smart contract will change)\n        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())();\n        const connection = await web3Modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(connection);\n        const signer = provider.getSigner();\n        const contract = fetchContract(signer);\n        const campaignData = await contract.donateToCampaign(pId, {\n            value: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(amount) //whatever amount provided will be converted to ethers\n        });\n        await campaignData.wait();\n        location.reload(); //reload current web page\n        return campaignData;\n    };\n    const getDonations = async (pId)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.JsonRpcProvider(\"https://polygon-mumbai-bor-rpc.publicnode.com\");\n        const contract = fetchContract(provider);\n        const donations = await contract.getDonators(pId);\n        const numberOfDonations = donations[0].length;\n        const parsedDonations = [];\n        for(let i = 0; i < numberOfDonations; i++){\n            parsedDonations.push({\n                donator: donations[0][i],\n                donation: ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(donations[1][i].toString())\n            });\n        }\n        return parsedDonations;\n    };\n    const checkIfWalletConnected = async ()=>{\n        try {\n            if (!window.ethereum) {\n                setOpenError(true);\n                setError(\"Install Metamask\");\n                return;\n            }\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            if (accounts.length) {\n                setCurrentAccount(accounts[0]);\n            } else {\n                console.log(\"No Account Found\");\n            }\n        } catch (error) {\n            console.log(\"Something wrong while connecting to wallet\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkIfWalletConnected();\n    }, []);\n    const connectWallet = async ()=>{\n        try {\n            if (!window.ethereum) return console.log(\"Install Metamask\");\n            const accounts = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.log(\"Error while connecting to wallet\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CrowdFundingContext.Provider, {\n        value: {\n            titleData,\n            currentAccount,\n            createCampaign,\n            getCampaigns,\n            getUserCampaigns,\n            donate,\n            getDonations,\n            checkIfWalletConnected,\n            connectWallet\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\CrowdFundSolidity\\\\Context\\\\CrowdFunding.js\",\n        lineNumber: 172,\n        columnNumber: 3\n    }, undefined);\n};\n_s(CrowdFundingProvider, \"10z0BH0ZNSQSMEywupe9qqKv9a8=\");\n_c = CrowdFundingProvider;\nvar _c;\n$RefreshReg$(_c, \"CrowdFundingProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbnRleHQvQ3Jvd2RGdW5kaW5nLmpzPzVkZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJztcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcclxuXHJcbmltcG9ydCB7IENyb3dkRnVuZGluZ0FkZHJlc3MsIENyb3dkRnVuZGluZ0FCSSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGZldGNoQ29udHJhY3QgPSAoc2lnbmVyT3JQcm92aWRlcikgPT4ge1xyXG5cdHJldHVybiBuZXcgZXRoZXJzLkNvbnRyYWN0KENyb3dkRnVuZGluZ0FkZHJlc3MsIENyb3dkRnVuZGluZ0FCSSwgc2lnbmVyT3JQcm92aWRlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDcm93ZEZ1bmRpbmdDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENyb3dkRnVuZGluZ1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdGNvbnN0IHRpdGxlRGF0YSA9ICdDcm93ZCBGdW5kaW5nIENvbnRyYWN0JztcclxuXHRjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW29wZW5FcnJvciwgc2V0T3BlbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgY3JlYXRlQ2FtcGFpZ24gPSBhc3luYyhjYW1wYWlnbikgPT4ge1xyXG5cdFx0Y29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGFtb3VudCwgZGVhZGxpbmUgfSA9IGNhbXBhaWduO1xyXG5cdFx0Y29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpO1xyXG5cdFx0Y29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XHJcblx0XHRjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuXHRcdGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG5cdFx0Y29uc3QgY29udHJhY3QgPSBmZXRjaENvbnRyYWN0KHNpZ25lcik7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coY3VycmVudEFjY291bnQpO1xyXG5cdFx0dHJ5e1xyXG5cdFx0XHRjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUNhbXBhaWduKFxyXG5cdFx0XHRcdGN1cnJlbnRBY2NvdW50LFxyXG5cdFx0XHRcdHRpdGxlLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uLFxyXG5cdFx0XHRcdGV0aGVycy51dGlscy5wYXJzZVVuaXRzKGFtb3VudCwgMTgpLCAgICAgIC8vY29udmVydCB0YXJnZXQgdmFsdWUgdG8gYmUgaW4gZXRoZXJzLCAxOCBkZW5vdGVkIHVwdG8gMTh0aCBkZWNpbWFsIHBvaW50XHJcblx0XHRcdFx0bmV3IERhdGUoZGVhZGxpbmUpLmdldFRpbWUoKVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiQ29udHJhY3QgY2FsbGVkIHN1Y2Nlc2Z1bGx5XCIsIHRyYW5zYWN0aW9uKTtcclxuXHRcdH0gY2F0Y2goZXJyb3Ipe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImNvbnRyYWN0IGNhbGwgZmFpbHVyZVwiLCBlcnJvcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBnZXRDYW1wYWlnbnMgPSBhc3luYygpID0+IHtcclxuXHRcdGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKFwiaHR0cHM6Ly9wb2x5Z29uLW11bWJhaS1ib3ItcnBjLnB1YmxpY25vZGUuY29tXCIpO1xyXG5cdFx0Y29uc3QgY29udHJhY3QgPSBmZXRjaENvbnRyYWN0KHByb3ZpZGVyKTtcclxuXHJcblx0XHRjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBjb250cmFjdC5nZXRDYW1wYWlnbnMoKTtcclxuXHJcblx0XHRjb25zdCBwYXJzZWRDYW1wYWlnbnMgPSBjYW1wYWlnbnMubWFwKChjYW1wYWlnbiwgaSkgPT4gKHtcclxuXHRcdFx0b3duZXI6IGNhbXBhaWduLm93bmVyLFxyXG5cdFx0XHR0aXRsZTogY2FtcGFpZ24udGl0bGUsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiBjYW1wYWlnbi5kZXNjcmlwdGlvbixcclxuXHRcdFx0dGFyZ2V0OiBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoY2FtcGFpZ24udGFyZ2V0LnRvU3RyaW5nKCkpLFx0Ly90YXJnZXQgcHJvcGVydHkgb2YgZWFjaCBjYW1wYWlnbiBvYmplY3QgaXMgY29udmVydGVkIGZyb20gd2VpIHRvIGV0aGVyIGFuZCBzdG9yZWQgaW4gdGhlIHBhcnNlZENhbXBhaWducyBhcnJheSB1bmRlciB0aGUgdGFyZ2V0IHByb3BlcnR5IG9mIGVhY2ggbmV3IG9iamVjdFxyXG5cdFx0XHRkZWFkbGluZTogY2FtcGFpZ24uZGVhZGxpbmUudG9OdW1iZXIoKSxcclxuXHRcdFx0YW1vdW50Q29sbGVjdGVkOiBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoY2FtcGFpZ24uYW1vdW50Q29sbGVjdGVkLnRvU3RyaW5nKCkpLFxyXG5cdFx0XHRwSWQ6IGlcclxuXHRcdH0pKTtcclxuXHJcblx0XHRyZXR1cm4gcGFyc2VkQ2FtcGFpZ25zO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZ2V0VXNlckNhbXBhaWducyA9IGFzeW5jKCkgPT4ge1x0Ly93aWxsIHJldHVybiBhbGwgY2FtcGFpZ25zIGNyZWF0ZWQgYnkgYSBzaW5nbGUgdXNlclxyXG5cdFx0Y29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoXCJodHRwczovL3BvbHlnb24tbXVtYmFpLWJvci1ycGMucHVibGljbm9kZS5jb21cIik7XHJcblx0XHRjb25zdCBjb250cmFjdCA9IGZldGNoQ29udHJhY3QocHJvdmlkZXIpO1xyXG5cclxuXHRcdGNvbnN0IGFsbENhbXBhaWducyA9IGF3YWl0IGNvbnRyYWN0LmdldENhbXBhaWducygpO1xyXG5cclxuXHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG5cdFx0XHRtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCAvL3JlcXVlc3QgYWNjIG9mIHVzZXJcclxuXHRcdH0pXHJcblx0XHRjb25zdCBjdXJyZW50VXNlciA9IGFjY291bnRzWzBdO1xyXG5cclxuXHRcdGNvbnN0IGZpbHRlcmVkQ2FtcGFpZ25zID0gYWxsQ2FtcGFpZ25zLmZpbHRlcihcclxuXHRcdFx0KGNhbXBhaWduKSA9PlxyXG5cdFx0XHRcdGNhbXBhaWduLm93bmVyID09PSBjdXJyZW50VXNlclxyXG5cdFx0KVxyXG5cclxuXHRcdGNvbnNvbGUubG9nKGN1cnJlbnRBY2NvdW50KVxyXG5cclxuXHRcdGNvbnN0IHVzZXJEYXRhID0gZmlsdGVyZWRDYW1wYWlnbnMubWFwKChjYW1wYWlnbiwgaSkgPT4gKHtcclxuXHRcdFx0b3duZXI6IGNhbXBhaWduLm93bmVyLFxyXG5cdFx0XHR0aXRsZTogY2FtcGFpZ24udGl0bGUsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiBjYW1wYWlnbi5kZXNjcmlwdGlvbixcclxuXHRcdFx0dGFyZ2V0OiBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoY2FtcGFpZ24udGFyZ2V0LnRvU3RyaW5nKCkpLFx0Ly90YXJnZXQgcHJvcGVydHkgb2YgZWFjaCBjYW1wYWlnbiBvYmplY3QgaXMgY29udmVydGVkIGZyb20gd2VpIHRvIGV0aGVyIGFuZCBzdG9yZWQgaW4gdGhlIHBhcnNlZENhbXBhaWducyBhcnJheSB1bmRlciB0aGUgdGFyZ2V0IHByb3BlcnR5IG9mIGVhY2ggbmV3IG9iamVjdFxyXG5cdFx0XHRkZWFkbGluZTogY2FtcGFpZ24uZGVhZGxpbmUudG9OdW1iZXIoKSxcclxuXHRcdFx0YW1vdW50Q29sbGVjdGVkOiBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoY2FtcGFpZ24uYW1vdW50Q29sbGVjdGVkLnRvU3RyaW5nKCkpLFxyXG5cdFx0XHRwSWQ6IGlcclxuXHRcdH0pKVxyXG5cclxuXHRcdHJldHVybiB1c2VyRGF0YTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGRvbmF0ZSA9IGFzeW5jKHBJZCwgYW1vdW50KSA9PiB7XHJcblx0XHQvL3VzZSB3ZWIzbW9kYWwgd2hlbmV2ZXIgd2Ugd2FudCB0byBjaGFuZ2UgdGhlIGRhdGEgb2YgdGhlIHNtYXJ0IGNvbnRyYWN0KGhlcmUgd2UgYXJlIGRvbmF0aW5nIHRoZXJlZm9yZSB0aGUgc3RhdGUgdmFyaWFibGVzIG9mIHNtYXJ0IGNvbnRyYWN0IHdpbGwgY2hhbmdlKVxyXG5cdFx0Y29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpO1xyXG5cdFx0Y29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XHJcblx0XHRjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuXHRcdGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG5cdFx0Y29uc3QgY29udHJhY3QgPSBmZXRjaENvbnRyYWN0KHNpZ25lcik7XHJcblxyXG5cdFx0Y29uc3QgY2FtcGFpZ25EYXRhID0gYXdhaXQgY29udHJhY3QuZG9uYXRlVG9DYW1wYWlnbihwSWQsIHtcclxuXHRcdFx0dmFsdWU6IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKGFtb3VudCkgLy93aGF0ZXZlciBhbW91bnQgcHJvdmlkZWQgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gZXRoZXJzXHJcblx0XHR9KVxyXG5cclxuXHRcdGF3YWl0IGNhbXBhaWduRGF0YS53YWl0KCk7XHJcblx0XHRsb2NhdGlvbi5yZWxvYWQoKTsgLy9yZWxvYWQgY3VycmVudCB3ZWIgcGFnZVxyXG5cclxuXHRcdHJldHVybiBjYW1wYWlnbkRhdGE7XHJcblx0fVxyXG5cclxuXHRjb25zdCBnZXREb25hdGlvbnMgPSBhc3luYyhwSWQpID0+IHtcclxuXHRcdGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKFwiaHR0cHM6Ly9wb2x5Z29uLW11bWJhaS1ib3ItcnBjLnB1YmxpY25vZGUuY29tXCIpO1xyXG5cdFx0Y29uc3QgY29udHJhY3QgPSBmZXRjaENvbnRyYWN0KHByb3ZpZGVyKTtcclxuXHJcblx0XHRjb25zdCBkb25hdGlvbnMgPSBhd2FpdCBjb250cmFjdC5nZXREb25hdG9ycyhwSWQpO1xyXG5cdFx0Y29uc3QgbnVtYmVyT2ZEb25hdGlvbnMgPSBkb25hdGlvbnNbMF0ubGVuZ3RoO1xyXG5cclxuXHRcdGNvbnN0IHBhcnNlZERvbmF0aW9ucyA9IFtdO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGk8bnVtYmVyT2ZEb25hdGlvbnM7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0cGFyc2VkRG9uYXRpb25zLnB1c2goe1xyXG5cdFx0XHRcdGRvbmF0b3I6IGRvbmF0aW9uc1swXVtpXSxcclxuXHRcdFx0XHRkb25hdGlvbjogZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGRvbmF0aW9uc1sxXVtpXS50b1N0cmluZygpKVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwYXJzZWREb25hdGlvbnM7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjaGVja0lmV2FsbGV0Q29ubmVjdGVkID0gYXN5bmMoKSA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRpZighd2luZG93LmV0aGVyZXVtKVxyXG5cdFx0XHR7XHRzZXRPcGVuRXJyb3IodHJ1ZSkgXHJcblx0XHRcdFx0c2V0RXJyb3IoXCJJbnN0YWxsIE1ldGFtYXNrXCIpO1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdG1ldGhvZDogXCJldGhfYWNjb3VudHNcIlxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0aWYoYWNjb3VudHMubGVuZ3RoKXtcclxuXHRcdFx0XHRzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSk7XHJcblx0XHRcdH0gZWxzZXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIk5vIEFjY291bnQgRm91bmRcIik7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2goZXJyb3Ipe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlNvbWV0aGluZyB3cm9uZyB3aGlsZSBjb25uZWN0aW5nIHRvIHdhbGxldFwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjaGVja0lmV2FsbGV0Q29ubmVjdGVkKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMoKSA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRpZighd2luZG93LmV0aGVyZXVtKVxyXG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmxvZyhcIkluc3RhbGwgTWV0YW1hc2tcIik7XHJcblxyXG5cdFx0XHRjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiXHJcblx0XHRcdH0pXHJcblx0XHRcdHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuXHRcdH0gY2F0Y2goZXJyb3Ipe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGNvbm5lY3RpbmcgdG8gd2FsbGV0XCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PENyb3dkRnVuZGluZ0NvbnRleHQuUHJvdmlkZXJcclxuXHRcdFx0dmFsdWUgPSB7e1xyXG5cdFx0XHRcdHRpdGxlRGF0YSxcclxuXHRcdFx0XHRjdXJyZW50QWNjb3VudCxcclxuXHRcdFx0XHRjcmVhdGVDYW1wYWlnbixcclxuXHRcdFx0XHRnZXRDYW1wYWlnbnMsXHJcblx0XHRcdFx0Z2V0VXNlckNhbXBhaWducyxcclxuXHRcdFx0XHRkb25hdGUsXHJcblx0XHRcdFx0Z2V0RG9uYXRpb25zLFxyXG5cdFx0XHRcdGNoZWNrSWZXYWxsZXRDb25uZWN0ZWQsXHJcblx0XHRcdFx0Y29ubmVjdFdhbGxldFxyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9Dcm93ZEZ1bmRpbmdDb250ZXh0LlByb3ZpZGVyPlxyXG5cdCk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldlYjNNb2RhbCIsImV0aGVycyIsIkNyb3dkRnVuZGluZ0FkZHJlc3MiLCJDcm93ZEZ1bmRpbmdBQkkiLCJmZXRjaENvbnRyYWN0Iiwic2lnbmVyT3JQcm92aWRlciIsIkNvbnRyYWN0IiwiQ3Jvd2RGdW5kaW5nQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDcm93ZEZ1bmRpbmdQcm92aWRlciIsImNoaWxkcmVuIiwidGl0bGVEYXRhIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImVycm9yIiwic2V0RXJyb3IiLCJvcGVuRXJyb3IiLCJzZXRPcGVuRXJyb3IiLCJjcmVhdGVDYW1wYWlnbiIsImNhbXBhaWduIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFtb3VudCIsImRlYWRsaW5lIiwid2ViM01vZGFsIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImNvbnRyYWN0IiwiY29uc29sZSIsImxvZyIsInRyYW5zYWN0aW9uIiwidXRpbHMiLCJwYXJzZVVuaXRzIiwiRGF0ZSIsImdldFRpbWUiLCJ3YWl0IiwiZ2V0Q2FtcGFpZ25zIiwiSnNvblJwY1Byb3ZpZGVyIiwiY2FtcGFpZ25zIiwicGFyc2VkQ2FtcGFpZ25zIiwibWFwIiwiaSIsIm93bmVyIiwidGFyZ2V0IiwiZm9ybWF0RXRoZXIiLCJ0b1N0cmluZyIsInRvTnVtYmVyIiwiYW1vdW50Q29sbGVjdGVkIiwicElkIiwiZ2V0VXNlckNhbXBhaWducyIsImFsbENhbXBhaWducyIsImFjY291bnRzIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiY3VycmVudFVzZXIiLCJmaWx0ZXJlZENhbXBhaWducyIsImZpbHRlciIsInVzZXJEYXRhIiwiZG9uYXRlIiwiY2FtcGFpZ25EYXRhIiwiZG9uYXRlVG9DYW1wYWlnbiIsInZhbHVlIiwicGFyc2VFdGhlciIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0RG9uYXRpb25zIiwiZG9uYXRpb25zIiwiZ2V0RG9uYXRvcnMiLCJudW1iZXJPZkRvbmF0aW9ucyIsImxlbmd0aCIsInBhcnNlZERvbmF0aW9ucyIsInB1c2giLCJkb25hdG9yIiwiZG9uYXRpb24iLCJjaGVja0lmV2FsbGV0Q29ubmVjdGVkIiwiY29ubmVjdFdhbGxldCIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Context/CrowdFunding.js\n"));

/***/ })

});