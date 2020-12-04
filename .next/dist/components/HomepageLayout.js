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
            lineNumber: 39
        }
    }, _react2.default.createElement(_semanticUiReact.Header, {
        as: "h1",
        content: "Links",
        inverted: true,
        style: {
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em'
        },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }), _react2.default.createElement(_semanticUiReact.Header, {
        as: "h2",
        content: "Project management governance via Blockchain",
        inverted: true,
        style: {
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em'
        },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }), _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: "white", size: "huge", __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }, _react2.default.createElement(_link2.default, { href: "/projects/create", __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }, "Get Started"), _react2.default.createElement(_semanticUiReact.Icon, { name: "right arrow", __source: {
            fileName: _jsxFileName,
            lineNumber: 66
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
                    lineNumber: 93
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement("link", {
                async: true,
                rel: "stylesheet",
                href: "//cdn.jsdelivr.net/npm/semantic-ui@2.0.0/dist/semantic.min.css",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            })), _react2.default.createElement(_semanticUiReact.Visibility, {
                once: false,
                onBottomPassed: this.showFixedMenu,
                onBottomPassedReverse: this.hideFixedMenu,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                inverted: true,
                textAlign: "center",
                style: { minHeight: 700, padding: '1em 0em' },
                vertical: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, {
                fixed: fixed ? 'top' : null,
                inverted: !fixed,
                pointing: !fixed,
                secondary: !fixed,
                size: "large",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", active: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, "Home"), _react2.default.createElement(_semanticUiReact.Menu.Item, { position: "right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                color: "olive",
                content: "Project List",
                icon: "unordered list", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                content: "New Project",
                icon: "add",
                inverted: true,
                color: "white",
                style: { marginLeft: "10px" },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            })))), _react2.default.createElement(HomepageHeading, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
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
                    lineNumber: 165
                }
            }, _react2.default.createElement(_semanticUiReact.Sidebar.Pushable, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
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
                    lineNumber: 167
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", active: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175
                }
            }, "Home"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }, "Work"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                }
            }, "Company"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 180
                }
            }, "Careers"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            }, "Log in"), _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                }
            }, "Sign Up")), _react2.default.createElement(_semanticUiReact.Sidebar.Pusher, { dimmed: sidebarOpened, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                inverted: true,
                textAlign: "center",
                style: { minHeight: 350, padding: '1em 0em' },
                vertical: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            }, _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192
                }
            }, _react2.default.createElement(_semanticUiReact.Menu, { inverted: true, pointing: true, secondary: true, size: "large", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { onClick: this.handleToggle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 194
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: "sidebar", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            })), _react2.default.createElement(_semanticUiReact.Menu.Item, { position: "right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { as: "a", inverted: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }, "Log in"), _react2.default.createElement(_semanticUiReact.Button, { as: "a", inverted: true, style: { marginLeft: '0.5em' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201
                }
            }, "Sign Up")))), _react2.default.createElement(HomepageHeading, { mobile: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
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
                lineNumber: 227
            }
        }, _react2.default.createElement(DesktopContainer, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 228
            }
        }, children), _react2.default.createElement(MobileContainer, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 229
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
            lineNumber: 238
        }
    }, _react2.default.createElement(_semanticUiReact.Segment, { style: { padding: '8em 0em' }, vertical: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 239
        }
    }, _react2.default.createElement(_semanticUiReact.Grid, { container: true, stackable: true, verticalAlign: "middle", __source: {
            fileName: _jsxFileName,
            lineNumber: 240
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 241
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, __source: {
            fileName: _jsxFileName,
            lineNumber: 242
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { as: "h3", style: { fontSize: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 243
        }
    }, "We Help Companies and Companions"), _react2.default.createElement("p", { style: { fontSize: '1.33em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 246
        }
    }, "We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics."), _react2.default.createElement(_semanticUiReact.Header, { as: "h3", style: { fontSize: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 250
        }
    }, "We Make Bananas That Can Dance"), _react2.default.createElement("p", { style: { fontSize: '1.33em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 253
        }
    }, "Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.")), _react2.default.createElement(_semanticUiReact.Grid.Column, { floated: "right", width: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 258
        }
    }, _react2.default.createElement(_semanticUiReact.Image, { bordered: true, rounded: true, size: "large", src: "/images/wireframe/white-image.png", __source: {
            fileName: _jsxFileName,
            lineNumber: 259
        }
    }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 262
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Column, { textAlign: "center", __source: {
            fileName: _jsxFileName,
            lineNumber: 263
        }
    }, _react2.default.createElement(_semanticUiReact.Button, { size: "huge", __source: {
            fileName: _jsxFileName,
            lineNumber: 264
        }
    }, "Check Them Out"))))), _react2.default.createElement(_semanticUiReact.Segment, { style: { padding: '0em' }, vertical: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 270
        }
    }, _react2.default.createElement(_semanticUiReact.Grid, { celled: "internally", columns: "equal", stackable: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 271
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Row, { textAlign: "center", __source: {
            fileName: _jsxFileName,
            lineNumber: 272
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { paddingBottom: '5em', paddingTop: '5em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 273
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { as: "h3", style: { fontSize: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 274
        }
    }, "\"What a Company\""), _react2.default.createElement("p", { style: { fontSize: '1.33em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 277
        }
    }, "That is what they all say about us")), _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { paddingBottom: '5em', paddingTop: '5em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 279
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { as: "h3", style: { fontSize: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 280
        }
    }, "\"I shouldn't have gone with their competitor.\""), _react2.default.createElement("p", { style: { fontSize: '1.33em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 283
        }
    }, _react2.default.createElement(_semanticUiReact.Image, { avatar: true, src: "/images/avatar/large/nan.jpg", __source: {
            fileName: _jsxFileName,
            lineNumber: 284
        }
    }), _react2.default.createElement("b", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 285
        }
    }, "Nan"), " Chief Fun Officer Acme Toys"))))), _react2.default.createElement(_semanticUiReact.Segment, { style: { padding: '8em 0em' }, vertical: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 292
        }
    }, _react2.default.createElement(_semanticUiReact.Container, { text: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 293
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { as: "h3", style: { fontSize: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 294
        }
    }, "Breaking The Grid, Grabs Your Attention"), _react2.default.createElement("p", { style: { fontSize: '1.33em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 297
        }
    }, "Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention."), _react2.default.createElement(_semanticUiReact.Button, { as: "a", size: "large", __source: {
            fileName: _jsxFileName,
            lineNumber: 302
        }
    }, "Read More"), _react2.default.createElement(_semanticUiReact.Divider, {
        as: "h4",
        className: "header",
        horizontal: true,
        style: { margin: '3em 0em', textTransform: 'uppercase' },
        __source: {
            fileName: _jsxFileName,
            lineNumber: 306
        }
    }, _react2.default.createElement("a", { href: "#", __source: {
            fileName: _jsxFileName,
            lineNumber: 312
        }
    }, "Case Studies")), _react2.default.createElement(_semanticUiReact.Header, { as: "h3", style: { fontSize: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 315
        }
    }, "Did We Tell You About Our Bananas?"), _react2.default.createElement("p", { style: { fontSize: '1.33em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 318
        }
    }, "Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance."), _react2.default.createElement(_semanticUiReact.Button, { as: "a", size: "large", __source: {
            fileName: _jsxFileName,
            lineNumber: 323
        }
    }, "I'm Still Quite Interested"))), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, vertical: true, style: { padding: '5em 0em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 329
        }
    }, _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 330
        }
    }, _react2.default.createElement(_semanticUiReact.Grid, { divided: true, inverted: true, stackable: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 331
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 332
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
            fileName: _jsxFileName,
            lineNumber: 333
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: "h4", content: "About", __source: {
            fileName: _jsxFileName,
            lineNumber: 334
        }
    }), _react2.default.createElement(_semanticUiReact.List, { link: true, inverted: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 335
        }
    }, _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 336
        }
    }, "Sitemap"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 337
        }
    }, "Contact Us"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 338
        }
    }, "Religious Ceremonies"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 339
        }
    }, "Gazebo Plans"))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
            fileName: _jsxFileName,
            lineNumber: 342
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { inverted: true, as: "h4", content: "Services", __source: {
            fileName: _jsxFileName,
            lineNumber: 343
        }
    }), _react2.default.createElement(_semanticUiReact.List, { link: true, inverted: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 344
        }
    }, _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 345
        }
    }, "Banana Pre-Order"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 346
        }
    }, "DNA FAQ"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 347
        }
    }, "How To Access"), _react2.default.createElement(_semanticUiReact.List.Item, { as: "a", __source: {
            fileName: _jsxFileName,
            lineNumber: 348
        }
    }, "Favorite X-Men"))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 7, __source: {
            fileName: _jsxFileName,
            lineNumber: 351
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { as: "h4", inverted: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 352
        }
    }, "Footer Header"), _react2.default.createElement("p", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 355
        }
    }, "Extra space for a call to action inside the footer that could help re-engage users.")))))));
};

