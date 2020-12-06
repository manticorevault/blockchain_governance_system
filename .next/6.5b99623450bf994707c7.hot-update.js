webpackHotUpdate(6,{

/***/ 1228:
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

var _semanticUiReact = __webpack_require__(754);

var _factory = __webpack_require__(1229);

var _factory2 = _interopRequireDefault(_factory);

var _Layout = __webpack_require__(1518);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(1226);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/pages/projects/list.js?entry";


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
                    header: _react2.default.createElement(_semanticUiReact.Label, { color: "black", style: { borderRadius: "5px" }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    }, " Short ID: ", address.substr(0, 9), " "),
                    description: _react2.default.createElement("h4", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    }, " Address: ", address),
                    extra: _react2.default.createElement(_routes.Link, { route: "/projects/" + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    }, _react2.default.createElement("a", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    }, _react2.default.createElement(_semanticUiReact.Button, { color: "olive", icon: "eye", content: "View Project", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    }))),
                    fluid: true,
                    style: { overflowWrap: "break-word" }
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 2, items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            // Display the list of projects in the front end
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement("h1", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, " Projects "), this.renderProjects()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL2xpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiTGFiZWwiLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIlByb2plY3RMaXN0IiwiaXRlbXMiLCJwcm9wcyIsInByb2plY3RzIiwibWFwIiwiaGVhZGVyIiwiYm9yZGVyUmFkaXVzIiwiYWRkcmVzcyIsInN1YnN0ciIsImRlc2NyaXB0aW9uIiwiZXh0cmEiLCJmbHVpZCIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyUHJvamVjdHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRQcm9qZWN0cyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVE7O0FBQ3ZCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0FBRXJCOztJLEFBQ007Ozs7Ozs7Ozs7YUFTRjs7QUFDQTs7eUNBQ2lCLEFBQ2I7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksbUJBQVcsQUFDN0M7OzRDQUNZLEFBQUMsd0NBQU0sT0FBUCxBQUFhLFNBQVEsT0FBTyxFQUFFLGNBQTlCLEFBQTRCLEFBQWdCO3NDQUE1Qzt3Q0FBQTtBQUFBO3FCQUFBLEVBQWlFLHVCQUFBLEFBQVEsT0FBUixBQUFlLEdBQWhGLEFBQWlFLEFBQWtCLElBRHhGLEFBQ0ssQUFDUjtpREFBYSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEscUJBQUEsRUFBZSxjQUZ6QixBQUVVLEFBQ2I7MkNBQ0ksQUFBQyw4QkFBSyxzQkFBTixBQUEwQjtzQ0FBMUI7d0NBQUEsQUFDSTtBQURKO3FCQUFBLGtCQUNJLGNBQUE7O3NDQUFBO3dDQUFBLEFBQ0k7QUFESjtBQUFBLHVDQUNJLEFBQUMseUNBQU8sT0FBUixBQUFjLFNBQVEsTUFBdEIsQUFBMkIsT0FBTSxTQUFqQyxBQUF5QztzQ0FBekM7d0NBTlQsQUFJQyxBQUNJLEFBQ0ksQUFJWjtBQUpZOzsyQkFOVCxBQVVJLEFBQ1A7MkJBQU8sRUFBRSxjQVhiLEFBQU8sQUFXSSxBQUFnQixBQUc5QjtBQWRVLEFBQ0g7QUFGUixBQUFjLEFBaUJkLGFBakJjOztpREFpQlAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sYUFBWixBQUF5QixHQUFHLE9BQTVCLEFBQW1DOzhCQUFuQztnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUlGLEFBQ0w7QUFDQTttQ0FFSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFjQyxvQkFsQmIsQUFFSSxBQUNJLEFBZUssQUFBSyxBQUlyQjs7O2FBeEREOzs7Ozs7Ozs7Ozt1Q0FFMkIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHNCQUFoQixBLEFBQXNDOztpQ0FBdkQ7QTtpRUFHQyxFQUFFLFVBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5XLEEsQUE2RDFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Imxpc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYXJ0dXIvRG9jdW1lbnRzL2Jsb2NrY2hhaW5fZ292ZXJuYW5jZV9zeXN0ZW0ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/artur/Documents/blockchain_governance_system/pages/projects/list.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/artur/Documents/blockchain_governance_system/pages/projects/list.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/projects/list")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi41Yjk5NjIzNDUwYmY5OTQ3MDdjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvamVjdHMvbGlzdC5qcz9iMjVjZDUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgTGFiZWwgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi8uLi9ldGhlcmV1bS9mYWN0b3J5XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcblxuLy8gQWNjZXNzIHRoZSBEZXBsb3llZCBQcm9qZWN0cyBhbmQgZGlzcGxheSB0aGVtXG5jbGFzcyBQcm9qZWN0TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLy8gRGVmaW5lIHRoZSBnZXRJbml0aWFsUHJvcHMgZnVuY3Rpb24gaW4gYSBzdGF0aWMgd2F5XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRQcm9qZWN0cygpLmNhbGwoKTtcblxuICAgICAgICAvLyBSZXR1cm4gdGhlIG9iamVjdCBmcm9tIHRoZSBDb21wb25lbnRcbiAgICAgICAgcmV0dXJuIHsgcHJvamVjdHMgfTtcbiAgICB9XG5cbiAgICAvLyBBIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIGNhcmQgZ3JvdXAgY29tcG9uZW50XG4gICAgLy8gKEJhc2VkIG9uIFNlbWFudGljIFVJKVxuICAgIHJlbmRlclByb2plY3RzKCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMucHJvamVjdHMubWFwKGFkZHJlc3MgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IDxMYWJlbCBjb2xvcj1cImJsYWNrXCIgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiIH19PiBTaG9ydCBJRDoge2FkZHJlc3Muc3Vic3RyKDAsIDkpfSA8L0xhYmVsPixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogPGg0PiBBZGRyZXNzOiB7YWRkcmVzc308L2g0PixcbiAgICAgICAgICAgICAgICBleHRyYTogKFxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9wcm9qZWN0cy8ke2FkZHJlc3N9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwib2xpdmVcIiBpY29uPVwiZXllXCIgY29udGVudD1cIlZpZXcgUHJvamVjdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtc1BlclJvdz17Mn0gaXRlbXM9e2l0ZW1zfSAvPlxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBEaXNwbGF5IHRoZSBsaXN0IG9mIHByb2plY3RzIGluIHRoZSBmcm9udCBlbmRcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+IFByb2plY3RzIDwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIHJvdXRlPVwiL3Byb2plY3RzL2NyZWF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiU3RhcnQgYSBuZXcgUHJvamVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJhZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUHJvamVjdHMoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0ID5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0TGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9wcm9qZWN0cy9saXN0LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUFBOztBQUVBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSUE7QUFKQTs7QUFLQTtBQUFBO0FBVkE7QUFlQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUtBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7O0FBdENBO0FBQ0E7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==