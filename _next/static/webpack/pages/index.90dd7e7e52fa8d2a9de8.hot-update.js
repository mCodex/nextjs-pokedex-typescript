/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
window["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! namespace exports */
/*! export __N_SSG [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": () => /* binding */ __N_SSG,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./pages/styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _this = undefined,\n    _jsxFileName = \"/Users/mtandrade/Git/with-typescript-app/pages/index.tsx\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n // import useSWR from 'swr';\n\n\n\nvar Home = function Home(props) {\n  var pokemons = props.pokemons;\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"table\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"tr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, \"#\"), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, \"Image\"), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, \"Name\")), __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, pokemons.map(function (_ref) {\n    var id = _ref.id,\n        name = _ref.name,\n        image = _ref.image;\n    return __jsx(\"tr\", {\n      key: id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }\n    }, __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 15\n      }\n    }, id), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      src: image,\n      alt: name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }\n    })), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 15\n      }\n    }, __jsx(\"span\", {\n      key: name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }\n    }, name)));\n  }))));\n};\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwicG9rZW1vbnMiLCJtYXAiLCJpZCIsIm5hbWUiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztDQUNBOztBQU1BOztBQU1BLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsQ0FBQ0MsS0FBRCxFQUF1QjtBQUFBLE1BQ3BDQyxRQURvQyxHQUN2QkQsS0FEdUIsQ0FDcENDLFFBRG9DO0FBRTVDLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsQ0FERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsUUFBUSxDQUFDQyxHQUFULENBQWE7QUFBQSxRQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxRQUFPQyxJQUFQLFFBQU9BLElBQVA7QUFBQSxRQUFhQyxLQUFiLFFBQWFBLEtBQWI7QUFBQSxXQUNaO0FBQUksU0FBRyxFQUFFRixFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtBLEVBQUwsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUUsS0FBVjtBQUFpQixTQUFHLEVBQUVELElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUZGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sU0FBRyxFQUFFQSxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBa0JBLElBQWxCLENBREYsQ0FMRixDQURZO0FBQUEsR0FBYixDQURILENBTkYsQ0FERixDQURGO0FBd0JELENBMUJEOztLQUFNTCxJOztBQTRCTixpRUFBZUEsSUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBhcGkgZnJvbSAnLi4vc3JjL3V0aWxzL2FwaSc7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcblxuaW50ZXJmYWNlIElIb21lUHJvcHMge1xuICBwb2tlbW9uczogSVBva2Vtb25bXTtcbn1cblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAocHJvcHM6IElIb21lUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwb2tlbW9ucyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD4jPC90aD5cbiAgICAgICAgICA8dGg+SW1hZ2U8L3RoPlxuICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtwb2tlbW9ucy5tYXAoKHsgaWQsIG5hbWUsIGltYWdlIH0pID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgPHRkPntpZH08L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e25hbWV9IC8+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e25hbWV9PntuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuaW50ZXJmYWNlIElHZXRTdGF0aWNQcm9wcyB7XG4gIHByb3BzOiB7XG4gICAgcG9rZW1vbnM6IElQb2tlbW9uW107XG4gIH07XG4gIHJldmFsaWRhdGU6IHRydWU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpOiBJR2V0U3RhdGljUHJvcHMge1xuICBjb25zdCB7XG4gICAgZGF0YTogeyByZXN1bHRzOiBpbml0aWFsUG9rZW1vbnNEYXRhIH0sXG4gIH0gPSBhd2FpdCBhcGkuZ2V0KCdwb2tlbW9uJywge1xuICAgIHBhcmFtczogeyBsaW1pdDogMjAgfSxcbiAgfSk7XG5cbiAgY29uc3QgcG9rZW1vbnMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBpbml0aWFsUG9rZW1vbnNEYXRhLm1hcChhc3luYyAocG9rZW1vbjogSVBva2Vtb24pID0+IHtcbiAgICAgIGNvbnN0IHsgdXJsIH0gPSBwb2tlbW9uO1xuXG4gICAgICBjb25zdCB7IGRhdGE6IHBva2Vtb25EZXRhaWwgfSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogcG9rZW1vbkRldGFpbC5pZCxcbiAgICAgICAgaW1hZ2U6IGBodHRwczovL3Bva2VyZXMuYmFzdGlvbmJvdC5vcmcvaW1hZ2VzL3Bva2Vtb24vJHtwb2tlbW9uRGV0YWlsLmlkfS5wbmdgLFxuICAgICAgICAuLi5wb2tlbW9uLFxuICAgICAgfTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9rZW1vbnMgfSxcbiAgICByZXZhbGlkYXRlOiB0cnVlLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});