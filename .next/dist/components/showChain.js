"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _peerconn = require("./peerconn");

var _peerconn2 = _interopRequireDefault(_peerconn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/usuario1/projects-blockchain/react-blockchain peer/components/showChain.js";


var ShowChain = function (_Component) {
  (0, _inherits3.default)(ShowChain, _Component);

  function ShowChain() {
    (0, _classCallCheck3.default)(this, ShowChain);

    return (0, _possibleConstructorReturn3.default)(this, (ShowChain.__proto__ || (0, _getPrototypeOf2.default)(ShowChain)).apply(this, arguments));
  }

  (0, _createClass3.default)(ShowChain, [{
    key: "render",
    value: function render() {
      var _props$block = (0, _slicedToArray3.default)(this.props.block, 6),
          index = _props$block[0],
          previousHash = _props$block[1],
          timestamp = _props$block[2],
          data = _props$block[3],
          hash = _props$block[4],
          nonce = _props$block[5];

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "Created Chain: [", index, ",", previousHash, ",", timestamp, ",", data, ",", hash, ",", nonce, "]", _react2.default.createElement(_peerconn2.default, { block: this.props.block, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }));
    }
  }]);

  return ShowChain;
}(_react.Component);

exports.default = ShowChain;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hvd0NoYWluLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUGVlcnNCbG9jayIsIlNob3dDaGFpbiIsInByb3BzIiwiYmxvY2siLCJpbmRleCIsInByZXZpb3VzSGFzaCIsInRpbWVzdGFtcCIsImRhdGEiLCJoYXNoIiwibm9uY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SUFDakIsQTs7Ozs7Ozs7Ozs7NkJBR0k7c0RBQytDLEtBQUEsQUFBSyxNQURwRCxBQUMwRCxPQUQxRDtVQUFBLEFBQ0QscUJBREM7VUFBQSxBQUNLLDRCQURMO1VBQUEsQUFDa0IseUJBRGxCO1VBQUEsQUFDNEIsb0JBRDVCO1VBQUEsQUFDaUMsb0JBRGpDO1VBQUEsQUFDc0MscUJBRzVDOzs2QkFBTyxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQSxFQUNELG9CQURDLE9BQ08sS0FEUCxjQUNzQixLQUR0QixXQUNrQyxLQURsQyxNQUN5QyxLQUR6QyxNQUNnRCxLQURoRCxPQUVILHFCQUFBLEFBQUMsb0NBQVcsT0FBTyxLQUFBLEFBQUssTUFBeEIsQUFBOEI7b0JBQTlCO3NCQUZKLEFBQU8sQUFFSCxBQUlMO0FBSks7Ozs7OztBQVRnQixBLEFBZ0J4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93Q2hhaW4uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdXN1YXJpbzEvcHJvamVjdHMtYmxvY2tjaGFpbi9yZWFjdC1ibG9ja2NoYWluIHBlZXIifQ==