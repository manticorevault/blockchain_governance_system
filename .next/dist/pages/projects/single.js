"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _ContributionForm = require("../../components/ContributionForm");

var _ContributionForm2 = _interopRequireDefault(_ContributionForm);

var _project = require("../../ethereum/project");

var _project2 = _interopRequireDefault(_project);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

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
                address = _props.address,
                balance = _props.balance,
                managerAddress = _props.managerAddress,
                minimumAmount = _props.minimumAmount,
                requestsCount = _props.requestsCount,
                votersCount = _props.votersCount;

            // Create an array of objects with the info needed

            var items = [{
                header: this.props.address,
                meta: "Project's Address",
                description: "This project's full address. Be sure you're connected to the right project",
                // Add the style property for custom styles
                style: { overflowWrap: "break-word" }
            }, {
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
                    lineNumber: 83
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, " Project ", this.props.address, " "), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement(_ContributionForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }), _react2.default.createElement(_routes.Link, { route: "/projects/" + this.props.address + "/requests", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { secondary: true, icon: true, style: { marginTop: "15px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, "View All Requests", _react2.default.createElement(_semanticUiReact.Icon, { name: "clipboard check", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }))))))));
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
                                    address: props.query.address,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL3NpbmdsZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJJY29uIiwiR3JpZCIsIkJ1dHRvbiIsIkxheW91dCIsIkNvbnRyaWJ1dGlvbkZvcm0iLCJQcm9qZWN0Iiwid2ViMyIsIkxpbmsiLCJQcm9qZWN0U2luZ2xlIiwicHJvcHMiLCJhZGRyZXNzIiwiYmFsYW5jZSIsIm1hbmFnZXJBZGRyZXNzIiwibWluaW11bUFtb3VudCIsInJlcXVlc3RzQ291bnQiLCJ2b3RlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsIm1hcmdpblRvcCIsInByb2plY3QiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRJbmZvIiwiY2FsbCIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBTTs7QUFDM0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7O2FBc0JGOzs7c0NBQ2MsQUFFVjs7QUFGVTt5QkFVTixLQVZNLEFBVUQ7Z0JBVkMsQUFJTixpQkFKTSxBQUlOO2dCQUpNLEFBS04saUJBTE0sQUFLTjtnQkFMTSxBQU1OLHdCQU5NLEFBTU47Z0JBTk0sQUFPTix1QkFQTSxBQU9OO2dCQVBNLEFBUU4sdUJBUk0sQUFRTjtnQkFSTSxBQVNOLHFCQVRNLEFBU04sQUFHSjs7QUFDQTs7Z0JBQU07d0JBRVUsS0FBQSxBQUFLLE1BRGpCLEFBQ3VCLEFBQ25CO3NCQUZKLEFBRVUsQUFDTjs2QkFISixBQUdpQixBQUNiO0FBQ0E7dUJBQU8sRUFBRSxjQU5ILEFBQ1YsQUFLVyxBQUFnQjtBQUwzQixBQUNJLGFBRk07d0JBUVYsQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkFISixBQUdpQixBQUNiO0FBQ0E7dUJBQU8sRUFBRSxjQWJILEFBUVYsQUFLVyxBQUFnQjtBQUwzQixBQUNJO3dCQU1KLEFBQ1ksQUFDUjtzQkFGSixBQUVVLEFBQ047NkJBbEJNLEFBZVYsQUFHaUI7QUFIakIsQUFDSTt3QkFJSixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQXZCTSxBQW9CVixBQUdpQjtBQUhqQixBQUNJO3dCQUlKLEFBQ1ksQUFDUjtzQkFGSixBQUVVLEFBQ047NkJBNUJNLEFBeUJWLEFBR2lCO0FBSGpCLEFBQ0k7QUFNQTt3QkFBUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FGL0IsQUFFWSxBQUE0QixBQUNwQztzQkFISixBQUdVLEFBQ047NkJBbENSLEFBQWMsQUE4QlYsQUFJaUIsQUFJckI7QUFSSSxBQUNJOztpREFPRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxhQUFaLEFBQXlCLEdBQUcsVUFBNUIsQUFBc0MsTUFBTSxPQUE1QyxBQUFtRDs4QkFBbkQ7Z0NBQVAsQUFBTyxBQUVWO0FBRlU7YUFBQTs7OztpQ0FLRixBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQWMsa0JBQUEsQUFBSyxNQUFuQixBQUF5QixTQUQ3QixBQUNJLEFBRUEsc0JBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUVLO0FBRkw7b0JBREosQUFDSSxBQUVLLEFBQUssQUFJVixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyw0Q0FBaUIsU0FBUyxLQUFBLEFBQUssTUFBaEMsQUFBc0M7OEJBQXRDO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNBLEFBQUMsOEJBQUssc0JBQW9CLEtBQUEsQUFBSyxNQUF6QixBQUErQixVQUFyQzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxXQUFSLE1BQWtCLE1BQWxCLE1BQXVCLE9BQU8sRUFBRSxXQUFoQyxBQUE4QixBQUFhOzhCQUEzQztnQ0FBQTtBQUFBO2VBRUEscUNBQUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7OEJBQVg7Z0NBbEI1QixBQUNJLEFBR0ksQUFDSSxBQU9JLEFBRUksQUFDSSxBQUNJLEFBRUEsQUFXL0I7QUFYK0I7Ozs7YUFoR2hDOztBQUNBOzs7aUgsQUFDNkI7Ozs7O2lDQUN6QjtBQUNNO0EsMENBQVUsdUJBQVEsTUFBQSxBQUFNLE0sQUFBZCxBQUFvQixBQUVwQzs7Ozs7dUNBQ21CLFFBQUEsQUFBUSxRQUFSLEFBQWdCLFVBQVUsQSxBQUExQjs7aUNBQWI7QTs7NkNBSU8sTUFBQSxBQUFNLE1BRFosQUFDa0IsQUFDckI7bURBQWUsS0FGWixBQUVZLEFBQUssQUFDcEI7NkNBQVMsS0FITixBQUdNLEFBQUssQUFDZDttREFBZSxLQUpaLEFBSVksQUFBSyxBQUNwQjtpREFBYSxLQUxWLEFBS1UsQUFBSyxBQUNsQjtvREFBZ0IsS0FOYixBQU1hLEFBQUssQTtBQU5sQixBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYmdCLEEsQUFnSDVCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNpbmdsZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcnR1ci9Eb2N1bWVudHMvYmxvY2tjaGFpbl9nb3Zlcm5hbmNlX3N5c3RlbSJ9