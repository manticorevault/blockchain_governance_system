"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../../../routes");

var _project = require("../../../ethereum/project");

var _project2 = _interopRequireDefault(_project);

var _RequestRow = require("../../../components/RequestRow");

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