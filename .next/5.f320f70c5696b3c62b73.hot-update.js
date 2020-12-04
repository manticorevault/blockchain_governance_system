webpackHotUpdate(5,{

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(905);

var _factory = __webpack_require__(1197);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/pages/projects.js?entry";


// Access the Deployed Projects and display them

var ProjectList = function (_Component) {
    (0, _inherits3.default)(ProjectList, _Component);

    function ProjectList() {
        (0, _classCallCheck3.default)(this, ProjectList);

        return (0, _possibleConstructorReturn3.default)(this, (ProjectList.__proto__ || (0, _getPrototypeOf2.default)(ProjectList)).apply(this, arguments));
    }

    (0, _createClass3.default)(ProjectList, [{
        key: "renderProjects",

        // A function to create a card group component
        // (Based on Semantic UI)
        value: function renderProjects() {
            var items = this.props.projects.map(function (address) {
                return {
                    header: _react2.default.createElement("h2", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    }, "Short ID: ", address.substr(0, 9), " "),
                    description: address,
                    extra: _react2.default.createElement(_semanticUiReact.Button, { color: "olive", icon: "eye", content: "View Project", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    }),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            // Display the list of projects in the front end
            return _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement("link", {
                async: true,
                rel: "stylesheet",
                href: "//cdn.jsdelivr.net/npm/semantic-ui@2.0.0/dist/semantic.min.css",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), this.renderProjects(), _react2.default.createElement(_semanticUiReact.Button, {
                content: "Start a new Project",
                icon: "add",
                secondary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }));
        }
    }], [{
        key: "getInitialProps",

        // Define the getInitialProps function in a static way
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var projects;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedProjects().call();

                            case 2:
                                projects = _context.sent;
                                return _context.abrupt("return", { projects: projects });

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return ProjectList;
}(_react.Component);

exports.default = ProjectList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJQcm9qZWN0TGlzdCIsIml0ZW1zIiwicHJvcHMiLCJwcm9qZWN0cyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJzdWJzdHIiLCJkZXNjcmlwdGlvbiIsImV4dHJhIiwiZmx1aWQiLCJyZW5kZXJQcm9qZWN0cyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZFByb2plY3RzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFhOzs7Ozs7Ozs7QUFFcEI7O0lBQ00sQTs7Ozs7Ozs7OzthQVNGOztBQUNBOzt5Q0FDaUIsQUFDYjtnQkFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxtQkFBVyxBQUM3Qzs7NENBQ1ksY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHFCQUFBLEVBQWUsc0JBQUEsQUFBUSxPQUFSLEFBQWUsR0FBOUIsQUFBZSxBQUFrQixJQUR0QyxBQUNLLEFBQ1I7aUNBRkcsQUFFVSxBQUNiOzJDQUFPLEFBQUMseUNBQU8sT0FBUixBQUFjLFNBQVEsTUFBdEIsQUFBMkIsT0FBTSxTQUFqQyxBQUF5QztzQ0FBekM7d0NBSEosQUFHSSxBQUNQO0FBRE87cUJBQUE7MkJBSFgsQUFBTyxBQUlJLEFBR2Q7QUFQVSxBQUNIO0FBRlIsQUFBYyxBQVVkLGFBVmM7O2lEQVVQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0YsQUFDTDtBQUNBO21DQUFPLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0g7QUFERztBQUFBLGFBQUE7dUJBQ0gsQUFFSTtxQkFGSixBQUVRLEFBQ0o7c0JBSEosQUFHUzs7OEJBSFQ7Z0NBREcsQUFDSCxBQUtDO0FBTEQ7QUFDSSxxQkFGRCxBQU1GLEFBQUssQUFDTixrQ0FBQSxBQUFDO3lCQUFELEFBQ1ksQUFDUjtzQkFGSixBQUVTLEFBQ0w7MkJBSEo7OzhCQUFBO2dDQVBKLEFBQU8sQUFPSCxBQU1QO0FBTk87QUFDSTs7O2FBbENaOzs7Ozs7Ozs7Ozt1Q0FFMkIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHNCQUFoQixBQUFzQyxBOztpQ0FBdkQ7QTtpRUFHQyxFQUFFLFVBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5XLEEsQUE0QzFCOztrQkFBQSxBQUFlIiwiZmlsZSI6InByb2plY3RzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FydHVyL0RvY3VtZW50cy9ibG9ja2NoYWluX2dvdmVybmFuY2Vfc3lzdGVtIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/artur/Documents/blockchain_governance_system/pages/projects.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/artur/Documents/blockchain_governance_system/pages/projects.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/projects")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mMzIwZjcwYzU2OTZiM2M2MmI3My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvamVjdHMuanM/YWM2ODdlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XG5cbi8vIEFjY2VzcyB0aGUgRGVwbG95ZWQgUHJvamVjdHMgYW5kIGRpc3BsYXkgdGhlbVxuY2xhc3MgUHJvamVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8vIERlZmluZSB0aGUgZ2V0SW5pdGlhbFByb3BzIGZ1bmN0aW9uIGluIGEgc3RhdGljIHdheVxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkUHJvamVjdHMoKS5jYWxsKCk7XG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSBvYmplY3QgZnJvbSB0aGUgQ29tcG9uZW50XG4gICAgICAgIHJldHVybiB7IHByb2plY3RzIH07XG4gICAgfVxuXG4gICAgLy8gQSBmdW5jdGlvbiB0byBjcmVhdGUgYSBjYXJkIGdyb3VwIGNvbXBvbmVudFxuICAgIC8vIChCYXNlZCBvbiBTZW1hbnRpYyBVSSlcbiAgICByZW5kZXJQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLnByb2plY3RzLm1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiA8aDI+U2hvcnQgSUQ6IHthZGRyZXNzLnN1YnN0cigwLCA5KX0gPC9oMj4sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgZXh0cmE6IDxCdXR0b24gY29sb3I9XCJvbGl2ZVwiIGljb249XCJleWVcIiBjb250ZW50PVwiVmlldyBQcm9qZWN0XCIgLz4sXG4gICAgICAgICAgICAgICAgZmx1aWQ6IHRydWUsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIERpc3BsYXkgdGhlIGxpc3Qgb2YgcHJvamVjdHMgaW4gdGhlIGZyb250IGVuZFxuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgYXN5bmNcbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjAuMC9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclByb2plY3RzKCl9XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29udGVudD1cIlN0YXJ0IGEgbmV3IFByb2plY3RcIlxuICAgICAgICAgICAgICAgIGljb249XCJhZGRcIlxuICAgICAgICAgICAgICAgIHNlY29uZGFyeVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3Byb2plY3RzLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQUE7O0FBRUE7QUFBQTs7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBTkE7QUFRQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUlBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFIQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTs7O0FBbENBO0FBQ0E7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==