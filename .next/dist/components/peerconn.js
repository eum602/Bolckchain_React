'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simplePeer = require('simple-peer');

var _simplePeer2 = _interopRequireDefault(_simplePeer);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/usuario1/projects-blockchain/react-blockchain peer/components/peerconn.js';

var wrtc = require('wrtc');

var PeersBlock = function (_Component) {
  (0, _inherits3.default)(PeersBlock, _Component);

  function PeersBlock() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PeersBlock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PeersBlock.__proto__ || (0, _getPrototypeOf2.default)(PeersBlock)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      //p1 : Peer({trickle: false, initiator: true}),
      //peer1 : new Peer({ initiator: true, wrtc: wrtc }),
      //peer2 : new Peer({ wrtc: wrtc })
      //p2 : Peer({trickle: false})
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PeersBlock, [{
    key: 'render',
    value: function render() {
      var peer1 = new _simplePeer2.default({ initiator: true, wrtc: wrtc });
      var peer2 = new _simplePeer2.default({ wrtc: wrtc });
      //var peer3 = new Peer({ wrtc: wrtc });
      /*
      const p1 = Peer({trickle: false, initiator: true});
      const p2 = Peer({trickle: false});
      */
      var data1 = this.props.block;
      //this.state.peer1.on('signal', (data) => {
      peer1.on('signal', function (data) {
        console.log('p1 signal', data);
        peer2.signal(data);
        //peer3.signal(data);
        //this.state.peer2.signal(data)
      });

      peer2.on('signal', function (data) {
        console.log('p2 signal', data);
        peer1.signal(data);
        //peer3.signal(data);
      });
      /*
      peer3.on('signal', (data) => {
        console.log('p3 signal', data);
      peer1.signal(data);
      peer2.signal(data);
      })*/

      //peer 1 sends the data to all peers
      peer1.on('connect', function () {
        console.log('p1 connected');
        //peer1.send('Hello, p2. How are you?')
        peer1.send(data1);
      });

      //setting peer2 to receive the block
      peer2.on('data', function (data) {
        console.log('Received in Peer 2:', data.toString('utf-8'));
        peer2.send('Data received in peer1!!');
      });

      //setting peer3 to receive the block
      /*
      peer3.on('data', (data) => {
      console.log('Received', data.toString('utf-8'))
      peer3.send('Data received in peer3!!')
      });*/

      /*
          p1.on('signal', (data) => console.log('p1 signal', data))
          p1.on('connect', () => console.log('p1 connected'))
          p1.on('data', (data) => console.log('p1 received', data))
          p1.on('error', (error) => console.error('p1 error', error))
          p1.on('close', () => console.log('p1 connection closed'))
      
      
          p2.on('signal', (data) => console.log('p2 signal', data))
          p2.on('connect', () => console.log('p2 connected'))
          p2.on('data', (data) => console.log('p2 received', data))
          p2.on('error', (error) => console.error('p2 error', error))
          p2.on('close', () => console.log('p2 connection closed'))
      */
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, '"Peers connected"');
    }
  }]);

  return PeersBlock;
}(_react.Component);

exports.default = PeersBlock;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGVlcmNvbm4uanMiXSwibmFtZXMiOlsiUGVlciIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid3J0YyIsInJlcXVpcmUiLCJQZWVyc0Jsb2NrIiwic3RhdGUiLCJwZWVyMSIsImluaXRpYXRvciIsInBlZXIyIiwiZGF0YTEiLCJwcm9wcyIsImJsb2NrIiwib24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNpZ25hbCIsInNlbmQiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7Ozs7OztBQUNoQixJQUFJLE9BQUosQUFBSSxBQUFPOztJLEFBQ0w7Ozs7Ozs7Ozs7Ozs7O29OQUNKLEE7QUFFRTtBQUNBO0FBQ0E7QUFKSSxBO0FBQUEsQUFDSjs7Ozs7NkJBS00sQUFDTjtVQUFJLFFBQVEsQUFBSSx5QkFBSyxFQUFFLFdBQUYsQUFBYSxNQUFNLE1BQXhDLEFBQVksQUFBUyxBQUF5QixBQUM5QztVQUFJLFFBQVEsQUFBSSx5QkFBSyxFQUFFLE1BQXZCLEFBQVksQUFBUyxBQUFRLEFBQzdCO0FBQ0E7QUFJQTs7OztVQUFNLFFBQU0sS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO0FBQ0E7WUFBQSxBQUFNLEdBQU4sQUFBUyxVQUFVLFVBQUEsQUFBQyxNQUFTLEFBQzdCO2dCQUFBLEFBQVEsSUFBUixBQUFZLGFBQVosQUFBeUIsQUFDekI7Y0FBQSxBQUFNLE9BQU4sQUFBYSxBQUNiO0FBQ0E7QUFDQztBQUxELEFBT0E7O1lBQUEsQUFBTSxHQUFOLEFBQVMsVUFBVSxVQUFBLEFBQUMsTUFBUyxBQUMzQjtnQkFBQSxBQUFRLElBQVIsQUFBWSxhQUFaLEFBQXlCLEFBQzNCO2NBQUEsQUFBTSxPQUFOLEFBQWEsQUFDYjtBQUNDO0FBSkQsQUFLQTtBQU9BOzs7Ozs7O0FBQ0E7WUFBQSxBQUFNLEdBQU4sQUFBUyxXQUFXLFlBQU0sQUFDMUI7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtBQUNBO2NBQUEsQUFBTSxLQUFOLEFBQVcsQUFDVjtBQUpELEFBTUE7O0FBQ0E7WUFBQSxBQUFNLEdBQU4sQUFBUyxRQUFRLFVBQUEsQUFBQyxNQUFTLEFBQzNCO2dCQUFBLEFBQVEsSUFBUixBQUFZLHVCQUF1QixLQUFBLEFBQUssU0FBeEMsQUFBbUMsQUFBYyxBQUNqRDtjQUFBLEFBQU0sS0FBTixBQUFXLEFBQ1Y7QUFIRCxBQUtBOztBQUNBO0FBTUo7Ozs7OztBQWNJOzs7Ozs7Ozs7Ozs7Ozs2QkFBTyxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQSxFQUFQLEFBQU8sQUFDUjs7Ozs7QUF2RXNCLEEsQUF5RXpCOztrQkFBQSxBQUFlIiwiZmlsZSI6InBlZXJjb25uLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3VzdWFyaW8xL3Byb2plY3RzLWJsb2NrY2hhaW4vcmVhY3QtYmxvY2tjaGFpbiBwZWVyIn0=