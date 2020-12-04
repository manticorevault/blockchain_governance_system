webpackHotUpdate(5,{

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(1050);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _fresnel = __webpack_require__(1042);

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

var _link = __webpack_require__(738);

var _link2 = _interopRequireDefault(_link);

var _styledComponents = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"styled-components\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = __webpack_require__(55);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(478);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/blockchain_governance_system/components/HomepageLayout.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\ncolor: red;\n"], ["\ncolor: red;\n"]);

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

var RedLink = _styledComponents2.default.a(_templateObject);
var HomepageHeading = function HomepageHeading(_ref) {
    var mobile = _ref.mobile;
    return _react2.default.createElement(_semanticUiReact.Container, { text: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, _react2.default.createElement(_semanticUiReact.Header, {
        as: "h1",
        content: "Imagine-a-Company",
        inverted: true,
        style: {
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em'
        },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }), _react2.default.createElement(_semanticUiReact.Header, {
        as: "h2",
        content: "Do whatever you want when you want to.",
        inverted: true,
        style: {
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em'
        },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }), _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: "white", size: "huge", __source: {
            fileName: _jsxFileName,
            lineNumber: 64
        }
    }, _react2.default.createElement(RedLink, { href: "/projects/create", __source: {
            fileName: _jsxFileName,
            lineNumber: 66
        }
    }, "Get Started"), _react2.default.createElement(_semanticUiReact.Icon, { name: "right arrow", __source: {
            fileName: _jsxFileName,
            lineNumber: 69
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
                    lineNumber: 96
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement("link", {
                async: true,
                rel: "stylesheet",
                href: "//cdn.jsdelivr.net/npm/semantic-ui@2.0.0/dist/semantic.min.css",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            })), _react2.default.createElement(_semanticUiReact.Visibility, {
                once: false,
                onBottomPassed: this.showFixedMenu,
                onBottomPassedReverse: this.hideFixedMenu,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                inverted: true,
                textAlign: "center",
                style: { minHeight: 700, padding: '1em 0em' },
                vertical: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, {
                fixed: fixed ? 'top' : null,
                inverted: !fixed,
                pointing: !fixed,
                secondary: !fixed,
                size: "large",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", active: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, "Home"), _react2.default.createElement(_semanticUiReact.Menu.Item, { position: "right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                color: "olive",
                content: "Project List",
                icon: "unordered list", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                content: "New Project",
                icon: "add",
                inverted: true,
                color: "white",
                style: { marginLeft: "10px" },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            })))), _react2.default.createElement(HomepageHeading, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
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
                    lineNumber: 168
                }
            }, _react2.default.createElement(_semanticUiReact.Sidebar.Pushable, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
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
                    lineNumber: 170
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", active: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }, "Home"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            }, "Work"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                }
            }, "Company"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 183
                }
            }, "Careers"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                }
            }, "Log in"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, "Sign Up")), _react2.default.createElement(_semanticUiReact.Sidebar.Pusher, { dimmed: sidebarOpened, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                inverted: true,
                textAlign: "center",
                style: { minHeight: 350, padding: '1em 0em' },
                vertical: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            }, _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { inverted: true, pointing: true, secondary: true, size: "large", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { onClick: this.handleToggle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: "sidebar", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            })), _react2.default.createElement(_semanticUiReact.Menu.Item, { position: "right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { as: "a", inverted: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201
                }
            }, "Log in"), _react2.default.createElement(_semanticUiReact.Button, { as: "a", inverted: true, style: { marginLeft: '0.5em' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204
                }
            }, "Sign Up")))), _react2.default.createElement(HomepageHeading, { mobile: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
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
                lineNumber: 230
            }
        }, _react2.default.createElement(DesktopContainer, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 231
            }
        }, children), _react2.default.createElement(MobileContainer, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 232
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
            lineNumber: 241
        }
    }, _react2.default.createElement(_semanticUiReact.Segment, { style: { padding: '8em 0em' }, vertical: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 242
        }
    }, _react2.default.createElement(_semanticUiReact.Grid, { container: true, stackable: true, verticalAlign: "middle", __source: {
            fileName: _jsxFileName,
            lineNumber: 243
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 244
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, __source: {
            fileName: _jsxFileName,
            lineNumber: 245
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { as: "h3", style: { fontSize: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 246
        }
    }, "We Help Companies and Companions"), _react2.default.createElement("p", { style: { fontSize: '1.33em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 249
        }
    }, "We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics."), _react2.default.createElement(_semanticUiReact.Header, { as: "h3", style: { fontSize: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 253
        }
    }, "We Make Bananas That Can Dance"), _react2.default.createElement("p", { style: { fontSize: '1.33em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 256
        }
    }, "Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.")), _react2.default.createElement(_semanticUiReact.Grid.Column, { floated: "right", width: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 261
        }
    }, _react2.default.createElement(_semanticUiReact.Image, { bordered: true, rounded: true, size: "large", src: "/images/wireframe/white-image.png", __source: {
            fileName: _jsxFileName,
            lineNumber: 262
        }
    }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 265
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Column, { textAlign: "center", __source: {
            fileName: _jsxFileName,
            lineNumber: 266
        }
    }, _react2.default.createElement(_semanticUiReact.Button, { size: "huge", __source: {
            fileName: _jsxFileName,
            lineNumber: 267
        }
    }, "Check Them Out"))))), _react2.default.createElement(_semanticUiReact.Segment, { style: { padding: '0em' }, vertical: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 273
        }
    }, _react2.default.createElement(_semanticUiReact.Grid, { celled: "internally", columns: "equal", stackable: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 274
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Row, { textAlign: "center", __source: {
            fileName: _jsxFileName,
            lineNumber: 275
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { paddingBottom: '5em', paddingTop: '5em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 276
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { as: "h3", style: { fontSize: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 277
        }
    }, "\"What a Company\""), _react2.default.createElement("p", { style: { fontSize: '1.33em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 280
        }
    }, "That is what they all say about us")), _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { paddingBottom: '5em', paddingTop: '5em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 282
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { as: "h3", style: { fontSize: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 283
        }
    }, "\"I shouldn't have gone with their competitor.\""), _react2.default.createElement("p", { style: { fontSize: '1.33em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 286
        }
    }, _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: "/images/avatar/large/nan.jpg", __source: {
            fileName: _jsxFileName,
            lineNumber: 287
        }
    }), _react2.default.createElement("b", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 288
        }
    }, "Nan"), " Chief Fun Officer Acme Toys"))))), _react2.default.createElement(_semanticUiReact.Segment, { style: { padding: '8em 0em' }, vertical: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 295
        }
    }, _react2.default.createElement(_semanticUiReact.Container, { text: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 296
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { as: "h3", style: { fontSize: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 297
        }
    }, "Breaking The Grid, Grabs Your Attention"), _react2.default.createElement("p", { style: { fontSize: '1.33em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 300
        }
    }, "Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention."), _react2.default.createElement(_semanticUiReact.Button, { as: "a", size: "large", __source: {
            fileName: _jsxFileName,
            lineNumber: 305
        }
    }, "Read More"), _react2.default.createElement(_semanticUiReact.Divider, {
        as: "h4",
        className: "header",
        horizontal: true,
        style: { margin: '3em 0em', textTransform: 'uppercase' },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 309
        }
    }, _react2.default.createElement("a", { href: "#", __source: {
            fileName: _jsxFileName,
            lineNumber: 315
        }
    }, "Case Studies")), _react2.default.createElement(_semanticUiReact.Header, { as: "h3", style: { fontSize: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 318
        }
    }, "Did We Tell You About Our Bananas?"), _react2.default.createElement("p", { style: { fontSize: '1.33em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 321
        }
    }, "Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance."), _react2.default.createElement(_semanticUiReact.Button, { as: "a", size: "large", __source: {
            fileName: _jsxFileName,
            lineNumber: 326
        }
    }, "I'm Still Quite Interested"))), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, vertical: true, style: { padding: '5em 0em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 332
        }
    }, _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 333
        }
    }, _react2.default.createElement(_semanticUiReact.Grid, { divided: true, inverted: true, stackable: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 334
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 335
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
            fileName: _jsxFileName,
            lineNumber: 336
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: "h4", content: "About", __source: {
            fileName: _jsxFileName,
            lineNumber: 337
        }
    }), _react2.default.createElement(_semanticUiReact.List, { link: true, inverted: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 338
        }
    }, _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 339
        }
    }, "Sitemap"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 340
        }
    }, "Contact Us"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 341
        }
    }, "Religious Ceremonies"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 342
        }
    }, "Gazebo Plans"))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
            fileName: _jsxFileName,
            lineNumber: 345
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: "h4", content: "Services", __source: {
            fileName: _jsxFileName,
            lineNumber: 346
        }
    }), _react2.default.createElement(_semanticUiReact.List, { link: true, inverted: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 347
        }
    }, _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 348
        }
    }, "Banana Pre-Order"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 349
        }
    }, "DNA FAQ"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 350
        }
    }, "How To Access"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 351
        }
    }, "Favorite X-Men"))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 7, __source: {
            fileName: _jsxFileName,
            lineNumber: 354
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { as: "h4", inverted: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 355
        }
    }, "Footer Header"), _react2.default.createElement("p", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 358
        }
    }, "Extra space for a call to action inside the footer that could help re-engage users.")))))));
};

