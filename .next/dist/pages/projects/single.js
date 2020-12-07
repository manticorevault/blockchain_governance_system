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