webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(180);


/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(36);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcProgress = __webpack_require__(174);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Example = _react2.default.createClass({
	  displayName: 'Example',
	  getInitialState: function getInitialState() {
	    return {
	      percent: 30,
	      color: '#3FC7FA'
	    };
	  },
	  changeState: function changeState() {
	    var colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
	    var value = parseInt(Math.random() * 100, 10);
	    this.setState({
	      percent: value,
	      color: colorMap[parseInt(Math.random() * 3, 10)]
	    });
	  },
	  render: function render() {
	    var containerStyle = {
	      width: '250px'
	    };
	    var circleContainerStyle = {
	      width: '250px',
	      height: '250px',
	      display: 'inline-block'
	    };
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h3',
	        null,
	        'Line Progress ',
	        this.state.percent,
	        '%'
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: containerStyle },
	        _react2.default.createElement(_rcProgress.Line, { percent: this.state.percent, strokeWidth: '4', strokeColor: this.state.color })
	      ),
	      _react2.default.createElement(
	        'h3',
	        null,
	        'Circle Progress ',
	        this.state.percent,
	        '%'
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: circleContainerStyle },
	        _react2.default.createElement(_rcProgress.Circle, {
	          percent: this.state.percent,
	          strokeWidth: '6',
	          strokeLinecap: 'square',
	          strokeColor: this.state.color
	        })
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'button',
	          { onClick: this.changeState },
	          'Change State'
	        )
	      )
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(Example, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple.js.map