exports.default = HomepageLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG9tZXBhZ2VMYXlvdXQuanMiXSwibmFtZXMiOlsiY3JlYXRlTWVkaWEiLCJIZWFkIiwiTGluayIsIlByb3BUeXBlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRGl2aWRlciIsIkdyaWQiLCJIZWFkZXIiLCJJY29uIiwiSW1hZ2UiLCJMaXN0IiwiTWVudSIsIlNlZ21lbnQiLCJTaWRlYmFyIiwiVmlzaWJpbGl0eSIsImJyZWFrcG9pbnRzIiwibW9iaWxlIiwidGFibGV0IiwiY29tcHV0ZXIiLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiSG9tZXBhZ2VIZWFkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwicHJvcFR5cGVzIiwiYm9vbCIsIkRlc2t0b3BDb250YWluZXIiLCJzdGF0ZSIsImhpZGVGaXhlZE1lbnUiLCJzZXRTdGF0ZSIsImZpeGVkIiwic2hvd0ZpeGVkTWVudSIsImNoaWxkcmVuIiwicHJvcHMiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsIm5vZGUiLCJNb2JpbGVDb250YWluZXIiLCJoYW5kbGVTaWRlYmFySGlkZSIsInNpZGViYXJPcGVuZWQiLCJoYW5kbGVUb2dnbGUiLCJQdXNoYWJsZSIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJIb21lcGFnZUxheW91dCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwibWFyZ2luIiwidGV4dFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBUzs7OztBQUNoQixBQUNJLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7Ozs7QUFwQko7QUFDQTs7Oztn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QWM7c0JBQWQ7d0JBQUE7QUFBQTtPQUZKLEFBRUksQUFDQSw0QkFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxJQUFYLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtPQUhKLEFBR0ksQUFDQSxrQ0FBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxJQUFYLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtPQWhCWixBQVVJLEFBRUksQUFJSSxBQUdSLHFDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7c0JBQXBCO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDLHlDQUFPLElBQVIsQUFBVyxNQUFLLFVBQWhCO3NCQUFBO3dCQUFBO0FBQUE7T0FESixBQUNJLEFBR0Esa0NBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BdEhMLEFBQ25CLEFBMkZJLEFBQ0ksQUFDSSxBQUNJLEFBbUJJLEFBSUk7QUF0SDVCLEFBaUlBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkhvbWVwYWdlTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FydHVyL0RvY3VtZW50cy9ibG9ja2NoYWluX2dvdmVybmFuY2Vfc3lzdGVtIn0=