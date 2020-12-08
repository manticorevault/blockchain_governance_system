"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _fresnel = require("@artsy/fresnel");

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/components/HomepageLayout.js";
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

var _createMedia = (0, _fresnel.createMedia)({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024
    }
}),
    MediaContextProvider = _createMedia.MediaContextProvider,
    Media = _createMedia.Media;

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */

var HomepageHeading = function HomepageHeading(_ref) {
    var mobile = _ref.mobile;
    return _react2.default.createElement(_semanticUiReact.Container, { text: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, _react2.default.createElement(_semanticUiReact.Header, {
        as: "h1",
        content: "MGMTLinks",
        inverted: true,
        style: {
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em'
        },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }), _react2.default.createElement(_semanticUiReact.Header, {
        as: "h2",
        content: "Transparent project management via Blockchain",
        inverted: true,
        style: {
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em'
        },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }), _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: "white", size: "huge", __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }, _react2.default.createElement(_link2.default, { href: "/projects/create", __source: {
            fileName: _jsxFileName,
            lineNumber: 64
        }
    }, "Get Started"), _react2.default.createElement(_semanticUiReact.Icon, { name: "right arrow", __source: {
            fileName: _jsxFileName,
            lineNumber: 67
        }
    })));
};

HomepageHeading.propTypes = {
    mobile: _propTypes2.default.bool

    /* Heads up!
     * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
     * It can be more complicated, but you can create really flexible markup.
     */
};
var DesktopContainer = function (_Component) {
    (0, _inherits3.default)(DesktopContainer, _Component);

    function DesktopContainer() {
        var _ref2;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DesktopContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = DesktopContainer.__proto__ || (0, _getPrototypeOf2.default)(DesktopContainer)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {}, _this.hideFixedMenu = function () {
            return _this.setState({ fixed: false });
        }, _this.showFixedMenu = function () {
            return _this.setState({ fixed: true });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DesktopContainer, [{
        key: "render",
        value: function render() {
            var children = this.props.children;
            var fixed = this.state.fixed;

            return _react2.default.createElement(Media, { greaterThan: "mobile", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement("link", {
                async: true,
                rel: "stylesheet",
                href: "//cdn.jsdelivr.net/npm/semantic-ui@2.0.0/dist/semantic.min.css",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            })), _react2.default.createElement(_semanticUiReact.Visibility, {
                once: false,
                onBottomPassed: this.showFixedMenu,
                onBottomPassedReverse: this.hideFixedMenu,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                inverted: true,
                textAlign: "center",
                style: { minHeight: 700, padding: '1em 0em' },
                vertical: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, {
                fixed: fixed ? 'top' : null,
                inverted: !fixed,
                pointing: !fixed,
                secondary: !fixed,
                size: "large",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", href: "/", active: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, "Home"), _react2.default.createElement(_semanticUiReact.Menu.Item, { position: "right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                href: "/projects/list",
                color: "olive",
                content: "Project List",
                icon: "unordered list",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                content: "New Project",
                href: "/projects/create",
                icon: "add",
                inverted: true,
                color: "white",
                style: { marginLeft: "10px" },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            })))), _react2.default.createElement(HomepageHeading, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }))), children);
        }
    }]);

    return DesktopContainer;
}(_react.Component);

DesktopContainer.propTypes = {
    children: _propTypes2.default.node
};

