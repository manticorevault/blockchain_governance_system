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
                    header: _react2.default.createElement(_semanticUiReact.Label, { color: "black", style: { borderRadius: "5px" }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    }, " Short ID: ", address.substr(0, 9), " "),
                    description: _react2.default.createElement("h4", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    }, " Address: ", address),
                    extra: _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
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
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
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
                    lineNumber: 44
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement("h1", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, " Projects "), _react2.default.createElement(_routes.Link, { route: "/projects/create", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                content: "Start a new Project",
                icon: "add",
                floated: "right",
                secondary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }))), this.renderProjects()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3RzL2xpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiTGFiZWwiLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIlByb2plY3RMaXN0IiwiaXRlbXMiLCJwcm9wcyIsInByb2plY3RzIiwibWFwIiwiaGVhZGVyIiwiYm9yZGVyUmFkaXVzIiwiYWRkcmVzcyIsInN1YnN0ciIsImRlc2NyaXB0aW9uIiwiZXh0cmEiLCJmbHVpZCIsInJlbmRlclByb2plY3RzIiwibWV0aG9kcyIsImdldERlcGxveWVkUHJvamVjdHMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFROztBQUN2QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztBQUVyQjs7SUFDTSxBOzs7Ozs7Ozs7O2FBU0Y7O0FBQ0E7O3lDQUNpQixBQUNiO2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLG1CQUFXLEFBQzdDOzs0Q0FDWSxBQUFDLHdDQUFNLE9BQVAsQUFBYSxTQUFRLE9BQU8sRUFBRSxjQUE5QixBQUE0QixBQUFnQjtzQ0FBNUM7d0NBQUE7QUFBQTtxQkFBQSxFQUFpRSx1QkFBQSxBQUFRLE9BQVIsQUFBZSxHQUFoRixBQUFpRSxBQUFrQixJQUR4RixBQUNLLEFBQ1I7aURBQWEsY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHFCQUFBLEVBQWUsY0FGekIsQUFFVSxBQUNiOzJDQUNJLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7c0NBQTNCO3dDQUFBLEFBQ0k7QUFESjtxQkFBQSxrQkFDSSxjQUFBOztzQ0FBQTt3Q0FBQSxBQUNJO0FBREo7QUFBQSx1Q0FDSSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE1BQXRCLEFBQTJCLE9BQU0sU0FBakMsQUFBeUM7c0NBQXpDO3dDQU5ULEFBSUMsQUFDSSxBQUNJLEFBSVo7QUFKWTs7MkJBTmhCLEFBQU8sQUFVSSxBQUdkO0FBYlUsQUFDSDtBQUZSLEFBQWMsQUFnQmQsYUFoQmM7O2lEQWdCUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUlGLEFBQ0w7QUFDQTttQ0FFSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFFQSwrQkFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzt5QkFBRCxBQUNZLEFBQ1I7c0JBRkosQUFFUyxBQUNMO3lCQUhKLEFBR1ksQUFDUjsyQkFKSjs7OEJBQUE7Z0NBTFosQUFHSSxBQUNJLEFBQ0ksQUFVUDtBQVZPO0FBQ0ksdUJBVHhCLEFBRUksQUFDSSxBQWVLLEFBQUssQUFJckI7OzthQXZERDs7Ozs7Ozs7Ozs7dUNBRTJCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixzQkFBaEIsQSxBQUFzQzs7aUNBQXZEO0E7aUVBR0MsRUFBRSxVQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOVyxBLEFBNEQxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJsaXN0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FydHVyL0RvY3VtZW50cy9ibG9ja2NoYWluX2dvdmVybmFuY2Vfc3lzdGVtIn0=