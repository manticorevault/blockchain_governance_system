webpackHotUpdate(8,{

/***/ 1523:
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

var _Layout = __webpack_require__(1497);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(531);

var _project = __webpack_require__(1514);

var _project2 = _interopRequireDefault(_project);

var _web = __webpack_require__(1209);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(905);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL3JlcXVlc3RzL2NyZWF0ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJJY29uIiwiQnJlYWRjcnVtYiIsIlByb2plY3QiLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIlJlcXVlc3RDcmVhdGUiLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvamVjdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhZGRSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBTyxBQUFRLEFBQVMsQUFBTTs7QUFDN0MsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBYzs7Ozs7OztJLEFBRXZCOzs7Ozs7Ozs7Ozs7Ozs7OE5BR0YsQTttQkFBUSxBQUNHLEFBQ1A7eUJBRkksQUFFUyxBQUNiO3VCQUhJLEFBR08sQUFDWDtxQkFKSSxBQUlLLEFBQ1Q7MEJBQWMsQUFHbEI7O0FBUlEsQTtBQUFBLEFBQ0osaUIsQUFlSjtpR0FBVyxpQkFBQSxBQUFNLE9BQU47eUVBQUE7OzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO0FBQ0E7c0NBQUEsQUFBTSxBQUVBOztBQUpDLDBDQUlTLHVCQUFRLE1BQUEsQUFBSyxNQUp0QixBQUlTLEFBQW1CLEFBRW5DOztBQU5POzs4Q0FPbUMsTUFQbkMsQUFPd0MsT0FQeEMsQUFPQywwQkFQRCxBQU9DLGFBUEQsQUFPYyxvQkFQZCxBQU9jLE9BUGQsQUFPcUIsd0JBUHJCLEFBT3FCLEFBRTVCOztBQUNBOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQVZ4QixBQVVQLEFBQWMsQUFBK0I7O2dEQVZ0QztnREFBQTt1Q0Fhb0IsY0FBQSxBQUFLLElBYnpCLEFBYW9CLEFBQVM7O2lDQUExQjtBQWJILG9EQUFBO2dEQUFBO3VDQWVHLFFBQUEsQUFBUSxRQUFSLEFBQWdCLFdBQWhCLEFBQ0YsYUFDQSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FGZixBQUVGLEFBQXdCLFVBRnRCLEFBR0YsV0FIRSxBQUlKLEtBQUssRUFBRSxNQUFNLFNBbkJaLEFBZUcsQUFJQyxBQUFRLEFBQVM7O2lDQUV4Qjs7QUFDQTsrQ0FBQSxBQUFPLHlCQUF1QixNQUFBLEFBQUssTUFBbkMsQUFBeUMsVUF0QnRDO2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQXdCSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQXhCM0IsQUF3QkgsQUFBYyxBQUFvQjs7aUNBR3RDOztBQUNBO3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBNUJULEFBNEJQLEFBQWMsQUFBVzs7aUNBNUJsQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7QUFqQlg7Ozs7Ozs7aUNBZ0RTO3lCQUNMOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUVJO0FBRko7QUFBQSxhQUFBLGtCQUVJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsNEJBQUEsQUFBWTs7OEJBQVo7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyw4QkFBSyxzQkFBb0IsS0FBQSxBQUFLLE1BQS9CLEFBQXFDOzhCQUFyQztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQ2EsaUJBQUEsQUFBSyxNQUo5QixBQUNJLEFBQ0ksQUFDSSxBQUN3QixBQUtoQywwQ0FBQSxBQUFDLDRCQUFELEFBQVk7OzhCQUFaO2dDQVRKLEFBU0ksQUFFQTtBQUZBO0FBQUEsZ0NBRUMsY0FBRCw0QkFBQSxBQUFZOzs4QkFBWjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLDhCQUFLLHNCQUFvQixLQUFBLEFBQUssTUFBekIsQUFBK0IsVUFBckM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQWJaLEFBV0ksQUFDSSxBQUNJLEFBTVIsNkNBQUEsQUFBQyw0QkFBRCxBQUFZOzs4QkFBWjtnQ0FuQkosQUFtQkksQUFFQTtBQUZBO0FBQUEsZ0NBRUMsY0FBRCw0QkFBQSxBQUFZLFdBQVEsUUFBcEI7OEJBQUE7Z0NBQUE7QUFBQTtlQXZCUixBQUVJLEFBcUJJLEFBSUosb0NBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBM0JKLEFBMkJJLEFBQ0EsMkNBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EOzhCQUFuRDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0EsZ0NBQUEsQUFBQztzQkFBRCxBQUNTLEFBQ0w7OEJBRkosQUFFaUIsQUFDYjs2QkFISixBQUdnQixBQUNaO3VCQUFPLEtBQUEsQUFBSyxNQUpoQixBQUlzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFDTixPQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsTUFBQSxBQUFNLE9BRDdCLEFBQ04sQUFBYyxBQUE0QjtBQU5sRDs7OEJBQUE7Z0NBTFIsQUFDSSxBQUlJLEFBV0o7QUFYSTtBQUNJLGlDQVVQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLGlDQUFBLEFBQUM7c0JBQUQsQUFDUyxBQUNMOzhCQUZKLEFBRWlCLEFBQ2I7NkJBSEosQUFHZ0IsQUFDWjt1QkFBTyxLQUFBLEFBQUssTUFKaEIsQUFJc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQ04sT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQUR2QixBQUNOLEFBQWMsQUFBc0I7QUFONUM7OzhCQUFBO2dDQXBCUixBQWdCSSxBQUlJLEFBV0o7QUFYSTtBQUNJLGlDQVVQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLHNDQUFBLEFBQUM7c0JBQUQsQUFDUyxBQUNMOzhCQUZKLEFBRWlCLEFBQ2I7NkJBSEosQUFHZ0IsQUFDWjt1QkFBTyxLQUFBLEFBQUssTUFKaEIsQUFJc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQ04sT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLE1BQUEsQUFBTSxPQUQzQixBQUNOLEFBQWMsQUFBMEI7QUFOaEQ7OzhCQUFBO2dDQW5DUixBQStCSSxBQUlJLEFBV0o7QUFYSTtBQUNJLGlDQVVSLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsVUFBUyxTQUFTLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBOUNKLEFBOENJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQXBDLEFBQTBDOzhCQUExQztnQ0FBQTtBQUFBO2VBNUVaLEFBQ0ksQUE0QkksQUErQ0ksQUFNZjs7Ozs7bUhBekg0QixBOzs7OztpQ0FDakI7QSwwQ0FBWSxNQUFNLEEsTUFBbEIsQTtrRUFFRCxFQUFFLFNBQUYsQTs7Ozs7Ozs7Ozs7Ozs7O0FBR1g7Ozs7Ozs7QUFsQndCLEEsQUF3STVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNyZWF0ZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcnR1ci9Eb2N1bWVudHMvYmxvY2tjaGFpbl9nb3Zlcm5hbmNlX3N5c3RlbSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/artur/Documents/blockchain_governance_system/pages/projects/requests/create.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/artur/Documents/blockchain_governance_system/pages/projects/requests/create.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/projects/requests/create")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5iN2ExMTNmYTdiODA0ZmI1MTAxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvamVjdHMvcmVxdWVzdHMvY3JlYXRlLmpzPzI4OWJhNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIE1lc3NhZ2UsIEljb24sIEJyZWFkY3J1bWIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi8uLi8uLi9ldGhlcmV1bS9wcm9qZWN0XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IHsgTGluaywgUm91dGVyIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlc1wiO1xuXG5jbGFzcyBSZXF1ZXN0Q3JlYXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIFN0YXRlIE9iamVjdFxuICAgIHN0YXRlID0ge1xuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHJlY2lwaWVudDogXCJcIixcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yTWVzc2FnZTogXCJcIlxuICAgIH1cblxuICAgIC8vIERlZmluZSBhIGZ1bmN0aW9uIHRvIGdldCB0aGUgbGluayBmcm9tIHRoZSBVUkwgYW5kIHBhc3MgaXQgYXMgcHJvcHNcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcHJvcHMucXVlcnlcblxuICAgICAgICByZXR1cm4geyBhZGRyZXNzIH07XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIGEgZnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBmb3JtIHN1Ym1pdHRpb25cbiAgICBvblN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgLy8gUHJldmVudCB0aGUgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgaXRzZWxmXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QodGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuICAgICAgICAvLyBEZXN0cnVjdHVyZSB0aGUgc3RhdGUgb2JqZWN0XG4gICAgICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIHZhbHVlLCByZWNpcGllbnQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSBsb2FkaW5nIGFuZCByZXNldCB0aGUgZXJyb3JNZXNzYWdlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6IFwiXCIgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICBhd2FpdCBwcm9qZWN0Lm1ldGhvZHMuYWRkUmVxdWVzdChcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICB3ZWIzLnV0aWxzLnRvV2VpKHZhbHVlLCBcImV0aGVyXCIpLFxuICAgICAgICAgICAgICAgIHJlY2lwaWVudFxuICAgICAgICAgICAgKS5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSlcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSB1c2VyIGJhY2sgdG8gdGhlIGxpc3Qgb2YgcmVxdWVzdHNcbiAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9wcm9qZWN0cy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlc2V0IHRoZSBzdGF0ZSBsb2FkaW5nIGJhY2sgdG8gZmFsc2VcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cblxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iPlxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvcHJvamVjdHMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3Qge3RoaXMucHJvcHMuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5TZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkRpdmlkZXIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvcHJvamVjdHMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVlc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWIuU2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5EaXZpZGVyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuU2VjdGlvbiBhY3RpdmU+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgUmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWIuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICAgICAgICAgICAgPGgzPiBDcmVhdGUgYSBOZXcgUmVxdWVzdCA8L2gzPlxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIndyaXRlIHNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB5b3VyIHByb3Bvc2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUgaW4gRVRIXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm1vbmV5IGJpbGwgYWx0ZXJuYXRlIG91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG93IG11Y2ggd2lsbCBpdCBjb3N0P1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY2lwaWVudCBBZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInNlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hpY2ggYWRkcmVzcyBhcmUgeW91IHNlbmRpbmcgdGhlIHZhbHVlIHRvP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVjaXBpZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjaXBpZW50OiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT2ggbm8hXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJvbGl2ZVwiIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgUmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdENyZWF0ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9wcm9qZWN0cy9yZXF1ZXN0cy9jcmVhdGUuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFSQTtBQWVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTEE7QUFDQTtBQURBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFYQTtBQUFBO0FBYUE7QUFDQTtBQURBO0FBYkE7QUFBQTtBQWVBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQXRCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBd0JBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQTdCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7OztBQWpCQTtBQUNBOzs7Ozs7QUErQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1BO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU5BOztBQUFBO0FBV0E7QUFYQTtBQUNBOztBQVVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTkE7O0FBQUE7QUFXQTtBQVhBO0FBQ0E7O0FBVUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFOQTs7QUFBQTtBQVdBO0FBWEE7QUFDQTtBQVVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7Ozs7Ozs7QUF4SEE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7QUFxSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==