var MobileContainer = function (_Component2) {
    (0, _inherits3.default)(MobileContainer, _Component2);

    function MobileContainer() {
        var _ref3;

        var _temp2, _this2, _ret2;

        (0, _classCallCheck3.default)(this, MobileContainer);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref3 = MobileContainer.__proto__ || (0, _getPrototypeOf2.default)(MobileContainer)).call.apply(_ref3, [this].concat(args))), _this2), _this2.state = {}, _this2.handleSidebarHide = function () {
            return _this2.setState({ sidebarOpened: false });
        }, _this2.handleToggle = function () {
            return _this2.setState({ sidebarOpened: true });
        }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
    }

    (0, _createClass3.default)(MobileContainer, [{
        key: "render",
        value: function render() {
            var children = this.props.children;
            var sidebarOpened = this.state.sidebarOpened;

            return _react2.default.createElement(Media, { as: _semanticUiReact.Sidebar.Pushable, at: "mobile", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                }
            }, _react2.default.createElement(_semanticUiReact.Sidebar.Pushable, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 171
                }
            }, _react2.default.createElement(_semanticUiReact.Sidebar, {
                as: _semanticUiReact.Menu,
                animation: "overlay",
                inverted: true,
                onHide: this.handleSidebarHide,
                vertical: true,
                visible: sidebarOpened,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 172
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", active: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 180
                }
            }, "Home"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 183
                }
            }, "Work"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                }
            }, "Company"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, "Careers"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            }, "Log in"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            }, "Sign Up")), _react2.default.createElement(_semanticUiReact.Sidebar.Pusher, { dimmed: sidebarOpened, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                inverted: true,
                textAlign: "center",
                style: { minHeight: 350, padding: '1em 0em' },
                vertical: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 191
                }
            }, _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { inverted: true, pointing: true, secondary: true, size: "large", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { onClick: this.handleToggle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 199
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: "sidebar", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200
                }
            })), _react2.default.createElement(_semanticUiReact.Menu.Item, { position: "right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { as: "a", inverted: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                }
            }, "Log in"), _react2.default.createElement(_semanticUiReact.Button, { as: "a", inverted: true, style: { marginLeft: '0.5em' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 206
                }
            }, "Sign Up")))), _react2.default.createElement(HomepageHeading, { mobile: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 212
                }
            })), children)));
        }
    }]);

    return MobileContainer;
}(_react.Component);

MobileContainer.propTypes = {
    children: _propTypes2.default.node
};

var ResponsiveContainer = function ResponsiveContainer(_ref4) {
    var children = _ref4.children;
    return (
        /* Heads up!
         * For large applications it may not be best option to put all page into these containers at
         * they will be rendered twice for SSR.
         */
        _react2.default.createElement(MediaContextProvider, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 232
            }
        }, _react2.default.createElement(DesktopContainer, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 233
            }
        }, children), _react2.default.createElement(MobileContainer, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 234
            }
        }, children))
    );
};

ResponsiveContainer.propTypes = {
    children: _propTypes2.default.node
};

var HomepageLayout = function HomepageLayout() {
    return _react2.default.createElement(ResponsiveContainer, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 243
        }
    }, _react2.default.createElement(_semanticUiReact.Segment, { style: { padding: '8em 0em' }, vertical: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 244
        }
    }, _react2.default.createElement(_semanticUiReact.Grid, { container: true, stackable: true, verticalAlign: "middle", __source: {
            fileName: _jsxFileName,
            lineNumber: 245
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 246
        }
    }, _react2.default.createElement(_semanticUiReact.GridColumn, { width: 5, __source: {
            fileName: _jsxFileName,
            lineNumber: 247
        }
    }), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, textAlign: "center", __source: {
            fileName: _jsxFileName,
            lineNumber: 250
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { as: "h3", style: { fontSize: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 251
        }
    }, "We Help Companies and Companions"), _react2.default.createElement("p", { style: { fontSize: '1.33em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 254
        }
    }, "We can give your company superpowers to do things that they never thought possible. Let us handle your governance management in a simple, efficient and elegant way."), _react2.default.createElement(_semanticUiReact.Header, { as: "h3", style: { fontSize: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 258
        }
    }, "Governance over the Blockchain"), _react2.default.createElement("p", { style: { fontSize: '1.33em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 261
        }
    }, "Yes that's right! Use the Ethereum Blockchain to deal with your company's decisions. Anonymous voting, instant transactions and high auditing capacity."))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 270
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Column, { textAlign: "center", __source: {
            fileName: _jsxFileName,
            lineNumber: 271
        }
    }, _react2.default.createElement(_link2.default, { href: "/projects/list", __source: {
            fileName: _jsxFileName,
            lineNumber: 272
        }
    }, _react2.default.createElement("a", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 273
        }
    }, _react2.default.createElement(_semanticUiReact.Button, { size: "large", color: "olive", __source: {
            fileName: _jsxFileName,
            lineNumber: 274
        }
    }, "Check It Out!", _react2.default.createElement(_semanticUiReact.Icon, { name: "right arrow", __source: {
            fileName: _jsxFileName,
            lineNumber: 276
        }
    })))))))), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, vertical: true, style: { padding: '5em 0em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 285
        }
    }, _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 286
        }
    }, _react2.default.createElement(_semanticUiReact.Grid, { divided: true, inverted: true, stackable: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 287
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 288
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
            fileName: _jsxFileName,
            lineNumber: 289
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: "h4", content: "About", __source: {
            fileName: _jsxFileName,
            lineNumber: 290
        }
    }), _react2.default.createElement(_semanticUiReact.List, { link: true, inverted: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 291
        }
    }, _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 292
        }
    }, "Sitemap"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 293
        }
    }, "Contact Us"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 294
        }
    }, "Religious Ceremonies"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 295
        }
    }, "Gazebo Plans"))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
            fileName: _jsxFileName,
            lineNumber: 298
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: "h4", content: "Services", __source: {
            fileName: _jsxFileName,
            lineNumber: 299
        }
    }), _react2.default.createElement(_semanticUiReact.List, { link: true, inverted: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 300
        }
    }, _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 301
        }
    }, "Banana Pre-Order"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 302
        }
    }, "DNA FAQ"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 303
        }
    }, "How To Access"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 304
        }
    }, "Favorite X-Men"))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 7, __source: {
            fileName: _jsxFileName,
            lineNumber: 307
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { as: "h4", inverted: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 308
        }
    }, "Footer Header"), _react2.default.createElement("p", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 311
        }
    }, "Extra space for a call to action inside the footer that could help re-engage users.")))))));
};

