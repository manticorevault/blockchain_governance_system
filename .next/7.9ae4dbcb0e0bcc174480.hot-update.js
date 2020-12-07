webpackHotUpdate(7,{

/***/ 1525:
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

var _Layout = __webpack_require__(1518);

var _Layout2 = _interopRequireDefault(_Layout);

var _ContributionForm = __webpack_require__(1528);

var _ContributionForm2 = _interopRequireDefault(_ContributionForm);

var _project = __webpack_require__(1526);

var _project2 = _interopRequireDefault(_project);

var _web = __webpack_require__(1230);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/pages/projects/single.js?entry";


var ProjectSingle = function (_Component) {
    (0, _inherits3.default)(ProjectSingle, _Component);

    function ProjectSingle() {
        (0, _classCallCheck3.default)(this, ProjectSingle);

        return (0, _possibleConstructorReturn3.default)(this, (ProjectSingle.__proto__ || (0, _getPrototypeOf2.default)(ProjectSingle)).apply(this, arguments));
    }

    (0, _createClass3.default)(ProjectSingle, [{
        key: "renderCards",

        // Create a method to render the Cards
        value: function renderCards() {

            // Destructure the information into props
            var _props = this.props,
                balance = _props.balance,
                managerAddress = _props.managerAddress,
                minimumAmount = _props.minimumAmount,
                requestsCount = _props.requestsCount,
                votersCount = _props.votersCount;

            // Create an array of objects with the info needed

            var items = [{
                header: managerAddress,
                meta: "Manager Address",
                description: "This is the address of the project manager. They can create governance requests to be voted by the users.",
                // Add the style property for custom styles
                style: { overflowWrap: "break-word" }
            }, {
                header: minimumAmount,
                meta: "Minium Amount",
                description: "Minimum amount one need to contribute in order to participate in the governance decisions"
            }, {
                header: requestsCount,
                meta: "Number of Requests",
                description: "Number of governance decisions in this project"
            }, {
                header: votersCount,
                meta: "Number of Voters",
                description: "Amount of voters currently related to this project"
            }, {
                // Convert the balance to ETH
                header: _web2.default.utils.fromWei(balance, "ether"),
                meta: "Project Balance in ETH",
                description: "How much ETH is currently related to this project"
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 1, centered: true, items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, " Project Page "), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_ContributionForm2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }))));
        }
    }], [{
        key: "getInitialProps",

        // Fetch information and return it as an object to be
        // captured by the props
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var project, info;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // Access the project's address
                                project = (0, _project2.default)(props.query.address);

                                // Retrieve information from the contract

                                _context.next = 3;
                                return project.methods.getInfo().call();

                            case 3:
                                info = _context.sent;
                                return _context.abrupt("return", {
                                    minimumAmount: info[0],
                                    balance: info[1],
                                    requestsCount: info[2],
                                    votersCount: info[3],
                                    managerAddress: info[4]
                                });

                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return ProjectSingle;
}(_react.Component);

exports.default = ProjectSingle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL3NpbmdsZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJJY29uIiwiR3JpZCIsIkxheW91dCIsIkNvbnRyaWJ1dGlvbkZvcm0iLCJQcm9qZWN0Iiwid2ViMyIsIlByb2plY3RTaW5nbGUiLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyQWRkcmVzcyIsIm1pbmltdW1BbW91bnQiLCJyZXF1ZXN0c0NvdW50Iiwidm90ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJwcm9qZWN0IiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldEluZm8iLCJjYWxsIiwiaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7Ozs7OzthQXFCRjs7O3NDQUNjLEFBRVY7O0FBRlU7eUJBU04sS0FUTSxBQVNEO2dCQVRDLEFBSU4saUJBSk0sQUFJTjtnQkFKTSxBQUtOLHdCQUxNLEFBS047Z0JBTE0sQUFNTix1QkFOTSxBQU1OO2dCQU5NLEFBT04sdUJBUE0sQUFPTjtnQkFQTSxBQVFOLHFCQVJNLEFBUU4sQUFHSjs7QUFDQTs7Z0JBQU07d0JBQ0YsQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkFISixBQUdpQixBQUNiO0FBQ0E7dUJBQU8sRUFBRSxjQU5ILEFBQ1YsQUFLVyxBQUFnQjtBQUwzQixBQUNJLGFBRk07d0JBUVYsQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkFYTSxBQVFWLEFBR2lCO0FBSGpCLEFBQ0k7d0JBSUosQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkFoQk0sQUFhVixBQUdpQjtBQUhqQixBQUNJO3dCQUlKLEFBQ1ksQUFDUjtzQkFGSixBQUVVLEFBQ047NkJBckJNLEFBa0JWLEFBR2lCO0FBSGpCLEFBQ0k7QUFNQTt3QkFBUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FGL0IsQUFFWSxBQUE0QixBQUNwQztzQkFISixBQUdVLEFBQ047NkJBM0JSLEFBQWMsQUF1QlYsQUFJaUIsQUFJckI7QUFSSSxBQUNJOztpREFPRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxhQUFaLEFBQXlCLEdBQUcsVUFBNUIsQUFBc0MsTUFBTSxPQUE1QyxBQUFtRDs4QkFBbkQ7Z0NBQVAsQUFBTyxBQUVWO0FBRlU7YUFBQTs7OztpQ0FLRixBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUVBLG1DQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0s7QUFETDtvQkFESixBQUNJLEFBQ0ssQUFBSyxBQUdWLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FWaEIsQUFDSSxBQUdJLEFBS0ksQUFDSSxBQU1uQjtBQU5tQjtBQUFBOzs7YUEvRXBCOztBQUNBOzs7aUgsQUFDNkI7Ozs7O2lDQUN6QjtBQUNNO0EsMENBQVUsdUJBQVEsTUFBQSxBQUFNLE0sQUFBZCxBQUFvQixBQUVwQzs7Ozs7dUNBQ21CLFFBQUEsQUFBUSxRQUFSLEFBQWdCLFUsQUFBaEIsQUFBMEI7O2lDQUF2QztBOzttREFJYSxLQURaLEFBQ1ksQUFBSyxBQUNwQjs2Q0FBUyxLQUZOLEFBRU0sQUFBSyxBQUNkO21EQUFlLEtBSFosQUFHWSxBQUFLLEFBQ3BCO2lEQUFhLEtBSlYsQUFJVSxBQUFLLEFBQ2xCO29EQUFnQixLQUxiLEFBS2EsQUFBSyxBO0FBTGxCLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFiZ0IsQSxBQTBGNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2luZ2xlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FydHVyL0RvY3VtZW50cy9ibG9ja2NoYWluX2dvdmVybmFuY2Vfc3lzdGVtIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/artur/Documents/blockchain_governance_system/pages/projects/single.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/artur/Documents/blockchain_governance_system/pages/projects/single.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/projects/single")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy45YWU0ZGJjYjBlMGJjYzE3NDQ4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvamVjdHMvc2luZ2xlLmpzPzRjM2FlMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgSWNvbiwgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBDb250cmlidXRpb25Gb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGlvbkZvcm1cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi8uLi9ldGhlcmV1bS9wcm9qZWN0XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuXG5jbGFzcyBQcm9qZWN0U2luZ2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8vIEZldGNoIGluZm9ybWF0aW9uIGFuZCByZXR1cm4gaXQgYXMgYW4gb2JqZWN0IHRvIGJlXG4gICAgLy8gY2FwdHVyZWQgYnkgdGhlIHByb3BzXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgICAgICAvLyBBY2Nlc3MgdGhlIHByb2plY3QncyBhZGRyZXNzXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KHByb3BzLnF1ZXJ5LmFkZHJlc3MpXG5cbiAgICAgICAgLy8gUmV0cmlldmUgaW5mb3JtYXRpb24gZnJvbSB0aGUgY29udHJhY3RcbiAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHByb2plY3QubWV0aG9kcy5nZXRJbmZvKCkuY2FsbCgpO1xuXG4gICAgICAgIC8vIFRyYW5zbGF0ZSB0aGUgaW5mbyBvYmplY3QgYW5kIHJldHVybiBhcyBpbmRpdmlkdWFsIHByb3BzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW5pbXVtQW1vdW50OiBpbmZvWzBdLFxuICAgICAgICAgICAgYmFsYW5jZTogaW5mb1sxXSxcbiAgICAgICAgICAgIHJlcXVlc3RzQ291bnQ6IGluZm9bMl0sXG4gICAgICAgICAgICB2b3RlcnNDb3VudDogaW5mb1szXSxcbiAgICAgICAgICAgIG1hbmFnZXJBZGRyZXNzOiBpbmZvWzRdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGEgbWV0aG9kIHRvIHJlbmRlciB0aGUgQ2FyZHNcbiAgICByZW5kZXJDYXJkcygpIHtcblxuICAgICAgICAvLyBEZXN0cnVjdHVyZSB0aGUgaW5mb3JtYXRpb24gaW50byBwcm9wc1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBiYWxhbmNlLFxuICAgICAgICAgICAgbWFuYWdlckFkZHJlc3MsXG4gICAgICAgICAgICBtaW5pbXVtQW1vdW50LFxuICAgICAgICAgICAgcmVxdWVzdHNDb3VudCxcbiAgICAgICAgICAgIHZvdGVyc0NvdW50XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggdGhlIGluZm8gbmVlZGVkXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcjogbWFuYWdlckFkZHJlc3MsXG4gICAgICAgICAgICAgICAgbWV0YTogXCJNYW5hZ2VyIEFkZHJlc3NcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBhZGRyZXNzIG9mIHRoZSBwcm9qZWN0IG1hbmFnZXIuIFRoZXkgY2FuIGNyZWF0ZSBnb3Zlcm5hbmNlIHJlcXVlc3RzIHRvIGJlIHZvdGVkIGJ5IHRoZSB1c2Vycy5cIixcbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHN0eWxlIHByb3BlcnR5IGZvciBjdXN0b20gc3R5bGVzXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcjogbWluaW11bUFtb3VudCxcbiAgICAgICAgICAgICAgICBtZXRhOiBcIk1pbml1bSBBbW91bnRcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNaW5pbXVtIGFtb3VudCBvbmUgbmVlZCB0byBjb250cmlidXRlIGluIG9yZGVyIHRvIHBhcnRpY2lwYXRlIGluIHRoZSBnb3Zlcm5hbmNlIGRlY2lzaW9uc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcjogcmVxdWVzdHNDb3VudCxcbiAgICAgICAgICAgICAgICBtZXRhOiBcIk51bWJlciBvZiBSZXF1ZXN0c1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk51bWJlciBvZiBnb3Zlcm5hbmNlIGRlY2lzaW9ucyBpbiB0aGlzIHByb2plY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHZvdGVyc0NvdW50LFxuICAgICAgICAgICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIFZvdGVyc1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFtb3VudCBvZiB2b3RlcnMgY3VycmVudGx5IHJlbGF0ZWQgdG8gdGhpcyBwcm9qZWN0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgYmFsYW5jZSB0byBFVEhcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCBcImV0aGVyXCIpLFxuICAgICAgICAgICAgICAgIG1ldGE6IFwiUHJvamVjdCBCYWxhbmNlIGluIEVUSFwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkhvdyBtdWNoIEVUSCBpcyBjdXJyZW50bHkgcmVsYXRlZCB0byB0aGlzIHByb2plY3RcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG5cbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zUGVyUm93PXsxfSBjZW50ZXJlZD17dHJ1ZX0gaXRlbXM9e2l0ZW1zfSAvPlxuXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxoMz4gUHJvamVjdCBQYWdlIDwvaDM+XG5cbiAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJkcygpfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJpYnV0aW9uRm9ybSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RTaW5nbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcHJvamVjdHMvc2luZ2xlLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBOztBQUVBO0FBQ0E7QUFIQTtBQVNBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFBQTtBQUVBO0FBSUE7QUFQQTtBQUNBO0FBTUE7QUFBQTtBQUVBO0FBRkE7QUFBQTs7OztBQU1BO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBTUE7QUFOQTtBQUFBOzs7QUEvRUE7QUFDQTtBQUFBOzs7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQURBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==