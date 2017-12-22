webpackHotUpdate(5,{

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(399);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = __webpack_require__(392);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/hagler/Projects/Next.js/examples/become-next/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/hagler/Projects/Next.js/examples/become-next/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iMDgwMzA3Y2E2MDg2YjNhMDgwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NGEyMTU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuXHQ8bGk+XG5cdFx0PExpbmsgYXM9e2AvcC8ke3Byb3BzLmlkfWB9ICBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfSA+XG5cdFx0XHQ8YT57cHJvcHMudGl0bGV9PC9hPlxuXHRcdDwvTGluaz5cblx0PC9saT5cbilcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuXHQ8TGF5b3V0PlxuXHRcdDxoMT5NeSBCbG9nPC9oMT5cblx0XHQ8dWw+XG5cdFx0XHQ8UG9zdExpbmsgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIgLz5cblx0XHRcdDxQb3N0TGluayB0aXRsZT1cIkxlYXJuIE5leHQuanMgaXMgYXdlc29uZVwiIC8+XG5cdFx0XHQ8UG9zdExpbmsgdGl0bGU9XCJEZXBsb3kgYXBwcyB3aXRoIFplaXRcIiAvPlxuXHRcdDwvdWw+XG5cdDwvTGF5b3V0PlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9