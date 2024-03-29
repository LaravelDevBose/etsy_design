/**
 * @license MIT
 * see: https://github.com/fanmingfei/array-reverse-ios12
 *
 */

/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.2 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

/*!
 * jQuery JavaScript Library v1.8.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Sep 20 2012 21:13:05 GMT-0400 (Eastern Daylight Time)
 */

/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */

/*!
 *  hogan.js version: 3.0.0
 *
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

//     Underscore.js 1.4.4
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.

window.performance && window.performance.mark && window.performance.mark("timer_execstart_jquery"),
    function() {
        function e() {
            var e = [1, 2];
            return String(e) === String(e.reverse())
        }
        if (e()) {
            var t = Array.prototype.reverse;
            Array.prototype.reverse = function() {
                return Array.isArray(this) && (this.length = this.length), t.call(this)
            }
        }
    }();
var requirejs, require, define;
! function(global) {
    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }

    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }

    function each(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
        }
    }

    function eachReverse(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; n > -1 && (!e[n] || !t(e[n], n, e)); n -= 1);
        }
    }

    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }

    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }

    function eachProp(e, t) {
        var n;
        for (n in e)
            if (hasProp(e, n) && t(e[n], n)) break
    }

    function mixin(e, t, n, r) {
        return t && eachProp(t, function(t, i) {
            (n || !hasProp(e, i)) && (r && "string" != typeof t ? (e[i] || (e[i] = {}), mixin(e[i], t, n, r)) : e[i] = t)
        }), e
    }

    function bind(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."), function(e) {
            t = t[e]
        }), t
    }

    function makeError(e, t, n, r) {
        var i = new Error(t + " [" + e + "]");
        return i.requireType = e, i.requireModules = r, n && (i.originalError = n), i
    }

    function newContext(e) {
        function t(e) {
            var t, n;
            for (t = 0; e[t]; t += 1)
                if (n = e[t], "." === n) e.splice(t, 1), t -= 1;
                else if (".." === n) {
                if (1 === t && (".." === e[2] || ".." === e[0])) break;
                t > 0 && (e.splice(t - 1, 2), t -= 2)
            }
        }

        function n(e, n, r) {
            var i, o, a, s, u, l, c, f, p, d, h, g = n && n.split("/"),
                m = g,
                v = E.map,
                y = v && v["*"];
            if (e && "." === e.charAt(0) && (n ? (m = getOwn(E.pkgs, n) ? g = [n] : g.slice(0, g.length - 1), e = m.concat(e.split("/")), t(e), o = getOwn(E.pkgs, i = e[0]), e = e.join("/"), o && e === i + "/" + o.main && (e = i)) : 0 === e.indexOf("./") && (e = e.substring(2))), r && (g || y) && v) {
                for (s = e.split("/"), u = s.length; u > 0; u -= 1) {
                    if (c = s.slice(0, u).join("/"), g)
                        for (l = g.length; l > 0; l -= 1)
                            if (a = getOwn(v, g.slice(0, l).join("/")), a && (a = getOwn(a, c))) {
                                f = a, p = u;
                                break
                            }
                    if (f) break;
                    !d && y && getOwn(y, c) && (d = getOwn(y, c), h = u)
                }!f && d && (f = d, p = h), f && (s.splice(0, p, f), e = s.join("/"))
            }
            return e
        }

        function r(e) {
            isBrowser && each(scripts(), function(t) {
                return t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === x.contextName ? (t.parentNode.removeChild(t), !0) : void 0
            })
        }

        function i(e) {
            var t = getOwn(E.paths, e);
            return t && isArray(t) && t.length > 1 ? (r(e), t.shift(), x.require.undef(e), x.require([e]), !0) : void 0
        }

        function o(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function a(e, t, r, i) {
            var a, s, u, l, c = null,
                f = t ? t.name : null,
                p = e,
                d = !0,
                h = "";
            return e || (d = !1, e = "_@r" + (j += 1)), l = o(e), c = l[0], e = l[1], c && (c = n(c, f, i), s = getOwn(C, c)), e && (c ? h = s && s.normalize ? s.normalize(e, function(e) {
                return n(e, f, i)
            }) : n(e, f, i) : (h = n(e, f, i), l = o(h), c = l[0], h = l[1], r = !0, a = x.nameToUrl(h))), u = !c || s || r ? "" : "_unnormalized" + (q += 1), {
                prefix: c,
                name: h,
                parentMap: t,
                unnormalized: !!u,
                url: a,
                originalName: p,
                isDefine: d,
                id: (c ? c + "!" + h : h) + u
            }
        }

        function s(e) {
            var t = e.id,
                n = getOwn(k, t);
            return n || (n = k[t] = new x.Module(e)), n
        }

        function u(e, t, n) {
            var r = e.id,
                i = getOwn(k, r);
            !hasProp(C, r) || i && !i.defineEmitComplete ? s(e).on(t, n) : "defined" === t && n(C[r])
        }

        function l(e, t) {
            var n = e.requireModules,
                r = !1;
            t ? t(e) : (each(n, function(t) {
                var n = getOwn(k, t);
                n && (n.error = e, n.events.error && (r = !0, n.emit("error", e)))
            }), r || req.onError(e))
        }

        function c() {
            globalDefQueue.length && (apsp.apply(S, [S.length - 1, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function f(e) {
            delete k[e]
        }

        function p(e, t, n) {
            var r = e.map.id;
            e.error ? e.emit("error", e.error) : (t[r] = !0, each(e.depMaps, function(r, i) {
                var o = r.id,
                    a = getOwn(k, o);
                !a || e.depMatched[i] || n[o] || (getOwn(t, o) ? (e.defineDep(i, C[o]), e.check()) : p(a, t, n))
            }), n[r] = !0)
        }

        function d() {
            var e, t, n, o, a = 1e3 * E.waitSeconds,
                s = a && x.startTime + a < (new Date).getTime(),
                u = [],
                c = [],
                f = !1,
                h = !0;
            if (!y) {
                if (y = !0, eachProp(k, function(n) {
                        if (e = n.map, t = e.id, n.enabled && (e.isDefine || c.push(n), !n.error))
                            if (!n.inited && s) i(t) ? (o = !0, f = !0) : (u.push(t), r(t));
                            else if (!n.inited && n.fetched && e.isDefine && (f = !0, !e.prefix)) return h = !1
                    }), s && u.length) return n = makeError("timeout", "Load timeout for modules: " + u, null, u), n.contextName = x.contextName, l(n);
                h && each(c, function(e) {
                    p(e, {}, {})
                }), s && !o || !f || !isBrowser && !isWebWorker || T || (T = setTimeout(function() {
                    T = 0, d()
                }, 50)), y = !1
            }
        }

        function h(e) {
            hasProp(C, e[0]) || s(a(e[0], null, !0)).init(e[1], e[2])
        }

        function g(e, t, n, r) {
            e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(n, t, !1)
        }

        function m(e) {
            var t = e.currentTarget || e.srcElement;
            return g(t, x.onScriptLoad, "load", "onreadystatechange"), g(t, x.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function v() {
            var e;
            for (c(); S.length;) {
                if (e = S.shift(), null === e[0]) return l(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                h(e)
            }
        }
        var y, b, x, w, T, E = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                pkgs: {},
                shim: {},
                map: {},
                config: {}
            },
            k = {},
            N = {},
            S = [],
            C = {},
            A = {},
            j = 1,
            q = 1;
        return w = {
            require: function(e) {
                return e.require ? e.require : e.require = x.makeRequire(e.map)
            },
            exports: function(e) {
                return e.usingExports = !0, e.map.isDefine ? e.exports ? e.exports : e.exports = C[e.map.id] = {} : void 0
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        return E.config && getOwn(E.config, e.map.id) || {}
                    },
                    exports: C[e.map.id]
                }
            }
        }, b = function(e) {
            this.events = getOwn(N, e.id) || {}, this.map = e, this.shim = getOwn(E.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, b.prototype = {
            init: function(e, t, n, r) {
                r = r || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, x.startTime = (new Date).getTime();
                    var e = this.map;
                    return this.shim ? void x.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    })) : e.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var e = this.map.url;
                A[e] || (A[e] = !0, x.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, n = this.map.id,
                        r = this.depExports,
                        i = this.exports,
                        o = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(o)) {
                                    if (this.events.error) try {
                                        i = x.execCb(n, o, r, i)
                                    } catch (a) {
                                        e = a
                                    } else i = x.execCb(n, o, r, i);
                                    if (this.map.isDefine && (t = this.module, t && void 0 !== t.exports && t.exports !== this.exports ? i = t.exports : void 0 === i && this.usingExports && (i = this.exports)), e) return e.requireMap = this.map, e.requireModules = [this.map.id], e.requireType = "define", l(this.error = e)
                                } else i = o;
                                this.exports = i, this.map.isDefine && !this.ignore && (C[n] = i, req.onResourceLoad && req.onResourceLoad(x, this.map, this.depMaps)), delete k[n], this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map,
                    t = e.id,
                    r = a(e.prefix);
                this.depMaps.push(r), u(r, "defined", bind(this, function(r) {
                    var i, o, c, p = this.map.name,
                        d = this.map.parentMap ? this.map.parentMap.name : null,
                        h = x.makeRequire(e.parentMap, {
                            enableBuildCallback: !0,
                            skipMap: !0
                        });
                    return this.map.unnormalized ? (r.normalize && (p = r.normalize(p, function(e) {
                        return n(e, d, !0)
                    }) || ""), o = a(e.prefix + "!" + p, this.map.parentMap), u(o, "defined", bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), c = getOwn(k, o.id), void(c && (this.depMaps.push(o), this.events.error && c.on("error", bind(this, function(e) {
                        this.emit("error", e)
                    })), c.enable()))) : (i = bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    }), i.error = bind(this, function(e) {
                        this.inited = !0, this.error = e, e.requireModules = [t], eachProp(k, function(e) {
                            0 === e.map.id.indexOf(t + "_unnormalized") && f(e.map.id)
                        }), l(e)
                    }), i.fromText = bind(this, function(n, r) {
                        var o = e.name,
                            u = a(o),
                            l = useInteractive;
                        r && (n = r), l && (useInteractive = !1), s(u), hasProp(E.config, t) && (E.config[o] = E.config[t]);
                        try {
                            req.exec(n)
                        } catch (c) {
                            throw new Error("fromText eval for " + o + " failed: " + c)
                        }
                        l && (useInteractive = !0), this.depMaps.push(u), x.completeLoad(o), h([o], i)
                    }), void r.load(e.name, h, i, E))
                })), x.enable(r, this), this.pluginMaps[r.id] = r
            },
            enable: function() {
                this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
                    var n, r, i;
                    if ("string" == typeof e) {
                        if (e = a(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, i = getOwn(w, e.id)) return void(this.depExports[t] = i(this));
                        this.depCount += 1, u(e, "defined", bind(this, function(e) {
                            this.defineDep(t, e), this.check()
                        })), this.errback && u(e, "error", this.errback)
                    }
                    n = e.id, r = k[n], hasProp(w, n) || !r || r.enabled || x.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function(e) {
                    var t = getOwn(k, e.id);
                    t && !t.enabled && x.enable(e, this)
                })), this.enabling = !1, this.check()
            },
            on: function(e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t)
            },
            emit: function(e, t) {
                each(this.events[e], function(e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, x = {
            config: E,
            contextName: e,
            registry: k,
            defined: C,
            urlFetched: A,
            defQueue: S,
            Module: b,
            makeModuleMap: a,
            nextTick: req.nextTick,
            configure: function(e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var t = E.pkgs,
                    n = E.shim,
                    r = {
                        paths: !0,
                        config: !0,
                        map: !0
                    };
                eachProp(e, function(e, t) {
                    r[t] ? "map" === t ? mixin(E[t], e, !0, !0) : mixin(E[t], e, !0) : E[t] = e
                }), e.shim && (eachProp(e.shim, function(e, t) {
                    isArray(e) && (e = {
                        deps: e
                    }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = x.makeShimExports(e)), n[t] = e
                }), E.shim = n), e.packages && (each(e.packages, function(e) {
                    var n;
                    e = "string" == typeof e ? {
                        name: e
                    } : e, n = e.location, t[e.name] = {
                        name: e.name,
                        location: n || e.name,
                        main: (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                    }
                }), E.pkgs = t), eachProp(k, function(e, t) {
                    e.inited || e.map.unnormalized || (e.map = a(t))
                }), (e.deps || e.callback) && x.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                }
                return t
            },
            makeRequire: function(t, r) {
                function i(n, o, u) {
                    var c, f, p;
                    return r.enableBuildCallback && o && isFunction(o) && (o.__requireJsBuild = !0), "string" == typeof n ? isFunction(o) ? l(makeError("requireargs", "Invalid require call"), u) : t && hasProp(w, n) ? w[n](k[t.id]) : req.get ? req.get(x, n, t) : (f = a(n, t, !1, !0), c = f.id, hasProp(C, c) ? C[c] : l(makeError("notloaded", 'Module name "' + c + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (v(), x.nextTick(function() {
                        v(), p = s(a(null, t)), p.skipMap = r.skipMap, p.init(n, o, u, {
                            enabled: !0
                        }), d()
                    }), i)
                }
                return r = r || {}, mixin(i, {
                    isBrowser: isBrowser,
                    toUrl: function(e) {
                        var r = e.lastIndexOf("."),
                            i = null;
                        return -1 !== r && (i = e.substring(r, e.length), e = e.substring(0, r)), x.nameToUrl(n(e, t && t.id, !0), i)
                    },
                    defined: function(e) {
                        return hasProp(C, a(e, t, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = a(e, t, !1, !0).id, hasProp(C, e) || hasProp(k, e)
                    }
                }), t || (i.undef = function(e) {
                    c();
                    var n = a(e, t, !0),
                        r = getOwn(k, e);
                    delete C[e], delete A[n.url], delete N[e], r && (r.events.defined && (N[e] = r.events), f(e))
                }), i
            },
            enable: function(e) {
                var t = getOwn(k, e.id);
                t && s(e).enable()
            },
            completeLoad: function(e) {
                var t, n, r, o = getOwn(E.shim, e) || {},
                    a = o.exports;
                for (c(); S.length;) {
                    if (n = S.shift(), null === n[0]) {
                        if (n[0] = e, t) break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    h(n)
                }
                if (r = getOwn(k, e), !t && !hasProp(C, e) && r && !r.inited) {
                    if (!(!E.enforceDefine || a && getGlobal(a))) return i(e) ? void 0 : l(makeError("nodefine", "No define call for " + e, null, [e]));
                    h([e, o.deps || [], o.exportsFn])
                }
                d()
            },
            nameToUrl: function(e, t) {
                var n, r, i, o, a, s, u, l, c;
                if (req.jsExtRegExp.test(e)) l = e + (t || "");
                else {
                    for (n = E.paths, r = E.pkgs, a = e.split("/"), s = a.length; s > 0; s -= 1) {
                        if (u = a.slice(0, s).join("/"), i = getOwn(r, u), c = getOwn(n, u)) {
                            isArray(c) && (c = c[0]), a.splice(0, s, c);
                            break
                        }
                        if (i) {
                            o = e === i.name ? i.location + "/" + i.main : i.location, a.splice(0, s, o);
                            break
                        }
                    }
                    l = a.join("/"), l += t || (/\?/.test(l) ? "" : ".js"), l = ("/" === l.charAt(0) || l.match(/^[\w\+\.\-]+:/) ? "" : E.baseUrl) + l
                }
                return E.urlArgs ? l + ((-1 === l.indexOf("?") ? "?" : "&") + E.urlArgs) : l
            },
            load: function(e, t) {
                req.load(x, e, t)
            },
            execCb: function(e, t, n, r) {
                return t.apply(r, n)
            },
            onScriptLoad: function(e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = m(e);
                    x.completeLoad(t.id)
                }
            },
            onScriptError: function(e) {
                var t = m(e);
                return i(t.id) ? void 0 : l(makeError("scripterror", "Script error trying to load " + t.id, e, [t.id]))
            }
        }, x.require = x.makeRequire(), x
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
            return "interactive" === e.readyState ? interactiveScript = e : void 0
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.2",
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        aps = ap.slice,
        apsp = ap.splice,
        isBrowser = !("undefined" == typeof window || !navigator || !document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, n, r) {
            var i, o, a = defContextName;
            return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = n, n = r) : e = []), o && o.context && (a = o.context), i = getOwn(contexts, a), i || (i = contexts[a] = req.s.newContext(a)), o && i.configure(o), i.require(e, t, n)
        }, req.config = function(e) {
            return req(e)
        }, req.nextTick = "undefined" != typeof setTimeout ? function(e) {
            setTimeout(e, 4)
        } : function(e) {
            e()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
            req[e] = function() {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = function(e) {
            throw e
        }, req.load = function(e, t, n) {
            var r, i = e && e.config || {};
            return isBrowser ? (r = i.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"), r.type = i.scriptType || "text/javascript", r.charset = "utf-8", r.async = !0, r.setAttribute("data-requirecontext", e.contextName), r.setAttribute("data-requiremodule", t), !r.attachEvent || r.attachEvent.toString && r.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (r.addEventListener("load", e.onScriptLoad, !1), r.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, r.attachEvent("onreadystatechange", e.onScriptLoad)), r.src = n, currentlyAddingScript = r, baseElement ? head.insertBefore(r, baseElement) : head.appendChild(r), currentlyAddingScript = null, r) : void(isWebWorker && (importScripts(n), e.completeLoad(t)))
        }, isBrowser && eachReverse(scripts(), function(e) {
            return head || (head = e.parentNode), dataMain = e.getAttribute("data-main"), dataMain ? (cfg.baseUrl || (src = dataMain.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath, dataMain = mainScript), dataMain = dataMain.replace(jsSuffixRegExp, ""), cfg.deps = cfg.deps ? cfg.deps.concat(dataMain) : [dataMain], !0) : void 0
        }), define = function(e, t, n) {
            var r, i;
            "string" != typeof e && (n = t, t = e, e = null), isArray(t) || (n = t, t = []), !t.length && isFunction(n) && n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(e, n) {
                t.push(n)
            }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t)), useInteractive && (r = currentlyAddingScript || getInteractiveScript(), r && (e || (e = r.getAttribute("data-requiremodule")), i = contexts[r.getAttribute("data-requirecontext")])), (i ? i.defQueue : globalDefQueue).push([e, t, n])
        }, define.amd = {
            jQuery: !0
        }, req.exec = function(text) {
            return eval(text)
        }, req(cfg)
    }
}(this),
function(e, t) {
    function n(e) {
        var t = ht[e] = {};
        return K.each(e.split(tt), function(e, n) {
            t[n] = !0
        }), t
    }

    function r(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(mt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : gt.test(r) ? K.parseJSON(r) : r
                } catch (o) {}
                K.data(e, n, r)
            } else r = t
        }
        return r
    }

    function i(e) {
        var t;
        for (t in e)
            if (("data" !== t || !K.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function o() {
        return !1
    }

    function a() {
        return !0
    }

    function s(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }

    function u(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function l(e, t, n) {
        if (t = t || 0, K.isFunction(t)) return K.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return K.grep(e, function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = K.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (Ft.test(t)) return K.filter(t, r, !n);
            t = K.filter(t, r)
        }
        return K.grep(e, function(e) {
            return K.inArray(e, t) >= 0 === n
        })
    }

    function c(e) {
        var t = Pt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function f(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function p(e, t) {
        if (1 === t.nodeType && K.hasData(e)) {
            var n, r, i, o = K._data(e),
                a = K._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) K.event.add(t, n, s[n][r])
            }
            a.data && (a.data = K.extend({}, a.data))
        }
    }

    function d(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), K.support.html5Clone && e.innerHTML && !K.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Yt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(K.expando))
    }

    function h(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }

    function g(e) {
        Yt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function m(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = yn.length; i--;)
            if (t = yn[i] + n, t in e) return t;
        return r
    }

    function v(e, t) {
        return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
    }

    function y(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; a > o; o++) n = e[o], n.style && (i[o] = K._data(n, "olddisplay"), t ? (i[o] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && v(n) && (i[o] = K._data(n, "olddisplay", T(n.nodeName)))) : (r = nn(n, "display"), i[o] || "none" === r || K._data(n, "olddisplay", r)));
        for (o = 0; a > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? i[o] || "" : "none"));
        return e
    }

    function b(e, t, n) {
        var r = fn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function x(e, t, n, r) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > i; i += 2) "margin" === n && (o += K.css(e, n + vn[i], !0)), r ? ("content" === n && (o -= parseFloat(nn(e, "padding" + vn[i])) || 0), "margin" !== n && (o -= parseFloat(nn(e, "border" + vn[i] + "Width")) || 0)) : (o += parseFloat(nn(e, "padding" + vn[i])) || 0, "padding" !== n && (o += parseFloat(nn(e, "border" + vn[i] + "Width")) || 0));
        return o
    }

    function w(e, t, n) {
        var r = "width" === t ? e.offsetWidth : e.offsetHeight,
            i = !0,
            o = K.support.boxSizing && "border-box" === K.css(e, "boxSizing");
        if (0 >= r || null == r) {
            if (r = nn(e, t), (0 > r || null == r) && (r = e.style[t]), pn.test(r)) return r;
            i = o && (K.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + x(e, t, n || (o ? "border" : "content"), i) + "px"
    }

    function T(e) {
        if (hn[e]) return hn[e];
        var t = K("<" + e + ">").appendTo(W.body),
            n = t.css("display");
        return t.remove(), ("none" === n || "" === n) && (rn = W.body.appendChild(rn || K.extend(W.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), on && rn.createElement || (on = (rn.contentWindow || rn.contentDocument).document, on.write("<!doctype html><html><body>"), on.close()), t = on.body.appendChild(on.createElement(e)), n = nn(t, "display"), W.body.removeChild(rn)), hn[e] = n, n
    }

    function E(e, t, n, r) {
        var i;
        if (K.isArray(t)) K.each(t, function(t, i) {
            n || wn.test(e) ? r(e, i) : E(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== K.type(t)) r(e, t);
        else
            for (i in t) E(e + "[" + i + "]", t[i], n, r)
    }

    function k(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i, o, a = t.toLowerCase().split(tt),
                s = 0,
                u = a.length;
            if (K.isFunction(n))
                for (; u > s; s++) r = a[s], o = /^\+/.test(r), o && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[o ? "unshift" : "push"](n)
        }
    }

    function N(e, n, r, i, o, a) {
        o = o || n.dataTypes[0], a = a || {}, a[o] = !0;
        for (var s, u = e[o], l = 0, c = u ? u.length : 0, f = e === Hn; c > l && (f || !s); l++) s = u[l](n, r, i), "string" == typeof s && (!f || a[s] ? s = t : (n.dataTypes.unshift(s), s = N(e, n, r, i, s, a)));
        return !f && s || a["*"] || (s = N(e, n, r, i, "*", a)), s
    }

    function S(e, n) {
        var r, i, o = K.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        i && K.extend(!0, e, i)
    }

    function C(e, n, r) {
        var i, o, a, s, u = e.contents,
            l = e.dataTypes,
            c = e.responseFields;
        for (o in c) o in r && (n[c[o]] = r[o]);
        for (;
            "*" === l[0];) l.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in r) a = l[0];
        else {
            for (o in r) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                s || (s = o)
            }
            a = a || s
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : void 0
    }

    function A(e, t) {
        var n, r, i, o, a = e.dataTypes.slice(),
            s = a[0],
            u = {},
            l = 0;
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1])
            for (n in e.converters) u[n.toLowerCase()] = e.converters[n];
        for (; i = a[++l];)
            if ("*" !== i) {
                if ("*" !== s && s !== i) {
                    if (n = u[s + " " + i] || u["* " + i], !n)
                        for (r in u)
                            if (o = r.split(" "), o[1] === i && (n = u[s + " " + o[0]] || u["* " + o[0]])) {
                                n === !0 ? n = u[r] : u[r] !== !0 && (i = o[0], a.splice(l--, 0, i));
                                break
                            }
                    if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: n ? c : "No conversion from " + s + " to " + i
                            }
                        }
                }
                s = i
            }
        return {
            state: "success",
            data: t
        }
    }

    function j() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function q() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function M() {
        return setTimeout(function() {
            Gn = t
        }, 0), Gn = K.now()
    }

    function O(e, t) {
        K.each(t, function(t, n) {
            for (var r = (er[t] || []).concat(er["*"]), i = 0, o = r.length; o > i; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function D(e, t, n) {
        var r, i = 0,
            o = Zn.length,
            a = K.Deferred().always(function() {
                delete s.elem
            }),
            s = function() {
                for (var t = Gn || M(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, o = u.tweens.length; o > i; i++) u.tweens[i].run(r);
                return a.notifyWith(e, [u, r, n]), 1 > r && o ? n : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: K.extend({}, t),
                opts: K.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Gn || M(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = K.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    for (var n = 0, r = t ? u.tweens.length : 0; r > n; n++) u.tweens[n].run(1);
                    return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
                }
            }),
            l = u.props;
        for (L(l, u.opts.specialEasing); o > i; i++)
            if (r = Zn[i].call(u, e, l, u.opts)) return r;
        return O(u, l), K.isFunction(u.opts.start) && u.opts.start.call(e, u), K.fx.timer(K.extend(s, {
            anim: u,
            queue: u.opts.queue,
            elem: e
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function L(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = K.camelCase(n), i = t[r], o = e[n], K.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = K.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function _(e, t, n) {
        var r, i, o, a, s, u, l, c, f = this,
            p = e.style,
            d = {},
            h = [],
            g = e.nodeType && v(e);
        n.queue || (l = K._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c()
        }), l.unqueued++, f.always(function() {
            f.always(function() {
                l.unqueued--, K.queue(e, "fx").length || l.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === K.css(e, "display") && "none" === K.css(e, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", K.support.shrinkWrapBlocks || f.done(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (o = t[r], Jn.exec(o)) {
                if (delete t[r], o === (g ? "hide" : "show")) continue;
                h.push(r)
            }
        if (a = h.length)
            for (s = K._data(e, "fxshow") || K._data(e, "fxshow", {}), g ? K(e).show() : f.done(function() {
                    K(e).hide()
                }), f.done(function() {
                    var t;
                    K.removeData(e, "fxshow", !0);
                    for (t in d) K.style(e, t, d[t])
                }), r = 0; a > r; r++) i = h[r], u = f.createTween(i, g ? s[i] : 0), d[i] = s[i] || K.style(e, i), i in s || (s[i] = u.start, g && (u.end = u.start, u.start = "width" === i || "height" === i ? 1 : 0))
    }

    function F(e, t, n, r, i) {
        return new F.prototype.init(e, t, n, r, i)
    }

    function H(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = vn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function B(e) {
        return K.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var P, R, W = e.document,
        I = e.location,
        $ = e.navigator,
        z = e.jQuery,
        X = e.$,
        U = Array.prototype.push,
        Q = Array.prototype.slice,
        G = Array.prototype.indexOf,
        Y = Object.prototype.toString,
        J = Object.prototype.hasOwnProperty,
        V = String.prototype.trim,
        K = function(e, t) {
            return new K.fn.init(e, t, P)
        },
        Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        et = /\S/,
        tt = /\s+/,
        nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        it = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ot = /^[\],:{}\s]*$/,
        at = /(?:^|:|,)(?:\s*\[)+/g,
        st = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ut = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        lt = /^-ms-/,
        ct = /-([\da-z])/gi,
        ft = function(e, t) {
            return (t + "").toUpperCase()
        },
        pt = function() {
            W.addEventListener ? (W.removeEventListener("DOMContentLoaded", pt, !1), K.ready()) : "complete" === W.readyState && (W.detachEvent("onreadystatechange", pt), K.ready())
        },
        dt = {};
    K.fn = K.prototype = {
        constructor: K,
        init: function(e, n, r) {
            var i, o, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : rt.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) return n = n instanceof K ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : W, e = K.parseHTML(i[1], a, !0), it.test(i[1]) && K.isPlainObject(n) && this.attr.call(e, n, !0), K.merge(this, e);
                if (o = W.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = W, this.selector = e, this
            }
            return K.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var r = K.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },
        each: function(e, t) {
            return K.each(this, e, t)
        },
        ready: function(e) {
            return K.ready.promise().done(e), this
        },
        eq: function(e) {
            return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments), "slice", Q.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(K.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: [].sort,
        splice: [].splice
    }, K.fn.init.prototype = K.fn, K.extend = K.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || K.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
            if (null != (e = arguments[u]))
                for (n in e) r = s[n], i = e[n], s !== i && (c && i && (K.isPlainObject(i) || (o = K.isArray(i))) ? (o ? (o = !1, a = r && K.isArray(r) ? r : []) : a = r && K.isPlainObject(r) ? r : {}, s[n] = K.extend(c, a, i)) : i !== t && (s[n] = i));
        return s
    }, K.extend({
        noConflict: function(t) {
            return e.$ === K && (e.$ = X), t && e.jQuery === K && (e.jQuery = z), K
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? K.readyWait++ : K.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--K.readyWait : !K.isReady) {
                if (!W.body) return setTimeout(K.ready, 1);
                K.isReady = !0, e !== !0 && --K.readyWait > 0 || (R.resolveWith(W, [K]), K.fn.trigger && K(W).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === K.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === K.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? String(e) : dt[Y.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || "object" !== K.type(e) || e.nodeType || K.isWindow(e)) return !1;
            try {
                if (e.constructor && !J.call(e, "constructor") && !J.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || J.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var r;
            return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || W, (r = it.exec(e)) ? [t.createElement(r[1])] : (r = K.buildFragment([e], t, n ? null : []), K.merge([], (r.cacheable ? K.clone(r.fragment) : r.fragment).childNodes))) : null
        },
        parseJSON: function(t) {
            return t && "string" == typeof t ? (t = K.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : ot.test(t.replace(st, "@").replace(ut, "]").replace(at, "")) ? new Function("return " + t)() : void K.error("Invalid JSON: " + t)) : null
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && et.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(lt, "ms-").replace(ct, ft)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, n, r) {
            var i, o = 0,
                a = e.length,
                s = a === t || K.isFunction(e);
            if (r)
                if (s) {
                    for (i in e)
                        if (n.apply(e[i], r) === !1) break
                } else
                    for (; a > o && n.apply(e[o++], r) !== !1;);
            else if (s) {
                for (i in e)
                    if (n.call(e[i], i, e[i]) === !1) break
            } else
                for (; a > o && n.call(e[o], o, e[o++]) !== !1;);
            return e
        },
        trim: V && !V.call("﻿ ") ? function(e) {
            return null == e ? "" : V.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(nt, "")
        },
        makeArray: function(e, t) {
            var n, r = t || [];
            return null != e && (n = K.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || K.isWindow(e) ? U.call(r, e) : K.merge(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (G) return G.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, n, r) {
            var i, o, a = [],
                s = 0,
                u = e.length,
                l = e instanceof K || u !== t && "number" == typeof u && (u > 0 && e[0] && e[u - 1] || 0 === u || K.isArray(e));
            if (l)
                for (; u > s; s++) i = n(e[s], s, r), null != i && (a[a.length] = i);
            else
                for (o in e) i = n(e[o], o, r), null != i && (a[a.length] = i);
            return a.concat.apply([], a)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (r = e[n], n = e, e = r), K.isFunction(e) ? (i = Q.call(arguments, 2), o = function() {
                return e.apply(n, i.concat(Q.call(arguments)))
            }, o.guid = e.guid = e.guid || K.guid++, o) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var u, l = null == r,
                c = 0,
                f = e.length;
            if (r && "object" == typeof r) {
                for (c in r) K.access(e, n, c, r[c], 1, a, i);
                o = 1
            } else if (i !== t) {
                if (u = s === t && K.isFunction(i), l && (u ? (u = n, n = function(e, t, n) {
                        return u.call(K(e), n)
                    }) : (n.call(e, i), n = null)), n)
                    for (; f > c; c++) n(e[c], r, u ? i.call(e[c], c, n(e[c], r)) : i, s);
                o = 1
            }
            return o ? e : l ? n.call(e) : f ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }), K.ready.promise = function(t) {
        if (!R)
            if (R = K.Deferred(), "complete" === W.readyState) setTimeout(K.ready, 1);
            else if (W.addEventListener) W.addEventListener("DOMContentLoaded", pt, !1), e.addEventListener("load", K.ready, !1);
        else {
            W.attachEvent("onreadystatechange", pt), e.attachEvent("onload", K.ready);
            var n = !1;
            try {
                n = null == e.frameElement && W.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!K.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    K.ready()
                }
            }()
        }
        return R.promise(t)
    }, K.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        dt["[object " + t + "]"] = t.toLowerCase()
    }), P = K(W);
    var ht = {};
    K.Callbacks = function(e) {
        e = "string" == typeof e ? ht[e] || n(e) : K.extend({}, e);
        var r, i, o, a, s, u, l = [],
            c = !e.once && [],
            f = function(t) {
                for (r = e.memory && t, i = !0, u = a || 0, a = 0, s = l.length, o = !0; l && s > u; u++)
                    if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                o = !1, l && (c ? c.length && f(c.shift()) : r ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        ! function n(t) {
                            K.each(t, function(t, r) {
                                var i = K.type(r);
                                "function" !== i || e.unique && p.has(r) ? r && r.length && "string" !== i && n(r) : l.push(r)
                            })
                        }(arguments), o ? s = l.length : r && (a = t, f(r))
                    }
                    return this
                },
                remove: function() {
                    return l && K.each(arguments, function(e, t) {
                        for (var n;
                            (n = K.inArray(t, l, n)) > -1;) l.splice(n, 1), o && (s >= n && s--, u >= n && u--)
                    }), this
                },
                has: function(e) {
                    return K.inArray(e, l) > -1
                },
                empty: function() {
                    return l = [], this
                },
                disable: function() {
                    return l = c = r = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = t, r || p.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !l || i && !c || (o ? c.push(t) : f(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, K.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", K.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return K.Deferred(function(n) {
                            K.each(t, function(t, r) {
                                var o = r[0],
                                    a = e[t];
                                i[r[1]](K.isFunction(a) ? function() {
                                    var e = a.apply(this, arguments);
                                    e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n : this, [e])
                                } : n[o])
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? K.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, K.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = a.fire, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = Q.call(arguments),
                a = o.length,
                s = 1 !== a || e && K.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : K.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? Q.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    }), K.support = function() {
        var t, n, r, i, o, a, s, u, l, c, f, p = W.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], r.style.cssText = "top:1px;float:left;opacity:.5", !n || !n.length) return {};
        i = W.createElement("select"), o = i.appendChild(W.createElement("option")), a = p.getElementsByTagName("input")[0], t = {
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: "on" === a.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== p.className,
            enctype: !!W.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== W.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === W.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", f = function() {
                t.noCloneEvent = !1
            }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", f)), a = W.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), p.appendChild(a), s = W.createDocumentFragment(), s.appendChild(p.lastChild), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, s.removeChild(a), s.appendChild(p), p.attachEvent)
            for (l in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) u = "on" + l, c = u in p, c || (p.setAttribute(u, "return;"), c = "function" == typeof p[u]), t[l + "Bubbles"] = c;
        return K(function() {
            var n, r, i, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                s = W.getElementsByTagName("body")[0];
            s && (n = W.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", s.insertBefore(n, s.firstChild), r = W.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = r.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === r.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(r, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width, o = W.createElement("div"), o.style.cssText = r.style.cssText = a, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof r.style.zoom && (r.innerHTML = "", r.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === r.offsetWidth, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== r.offsetWidth, n.style.zoom = 1), s.removeChild(n), n = r = i = o = null)
        }), s.removeChild(p), n = r = i = o = a = s = p = null, t
    }();
    var gt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        mt = /([A-Z])/g;
    K.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? K.cache[e[K.expando]] : e[K.expando], !!e && !i(e)
        },
        data: function(e, n, r, i) {
            if (K.acceptData(e)) {
                var o, a, s = K.expando,
                    u = "string" == typeof n,
                    l = e.nodeType,
                    c = l ? K.cache : e,
                    f = l ? e[s] : e[s] && s;
                if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = K.deletedIds.pop() || K.guid++ : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = K.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[f] = K.extend(c[f], n) : c[f].data = K.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[K.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[K.camelCase(n)])) : a = o, a
            }
        },
        removeData: function(e, t, n) {
            if (K.acceptData(e)) {
                var r, o, a, s = e.nodeType,
                    u = s ? K.cache : e,
                    l = s ? e[K.expando] : K.expando;
                if (u[l]) {
                    if (t && (r = n ? u[l] : u[l].data)) {
                        K.isArray(t) || (t in r ? t = [t] : (t = K.camelCase(t), t = t in r ? [t] : t.split(" ")));
                        for (o = 0, a = t.length; a > o; o++) delete r[t[o]];
                        if (!(n ? i : K.isEmptyObject)(r)) return
                    }(n || (delete u[l].data, i(u[l]))) && (s ? K.cleanData([e], !0) : K.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
                }
            }
        },
        _data: function(e, t, n) {
            return K.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && K.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), K.fn.extend({
        data: function(e, n) {
            var i, o, a, s, u, l = this[0],
                c = 0,
                f = null;
            if (e === t) {
                if (this.length && (f = K.data(l), 1 === l.nodeType && !K._data(l, "parsedAttrs"))) {
                    for (a = l.attributes, u = a.length; u > c; c++) s = a[c].name, s.indexOf("data-") || (s = K.camelCase(s.substring(5)), r(l, s, f[s]));
                    K._data(l, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof e ? this.each(function() {
                K.data(this, e)
            }) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", o = i[1] + "!", K.access(this, function(n) {
                return n === t ? (f = this.triggerHandler("getData" + o, [i[0]]), f === t && l && (f = K.data(l, e), f = r(l, e, f)), f === t && i[1] ? this.data(i[0]) : f) : (i[1] = n, void this.each(function() {
                    var t = K(this);
                    t.triggerHandler("setData" + o, i), K.data(this, e, n), t.triggerHandler("changeData" + o, i)
                }))
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                K.removeData(this, e)
            })
        }
    }), K.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = K._data(e, t), n && (!r || K.isArray(n) ? r = K._data(e, t, K.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = K.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = K._queueHooks(e, t),
                a = function() {
                    K.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return K._data(e, n) || K._data(e, n, {
                empty: K.Callbacks("once memory").add(function() {
                    K.removeData(e, t + "queue", !0), K.removeData(e, n, !0)
                })
            })
        }
    }), K.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? K.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = K.queue(this, e, n);
                K._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && K.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                K.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = K.fx ? K.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = K.Deferred(),
                a = this,
                s = this.length,
                u = function() {
                    --i || o.resolveWith(a, [a])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = K._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var vt, yt, bt, xt = /[\t\r\n]/g,
        wt = /\r/g,
        Tt = /^(?:button|input)$/i,
        Et = /^(?:button|input|object|select|textarea)$/i,
        kt = /^a(?:rea|)$/i,
        Nt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        St = K.support.getSetAttribute;
    K.fn.extend({
        attr: function(e, t) {
            return K.access(this, K.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                K.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return K.access(this, K.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = K.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a, s;
            if (K.isFunction(e)) return this.each(function(t) {
                K(this).addClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e)
                for (t = e.split(tt), n = 0, r = this.length; r > n; n++)
                    if (i = this[n], 1 === i.nodeType)
                        if (i.className || 1 !== t.length) {
                            for (o = " " + i.className + " ", a = 0, s = t.length; s > a; a++) o.indexOf(" " + t[a] + " ") < 0 && (o += t[a] + " ");
                            i.className = K.trim(o)
                        } else i.className = e;
            return this
        },
        removeClass: function(e) {
            var n, r, i, o, a, s, u;
            if (K.isFunction(e)) return this.each(function(t) {
                K(this).removeClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(tt), s = 0, u = this.length; u > s; s++)
                    if (i = this[s], 1 === i.nodeType && i.className) {
                        for (r = (" " + i.className + " ").replace(xt, " "), o = 0, a = n.length; a > o; o++)
                            for (; r.indexOf(" " + n[o] + " ") >= 0;) r = r.replace(" " + n[o] + " ", " ");
                        i.className = e ? K.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return this.each(K.isFunction(e) ? function(n) {
                K(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var i, o = 0, a = K(this), s = t, u = e.split(tt); i = u[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                else("undefined" === n || "boolean" === n) && (this.className && K._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : K._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(xt, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = K.isFunction(e), this.each(function(r) {
                    var o, a = K(this);
                    1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), n = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return n = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(wt, "") : null == r ? "" : r)
            }
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i, o = e.selectedIndex,
                        a = [],
                        s = e.options,
                        u = "select-one" === e.type;
                    if (0 > o) return null;
                    for (n = u ? o : 0, r = u ? o + 1 : s.length; r > n; n++)
                        if (i = s[n], !(!i.selected || (K.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && K.nodeName(i.parentNode, "optgroup"))) {
                            if (t = K(i).val(), u) return t;
                            a.push(t)
                        }
                    return u && !a.length && s.length ? K(s[o]).val() : a
                },
                set: function(e, t) {
                    var n = K.makeArray(t);
                    return K(e).find("option").each(function() {
                        this.selected = K.inArray(K(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, r, i) {
            var o, a, s, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return i && K.isFunction(K.fn[n]) ? K(e)[n](r) : "undefined" == typeof e.getAttribute ? K.prop(e, n, r) : (s = 1 !== u || !K.isXMLDoc(e), s && (n = n.toLowerCase(), a = K.attrHooks[n] || (Nt.test(n) ? yt : vt)), r !== t ? null === r ? void K.removeAttr(e, n) : a && "set" in a && s && (o = a.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o))
        },
        removeAttr: function(e, t) {
            var n, r, i, o, a = 0;
            if (t && 1 === e.nodeType)
                for (r = t.split(tt); a < r.length; a++) i = r[a], i && (n = K.propFix[i] || i, o = Nt.test(i), o || K.attr(e, i, ""), e.removeAttribute(St ? i : n), o && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (Tt.test(e.nodeName) && e.parentNode) K.error("type property can't be changed");
                    else if (!K.support.radioValue && "radio" === t && K.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return vt && K.nodeName(e, "button") ? vt.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    return vt && K.nodeName(e, "button") ? vt.set(e, t, n) : void(e.value = t)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !K.isXMLDoc(e), a && (n = K.propFix[n] || n, o = K.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Et.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), yt = {
        get: function(e, n) {
            var r, i = K.prop(e, n);
            return i === !0 || "boolean" != typeof i && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? K.removeAttr(e, n) : (r = K.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, St || (bt = {
        name: !0,
        id: !0,
        coords: !0
    }, vt = K.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (bt[n] ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = W.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, K.each(["width", "height"], function(e, t) {
        K.attrHooks[t] = K.extend(K.attrHooks[t], {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        })
    }), K.attrHooks.contenteditable = {
        get: vt.get,
        set: function(e, t, n) {
            "" === t && (t = "false"), vt.set(e, t, n)
        }
    }), K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function(e, n) {
        K.attrHooks[n] = K.extend(K.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null === r ? t : r
            }
        })
    }), K.support.style || (K.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), K.support.enctype || (K.propFix.enctype = "encoding"), K.support.checkOn || K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = K.extend(K.valHooks[this], {
            set: function(e, t) {
                return K.isArray(t) ? e.checked = K.inArray(K(e).val(), t) >= 0 : void 0
            }
        })
    });
    var Ct = /^(?:textarea|input|select)$/i,
        At = /^([^\.]*|)(?:\.(.+)|)$/,
        jt = /(?:^|\s)hover(\.\S+|)\b/,
        qt = /^key/,
        Mt = /^(?:mouse|contextmenu)|click/,
        Ot = /^(?:focusinfocus|focusoutblur)$/,
        Dt = function(e) {
            return K.event.special.hover ? e : e.replace(jt, "mouseenter$1 mouseleave$1")
        };
    K.event = {
            add: function(e, n, r, i, o) {
                var a, s, u, l, c, f, p, d, h, g, m;
                if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (a = K._data(e))) {
                    for (r.handler && (h = r, r = h.handler, o = h.selector), r.guid || (r.guid = K.guid++), u = a.events, u || (a.events = u = {}), s = a.handle, s || (a.handle = s = function(e) {
                            return "undefined" == typeof K || e && K.event.triggered === e.type ? t : K.event.dispatch.apply(s.elem, arguments)
                        }, s.elem = e), n = K.trim(Dt(n)).split(" "), l = 0; l < n.length; l++) c = At.exec(n[l]) || [], f = c[1], p = (c[2] || "").split(".").sort(), m = K.event.special[f] || {}, f = (o ? m.delegateType : m.bindType) || f, m = K.event.special[f] || {}, d = K.extend({
                        type: f,
                        origType: c[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: o,
                        needsContext: o && K.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, h), g = u[f], g || (g = u[f] = [], g.delegateCount = 0, m.setup && m.setup.call(e, i, p, s) !== !1 || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))), m.add && (m.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), o ? g.splice(g.delegateCount++, 0, d) : g.push(d), K.event.global[f] = !0;
                    e = null
                }
            },
            global: {},
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, p, d, h, g, m = K.hasData(e) && K._data(e);
                if (m && (p = m.events)) {
                    for (t = K.trim(Dt(t || "")).split(" "), o = 0; o < t.length; o++)
                        if (a = At.exec(t[o]) || [], s = u = a[1], l = a[2], s) {
                            for (d = K.event.special[s] || {}, s = (r ? d.delegateType : d.bindType) || s, h = p[s] || [], c = h.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = 0; f < h.length; f++) g = h[f], !i && u !== g.origType || n && n.guid !== g.guid || l && !l.test(g.namespace) || r && r !== g.selector && ("**" !== r || !g.selector) || (h.splice(f--, 1), g.selector && h.delegateCount--, d.remove && d.remove.call(e, g));
                            0 === h.length && c !== h.length && (d.teardown && d.teardown.call(e, l, m.handle) !== !1 || K.removeEvent(e, s, m.handle), delete p[s])
                        } else
                            for (s in p) K.event.remove(e, s + t[o], n, r, !0);
                    K.isEmptyObject(p) && (delete m.handle, K.removeData(e, "events", !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(n, r, i, o) {
                if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                    var a, s, u, l, c, f, p, d, h, g, m = n.type || n,
                        v = [];
                    if (!Ot.test(m + K.event.triggered) && (m.indexOf("!") >= 0 && (m = m.slice(0, -1), s = !0), m.indexOf(".") >= 0 && (v = m.split("."), m = v.shift(), v.sort()), i && !K.event.customEvent[m] || K.event.global[m]))
                        if (n = "object" == typeof n ? n[K.expando] ? n : new K.Event(m, n) : new K.Event(m), n.type = m, n.isTrigger = !0, n.exclusive = s, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = m.indexOf(":") < 0 ? "on" + m : "", i) {
                            if (n.result = t, n.target || (n.target = i), r = null != r ? K.makeArray(r) : [], r.unshift(n), p = K.event.special[m] || {}, !p.trigger || p.trigger.apply(i, r) !== !1) {
                                if (h = [
                                        [i, p.bindType || m]
                                    ], !o && !p.noBubble && !K.isWindow(i)) {
                                    for (g = p.delegateType || m, l = Ot.test(g + m) ? i : i.parentNode, c = i; l; l = l.parentNode) h.push([l, g]), c = l;
                                    c === (i.ownerDocument || W) && h.push([c.defaultView || c.parentWindow || e, g])
                                }
                                for (u = 0; u < h.length && !n.isPropagationStopped(); u++) l = h[u][0], n.type = h[u][1], d = (K._data(l, "events") || {})[n.type] && K._data(l, "handle"), d && d.apply(l, r), d = f && l[f], d && K.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                                return n.type = m, o || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === m && K.nodeName(i, "a") || !K.acceptData(i) || f && i[m] && ("focus" !== m && "blur" !== m || 0 !== n.target.offsetWidth) && !K.isWindow(i) && (c = i[f], c && (i[f] = null), K.event.triggered = m, i[m](), K.event.triggered = t, c && (i[f] = c)), n.result
                            }
                        } else {
                            a = K.cache;
                            for (u in a) a[u].events && a[u].events[m] && K.event.trigger(n, r, a[u].handle.elem, !0)
                        }
                }
            },
            dispatch: function(n) {
                n = K.event.fix(n || e.event);
                var r, i, o, a, s, u, l, c, f, p = (K._data(this, "events") || {})[n.type] || [],
                    d = p.delegateCount,
                    h = Q.call(arguments),
                    g = !n.exclusive && !n.namespace,
                    m = K.event.special[n.type] || {},
                    v = [];
                if (h[0] = n, n.delegateTarget = this, !m.preDispatch || m.preDispatch.call(this, n) !== !1) {
                    if (d && (!n.button || "click" !== n.type))
                        for (o = n.target; o != this; o = o.parentNode || this)
                            if (o.disabled !== !0 || "click" !== n.type) {
                                for (s = {}, l = [], r = 0; d > r; r++) c = p[r], f = c.selector, s[f] === t && (s[f] = c.needsContext ? K(f, this).index(o) >= 0 : K.find(f, this, null, [o]).length), s[f] && l.push(c);
                                l.length && v.push({
                                    elem: o,
                                    matches: l
                                })
                            }
                    for (p.length > d && v.push({
                            elem: this,
                            matches: p.slice(d)
                        }), r = 0; r < v.length && !n.isPropagationStopped(); r++)
                        for (u = v[r], n.currentTarget = u.elem, i = 0; i < u.matches.length && !n.isImmediatePropagationStopped(); i++) c = u.matches[i], (g || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data, n.handleObj = c, a = ((K.event.special[c.origType] || {}).handle || c.handler).apply(u.elem, h), a !== t && (n.result = a, a === !1 && (n.preventDefault(), n.stopPropagation())));
                    return m.postDispatch && m.postDispatch.call(this, n), n.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, o, a = n.button,
                        s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || W, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[K.expando]) return e;
                var t, n, r = e,
                    i = K.event.fixHooks[e.type] || {},
                    o = i.props ? this.props.concat(i.props) : this.props;
                for (e = K.Event(r), t = o.length; t;) n = o[--t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || W), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        K.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = K.extend(new K.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? K.event.trigger(i, null, t) : K.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, K.event.handle = K.event.dispatch, K.removeEvent = W.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
        }, K.Event = function(e, t) {
            return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : o) : this.type = e, t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(e, t)
        }, K.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = a;
                var e = this.originalEvent;
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = a;
                var e = this.originalEvent;
                e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = a, this.stopPropagation()
            },
            isDefaultPrevented: o,
            isPropagationStopped: o,
            isImmediatePropagationStopped: o
        }, K.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            K.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    {
                        var n, r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        o.selector
                    }
                    return (!i || i !== r && !K.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), K.support.submitBubbles || (K.event.special.submit = {
            setup: function() {
                return K.nodeName(this, "form") ? !1 : void K.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = K.nodeName(n, "input") || K.nodeName(n, "button") ? n.form : t;
                    r && !K._data(r, "_submit_attached") && (K.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), K._data(r, "_submit_attached", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && K.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return K.nodeName(this, "form") ? !1 : void K.event.remove(this, "._submit")
            }
        }), K.support.changeBubbles || (K.event.special.change = {
            setup: function() {
                return Ct.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (K.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), K.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), K.event.simulate("change", this, e, !0)
                })), !1) : void K.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Ct.test(t.nodeName) && !K._data(t, "_change_attached") && (K.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || K.event.simulate("change", this.parentNode, e, !0)
                    }), K._data(t, "_change_attached", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return K.event.remove(this, "._change"), !Ct.test(this.nodeName)
            }
        }), K.support.focusinBubbles || K.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    K.event.simulate(t, e.target, K.event.fix(e), !0)
                };
            K.event.special[t] = {
                setup: function() {
                    0 === n++ && W.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && W.removeEventListener(e, r, !0)
                }
            }
        }), K.fn.extend({
            on: function(e, n, r, i, a) {
                var s, u;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n, n = t);
                    for (u in e) this.on(u, n, r, e[u], a);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = o;
                else if (!i) return this;
                return 1 === a && (s = i, i = function(e) {
                    return K().off(e), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = K.guid++)), this.each(function() {
                    K.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, a;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, K(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (a in e) this.off(a, n, e[a]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = o), this.each(function() {
                    K.event.remove(this, e, r, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            live: function(e, t, n) {
                return K(this.context).on(e, this.selector, t, n), this
            },
            die: function(e, t) {
                return K(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    K.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                return this[0] ? K.event.trigger(e, t, this[0], !0) : void 0
            },
            toggle: function(e) {
                var t = arguments,
                    n = e.guid || K.guid++,
                    r = 0,
                    i = function(n) {
                        var i = (K._data(this, "lastToggle" + e.guid) || 0) % r;
                        return K._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                    };
                for (i.guid = n; r < t.length;) t[r++].guid = n;
                return this.click(i)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            K.fn[t] = function(e, n) {
                return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, qt.test(t) && (K.event.fixHooks[t] = K.event.keyHooks), Mt.test(t) && (K.event.fixHooks[t] = K.event.mouseHooks)
        }),
        function(e, t) {
            function n(e, t, n, r) {
                n = n || [], t = t || M;
                var i, o, a, s, u = t.nodeType;
                if (!e || "string" != typeof e) return n;
                if (1 !== u && 9 !== u) return [];
                if (a = w(t), !a && !r && (i = nt.exec(e)))
                    if (s = i[1]) {
                        if (9 === u) {
                            if (o = t.getElementById(s), !o || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && T(t, o) && o.id === s) return n.push(o), n
                    } else {
                        if (i[2]) return F.apply(n, H.call(t.getElementsByTagName(e), 0)), n;
                        if ((s = i[3]) && pt && t.getElementsByClassName) return F.apply(n, H.call(t.getElementsByClassName(s), 0)), n
                    }
                return g(e.replace(V, "$1"), t, n, r, a)
            }

            function r(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function i(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function o(e) {
                return P(function(t) {
                    return t = +t, P(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function a(e, t, n) {
                if (e === t) return n;
                for (var r = e.nextSibling; r;) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }

            function s(e, t) {
                var r, i, o, a, s, u, l, c = I[j][e];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = b.preFilter; s;) {
                    (!r || (i = Z.exec(s))) && (i && (s = s.slice(i[0].length)), u.push(o = [])), r = !1, (i = et.exec(s)) && (o.push(r = new q(i.shift())), s = s.slice(r.length), r.type = i[0].replace(V, " "));
                    for (a in b.filter) !(i = st[a].exec(s)) || l[a] && !(i = l[a](i, M, !0)) || (o.push(r = new q(i.shift())), s = s.slice(r.length), r.type = a, r.matches = i);
                    if (!r) break
                }
                return t ? s.length : s ? n.error(e) : I(e, u).slice(0)
            }

            function u(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === t.dir,
                    o = L++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (i || 1 === t.nodeType) return e(t, n, o)
                } : function(t, n, a) {
                    if (a) {
                        for (; t = t[r];)
                            if ((i || 1 === t.nodeType) && e(t, n, a)) return t
                    } else
                        for (var s, u = D + " " + o + " ", l = u + v; t = t[r];)
                            if (i || 1 === t.nodeType) {
                                if ((s = t[j]) === l) return t.sizset;
                                if ("string" == typeof s && 0 === s.indexOf(u)) {
                                    if (t.sizset) return t
                                } else {
                                    if (t[j] = l, e(t, n, a)) return t.sizset = !0, t;
                                    t.sizset = !1
                                }
                            }
                }
            }

            function l(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function c(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                return a
            }

            function f(e, t, n, r, i, o) {
                return r && !r[j] && (r = f(r)), i && !i[j] && (i = f(i, o)), P(function(o, a, s, u) {
                    if (!o || !i) {
                        var l, f, p, d = [],
                            g = [],
                            m = a.length,
                            v = o || h(t || "*", s.nodeType ? [s] : s, [], o),
                            y = !e || !o && t ? v : c(v, d, e, s, u),
                            b = n ? i || (o ? e : m || r) ? [] : a : y;
                        if (n && n(y, b, s, u), r)
                            for (p = c(b, g), r(p, [], s, u), l = p.length; l--;)(f = p[l]) && (b[g[l]] = !(y[g[l]] = f));
                        if (o)
                            for (l = e && b.length; l--;)(f = b[l]) && (o[d[l]] = !(a[d[l]] = f));
                        else b = c(b === a ? b.splice(m, b.length) : b), i ? i(null, a, b, u) : F.apply(a, b)
                    }
                })
            }

            function p(e) {
                for (var t, n, r, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, c = u(function(e) {
                        return e === t
                    }, a, !0), d = u(function(e) {
                        return B.call(t, e) > -1
                    }, a, !0), h = [function(e, n, r) {
                        return !o && (r || n !== S) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r))
                    }]; i > s; s++)
                    if (n = b.relative[e[s].type]) h = [u(l(h), n)];
                    else {
                        if (n = b.filter[e[s].type].apply(null, e[s].matches), n[j]) {
                            for (r = ++s; i > r && !b.relative[e[r].type]; r++);
                            return f(s > 1 && l(h), s > 1 && e.slice(0, s - 1).join("").replace(V, "$1"), n, r > s && p(e.slice(s, r)), i > r && p(e = e.slice(r)), i > r && e.join(""))
                        }
                        h.push(n)
                    }
                return l(h)
            }

            function d(e, t) {
                var r = t.length > 0,
                    i = e.length > 0,
                    o = function(a, s, u, l, f) {
                        var p, d, h, g = [],
                            m = 0,
                            y = "0",
                            x = a && [],
                            w = null != f,
                            T = S,
                            E = a || i && b.find.TAG("*", f && s.parentNode || s),
                            k = D += null == T ? 1 : Math.E;
                        for (w && (S = s !== M && s, v = o.el); null != (p = E[y]); y++) {
                            if (i && p) {
                                for (d = 0; h = e[d]; d++)
                                    if (h(p, s, u)) {
                                        l.push(p);
                                        break
                                    }
                                w && (D = k, v = ++o.el)
                            }
                            r && ((p = !h && p) && m--, a && x.push(p))
                        }
                        if (m += y, r && y !== m) {
                            for (d = 0; h = t[d]; d++) h(x, g, s, u);
                            if (a) {
                                if (m > 0)
                                    for (; y--;) x[y] || g[y] || (g[y] = _.call(l));
                                g = c(g)
                            }
                            F.apply(l, g), w && !a && g.length > 0 && m + t.length > 1 && n.uniqueSort(l)
                        }
                        return w && (D = k, S = T), x
                    };
                return o.el = 0, r ? P(o) : o
            }

            function h(e, t, r, i) {
                for (var o = 0, a = t.length; a > o; o++) n(e, t[o], r, i);
                return r
            }

            function g(e, t, n, r, i) {
                {
                    var o, a, u, l, c, f = s(e);
                    f.length
                }
                if (!r && 1 === f.length) {
                    if (a = f[0] = f[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !i && b.relative[a[1].type]) {
                        if (t = b.find.ID(u.matches[0].replace(at, ""), t, i)[0], !t) return n;
                        e = e.slice(a.shift().length)
                    }
                    for (o = st.POS.test(e) ? -1 : a.length - 1; o >= 0 && (u = a[o], !b.relative[l = u.type]); o--)
                        if ((c = b.find[l]) && (r = c(u.matches[0].replace(at, ""), rt.test(a[0].type) && t.parentNode || t, i))) {
                            if (a.splice(o, 1), e = r.length && a.join(""), !e) return F.apply(n, H.call(r, 0)), n;
                            break
                        }
                }
                return E(e, f)(r, t, i, n, rt.test(e)), n
            }

            function m() {}
            var v, y, b, x, w, T, E, k, N, S, C = !0,
                A = "undefined",
                j = ("sizcache" + Math.random()).replace(".", ""),
                q = String,
                M = e.document,
                O = M.documentElement,
                D = 0,
                L = 0,
                _ = [].pop,
                F = [].push,
                H = [].slice,
                B = [].indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                P = function(e, t) {
                    return e[j] = null == t || t, e
                },
                R = function() {
                    var e = {},
                        t = [];
                    return P(function(n, r) {
                        return t.push(n) > b.cacheLength && delete e[t.shift()], e[n] = r
                    }, e)
                },
                W = R(),
                I = R(),
                $ = R(),
                z = "[\\x20\\t\\r\\n\\f]",
                X = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                U = X.replace("w", "w#"),
                Q = "([*^$|!~]?=)",
                G = "\\[" + z + "*(" + X + ")" + z + "*(?:" + Q + z + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + z + "*\\]",
                Y = ":(" + X + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + G + ")|[^:]|\\\\.)*|.*))\\)|)",
                J = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)",
                V = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
                Z = new RegExp("^" + z + "*," + z + "*"),
                et = new RegExp("^" + z + "*([\\x20\\t\\r\\n\\f>+~])" + z + "*"),
                tt = new RegExp(Y),
                nt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                rt = /[\x20\t\r\n\f]*[+~]/,
                it = /h\d/i,
                ot = /input|select|textarea|button/i,
                at = /\\(?!\\)/g,
                st = {
                    ID: new RegExp("^#(" + X + ")"),
                    CLASS: new RegExp("^\\.(" + X + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + X + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + X.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + G),
                    PSEUDO: new RegExp("^" + Y),
                    POS: new RegExp(J, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + z + "*[>+~]|" + J, "i")
                },
                ut = function(e) {
                    var t = M.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                },
                lt = ut(function(e) {
                    return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length
                }),
                ct = ut(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
                }),
                ft = ut(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }),
                pt = ut(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                }),
                dt = ut(function(e) {
                    e.id = j + 0, e.innerHTML = "<a name='" + j + "'></a><div name='" + j + "'></div>", O.insertBefore(e, O.firstChild);
                    var t = M.getElementsByName && M.getElementsByName(j).length === 2 + M.getElementsByName(j + 0).length;
                    return y = !M.getElementById(j), O.removeChild(e), t
                });
            try {
                H.call(O.childNodes, 0)[0].nodeType
            } catch (ht) {
                H = function(e) {
                    for (var t, n = []; t = this[e]; e++) n.push(t);
                    return n
                }
            }
            n.matches = function(e, t) {
                return n(e, null, null, t)
            }, n.matchesSelector = function(e, t) {
                return n(t, null, null, [e]).length > 0
            }, x = n.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += x(t);
                return n
            }, w = n.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, T = n.contains = O.contains ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!(r && 1 === r.nodeType && n.contains && n.contains(r))
            } : O.compareDocumentPosition ? function(e, t) {
                return t && !!(16 & e.compareDocumentPosition(t))
            } : function(e, t) {
                for (; t = t.parentNode;)
                    if (t === e) return !0;
                return !1
            }, n.attr = function(e, t) {
                var n, r = w(e);
                return r || (t = t.toLowerCase()), (n = b.attrHandle[t]) ? n(e) : r || ft ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
            }, b = n.selectors = {
                cacheLength: 50,
                createPseudo: P,
                match: st,
                attrHandle: ct ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                },
                find: {
                    ID: y ? function(e, t, n) {
                        if (typeof t.getElementById !== A && !n) {
                            var r = t.getElementById(e);
                            return r && r.parentNode ? [r] : []
                        }
                    } : function(e, n, r) {
                        if (typeof n.getElementById !== A && !r) {
                            var i = n.getElementById(e);
                            return i ? i.id === e || typeof i.getAttributeNode !== A && i.getAttributeNode("id").value === e ? [i] : t : []
                        }
                    },
                    TAG: lt ? function(e, t) {
                        return typeof t.getElementsByTagName !== A ? t.getElementsByTagName(e) : void 0
                    } : function(e, t) {
                        var n = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (var r, i = [], o = 0; r = n[o]; o++) 1 === r.nodeType && i.push(r);
                            return i
                        }
                        return n
                    },
                    NAME: dt && function(e, t) {
                        return typeof t.getElementsByName !== A ? t.getElementsByName(name) : void 0
                    },
                    CLASS: pt && function(e, t, n) {
                        return typeof t.getElementsByClassName === A || n ? void 0 : t.getElementsByClassName(e)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(at, ""), e[3] = (e[4] || e[5] || "").replace(at, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n;
                        return st.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (n = s(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3))
                    }
                },
                filter: {
                    ID: y ? function(e) {
                        return e = e.replace(at, ""),
                            function(t) {
                                return t.getAttribute("id") === e
                            }
                    } : function(e) {
                        return e = e.replace(at, ""),
                            function(t) {
                                var n = typeof t.getAttributeNode !== A && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                    },
                    TAG: function(e) {
                        return "*" === e ? function() {
                            return !0
                        } : (e = e.replace(at, "").toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function(e) {
                        var t = W[j][e];
                        return t || (t = W(e, new RegExp("(^|" + z + ")" + e + "(" + z + "|$)"))),
                            function(e) {
                                return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                            }
                    },
                    ATTR: function(e, t, r) {
                        return function(i) {
                            var o = n.attr(i, e);
                            return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.substr(o.length - r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.substr(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r) {
                        return "nth" === e ? function(e) {
                            var t, i, o = e.parentNode;
                            if (1 === n && 0 === r) return !0;
                            if (o)
                                for (i = 0, t = o.firstChild; t && (1 !== t.nodeType || (i++, e !== t)); t = t.nextSibling);
                            return i -= r, i === n || i % n === 0 && i / n >= 0
                        } : function(t) {
                            var n = t;
                            switch (e) {
                                case "only":
                                case "first":
                                    for (; n = n.previousSibling;)
                                        if (1 === n.nodeType) return !1;
                                    if ("first" === e) return !0;
                                    n = t;
                                case "last":
                                    for (; n = n.nextSibling;)
                                        if (1 === n.nodeType) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var r, i = b.pseudos[e] || b.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                        return i[j] ? i(t) : i.length > 1 ? (r = [e, e, "", t], b.setFilters.hasOwnProperty(e.toLowerCase()) ? P(function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) r = B.call(e, o[a]), e[r] = !(n[r] = o[a])
                        }) : function(e) {
                            return i(e, 0, r)
                        }) : i
                    }
                },
                pseudos: {
                    not: P(function(e) {
                        var t = [],
                            n = [],
                            r = E(e.replace(V, "$1"));
                        return r[j] ? P(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: P(function(e) {
                        return function(t) {
                            return n(e, t).length > 0
                        }
                    }),
                    contains: P(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                        }
                    }),
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    empty: function(e) {
                        var t;
                        for (e = e.firstChild; e;) {
                            if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                            e = e.nextSibling
                        }
                        return !0
                    },
                    header: function(e) {
                        return it.test(e.nodeName)
                    },
                    text: function(e) {
                        var t, n;
                        return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
                    },
                    radio: r("radio"),
                    checkbox: r("checkbox"),
                    file: r("file"),
                    password: r("password"),
                    image: r("image"),
                    submit: i("submit"),
                    reset: i("reset"),
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    input: function(e) {
                        return ot.test(e.nodeName)
                    },
                    focus: function(e) {
                        var t = e.ownerDocument;
                        return !(e !== t.activeElement || t.hasFocus && !t.hasFocus() || !e.type && !e.href)
                    },
                    active: function(e) {
                        return e === e.ownerDocument.activeElement
                    },
                    first: o(function() {
                        return [0]
                    }),
                    last: o(function(e, t) {
                        return [t - 1]
                    }),
                    eq: o(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: o(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: o(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: o(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: o(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, k = O.compareDocumentPosition ? function(e, t) {
                return e === t ? (N = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
            } : function(e, t) {
                if (e === t) return N = !0, 0;
                if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                var n, r, i = [],
                    o = [],
                    s = e.parentNode,
                    u = t.parentNode,
                    l = s;
                if (s === u) return a(e, t);
                if (!s) return -1;
                if (!u) return 1;
                for (; l;) i.unshift(l), l = l.parentNode;
                for (l = u; l;) o.unshift(l), l = l.parentNode;
                n = i.length, r = o.length;
                for (var c = 0; n > c && r > c; c++)
                    if (i[c] !== o[c]) return a(i[c], o[c]);
                return c === n ? a(e, o[c], -1) : a(i[c], t, 1)
            }, [0, 0].sort(k), C = !N, n.uniqueSort = function(e) {
                var t, n = 1;
                if (N = C, e.sort(k), N)
                    for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
                return e
            }, n.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, E = n.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = $[j][e];
                if (!o) {
                    for (t || (t = s(e)), n = t.length; n--;) o = p(t[n]), o[j] ? r.push(o) : i.push(o);
                    o = $(e, d(i, r))
                }
                return o
            }, M.querySelectorAll && ! function() {
                var e, t = g,
                    r = /'|\\/g,
                    i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    o = [":focus"],
                    a = [":active", ":focus"],
                    u = O.matchesSelector || O.mozMatchesSelector || O.webkitMatchesSelector || O.oMatchesSelector || O.msMatchesSelector;
                ut(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + z + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked")
                }), ut(function(e) {
                    e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + z + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
                }), o = new RegExp(o.join("|")), g = function(e, n, i, a, u) {
                    if (!(a || u || o && o.test(e))) {
                        var l, c, f = !0,
                            p = j,
                            d = n,
                            h = 9 === n.nodeType && e;
                        if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                            for (l = s(e), (f = n.getAttribute("id")) ? p = f.replace(r, "\\$&") : n.setAttribute("id", p), p = "[id='" + p + "'] ", c = l.length; c--;) l[c] = p + l[c].join("");
                            d = rt.test(e) && n.parentNode || n, h = l.join(",")
                        }
                        if (h) try {
                            return F.apply(i, H.call(d.querySelectorAll(h), 0)), i
                        } catch (g) {} finally {
                            f || n.removeAttribute("id")
                        }
                    }
                    return t(e, n, i, a, u)
                }, u && (ut(function(t) {
                    e = u.call(t, "div");
                    try {
                        u.call(t, "[test!='']:sizzle"), a.push("!=", Y)
                    } catch (n) {}
                }), a = new RegExp(a.join("|")), n.matchesSelector = function(t, r) {
                    if (r = r.replace(i, "='$1']"), !(w(t) || a.test(r) || o && o.test(r))) try {
                        var s = u.call(t, r);
                        if (s || e || t.document && 11 !== t.document.nodeType) return s
                    } catch (l) {}
                    return n(r, null, null, [t]).length > 0
                })
            }(), b.pseudos.nth = b.pseudos.eq, b.filters = m.prototype = b.pseudos, b.setFilters = new m, n.attr = K.attr, K.find = n, K.expr = n.selectors, K.expr[":"] = K.expr.pseudos, K.unique = n.uniqueSort, K.text = n.getText, K.isXMLDoc = n.isXML, K.contains = n.contains
        }(e);
    var Lt = /Until$/,
        _t = /^(?:parents|prev(?:Until|All))/,
        Ft = /^.[^:#\[\.,]*$/,
        Ht = K.expr.match.needsContext,
        Bt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    K.fn.extend({
        find: function(e) {
            var t, n, r, i, o, a, s = this;
            if ("string" != typeof e) return K(e).filter(function() {
                for (t = 0, n = s.length; n > t; t++)
                    if (K.contains(s[t], this)) return !0
            });
            for (a = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++)
                if (r = a.length, K.find(e, this[t], a), t > 0)
                    for (i = r; i < a.length; i++)
                        for (o = 0; r > o; o++)
                            if (a[o] === a[i]) {
                                a.splice(i--, 1);
                                break
                            }
            return a
        },
        has: function(e) {
            var t, n = K(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (K.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(l(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(l(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? Ht.test(e) ? K(e, this.context).index(this[0]) >= 0 : K.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = Ht.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (a ? a.index(n) > -1 : K.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return o = o.length > 1 ? K.unique(o) : o, this.pushStack(o, "closest", e)
        },
        index: function(e) {
            return e ? "string" == typeof e ? K.inArray(this[0], K(e)) : K.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? K(e, t) : K.makeArray(e && e.nodeType ? [e] : e),
                r = K.merge(this.get(), n);
            return this.pushStack(s(n[0]) || s(r[0]) ? r : K.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), K.fn.andSelf = K.fn.addBack, K.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return K.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return K.dir(e, "parentNode", n)
        },
        next: function(e) {
            return u(e, "nextSibling")
        },
        prev: function(e) {
            return u(e, "previousSibling")
        },
        nextAll: function(e) {
            return K.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return K.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return K.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return K.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return K.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return K.sibling(e.firstChild)
        },
        contents: function(e) {
            return K.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : K.merge([], e.childNodes)
        }
    }, function(e, t) {
        K.fn[e] = function(n, r) {
            var i = K.map(this, t, n);
            return Lt.test(e) || (r = n), r && "string" == typeof r && (i = K.filter(r, i)), i = this.length > 1 && !Bt[e] ? K.unique(i) : i, this.length > 1 && _t.test(e) && (i = i.reverse()), this.pushStack(i, e, Q.call(arguments).join(","))
        }
    }), K.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? K.find.matchesSelector(t[0], e) ? [t[0]] : [] : K.find.matches(e, t)
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !K(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Pt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Rt = / jQuery\d+="(?:null|\d+)"/g,
        Wt = /^\s+/,
        It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        $t = /<([\w:]+)/,
        zt = /<tbody/i,
        Xt = /<|&#?\w+;/,
        Ut = /<(?:script|style|link)/i,
        Qt = /<(?:script|object|embed|option|style)/i,
        Gt = new RegExp("<(?:" + Pt + ")[\\s/>]", "i"),
        Yt = /^(?:checkbox|radio)$/,
        Jt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Vt = /\/(java|ecma)script/i,
        Kt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Zt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        en = c(W),
        tn = en.appendChild(W.createElement("div"));
    Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, K.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), K.fn.extend({
            text: function(e) {
                return K.access(this, function(e) {
                    return e === t ? K.text(this) : this.empty().append((this[0] && this[0].ownerDocument || W).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (K.isFunction(e)) return this.each(function(t) {
                    K(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = K(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return this.each(K.isFunction(e) ? function(t) {
                    K(this).wrapInner(e.call(this, t))
                } : function() {
                    var t = K(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = K.isFunction(e);
                return this.each(function(n) {
                    K(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                if (!s(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
                if (arguments.length) {
                    var e = K.clean(arguments);
                    return this.pushStack(K.merge(e, this), "before", this.selector)
                }
            },
            after: function() {
                if (!s(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
                if (arguments.length) {
                    var e = K.clean(arguments);
                    return this.pushStack(K.merge(this, e), "after", this.selector)
                }
            },
            remove: function(e, t) {
                for (var n, r = 0; null != (n = this[r]); r++)(!e || K.filter(e, [n]).length) && (t || 1 !== n.nodeType || (K.cleanData(n.getElementsByTagName("*")), K.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    for (1 === e.nodeType && K.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return K.clone(this, e, t)
                })
            },
            html: function(e) {
                return K.access(this, function(e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Rt, "") : t;
                    if (!("string" != typeof e || Ut.test(e) || !K.support.htmlSerialize && Gt.test(e) || !K.support.leadingWhitespace && Wt.test(e) || Zt[($t.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(It, "<$1></$2>");
                        try {
                            for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                return s(this[0]) ? this.length ? this.pushStack(K(K.isFunction(e) ? e() : e), "replaceWith", e) : this : K.isFunction(e) ? this.each(function(t) {
                    var n = K(this),
                        r = n.html();
                    n.replaceWith(e.call(this, t, r))
                }) : ("string" != typeof e && (e = K(e).detach()), this.each(function() {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    K(this).remove(), t ? K(t).before(e) : K(n).append(e)
                }))
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, r) {
                e = [].concat.apply([], e);
                var i, o, a, s, u = 0,
                    l = e[0],
                    c = [],
                    p = this.length;
                if (!K.support.checkClone && p > 1 && "string" == typeof l && Jt.test(l)) return this.each(function() {
                    K(this).domManip(e, n, r)
                });
                if (K.isFunction(l)) return this.each(function(i) {
                    var o = K(this);
                    e[0] = l.call(this, i, n ? o.html() : t), o.domManip(e, n, r)
                });
                if (this[0]) {
                    if (i = K.buildFragment(e, this, c), a = i.fragment, o = a.firstChild, 1 === a.childNodes.length && (a = o), o)
                        for (n = n && K.nodeName(o, "tr"), s = i.cacheable || p - 1; p > u; u++) r.call(n && K.nodeName(this[u], "table") ? f(this[u], "tbody") : this[u], u === s ? a : K.clone(a, !0, !0));
                    a = o = null, c.length && K.each(c, function(e, t) {
                        t.src ? K.ajax ? K.ajax({
                            url: t.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : K.error("no ajax") : K.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Kt, "")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), K.buildFragment = function(e, n, r) {
            var i, o, a, s = e[0];
            return n = n || W, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, !(1 === e.length && "string" == typeof s && s.length < 512 && n === W && "<" === s.charAt(0)) || Qt.test(s) || !K.support.checkClone && Jt.test(s) || !K.support.html5Clone && Gt.test(s) || (o = !0, i = K.fragments[s], a = i !== t), i || (i = n.createDocumentFragment(), K.clean(e, n, i, r), o && (K.fragments[s] = a && i)), {
                fragment: i,
                cacheable: o
            }
        }, K.fragments = {}, K.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            K.fn[e] = function(n) {
                var r, i = 0,
                    o = [],
                    a = K(n),
                    s = a.length,
                    u = 1 === this.length && this[0].parentNode;
                if ((null == u || u && 11 === u.nodeType && 1 === u.childNodes.length) && 1 === s) return a[t](this[0]), this;
                for (; s > i; i++) r = (i > 0 ? this.clone(!0) : this).get(), K(a[i])[t](r), o = o.concat(r);
                return this.pushStack(o, e, a.selector)
            }
        }), K.extend({
            clone: function(e, t, n) {
                var r, i, o, a;
                if (K.support.html5Clone || K.isXMLDoc(e) || !Gt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(a = tn.firstChild)), !(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
                    for (d(e, a), r = h(e), i = h(a), o = 0; r[o]; ++o) i[o] && d(r[o], i[o]);
                if (t && (p(e, a), n))
                    for (r = h(e), i = h(a), o = 0; r[o]; ++o) p(r[o], i[o]);
                return r = i = null, a
            },
            clean: function(e, t, n, r) {
                var i, o, a, s, u, l, f, p, d, h, m, v = t === W && en,
                    y = [];
                for (t && "undefined" != typeof t.createDocumentFragment || (t = W), i = 0; null != (a = e[i]); i++)
                    if ("number" == typeof a && (a += ""), a) {
                        if ("string" == typeof a)
                            if (Xt.test(a)) {
                                for (v = v || c(t), f = t.createElement("div"), v.appendChild(f), a = a.replace(It, "<$1></$2>"), s = ($t.exec(a) || ["", ""])[1].toLowerCase(), u = Zt[s] || Zt._default, l = u[0], f.innerHTML = u[1] + a + u[2]; l--;) f = f.lastChild;
                                if (!K.support.tbody)
                                    for (p = zt.test(a), d = "table" !== s || p ? "<table>" !== u[1] || p ? [] : f.childNodes : f.firstChild && f.firstChild.childNodes, o = d.length - 1; o >= 0; --o) K.nodeName(d[o], "tbody") && !d[o].childNodes.length && d[o].parentNode.removeChild(d[o]);
                                !K.support.leadingWhitespace && Wt.test(a) && f.insertBefore(t.createTextNode(Wt.exec(a)[0]), f.firstChild), a = f.childNodes, f.parentNode.removeChild(f)
                            } else a = t.createTextNode(a);
                        a.nodeType ? y.push(a) : K.merge(y, a)
                    }
                if (f && (a = f = v = null), !K.support.appendChecked)
                    for (i = 0; null != (a = y[i]); i++) K.nodeName(a, "input") ? g(a) : "undefined" != typeof a.getElementsByTagName && K.grep(a.getElementsByTagName("input"), g);
                if (n)
                    for (h = function(e) {
                            return !e.type || Vt.test(e.type) ? r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0
                        }, i = 0; null != (a = y[i]); i++) K.nodeName(a, "script") && h(a) || (n.appendChild(a), "undefined" != typeof a.getElementsByTagName && (m = K.grep(K.merge([], a.getElementsByTagName("script")), h), y.splice.apply(y, [i + 1, 0].concat(m)), i += m.length));
                return y
            },
            cleanData: function(e, t) {
                for (var n, r, i, o, a = 0, s = K.expando, u = K.cache, l = K.support.deleteExpando, c = K.event.special; null != (i = e[a]); a++)
                    if ((t || K.acceptData(i)) && (r = i[s], n = r && u[r])) {
                        if (n.events)
                            for (o in n.events) c[o] ? K.event.remove(i, o) : K.removeEvent(i, o, n.handle);
                        u[r] && (delete u[r], l ? delete i[s] : i.removeAttribute ? i.removeAttribute(s) : i[s] = null, K.deletedIds.push(r))
                    }
            }
        }),
        function() {
            var e, t;
            K.uaMatch = function(e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }, e = K.uaMatch($.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), K.browser = t, K.sub = function() {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }
                K.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, r) {
                    return r && r instanceof K && !(r instanceof e) && (r = e(r)), K.fn.init.call(this, n, r, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(W);
                return e
            }
        }();
    var nn, rn, on, an = /alpha\([^)]*\)/i,
        sn = /opacity=([^)]*)/,
        un = /^(top|right|bottom|left)$/,
        ln = /^(none|table(?!-c[ea]).+)/,
        cn = /^margin/,
        fn = new RegExp("^(" + Z + ")(.*)$", "i"),
        pn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        dn = new RegExp("^([-+])=(" + Z + ")", "i"),
        hn = {},
        gn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        mn = {
            letterSpacing: 0,
            fontWeight: 400
        },
        vn = ["Top", "Right", "Bottom", "Left"],
        yn = ["Webkit", "O", "Moz", "ms"],
        bn = K.fn.toggle;
    K.fn.extend({
        css: function(e, n) {
            return K.access(this, function(e, n, r) {
                return r !== t ? K.style(e, n, r) : K.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(e, t) {
            var n = "boolean" == typeof e;
            return K.isFunction(e) && K.isFunction(t) ? bn.apply(this, arguments) : this.each(function() {
                (n ? e : v(this)) ? K(this).show(): K(this).hide()
            })
        }
    }), K.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = nn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": K.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = K.camelCase(n),
                    l = e.style;
                if (n = K.cssProps[u] || (K.cssProps[u] = m(l, u)), s = K.cssHooks[n] || K.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = dn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(K.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || K.cssNumber[u] || (r += "px"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = K.camelCase(n);
            return n = K.cssProps[u] || (K.cssProps[u] = m(e.style, u)), s = K.cssHooks[n] || K.cssHooks[u], s && "get" in s && (o = s.get(e, !0, i)), o === t && (o = nn(e, n)), "normal" === o && n in mn && (o = mn[n]), r || i !== t ? (a = parseFloat(o), r || K.isNumeric(a) ? a || 0 : o) : o
        },
        swap: function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = o[i];
            return r
        }
    }), e.getComputedStyle ? nn = function(t, n) {
        var r, i, o, a, s = e.getComputedStyle(t, null),
            u = t.style;
        return s && (r = s[n], "" !== r || K.contains(t.ownerDocument, t) || (r = K.style(t, n)), pn.test(r) && cn.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = r, r = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), r
    } : W.documentElement.currentStyle && (nn = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
            o = e.style;
        return null == i && o && o[t] && (i = o[t]), pn.test(i) && !un.test(t) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : i, i = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), "" === i ? "auto" : i
    }), K.each(["height", "width"], function(e, t) {
        K.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && ln.test(nn(e, "display")) ? K.swap(e, gn, function() {
                    return w(e, t, r)
                }) : w(e, t, r) : void 0
            },
            set: function(e, n, r) {
                return b(e, n, r ? x(e, t, r, K.support.boxSizing && "border-box" === K.css(e, "boxSizing")) : 0)
            }
        }
    }), K.support.opacity || (K.cssHooks.opacity = {
        get: function(e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = K.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === K.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i)
        }
    }), K(function() {
        K.support.reliableMarginRight || (K.cssHooks.marginRight = {
            get: function(e, t) {
                return K.swap(e, {
                    display: "inline-block"
                }, function() {
                    return t ? nn(e, "marginRight") : void 0
                })
            }
        }), !K.support.pixelPosition && K.fn.position && K.each(["top", "left"], function(e, t) {
            K.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var r = nn(e, t);
                        return pn.test(r) ? K(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }), K.expr && K.expr.filters && (K.expr.filters.hidden = function(e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !K.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display"))
    }, K.expr.filters.visible = function(e) {
        return !K.expr.filters.hidden(e)
    }), K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        K.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = "string" == typeof n ? n.split(" ") : [n],
                    o = {};
                for (r = 0; 4 > r; r++) o[e + vn[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, cn.test(e) || (K.cssHooks[e + t].set = b)
    });
    var xn = /%20/g,
        wn = /\[\]$/,
        Tn = /\r?\n/g,
        En = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        kn = /^(?:select|textarea)/i;
    K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? K.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || kn.test(this.nodeName) || En.test(this.type))
            }).map(function(e, t) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Tn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Tn, "\r\n")
                }
            }).get()
        }
    }), K.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = K.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) E(r, e[r], n, o);
        return i.join("&").replace(xn, "+")
    };
    var Nn, Sn, Cn = /#.*$/,
        An = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        jn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        qn = /^(?:GET|HEAD)$/,
        Mn = /^\/\//,
        On = /\?/,
        Dn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Ln = /([?&])_=[^&]*/,
        _n = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Fn = K.fn.load,
        Hn = {},
        Bn = {},
        Pn = ["*/"] + ["*"];
    try {
        Sn = I.href
    } catch (Rn) {
        Sn = W.createElement("a"), Sn.href = "", Sn = Sn.href
    }
    Nn = _n.exec(Sn.toLowerCase()) || [], K.fn.load = function(e, n, r) {
        if ("string" != typeof e && Fn) return Fn.apply(this, arguments);
        if (!this.length) return this;
        var i, o, a, s = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), K.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), K.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                r && s.each(r, a || [e.responseText, t, e])
            }
        }).done(function(e) {
            a = arguments, s.html(i ? K("<div>").append(e.replace(Dn, "")).find(i) : e)
        }), this
    }, K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        K.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), K.each(["get", "post"], function(e, n) {
        K[n] = function(e, r, i, o) {
            return K.isFunction(r) && (o = o || i, i = r, r = t), K.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: o
            })
        }
    }), K.extend({
        getScript: function(e, n) {
            return K.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return K.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? S(e, K.ajaxSettings) : (t = e, e = K.ajaxSettings), S(e, t), e
        },
        ajaxSettings: {
            url: Sn,
            isLocal: jn.test(Nn[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Pn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: k(Hn),
        ajaxTransport: k(Bn),
        ajax: function(e, n) {
            function r(e, n, r, a) {
                var l, f, y, b, w, E = n;
                2 !== x && (x = 2, u && clearTimeout(u), s = t, o = a || "", T.readyState = e > 0 ? 4 : 0, r && (b = C(p, T, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (K.lastModified[i] = w), w = T.getResponseHeader("Etag"), w && (K.etag[i] = w)), 304 === e ? (E = "notmodified", l = !0) : (l = A(p, b), E = l.state, f = l.data, y = l.error, l = !y)) : (y = E, (!E || e) && (E = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || E) + "", l ? g.resolveWith(d, [f, E, T]) : g.rejectWith(d, [T, E, y]), T.statusCode(v), v = t, c && h.trigger("ajax" + (l ? "Success" : "Error"), [T, p, l ? f : y]), m.fireWith(d, [T, E]), c && (h.trigger("ajaxComplete", [T, p]), --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, l, c, f, p = K.ajaxSetup({}, n),
                d = p.context || p,
                h = d !== p && (d.nodeType || d instanceof K) ? K(d) : K.event,
                g = K.Deferred(),
                m = K.Callbacks("once memory"),
                v = p.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!x) {
                            var n = e.toLowerCase();
                            e = b[n] = b[n] || e, y[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (2 === x) {
                            if (!a)
                                for (a = {}; n = An.exec(o);) a[n[1].toLowerCase()] = n[2];
                            n = a[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return x || (p.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || w, s && s.abort(e), r(0, e), this
                    }
                };
            if (g.promise(T), T.success = T.done, T.error = T.fail, T.complete = m.add, T.statusCode = function(e) {
                    if (e) {
                        var t;
                        if (2 > x)
                            for (t in e) v[t] = [v[t], e[t]];
                        else t = e[T.status], T.always(t)
                    }
                    return this
                }, p.url = ((e || p.url) + "").replace(Cn, "").replace(Mn, Nn[1] + "//"), p.dataTypes = K.trim(p.dataType || "*").toLowerCase().split(tt), null == p.crossDomain && (l = _n.exec(p.url.toLowerCase()) || !1, p.crossDomain = l && l.join(":") + (l[3] ? "" : "http:" === l[1] ? 80 : 443) !== Nn.join(":") + (Nn[3] ? "" : "http:" === Nn[1] ? 80 : 443)), p.data && p.processData && "string" != typeof p.data && (p.data = K.param(p.data, p.traditional)), N(Hn, p, n, T), 2 === x) return T;
            if (c = p.global, p.type = p.type.toUpperCase(), p.hasContent = !qn.test(p.type), c && 0 === K.active++ && K.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += (On.test(p.url) ? "&" : "?") + p.data, delete p.data), i = p.url, p.cache === !1)) {
                var E = K.now(),
                    k = p.url.replace(Ln, "$1_=" + E);
                p.url = k + (k === p.url ? (On.test(p.url) ? "&" : "?") + "_=" + E : "")
            }(p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), p.ifModified && (i = i || p.url, K.lastModified[i] && T.setRequestHeader("If-Modified-Since", K.lastModified[i]), K.etag[i] && T.setRequestHeader("If-None-Match", K.etag[i])), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Pn + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === x)) return T.abort();
            w = "abort";
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[f](p[f]);
            if (s = N(Bn, p, n, T)) {
                T.readyState = 1, c && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (u = setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, s.send(y, r)
                } catch (S) {
                    if (!(2 > x)) throw S;
                    r(-1, S)
                }
            } else r(-1, "No Transport");
            return T
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Wn = [],
        In = /\?/,
        $n = /(=)\?(?=&|$)|\?\?/,
        zn = K.now();
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Wn.pop() || K.expando + "_" + zn++;
            return this[e] = !0, e
        }
    }), K.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, u = n.data,
            l = n.url,
            c = n.jsonp !== !1,
            f = c && $n.test(l),
            p = c && !f && "string" == typeof u && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && $n.test(u);
        return "jsonp" === n.dataTypes[0] || f || p ? (o = n.jsonpCallback = K.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a = e[o], f ? n.url = l.replace($n, "$1" + o) : p ? n.data = u.replace($n, "$1" + o) : c && (n.url += (In.test(l) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || K.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Wn.push(o)), s && K.isFunction(a) && a(s[0]), s = a = t
        }), "script") : void 0
    }), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return K.globalEval(e), e
            }
        }
    }), K.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), K.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = W.head || W.getElementsByTagName("head")[0] || W.documentElement;
            return {
                send: function(i, o) {
                    n = W.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Xn, Un = e.ActiveXObject ? function() {
            for (var e in Xn) Xn[e](0, 1)
        } : !1,
        Qn = 0;
    K.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && j() || q()
        } : j,
        function(e) {
            K.extend(K.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }
        
    var Gn, Yn, Jn = /^(?:toggle|show|hide)$/,
        Vn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
        Kn = /queueHooks$/,
        Zn = [_],
        er = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    o = Vn.exec(t),
                    a = i.cur(),
                    s = +a || 0,
                    u = 1,
                    l = 20;
                if (o) {
                    if (n = +o[2], r = o[3] || (K.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                        s = K.css(i.elem, e, !0) || n || 1;
                        do u = u || ".5", s /= u, K.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
                    }
                    i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                }
                return i
            }]
        };
    K.Animation = K.extend(D, {
        tweener: function(e, t) {
            K.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], er[n] = er[n] || [], er[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Zn.unshift(e) : Zn.push(e)
        }
    }), K.Tween = F, F.prototype = {
        constructor: F,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (K.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = F.propHooks[this.prop];
            return this.pos = t = this.options.duration ? K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, K.each(["toggle", "show", "hide"], function(e, t) {
        var n = K.fn[t];
        K.fn[t] = function(r, i, o) {
            return null == r || "boolean" == typeof r || !e && K.isFunction(r) && K.isFunction(i) ? n.apply(this, arguments) : this.animate(H(t, !0), r, i, o)
        }
    }), K.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(v).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = K.isEmptyObject(e),
                o = K.speed(t, n, r),
                a = function() {
                    var t = D(this, K.extend({}, e), o);
                    i && t.stop(!0)
                };
            return i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = K.timers,
                    a = K._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Kn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && K.dequeue(this, e)
            })
        }
    }), K.each({
        slideDown: H("show"),
        slideUp: H("hide"),
        slideToggle: H("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        K.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), K.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? K.extend({}, e) : {
            complete: n || !n && t || K.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !K.isFunction(t) && t
        };
        return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            K.isFunction(r.old) && r.old.call(this), r.queue && K.dequeue(this, r.queue)
        }, r
    }, K.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, K.timers = [], K.fx = F.prototype.init, K.fx.tick = function() {
        for (var e, t = K.timers, n = 0; n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || K.fx.stop()
    }, K.fx.timer = function(e) {
        e() && K.timers.push(e) && !Yn && (Yn = setInterval(K.fx.tick, K.fx.interval))
    }, K.fx.interval = 13, K.fx.stop = function() {
        clearInterval(Yn), Yn = null
    }, K.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, K.fx.step = {}, K.expr && K.expr.filters && (K.expr.filters.animated = function(e) {
        return K.grep(K.timers, function(t) {
            return e === t.elem
        }).length
    });
    var tr = /^(?:body|html)$/i;
    K.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            K.offset.setOffset(this, e, t)
        });
        var n, r, i, o, a, s, u, l = {
                top: 0,
                left: 0
            },
            c = this[0],
            f = c && c.ownerDocument;
        if (f) return (r = f.body) === c ? K.offset.bodyOffset(c) : (n = f.documentElement, K.contains(n, c) ? ("undefined" != typeof c.getBoundingClientRect && (l = c.getBoundingClientRect()), i = B(f), o = n.clientTop || r.clientTop || 0, a = n.clientLeft || r.clientLeft || 0, s = i.pageYOffset || n.scrollTop, u = i.pageXOffset || n.scrollLeft, {
            top: l.top + s - o,
            left: l.left + u - a
        }) : l)
    }, K.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return K.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(K.css(e, "marginTop")) || 0, n += parseFloat(K.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = K.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = K(e),
                s = a.offset(),
                u = K.css(e, "top"),
                l = K.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && K.inArray("auto", [u, l]) > -1,
                f = {},
                p = {};
            c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), K.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
        }
    }, K.fn.extend({
        position: function() {
            if (this[0]) {
                var e = this[0],
                    t = this.offsetParent(),
                    n = this.offset(),
                    r = tr.test(t[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : t.offset();
                return n.top -= parseFloat(K.css(e, "marginTop")) || 0, n.left -= parseFloat(K.css(e, "marginLeft")) || 0, r.top += parseFloat(K.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(K.css(t[0], "borderLeftWidth")) || 0, {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || W.body; e && !tr.test(e.nodeName) && "static" === K.css(e, "position");) e = e.offsetParent;
                return e || W.body
            })
        }
    }), K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        K.fn[e] = function(i) {
            return K.access(this, function(e, i, o) {
                var a = B(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(r ? K(a).scrollLeft() : o, r ? o : K(a).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), K.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        K.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            K.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return K.access(this, function(n, r, i) {
                    var o;
                    return K.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? K.css(n, r, i, s) : K.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = K, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return K
    })
}(window),
function(e) {
    var t = {};
    ! function(e, t) {
        function n(e, t, n) {
            var r;
            return t && "object" == typeof t && (null != t[e] ? r = t[e] : n && t.get && "function" == typeof t.get && (r = t.get(e))), r
        }

        function r(e, t, n, r) {
            function i() {}

            function o() {}
            i.prototype = e, o.prototype = e.subs;
            var a, s = new i;
            s.subs = new o, s.subsText = {}, s.ib();
            for (a in t) s.subs[a] = t[a], s.subsText[a] = r;
            for (a in n) s.partials[a] = n[a];
            return s
        }

        function i(e) {
            return String(null === e || void 0 === e ? "" : e)
        }

        function o(e) {
            return e = i(e), f.test(e) ? e.replace(a, "&amp;").replace(s, "&lt;").replace(u, "&gt;").replace(l, "&#39;").replace(c, "&quot;") : e
        }
        e.Template = function(e, t, n, r) {
            e = e || {}, this.r = e.code || this.r, this.c = n, this.options = r || {}, this.text = t || "", this.partials = e.partials || {}, this.subs = e.subs || {}, this.ib()
        }, e.Template.prototype = {
            r: function() {
                return ""
            },
            v: o,
            t: i,
            render: function(e, t, n) {
                return this.ri([e], t || {}, n)
            },
            ri: function(e, t, n) {
                return this.r(e, t, n)
            },
            ep: function(e, t) {
                var n = this.partials[e],
                    i = t[n.name];
                if (n.instance && n.base == i) return n.instance;
                if ("string" == typeof i) {
                    if (!this.c) throw new Error("No compiler available.");
                    i = this.c.compile(i, this.options)
                }
                return i ? (this.partials[e].base = i, n.subs && (void 0 === this.activeSub && (t.stackText = this.text), i = r(i, n.subs, n.partials, t.stackText || this.text)), this.partials[e].instance = i, i) : null
            },
            rp: function(e, t, n, r) {
                var i = this.ep(e, n);
                return i ? i.ri(t, n, r) : ""
            },
            rs: function(e, t, n) {
                var r = e[e.length - 1];
                if (!p(r)) return void n(e, t, this);
                for (var i = 0; i < r.length; i++) e.push(r[i]), n(e, t, this), e.pop()
            },
            s: function(e, t, n, r, i, o, a) {
                var s;
                return p(e) && 0 === e.length ? !1 : ("function" == typeof e && (e = this.ms(e, t, n, r, i, o, a)), s = !!e, !r && s && t && t.push("object" == typeof e ? e : t[t.length - 1]), s)
            },
            d: function(e, t, r, i) {
                var o, a = e.split("."),
                    s = this.f(a[0], t, r, i),
                    u = this.options.modelGet,
                    l = null;
                if ("." === e && p(t[t.length - 2])) s = t[t.length - 1];
                else
                    for (var c = 1; c < a.length; c++) o = n(a[c], s, u), null != o ? (l = s, s = o) : s = "";
                return i && !s ? !1 : (i || "function" != typeof s || (t.push(l), s = this.mv(s, t, r), t.pop()), s)
            },
            f: function(e, t, r, i) {
                for (var o = !1, a = null, s = !1, u = this.options.modelGet, l = t.length - 1; l >= 0; l--)
                    if (a = t[l], o = n(e, a, u), null != o) {
                        s = !0;
                        break
                    }
                return s ? (i || "function" != typeof o || (o = this.mv(o, t, r)), o) : i ? !1 : ""
            },
            ls: function(e, t, n, r, o) {
                var a = this.options.delimiters;
                return this.options.delimiters = o, this.b(this.ct(i(e.call(t, r)), t, n)), this.options.delimiters = a, !1
            },
            ct: function(e, t, n) {
                if (this.options.disableLambda) throw new Error("Lambda features disabled.");
                return this.c.compile(e, this.options).render(t, n)
            },
            b: t ? function(e) {
                this.buf.push(e)
            } : function(e) {
                this.buf += e
            },
            fl: t ? function() {
                var e = this.buf.join("");
                return this.buf = [], e
            } : function() {
                var e = this.buf;
                return this.buf = "", e
            },
            ib: function() {
                this.buf = t ? [] : ""
            },
            ms: function(e, t, n, r, i, o, a) {
                var s, u = t[t.length - 1],
                    l = e.call(u);
                return "function" == typeof l ? r ? !0 : (s = this.activeSub && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(l, u, n, s.substring(i, o), a)) : l
            },
            mv: function(e, t, n) {
                var r = t[t.length - 1],
                    o = e.call(r);
                return "function" == typeof o ? this.ct(i(o.call(r)), r, n) : o
            },
            sub: function(e, t, n, r) {
                var i = this.subs[e];
                i && (this.activeSub = e, i(t, n, this, r), this.activeSub = !1)
            }
        };
        var a = /&/g,
            s = /</g,
            u = />/g,
            l = /\'/g,
            c = /\"/g,
            f = /[&<>\"\']/,
            p = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
    }("undefined" != typeof exports ? exports : t),
    function(e) {
        function t(e) {
            "}" === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1))
        }

        function n(e) {
            return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, "")
        }

        function r(e, t, n) {
            if (t.charAt(n) != e.charAt(0)) return !1;
            for (var r = 1, i = e.length; i > r; r++)
                if (t.charAt(n + r) != e.charAt(r)) return !1;
            return !0
        }

        function i(t, n, r, s) {
            var u = [],
                l = null,
                c = null,
                f = null;
            for (c = r[r.length - 1]; t.length > 0;) {
                if (f = t.shift(), c && "<" == c.tag && !(f.tag in b)) throw new Error("Illegal content in < super tag.");
                if (e.tags[f.tag] <= e.tags.$ || o(f, s)) r.push(f), f.nodes = i(t, f.tag, r, s);
                else {
                    if ("/" == f.tag) {
                        if (0 === r.length) throw new Error("Closing tag without opener: /" + f.n);
                        if (l = r.pop(), f.n != l.n && !a(f.n, l.n, s)) throw new Error("Nesting error: " + l.n + " vs. " + f.n);
                        return l.end = f.i, u
                    }
                    "\n" == f.tag && (f.last = 0 == t.length || "\n" == t[0].tag)
                }
                u.push(f)
            }
            if (r.length > 0) throw new Error("missing closing tag: " + r.pop().n);
            return u
        }

        function o(e, t) {
            for (var n = 0, r = t.length; r > n; n++)
                if (t[n].o == e.n) return e.tag = "#", !0
        }

        function a(e, t, n) {
            for (var r = 0, i = n.length; i > r; r++)
                if (n[r].c == e && n[r].o == t) return !0
        }

        function s(e) {
            var t = [];
            for (var n in e) t.push('"' + l(n) + '": function(c,p,t,i) {' + e[n] + "}");
            return "{ " + t.join(",") + " }"
        }

        function u(e) {
            var t = [];
            for (var n in e.partials) t.push('"' + l(n) + '":{name:"' + l(e.partials[n].name) + '", ' + u(e.partials[n]) + "}");
            return "partials: {" + t.join(",") + "}, subs: " + s(e.subs)
        }

        function l(e) {
            return e.replace(y, "\\\\").replace(g, '\\"').replace(m, "\\n").replace(v, "\\r")
        }

        function c(e) {
            return ~e.indexOf(".") ? "d" : "f"
        }

        function f(e, t) {
            var n = "<" + (t.prefix || ""),
                r = n + e.n + x++;
            return t.partials[r] = {
                name: e.n,
                partials: {}
            }, t.code += 't.b(t.rp("' + l(r) + '",c,p,"' + (e.indent || "") + '"));', r
        }

        function p(e, t) {
            t.code += "t.b(t.t(t." + c(e.n) + '("' + l(e.n) + '",c,p,0)));'
        }

        function d(e) {
            return "t.b(" + e + ");"
        }
        var h = /\S/,
            g = /\"/g,
            m = /\n/g,
            v = /\r/g,
            y = /\\/g;
        e.tags = {
            "#": 1,
            "^": 2,
            "<": 3,
            $: 4,
            "/": 5,
            "!": 6,
            ">": 7,
            "=": 8,
            _v: 9,
            "{": 10,
            "&": 11,
            _t: 12
        }, e.scan = function(i, o) {
            function a() {
                y.length > 0 && (b.push({
                    tag: "_t",
                    text: new String(y)
                }), y = "")
            }

            function s() {
                for (var t = !0, n = T; n < b.length; n++)
                    if (t = e.tags[b[n].tag] < e.tags._v || "_t" == b[n].tag && null === b[n].text.match(h), !t) return !1;
                return t
            }

            function u(e, t) {
                if (a(), e && s())
                    for (var n, r = T; r < b.length; r++) b[r].text && ((n = b[r + 1]) && ">" == n.tag && (n.indent = b[r].text.toString()), b.splice(r, 1));
                else t || b.push({
                    tag: "\n"
                });
                x = !1, T = b.length
            }

            function l(e, t) {
                var r = "=" + k,
                    i = e.indexOf(r, t),
                    o = n(e.substring(e.indexOf("=", t) + 1, i)).split(" ");
                return E = o[0], k = o[o.length - 1], i + r.length - 1
            }
            var c = i.length,
                f = 0,
                p = 1,
                d = 2,
                g = f,
                m = null,
                v = null,
                y = "",
                b = [],
                x = !1,
                w = 0,
                T = 0,
                E = "{{",
                k = "}}";
            for (o && (o = o.split(" "), E = o[0], k = o[1]), w = 0; c > w; w++) g == f ? r(E, i, w) ? (--w, a(), g = p) : "\n" == i.charAt(w) ? u(x) : y += i.charAt(w) : g == p ? (w += E.length - 1, v = e.tags[i.charAt(w + 1)], m = v ? i.charAt(w + 1) : "_v", "=" == m ? (w = l(i, w), g = f) : (v && w++, g = d), x = w) : r(k, i, w) ? (b.push({
                tag: m,
                n: n(y),
                otag: E,
                ctag: k,
                i: "/" == m ? x - E.length : w + k.length
            }), y = "", w += k.length - 1, g = f, "{" == m && ("}}" == k ? w++ : t(b[b.length - 1]))) : y += i.charAt(w);
            return u(x, !0), b
        };
        var b = {
            _t: !0,
            "\n": !0,
            $: !0,
            "/": !0
        };
        e.stringify = function(t) {
            return "{code: function (c,p,i) { " + e.wrapMain(t.code) + " }," + u(t) + "}"
        };
        var x = 0;
        e.generate = function(t, n, r) {
            x = 0;
            var i = {
                code: "",
                subs: {},
                partials: {}
            };
            return e.walk(t, i), r.asString ? this.stringify(i, n, r) : this.makeTemplate(i, n, r)
        }, e.wrapMain = function(e) {
            return 'var t=this;t.b(i=i||"");' + e + "return t.fl();"
        }, e.template = e.Template, e.makeTemplate = function(e, t, n) {
            var r = this.makePartials(e);
            return r.code = new Function("c", "p", "i", this.wrapMain(e.code)), new this.template(r, t, this, n)
        }, e.makePartials = function(e) {
            var t, n = {
                subs: {},
                partials: e.partials,
                name: e.name
            };
            for (t in n.partials) n.partials[t] = this.makePartials(n.partials[t]);
            for (t in e.subs) n.subs[t] = new Function("c", "p", "t", "i", e.subs[t]);
            return n
        }, e.codegen = {
            "#": function(t, n) {
                n.code += "if(t.s(t." + c(t.n) + '("' + l(t.n) + '",c,p,1),c,p,0,' + t.i + "," + t.end + ',"' + t.otag + " " + t.ctag + '")){t.rs(c,p,function(c,p,t){', e.walk(t.nodes, n), n.code += "});c.pop();}"
            },
            "^": function(t, n) {
                n.code += "if(!t.s(t." + c(t.n) + '("' + l(t.n) + '",c,p,1),c,p,1,0,0,"")){', e.walk(t.nodes, n), n.code += "};"
            },
            ">": f,
            "<": function(t, n) {
                var r = {
                    partials: {},
                    code: "",
                    subs: {},
                    inPartial: !0
                };
                e.walk(t.nodes, r);
                var i = n.partials[f(t, n)];
                i.subs = r.subs, i.partials = r.partials
            },
            $: function(t, n) {
                var r = {
                    subs: {},
                    code: "",
                    partials: n.partials,
                    prefix: t.n
                };
                e.walk(t.nodes, r), n.subs[t.n] = r.code, n.inPartial || (n.code += 't.sub("' + l(t.n) + '",c,p,i);')
            },
            "\n": function(e, t) {
                t.code += d('"\\n"' + (e.last ? "" : " + i"))
            },
            _v: function(e, t) {
                t.code += "t.b(t.v(t." + c(e.n) + '("' + l(e.n) + '",c,p,0)));'
            },
            _t: function(e, t) {
                t.code += d('"' + l(e.text) + '"')
            },
            "{": p,
            "&": p
        }, e.walk = function(t, n) {
            for (var r, i = 0, o = t.length; o > i; i++) r = e.codegen[t[i].tag], r && r(t[i], n);
            return n
        }, e.parse = function(e, t, n) {
            return n = n || {}, i(e, "", [], n.sectionTags || [])
        }, e.cache = {}, e.cacheKey = function(e, t) {
            return [e, !!t.asString, !!t.disableLambda, t.delimiters, !!t.modelGet].join("||")
        }, e.compile = function(t, n) {
            n = n || {};
            var r = e.cacheKey(t, n),
                i = this.cache[r];
            return i ? i : (i = this.generate(this.parse(this.scan(t, n.delimiters), t, n), t, n), this.cache[r] = i)
        }
    }("undefined" != typeof exports ? exports : t);
    var n = "undefined" != typeof exports ? exports : t;
    e.hogan = e.Hogan = n, "function" == typeof define && define.amd && define("lib/hogan", n)
}(window),
function() {
    var e = this,
        t = e._,
        n = {},
        r = Array.prototype,
        i = Object.prototype,
        o = Function.prototype,
        a = r.push,
        s = r.slice,
        u = r.concat,
        l = i.toString,
        c = i.hasOwnProperty,
        f = r.forEach,
        p = r.map,
        d = r.reduce,
        h = r.reduceRight,
        g = r.filter,
        m = r.every,
        v = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        x = Array.isArray,
        w = Object.keys,
        T = o.bind,
        E = function(e) {
            return e instanceof E ? e : this instanceof E ? void(this._wrapped = e) : new E(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = E), exports._ = E) : e._ = E, E.VERSION = "1.4.4";
    var k = E.each = E.forEach = function(e, t, r) {
        if (null != e)
            if (f && e.forEach === f) e.forEach(t, r);
            else if (e.length === +e.length) {
            for (var i = 0, o = e.length; o > i; i++)
                if (t.call(r, e[i], i, e) === n) return
        } else
            for (var a in e)
                if (E.has(e, a) && t.call(r, e[a], a, e) === n) return
    };
    E.map = E.collect = function(e, t, n) {
        var r = [];
        return null == e ? r : p && e.map === p ? e.map(t, n) : (k(e, function(e, i, o) {
            r[r.length] = t.call(n, e, i, o)
        }), r)
    };
    var N = "Reduce of empty array with no initial value";
    E.reduce = E.foldl = E.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), d && e.reduce === d) return r && (t = E.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        if (k(e, function(e, o, a) {
                i ? n = t.call(r, n, e, o, a) : (n = e, i = !0)
            }), !i) throw new TypeError(N);
        return n
    }, E.reduceRight = E.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), h && e.reduceRight === h) return r && (t = E.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var o = e.length;
        if (o !== +o) {
            var a = E.keys(e);
            o = a.length
        }
        if (k(e, function(s, u, l) {
                u = a ? a[--o] : --o, i ? n = t.call(r, n, e[u], u, l) : (n = e[u], i = !0)
            }), !i) throw new TypeError(N);
        return n
    }, E.find = E.detect = function(e, t, n) {
        var r;
        return S(e, function(e, i, o) {
            return t.call(n, e, i, o) ? (r = e, !0) : void 0
        }), r
    }, E.filter = E.select = function(e, t, n) {
        var r = [];
        return null == e ? r : g && e.filter === g ? e.filter(t, n) : (k(e, function(e, i, o) {
            t.call(n, e, i, o) && (r[r.length] = e)
        }), r)
    }, E.reject = function(e, t, n) {
        return E.filter(e, function(e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, E.every = E.all = function(e, t, r) {
        t || (t = E.identity);
        var i = !0;
        return null == e ? i : m && e.every === m ? e.every(t, r) : (k(e, function(e, o, a) {
            return (i = i && t.call(r, e, o, a)) ? void 0 : n
        }), !!i)
    };
    var S = E.some = E.any = function(e, t, r) {
        t || (t = E.identity);
        var i = !1;
        return null == e ? i : v && e.some === v ? e.some(t, r) : (k(e, function(e, o, a) {
            return i || (i = t.call(r, e, o, a)) ? n : void 0
        }), !!i)
    };
    E.contains = E.include = function(e, t) {
        return null == e ? !1 : y && e.indexOf === y ? -1 != e.indexOf(t) : S(e, function(e) {
            return e === t
        })
    }, E.invoke = function(e, t) {
        var n = s.call(arguments, 2),
            r = E.isFunction(t);
        return E.map(e, function(e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, E.pluck = function(e, t) {
        return E.map(e, function(e) {
            return e[t]
        })
    }, E.where = function(e, t, n) {
        return E.isEmpty(t) ? n ? void 0 : [] : E[n ? "find" : "filter"](e, function(e) {
            for (var n in t)
                if (t[n] !== e[n]) return !1;
            return !0
        })
    }, E.findWhere = function(e, t) {
        return E.where(e, t, !0)
    }, E.max = function(e, t, n) {
        if (!t && E.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && E.isEmpty(e)) return -1 / 0;
        var r = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return k(e, function(e, i, o) {
            var a = t ? t.call(n, e, i, o) : e;
            a >= r.computed && (r = {
                value: e,
                computed: a
            })
        }), r.value
    }, E.min = function(e, t, n) {
        if (!t && E.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!t && E.isEmpty(e)) return 1 / 0;
        var r = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return k(e, function(e, i, o) {
            var a = t ? t.call(n, e, i, o) : e;
            a < r.computed && (r = {
                value: e,
                computed: a
            })
        }), r.value
    }, E.shuffle = function(e) {
        var t, n = 0,
            r = [];
        return k(e, function(e) {
            t = E.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    };
    var C = function(e) {
        return E.isFunction(e) ? e : function(t) {
            return t[e]
        }
    };
    E.sortBy = function(e, t, n) {
        var r = C(t);
        return E.pluck(E.map(e, function(e, t, i) {
            return {
                value: e,
                index: t,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function(e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1
            }
            return e.index < t.index ? -1 : 1
        }), "value")
    };
    var A = function(e, t, n, r) {
        var i = {},
            o = C(t || E.identity);
        return k(e, function(t, a) {
            var s = o.call(n, t, a, e);
            r(i, s, t)
        }), i
    };
    E.groupBy = function(e, t, n) {
        return A(e, t, n, function(e, t, n) {
            (E.has(e, t) ? e[t] : e[t] = []).push(n)
        })
    }, E.countBy = function(e, t, n) {
        return A(e, t, n, function(e, t) {
            E.has(e, t) || (e[t] = 0), e[t]++
        })
    }, E.sortedIndex = function(e, t, n, r) {
        n = null == n ? E.identity : C(n);
        for (var i = n.call(r, t), o = 0, a = e.length; a > o;) {
            var s = o + a >>> 1;
            n.call(r, e[s]) < i ? o = s + 1 : a = s
        }
        return o
    }, E.toArray = function(e) {
        return e ? E.isArray(e) ? s.call(e) : e.length === +e.length ? E.map(e, E.identity) : E.values(e) : []
    }, E.size = function(e) {
        return null == e ? 0 : e.length === +e.length ? e.length : E.keys(e).length
    }, E.first = E.head = E.take = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : s.call(e, 0, t)
    }, E.initial = function(e, t, n) {
        return s.call(e, 0, e.length - (null == t || n ? 1 : t))
    }, E.last = function(e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
    }, E.rest = E.tail = E.drop = function(e, t, n) {
        return s.call(e, null == t || n ? 1 : t)
    }, E.compact = function(e) {
        return E.filter(e, E.identity)
    };
    var j = function(e, t, n) {
        return k(e, function(e) {
            E.isArray(e) ? t ? a.apply(n, e) : j(e, t, n) : n.push(e)
        }), n
    };
    E.flatten = function(e, t) {
        return j(e, t, [])
    }, E.without = function(e) {
        return E.difference(e, s.call(arguments, 1))
    }, E.uniq = E.unique = function(e, t, n, r) {
        E.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? E.map(e, n, r) : e,
            o = [],
            a = [];
        return k(i, function(n, r) {
            (t ? r && a[a.length - 1] === n : E.contains(a, n)) || (a.push(n), o.push(e[r]))
        }), o
    }, E.union = function() {
        return E.uniq(u.apply(r, arguments))
    }, E.intersection = function(e) {
        var t = s.call(arguments, 1);
        return E.filter(E.uniq(e), function(e) {
            return E.every(t, function(t) {
                return E.indexOf(t, e) >= 0
            })
        })
    }, E.difference = function(e) {
        var t = u.apply(r, s.call(arguments, 1));
        return E.filter(e, function(e) {
            return !E.contains(t, e)
        })
    }, E.zip = function() {
        for (var e = s.call(arguments), t = E.max(E.pluck(e, "length")), n = new Array(t), r = 0; t > r; r++) n[r] = E.pluck(e, "" + r);
        return n
    }, E.object = function(e, t) {
        if (null == e) return {};
        for (var n = {}, r = 0, i = e.length; i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, E.indexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if ("number" != typeof n) return r = E.sortedIndex(e, t), e[r] === t ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; i > r; r++)
            if (e[r] === t) return r;
        return -1
    }, E.lastIndexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = null != n;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var i = r ? n : e.length; i--;)
            if (e[i] === t) return i;
        return -1
    }, E.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, o = new Array(r); r > i;) o[i++] = e, e += n;
        return o
    }, E.bind = function(e, t) {
        if (e.bind === T && T) return T.apply(e, s.call(arguments, 1));
        var n = s.call(arguments, 2);
        return function() {
            return e.apply(t, n.concat(s.call(arguments)))
        }
    }, E.partial = function(e) {
        var t = s.call(arguments, 1);
        return function() {
            return e.apply(this, t.concat(s.call(arguments)))
        }
    }, E.bindAll = function(e) {
        var t = s.call(arguments, 1);
        if (0 === t.length) throw new Error("bindAll must be passed function names");
        return k(t, function(t) {
            e[t] = E.bind(e[t], e)
        }), e
    }, E.memoize = function(e, t) {
        var n = {};
        return t || (t = E.identity),
            function() {
                var r = t.apply(this, arguments);
                return E.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
    }, E.delay = function(e, t) {
        var n = s.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, E.defer = function(e) {
        return E.delay.apply(E, [e, 1].concat(s.call(arguments, 1)))
    }, E.throttle = function(e, t) {
        var n, r, i, o, a = 0,
            s = function() {
                a = new Date, i = null, o = e.apply(n, r)
            };
        return function() {
            var u = new Date,
                l = t - (u - a);
            return n = this, r = arguments, 0 >= l ? (clearTimeout(i), i = null, a = u, o = e.apply(n, r)) : i || (i = setTimeout(s, l)), o
        }
    }, E.debounce = function(e, t, n) {
        var r, i;
        return function() {
            var o = this,
                a = arguments,
                s = function() {
                    r = null, n || (i = e.apply(o, a))
                },
                u = n && !r;
            return clearTimeout(r), r = setTimeout(s, t), u && (i = e.apply(o, a)), i
        }
    }, E.once = function(e) {
        var t, n = !1;
        return function() {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
        }
    }, E.wrap = function(e, t) {
        return function() {
            var n = [e];
            return a.apply(n, arguments), t.apply(this, n)
        }
    }, E.compose = function() {
        var e = arguments;
        return function() {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, E.after = function(e, t) {
        return 0 >= e ? t() : function() {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, E.keys = w || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) E.has(e, n) && (t[t.length] = n);
        return t
    }, E.values = function(e) {
        var t = [];
        for (var n in e) E.has(e, n) && t.push(e[n]);
        return t
    }, E.pairs = function(e) {
        var t = [];
        for (var n in e) E.has(e, n) && t.push([n, e[n]]);
        return t
    }, E.invert = function(e) {
        var t = {};
        for (var n in e) E.has(e, n) && (t[e[n]] = n);
        return t
    }, E.functions = E.methods = function(e) {
        var t = [];
        for (var n in e) E.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, E.extend = function(e) {
        return k(s.call(arguments, 1), function(t) {
            if (t)
                for (var n in t) e[n] = t[n]
        }), e
    }, E.pick = function(e) {
        var t = {},
            n = u.apply(r, s.call(arguments, 1));
        return k(n, function(n) {
            n in e && (t[n] = e[n])
        }), t
    }, E.omit = function(e) {
        var t = {},
            n = u.apply(r, s.call(arguments, 1));
        for (var i in e) E.contains(n, i) || (t[i] = e[i]);
        return t
    }, E.defaults = function(e) {
        return k(s.call(arguments, 1), function(t) {
            if (t)
                for (var n in t) void 0 === e[n] && (e[n] = t[n])
        }), e
    }, E.clone = function(e) {
        return E.isObject(e) ? E.isArray(e) ? e.slice() : E.extend({}, e) : e
    }, E.tap = function(e, t) {
        return t(e), e
    };
    var q = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof E && (e = e._wrapped), t instanceof E && (t = t._wrapped);
        var i = l.call(e);
        if (i != l.call(t)) return !1;
        switch (i) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var o = n.length; o--;)
            if (n[o] == e) return r[o] == t;
        n.push(e), r.push(t);
        var a = 0,
            s = !0;
        if ("[object Array]" == i) {
            if (a = e.length, s = a == t.length)
                for (; a-- && (s = q(e[a], t[a], n, r)););
        } else {
            var u = e.constructor,
                c = t.constructor;
            if (u !== c && !(E.isFunction(u) && u instanceof u && E.isFunction(c) && c instanceof c)) return !1;
            for (var f in e)
                if (E.has(e, f) && (a++, !(s = E.has(t, f) && q(e[f], t[f], n, r)))) break;
            if (s) {
                for (f in t)
                    if (E.has(t, f) && !a--) break;
                s = !a
            }
        }
        return n.pop(), r.pop(), s
    };
    E.isEqual = function(e, t) {
        return q(e, t, [], [])
    }, E.isEmpty = function(e) {
        if (null == e) return !0;
        if (E.isArray(e) || E.isString(e)) return 0 === e.length;
        for (var t in e)
            if (E.has(e, t)) return !1;
        return !0
    }, E.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    }, E.isArray = x || function(e) {
        return "[object Array]" == l.call(e)
    }, E.isObject = function(e) {
        return e === Object(e)
    }, k(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
        E["is" + e] = function(t) {
            return l.call(t) == "[object " + e + "]"
        }
    }), E.isArguments(arguments) || (E.isArguments = function(e) {
        return !(!e || !E.has(e, "callee"))
    }), "function" != typeof /./ && (E.isFunction = function(e) {
        return "function" == typeof e
    }), E.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, E.isNaN = function(e) {
        return E.isNumber(e) && e != +e
    }, E.isBoolean = function(e) {
        return e === !0 || e === !1 || "[object Boolean]" == l.call(e)
    }, E.isNull = function(e) {
        return null === e
    }, E.isUndefined = function(e) {
        return void 0 === e
    }, E.has = function(e, t) {
        return c.call(e, t)
    }, E.noConflict = function() {
        return e._ = t, this
    }, E.identity = function(e) {
        return e
    }, E.times = function(e, t, n) {
        for (var r = Array(e), i = 0; e > i; i++) r[i] = t.call(n, i);
        return r
    }, E.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var M = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    M.unescape = E.invert(M.escape);
    var O = {
        escape: new RegExp("[" + E.keys(M.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + E.keys(M.unescape).join("|") + ")", "g")
    };
    E.each(["escape", "unescape"], function(e) {
        E[e] = function(t) {
            return null == t ? "" : ("" + t).replace(O[e], function(t) {
                return M[e][t]
            })
        }
    }), E.result = function(e, t) {
        if (null == e) return void 0;
        var n = e[t];
        return E.isFunction(n) ? n.call(e) : n
    }, E.mixin = function(e) {
        k(E.functions(e), function(t) {
            var n = E[t] = e[t];
            E.prototype[t] = function() {
                var e = [this._wrapped];
                return a.apply(e, arguments), H.call(this, n.apply(E, e))
            }
        })
    };
    var D = 0;
    E.uniqueId = function(e) {
        var t = ++D + "";
        return e ? e + t : t
    }, E.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /(.)^/,
        _ = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "  ": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        F = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    E.template = function(e, t, n) {
        var r;
        n = E.defaults({}, n, E.templateSettings);
        var i = new RegExp([(n.escape || L).source, (n.interpolate || L).source, (n.evaluate || L).source].join("|") + "|$", "g"),
            o = 0,
            a = "__p+='";
        e.replace(i, function(t, n, r, i, s) {
            return a += e.slice(o, s).replace(F, function(e) {
                return "\\" + _[e]
            }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (a += "';\n" + i + "\n__p+='"), o = s + t.length, t
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", a)
        } catch (s) {
            throw s.source = a, s
        }
        if (t) return r(t, E);
        var u = function(e) {
            return r.call(this, e, E)
        };
        return u.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", u
    }, E.chain = function(e) {
        return E(e).chain()
    };
    var H = function(e) {
        return this._chain ? E(e).chain() : e
    };
    E.mixin(E), k(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = r[e];
        E.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], H.call(this, n)
        }
    }), k(["concat", "join", "slice"], function(e) {
        var t = r[e];
        E.prototype[e] = function() {
            return H.call(this, t.apply(this._wrapped, arguments))
        }
    }), E.extend(E.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this), window.performance && window.performance.mark && window.performance.mark("timer_execend_jquery"), define("require-jquery-1.8.2", [], function() {});