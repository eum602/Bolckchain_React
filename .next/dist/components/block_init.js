"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

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

var _sha = require("crypto-js/sha256");

var _sha2 = _interopRequireDefault(_sha);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("./Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/usuario1/projects-blockchain/react-blockchain peer/components/block_init.js";
//import { Link } from "../routes.js";


var Block = function (_Component) {
  (0, _inherits3.default)(Block, _Component);

  function Block() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Block);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Block.__proto__ || (0, _getPrototypeOf2.default)(Block)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      createGenesis: false
      //index:0,
      //previousHash:0,
      //timestamp:0,
      //data:500,
      //hash:0,
    }, _this.createBlock = function () {
      if (!_this.state.createGenesis) {
        //creating my genesis block
        var index = 0; //this.state.index;//index
        var previousHash = 0; //this.state.previousHash;//previousHash;
        var timestamp = new Date().toLocaleString(); //Date.now();//new Date().toLocaleString();////this.props.timestamp,
        var data = 5000; //this.state.data;
        var nonce = 0;
        //this.setState({index:index,previousHash:previousHash,timestamp:timestamp,data:data,createGenesis:true});
        var hash = _this.calculateHash(index, previousHash, timestamp, data, nonce);

        //console.log(hash);
        //this.setState({hash:hash});
        //this.setState({createGenesis:true});//no da!!!!!!!!!1
        var block = [index, previousHash, timestamp, data, hash, nonce];
        _this.props.onCreateBlock(block);
        _this.setState({ index: index, previousHash: previousHash, timestamp: timestamp, data: data, hash: hash, nonce: nonce, createGenesis: true });
        //return();
      }
    }, _this.calculateHash = function (index, previousHash, timestamp, data, nonce) {
      return (0, _sha2.default)(index + previousHash + timestamp + (0, _stringify2.default)(_this.state.data)).toString();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Block, [{
    key: "render",
    value: function render() {
      //this.createBlock()
      //if(this.props.createGenesis){
      //this.createBlock();
      //}

      //console.log(this.state.previousHash)
      //return null;
      return _react2.default.createElement("div", { style: { marginTop: "10px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_semanticUiReact.Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        content: "Create Blockchain",
        icon: "add circle",
        labelPosition: "left",
        floated: "left",
        primary: true,
        onClick: this.createBlock,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })), _react2.default.createElement(_semanticUiReact.List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Index"), this.state.index), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "PreviousHash"), this.state.previousHash), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "TimeStamp"), this.state.timestamp), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Amount of coins"), this.state.data), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Block Hash"), this.state.hash), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Nonce"), this.state.nonce)));
    }
  }]);

  return Block;
}(_react.Component);

