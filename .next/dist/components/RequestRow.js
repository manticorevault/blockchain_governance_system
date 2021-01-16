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

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _project = require("../ethereum/project");

var _project2 = _interopRequireDefault(_project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/components/RequestRow.js";


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var project, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            project = (0, _project2.default)(_this.props.address);

                            // Get a list with all the accounts

                            _context.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context.sent;
                            _context.next = 6;
                            return project.methods.approveRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onCompletion = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var project, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            project = (0, _project2.default)(_this.props.address);

                            // Get a list with all the accounts

                            _context2.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context2.sent;
                            _context2.next = 6;
                            return project.methods.completeRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    // Define an onApprove helper function


    // Define an onCompletion helper function


    (0, _createClass3.default)(RequestRow, [{
        key: "render",
        value: function render() {

            // Destructure the Table into Row and Cell
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;

            // Destructure the props

            var _props = this.props,
                id = _props.id,
                request = _props.request,
                votersCount = _props.votersCount;

            // Indicates if a request is ready to be confirmed

            var readyToConfirm = request.confirmationCount > votersCount / 2;

            return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToConfirm && !request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, id + 1), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _web2.default.utils.fromWei(request.value, "ether")), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, request.confirmationCount, " / ", votersCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: "olive", onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, "Approve")), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: "black", onClick: this.onCompletion, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, "Finalize")));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIlByb2plY3QiLCJSZXF1ZXN0Um93Iiwib25BcHByb3ZlIiwicHJvamVjdCIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25Db21wbGV0aW9uIiwiY29tcGxldGVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJ2b3RlcnNDb3VudCIsInJlYWR5VG9Db25maXJtIiwiY29uZmlybWF0aW9uQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFhOzs7Ozs7Ozs7SUFHZCxBOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFHRixxRkFBWSxtQkFBQTt5QkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFDRjtBQURFLHNDQUNRLHVCQUFRLE1BQUEsQUFBSyxNQURyQixBQUNRLEFBQW1CLEFBRW5DOztBQUhROzs0Q0FBQTttQ0FJZSxjQUFBLEFBQUssSUFKcEIsQUFJZSxBQUFTOzs2QkFBMUI7QUFKRSxnREFBQTs0Q0FBQTsyQ0FPRixBQUFRLFFBQVIsQUFBZ0IsZUFBZSxNQUFBLEFBQUssTUFBcEMsQUFBMEMsSUFBMUMsQUFBOEM7c0NBQzFDLFNBUkYsQUFPRixBQUFtRCxBQUMvQyxBQUFTO0FBRHNDLEFBQ3JELDZCQURFOzs2QkFQRTs2QkFBQTs0Q0FBQTs7QUFBQTt3QkFBQTtBLG1CLEFBYVosd0ZBQWUsb0JBQUE7eUJBQUE7NEVBQUE7MEJBQUE7dURBQUE7NkJBQ0w7QUFESyxzQ0FDSyx1QkFBUSxNQUFBLEFBQUssTUFEbEIsQUFDSyxBQUFtQixBQUVuQzs7QUFIVzs7NkNBQUE7bUNBSVksY0FBQSxBQUFLLElBSmpCLEFBSVksQUFBUzs7NkJBQTFCO0FBSkssaURBQUE7NkNBQUE7MkNBT0wsQUFBUSxRQUFSLEFBQWdCLGdCQUFnQixNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7c0NBQzNDLFNBUkMsQUFPTCxBQUFvRCxBQUNoRCxBQUFTO0FBRHVDLEFBQ3RELDZCQURFOzs2QkFQSzs2QkFBQTs2Q0FBQTs7QUFBQTt5QkFBQTtBO0FBZGY7O0FBYUE7Ozs7Ozs7O2lDQWFTLEFBRUw7O0FBRks7Z0JBQUEsQUFHRyxNQUhILEFBR2lCLHVCQUhqQixBQUdHO2dCQUhILEFBR1EsT0FIUixBQUdpQix1QkFIakIsQUFHUSxBQUViOztBQUxLOzt5QkFNZ0MsS0FOaEMsQUFNcUM7Z0JBTnJDLEFBTUcsWUFOSCxBQU1HO2dCQU5ILEFBTU8saUJBTlAsQUFNTztnQkFOUCxBQU1nQixxQkFOaEIsQUFNZ0IsQUFFckI7O0FBQ0E7O2dCQUFNLGlCQUFpQixRQUFBLEFBQVEsb0JBQW9CLGNBQW5ELEFBQWlFLEFBRWpFOzttQ0FDSyxjQUFELE9BQUssVUFBVSxRQUFmLEFBQXVCLFVBQVUsVUFBVSxrQkFBa0IsQ0FBQyxRQUE5RCxBQUFzRTs4QkFBdEU7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBREosQUFDSSxBQUNVLEFBR1Ysb0JBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsdUJBTEosQUFLSSxBQUNhLEFBR2IsOEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsNkJBQ0ssQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQVZwQyxBQVNJLEFBQ0ssQUFBa0MsQUFHdkMsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsdUJBYkosQUFhSSxBQUNhLEFBR2IsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsdUJBQUEsQUFDYSxtQkFBc0IsT0FsQnZDLEFBaUJJLEFBSUEsOEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsdUJBQ0ssQUFBUSxXQUFSLEFBQW1CLHVCQUNoQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLFNBQVMsS0FBL0IsQUFBb0M7OEJBQXBDO2dDQUFBO0FBQUE7YUFBQSxFQXZCWixBQXFCSSxBQUVRLEFBTVIsNkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsdUJBQ0ssQUFBUSxXQUFSLEFBQW1CLHVCQUNoQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLFNBQVMsS0FBL0IsQUFBb0M7OEJBQXBDO2dDQUFBO0FBQUE7YUFBQSxFQWhDaEIsQUFDSSxBQTZCSSxBQUVRLEFBUW5COzs7OztBQS9Fb0IsQSxBQWtGekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcnR1ci9Eb2N1bWVudHMvYmxvY2tjaGFpbl9nb3Zlcm5hbmNlX3N5c3RlbSJ9