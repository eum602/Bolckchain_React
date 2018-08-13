"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _block_init = require("../components/block_init");

var _block_init2 = _interopRequireDefault(_block_init);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _showChain = require("../components/showChain");

var _showChain2 = _interopRequireDefault(_showChain);

var _peerconn = require("../components/peerconn");

var _peerconn2 = _interopRequireDefault(_peerconn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/usuario1/projects-blockchain/react-blockchain peer/pages/index.js?entry";

//import { Link } from "../routes.js";


var Blockchain = function (_Component) {
  (0, _inherits3.default)(Blockchain, _Component);

  function Blockchain() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Blockchain);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Blockchain.__proto__ || (0, _getPrototypeOf2.default)(Blockchain)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      chain: [], //[this.createGenesisBlock()]
      createGenesis: false

    }, _this.attachBlock = function (block) {
      var blocks = _this.state.chain;
      blocks.push(block);
      _this.setState({ chain: blocks, added: true });
      console.log(_this.state.chain);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Blockchain, [{
    key: "render",

    /*
    renderprueba =()=>{
      return(
        <div>para poner algun texto o actualizar a otro componente</div>
      );
    }
    */

    /*
      let savjeeCoin = new Blockchain();
      savjeeCoin.addBlock(new Block(1, "20/07/2017", { amount: 4 }));
      savjeeCoin.addBlock(new Block(2, "20/07/2017", { amount: 8 }));
    */
    value: function render() {

      var chain = this.state.chain;
      //let lastBlock = chain[0];
      var item = chain.map(function (bloque) {
        return _react2.default.createElement(_showChain2.default, { key: bloque.timestamp, block: bloque, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        });
      });
      //return(<ShowChain block={block}/>);
      //for (let block in chain) {
      //}

      return _react2.default.createElement(_Layout2.default, { style: { marginTop: "10px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_block_init2.default, { onCreateBlock: this.attachBlock.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, item));
    }
  }]);

  return Blockchain;
}(_react.Component);

exports.default = Blockchain;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU0hBMjU2IiwiQmxvY2siLCJCdXR0b24iLCJUYWJsZSIsIkxheW91dCIsIk1lbnUiLCJTaG93Q2hhaW4iLCJQZWVyc0Jsb2NrIiwiQmxvY2tjaGFpbiIsInN0YXRlIiwiY2hhaW4iLCJjcmVhdGVHZW5lc2lzIiwiYXR0YWNoQmxvY2siLCJibG9jayIsImJsb2NrcyIsInB1c2giLCJzZXRTdGF0ZSIsImFkZGVkIiwiY29uc29sZSIsImxvZyIsIml0ZW0iLCJtYXAiLCJibG9xdWUiLCJ0aW1lc3RhbXAiLCJtYXJnaW5Ub3AiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVMsQUFBUTs7QUFDakIsQUFBTyxBQUFZLEFBQ25CLEFBQVE7Ozs7QUFDUixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFnQjs7Ozs7Ozs7QUFDdkI7OztJLEFBR007Ozs7Ozs7Ozs7Ozs7O29OQUNKLEE7YUFBUSxBQUNFLElBQUcsQUFDWDtxQkFGTSxBQUVRLEE7O0FBRlIsQUFDTixhLEFBS0YsY0FBYyxVQUFBLEFBQUMsT0FBUSxBQUNuQjtVQUFJLFNBQVMsTUFBQSxBQUFLLE1BQWxCLEFBQXdCLEFBQ3hCO2FBQUEsQUFBTyxLQUFQLEFBQVksQUFDWjtZQUFBLEFBQUssU0FBUyxFQUFDLE9BQUQsQUFBTyxRQUFPLE9BQTVCLEFBQWMsQUFBb0IsQUFDbEM7Y0FBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQzFCO0E7Ozs7U0FFSDs7QUFRQTs7Ozs7Ozs7Ozs7Ozs2QkFLVSxBQUVKOztVQUFJLFFBQU0sS0FBQSxBQUFLLE1BQWYsQUFBcUIsQUFDckI7QUFDQTtVQUFJLGFBQU8sQUFBTSxJQUFJLGtCQUFVLEFBQzdCOytCQUFPLEFBQUMscUNBQVUsS0FBSyxPQUFoQixBQUF1QixXQUFXLE9BQWxDLEFBQXlDO3NCQUF6Qzt3QkFBUCxBQUFPLEFBRVI7QUFGUTtTQUFBO0FBRFQsQUFBVyxBQUlYLE9BSlc7QUFLWDtBQUNBO0FBRUY7OzZCQUNFLEFBQUMsa0NBQU8sT0FBTyxFQUFFLFdBQWpCLEFBQWUsQUFBYTtvQkFBNUI7c0JBQUEsQUFDQTtBQURBO09BQUEsa0JBQ0EsQUFBQyxzQ0FBTSxlQUFlLEtBQUEsQUFBSyxZQUFMLEFBQWlCLEtBQXZDLEFBQXNCLEFBQXNCO29CQUE1QztzQkFEQSxBQUNBLEFBQ0E7QUFEQTswQkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxTQUhGLEFBQ0UsQUFFQSxBQUdIOzs7OztBQTdDc0IsQSxBQWdEekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvdXN1YXJpbzEvcHJvamVjdHMtYmxvY2tjaGFpbi9yZWFjdC1ibG9ja2NoYWluIHBlZXIifQ==