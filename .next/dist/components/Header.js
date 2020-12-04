"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/components/Header.js";

// Create the functional component with the Header's Menu
exports.default = function () {
    return (
        // Add some custom CSS to create a top margin
        _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: "10px" }, __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        }, _react2.default.createElement(_semanticUiReact.Button, {
            content: "Home"
            // Add handshake or handshake outline
            , icon: "connectdevelop",
            href: "/",
            fluid: true,
            primary: true,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 10
            }
        })), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
                fileName: _jsxFileName,
                lineNumber: 19
            }
        }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 20
            }
        }, _react2.default.createElement(_semanticUiReact.Button, {
            color: "olive",
            content: "Project List",
            href: "/projects/list",
            icon: "unordered list", __source: {
                fileName: _jsxFileName,
                lineNumber: 21
            }
        })), _react2.default.createElement(_semanticUiReact.Menu.Item, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 27
            }
        }, _react2.default.createElement(_semanticUiReact.Button, {
            content: "New Project",
            href: "/projects/create",
            icon: "add",
            secondary: true,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 28
            }
        }))))
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkJ1dHRvbiIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTTs7Ozs7O0FBRWYsQUFDQTtrQkFBZSxZQUFNLEFBQ2pCO0FBQ0k7QUFDQTt3QkFBQSxBQUFDLHVDQUFLLE9BQU8sRUFBRSxXQUFmLEFBQWEsQUFBYTswQkFBMUI7NEJBQUEsQUFDSTtBQURKOzJCQUNLLGNBQUQsc0JBQUEsQUFBTTs7MEJBQU47NEJBQUEsQUFDSTtBQURKO0FBQUEsMkJBQ0ksQUFBQztxQkFDVyxBQUNSO0FBRko7QUFDSSxjQUVBLE1BSEosQUFHUyxBQUNMO2tCQUpKLEFBSVMsQUFDTDttQkFMSixBQU1JO3FCQU5KOzswQkFBQTs0QkFGUixBQUNJLEFBQ0ksQUFTSjtBQVRJOzZCQVNILGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7MEJBQXBCOzRCQUFBLEFBQ0k7QUFESjsyQkFDSyxjQUFELHNCQUFBLEFBQU07OzBCQUFOOzRCQUFBLEFBQ0k7QUFESjtBQUFBLDJCQUNJLEFBQUM7bUJBQUQsQUFDVSxBQUNOO3FCQUZKLEFBRVksQUFDUjtrQkFISixBQUdTLEFBQ0w7a0JBSkosQUFJUzswQkFKVDs0QkFGUixBQUNJLEFBQ0ksQUFNSjtBQU5JO0FBQ0ksNkJBS1AsY0FBRCxzQkFBQSxBQUFNOzswQkFBTjs0QkFBQSxBQUNJO0FBREo7QUFBQSwyQkFDSSxBQUFDO3FCQUFELEFBQ1ksQUFDUjtrQkFGSixBQUVTLEFBQ0w7a0JBSEosQUFHUyxBQUNMO3VCQUpKOzswQkFBQTs0QkF0QmhCLEFBRUksQUFXSSxBQVFJLEFBQ0ksQUFVbkI7QUFWbUI7QUFDSTs7QUF4QnhCIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcnR1ci9Eb2N1bWVudHMvYmxvY2tjaGFpbl9nb3Zlcm5hbmNlX3N5c3RlbSJ9