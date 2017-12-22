'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/hagler/Projects/Next.js/examples/become-next/pages/index.js?entry';


var PostLink = function PostLink(props) {
	return _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement(_link2.default, { as: '/p/' + props.id, href: '/post?title=' + props.title, __source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement('a', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, props.title)));
};

exports.default = function () {
	return _react2.default.createElement(_MyLayout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement('h1', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, 'My Blog'), _react2.default.createElement('ul', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement(PostLink, { title: 'Hello Next.js', __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}), _react2.default.createElement(PostLink, { title: 'Learn Next.js is awesone', __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}), _react2.default.createElement(PostLink, { title: 'Deploy apps with Zeit', __source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	})));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkxpbmsiLCJQb3N0TGluayIsInByb3BzIiwiaWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFdBQVcsU0FBWCxBQUFXLGdCQUFBO3dCQUNoQixjQUFBOzthQUFBO2VBQUEsQUFDQztBQUREO0FBQUEsRUFBQSxrQkFDQyxBQUFDLGdDQUFLLFlBQVUsTUFBaEIsQUFBc0IsSUFBTyx1QkFBcUIsTUFBbEQsQUFBd0Q7YUFBeEQ7ZUFBQSxBQUNDO0FBREQ7b0JBQ0MsY0FBQTs7YUFBQTtlQUFBLEFBQUk7QUFBSjtBQUFBLFVBSGMsQUFDaEIsQUFDQyxBQUNDLEFBQVU7QUFIYixBQVFBOztrQkFBZSxZQUFBO3dCQUNkLEFBQUM7O2FBQUQ7ZUFBQSxBQUNDO0FBREQ7QUFBQSxFQUFBLGtCQUNDLGNBQUE7O2FBQUE7ZUFBQTtBQUFBO0FBQUEsSUFERCxBQUNDLEFBQ0EsNEJBQUEsY0FBQTs7YUFBQTtlQUFBLEFBQ0M7QUFERDtBQUFBLGtDQUNDLEFBQUMsWUFBUyxPQUFWLEFBQWdCO2FBQWhCO2VBREQsQUFDQyxBQUNBO0FBREE7bUNBQ0EsQUFBQyxZQUFTLE9BQVYsQUFBZ0I7YUFBaEI7ZUFGRCxBQUVDLEFBQ0E7QUFEQTttQ0FDQSxBQUFDLFlBQVMsT0FBVixBQUFnQjthQUFoQjtlQU5ZLEFBQ2QsQUFFQyxBQUdDO0FBQUE7O0FBTkgiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvaGFnbGVyL1Byb2plY3RzL05leHQuanMvZXhhbXBsZXMvYmVjb21lLW5leHQifQ==