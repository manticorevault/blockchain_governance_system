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

var _factory = require("../../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/pages/projects/list.js?entry";


// Access the Deployed Projects and display them

var ProjectList = function (_Component) {
    (0, _inherits3.default)(ProjectList, _Component);

    function ProjectList() {
        (0, _classCallCheck3.default)(this, ProjectList);

        return (0, _possibleConstructorReturn3.default)(this, (ProjectList.__proto__ || (0, _getPrototypeOf2.default)(ProjectList)).apply(this, arguments));
    }

    (0, _createClass3.default)(ProjectList, [{
        key: "renderProjects",

        // A function to create a card group component
        // (Based on Semantic UI)
        value: function renderProjects() {
            var items = this.props.projects.map(function (address) {
                return {
                    header: _react2.default.createElement("h2", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    }, "Short ID: ", address.substr(0, 9), " "),
                    description: address,
                    extra: _react2.default.createElement(_semanticUiReact.Button, { color: "olive", icon: "eye", content: "View Project", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    }),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            // Display the list of projects in the front end
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement("link", {
                async: true,
                rel: "stylesheet",
                href: "//cdn.jsdelivr.net/npm/semantic-ui@2.0.0/dist/semantic.min.css",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }), _react2.default.createElement("h1", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, " Projects "), _react2.default.createElement(_semanticUiReact.Button, {
                content: "Start a new Project",
                icon: "add",
                floated: "right",
                secondary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }), this.renderProjects()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL2xpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiZmFjdG9yeSIsIkxheW91dCIsIlByb2plY3RMaXN0IiwiaXRlbXMiLCJwcm9wcyIsInByb2plY3RzIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsInN1YnN0ciIsImRlc2NyaXB0aW9uIiwiZXh0cmEiLCJmbHVpZCIsInJlbmRlclByb2plY3RzIiwibWV0aG9kcyIsImdldERlcGxveWVkUHJvamVjdHMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkI7O0lBQ00sQTs7Ozs7Ozs7OzthQVNGOztBQUNBOzt5Q0FDaUIsQUFDYjtnQkFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxtQkFBVyxBQUM3Qzs7NENBQ1ksY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHFCQUFBLEVBQWUsc0JBQUEsQUFBUSxPQUFSLEFBQWUsR0FBOUIsQUFBZSxBQUFrQixJQUR0QyxBQUNLLEFBQ1I7aUNBRkcsQUFFVSxBQUNiOzJDQUFPLEFBQUMseUNBQU8sT0FBUixBQUFjLFNBQVEsTUFBdEIsQUFBMkIsT0FBTSxTQUFqQyxBQUF5QztzQ0FBekM7d0NBSEosQUFHSSxBQUNQO0FBRE87cUJBQUE7MkJBSFgsQUFBTyxBQUlJLEFBR2Q7QUFQVSxBQUNIO0FBRlIsQUFBYyxBQVVkLGFBVmM7O2lEQVVQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0YsQUFDTDtBQUNBO21DQUVJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUE7dUJBQ0ksQUFFSTtxQkFGSixBQUVRLEFBQ0o7c0JBSEosQUFHUzs7OEJBSFQ7Z0NBREosQUFDSSxBQUtBO0FBTEE7QUFDSSxnQ0FJSixjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFOSixBQU1JLEFBRUEsK0JBQUEsQUFBQzt5QkFBRCxBQUNZLEFBQ1I7c0JBRkosQUFFUyxBQUNMO3lCQUhKLEFBR1ksQUFDUjsyQkFKSjs7OEJBQUE7Z0NBUkosQUFRSSxBQU9DO0FBUEQ7QUFDSSxxQkFaaEIsQUFFSSxBQUNJLEFBZUssQUFBSyxBQUlyQjs7O2FBaEREOzs7Ozs7Ozs7Ozt1Q0FFMkIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHNCQUFoQixBQUFzQyxBOztpQ0FBdkQ7QTtpRUFHQyxFQUFFLFVBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5XLEEsQUFxRDFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Imxpc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYXJ0dXIvRG9jdW1lbnRzL2Jsb2NrY2hhaW5fZ292ZXJuYW5jZV9zeXN0ZW0ifQ==