exports.default = Block;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmxvY2tfaW5pdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlNIQTI1NiIsIkxpc3QiLCJNZW51IiwiQnV0dG9uIiwiVmlzaWJpbGl0eSIsIkxheW91dCIsIkJsb2NrIiwic3RhdGUiLCJjcmVhdGVHZW5lc2lzIiwiY3JlYXRlQmxvY2siLCJpbmRleCIsInByZXZpb3VzSGFzaCIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImRhdGEiLCJub25jZSIsImhhc2giLCJjYWxjdWxhdGVIYXNoIiwiYmxvY2siLCJwcm9wcyIsIm9uQ3JlYXRlQmxvY2siLCJzZXRTdGF0ZSIsInRvU3RyaW5nIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7O0FBRVAsQUFBUSxBQUFNLEFBQUssQUFBTzs7QUFDMUIsQUFBTyxBQUFZOzs7Ozs7O0FBRm5COzs7SSxBQUtNOzs7Ozs7Ozs7Ozs7OzswTSxBQUVKO3FCQUNnQixBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QSxBQU5JO0FBQUEsQUFDSixhLEFBU0YsY0FBYyxZQUFLLEFBQ2pCO1VBQUcsQ0FBQyxNQUFBLEFBQUssTUFBVCxBQUFlO0FBQ2Y7WUFBSSxRQUR5QixBQUM3QixBQUFZLEVBRGlCLEFBQUMsQ0FDaEIsQUFDZDtZQUFJLGVBRnlCLEFBRTdCLEFBQW1CLEdBQUUsQUFDckI7WUFBSSxZQUFZLElBQUEsQUFBSSxPQUhTLEFBRzdCLEFBQWdCLEFBQVcsa0JBQWlCLEFBQzVDO1lBQUksT0FKeUIsQUFJN0IsQUFBVyxNQUFLLEFBQ2hCO1lBQUksUUFBSixBQUFZLEFBQ1o7QUFDQTtZQUFJLE9BQU8sTUFBQSxBQUFLLGNBQUwsQUFBbUIsT0FBbkIsQUFBeUIsY0FBekIsQUFBc0MsV0FBdEMsQUFBZ0QsTUFBM0QsQUFBVyxBQUFxRCxBQUVoRTs7QUFDQTtBQUNBO0FBQ0E7WUFBSSxRQUFPLENBQUEsQUFBQyxPQUFELEFBQU8sY0FBUCxBQUFvQixXQUFwQixBQUE4QixNQUE5QixBQUFtQyxNQUE5QyxBQUFXLEFBQXdDLEFBQ25EO2NBQUEsQUFBSyxNQUFMLEFBQVcsY0FBWCxBQUF5QixBQUN6QjtjQUFBLEFBQUssU0FBUyxFQUFDLE9BQUQsQUFBTyxPQUFNLGNBQWIsQUFBMEIsY0FBYSxXQUF2QyxBQUFpRCxXQUFVLE1BQTNELEFBQWdFLE1BQUssTUFBckUsQUFBMEUsTUFBSyxPQUEvRSxBQUFxRixPQUFNLGVBQXpHLEFBQWMsQUFBeUcsQUFDdkg7QUFDRDtBQUVBO0EsYUFFRCxBLGdCQUFnQixVQUFBLEFBQUMsT0FBRCxBQUFPLGNBQVAsQUFBb0IsV0FBcEIsQUFBOEIsTUFBOUIsQUFBbUMsT0FBVSxBQUN2RDthQUFPLG1CQUFPLFFBQUEsQUFBUSxlQUFSLEFBQ1osWUFBWSx5QkFBZSxNQUFBLEFBQUssTUFEM0IsQUFDTyxBQUEwQixPQUR4QyxBQUFPLEFBQ3dDLEFBQ2xEO0E7Ozs7OzZCQUdHLEFBQ047QUFDQTtBQUNFO0FBQ0Y7QUFFQTs7QUFDQTtBQUNBOzZCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUUsV0FBZCxBQUFZLEFBQWE7b0JBQXpCO3NCQUFBLEFBQ0E7QUFEQTtPQUFBLGtCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2NBRkYsQUFFTyxBQUNMO3VCQUhGLEFBR2dCLEFBQ2Q7aUJBSkYsQUFJVSxBQUNSO2lCQUxGLEFBTUU7aUJBQVMsS0FOWCxBQU1nQjs7b0JBTmhCO3NCQUZBLEFBQ0EsQUFDQSxBQVVBO0FBVkE7QUFDRSwyQkFTRixBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQVc7QUFBWDtBQUFBLHlCQUFZLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUE7QUFBQTtBQUFBLFNBQVgsQUFBVyxBQUFpQyxlQUFBLEFBQUssTUFEbkQsQUFDRSxBQUF1RCxBQUN2RCx3QkFBQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQVc7QUFBWDtBQUFBLHlCQUFZLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUE7QUFBQTtBQUFBLFNBQVgsQUFBVyxBQUF3QyxzQkFBQSxBQUFLLE1BRjFELEFBRUUsQUFBOEQsQUFDOUQsK0JBQUMsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUFXO0FBQVg7QUFBQSx5QkFBWSxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBO0FBQUE7QUFBQSxTQUFYLEFBQVcsQUFBcUMsbUJBQUEsQUFBSyxNQUh2RCxBQUdFLEFBQTJELEFBQzNELDRCQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFBVztBQUFYO0FBQUEseUJBQVksY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQTtBQUFBO0FBQUEsU0FBWCxBQUFXLEFBQTJDLHlCQUFBLEFBQUssTUFKN0QsQUFJRSxBQUFpRSxBQUNqRSx1QkFBQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQVc7QUFBWDtBQUFBLHlCQUFZLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUE7QUFBQTtBQUFBLFNBQVgsQUFBVyxBQUFzQyxvQkFBQSxBQUFLLE1BTHhELEFBS0UsQUFBNEQsQUFDNUQsdUJBQUMsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUFXO0FBQVg7QUFBQSx5QkFBWSxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBO0FBQUE7QUFBQSxTQUFYLEFBQVcsQUFBaUMsZUFBQSxBQUFLLE1BbkJyRCxBQUNFLEFBWUEsQUFNRSxBQUF1RCxBQUsxRDs7Ozs7QUF2RWlCLEEsQUEyRXBCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImJsb2NrX2luaXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdXN1YXJpbzEvcHJvamVjdHMtYmxvY2tjaGFpbi9yZWFjdC1ibG9ja2NoYWluIHBlZXIifQ==