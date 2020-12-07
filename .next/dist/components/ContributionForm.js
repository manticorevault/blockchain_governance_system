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

var _routes = require("../routes");

var _project = require("../ethereum/project");

var _project2 = _interopRequireDefault(_project);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/components/ContributionForm.js";


var ContributionForm = function (_Component) {
    (0, _inherits3.default)(ContributionForm, _Component);

    function ContributionForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributionForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributionForm.__proto__ || (0, _getPrototypeOf2.default)(ContributionForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: "",
            errorMessage: "",
            loading: false

            // Create the onSubmit function
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var project, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // Prevent the form to attempt to submit itself
                                event.preventDefault();

                                // Retrieve the project address and access it
                                project = (0, _project2.default)(_this.props.address);

                                // Turn the loading wheel on

                                _this.setState({ loading: true });

                                // Implement an Error Handler
                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return project.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, "ether")
                                });

                            case 9:

                                // Refresh the page to update information once the
                                // transaction is done.
                                _routes.Router.replaceRoute("/projects/" + _this.props.address);
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context["catch"](3);

                                // Set the errors to the errorMessage
                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:

                                // Turn the loading wheel off and reset the form
                                _this.setState({ loading: false, value: "" });

                            case 16:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    // Define the state


    (0, _createClass3.default)(ContributionForm, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, "Contribution Amount", _react2.default.createElement(_semanticUiReact.Input, {
                label: "ETH",
                labelPosition: "right",
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oh no!", content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { color: "olive", icon: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: "angle double right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }), "Contribute!"));
        }
    }]);

    return ContributionForm;
}(_react.Component);

exports.default = ContributionForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0aW9uRm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJCdXR0b24iLCJJY29uIiwiUm91dGVyIiwiUHJvamVjdCIsIndlYjMiLCJDb250cmlidXRpb25Gb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9qZWN0IiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFPLEFBQVMsQUFBUTs7QUFDdkMsQUFBUyxBQUFjOztBQUN2QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs7b09BR0YsQTttQkFBUSxBQUNHLEFBQ1A7MEJBRkksQUFFVSxBQUNkO3FCQUFTLEFBR2I7O0FBTlEsQTtBQUFBLEFBQ0osaUJBTUosQTtpR0FBVyxpQkFBQSxBQUFPLE9BQVA7NkJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7QUFDQTtzQ0FBQSxBQUFNLEFBRU47O0FBQ007QUFMQywwQ0FLUyx1QkFBUSxNQUFBLEFBQUssTUFMdEIsQUFLUyxBQUFtQixBQUVuQzs7QUFDQTs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUFXLEFBRXpCOztBQVZPO2dEQUFBO2dEQUFBO3VDQWFvQixjQUFBLEFBQUssSUFiekIsQUFhb0IsQUFBUzs7aUNBQTFCO0FBYkgsb0RBQUE7Z0RBQUE7K0NBZ0JHLEFBQVEsUUFBUixBQUFnQixhQUFoQixBQUE2QjswQ0FDekIsU0FEOEIsQUFDOUIsQUFBUyxBQUNmOzJDQUFPLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FsQnBDLEFBZ0JHLEFBQWtDLEFBRTdCLEFBQW1DO0FBRk4sQUFDcEMsaUNBREU7O2lDQUtOOztBQUNBO0FBQ0E7K0NBQUEsQUFBTyw0QkFBMEIsTUFBQSxBQUFLLE1BdkJuQyxBQXVCSCxBQUE0QztnREF2QnpDO0FBQUE7O2lDQUFBO2dEQUFBO2dFQXlCSDs7QUFDQTtzQ0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBMUIzQixBQTBCSCxBQUFjLEFBQW9COztpQ0FHdEM7O0FBQ0E7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sT0E5QnpCLEFBOEJQLEFBQWMsQUFBeUI7O2lDQTlCaEM7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7O0FBUlg7Ozs7Ozs7aUNBMENTO3lCQUNMOzttQ0FDSSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRUksdUNBQUEsQUFBQzt1QkFBRCxBQUNVLEFBQ047K0JBRkosQUFFa0IsQUFDZDt1QkFBTyxLQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWMsQUFBc0I7QUFKM0Q7OzhCQUFBO2dDQUpaLEFBQ0ksQUFDSSxBQUVJLEFBU1I7QUFUUTtBQUNJLGtDQVFaLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsVUFBUyxTQUFTLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBYkosQUFhSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxNQUF0QixNQUEyQixTQUFTLEtBQUEsQUFBSyxNQUF6QyxBQUErQzs4QkFBL0M7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsdUNBQUssTUFBTixBQUFXOzhCQUFYO2dDQURKLEFBQ0k7QUFBQTtnQkFoQlosQUFDSSxBQWNJLEFBTVg7Ozs7O0FBbEUwQixBLEFBcUUvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRpb25Gb3JtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FydHVyL0RvY3VtZW50cy9ibG9ja2NoYWluX2dvdmVybmFuY2Vfc3lzdGVtIn0=