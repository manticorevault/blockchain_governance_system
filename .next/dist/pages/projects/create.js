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
            errorMessage: "",
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // Prevent default form behavior
                                event.preventDefault();

                                // Activate the loading state
                                // Clean the error message afterwards
                                _this.setState({ loading: true, errorMessage: "" });

                                // Add an error handler
                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createProject(_this.state.miniumAmount).send({
                                    from: accounts[0]
                                });

                            case 8:
                                _context.next = 13;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context["catch"](2);

                                // Return the error to the user
                                _this.setState({ errorMessage: _context.t0.message });

                            case 13:

                                // Turn loading off again once the transaction is completed
                                _this.setState({ loading: false });

                            case 14:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 10]]);
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
                    lineNumber: 49
                }
            }, _react2.default.createElement("h2", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, " Create a Project! "), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
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
                    lineNumber: 57
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oh no!", content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, color: "olive", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, " Create! ")));
        }
    }]);

    return ProjectCreate;
}(_react.Component);

exports.default = ProjectCreate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL2NyZWF0ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIlByb2plY3RDcmVhdGUiLCJzdGF0ZSIsIm1pbml1bUFtb3VudCIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUHJvamVjdCIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFPLEFBQVE7O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs7OE4sQUFHRjswQkFBUSxBQUNVLEFBQ2Q7MEJBRkksQUFFVSxBQUNkO3FCQUFTLEEsQUFITDtBQUFBLEFBQ0osaUIsQUFNSjtpR0FBVyxpQkFBQSxBQUFPLE9BQVA7b0JBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7QUFDQTtzQ0FBQSxBQUFNLEFBRU47O0FBQ0E7QUFDQTtzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUEvQixBQUFjLEFBQStCLEFBRTdDOztBQVJPO2dEQUFBO2dEQUFBO3VDQVdvQixjQUFBLEFBQUssSUFYekIsQUFXb0IsQUFBUzs7aUNBQTFCO0FBWEgsb0RBQUE7Z0RBQUE7eURBY0csQUFDRCxRQURDLEFBRUQsY0FBYyxNQUFBLEFBQUssTUFGbEIsQUFFd0IsY0FGeEIsQUFHRDswQ0FDUyxTQWxCWCxBQWNHLEFBR0ksQUFDSSxBQUFTO0FBRGIsQUFDRixpQ0FKRjs7aUNBZEg7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBcUJIOztBQUNBO3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUF0QjNCLEFBc0JILEFBQWMsQUFBb0I7O2lDQUd0Qzs7QUFDQTtzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQTFCVCxBQTBCUCxBQUFjLEFBQVc7O2lDQTFCbEI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7O0FBUlg7O0FBT0E7Ozs7Ozs7O2lDQStCUzt5QkFDTDs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBRUEsd0NBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EOzhCQUFuRDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0EsNEVBQUEsQUFBQzt1QkFBRCxBQUNVLEFBQ047K0JBRkosQUFFa0IsQUFDZDt1QkFISixBQUdVLEFBQ047dUJBQU8sS0FBQSxBQUFLLE1BSmhCLEFBSXNCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxNQUFBLEFBQU0sT0FBN0MsQUFBUyxBQUFjLEFBQTZCO0FBTGxFOzs4QkFBQTtnQ0FMUixBQUNJLEFBSUksQUFTSjtBQVRJO0FBQ0ksaUNBUVIsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixVQUFTLFNBQVMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EOzhCQUFuRDtnQ0FkSixBQWNJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsT0FBckMsQUFBMkM7OEJBQTNDO2dDQUFBO0FBQUE7ZUFuQlosQUFDSSxBQUdJLEFBZUksQUFLZjs7Ozs7QUFqRXVCLEEsQUFvRTVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNyZWF0ZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcnR1ci9Eb2N1bWVudHMvYmxvY2tjaGFpbl9nb3Zlcm5hbmNlX3N5c3RlbSJ9