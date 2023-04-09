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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/hooks */ \"./node_modules/@mantine/hooks/esm/index.js\");\n/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Body */ \"./components/Body.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const mobileWidth = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)(\"(max-width: 390px)\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.AppShell, {\n        navbarOffsetBreakpoint: \"sm\",\n        navbar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Navbar, {\n            p: \"md\",\n            hiddenBreakpoint: \"sm\",\n            hidden: !opened,\n            width: {\n                sm: 200,\n                lg: 300\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    fz: \"xl\",\n                    children: \"Inputs Pane\"\n                }, void 0, false, void 0, void 0),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Slider, {\n                    label: \"Number of eval questions\",\n                    labelTransition: \"skew-down\",\n                    labelAlwaysOn: true,\n                    marks: [\n                        {\n                            value: 5,\n                            label: \"5\"\n                        },\n                        {\n                            value: 10,\n                            label: \"10\"\n                        },\n                        {\n                            value: 15,\n                            label: \"15\"\n                        }\n                    ],\n                    max: 15,\n                    min: 5,\n                    step: 1\n                }, void 0, false, void 0, void 0)\n            ]\n        }, void 0, true, void 0, void 0),\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Header, {\n            height: {\n                base: 50,\n                md: 70\n            },\n            p: \"md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    height: \"100%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.MediaQuery, {\n                        largerThan: \"sm\",\n                        styles: {\n                            display: \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Burger, {\n                            opened: opened,\n                            onClick: ()=>setOpened((o)=>!o),\n                            size: \"sm\",\n                            color: \"gray\",\n                            mr: \"xl\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        size: mobileWidth === true ? \"14px\" : \"xl\",\n                        children: \"Evaluator AI - evaluate your QA chains.\"\n                    }, void 0, false, void 0, void 0)\n                ]\n            }, void 0, true, void 0, void 0)\n        }, void 0, false, void 0, void 0),\n        styles: (theme)=>({\n                main: {\n                    backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[8] : theme.colors.gray[0]\n                }\n            }),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Body__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/danil/Coding/evaluator/evaluator-ui/pages/index.tsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/danil/Coding/evaluator/evaluator-ui/pages/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"X6Q1NVDZBapmIL5lbGIgHzzsaK8=\", false, function() {\n    return [\n        _mantine_hooks__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVF1QjtBQUNVO0FBQ2M7QUFDckI7QUFDWTtBQUV0QyxNQUFNVyxXQUFXLElBQU07O0lBQ3JCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU1PLGNBQWNOLDZEQUFhQSxDQUFDO0lBQ2xDLHFCQUNFLDhEQUFDUixtREFBUUE7UUFDUGUsd0JBQXVCO1FBQ3ZCQyxzQkFDRSw4REFBQ1osaURBQU1BO1lBQ0xhLEdBQUU7WUFDRkMsa0JBQWlCO1lBQ2pCQyxRQUFRLENBQUNQO1lBQ1RRLE9BQU87Z0JBQUVDLElBQUk7Z0JBQUtDLElBQUk7WUFBSTs7OEJBRTFCLDhEQUFDaEIsK0NBQUlBO29CQUFDaUIsSUFBRzs4QkFBSzs7OEJBQ2QsOERBQUNsQixpREFBTUE7b0JBQ0xtQixPQUFNO29CQUNOQyxpQkFBZ0I7b0JBQ2hCQyxhQUFhO29CQUNiQyxPQUFPO3dCQUNMOzRCQUFFQyxPQUFPOzRCQUFHSixPQUFPO3dCQUFJO3dCQUN2Qjs0QkFBRUksT0FBTzs0QkFBSUosT0FBTzt3QkFBSzt3QkFDekI7NEJBQUVJLE9BQU87NEJBQUlKLE9BQU87d0JBQUs7cUJBQzFCO29CQUNESyxLQUFLO29CQUNMQyxLQUFLO29CQUNMQyxNQUFNOzs7O1FBVVpDLHNCQUNFLDhEQUFDOUIsaURBQU1BO1lBQUMrQixRQUFRO2dCQUFFQyxNQUFNO2dCQUFJQyxJQUFJO1lBQUc7WUFBR2xCLEdBQUU7c0JBQ3RDLDRFQUFDbUI7Z0JBQ0NDLE9BQU87b0JBQUVDLFNBQVM7b0JBQVFDLFlBQVk7b0JBQVVOLFFBQVE7Z0JBQU87O2tDQUUvRCw4REFBQzlCLHFEQUFVQTt3QkFBQ3FDLFlBQVc7d0JBQUtDLFFBQVE7NEJBQUVILFNBQVM7d0JBQU87a0NBQ3BELDRFQUFDckMsaURBQU1BOzRCQUNMVyxRQUFRQTs0QkFDUjhCLFNBQVMsSUFBTTdCLFVBQVUsQ0FBQzhCLElBQU0sQ0FBQ0E7NEJBQ2pDQyxNQUFLOzRCQUNMQyxPQUFNOzRCQUNOQyxJQUFHOzs7a0NBR1AsOERBQUN4QywrQ0FBSUE7d0JBQUNzQyxNQUFNOUIsZ0JBQWdCLElBQUksR0FBRyxTQUFTLElBQUk7a0NBQUU7Ozs7O1FBTXhEMkIsUUFBUSxDQUFDTSxRQUFXO2dCQUNsQkMsTUFBTTtvQkFDSkMsaUJBQ0VGLE1BQU1HLFdBQVcsS0FBSyxTQUNsQkgsTUFBTUksTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRSxHQUNwQkwsTUFBTUksTUFBTSxDQUFDRSxJQUFJLENBQUMsRUFBRTtnQkFDNUI7WUFDRjtrQkFFQSw0RUFBQzNDLHdEQUFJQTs7Ozs7Ozs7OztBQUdYO0dBbkVNQzs7UUFFZ0JILHlEQUFhQTs7O0tBRjdCRztBQW9FTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcHBTaGVsbCxcbiAgQnVyZ2VyLFxuICBIZWFkZXIsXG4gIE1lZGlhUXVlcnksXG4gIE5hdmJhcixcbiAgU2xpZGVyLFxuICBUZXh0LFxufSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwiQG1hbnRpbmUvaG9va3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb2R5IGZyb20gXCIuLi9jb21wb25lbnRzL0JvZHlcIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG1vYmlsZVdpZHRoID0gdXNlTWVkaWFRdWVyeShcIihtYXgtd2lkdGg6IDM5MHB4KVwiKTtcbiAgcmV0dXJuIChcbiAgICA8QXBwU2hlbGxcbiAgICAgIG5hdmJhck9mZnNldEJyZWFrcG9pbnQ9XCJzbVwiXG4gICAgICBuYXZiYXI9e1xuICAgICAgICA8TmF2YmFyXG4gICAgICAgICAgcD1cIm1kXCJcbiAgICAgICAgICBoaWRkZW5CcmVha3BvaW50PVwic21cIlxuICAgICAgICAgIGhpZGRlbj17IW9wZW5lZH1cbiAgICAgICAgICB3aWR0aD17eyBzbTogMjAwLCBsZzogMzAwIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dCBmej1cInhsXCI+SW5wdXRzIFBhbmU8L1RleHQ+XG4gICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgbGFiZWw9XCJOdW1iZXIgb2YgZXZhbCBxdWVzdGlvbnNcIlxuICAgICAgICAgICAgbGFiZWxUcmFuc2l0aW9uPVwic2tldy1kb3duXCJcbiAgICAgICAgICAgIGxhYmVsQWx3YXlzT25cbiAgICAgICAgICAgIG1hcmtzPXtbXG4gICAgICAgICAgICAgIHsgdmFsdWU6IDUsIGxhYmVsOiBcIjVcIiB9LFxuICAgICAgICAgICAgICB7IHZhbHVlOiAxMCwgbGFiZWw6IFwiMTBcIiB9LFxuICAgICAgICAgICAgICB7IHZhbHVlOiAxNSwgbGFiZWw6IFwiMTVcIiB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIG1heD17MTV9XG4gICAgICAgICAgICBtaW49ezV9XG4gICAgICAgICAgICBzdGVwPXsxfVxuXG4gICAgICAgICAgICAvLyBtYXJrcz17W1xuICAgICAgICAgICAgLy8gICB7IHZhbHVlOiA1LCBsYWJlbDogXCIzMCVcIiB9LFxuICAgICAgICAgICAgLy8gICB7IHZhbHVlOiAxMCwgbGFiZWw6IFwiNjAlXCIgfSxcbiAgICAgICAgICAgIC8vICAgeyB2YWx1ZTogMTUsIGxhYmVsOiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgLy8gXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L05hdmJhcj5cbiAgICAgIH1cbiAgICAgIGhlYWRlcj17XG4gICAgICAgIDxIZWFkZXIgaGVpZ2h0PXt7IGJhc2U6IDUwLCBtZDogNzAgfX0gcD1cIm1kXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGhlaWdodDogXCIxMDAlXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVkaWFRdWVyeSBsYXJnZXJUaGFuPVwic21cIiBzdHlsZXM9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgIDxCdXJnZXJcbiAgICAgICAgICAgICAgICBvcGVuZWQ9e29wZW5lZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuZWQoKG8pID0+ICFvKX1cbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheVwiXG4gICAgICAgICAgICAgICAgbXI9XCJ4bFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01lZGlhUXVlcnk+XG4gICAgICAgICAgICA8VGV4dCBzaXplPXttb2JpbGVXaWR0aCA9PT0gdHJ1ZSA/IFwiMTRweFwiIDogXCJ4bFwifT5cbiAgICAgICAgICAgICAgRXZhbHVhdG9yIEFJIC0gZXZhbHVhdGUgeW91ciBRQSBjaGFpbnMuXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgfVxuICAgICAgc3R5bGVzPXsodGhlbWUpID0+ICh7XG4gICAgICAgIG1haW46IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCJcbiAgICAgICAgICAgICAgPyB0aGVtZS5jb2xvcnMuZGFya1s4XVxuICAgICAgICAgICAgICA6IHRoZW1lLmNvbG9ycy5ncmF5WzBdLFxuICAgICAgICB9LFxuICAgICAgfSl9XG4gICAgPlxuICAgICAgPEJvZHkgLz5cbiAgICA8L0FwcFNoZWxsPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIkFwcFNoZWxsIiwiQnVyZ2VyIiwiSGVhZGVyIiwiTWVkaWFRdWVyeSIsIk5hdmJhciIsIlNsaWRlciIsIlRleHQiLCJ1c2VTdGF0ZSIsInVzZU1lZGlhUXVlcnkiLCJSZWFjdCIsIkJvZHkiLCJIb21lUGFnZSIsIm9wZW5lZCIsInNldE9wZW5lZCIsIm1vYmlsZVdpZHRoIiwibmF2YmFyT2Zmc2V0QnJlYWtwb2ludCIsIm5hdmJhciIsInAiLCJoaWRkZW5CcmVha3BvaW50IiwiaGlkZGVuIiwid2lkdGgiLCJzbSIsImxnIiwiZnoiLCJsYWJlbCIsImxhYmVsVHJhbnNpdGlvbiIsImxhYmVsQWx3YXlzT24iLCJtYXJrcyIsInZhbHVlIiwibWF4IiwibWluIiwic3RlcCIsImhlYWRlciIsImhlaWdodCIsImJhc2UiLCJtZCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJsYXJnZXJUaGFuIiwic3R5bGVzIiwib25DbGljayIsIm8iLCJzaXplIiwiY29sb3IiLCJtciIsInRoZW1lIiwibWFpbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yU2NoZW1lIiwiY29sb3JzIiwiZGFyayIsImdyYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});