exports.default = HomepageLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG9tZXBhZ2VMYXlvdXQuanMiXSwibmFtZXMiOlsiY3JlYXRlTWVkaWEiLCJIZWFkIiwiTGluayIsIlByb3BUeXBlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRGl2aWRlciIsIkdyaWQiLCJHcmlkQ29sdW1uIiwiSGVhZGVyIiwiSWNvbiIsIkltYWdlIiwiTGlzdCIsIk1lbnUiLCJTZWdtZW50IiwiU2lkZWJhciIsIlZpc2liaWxpdHkiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInRhYmxldCIsImNvbXB1dGVyIiwiTWVkaWFDb250ZXh0UHJvdmlkZXIiLCJNZWRpYSIsIkhvbWVwYWdlSGVhZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInByb3BUeXBlcyIsImJvb2wiLCJEZXNrdG9wQ29udGFpbmVyIiwic3RhdGUiLCJoaWRlRml4ZWRNZW51Iiwic2V0U3RhdGUiLCJmaXhlZCIsInNob3dGaXhlZE1lbnUiLCJjaGlsZHJlbiIsInByb3BzIiwibWluSGVpZ2h0IiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJub2RlIiwiTW9iaWxlQ29udGFpbmVyIiwiaGFuZGxlU2lkZWJhckhpZGUiLCJzaWRlYmFyT3BlbmVkIiwiaGFuZGxlVG9nZ2xlIiwiUHVzaGFibGUiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiSG9tZXBhZ2VMYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDSSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7Ozs7QUFyQko7QUFDQTs7OztnQkF3QmlCLEFBQ0QsQUFDUjtnQkFGUyxBQUVELEFBQ1I7a0Is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QkFBakM7d0JBREosQUFDSSxBQUNBO0FBREE7d0JBQ0EsQUFBQyx1Q0FBSyxNQUFOLE1BQVcsVUFBWDtzQkFBQTt3QkFBQSxBQUNJO0FBREo7dUJBQ0ssY0FBRCxzQkFBQSxBQUFNLFFBQUssSUFBWCxBQUFjO3NCQUFkO3dCQUFBO0FBQUE7T0FESixBQUNJLEFBQ0EscUNBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssSUFBWCxBQUFjO3NCQUFkO3dCQUFBO0FBQUE7T0FGSixBQUVJLEFBQ0EsNEJBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssSUFBWCxBQUFjO3NCQUFkO3dCQUFBO0FBQUE7T0FISixBQUdJLEFBQ0Esa0NBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssSUFBWCxBQUFjO3NCQUFkO3dCQUFBO0FBQUE7T0FoQlosQUFVSSxBQUVJLEFBSUksQUFHUixxQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO3NCQUFwQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxVQUFoQjtzQkFBQTt3QkFBQTtBQUFBO09BREosQUFDSSxBQUdBLGtDQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQXJFTCxBQUNuQixBQTBDSSxBQUNJLEFBQ0ksQUFDSSxBQW1CSSxBQUlJO0FBckU1QixBQWdGQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJIb21lcGFnZUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcnR1ci9Eb2N1bWVudHMvYmxvY2tjaGFpbl9nb3Zlcm5hbmNlX3N5c3RlbSJ9