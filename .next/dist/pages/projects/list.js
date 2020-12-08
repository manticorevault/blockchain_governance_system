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

var _routes = require("../../routes");

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
                    header: _react2.default.createElement(_semanticUiReact.Label, { color: "black", style: { borderRadius: "5px", overflowWrap: "break-word" }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    }, " Short ID: ", address.substr(0, 9), " "),
                    description: "",
                    extra: _react2.default.createElement(_routes.Link, { route: "/projects/" + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    }, _react2.default.createElement("a", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    }, _react2.default.createElement(_semanticUiReact.Button, { color: "olive", icon: "eye", content: "View Project", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    }))),
                    fluid: true,
                    style: { overflowWrap: "break-word" }
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 2, items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
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
                    lineNumber: 45
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement("h1", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, " Projects "), this.renderProjects()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL2xpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiTGFiZWwiLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIlByb2plY3RMaXN0IiwiaXRlbXMiLCJwcm9wcyIsInByb2plY3RzIiwibWFwIiwiaGVhZGVyIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3dXcmFwIiwiYWRkcmVzcyIsInN1YnN0ciIsImRlc2NyaXB0aW9uIiwiZXh0cmEiLCJmbHVpZCIsInN0eWxlIiwicmVuZGVyUHJvamVjdHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRQcm9qZWN0cyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVE7O0FBQ3ZCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0FBRXJCOztJLEFBQ007Ozs7Ozs7Ozs7YUFTRjs7QUFDQTs7eUNBQ2lCLEFBQ2I7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksbUJBQVcsQUFDN0M7OzRDQUNZLEFBQUMsd0NBQU0sT0FBUCxBQUFhLFNBQVEsT0FBTyxFQUFFLGNBQUYsQUFBZ0IsT0FBTyxjQUFuRCxBQUE0QixBQUFxQztzQ0FBakU7d0NBQUE7QUFBQTtxQkFBQSxFQUE2Rix1QkFBQSxBQUFRLE9BQVIsQUFBZSxHQUE1RyxBQUE2RixBQUFrQixJQURwSCxBQUNLLEFBQ1I7aUNBRkcsQUFFVSxBQUNiOzJDQUNJLEFBQUMsOEJBQUssc0JBQU4sQUFBMEI7c0NBQTFCO3dDQUFBLEFBQ0k7QUFESjtxQkFBQSxrQkFDSSxjQUFBOztzQ0FBQTt3Q0FBQSxBQUNJO0FBREo7QUFBQSx1Q0FDSSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE1BQXRCLEFBQTJCLE9BQU0sU0FBakMsQUFBeUM7c0NBQXpDO3dDQU5ULEFBSUMsQUFDSSxBQUNJLEFBSVo7QUFKWTs7MkJBTlQsQUFVSSxBQUNQOzJCQUFPLEVBQUUsY0FYYixBQUFPLEFBV0ksQUFBZ0IsQUFHOUI7QUFkVSxBQUNIO0FBRlIsQUFBYyxBQWlCZCxhQWpCYzs7aURBaUJQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLGFBQVosQUFBeUIsR0FBRyxPQUE1QixBQUFtQzs4QkFBbkM7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FJRixBQUNMO0FBQ0E7bUNBRUksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBY0Msb0JBbEJiLEFBRUksQUFDSSxBQWVLLEFBQUssQUFJckI7OzthQXhERDs7Ozs7Ozs7Ozs7dUNBRTJCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixzQkFBaEIsQUFBc0MsQTs7aUNBQXZEO0E7aUVBR0MsRUFBRSxVQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOVyxBLEFBNkQxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJsaXN0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FydHVyL0RvY3VtZW50cy9ibG9ja2NoYWluX2dvdmVybmFuY2Vfc3lzdGVtIn0=