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
            lineNumber: 40
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
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { as: "a", href: "/", active: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, "Home"), _react2.default.createElement(_semanticUiReact.Menu.Item, { position: "right", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                href: "/projects/list",
                color: "olive",
                content: "Project List",
                icon: "unordered list",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
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
                    lineNumber: 131
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG9tZXBhZ2VMYXlvdXQuanMiXSwibmFtZXMiOlsiY3JlYXRlTWVkaWEiLCJIZWFkIiwiTGluayIsIlByb3BUeXBlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRGl2aWRlciIsIkdyaWQiLCJIZWFkZXIiLCJJY29uIiwiSW1hZ2UiLCJMaXN0IiwiTWVudSIsIlNlZ21lbnQiLCJTaWRlYmFyIiwiVmlzaWJpbGl0eSIsImJyZWFrcG9pbnRzIiwibW9iaWxlIiwidGFibGV0IiwiY29tcHV0ZXIiLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiSG9tZXBhZ2VIZWFkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwicHJvcFR5cGVzIiwiYm9vbCIsIkRlc2t0b3BDb250YWluZXIiLCJzdGF0ZSIsImhpZGVGaXhlZE1lbnUiLCJzZXRTdGF0ZSIsImZpeGVkIiwic2hvd0ZpeGVkTWVudSIsImNoaWxkcmVuIiwicHJvcHMiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsIm5vZGUiLCJNb2JpbGVDb250YWluZXIiLCJoYW5kbGVTaWRlYmFySGlkZSIsInNpZGViYXJPcGVuZWQiLCJoYW5kbGVUb2dnbGUiLCJQdXNoYWJsZSIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJIb21lcGFnZUxheW91dCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwibWFyZ2luIiwidGV4dFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBUzs7OztBQUNoQixBQUNJLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7Ozs7QUFwQko7QUFDQTs7Oztn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O09BREosQUFDSSxBQUNBLHFDQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLElBQVgsQUFBYztzQkFBZDt3QkFBQTtBQUFBO09BRkosQUFFSSxBQUNBLDRCQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLElBQVgsQUFBYztzQkFBZDt3QkFBQTtBQUFBO09BSEosQUFHSSxBQUNBLGtDQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLElBQVgsQUFBYztzQkFBZDt3QkFBQTtBQUFBO09BaEJaLEFBVUksQUFFSSxBQUlJLEFBR1IscUNBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtzQkFBcEI7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUMseUNBQU8sSUFBUixBQUFXLE1BQUssVUFBaEI7c0JBQUE7d0JBQUE7QUFBQTtPQURKLEFBQ0ksQUFHQSxrQ0FBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0F0SEwsQUFDbkIsQUEyRkksQUFDSSxBQUNJLEFBQ0ksQUFtQkksQUFJSTtBQXRINUIsQUFpSUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSG9tZXBhZ2VMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXJ0dXIvRG9jdW1lbnRzL2Jsb2NrY2hhaW5fZ292ZXJuYW5jZV9zeXN0ZW0ifQ==