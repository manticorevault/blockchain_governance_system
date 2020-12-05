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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _project = require("../../ethereum/project");

var _project2 = _interopRequireDefault(_project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/pages/projects/single.js?entry";


var ProjectSingle = function (_Component) {
    (0, _inherits3.default)(ProjectSingle, _Component);

    function ProjectSingle() {
        (0, _classCallCheck3.default)(this, ProjectSingle);

        return (0, _possibleConstructorReturn3.default)(this, (ProjectSingle.__proto__ || (0, _getPrototypeOf2.default)(ProjectSingle)).apply(this, arguments));
    }

    (0, _createClass3.default)(ProjectSingle, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, " Single Project "));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL3NpbmdsZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIlByb2plY3QiLCJQcm9qZWN0U2luZ2xlIiwicHJvcHMiLCJwcm9qZWN0IiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldEluZm8iLCJjYWxsIiwiaW5mbyIsIm1pbmltdW1BbW91bnQiLCJiYWxhbmNlIiwicmVxdWVzdHNDb3VudCIsInZvdGVyc0NvdW50IiwibWFuYWdlckFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7Ozs7Ozs7O0ksQUFFZDs7Ozs7Ozs7Ozs7aUNBc0JPLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGUixBQUNJLEFBQ0ksQUFHWDs7O2FBMUJEOztBQUNBOzs7aUhBQzZCLEE7Ozs7O2lDQUN6QjtBQUNNO0EsMENBQVUsdUJBQVEsTUFBQSxBQUFNLE1BQWQsQUFBb0IsQUFFcEMsQTs7Ozs7dUNBQ21CLFFBQUEsQUFBUSxRQUFSLEFBQWdCLFVBQWhCLEFBQTBCLEE7O2lDQUF2QztBOzttREFJYSxLQURaLEFBQ1ksQUFBSyxBQUNwQjs2Q0FBUyxLQUZOLEFBRU0sQUFBSyxBQUNkO21EQUFlLEtBSFosQUFHWSxBQUFLLEFBQ3BCO2lEQUFhLEtBSlYsQUFJVSxBQUFLLEFBQ2xCO29EQUFnQixLQUxiLEFBS2EsQUFBSyxBO0FBTGxCLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFiZ0IsQSxBQStCNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2luZ2xlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FydHVyL0RvY3VtZW50cy9ibG9ja2NoYWluX2dvdmVybmFuY2Vfc3lzdGVtIn0=