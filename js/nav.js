/**
 * Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

define("lib/jquery.menu-aim", ["jquery"], function(e) {
        return function(e) {
            function t(t) {
                var n = e(this),
                    i = null,
                    o = [],
                    a = null,
                    r = null,
                    s = e.extend({
                        rowSelector: "> li",
                        submenuSelector: "*",
                        submenuDirection: "right",
                        tolerance: 75,
                        enter: e.noop,
                        exit: e.noop,
                        activate: e.noop,
                        deactivate: e.noop,
                        exitMenu: e.noop
                    }, t),
                    u = 3,
                    c = 300,
                    d = function(e) {
                        o.push({
                            x: e.pageX,
                            y: e.pageY
                        }), o.length > u && o.shift()
                    },
                    l = function() {
                        r && clearTimeout(r), s.exitMenu(this) && (i && s.deactivate(i), i = null)
                    },
                    v = function() {
                        r && clearTimeout(r), s.enter(this), g(this)
                    },
                    m = function() {
                        s.exit(this)
                    },
                    f = function() {
                        h(this)
                    },
                    h = function(e) {
                        e != i && (i && s.deactivate(i), s.activate(e), i = e)
                    },
                    g = function(e) {
                        var t = p();
                        t ? r = setTimeout(function() {
                            g(e)
                        }, t) : h(e)
                    },
                    p = function() {
                        function t(e, t) {
                            return (t.y - e.y) / (t.x - e.x)
                        }
                        if (!i || !e(i).is(s.submenuSelector)) return 0;
                        var r = n.offset(),
                            u = {
                                x: r.left,
                                y: r.top - s.tolerance
                            },
                            d = {
                                x: r.left + n.outerWidth(),
                                y: u.y
                            },
                            l = {
                                x: r.left,
                                y: r.top + n.outerHeight() + s.tolerance
                            },
                            v = {
                                x: r.left + n.outerWidth(),
                                y: l.y
                            },
                            m = o[o.length - 1],
                            f = o[0];
                        if (!m) return 0;
                        if (f || (f = m), f.x < r.left || f.x > v.x || f.y < r.top || f.y > v.y) return 0;
                        if (a && m.x == a.x && m.y == a.y) return 0;
                        var h = d,
                            g = v;
                        "left" == s.submenuDirection ? (h = l, g = u) : "below" == s.submenuDirection ? (h = v, g = l) : "above" == s.submenuDirection && (h = u, g = d);
                        var p = t(m, h),
                            _ = t(m, g),
                            E = t(f, h),
                            y = t(f, g);
                        return E > p && _ > y ? (a = m, c) : (a = null, 0)
                    };
                n.mouseleave(l).find(s.rowSelector).mouseenter(v).mouseleave(m).click(f), e(document).mousemove(d)
            }
            e.fn.menuAim = function(e) {
                return this.each(function() {
                    t.call(this, e)
                }), this
            }
        }(e), e
    }), define("common/a11y/keycode", [], function() {
        return {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PAGEUP: 33,
            PAGEDOWN: 34,
            END: 35,
            HOME: 36
        }
    }), (function() {
        require.config({
            paths: {
                "common/a11y/keycode": "common/a11y/keycode.20180118211911"
            }
        });
        define("common/a11y/menubar", ["jquery", "common/a11y/keycode"], function(e, t) {
            return {
                setMenubarKeyboardNavigation: function(n) {
                    function i(e) {
                        var t = e.attr("id");
                        n.attr("aria-activedescendant", t), e.focus()
                    }
                    if ("menubar" !== n.attr("role")) throw new Error(n + ' must have a role set to "menubar".');
                    var o = n.find('[role="menuitem"]').filter(":not(:disabled)").filter(":not(:hidden)");
                    n.off("keydown.a11yMenubarFocus"), n.on("keydown.a11yMenubarFocus", function(n) {
                        if (n.keyCode === t.RIGHT || n.keyCode === t.LEFT) {
                            n.preventDefault();
                            var a = e(document.activeElement),
                                r = o.index(a);
                            if (n.keyCode === t.LEFT) {
                                if (0 === r) return void i(o.eq(o.length - 1));
                                i(o.eq(r - 1))
                            }
                            if (n.keyCode === t.RIGHT) {
                                if (r === o.length - 1) return void i(o.first());
                                i(o.eq(r + 1))
                            }
                        }(n.keyCode === t.ENTER || n.keyCode === t.SPACE || n.keyCode === t.DOWN) && (n.preventDefault(), e(n.target).trigger("menubar-item-press"))
                    })
                }
            }
        })
    })(), (function() {
        require.config({
            paths: {
                "common/a11y/keycode": "common/a11y/keycode.20180118211911"
            }
        });
        define("common/a11y/contain-focus", ["jquery", "common/a11y/keycode"], function(e, t) {
            var n = function() {
                    e(document).off(".a11yContainFocus")
                },
                i = function() {
                    e("[data-aria-hidden]").removeAttr("aria-hidden data-aria-hidden")
                },
                o = function(e) {
                    var t = [];
                    if (e) {
                        t = e.siblings().toArray();
                        var n = e.parent(),
                            i = n.prop("tagName");
                        i && "body" !== i.toLowerCase() && (t = t.concat(o(n)))
                    }
                    return t
                };
            return {
                FOCUSABLE_ELEMENTS: "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex]:not([disabled]), *[contenteditable]",
                hideBackgroundContent: function(e) {
                    for (var t = o(e), n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.setAttribute("aria-hidden", !0), i.setAttribute("data-aria-hidden", !0)
                    }
                },
                containFocusInElement: function(i) {
                    var o = i instanceof jQuery ? i : e(i);
                    this.hideBackgroundContent(o);
                    var a = this;
                    n(), e(document).on("keydown.a11yContainFocus", function(n) {
                        if (n.keyCode === t.TAB) {
                            var i = e(document.activeElement),
                                r = o.find(a.FOCUSABLE_ELEMENTS).filter(":not(:hidden)"),
                                s = r.index(i);
                            n.shiftKey && 0 === s && (r.get(r.length - 1).focus(), n.preventDefault()), !n.shiftKey && (s === r.length - 1 || 0 > s) && (r.first().focus(), n.preventDefault())
                        }
                    })
                },
                isLastFocusableItem: function(t, n) {
                    if (t && n) {
                        var i = t instanceof jQuery ? t : e(t),
                            o = e(document.activeElement),
                            a = i.find(this.FOCUSABLE_ELEMENTS).filter(":not(:hidden)"),
                            r = a.index(o);
                        if (n.shiftKey && 0 === r) return !0;
                        if (!n.shiftKey && r === a.length - 1) return !0
                    }
                    return !1
                },
                setFocusToFirstFocusableElement: function(t, n) {
                    var i = t instanceof jQuery ? t : e(t),
                        o = i.find(this.FOCUSABLE_ELEMENTS).filter(":not(:hidden)"),
                        a = o.not(n),
                        r = a.filter('[role="tab"]');
                    0 === o.length ? i.focus() : 1 === o.length ? o.first().focus() : 0 === a.length ? o.first().focus() : a.first().is(r) ? r.filter('[aria-selected="true"]').focus() : a.first().focus()
                },
                getFocusableElementsInContainer: function(t) {
                    var n = t instanceof jQuery ? t : e(t);
                    return n.find(this.FOCUSABLE_ELEMENTS).filter(":not(:hidden)")
                },
                removeContainFocus: function() {
                    n(), i()
                }
            }
        })
    })(), (function() {
        require.config({
            paths: {
                "common/a11y/keycode": "common/a11y/keycode.20180118211911"
            }
        });
        define("common/a11y/menu", ["jquery", "common/a11y/keycode"], function(e, t) {
            return {
                setMenuKeyboardNavigation: function(n, i) {
                    function o(e) {
                        var t = e.attr("id");
                        n.attr("aria-activedescendant", t), e.focus()
                    }
                    var a = i || [];
                    if (n.length) {
                        if ("menu" !== n.attr("role")) throw new Error(n + ' must have a role set to "menu".');
                        var r = n.find('[role="menuitem"]').filter(":not(:disabled)").filter(":not(:hidden)");
                        n.off("keydown.a11yMenuFocus"), n.on("keydown.a11yMenuFocus", function(n) {
                            if (n.keyCode === t.UP || n.keyCode === t.DOWN) {
                                n.preventDefault();
                                var i = e(document.activeElement),
                                    s = r.index(i);
                                if (n.keyCode === t.UP) {
                                    if (0 === s) return void o(r.eq(r.length - 1));
                                    o(r.eq(s - 1))
                                }
                                if (n.keyCode === t.DOWN) {
                                    if (s === r.length - 1) return void o(r.first());
                                    o(r.eq(s + 1))
                                }
                            }(n.keyCode === t.ENTER || n.keyCode === t.SPACE) && (n.preventDefault(), e(n.target).trigger("menu-item-activate", [n])), n.keyCode === t.RIGHT && e(n.target).trigger("menu-item-open-submenu", [n]), (n.keyCode === t.LEFT || n.keyCode === t.ESC || a.shiftTabTriggersLeave && n.shiftKey && n.keyCode === t.TAB) && (n.preventDefault(), e(n.target).trigger("menu-item-leave", [n]))
                        })
                    }
                }
            }
        })
    })(),
    function(e) {
        function t() {
            var e = 4022871197,
                t = function(t) {
                    t = t.toString();
                    for (var n = 0; n < t.length; n++) {
                        e += t.charCodeAt(n);
                        var i = .02519603282416938 * e;
                        e = i >>> 0, i -= e, i *= e, e = i >>> 0, i -= e, e += 4294967296 * i
                    }
                    return 2.3283064365386963e-10 * (e >>> 0)
                };
            return t.version = "Mash 0.9", t
        }

        function n() {
            return function(e) {
                var n = 0,
                    i = 0,
                    o = 0,
                    a = 1;
                0 == e.length && (e = [+new Date]);
                var r = t();
                n = r(" "), i = r(" "), o = r(" ");
                for (var s = 0; s < e.length; s++) n -= r(e[s]), 0 > n && (n += 1), i -= r(e[s]), 0 > i && (i += 1), o -= r(e[s]), 0 > o && (o += 1);
                r = null;
                var u = function() {
                    var e = 2091639 * n + 2.3283064365386963e-10 * a;
                    return n = i, i = o, o = e - (a = 0 | e)
                };
                return u.uint32 = function() {
                    return 4294967296 * u()
                }, u.fract53 = function() {
                    return u() + 1.1102230246251565e-16 * (2097152 * u() | 0)
                }, u.version = "Alea 0.9", u.args = e, u
            }(Array.prototype.slice.call(arguments))
        }
        e.Mash = t, e.Alea = n
    }(window.Etsy), define("util/random", [], function() {}), (function() {
        require.config({
            paths: {
                "util/random": "util/random.20180307224751"
            }
        });
        define("common/etsy.eventlogger", ["util/random"], function() {
            return function(e, t) {
                e.EventLogger = {
                    abTestVariantMap: null,
                    funnelLogger: null,
                    firedEvents: [],
                    init: function(n, i) {
                        this.funnelLogger = i;
                        var o, a, r, s, u = e.EventLoggerEvents,
                            c = this;
                        if (t && t.Topic && t.Topic("EventLogger/event").subscribe(function(e) {
                                c.firedEvents.push(e)
                            }), u)
                            for (a = u.length, o = 0; a > o; o++) r = u[o], s = "document" === r.selector ? document : r.selector, "ready" === r.type ? this.logEvent(r.attributes, !0) : n.find(s).logEvent(r.type, r.attributes, !0)
                    },
                    addAdditionalVariables: function(t) {
                        return t[".version"] = 0, t[".ref"] = document.referrer, t[".page_guid"] = this.getGuids("page_guid"), t[".loc"] = document.location, t[".event_source"] = "web", t[".event_logger"] = "frontend", t.etala_override = e.EventLogger.getCookie("etala_override"), t.webkit_page_visibility = document.webkitVisibilityState, e.EventLogger.addDocumentVariable(t, "pageTime", "page_time"), e.EventLogger.addDocumentVariable(t, "eventlogger_php_ab_test_names", "php_ab_test_names"), e.EventLogger.addDocumentVariable(t, "eventlogger_php_ab_variable_names", "php_ab_var_names"), e.EventLogger.addDocumentVariable(t, "eventlogger_php_ab_selector_names", "php_ab_selector_names"), e.EventLogger.addDocumentVariable(t, "eventlogger_user_id", ".user_id"), e.EventLogger.addDocumentVariable(t, "eventlogger_request_uuid", "request_uuid"), e.EventLogger.addDocumentVariable(t, "eventlogger_is_etsy_app", "isEtsyApp"), e.EventLogger.addDocumentVariable(t, "eventlogger_is_ios_app", "isIosApp"), e.EventLogger.addDocumentVariable(t, "eventlogger_is_android_app", "isAndroidApp"), e.EventLogger.addDocumentVariable(t, "eventlogger_is_mobile_device", "isMobileDevice"), e.EventLogger.addDocumentVariable(t, "eventlogger_is_touch", "isTouch"), e.EventLogger.addDocumentVariable(t, "eventlogger_is_tablet_supported", "isTabletSupported"), e.EventLogger.addDocumentVariable(t, "eventlogger_is_mobile_request_ignore_cookie", "isMobileSupported"), e.EventLogger.addDocumentVariable(t, "eventlogger_is_mobile_request_ignore_cookie", "isMobileRequestIgnoreCookie"), e.EventLogger.addDocumentVariable(t, "eventlogger_is_mobile_template", "isMobileTemplate"), e.EventLogger.addDocumentVariable(t, "eventlogger_is_whitelisted_mobile_device", "isWhiteListedMobileDevice"), e.EventLogger.addDocumentVariable(t, "eventlogger_is_mobile_request", "isMobileRequest"), e.EventLogger.addDocumentVariable(t, "eventlogger_is_preview_request", "isPreviewRequest"), e.EventLogger.addDocumentVariable(t, "eventlogger_is_chrome_instant", "isChromeInstantRequest"), e.EventLogger.addDocumentVariable(t, "eventlogger_is_moz_prefetch_request", "isMozPrefetchRequest"), t.isIosApp && 1 == t.isIosApp ? t[".event_source"] = "ios" : t.isAndroidApp && 1 == t.isAndroidApp && (t[".event_source"] = "android"), t
                    },
                    isPrimaryEvent: function(e) {
                        return e.hasOwnProperty("primary_event") && "1" === e.primary_event
                    },
                    addPrimaryEventOnlyVariables: function(t) {
                        window.document.documentElement && (window.document.documentElement.clientWidth && (t.viewport_width = window.document.documentElement.clientWidth), window.document.documentElement.clientHeight && (t.viewport_height = window.document.documentElement.clientHeight)), window.screen && (window.screen.height && (t.screen_height = window.screen.height), window.screen.width && (t.screen_width = window.screen.width)), window.devicePixelRatio && (t.device_pixel_ratio = window.devicePixelRatio);
                        var n = e.EventLogger.getDeviceOrientation();
                        return n !== !1 && (t.orientation = n), "undefined" != typeof window.performance && (window.chrome && window.chrome.loadTimes && window.chrome.loadTimes().firstPaintTime > 0 && (window.Etsy.performance = window.Etsy.performance || {}, window.Etsy.performance.firstAnimationFrameFired = Math.round(1e3 * window.chrome.loadTimes().firstPaintTime)), t.request_start = window.performance.timing.requestStart, t.response_start = window.performance.timing.responseStart, t.response_end = window.performance.timing.responseEnd, e.performance && e.performance.firstAnimationFrameFired > 0 && (t.start_render = window.Etsy.performance.firstAnimationFrameFired)), t
                    },
                    log: function(e, t) {
                        return t = t || {}, t.php_event_name = e, this.logEvent(t)
                    },
                    logPrimaryEvent: function(e, t) {
                        return t = _.extend({
                            primary_event: "1"
                        }, t), this.log(e, t)
                    },
                    logEvent: function(n, i, o) {
                        if (i !== !0 && window.EventPipe.enabled === !0 && window.EventPipe.logFromOld(n, i), !e.Context.featureIsEnabled("disable_old_frontend_logger")) {
                            var a = e.EventLoggerBeaconUrl || "//bcn.etsy.com/beacon",
                                r = 2e3 - a.length - 10;
                            this.isPrimaryEvent(n) && (n = this.addPrimaryEventOnlyVariables(n)), n = e.EventLogger.addAdditionalVariables(n);
                            var s, u = [],
                                c = e.EventLogger.incrementGuid(),
                                d = "";
                            for (s in n) n.hasOwnProperty(s) && (d.length > r && (u.push(d), d = ""), d = e.EventLogger.addUrlParam(d, s, n[s]));
                            d.length > 0 && u.push(d);
                            var l = !1,
                                v = u.length,
                                m = this.funnelLogger && this.funnelLogger.hasInterceptEvent(n) ? 1 : 0,
                                f = v + m,
                                h = 0,
                                g = function() {
                                    h++, h == f && i && "function" == typeof i && (l = !0, i())
                                };
                            i && o && setTimeout(function() {
                                !l && i()
                            }, o);
                            for (var p = 0; v > p; p++) e.EventLogger.emitBeaconCall(a, u[p], p + 1, v, c, g);
                            this.funnelLogger && this.funnelLogger.interceptEvent(n, g), t && t.Topic && t.Topic("EventLogger/event").publish(n)
                        }
                    },
                    addDocumentVariable: function(e, t, n) {
                        if (n = n || t, !e.hasOwnProperty(n)) {
                            var i = document.getElementById(t);
                            i && i.innerHTML && (e[n] = this.trim(i.innerHTML))
                        }
                    },
                    getDocumentVariable: function(e) {
                        var t = document.getElementById(e);
                        return t ? this.trim(t.innerHTML) : null
                    },
                    getABVariant: function(e) {
                        if (this.abTestVariantMap) return this.abTestVariantMap[e];
                        var t = this.getDocumentVariable("php_ab_test_names"),
                            n = this.getDocumentVariable("php_ab_variable_names");
                        return this.abTestVariantMap = this.zip(t, n), this.abTestVariantMap[e]
                    },
                    zip: function(e, t) {
                        var n = e ? e.split(";") : null,
                            i = t ? t.split(";") : null,
                            o = {};
                        if (!n || !i || n.length !== i.length) return o;
                        for (var a = 0; a < n.length; a++) o[n[a]] = i[a];
                        return o
                    },
                    addUrlParam: function(e, t, n) {
                        var i = e.indexOf("?") >= 0 ? "&" : "?";
                        return e + i + encodeURIComponent(t) + "=" + encodeURIComponent(n)
                    },
                    emit: function(e, t) {
                        var n = new Image;
                        "undefined" != typeof t && null != t && (n.onload = t), n.src = e
                    },
                    emitBeaconCall: function(t, n, i, o, a, r) {
                        n = e.EventLogger.addUrlParam(n, ".p", i), n = e.EventLogger.addUrlParam(n, ".np", o), n = e.EventLogger.addUrlParam(n, ".guid", a);
                        var s = t + n;
                        e.EventLogger.emit(s, r)
                    },
                    getCookie: function(e) {
                        if (document.cookie.length > 0) {
                            var t = document.cookie.indexOf(e + "=");
                            if (-1 != t) {
                                t = t + e.length + 1;
                                var n = document.cookie.indexOf(";", t);
                                return -1 == n && (n = document.cookie.length), encodeURIComponent(document.cookie.substring(t, n))
                            }
                        }
                        return ""
                    },
                    padZeros: function(e, t) {
                        var n = t - e.length;
                        return n > 0 ? new Array(n + 1).join("0") + e : e
                    },
                    incrementGuid: function() {
                        var e = 0;
                        return function() {
                            var t = this.getGuids("event_guid"),
                                n = (e++).toString(16);
                            return t.substr(0, t.length - 2) + this.padZeros(n, 2)
                        }
                    }(),
                    getGuids: function(t) {
                        var n;
                        return this.guids == n && (this.guids = e.EventLoggerGUIDs == n ? {
                            event_guid: this.makeGuid(),
                            page_guid: this.makeGuid()
                        } : e.EventLoggerGUIDs), t !== n && this.guids[t] !== n ? this.guids[t] : this.guids
                    },
                    makeGuid: function() {
                        var t = new e.Alea(+new Date, "" + document.cookie, navigator.userAgent),
                            n = function() {
                                return Math.floor(16 * t()).toString(16)
                            };
                        return function() {
                            for (var e = (10 * new Date).toString(16), t = "", i = 0; 20 > i; i++) t += n();
                            return e + "." + t + ".00"
                        }
                    }(),
                    getDeviceOrientation: function() {
                        return "orientation" in window ? window.orientation : !1
                    },
                    trim: String.prototype.trim ? function(e) {
                        return null == e ? "" : String.prototype.trim.call(e)
                    } : function(e) {
                        return null == e ? "" : e.toString().replace(/^\s+/, "").replace(/\s+$/, "")
                    }
                }
            }(window.Etsy, window.jQuery || window.Zepto), window.Etsy.EventLogger
        })
    })(), (function() {
        require.config({
            paths: {
                "lib/jquery.menu-aim": "lib/jquery.menu-aim.20170615210935",
                "common/a11y/menubar": "common/a11y/menubar.20180307224750",
                "common/a11y/contain-focus": "common/a11y/contain-focus.20181017193338",
                "common/a11y/keycode": "common/a11y/keycode.20180118211911",
                "common/a11y/menu": "common/a11y/menu.20180515221911",
                "common/etsy.eventlogger": "common/etsy.eventlogger.20181019165129"
            }
        });
        define("category-nav/v2/category_handler", ["jquery", "lib/jquery.menu-aim", "common/a11y/menubar", "common/a11y/contain-focus", "common/a11y/keycode", "common/a11y/menu", "common/etsy.eventlogger"], function(e, t, n, i, o, a, r) {
            var s = function() {},
                u = {
                    TOP_NAV_CATEGORY_LIST: '[data-ui="top-nav-category-list"]',
                    TOP_NAV_CATEGORY_LINK: '[data-ui="top-nav-category-link"]',
                    TOP_NAV_PROMO_LINK: '[data-ui="top-nav-promo-link"]',
                    ONSALE_LINK: '[data-ui="desktop-catnav-onsale-link"]',
                    SUB_NAV: '[data-ui="sub-nav"]',
                    SIDE_NAV_CATEGORY_LIST: '[data-ui="side-nav-category-list"]',
                    SIDE_NAV_CATEGORY_LINK: '[data-ui="side-nav-category-link"]',
                    TERTIARY_NAV: '[data-ui="tertiary-nav"]',
                    MENUITEM: '[role="menuitem"]'
                },
                c = {
                    MOUSE_LEAVE_TIMEOUT: 400,
                    MOUSE_ENTER_TIMEOUT: 350,
                    MOUSE_ENTER_DROPDOWN_DELAY: 200
                };
            return s.prototype = {
                init: function(t) {
                    this.$context = t, this.$topNavCategoryList = this.$context.find(u.TOP_NAV_CATEGORY_LIST), this.$navCategoryLinks = this.$context.find(u.TOP_NAV_CATEGORY_LINK), this.$sideNavCategoryList = this.$context.find(u.SIDE_NAV_CATEGORY_LIST), this.$sideNavCategoryLinks = this.$context.find(u.SIDE_NAV_CATEGORY_LINK), this.$tertiaryNavs = this.$context.find(u.TERTIARY_NAV), this.$searchResults = e(".gnav-search-inner").find("#search-suggestions"), this.bindEvents()
                },
                bindEvents: function() {
                    this.$context.on("mouseenter", u.SUB_NAV, e.proxy(this.onMouseEnterNav, this)).on("mouseenter", u.TOP_NAV_CATEGORY_LIST, e.proxy(this.onMouseEnterNav, this)).on("mouseenter", u.SUB_NAV, e.proxy(this.clearMouseEnterNavItem, this)).on("mouseenter click", u.TOP_NAV_CATEGORY_LINK, e.proxy(this.onMouseEnterNavItem, this)).on("click", u.ONSALE_LINK, function() {
                        r.logEvent({
                            php_event_name: "desktop_nav_onsale_click"
                        })
                    }).on("mouseleave", u.SUB_NAV, e.proxy(this.onMouseLeaveNav, this)).on("mouseleave", u.TOP_NAV_CATEGORY_LIST, e.proxy(this.onMouseLeaveNav, this)).on("mouseenter", u.TOP_NAV_PROMO_LINK, e.proxy(this.onMouseEnterPromoItem, this)).on("click", u.SIDE_NAV_CATEGORY_LINK, e.proxy(this.onMouseClickSideNavItem, this)), this.$sideNavCategoryList.menuAim({
                        activate: e.proxy(this.onMouseEnterSideNavItem, this),
                        deactivate: e.noop,
                        submenuSelector: "li"
                    }), this.setA11yInitialStateMenubar().bindA11yEvents().bindA11yEventsSideNav().bindA11yEventsTertiaryNav()
                },
                bindNavLogEvents: function(t) {
                    var n = e(t.currentTarget).data("linkable");
                    r.logEvent(n ? {
                        php_event_name: "top_nav_linkable_onclick"
                    } : {
                        php_event_name: "top_nav_not_linkable_onclick"
                    })
                },
                onMouseEnterNav: function() {
                    this.clearLeaveNavTimeout()
                },
                onMouseEnterNavItem: function(t) {
                    var n = e(t.currentTarget),
                        i = n.data("node-id"),
                        o = (n.attr("id"), this.hasActiveTopNavLink() ? c.MOUSE_ENTER_DROPDOWN_DELAY : c.MOUSE_ENTER_TIMEOUT);
                    this.clearMouseEnterNavItem(), this.$searchResults.hide(), "click" === t.type && this.bindNavLogEvents(t), this.mouseEnterNavItemTimeout = window.setTimeout(e.proxy(function() {
                        this.makeActiveNavItem(n).hide(u.SUB_NAV).show(u.SUB_NAV + this.getDataAttributeString(i)).activateSubNav(i, !1)
                    }, this), o)
                },
                onKeyActivateTopNavItem: function(e) {
                    {
                        var t = e.data("node-id"),
                            n = u.SUB_NAV + this.getDataAttributeString(t);
                        e.attr("id")
                    }
                    this.clearMouseEnterNavItem().makeActiveNavItem(e).hide(u.SUB_NAV).show(n).activateSubNav(t, !0)
                },
                activateSubNav: function(e, t) {
                    var n = u.SUB_NAV + this.getDataAttributeString(e),
                        i = this.getFirstFocusableChildForSelector(n + " " + u.SIDE_NAV_CATEGORY_LINK).parent("li");
                    return i.length ? (this.makeSideNavItemActive(i).setAriaActiveDescendant(n + " " + u.SIDE_NAV_CATEGORY_LIST, i.attr("id")), t && this.setMenuKeyboardNavigation(n + " " + u.SIDE_NAV_CATEGORY_LIST).getFirstFocusableChildForSelector(n + " " + u.SIDE_NAV_CATEGORY_LIST).focus()) : (n = u.TERTIARY_NAV + this.getDataAttributeString(e), this.show(n), t && this.setMenuKeyboardNavigation(n).getFirstFocusableChildForSelector(n).focus()), this
                },
                onMouseEnterPromoItem: function() {
                    this.clearLeaveNavTimeout().clearMouseEnterNavItem().clearActiveNavItems().hide(u.SUB_NAV)
                },
                onMouseLeaveNav: function() {
                    this.clearLeaveNavTimeout().clearMouseEnterNavItem(), this.leaveNavTimeout = window.setTimeout(e.proxy(function() {
                        this.clearActiveNavItems().hide(u.SUB_NAV)
                    }, this), c.MOUSE_LEAVE_TIMEOUT)
                },
                onMouseEnterSideNavItem: function(t) {
                    this.clearMouseEnterNavItem().makeSideNavItemActive(e(t))
                },
                onMouseClickSideNavItem: function(t) {
                    var n = e(t.currentTarget);
                    this.clearMouseEnterNavItem().makeSideNavItemActive(n)
                },
                clearLeaveNavTimeout: function() {
                    return this.leaveNavTimeout && (window.clearTimeout(this.leaveNavTimeout), this.leaveNavTimeout = null), this
                },
                clearMouseEnterNavItem: function() {
                    return this.mouseEnterNavItemTimeout && (window.clearTimeout(this.mouseEnterNavItemTimeout), this.mouseEnterNavItemTimeout = null), this
                },
                getDataAttributeString: function(e) {
                    return '[data-node-id="' + e + '"]'
                },
                hasActiveTopNavLink: function() {
                    return this.$navCategoryLinks.filter(".active").length > 0
                },
                getFirstFocusableChildForSelector: function(e) {
                    return this.$context.find(e + " " + u.MENUITEM).first()
                },
                makeSideNavItemActive: function(e) {
                    {
                        var t = e.data("node-id");
                        e.attr("id")
                    }
                    return "A" === e.children().first().get(0).tagName ? this : (this.clearActiveSideNavItems(), e.addClass("active"), this.hide(u.TERTIARY_NAV).show(u.TERTIARY_NAV + this.getDataAttributeString(t)).setMenuKeyboardNavigation(u.TERTIARY_NAV + this.getDataAttributeString(t)), this)
                },
                makeActiveNavItem: function(e) {
                    return this.clearActiveNavItems(), e.addClass("active"), this
                },
                clearActiveNavItems: function() {
                    return this.$navCategoryLinks.removeClass("active"), this
                },
                clearActiveSideNavItems: function() {
                    return this.$sideNavCategoryLinks.removeClass("active"), this
                },
                show: function(e) {
                    return this.$context.find(e).removeClass("display-none").attr("aria-hidden", "false"), this
                },
                hide: function(e) {
                    return this.$context.find(e).addClass("display-none").attr("aria-hidden", "true"), this
                },
                focus: function(e) {
                    return this.$context.find(e + " " + u.MENUITEM).focus(), this
                },
                onTabAway: function() {
                    this.clearLeaveNavTimeout().clearMouseEnterNavItem().clearActiveNavItems().hide(u.SUB_NAV)
                },
                setAriaActiveDescendant: function(e, t) {
                    return this.$context.find(e).parent("ul").attr("aria-activedescendant", t), this
                },
                setMenuKeyboardNavigation: function(e) {
                    return a.setMenuKeyboardNavigation(this.$context.find(e), {
                        shiftTabTriggersLeave: !0
                    }), this
                },
                setA11yInitialStateMenubar: function() {
                    var e = this.$navCategoryLinks.find(u.MENUITEM),
                        t = e.first();
                    return t.attr("tabindex", "0"), this.$topNavCategoryList.attr("aria-activedescendant", t.attr("id")), this
                },
                bindA11yEvents: function() {
                    return !this.$topNavCategoryList || this.$topNavCategoryList.length < 1 ? this : (n.setMenubarKeyboardNavigation(this.$topNavCategoryList), this.$context.on("keydown.catnav", e.proxy(function(e) {
                        this.$searchResults.hide(), e.keyCode !== o.TAB || e.shiftKey || this.onTabAway()
                    }, this)), this.$topNavCategoryList.on("menubar-item-press", u.MENUITEM, e.proxy(function(t) {
                        var n = e(t.currentTarget);
                        if ("true" === n.attr("aria-haspopup")) {
                            var i = n.closest('[data-ui="top-nav-category-link"]');
                            this.onKeyActivateTopNavItem(i)
                        } else n.attr("href") && "#" !== n.attr("href") && (window.location = n.attr("href"))
                    }, this)), this)
                },
                bindA11yEventsSideNav: function() {
                    return this.$sideNavCategoryList.on("menu-item-open-submenu menu-item-activate", u.MENUITEM, e.proxy(function(t) {
                        var n = e(t.target);
                        if ("true" === n.attr("aria-haspopup")) {
                            var i = n.parent("li"),
                                o = i.data("node-id");
                            this.makeSideNavItemActive(i).getFirstFocusableChildForSelector(u.TERTIARY_NAV + this.getDataAttributeString(o)).focus()
                        } else "menu-item-activate" === t.type && n.attr("href") && "#" !== n.attr("href") && (window.location = n.attr("href"))
                    }, this)), this.$sideNavCategoryList.on("menu-item-leave", u.MENUITEM, e.proxy(function(t) {
                        var n = e(t.target),
                            i = n.parents("ul").data("node-id");
                        this.hide(u.SUB_NAV).clearActiveNavItems().focus(u.TOP_NAV_CATEGORY_LINK + this.getDataAttributeString(i))
                    }, this)), this
                },
                bindA11yEventsTertiaryNav: function() {
                    return this.$tertiaryNavs.on("menu-item-leave", u.MENUITEM, e.proxy(function(t) {
                        var n = e(t.target),
                            i = n.parents(u.TERTIARY_NAV),
                            o = i.data("node-id"),
                            a = i.attr("data-has-side-nav");
                        return "false" === a ? (this.hide(u.SUB_NAV).clearActiveNavItems().focus(u.TOP_NAV_CATEGORY_LINK + this.getDataAttributeString(o)), this) : void this.focus(u.SIDE_NAV_CATEGORY_LINK + this.getDataAttributeString(o))
                    }, this)), this.$tertiaryNavs.on("menu-item-activate", u.MENUITEM, e.proxy(function(t) {
                        window.location = e(t.target).attr("href")
                    }, this)), this
                }
            }, s
        })
    })(),
    function(e) {
        var t, n;
        e.Context = e.Context || {}, t = e.Context.feature || {}, n = e.Context.data || {}, e.Context.featureIsEnabled = function(e) {
            return t.hasOwnProperty(e) ? !!t[e] : !1
        }, e.Context.getData = function(e, t) {
            var i = String(e).split("."),
                o = n,
                a = arguments.length > 1;
            if ("string" != typeof e || i.length < 1) throw new Error("Etsy.Context.getData() called with an invalid key: " + e);
            for (; i.length > 1 && o.hasOwnProperty(i[0]);) o = o[i.shift()];
            if (i.length > 1 || !o.hasOwnProperty(i[0])) {
                if (a) return t;
                throw new Error("Etsy.Context.getData() called with an unspecified key, no default value provided: " + e)
            }
            return o[i[0]]
        }, e.Context.pluck = function() {
            var t = arguments;
            return _.reduce(t, function(t, n) {
                return t[n] = e.Context.getData(n, null), t
            }, {})
        }
    }(Etsy), "function" == typeof define && define.amd && define("common/etsy.context", [], function() {
        return Etsy.Context
    }), (function() {
        require.config({
            paths: {
                "common/etsy.context": "common/etsy.context.20180118211911"
            }
        });
        define("common/csrf", ["common/etsy.context"], function(e) {
            return window.Etsy = window.Etsy || {},
                function() {
                    return e.getData("csrf_nonce", window.Etsy.csrf_nonce || "")
                }
        })
    })(), define("common/simpleTemplate", [], function() {
        return function(e, t) {
            return e.replace(/\{\{(\w+)\}\}/g, function(e, n) {
                return t[n]
            })
        }
    }), define("common/detected-locale", [], function() {
        return function() {
            if (Etsy && Etsy.Context && Etsy.Context.getData) {
                var e = Etsy.Context.getData("locale_settings.currency.code", null),
                    t = Etsy.Context.getData("locale_settings.language.code", null),
                    n = Etsy.Context.getData("locale_settings.region.code", null);
                return e && t && n ? (e instanceof Array && (e = e[0]), t instanceof Array && (t = t[0]), n instanceof Array && (n = n[0]), e + "|" + t + "|" + n) : null
            }
            return null
        }
    }), (function() {
        require.config({
            paths: {
                "common/csrf": "common/csrf.20181023153801",
                "common/simpleTemplate": "common/simpleTemplate.20170803184542",
                "common/detected-locale": "common/detected-locale.20180307224750"
            }
        });
        define("apiv3/PublicBespokeClient/bespokeNeuSpecsGet", ["common/csrf", "common/simpleTemplate", "common/detected-locale"], function(e, t, n) {
            return function(e, i) {
                var o = {
                        name: e,
                        "": ""
                    },
                    a = "/api/v3/ajax/bespoke/public" + t("/neu/specs/{{name}}", o),
                    r = {};
                return i && (i.hasOwnProperty("stats_sample_rate") && (r.stats_sample_rate = i.stats_sample_rate), i.hasOwnProperty("specs") && (r.specs = i.specs)), {
                    headers: {
                        "x-detected-locale": n()
                    },
                    data: r,
                    url: a,
                    type: "GET"
                }
            }
        })
    })(), (function() {
        require.config({
            paths: {
                "common/csrf": "common/csrf.20181023153801",
                "common/simpleTemplate": "common/simpleTemplate.20170803184542",
                "common/detected-locale": "common/detected-locale.20180307224750"
            }
        });
        define("apiv3/MemberBespokeClient/bespokeNeuSpecs", ["common/csrf", "common/simpleTemplate", "common/detected-locale"], function(e, t, n) {
            return function(i, o) {
                var a = {
                        name: i,
                        "": ""
                    },
                    r = "/api/v3/ajax/bespoke/member" + t("/neu/specs/{{name}}", a),
                    s = {};
                return o && (o.hasOwnProperty("stats_sample_rate") && (s.stats_sample_rate = o.stats_sample_rate), o.hasOwnProperty("specs") && (s.specs = o.specs)), {
                    headers: {
                        "x-csrf-token": e(),
                        "x-detected-locale": n()
                    },
                    data: s,
                    url: r,
                    type: "POST"
                }
            }
        })
    })(), (function() {
        require.config({
            paths: {
                "apiv3/PublicBespokeClient/bespokeNeuSpecsGet": "apiv3/PublicBespokeClient/bespokeNeuSpecsGet.20181023153801",
                "apiv3/MemberBespokeClient/bespokeNeuSpecs": "apiv3/MemberBespokeClient/bespokeNeuSpecs.20181023153801"
            }
        });
        define("common/neu/specs", ["jquery", "apiv3/PublicBespokeClient/bespokeNeuSpecsGet", "apiv3/MemberBespokeClient/bespokeNeuSpecs"], function(e, t, n) {
            function i(i, o, a, r) {
                if (r = r || c.POST, !(r in c)) return e.Deferred().rejectWith(new Error("Invalid fetch type: " + r));
                var s = r == c.POST ? n : t;
                return e.ajax(s(i, {
                    specs: o,
                    stats_sample_rate: a || Etsy.Context.getData("neu_api_specs_sample_rate", null)
                }))
            }

            function o(e, t, n, o) {
                var a = {};
                return a[e] = [t, n], i(e, a, null, o)
            }

            function a(t, n, i) {
                t = t || s, n = n || u;
                var o = {},
                    a = {};
                return e(t).each(function() {
                    var t = e(this),
                        r = "spec" + ++d,
                        s = JSON.parse(t.find(n).text()),
                        u = s.spec_name;
                    o[r] = [u, s.args], a[r] = i && "function" == typeof i ? function(e) {
                        i(u, function() {
                            t.replaceWith(e[r])
                        }, {
                            specId: r,
                            placeholder: t,
                            output: e
                        })
                    } : function(e) {
                        t.replaceWith(e[r])
                    }
                }), {
                    args: o,
                    onComplete: function(t) {
                        e.each(a, function(e, n) {
                            n(t)
                        })
                    }
                }
            }

            function r(e, t) {
                if (l) throw new Error("There should only be one lazyLoad at a time!");
                t = t || {};
                var n = t.selectors || {},
                    o = t.done || function() {},
                    r = t.onCompleteEach || null,
                    s = a(n.placeholder, n.childData, r);
                return l = !0, i(e, s.args).done(function(e) {
                    l = !1, s.onComplete(e.output), o(e)
                })
            }
            var s = "[data-neu-spec-placeholder]",
                u = "[data-neu-spec-placeholder-data]",
                c = {
                    GET: "GET",
                    POST: "POST"
                },
                d = 0,
                l = !1;
            return {
                getSpecArgsAndCallback: a,
                lazyLoad: r,
                fetch: i,
                fetchOne: o,
                DEFAULT_PLACEHOLDER_SELECTOR: s,
                DEFAULT_CHILD_DATA_SELECTOR: u
            }
        })
    })(), require({
        paths: {
            "category-nav/v2/category_handler": "category-nav/v2/category_handler.20181019165129",
            "common/neu/specs": "common/neu/specs.20181023153801"
        }
    }, ["jquery", "category-nav/v2/category_handler", "common/neu/specs"], function(e, t, n) {
        e(function() {
            var i = {
                    KEY: "catnav",
                    NAME: "CategoryNav_V2_ApiSpec_SubNav"
                },
                o = {
                    CAT_NAV: "#desktop-category-nav",
                    TOP_NAV_LIST: '[data-ui="top-nav-category-list"]',
                    SUB_NAV_CONTAINER: '[data-ui="sub-nav-container"]',
                    SUB_NAV: '[data-ui="sub-nav"]'
                },
                a = new t,
                r = e(o.CAT_NAV),
                s = r.find(o.TOP_NAV_LIST),
                u = r.find(o.SUB_NAV),
                c = Etsy.Context.getData("mott_version", null),
                d = Etsy.Context.getData("catnav_show_sales", !1),
                l = Etsy.Context.getData("catnav_gift_guide", "control");
            s.children().length > 0 && (0 === u.length ? n.fetchOne(i.KEY, i.NAME, {
                mott_version: c,
                show_sales: d,
                catnav_gift_guide: l
            }, "GET").done(function(t) {
                r.find(o.SUB_NAV_CONTAINER + " " + n.DEFAULT_PLACEHOLDER_SELECTOR).replaceWith(e("<div />").append(t.output[i.KEY])), a.init(r)
            }) : a.init(r))
        })
    });