"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Sidebar_jsx"],{

/***/ "./resources/js/Pages/Sidebar.jsx":
/*!****************************************!*\
  !*** ./resources/js/Pages/Sidebar.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Sidebar = function Sidebar() {
  var data = [{
    href: "/dashboard",
    text: "Profile"
  }, {
    href: "/dashboard/interview-quiz",
    text: "Interview Quiz"
  }, {
    href: "/payment",
    text: "Pay Fees"
  }, {
    href: "/logout",
    text: "Logout"
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("nav", {
    className: "sidebar sidebar-offcanvas",
    id: "sidebar",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
      className: "nav",
      children: data.map(function (item, key) {
        var active = window.location.pathname === item.href ? "active" : "";
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            className: "nav-link ".concat(active),
            href: item.href,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "menu-title fs-5 mt-3",
              children: item.text
            })
          })
        }, key);
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ })

}]);