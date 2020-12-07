webpackHotUpdate(5,{

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = __webpack_require__(919);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(476);

var _routes = __webpack_require__(813);

var _project = __webpack_require__(823);

var _project2 = _interopRequireDefault(_project);

var _RequestRow = __webpack_require__(1514);

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/pages/projects/requests/index.js?entry";


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: "createRows",

        // Implement a helper method to iterate on requests list and
        // create a new row for each request
        value: function createRows() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    key: index,
                    id: index,
                    request: request,
                    address: _this2.props.address,
                    votersCount: _this2.props.votersCount,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                });
            });
        }
    }, {
        key: "render",
        value: function render() {

            // Destructuring info for the table tag
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Breadcrumb, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(_semanticUiReact.Breadcrumb.Section, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_routes.Link, { route: "/projects/" + this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, "Project ", this.props.address))), _react2.default.createElement(_semanticUiReact.Breadcrumb.Divider, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement(_semanticUiReact.Breadcrumb.Section, { active: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, "Requests")), _react2.default.createElement("h2", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, " Request List "), _react2.default.createElement("div", { style: { marginBottom: "15px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, "This project has ", this.props.requestCount, " requests")), _react2.default.createElement(_routes.Link, { route: "/projects/" + this.props.address + "/requests/create", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: "olive", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, "Create a New Request"))), _react2.default.createElement(_semanticUiReact.Table, { celled: true, padded: true, selectable: true, color: "olive", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, "Request ID"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, "Description"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, "Value (ETH)"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, "Recipient"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, "Vote Count"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, "Approve"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, "Finalize"))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, this.createRows())));
        }
    }], [{
        key: "getInitialProps",

        // Define a function to get the project address and pass it as props
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, project, requestCount, requests, votersCount;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;

                                // Fetch the Project instance

                                project = (0, _project2.default)(address);

                                // Call getRequestCount and fetch information from it

                                _context.next = 4;
                                return project.methods.getRequestsCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                                    return project.methods.requests(index).call();
                                }));

                            case 7:
                                requests = _context.sent;
                                _context.next = 10;
                                return project.methods.votersCount().call();

                            case 10:
                                votersCount = _context.sent;
                                return _context.abrupt("return", { address: address, requests: requests, requestCount: requestCount, votersCount: votersCount });

                            case 12:
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

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQnJlYWRjcnVtYiIsIkJ1dHRvbiIsIkljb24iLCJUYWJsZSIsIkxpbmsiLCJQcm9qZWN0IiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwidm90ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlcXVlc3RDb3VudCIsImNyZWF0ZVJvd3MiLCJxdWVyeSIsInByb2plY3QiLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVksQUFBUSxBQUFNOztBQUNuQyxBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SUFHakIsQTs7Ozs7Ozs7OzthQXlCRjs7QUFDQTs7cUNBQ2E7eUJBQ1Q7O3dCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDL0M7dUNBQU8sQUFBQzt5QkFBRCxBQUNFLEFBQ0w7d0JBRkcsQUFFQyxBQUNKOzZCQUhHLEFBR00sQUFDVDs2QkFBUyxPQUFBLEFBQUssTUFKWCxBQUlpQixBQUNwQjtpQ0FBYSxPQUFBLEFBQUssTUFMZixBQUtxQjs7a0NBTHJCO29DQUFQLEFBQU8sQUFPVjtBQVBVO0FBQ0gsaUJBREc7QUFEWCxBQUFPLEFBU1YsYUFUVTs7OztpQ0FXRixBQUVMOztBQUZLO2dCQUFBLEFBR0csU0FISCxBQUdxQyx1QkFIckMsQUFHRztnQkFISCxBQUdXLE1BSFgsQUFHcUMsdUJBSHJDLEFBR1c7Z0JBSFgsQUFHZ0IsYUFIaEIsQUFHcUMsdUJBSHJDLEFBR2dCO2dCQUhoQixBQUc0QixPQUg1QixBQUdxQyx1QkFIckMsQUFHNEIsQUFFakM7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCw0QkFBQSxBQUFZOzs4QkFBWjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLDhCQUFLLHNCQUFvQixLQUFBLEFBQUssTUFBL0IsQUFBcUM7OEJBQXJDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFDYSxpQkFBQSxBQUFLLE1BSjlCLEFBQ0ksQUFDSSxBQUNJLEFBQ3dCLEFBS2hDLDBDQUFBLEFBQUMsNEJBQUQsQUFBWTs7OEJBQVo7Z0NBVEosQUFTSSxBQUVBO0FBRkE7QUFBQSxnQ0FFQyxjQUFELDRCQUFBLEFBQVksV0FBUSxRQUFwQjs4QkFBQTtnQ0FBQTtBQUFBO2VBWlIsQUFDSSxBQVdJLEFBSUosOEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBaEJKLEFBZ0JJLEFBRUEsbUNBQUEsY0FBQSxTQUFLLE9BQU8sRUFBRSxjQUFkLEFBQVksQUFBZ0I7OEJBQTVCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBc0IsMEJBQUEsQUFBSyxNQUEzQixBQUFpQyxjQW5CekMsQUFrQkksQUFDSSxBQUVKLCtCQUFBLEFBQUMsOEJBQUssc0JBQW9CLEtBQUEsQUFBSyxNQUF6QixBQUErQixVQUFyQzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxPQUFSLEFBQWM7OEJBQWQ7Z0NBQUE7QUFBQTtlQXZCWixBQXFCSSxBQUNJLEFBQ0ksQUFNUiwyQ0FBQSxBQUFDLHdDQUFNLFFBQVAsTUFBYyxRQUFkLE1BQXFCLFlBQXJCLE1BQWdDLE9BQWhDLEFBQXNDOzhCQUF0QztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUlBLCtCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFJQSxnQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFUSixBQVNJLEFBSUEsZ0NBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBYkosQUFhSSxBQUlBLDhCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQWpCSixBQWlCSSxBQUlBLCtCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQXJCSixBQXFCSSxBQUlBLDRCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQTNCWixBQUNJLEFBQ0ksQUF5QkksQUFNUiwrQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkEvRFosQUFDSSxBQTZCSSxBQWlDSSxBQUNLLEFBQUssQUFNekI7OzthQWhIRDs7OztpSCxBQUM2Qjs7Ozs7aUNBQ2pCO0EsMENBQVksTUFBTSxBLE1BQWxCLEEsQUFFUjs7QUFDTTs7QSwwQ0FBVSx1QkFBQSxBLEFBQVEsQUFFeEI7Ozs7O3VDQUMyQixRQUFBLEFBQVEsUUFBUixBQUFnQixtQixBQUFoQixBQUFtQzs7aUNBQXhEO0E7O3lEQUdpQixBQUFRLFVBQ3JCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFBOEIsT0FBOUIsQUFBcUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDekQ7MkNBQU8sUUFBQSxBQUFRLFFBQVIsQUFBZ0IsU0FBaEIsQUFBeUIsT0FBaEMsQUFBTyxBQUFnQyxBQUMxQztBQUhrQixBQUNuQixBLGlDQUFBLENBRG1COztpQ0FBakI7QTs7dUNBT29CLFFBQUEsQUFBUSxRQUFSLEFBQWdCLGNBQWhCLEFBQThCLEE7O2lDQUFsRDtBO2lFQUVDLEVBQUUsU0FBRixTQUFXLFVBQVgsVUFBcUIsY0FBckIsY0FBbUMsYUFBbkMsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXRCWSxBLEFBcUgzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcnR1ci9Eb2N1bWVudHMvYmxvY2tjaGFpbl9nb3Zlcm5hbmNlX3N5c3RlbSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/artur/Documents/blockchain_governance_system/pages/projects/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/artur/Documents/blockchain_governance_system/pages/projects/requests/index.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/projects/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41NjdmMjYxZjQxOGFjOTU0MWZiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvamVjdHMvcmVxdWVzdHM/MDNiMTFhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgQnJlYWRjcnVtYiwgQnV0dG9uLCBJY29uLCBUYWJsZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi8uLi8uLi9ldGhlcmV1bS9wcm9qZWN0XCI7XG5pbXBvcnQgUmVxdWVzdFJvdyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93XCI7XG5cblxuY2xhc3MgUmVxdWVzdEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8vIERlZmluZSBhIGZ1bmN0aW9uIHRvIGdldCB0aGUgcHJvamVjdCBhZGRyZXNzIGFuZCBwYXNzIGl0IGFzIHByb3BzXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xuXG4gICAgICAgIC8vIEZldGNoIHRoZSBQcm9qZWN0IGluc3RhbmNlXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KGFkZHJlc3MpO1xuXG4gICAgICAgIC8vIENhbGwgZ2V0UmVxdWVzdENvdW50IGFuZCBmZXRjaCBpbmZvcm1hdGlvbiBmcm9tIGl0XG4gICAgICAgIGNvbnN0IHJlcXVlc3RDb3VudCA9IGF3YWl0IHByb2plY3QubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBpbnRzIHdpdGggdGhlIHJlcXVlc3RzIHRvIGJlIGRlc3BsYXllZCBvbiBzY3JlZW5cbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpLmZpbGwoKS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3QubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBQdWxsIHRoZSB0b3RhbCBudW1iZXIgb2Ygdm90ZXJzXG4gICAgICAgIGNvbnN0IHZvdGVyc0NvdW50ID0gYXdhaXQgcHJvamVjdC5tZXRob2RzLnZvdGVyc0NvdW50KCkuY2FsbCgpO1xuXG4gICAgICAgIHJldHVybiB7IGFkZHJlc3MsIHJlcXVlc3RzLCByZXF1ZXN0Q291bnQsIHZvdGVyc0NvdW50IH07XG4gICAgfVxuXG4gICAgLy8gSW1wbGVtZW50IGEgaGVscGVyIG1ldGhvZCB0byBpdGVyYXRlIG9uIHJlcXVlc3RzIGxpc3QgYW5kXG4gICAgLy8gY3JlYXRlIGEgbmV3IHJvdyBmb3IgZWFjaCByZXF1ZXN0XG4gICAgY3JlYXRlUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxSZXF1ZXN0Um93XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBpZD17aW5kZXh9XG4gICAgICAgICAgICAgICAgcmVxdWVzdD17cmVxdWVzdH1cbiAgICAgICAgICAgICAgICBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgdm90ZXJzQ291bnQ9e3RoaXMucHJvcHMudm90ZXJzQ291bnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgLy8gRGVzdHJ1Y3R1cmluZyBpbmZvIGZvciB0aGUgdGFibGUgdGFnXG4gICAgICAgIGNvbnN0IHsgSGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHkgfSA9IFRhYmxlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iPlxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvcHJvamVjdHMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3Qge3RoaXMucHJvcHMuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5TZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkRpdmlkZXIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uIGFjdGl2ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVlc3RzXG4gICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5TZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYj5cbiAgICAgICAgICAgICAgICA8aDI+IFJlcXVlc3QgTGlzdCA8L2gyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8aDM+VGhpcyBwcm9qZWN0IGhhcyB7dGhpcy5wcm9wcy5yZXF1ZXN0Q291bnR9IHJlcXVlc3RzPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9wcm9qZWN0cy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvY3JlYXRlYH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cIm9saXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgTmV3IFJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgPFRhYmxlIGNlbGxlZCBwYWRkZWQgc2VsZWN0YWJsZSBjb2xvcj1cIm9saXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1ZXN0IElEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXJDZWxsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXJDZWxsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlIChFVEgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXJDZWxsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY2lwaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyQ2VsbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb3RlIENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXJDZWxsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcHJvdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRlckNlbGw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluYWxpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jcmVhdGVSb3dzKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvQm9keT5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3Byb2plY3RzL3JlcXVlc3RzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTtBQU9BOzs7O0FBSUE7QUFDQTtBQUhBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFJQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBOztBQU1BO0FBQ0E7QUFEQTtBQUFBOzs7QUF6R0E7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTs7OztBQUVBO0FBQ0E7QUFEQTs7O0FBR0E7QUFFQTtBQURBO0FBQ0E7QUFGQTs7O0FBT0E7QUFDQTtBQURBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=