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

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/pages/projects.js?entry";


// Access the Deployed Projects and display them

var ProjectList = function (_Component) {
    (0, _inherits3.default)(ProjectList, _Component);

    function ProjectList() {
        (0, _classCallCheck3.default)(this, ProjectList);

        return (0, _possibleConstructorReturn3.default)(this, (ProjectList.__proto__ || (0, _getPrototypeOf2.default)(ProjectList)).apply(this, arguments));
    }

    (0, _createClass3.default)(ProjectList, [{
        key: "render",
        value: function render() {
            // Display the list of projects in the front end
            return _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, this.props.projects[0]);
        }
    }], [{
        key: "getInitialProps",

        // Define the getInitialProps function in a static way
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var projects;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedProjects().call();

                            case 2:
                                projects = _context.sent;
                                return _context.abrupt("return", { projects: projects });

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return ProjectList;
}(_react.Component);

exports.default = ProjectList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIlByb2plY3RMaXN0IiwicHJvcHMiLCJwcm9qZWN0cyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZFByb2plY3RzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7Ozs7OztBQUVwQjs7SSxBQUNNOzs7Ozs7Ozs7OztpQ0FTTyxBQUNMO0FBQ0E7bUNBQU8sY0FBQTs7OEJBQUE7Z0NBQUEsQUFBTTtBQUFOO0FBQUEsYUFBQSxPQUFNLEFBQUssTUFBTCxBQUFXLFNBQXhCLEFBQU8sQUFBTSxBQUFvQixBQUNwQzs7O2FBWEQ7Ozs7Ozs7Ozs7O3VDQUUyQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0Isc0IsQUFBaEIsQUFBc0M7O2lDQUF2RDtBO2lFQUdDLEVBQUUsVSxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFOVyxBQWdCMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoicHJvamVjdHMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYXJ0dXIvRG9jdW1lbnRzL2Jsb2NrY2hhaW5fZ292ZXJuYW5jZV9zeXN0ZW0ifQ==