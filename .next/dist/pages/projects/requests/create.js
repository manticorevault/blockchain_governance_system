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

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _project = require("../../../ethereum/project");

var _project2 = _interopRequireDefault(_project);

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/pages/projects/requests/create.js?entry";


var RequestCreate = function (_Component) {
    (0, _inherits3.default)(RequestCreate, _Component);

    function RequestCreate() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestCreate);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestCreate.__proto__ || (0, _getPrototypeOf2.default)(RequestCreate)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: "",
            description: "",
            recipient: "",
            loading: false,
            errorMessage: ""

            // Define a function to get the link from the URL and pass it as props
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var project, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // Prevent the form from submitting itself
                                event.preventDefault();

                                project = (0, _project2.default)(_this.props.address);

                                // Destructure the state object

                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                                // Update the state loading and reset the errorMessage

                                _this.setState({ loading: true, errorMessage: "" });

                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return project.methods.addRequest(description, _web2.default.utils.toWei(value, "ether"), recipient).send({ from: accounts[0] });

                            case 10:

                                // Get the user back to the list of requests
                                _routes.Router.pushRoute("/projects/" + _this.props.address + "/requests");
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context["catch"](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:

                                // reset the state loading back to false
                                _this.setState({ loading: false });

                            case 17:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    // Initialize the State Object


    (0, _createClass3.default)(RequestCreate, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_semanticUiReact.Breadcrumb, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(_semanticUiReact.Breadcrumb.Section, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_routes.Link, { route: "/projects/" + this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, "Project ", this.props.address))), _react2.default.createElement(_semanticUiReact.Breadcrumb.Divider, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }), _react2.default.createElement(_semanticUiReact.Breadcrumb.Section, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_routes.Link, { route: "/projects/" + this.props.address + "/requests", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, "Requests"))), _react2.default.createElement(_semanticUiReact.Breadcrumb.Divider, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }), _react2.default.createElement(_semanticUiReact.Breadcrumb.Section, { active: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, "Create Request")), _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, " Create a New Request "), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, "Description"), _react2.default.createElement(_semanticUiReact.Input, {
                icon: "write square",
                iconPosition: "left",
                placeholder: "Describe your proposal",
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, "Value in ETH"), _react2.default.createElement(_semanticUiReact.Input, {
                icon: "money bill alternate outline",
                iconPosition: "left",
                placeholder: "How much will it cost?",
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, "Recipient Address"), _react2.default.createElement(_semanticUiReact.Input, {
                icon: "send",
                iconPosition: "left",
                placeholder: "Which address are you sending the value to?",
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oh no!", content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { color: "olive", loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, "Create Request")));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt("return", { address: address });

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()

        // Define a function to handle the form submittion

    }]);

    return RequestCreate;
}(_react.Component);

exports.default = RequestCreate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL3JlcXVlc3RzL2NyZWF0ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJJY29uIiwiQnJlYWRjcnVtYiIsIlByb2plY3QiLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIlJlcXVlc3RDcmVhdGUiLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvamVjdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhZGRSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBTyxBQUFRLEFBQVMsQUFBTTs7QUFDN0MsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBYzs7Ozs7OztJLEFBRXZCOzs7Ozs7Ozs7Ozs7Ozs7OE5BR0YsQTttQkFBUSxBQUNHLEFBQ1A7eUJBRkksQUFFUyxBQUNiO3VCQUhJLEFBR08sQUFDWDtxQkFKSSxBQUlLLEFBQ1Q7MEJBQWMsQUFHbEI7O0FBUlEsQTtBQUFBLEFBQ0osaUIsQUFlSjtpR0FBVyxpQkFBQSxBQUFNLE9BQU47eUVBQUE7OzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO0FBQ0E7c0NBQUEsQUFBTSxBQUVBOztBQUpDLDBDQUlTLHVCQUFRLE1BQUEsQUFBSyxNQUp0QixBQUlTLEFB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