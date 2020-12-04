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

var _factory = require("../../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/pages/projects/create.js?entry";


var ProjectCreate = function (_Component) {
    (0, _inherits3.default)(ProjectCreate, _Component);

    function ProjectCreate() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ProjectCreate);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProjectCreate.__proto__ || (0, _getPrototypeOf2.default)(ProjectCreate)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            miniumAmount: "",
            errorMessage: ""
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // Prevent default form behavior
                                event.preventDefault();

                                // Add an error handler
                                _context.prev = 1;
                                _context.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                accounts = _context.sent;
                                _context.next = 7;
                                return _factory2.default.methods.createProject(_this.state.miniumAmount).send({
                                    from: accounts[0]
                                });

                            case 7:
                                _context.next = 12;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context["catch"](1);

                                // Return the error to the user
                                _this.setState({ errorMessage: _context.t0.message });

                            case 12:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 9]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    // Prepare the state on load


    // Define the event handler component for submitting the form


    (0, _createClass3.default)(ProjectCreate, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement("h2", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, " Create a Project! "), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, "Define the minimum amount to participate in the project"), _react2.default.createElement(_semanticUiReact.Input, {
                label: "Wei",
                labelPosition: "right",
                color: "black",
                value: this.state.miniumAmount,
                onChange: function onChange(event) {
                    return _this3.setState({ miniumAmount: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oh no!", content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { color: "olive", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, " Create! ")));
        }
    }]);

    return ProjectCreate;
}(_react.Component);

exports.default = ProjectCreate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL2NyZWF0ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIlByb2plY3RDcmVhdGUiLCJzdGF0ZSIsIm1pbml1bUFtb3VudCIsImVycm9yTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUHJvamVjdCIsInNlbmQiLCJmcm9tIiwic2V0U3RhdGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUTs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7Ozs7OztJQUVYLEE7Ozs7Ozs7Ozs7Ozs7Ozs4TkFHRixBOzBCQUFRLEFBQ1UsQUFDZDswQkFGSSxBLEFBRVU7QUFGVixBQUNKLGlCLEFBS0o7aUdBQVcsaUJBQUEsQUFBTyxPQUFQO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO0FBQ0E7c0NBQUEsQUFBTSxBQUVOOztBQUpPO2dEQUFBO2dEQUFBO3VDQU9vQixjQUFBLEFBQUssSUFQekIsQUFPb0IsQUFBUzs7aUNBQTFCO0FBUEgsb0RBQUE7Z0RBQUE7eURBVUcsQUFDRCxRQURDLEFBRUQsY0FBYyxNQUFBLEFBQUssTUFGbEIsQUFFd0IsY0FGeEIsQUFHRDswQ0FDUyxTQWRYLEFBVUcsQUFHSSxBQUNJLEFBQVM7QUFEYixBQUNGLGlDQUpGOztpQ0FWSDtnREFBQTtBQUFBOztpQ0FBQTtnREFBQTtnRUFpQkg7O0FBQ0E7c0NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQWxCM0IsQUFrQkgsQUFBYyxBQUFvQjs7aUNBbEIvQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7QUFQWDs7QUFNQTs7Ozs7Ozs7aUNBd0JTO3lCQUNMOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFFQSx3Q0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFHQSw0RUFBQSxBQUFDO3VCQUFELEFBQ1UsQUFDTjsrQkFGSixBQUVrQixBQUNkO3VCQUhKLEFBR1UsQUFDTjt1QkFBTyxLQUFBLEFBQUssTUFKaEIsQUFJc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLE1BQUEsQUFBTSxPQUE3QyxBQUFTLEFBQWMsQUFBNkI7QUFMbEU7OzhCQUFBO2dDQUxSLEFBQ0ksQUFJSSxBQVNKO0FBVEk7QUFDSSxpQ0FRUixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFVBQVMsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQWRKLEFBY0ksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sT0FBUixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFuQlosQUFDSSxBQUdJLEFBZUksQUFLZjs7Ozs7QUF6RHVCLEEsQUE0RDVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNyZWF0ZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcnR1ci9Eb2N1bWVudHMvYmxvY2tjaGFpbl9nb3Zlcm5hbmNlX3N5c3RlbSJ9