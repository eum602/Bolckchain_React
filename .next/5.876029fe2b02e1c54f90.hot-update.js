webpackHotUpdate(5,{

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simplePeer = __webpack_require__(905);

var _simplePeer2 = _interopRequireDefault(_simplePeer);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/usuario1/projects-blockchain/react-blockchain peer/components/peerconn.js';

var wrtc = __webpack_require__(921);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/usuario1/projects-blockchain/react-blockchain peer/components/peerconn.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/usuario1/projects-blockchain/react-blockchain peer/components/peerconn.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44NzYwMjlmZTJiMDJlMWM1NGY5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wZWVyY29ubi5qcz8yNzc5N2ZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQZWVyIGZyb20gJ3NpbXBsZS1wZWVyJztcbmltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbnZhciB3cnRjID0gcmVxdWlyZSgnd3J0YycpO1xuY2xhc3MgUGVlcnNCbG9jayBleHRlbmRzIENvbXBvbmVudHtcbiAgc3RhdGU9e1xuICAgIC8vcDEgOiBQZWVyKHt0cmlja2xlOiBmYWxzZSwgaW5pdGlhdG9yOiB0cnVlfSksXG4gICAgLy9wZWVyMSA6IG5ldyBQZWVyKHsgaW5pdGlhdG9yOiB0cnVlLCB3cnRjOiB3cnRjIH0pLFxuICAgIC8vcGVlcjIgOiBuZXcgUGVlcih7IHdydGM6IHdydGMgfSlcbiAgICAvL3AyIDogUGVlcih7dHJpY2tsZTogZmFsc2V9KVxuICB9XG4gIHJlbmRlcigpe1xuICAgIHZhciBwZWVyMSA9IG5ldyBQZWVyKHsgaW5pdGlhdG9yOiB0cnVlLCB3cnRjOiB3cnRjIH0pO1xuICAgIHZhciBwZWVyMiA9IG5ldyBQZWVyKHsgd3J0Yzogd3J0YyB9KTtcbiAgICAvL3ZhciBwZWVyMyA9IG5ldyBQZWVyKHsgd3J0Yzogd3J0YyB9KTtcbiAgICAvKlxuICAgIGNvbnN0IHAxID0gUGVlcih7dHJpY2tsZTogZmFsc2UsIGluaXRpYXRvcjogdHJ1ZX0pO1xuICAgIGNvbnN0IHAyID0gUGVlcih7dHJpY2tsZTogZmFsc2V9KTtcbiAgICAqL1xuICAgIGNvbnN0IGRhdGExPXRoaXMucHJvcHMuYmxvY2s7XG4gICAgLy90aGlzLnN0YXRlLnBlZXIxLm9uKCdzaWduYWwnLCAoZGF0YSkgPT4ge1xuICAgIHBlZXIxLm9uKCdzaWduYWwnLCAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdwMSBzaWduYWwnLCBkYXRhKTtcbiAgICBwZWVyMi5zaWduYWwoZGF0YSk7XG4gICAgLy9wZWVyMy5zaWduYWwoZGF0YSk7XG4gICAgLy90aGlzLnN0YXRlLnBlZXIyLnNpZ25hbChkYXRhKVxuICAgIH0pXG5cbiAgICBwZWVyMi5vbignc2lnbmFsJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdwMiBzaWduYWwnLCBkYXRhKTtcbiAgICBwZWVyMS5zaWduYWwoZGF0YSk7XG4gICAgLy9wZWVyMy5zaWduYWwoZGF0YSk7XG4gICAgfSlcbiAgICAvKlxuICAgIHBlZXIzLm9uKCdzaWduYWwnLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3AzIHNpZ25hbCcsIGRhdGEpO1xuICAgIHBlZXIxLnNpZ25hbChkYXRhKTtcbiAgICBwZWVyMi5zaWduYWwoZGF0YSk7XG4gIH0pKi9cblxuICAgIC8vcGVlciAxIHNlbmRzIHRoZSBkYXRhIHRvIGFsbCBwZWVyc1xuICAgIHBlZXIxLm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdwMSBjb25uZWN0ZWQnKVxuICAgIC8vcGVlcjEuc2VuZCgnSGVsbG8sIHAyLiBIb3cgYXJlIHlvdT8nKVxuICAgIHBlZXIxLnNlbmQoZGF0YTEpXG4gICAgfSk7XG5cbiAgICAvL3NldHRpbmcgcGVlcjIgdG8gcmVjZWl2ZSB0aGUgYmxvY2tcbiAgICBwZWVyMi5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIGluIFBlZXIgMjonLCBkYXRhLnRvU3RyaW5nKCd1dGYtOCcpKVxuICAgIHBlZXIyLnNlbmQoJ0RhdGEgcmVjZWl2ZWQgaW4gcGVlcjEhIScpXG4gICAgfSk7XG5cbiAgICAvL3NldHRpbmcgcGVlcjMgdG8gcmVjZWl2ZSB0aGUgYmxvY2tcbiAgICAvKlxuICAgIHBlZXIzLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQnLCBkYXRhLnRvU3RyaW5nKCd1dGYtOCcpKVxuICAgIHBlZXIzLnNlbmQoJ0RhdGEgcmVjZWl2ZWQgaW4gcGVlcjMhIScpXG4gIH0pOyovXG5cbi8qXG4gICAgcDEub24oJ3NpZ25hbCcsIChkYXRhKSA9PiBjb25zb2xlLmxvZygncDEgc2lnbmFsJywgZGF0YSkpXG4gICAgcDEub24oJ2Nvbm5lY3QnLCAoKSA9PiBjb25zb2xlLmxvZygncDEgY29ubmVjdGVkJykpXG4gICAgcDEub24oJ2RhdGEnLCAoZGF0YSkgPT4gY29uc29sZS5sb2coJ3AxIHJlY2VpdmVkJywgZGF0YSkpXG4gICAgcDEub24oJ2Vycm9yJywgKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdwMSBlcnJvcicsIGVycm9yKSlcbiAgICBwMS5vbignY2xvc2UnLCAoKSA9PiBjb25zb2xlLmxvZygncDEgY29ubmVjdGlvbiBjbG9zZWQnKSlcblxuXG4gICAgcDIub24oJ3NpZ25hbCcsIChkYXRhKSA9PiBjb25zb2xlLmxvZygncDIgc2lnbmFsJywgZGF0YSkpXG4gICAgcDIub24oJ2Nvbm5lY3QnLCAoKSA9PiBjb25zb2xlLmxvZygncDIgY29ubmVjdGVkJykpXG4gICAgcDIub24oJ2RhdGEnLCAoZGF0YSkgPT4gY29uc29sZS5sb2coJ3AyIHJlY2VpdmVkJywgZGF0YSkpXG4gICAgcDIub24oJ2Vycm9yJywgKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdwMiBlcnJvcicsIGVycm9yKSlcbiAgICBwMi5vbignY2xvc2UnLCAoKSA9PiBjb25zb2xlLmxvZygncDIgY29ubmVjdGlvbiBjbG9zZWQnKSlcbiovXG4gICAgcmV0dXJuKDxkaXY+XCJQZWVycyBjb25uZWN0ZWRcIjwvZGl2Pik7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBlZXJzQmxvY2s7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3BlZXJjb25uLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBOztBQUhBOzs7OztBQU1BO0FBQUE7QUFDQTtBQUVBO0FBSUE7Ozs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBTUE7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBR0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==