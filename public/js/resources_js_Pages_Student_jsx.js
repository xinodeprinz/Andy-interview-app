(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Student_jsx"],{

/***/ "./resources/js/Components/FormInput.jsx":
/*!***********************************************!*\
  !*** ./resources/js/Components/FormInput.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var FormInput = function FormInput(_ref, key) {
  var data = _ref.data,
      handleInput = _ref.handleInput;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "col-md-".concat(data.ratio, " mb-3"),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
      htmlFor: data.name,
      className: "form-label text-capitalize",
      children: [data.label, " ", data.type === "file" ? "(PDF only)" : ""]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
      type: data.type,
      className: "form-control form-control-sm",
      id: data.name,
      placeholder: data.label,
      name: data.name,
      required: true,
      accept: data.type === "file" ? ".pdf" : "*",
      onChange: function onChange(e) {
        return handleInput(e.target.name, e.target.type === "file" ? e.target.files[0] : e.target.value);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "invalid-feedback",
      children: data.feedback
    })]
  }, key);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormInput);

/***/ }),

/***/ "./resources/js/Components/FormSelect.jsx":
/*!************************************************!*\
  !*** ./resources/js/Components/FormSelect.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var FormSelect = function FormSelect(_ref, key) {
  var data = _ref.data,
      handleInput = _ref.handleInput;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "col-md-".concat(data.ratio, " mb-3"),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      htmlFor: data.name,
      className: "form-label",
      children: data.label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("select", {
      className: "form-select form-select-sm",
      defaultValue: "",
      id: data.name,
      name: data.name,
      onChange: function onChange(e) {
        return handleInput(e.target.name, e.target.value);
      },
      required: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
        disabled: true,
        value: "",
        children: "Choose..."
      }), data.data.map(function (e, k) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
          value: e,
          children: e
        }, k);
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "invalid-feedback",
      children: data.feedback
    })]
  }, key);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormSelect);

/***/ }),

/***/ "./resources/js/Components/NavTab.jsx":
/*!********************************************!*\
  !*** ./resources/js/Components/NavTab.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
 // import { Link } from "@inertiajs/inertia-react";




var NavTab = function NavTab(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
    className: "nav nav-tabs card-header-tabs nav-justified",
    children: data.map(function (e, key) {
      var active = e.path === window.location.pathname ? "active" : "";
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
        className: "nav-item",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          className: "nav-link ".concat(active, " text-capitalize"),
          "aria-current": active ? "true" : "",
          href: e.path,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "badge rounded-pill bg-primary",
            children: key + 1
          }), " ".concat(e.name)]
        })
      }, key);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavTab);

/***/ }),

/***/ "./resources/js/Components/RegFormButtons.jsx":
/*!****************************************************!*\
  !*** ./resources/js/Components/RegFormButtons.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
 // import { Link } from "@inertiajs/inertia-react";




var RegFormButtons = function RegFormButtons(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "col-12 d-flex justify-content-between",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
      href: data.back_path,
      className: "btn btn-dark",
      children: "Back"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      className: "btn btn-primary",
      type: "submit",
      children: data.submit_text
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegFormButtons);

/***/ }),

/***/ "./resources/js/Data/student.js":
/*!**************************************!*\
  !*** ./resources/js/Data/student.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var data = [[{
  label: "First Name",
  type: "text",
  name: "first_name",
  ratio: 4,
  feedback: "First name is required"
}, {
  label: "Last Name",
  type: "text",
  name: "last_name",
  ratio: 4,
  feedback: "Last name is required"
}, {
  label: "Username",
  type: "text",
  name: "username",
  ratio: 4,
  feedback: "Username is required"
}, {
  label: "Date of birth",
  type: "date",
  name: "date_of_birth",
  ratio: 4,
  feedback: "Date of birth is required"
}, {
  label: "Gender",
  name: "gender",
  ratio: 4,
  feedback: "Select a gender",
  data: ["Male", "Female"]
}, {
  label: "Primary school attended",
  type: "text",
  name: "primary_school",
  ratio: 4,
  feedback: "Date of birth is required"
}], [{
  label: "Grade for common entrance",
  name: "grade",
  ratio: 4,
  feedback: "Select a grade",
  data: ["A", "B"]
}, {
  label: "Which school will you like to attend?",
  name: "school",
  ratio: 4,
  feedback: "Select a school",
  data: ["G.B.H.S Ndop", "INSET Douala", "G.B.H.S Douala", "B.H.S Buea", "BGS Kumbo"]
}, {
  label: "Will you like to take your interview online?",
  name: "online_interview",
  ratio: 4,
  feedback: "Select a response",
  data: ["Yes", "No"]
}, {
  label: "Birth certificate",
  type: "file",
  name: "birth_certificate",
  ratio: 4,
  feedback: "Upload birth certificate"
}, {
  label: "Common entrance slip",
  type: "file",
  name: "slip",
  ratio: 4,
  feedback: "Upload slip"
}, {
  label: "Password",
  type: "password",
  name: "password",
  ratio: 4,
  feedback: "Password is required"
}]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ "./resources/js/Pages/Student.jsx":
/*!****************************************!*\
  !*** ./resources/js/Pages/Student.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Student)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Data_student__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/student */ "./resources/js/Data/student.js");
