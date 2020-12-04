"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/components/Header.js";

// Create the functional component with the Header's Menu
exports.default = function () {
    return (
        // Add some custom CSS to create a top margin
        _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: "10px" }, __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        }, _react2.default.createElement(_routes.Link, { primary: true, route: "/", __source: {
                fileName: _jsxFileName,
                lineNumber: 10
            }
        }, _react2.default.createElement(_semanticUiReact.Button, {
            content: "Home"
            // Add handshake or handshake outline
            , icon: "connectdevelop",
            href: "/",
            primary: true,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        })), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
                fileName: _jsxFileName,
                lineNumber: 20
            }
        }, _react2.default.createElement(_routes.Link, { route: "/projects/list", __source: {
                fileName: _jsxFileName,
                lineNumber: 22
            }
        }, _react2.default.createElement(_semanticUiReact.Button, {
            color: "olive",
            content: "Project List",
            href: "/projects/list",
            icon: "unordered list",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 23
            }
        })), _react2.default.createElement(_routes.Link, { route: "/projects/create", __source: {
                fileName: _jsxFileName,
                lineNumber: 31
            }
        }, _react2.default.createElement(_semanticUiReact.Button, {
            content: "New Project",
            href: "/projects/create",
            icon: "add",
            secondary: true,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 32
            }
        }))))
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkJ1dHRvbiIsIkxpbmsiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU07O0FBQ2YsQUFBUyxBQUFZOzs7Ozs7QUFFckIsQUFDQTtrQkFBZSxZQUFNLEFBQ2pCO0FBQ0k7QUFDQTt3QkFBQSxBQUFDLHVDQUFLLE9BQU8sRUFBRSxXQUFmLEFBQWEsQUFBYTswQkFBMUI7NEJBQUEsQUFDSTtBQURKOzJCQUNJLEFBQUMsOEJBQUssU0FBTixNQUFjLE9BQWQsQUFBb0I7MEJBQXBCOzRCQUFBLEFBQ0k7QUFESjsyQkFDSSxBQUFDO3FCQUNXLEFBQ1I7QUFGSjtBQUNJLGNBRUEsTUFISixBQUdTLEFBQ0w7a0JBSkosQUFJUyxBQUNMO3FCQUxKOzswQkFBQTs0QkFGUixBQUNJLEFBQ0ksQUFTSjtBQVRJOzZCQVNILGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7MEJBQXBCOzRCQUFBLEFBRUk7QUFGSjsyQkFFSSxBQUFDLDhCQUFLLE9BQU4sQUFBWTswQkFBWjs0QkFBQSxBQUNJO0FBREo7MkJBQ0ksQUFBQzttQkFBRCxBQUNVLEFBQ047cUJBRkosQUFFWSxBQUNSO2tCQUhKLEFBR1MsQUFDTDtrQkFKSixBQUlTOzswQkFKVDs0QkFIUixBQUVJLEFBQ0ksQUFRSjtBQVJJO0FBQ0ksNkJBT1IsQUFBQyw4QkFBSyxPQUFOLEFBQVk7MEJBQVo7NEJBQUEsQUFDSTtBQURKOzJCQUNJLEFBQUM7cUJBQUQsQUFDWSxBQUNSO2tCQUZKLEFBRVMsQUFDTDtrQkFISixBQUdTLEFBQ0w7dUJBSko7OzBCQUFBOzRCQXpCaEIsQUFFSSxBQVdJLEFBV0ksQUFDSSxBQVduQjtBQVhtQjtBQUNJOztBQTNCeEIiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FydHVyL0RvY3VtZW50cy9ibG9ja2NoYWluX2dvdmVybmFuY2Vfc3lzdGVtIn0=