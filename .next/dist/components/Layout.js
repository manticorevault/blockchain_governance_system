"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/components/Layout.js";

exports.default = function (props) {
    return (
        // Contain the maximum width with a container
        // Add a next/head component to move the stylesheet to the head tag
        _react2.default.createElement(_semanticUiReact.Container, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        }, _react2.default.createElement(_head2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 12
            }
        }, _react2.default.createElement("link", {
            async: true,
            rel: "stylesheet",
            href: "//cdn.jsdelivr.net/npm/semantic-ui@2.0.0/dist/semantic.min.css",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 13
            }
        })), _react2.default.createElement(_Header2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 20
            }
        }), props.children)
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiSGVhZCIsIkNvbnRhaW5lciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQVMsQUFHVDs7Ozs7O2tCQUFlLFVBQUEsQUFBQyxPQUFVLEFBQ3RCO0FBQ0k7QUFDQTtBQUNBO3dCQUFBLEFBQUM7OzBCQUFEOzRCQUFBLEFBQ0k7QUFESjtBQUFBLDJCQUNJLEFBQUM7OzBCQUFEOzRCQUFBLEFBQ0k7QUFESjtBQUFBO21CQUNJLEFBRUk7aUJBRkosQUFFUSxBQUNKO2tCQUhKLEFBR1M7OzBCQUhUOzRCQUZSLEFBQ0ksQUFDSSxBQU9KO0FBUEk7QUFDSSw2QkFNUixBQUFDOzswQkFBRDs0QkFUSixBQVNJLEFBQ0M7QUFERDtBQUFBLGtCQVpSLEFBR0ksQUFVVyxBQUlsQjs7QUFsQkQiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FydHVyL0RvY3VtZW50cy9ibG9ja2NoYWluX2dvdmVybmFuY2Vfc3lzdGVtIn0=