webpackHotUpdate(5,{

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(398);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/hagler/Projects/Next.js/examples/become-next/pages/post.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/hagler/Projects/Next.js/examples/become-next/pages/post.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yMDQwMDUxMWIwZTI5MzUyNDJhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC5qcz85NmM1NThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcblxuY29uc3QgQ29udGVudCA9IHByb3BzID0+IChcblx0PGRpdj5cblx0XHQ8aDE+e3Byb3BzLnVybC5xdWVyeS50aXRsZX08L2gxPlxuXHRcdDxwPlRoaXMgaXMgdGhlIGJsb2cgcG9zdCBjb250ZW50LjwvcD5cblx0PC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuXHQ8TGF5b3V0PlxuXHRcdDxDb250ZW50IHVybD17cHJvcHMudXJsfSAvPlxuXHQ8L0xheW91dD5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3Bvc3QuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9