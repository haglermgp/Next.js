'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/hagler/Projects/Next.js/examples/become-next/pages/post.js?entry';


var Content = function Content(props) {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, _react2.default.createElement('h1', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, props.url.query.title), _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, 'This is the blog post content.'));
};

exports.default = function (props) {
	return _react2.default.createElement(_MyLayout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement(Content, { url: props.url, __source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiQ29udGVudCIsInByb3BzIiwidXJsIiwicXVlcnkiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBRW5CLElBQU0sVUFBVSxTQUFWLEFBQVUsZUFBQTt3QkFDZixjQUFBOzthQUFBO2VBQUEsQUFDQztBQUREO0FBQUEsRUFBQSxrQkFDQyxjQUFBOzthQUFBO2VBQUEsQUFBSztBQUFMO0FBQUEsVUFBSyxBQUFNLElBQU4sQUFBVSxNQURoQixBQUNDLEFBQXFCLEFBQ3JCLHdCQUFBLGNBQUE7O2FBQUE7ZUFBQTtBQUFBO0FBQUEsSUFIYyxBQUNmLEFBRUM7QUFIRixBQU9BOztrQkFBZSxVQUFBLEFBQUMsT0FBRDt3QkFDZCxBQUFDOzthQUFEO2VBQUEsQUFDQztBQUREO0FBQUEsRUFBQSxnQ0FDQyxBQUFDLFdBQVEsS0FBSyxNQUFkLEFBQW9CO2FBQXBCO2VBRmEsQUFDZCxBQUNDO0FBQUE7O0FBRkYiLCJmaWxlIjoicG9zdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9oYWdsZXIvUHJvamVjdHMvTmV4dC5qcy9leGFtcGxlcy9iZWNvbWUtbmV4dCJ9