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

            return _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, id + 1), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _web2.default.utils.fromWei(request.value, "ether")), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, request.confirmationCount, " / ", votersCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: "olive", onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, "Approve")), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: "black", onClick: this.onCompletion, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, "Finalize")));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIlByb2plY3QiLCJSZXF1ZXN0Um93Iiwib25BcHByb3ZlIiwicHJvamVjdCIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25Db21wbGV0aW9uIiwiY29tcGxldGVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJ2b3RlcnNDb3VudCIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiLCJjb25maXJtYXRpb25Db3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU87O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWE7Ozs7Ozs7OztJQUdkLEE7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUdGLHFGQUFZLG1CQUFBO3lCQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUNGO0FBREUsc0NBQ1EsdUJBQVEsTUFBQSxBQUFLLE1BRHJCLEFBQ1EsQUFBbUIsQUFFbkM7O0FBSFE7OzRDQUFBO21DQUllLGNBQUEsQUFBSyxJQUpwQixBQUllLEFBQVM7OzZCQUExQjtBQUpFLGdEQUFBOzRDQUFBOzJDQU9GLEFBQVEsUUFBUixBQUFnQixlQUFlLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxJQUExQyxBQUE4QztzQ0FDMUMsU0FSRixBQU9GLEFBQW1ELEFBQy9DLEFBQVM7QUFEc0MsQUFDckQsNkJBREU7OzZCQVBFOzZCQUFBOzRDQUFBOztBQUFBO3dCQUFBO0EsbUIsQUFhWix3RkFBZSxvQkFBQTt5QkFBQTs0RUFBQTswQkFBQTt1REFBQTs2QkFDTDtBQURLLHNDQUNLLHVCQUFRLE1BQUEsQUFBSyxNQURsQixBQUNLLEFBQW1CLEFBRW5DOztBQUhXOzs2Q0FBQTttQ0FJWSxjQUFBLEFBQUssSUFKakIsQUFJWSxBQUFTOzs2QkFBMUI7QUFKSyxpREFBQTs2Q0FBQTsyQ0FPTCxBQUFRLFFBQVIsQUFBZ0IsZ0JBQWdCLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxJQUEzQyxBQUErQztzQ0FDM0MsU0FSQyxBQU9MLEFBQW9ELEFBQ2hELEFBQVM7QUFEdUMsQUFDdEQsNkJBREU7OzZCQVBLOzZCQUFBOzZDQUFBOztBQUFBO3lCQUFBO0E7QUFkZjs7QUFhQTs7Ozs7Ozs7aUNBYVMsQUFFTDs7QUFGSztnQkFBQSxBQUdHLE1BSEgsQUFHaUIsdUJBSGpCLEFBR0c7Z0JBSEgsQUFHUSxPQUhSLEFBR2lCLHVCQUhqQixBQUdRLEFBRWI7O0FBTEs7O3lCQU1nQyxLQU5oQyxBQU1xQztnQkFOckMsQUFNRyxZQU5ILEFBTUc7Z0JBTkgsQUFNTyxpQkFOUCxBQU1PO2dCQU5QLEFBTWdCLHFCQU5oQixBQU1nQixBQUVyQjs7bUNBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFESixBQUNJLEFBQ1UsQUFHVixvQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSx1QkFMSixBQUtJLEFBQ2EsQUFHYiw4QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSw2QkFDSyxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BVnBDLEFBU0ksQUFDSyxBQUFrQyxBQUd2QywyQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSx1QkFiSixBQWFJLEFBQ2EsQUFHYiw0QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSx1QkFBQSxBQUNhLG1CQUFzQixPQWxCdkMsQUFpQkksQUFJQSw4QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLFNBQVMsS0FBL0IsQUFBb0M7OEJBQXBDO2dDQUFBO0FBQUE7ZUF0QlIsQUFxQkksQUFDSSxBQUtKLDZCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sT0FBUixBQUFjLFNBQVEsU0FBUyxLQUEvQixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQTdCWixBQUNJLEFBMkJJLEFBQ0ksQUFNZjs7Ozs7QUF2RW9CLEEsQUEwRXpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXJ0dXIvRG9jdW1lbnRzL2Jsb2NrY2hhaW5fZ292ZXJuYW5jZV9zeXN0ZW0ifQ==