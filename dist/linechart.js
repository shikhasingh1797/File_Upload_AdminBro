"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _chart = require("chart.js");
var _reactChartjs = require("react-chartjs-2");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
_chart.Chart.register.apply(_chart.Chart, _toConsumableArray(_chart.registerables));
var labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];
var data = {
  labels: labels,
  datasets: [{
    label: "Line Chart",
    backgroundColor: "rgb(255, 99, 132)",
    borderColor: "rgb(255, 99, 132)",
    data: [0, 10, 5, 2, 20, 13, 30, 27, 21, 23, 16, 12, 10]
  }]
};
var LineChart = function LineChart() {
  var styles = {
    main: {
      backgroundColor: "#F0FFFF",
      width: "100%"
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "main",
    style: styles.main
  }, /*#__PURE__*/_react["default"].createElement(_reactChartjs.Line, {
    data: data
  }));
};
var _default = LineChart;
exports["default"] = _default;