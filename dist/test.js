"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Test = function Test() {
  var url = "http://localhost:8080/csv";
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h3", null, "Form :"), /*#__PURE__*/_react["default"].createElement("a", {
    href: url
  }, "Download"));
};
var _default = Test; // {/* <form method="get" action="fileName">
// <button class="myButton" type="submit">Download!</button>
// </form> */}
exports["default"] = _default;