exports.default = HomepageLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG9tZXBhZ2VMYXlvdXQuanMiXSwibmFtZXMiOlsiY3JlYXRlTWVkaWEiLCJIZWFkIiwiTGluayIsInN0eWxlZCIsIlByb3BUeXBlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRGl2aWRlciIsIkdyaWQiLCJIZWFkZXIiLCJJY29uIiwiSW1hZ2UiLCJMaXN0IiwiTWVudSIsIlNlZ21lbnQiLCJTaWRlYmFyIiwiVmlzaWJpbGl0eSIsImJyZWFrcG9pbnRzIiwibW9iaWxlIiwidGFibGV0IiwiY29tcHV0ZXIiLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiUmVkTGluayIsImEiLCJIb21lcGFnZUhlYWRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJwcm9wVHlwZXMiLCJib29sIiwiRGVza3RvcENvbnRhaW5lciIsInN0YXRlIiwiaGlkZUZpeGVkTWVudSIsInNldFN0YXRlIiwiZml4ZWQiLCJzaG93Rml4ZWRNZW51IiwiY2hpbGRyZW4iLCJwcm9wcyIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJtYXJnaW5MZWZ0Iiwibm9kZSIsIk1vYmlsZUNvbnRhaW5lciIsImhhbmRsZVNpZGViYXJIaWRlIiwic2lkZWJhck9wZW5lZCIsImhhbmRsZVRvZ2dsZSIsIlB1c2hhYmxlIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIkhvbWVwYWdlTGF5b3V0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJ0ZXh0VHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDSSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNB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QUFYLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtPQURKLEFBQ0ksQUFDQSxxQ0FBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxJQUFYLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtPQUZKLEFBRUksQUFDQSw0QkFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxJQUFYLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtPQUhKLEFBR0ksQUFDQSxrQ0FBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxJQUFYLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtPQWhCWixBQVVJLEFBRUksQUFJSSxBQUdSLHFDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7c0JBQXBCO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDLHlDQUFPLElBQVIsQUFBVyxNQUFLLFVBQWhCO3NCQUFBO3dCQUFBO0FBQUE7T0FESixBQUNJLEFBR0Esa0NBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BdEhMLEFBQ25CLEFBMkZJLEFBQ0ksQUFDSSxBQUNJLEFBbUJJLEFBSUk7QUF0SDVCLEFBaUlBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkhvbWVwYWdlTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FydHVyL0RvY3VtZW50cy9ibG9ja2NoYWluX2dvdmVybmFuY2Vfc3lzdGVtIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/artur/Documents/blockchain_governance_system/components/HomepageLayout.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/artur/Documents/blockchain_governance_system/components/HomepageLayout.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lZDk0MGU0MWVlNzdlMzZhNjlkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lcGFnZUxheW91dC5qcz8wMjg4ZmMzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1tdWx0aS1jb21wICovXG5cbmltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBCdXR0b24sXG4gICAgQ29udGFpbmVyLFxuICAgIERpdmlkZXIsXG4gICAgR3JpZCxcbiAgICBIZWFkZXIsXG4gICAgSWNvbixcbiAgICBJbWFnZSxcbiAgICBMaXN0LFxuICAgIE1lbnUsXG4gICAgU2VnbWVudCxcbiAgICBTaWRlYmFyLFxuICAgIFZpc2liaWxpdHksXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCB7IE1lZGlhQ29udGV4dFByb3ZpZGVyLCBNZWRpYSB9ID0gY3JlYXRlTWVkaWEoe1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIG1vYmlsZTogMCxcbiAgICAgICAgdGFibGV0OiA3NjgsXG4gICAgICAgIGNvbXB1dGVyOiAxMDI0LFxuICAgIH0sXG59KVxuXG4vKiBIZWFkcyB1cCFcbiAqIEhvbWVwYWdlSGVhZGluZyB1c2VzIGlubGluZSBzdHlsaW5nLCBob3dldmVyIGl0J3Mgbm90IHRoZSBiZXN0IHByYWN0aWNlLiBVc2UgQ1NTIG9yIHN0eWxlZFxuICogY29tcG9uZW50cyBmb3Igc3VjaCB0aGluZ3MuXG4gKi9cblxuY29uc3QgUmVkTGluayA9IHN0eWxlZC5hYFxuY29sb3I6IHJlZDtcbmBcbmNvbnN0IEhvbWVwYWdlSGVhZGluZyA9ICh7IG1vYmlsZSB9KSA9PiAoXG4gICAgPENvbnRhaW5lciB0ZXh0PlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBhcz0naDEnXG4gICAgICAgICAgICBjb250ZW50PSdJbWFnaW5lLWEtQ29tcGFueSdcbiAgICAgICAgICAgIGludmVydGVkXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMmVtJyA6ICc0ZW0nLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/ICcxLjVlbScgOiAnM2VtJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIGFzPSdoMidcbiAgICAgICAgICAgIGNvbnRlbnQ9J0RvIHdoYXRldmVyIHlvdSB3YW50IHdoZW4geW91IHdhbnQgdG8uJ1xuICAgICAgICAgICAgaW52ZXJ0ZWRcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/ICcxLjVlbScgOiAnMS43ZW0nLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogbW9iaWxlID8gJzAuNWVtJyA6ICcxLjVlbScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIGludmVydGVkIGNvbG9yPVwid2hpdGVcIiBzaXplPSdodWdlJz5cblxuICAgICAgICAgICAgPFJlZExpbmsgaHJlZj1cIi9wcm9qZWN0cy9jcmVhdGVcIj5cbiAgICAgICAgICAgICAgICBHZXQgU3RhcnRlZFxuICAgICAgICAgICAgPC9SZWRMaW5rPlxuICAgICAgICAgICAgPEljb24gbmFtZT0ncmlnaHQgYXJyb3cnIC8+XG5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgPC9Db250YWluZXI+XG4pXG5cbkhvbWVwYWdlSGVhZGluZy5wcm9wVHlwZXMgPSB7XG4gICAgbW9iaWxlOiBQcm9wVHlwZXMuYm9vbCxcbn1cblxuLyogSGVhZHMgdXAhXG4gKiBOZWl0aGVyIFNlbWFudGljIFVJIG5vciBTZW1hbnRpYyBVSSBSZWFjdCBvZmZlciBhIHJlc3BvbnNpdmUgbmF2YmFyLCBob3dldmVyLCBpdCBjYW4gYmUgaW1wbGVtZW50ZWQgZWFzaWx5LlxuICogSXQgY2FuIGJlIG1vcmUgY29tcGxpY2F0ZWQsIGJ1dCB5b3UgY2FuIGNyZWF0ZSByZWFsbHkgZmxleGlibGUgbWFya3VwLlxuICovXG5jbGFzcyBEZXNrdG9wQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHt9XG5cbiAgICBoaWRlRml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiBmYWxzZSB9KVxuICAgIHNob3dGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IHRydWUgfSlcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBjb25zdCB7IGZpeGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgcmV0dXJuIChcblxuXG4gICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XG5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuMC4wL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5XG4gICAgICAgICAgICAgICAgICAgIG9uY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVBhc3NlZD17dGhpcy5zaG93Rml4ZWRNZW51fVxuICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVBhc3NlZFJldmVyc2U9e3RoaXMuaGlkZUZpeGVkTWVudX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDcwMCwgcGFkZGluZzogJzFlbSAwZW0nIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkPXtmaXhlZCA/ICd0b3AnIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZD17IWZpeGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50aW5nPXshZml4ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXshZml4ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nbGFyZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYScgYWN0aXZlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHBvc2l0aW9uPSdyaWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJvbGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIlByb2plY3QgTGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInVub3JkZXJlZCBsaXN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiTmV3IFByb2plY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJhZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVydGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhvbWVwYWdlSGVhZGluZyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgPC9WaXNpYmlsaXR5PlxuXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9NZWRpYT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuRGVza3RvcENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufVxuXG5jbGFzcyBNb2JpbGVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge31cblxuICAgIGhhbmRsZVNpZGViYXJIaWRlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IGZhbHNlIH0pXG5cbiAgICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW5lZDogdHJ1ZSB9KVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGNvbnN0IHsgc2lkZWJhck9wZW5lZCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVkaWEgYXM9e1NpZGViYXIuUHVzaGFibGV9IGF0PSdtb2JpbGUnPlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyLlB1c2hhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9e01lbnV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249J292ZXJsYXknXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZVNpZGViYXJIaWRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3NpZGViYXJPcGVuZWR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnIGFjdGl2ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnPldvcms8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnPkNvbXBhbnk8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnPkNhcmVlcnM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnPkxvZyBpbjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYSc+U2lnbiBVcDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L1NpZGViYXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIuUHVzaGVyIGRpbW1lZD17c2lkZWJhck9wZW5lZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVydGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAzNTAsIHBhZGRpbmc6ICcxZW0gMGVtJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgaW52ZXJ0ZWQgcG9pbnRpbmcgc2Vjb25kYXJ5IHNpemU9J2xhcmdlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J3NpZGViYXInIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249J3JpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFzPSdhJyBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIGluXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXM9J2EnIGludmVydGVkIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjVlbScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb21lcGFnZUhlYWRpbmcgbW9iaWxlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9TaWRlYmFyLlB1c2hlcj5cbiAgICAgICAgICAgICAgICA8L1NpZGViYXIuUHVzaGFibGU+XG4gICAgICAgICAgICA8L01lZGlhPlxuICAgICAgICApXG4gICAgfVxufVxuXG5Nb2JpbGVDb250YWluZXIucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuY29uc3QgUmVzcG9uc2l2ZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgICAvKiBIZWFkcyB1cCFcbiAgICAgKiBGb3IgbGFyZ2UgYXBwbGljYXRpb25zIGl0IG1heSBub3QgYmUgYmVzdCBvcHRpb24gdG8gcHV0IGFsbCBwYWdlIGludG8gdGhlc2UgY29udGFpbmVycyBhdFxuICAgICAqIHRoZXkgd2lsbCBiZSByZW5kZXJlZCB0d2ljZSBmb3IgU1NSLlxuICAgICAqL1xuICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPERlc2t0b3BDb250YWluZXI+e2NoaWxkcmVufTwvRGVza3RvcENvbnRhaW5lcj5cbiAgICAgICAgPE1vYmlsZUNvbnRhaW5lcj57Y2hpbGRyZW59PC9Nb2JpbGVDb250YWluZXI+XG4gICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cbilcblxuUmVzcG9uc2l2ZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufVxuXG5jb25zdCBIb21lcGFnZUxheW91dCA9ICgpID0+IChcbiAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgPFNlZ21lbnQgc3R5bGU9e3sgcGFkZGluZzogJzhlbSAwZW0nIH19IHZlcnRpY2FsPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxuICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgSGVscCBDb21wYW5pZXMgYW5kIENvbXBhbmlvbnNcbiAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGNhbiBnaXZlIHlvdXIgY29tcGFueSBzdXBlcnBvd2VycyB0byBkbyB0aGluZ3MgdGhhdCB0aGV5IG5ldmVyIHRob3VnaHQgcG9zc2libGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGV0IHVzIGRlbGlnaHQgeW91ciBjdXN0b21lcnMgYW5kIGVtcG93ZXIgeW91ciBuZWVkcy4uLiB0aHJvdWdoIHB1cmUgZGF0YSBhbmFseXRpY3MuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMycgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIE1ha2UgQmFuYW5hcyBUaGF0IENhbiBEYW5jZVxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWWVzIHRoYXQncyByaWdodCwgeW91IHRob3VnaHQgaXQgd2FzIHRoZSBzdHVmZiBvZiBkcmVhbXMsIGJ1dCBldmVuIGJhbmFuYXMgY2FuIGJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlvZW5naW5lZXJlZC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9J3JpZ2h0JyB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgYm9yZGVyZWQgcm91bmRlZCBzaXplPSdsYXJnZScgc3JjPScvaW1hZ2VzL3dpcmVmcmFtZS93aGl0ZS1pbWFnZS5wbmcnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB0ZXh0QWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2h1Z2UnPkNoZWNrIFRoZW0gT3V0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9TZWdtZW50PlxuXG4gICAgICAgIDxTZWdtZW50IHN0eWxlPXt7IHBhZGRpbmc6ICcwZW0nIH19IHZlcnRpY2FsPlxuICAgICAgICAgICAgPEdyaWQgY2VsbGVkPSdpbnRlcm5hbGx5JyBjb2x1bW5zPSdlcXVhbCcgc3RhY2thYmxlPlxuICAgICAgICAgICAgICAgIDxHcmlkLlJvdyB0ZXh0QWxpZ249J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAnNWVtJywgcGFkZGluZ1RvcDogJzVlbScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMycgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV2hhdCBhIENvbXBhbnlcIlxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+VGhhdCBpcyB3aGF0IHRoZXkgYWxsIHNheSBhYm91dCB1czwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206ICc1ZW0nLCBwYWRkaW5nVG9wOiAnNWVtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJIHNob3VsZG4ndCBoYXZlIGdvbmUgd2l0aCB0aGVpciBjb21wZXRpdG9yLlwiXG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgYXZhdGFyIHNyYz0nL2ltYWdlcy9hdmF0YXIvbGFyZ2UvbmFuLmpwZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5OYW48L2I+IENoaWVmIEZ1biBPZmZpY2VyIEFjbWUgVG95c1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvU2VnbWVudD5cblxuICAgICAgICA8U2VnbWVudCBzdHlsZT17eyBwYWRkaW5nOiAnOGVtIDBlbScgfX0gdmVydGljYWw+XG4gICAgICAgICAgICA8Q29udGFpbmVyIHRleHQ+XG4gICAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgQnJlYWtpbmcgVGhlIEdyaWQsIEdyYWJzIFlvdXIgQXR0ZW50aW9uXG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgSW5zdGVhZCBvZiBmb2N1c2luZyBvbiBjb250ZW50IGNyZWF0aW9uIGFuZCBoYXJkIHdvcmssIHdlIGhhdmUgbGVhcm5lZCBob3cgdG8gbWFzdGVyIHRoZVxuICAgICAgICAgICAgICAgICAgICBhcnQgb2YgZG9pbmcgbm90aGluZyBieSBwcm92aWRpbmcgbWFzc2l2ZSBhbW91bnRzIG9mIHdoaXRlc3BhY2UgYW5kIGdlbmVyaWMgY29udGVudCB0aGF0XG4gICAgICAgICAgICAgICAgICAgIGNhbiBzZWVtIG1hc3NpdmUsIG1vbm9saXRoaWMgYW5kIHdvcnRoIHlvdXIgYXR0ZW50aW9uLlxuICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBhcz0nYScgc2l6ZT0nbGFyZ2UnPlxuICAgICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8RGl2aWRlclxuICAgICAgICAgICAgICAgICAgICBhcz0naDQnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naGVhZGVyJ1xuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzNlbSAwZW0nLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+Q2FzZSBTdHVkaWVzPC9hPlxuICAgICAgICAgICAgICAgIDwvRGl2aWRlcj5cblxuICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XG4gICAgICAgICAgICAgICAgICAgIERpZCBXZSBUZWxsIFlvdSBBYm91dCBPdXIgQmFuYW5hcz9cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PlxuICAgICAgICAgICAgICAgICAgICBZZXMgSSBrbm93IHlvdSBwcm9iYWJseSBkaXNyZWdhcmRlZCB0aGUgZWFybGllciBib2FzdHMgYXMgbm9uLXNlcXVpdHVyIGZpbGxlciBjb250ZW50LCBidXRcbiAgICAgICAgICAgICAgICAgICAgaXQncyByZWFsbHkgdHJ1ZS4gSXQgdG9vayB5ZWFycyBvZiBnZW5lIHNwbGljaW5nIGFuZCBjb21iaW5hdG9yeSBETkEgcmVzZWFyY2gsIGJ1dCBvdXJcbiAgICAgICAgICAgICAgICAgICAgYmFuYW5hcyBjYW4gcmVhbGx5IGRhbmNlLlxuICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBhcz0nYScgc2l6ZT0nbGFyZ2UnPlxuICAgICAgICAgICAgICAgICAgICBJJ20gU3RpbGwgUXVpdGUgSW50ZXJlc3RlZFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L1NlZ21lbnQ+XG5cbiAgICAgICAgPFNlZ21lbnQgaW52ZXJ0ZWQgdmVydGljYWwgc3R5bGU9e3sgcGFkZGluZzogJzVlbSAwZW0nIH19PlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8R3JpZCBkaXZpZGVkIGludmVydGVkIHN0YWNrYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGludmVydGVkIGFzPSdoNCcgY29udGVudD0nQWJvdXQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QgbGluayBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+U2l0ZW1hcDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5Db250YWN0IFVzPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPlJlbGlnaW91cyBDZXJlbW9uaWVzPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkdhemVibyBQbGFuczwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgaW52ZXJ0ZWQgYXM9J2g0JyBjb250ZW50PSdTZXJ2aWNlcycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBsaW5rIGludmVydGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5CYW5hbmEgUHJlLU9yZGVyPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkROQSBGQVE8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+SG93IFRvIEFjY2VzczwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5GYXZvcml0ZSBYLU1lbjwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2g0JyBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9vdGVyIEhlYWRlclxuICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXh0cmEgc3BhY2UgZm9yIGEgY2FsbCB0byBhY3Rpb24gaW5zaWRlIHRoZSBmb290ZXIgdGhhdCBjb3VsZCBoZWxwIHJlLWVuZ2FnZSB1c2Vycy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9TZWdtZW50PlxuICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2VMYXlvdXRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSG9tZXBhZ2VMYXlvdXQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFZQTtBQUNBOzs7Ozs7O0FBdEJBO0FBQ0E7QUFDQTs7O0FBeUJBO0FBQ0E7O0FBRkE7QUFEQTs7OztBQU9BOzs7OztBQUtBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFIQTs7QUFMQTtBQVdBO0FBWEE7QUFDQTtBQVlBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQUE7QUFGQTs7QUFMQTtBQVVBO0FBVkE7QUFDQTtBQVNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7O0FBNUJBO0FBQ0E7QUFpQ0E7QUFDQTtBQUNBO0FBRkE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7QUFBQTtBQUNBO0FBQUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQU1BO0FBTkE7QUFDQTtBQU9BO0FBQUE7QUFDQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUhBOztBQUFBO0FBTUE7QUFOQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTs7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFIQTtBQUlBO0FBSkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBTEE7QUFVQTtBQVZBO0FBQ0E7O0FBU0E7QUFJQTtBQUpBO0FBQUE7Ozs7Ozs7QUFVQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFBQTtBQUVBO0FBQUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTs7QUFOQTtBQVFBO0FBUkE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBSEE7O0FBQUE7QUFNQTtBQU5BO0FBQ0E7O0FBS0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUdBO0FBSEE7QUFRQTs7Ozs7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBSUE7Ozs7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFQQTtBQUNBO0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==