/* harmony import */ var _Components_NavTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/NavTab */ "./resources/js/Components/NavTab.jsx");
/* harmony import */ var _Components_FormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/FormInput */ "./resources/js/Components/FormInput.jsx");
/* harmony import */ var _Components_FormSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/FormSelect */ "./resources/js/Components/FormSelect.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_RegFormButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/RegFormButtons */ "./resources/js/Components/RegFormButtons.jsx");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validate */ "./resources/js/validate.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_validate__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var Student = /*#__PURE__*/function (_Component) {
  _inherits(Student, _Component);

  var _super = _createSuper(Student);

  function Student() {
    var _this;

    _classCallCheck(this, Student);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "handleInput", function (name, value) {
      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "submit", function (e) {
      e.preventDefault();
      var data = new FormData();
      ["first_name", "last_name", "date_of_birth", "username", "gender", "primary_school", "grade", "school", "online_interview", "birth_certificate", "slip", "password", "photo"].forEach(function (e) {
        return data.append(e, _this.state[e]);
      });
      axios__WEBPACK_IMPORTED_MODULE_5___default().post("/register/student", data).then(function () {
        return window.location.pathname = "/register/guardian";
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePhoto", function (photo) {
      var photoField = document.getElementById("photo");

      if (photo) {
        var reader = new FileReader();

        reader.onload = function () {
          var result = reader.result;
          photoField.src = result;
        };

        reader.readAsDataURL(photo);
      }

      _this.setState({
        photo: photo
      });
    });

    return _this;
  }

  _createClass(Student, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var nav_data = [{
        name: "student info",
        path: "/register/student"
      }, {
        name: "guardian info",
        path: "/register/guardian"
      }];

      (function () {
        "use strict"; // Fetch all the forms we want to apply custom Bootstrap validation styles to

        var forms = document.querySelectorAll(".needs-validation"); // Loop over them and prevent submission

        Array.prototype.slice.call(forms).forEach(function (form) {
          form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          }, false);
        });
      })();

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "container center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "card shadow-lg border-primary",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "card-header",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_NavTab__WEBPACK_IMPORTED_MODULE_2__["default"], {
              data: nav_data
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "card-body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
              className: "needs-validation",
              noValidate: true,
              onSubmit: this.submit,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "col-md-9",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "row",
                    children: [" ", _Data_student__WEBPACK_IMPORTED_MODULE_1__["default"][0].map(function (e, key) {
                      if (Object(e).hasOwnProperty("type")) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
                          data: e,
                          handleInput: _this2.handleInput
                        }, key);
                      } else {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_FormSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
                          data: e,
                          handleInput: _this2.handleInput
                        }, key);
                      }
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "col-md-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                    type: "file",
                    name: "photo_field",
                    id: "photo_field",
                    accept: ".jpg,.jpeg,.png",
                    hidden: true,
                    onChange: function onChange(e) {
                      return _this2.handlePhoto(e.target.files[0]);
                    },
                    required: true
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "invalid-feedback",
                    children: "Upload a photo"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                    type: "button",
                    className: "border-0",
                    onClick: function onClick() {
                      return document.getElementById("photo_field").click();
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                      src: "/storage/empty.jpg",
                      id: "photo",
                      className: "img-thumbnail w-100",
                      alt: "...",
                      style: {
                        height: "150px"
                      }
                    })
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "row",
                children: _Data_student__WEBPACK_IMPORTED_MODULE_1__["default"][1].map(function (e, key) {
                  if (Object(e).hasOwnProperty("type")) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      data: e,
                      handleInput: _this2.handleInput
                    }, key);
                  } else {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_FormSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      data: e,
                      handleInput: _this2.handleInput
                    }, key);
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_RegFormButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
                data: {
                  back_path: "/",
                  submit_text: "Next"
                }
              })]
            })
          })]
        })
      });
    }
  }]);

  return Student;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./resources/js/validate.js":
/*!**********************************!*\
  !*** ./resources/js/validate.js ***!
  \**********************************/
/***/ (() => {

(function () {
  "use strict"; // Fetch all the forms we want to apply custom Bootstrap validation styles to

  var forms = document.querySelectorAll(".needs-validation"); // Loop over them and prevent submission

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    }, false);
  });
})();

/***/ })

}]);