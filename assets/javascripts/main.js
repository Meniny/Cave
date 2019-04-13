!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t) {
        t = t || ne;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }
    function o(e) {
        var t = !!e && "length" in e && e.length,
            n = ge.type(e);
        return "function" !== n && !ge.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function i(e, t, n) {
        return ge.isFunction(t) ? ge.grep(e, function(e, o) {
            return !!t.call(e, o, e) !== n
        }) : t.nodeType ? ge.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? ge.grep(e, function(e) {
            return se.call(t, e) > -1 !== n
        }) : Se.test(t) ? ge.filter(t, e, n) : (t = ge.filter(t, e), ge.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }
    function a(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;)
            ;
        return e
    }
    function s(e) {
        var t = {};
        return ge.each(e.match(Oe) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    function l(e) {
        return e
    }
    function u(e) {
        throw e
    }
    function c(e, t, n, o) {
        var r;
        try {
            e && ge.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && ge.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(o))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    function f() {
        ne.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), ge.ready()
    }
    function d() {
        this.expando = ge.expando + d.uid++
    }
    function p(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : He.test(e) ? JSON.parse(e) : e)
    }
    function h(e, t, n) {
        var o;
        if (void 0 === n && 1 === e.nodeType)
            if (o = "data-" + t.replace(Pe, "-$&").toLowerCase(), n = e.getAttribute(o), "string" == typeof n) {
                try {
                    n = p(n)
                } catch (r) {}
                Me.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function g(e, t, n, o) {
        var r,
            i = 1,
            a = 20,
            s = o ? function() {
                return o.cur()
            } : function() {
                return ge.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (ge.cssNumber[t] ? "" : "px"),
            c = (ge.cssNumber[t] || "px" !== u && +l) && Ie.exec(ge.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do i = i || ".5", c /= i, ge.style(e, t, c + u);
            while (i !== (i = s() / l) && 1 !== i && --a)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], o && (o.unit = u, o.start = c, o.end = r)), r
    }
    function m(e) {
        var t,
            n = e.ownerDocument,
            o = e.nodeName,
            r = Ue[o];
        return r ? r : (t = n.body.appendChild(n.createElement(o)), r = ge.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ue[o] = r, r)
    }
    function v(e, t) {
        for (var n, o, r = [], i = 0, a = e.length; i < a; i++)
            o = e[i], o.style && (n = o.style.display, t ? ("none" === n && (r[i] = qe.get(o, "display") || null, r[i] || (o.style.display = "")), "" === o.style.display && Be(o) && (r[i] = m(o))) : "none" !== n && (r[i] = "none", qe.set(o, "display", n)));
        for (i = 0; i < a; i++)
            null != r[i] && (e[i].style.display = r[i]);
        return e
    }
    function y(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? ge.merge([e], n) : n
    }
    function b(e, t) {
        for (var n = 0, o = e.length; n < o; n++)
            qe.set(e[n], "globalEval", !t || qe.get(t[n], "globalEval"))
    }
    function x(e, t, n, o, r) {
        for (var i, a, s, l, u, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if (i = e[p], i || 0 === i)
                if ("object" === ge.type(i))
                    ge.merge(d, i.nodeType ? [i] : i);
                else if (Ge.test(i)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (Ye.exec(i) || ["", ""])[1].toLowerCase(), l = Qe[s] || Qe._default, a.innerHTML = l[1] + ge.htmlPrefilter(i) + l[2], c = l[0]; c--;)
                        a = a.lastChild;
                    ge.merge(d, a.childNodes), a = f.firstChild, a.textContent = ""
                } else
                    d.push(t.createTextNode(i));
        for (f.textContent = "", p = 0; i = d[p++];)
            if (o && ge.inArray(i, o) > -1)
                r && r.push(i);
            else if (u = ge.contains(i.ownerDocument, i), a = y(f.appendChild(i), "script"), u && b(a), n)
                for (c = 0; i = a[c++];)
                    Ve.test(i.type || "") && n.push(i);
        return f
    }
    function w() {
        return !0
    }
    function C() {
        return !1
    }
    function T() {
        try {
            return ne.activeElement
        } catch (e) {}
    }
    function E(e, t, n, o, r, i) {
        var a,
            s;
        if ("object" == typeof t) {
            "string" != typeof n && (o = o || n, n = void 0);
            for (s in t)
                E(e, s, n, o, t[s], i);
            return e
        }
        if (null == o && null == r ? (r = n, o = n = void 0) : null == r && ("string" == typeof n ? (r = o, o = void 0) : (r = o, o = n, n = void 0)), r === !1)
            r = C;
        else if (!r)
            return e;
        return 1 === i && (a = r, r = function(e) {
            return ge().off(e), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = ge.guid++)), e.each(function() {
            ge.event.add(this, t, r, o, n)
        })
    }
    function S(e, t) {
        return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? ge(">tbody", e)[0] || e : e
    }
    function N(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }
    function k(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function A(e, t) {
        var n,
            o,
            r,
            i,
            a,
            s,
            l,
            u;
        if (1 === t.nodeType) {
            if (qe.hasData(e) && (i = qe.access(e), a = qe.set(t, i), u = i.events)) {
                delete a.handle, a.events = {};
                for (r in u)
                    for (n = 0, o = u[r].length; n < o; n++)
                        ge.event.add(t, r, u[r][n])
            }
            Me.hasData(e) && (s = Me.access(e), l = ge.extend({}, s), Me.set(t, l))
        }
    }
    function D(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Xe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function j(e, t, o, r) {
        t = ie.apply([], t);
        var i,
            a,
            s,
            l,
            u,
            c,
            f = 0,
            d = e.length,
            p = d - 1,
            h = t[0],
            g = ge.isFunction(h);
        if (g || d > 1 && "string" == typeof h && !pe.checkClone && ot.test(h))
            return e.each(function(n) {
                var i = e.eq(n);
                g && (t[0] = h.call(this, n, i.html())), j(i, t, o, r)
            });
        if (d && (i = x(t, e[0].ownerDocument, !1, e, r), a = i.firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
            for (s = ge.map(y(i, "script"), N), l = s.length; f < d; f++)
                u = i, f !== p && (u = ge.clone(u, !0, !0), l && ge.merge(s, y(u, "script"))), o.call(e[f], u, f);
            if (l)
                for (c = s[s.length - 1].ownerDocument, ge.map(s, k), f = 0; f < l; f++)
                    u = s[f], Ve.test(u.type || "") && !qe.access(u, "globalEval") && ge.contains(c, u) && (u.src ? ge._evalUrl && ge._evalUrl(u.src) : n(u.textContent.replace(it, ""), c))
        }
        return e
    }
    function O(e, t, n) {
        for (var o, r = t ? ge.filter(t, e) : e, i = 0; null != (o = r[i]); i++)
            n || 1 !== o.nodeType || ge.cleanData(y(o)), o.parentNode && (n && ge.contains(o.ownerDocument, o) && b(y(o, "script")), o.parentNode.removeChild(o));
        return e
    }
    function F(e, t, n) {
        var o,
            r,
            i,
            a,
            s = e.style;
        return n = n || lt(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || ge.contains(e.ownerDocument, e) || (a = ge.style(e, t)), !pe.pixelMarginRight() && st.test(a) && at.test(t) && (o = s.width, r = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = o, s.minWidth = r, s.maxWidth = i)), void 0 !== a ? a + "" : a
    }
    function z(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function L(e) {
        if (e in ht)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = pt.length; n--;)
            if (e = pt[n] + t, e in ht)
                return e
    }
    function _(e) {
        var t = ge.cssProps[e];
        return t || (t = ge.cssProps[e] = L(e) || e), t
    }
    function q(e, t, n) {
        var o = Ie.exec(t);
        return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
    }
    function M(e, t, n, o, r) {
        var i,
            a = 0;
        for (i = n === (o ? "border" : "content") ? 4 : "width" === t ? 1 : 0; i < 4; i += 2)
            "margin" === n && (a += ge.css(e, n + We[i], !0, r)), o ? ("content" === n && (a -= ge.css(e, "padding" + We[i], !0, r)), "margin" !== n && (a -= ge.css(e, "border" + We[i] + "Width", !0, r))) : (a += ge.css(e, "padding" + We[i], !0, r), "padding" !== n && (a += ge.css(e, "border" + We[i] + "Width", !0, r)));
        return a
    }
    function H(e, t, n) {
        var o,
            r = lt(e),
            i = F(e, t, r),
            a = "border-box" === ge.css(e, "boxSizing", !1, r);
        return st.test(i) ? i : (o = a && (pe.boxSizingReliable() || i === e.style[t]), "auto" === i && (i = e["offset" + t[0].toUpperCase() + t.slice(1)]), i = parseFloat(i) || 0, i + M(e, t, n || (a ? "border" : "content"), o, r) + "px")
    }
    function P(e, t, n, o, r) {
        return new P.prototype.init(e, t, n, o, r)
    }
    function R() {
        mt && (ne.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(R) : e.setTimeout(R, ge.fx.interval), ge.fx.tick())
    }
    function I() {
        return e.setTimeout(function() {
            gt = void 0
        }), gt = ge.now()
    }
    function W(e, t) {
        var n,
            o = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; o < 4; o += 2 - t)
            n = We[o], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    function B(e, t, n) {
        for (var o, r = (X.tweeners[t] || []).concat(X.tweeners["*"]), i = 0, a = r.length; i < a; i++)
            if (o = r[i].call(n, t, e))
                return o
    }
    function $(e, t, n) {
        var o,
            r,
            i,
            a,
            s,
            l,
            u,
            c,
            f = "width" in t || "height" in t,
            d = this,
            p = {},
            h = e.style,
            g = e.nodeType && Be(e),
            m = qe.get(e, "fxshow");
        n.queue || (a = ge._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, ge.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (o in t)
            if (r = t[o], vt.test(r)) {
                if (delete t[o], i = i || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[o])
                        continue;
                    g = !0
                }
                p[o] = m && m[o] || ge.style(e, o)
            }
        if (l = !ge.isEmptyObject(t), l || !ge.isEmptyObject(p)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = m && m.display, null == u && (u = qe.get(e, "display")), c = ge.css(e, "display"), "none" === c && (u ? c = u : (v([e], !0), u = e.style.display || u, c = ge.css(e, "display"), v([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === ge.css(e, "float") && (l || (d.done(function() {
                h.display = u
            }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), l = !1;
            for (o in p)
                l || (m ? "hidden" in m && (g = m.hidden) : m = qe.access(e, "fxshow", {
                    display: u
                }), i && (m.hidden = !g), g && v([e], !0), d.done(function() {
                    g || v([e]), qe.remove(e, "fxshow");
                    for (o in p)
                        ge.style(e, o, p[o])
                })), l = B(g ? m[o] : 0, o, d), o in m || (m[o] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }
    function U(e, t) {
        var n,
            o,
            r,
            i,
            a;
        for (n in e)
            if (o = ge.camelCase(n), r = t[o], i = e[n], Array.isArray(i) && (r = i[1], i = e[n] = i[0]), n !== o && (e[o] = i, delete e[n]), a = ge.cssHooks[o], a && "expand" in a) {
                i = a.expand(i), delete e[o];
                for (n in i)
                    n in e || (e[n] = i[n], t[n] = r)
            } else
                t[o] = r
    }
    function X(e, t, n) {
        var o,
            r,
            i = 0,
            a = X.prefilters.length,
            s = ge.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r)
                    return !1;
                for (var t = gt || I(), n = Math.max(0, u.startTime + u.duration - t), o = n / u.duration || 0, i = 1 - o, a = 0, l = u.tweens.length; a < l; a++)
                    u.tweens[a].run(i);
                return s.notifyWith(e, [u, i, n]), i < 1 && l ? n : (l || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: ge.extend({}, t),
                opts: ge.extend(!0, {
                    specialEasing: {},
                    easing: ge.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: gt || I(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var o = ge.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(o), o
                },
                stop: function(t) {
                    var n = 0,
                        o = t ? u.tweens.length : 0;
                    if (r)
                        return this;
                    for (r = !0; n < o; n++)
                        u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (U(c, u.opts.specialEasing); i < a; i++)
            if (o = X.prefilters[i].call(u, e, c, u.opts))
                return ge.isFunction(o.stop) && (ge._queueHooks(u.elem, u.opts.queue).stop = ge.proxy(o.stop, o)), o;
        return ge.map(c, B, u), ge.isFunction(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), ge.fx.timer(ge.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    function Y(e) {
        var t = e.match(Oe) || [];
        return t.join(" ")
    }
    function V(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Q(e, t, n, o) {
        var r;
        if (Array.isArray(t))
            ge.each(t, function(t, r) {
                n || At.test(e) ? o(e, r) : Q(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, o)
            });
        else if (n || "object" !== ge.type(t))
            o(e, t);
        else
            for (r in t)
                Q(e + "[" + r + "]", t[r], n, o)
    }
    function G(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var o,
                r = 0,
                i = t.toLowerCase().match(Oe) || [];
            if (ge.isFunction(n))
                for (; o = i[r++];)
                    "+" === o[0] ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
        }
    }
    function K(e, t, n, o) {
        function r(s) {
            var l;
            return i[s] = !0, ge.each(e[s] || [], function(e, s) {
                var u = s(t, n, o);
                return "string" != typeof u || a || i[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var i = {},
            a = e === Rt;
        return r(t.dataTypes[0]) || !i["*"] && r("*")
    }
    function J(e, t) {
        var n,
            o,
            r = ge.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : o || (o = {}))[n] = t[n]);
        return o && ge.extend(!0, e, o), e
    }
    function Z(e, t, n) {
        for (var o, r, i, a, s = e.contents, l = e.dataTypes; "*" === l[0];)
            l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (r in s)
                if (s[r] && s[r].test(o)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n)
            i = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    i = r;
                    break
                }
                a || (a = r)
            }
            i = i || a
        }
        if (i)
            return i !== l[0] && l.unshift(i), n[i]
    }
    function ee(e, t, n, o) {
        var r,
            i,
            a,
            s,
            l,
            u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        for (i = c.shift(); i;)
            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = c.shift())
                if ("*" === i)
                    i = l;
                else if ("*" !== l && l !== i) {
                    if (a = u[l + " " + i] || u["* " + i], !a)
                        for (r in u)
                            if (s = r.split(" "), s[1] === i && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                a === !0 ? a = u[r] : u[r] !== !0 && (i = s[0], c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: a ? f : "No conversion from " + l + " to " + i
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    var te = [],
        ne = e.document,
        oe = Object.getPrototypeOf,
        re = te.slice,
        ie = te.concat,
        ae = te.push,
        se = te.indexOf,
        le = {},
        ue = le.toString,
        ce = le.hasOwnProperty,
        fe = ce.toString,
        de = fe.call(Object),
        pe = {},
        he = "3.2.1",
        ge = function(e, t) {
            return new ge.fn.init(e, t)
        },
        me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        ye = /-([a-z])/g,
        be = function(e, t) {
            return t.toUpperCase()
        };
    ge.fn = ge.prototype = {
        jquery: he,
        constructor: ge,
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = ge.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return ge.each(this, e)
        },
        map: function(e) {
            return this.pushStack(ge.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: te.sort,
        splice: te.splice
    }, ge.extend = ge.fn.extend = function() {
        var e,
            t,
            n,
            o,
            r,
            i,
            a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || ge.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t], o = e[t], a !== o && (u && o && (ge.isPlainObject(o) || (r = Array.isArray(o))) ? (r ? (r = !1, i = n && Array.isArray(n) ? n : []) : i = n && ge.isPlainObject(n) ? n : {}, a[t] = ge.extend(u, i, o)) : void 0 !== o && (a[t] = o));
        return a
    }, ge.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ge.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = ge.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t,
                n;
            return !(!e || "[object Object]" !== ue.call(e) || (t = oe(e)) && (n = ce.call(t, "constructor") && t.constructor, "function" != typeof n || fe.call(n) !== de))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(ve, "ms-").replace(ye, be)
        },
        each: function(e, t) {
            var n,
                r = 0;
            if (o(e))
                for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++)
                    ;
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(me, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (o(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, o = 0, r = e.length; o < n; o++)
                e[r++] = t[o];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var o, r = [], i = 0, a = e.length, s = !n; i < a; i++)
                o = !t(e[i], i), o !== s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r,
                i,
                a = 0,
                s = [];
            if (o(e))
                for (r = e.length; a < r; a++)
                    i = t(e[a], a, n), null != i && s.push(i);
            else
                for (a in e)
                    i = t(e[a], a, n), null != i && s.push(i);
            return ie.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n,
                o,
                r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), ge.isFunction(e))
                return o = re.call(arguments, 2), r = function() {
                    return e.apply(t || this, o.concat(re.call(arguments)))
                }, r.guid = e.guid = e.guid || ge.guid++, r
        },
        now: Date.now,
        support: pe
    }), "function" == typeof Symbol && (ge.fn[Symbol.iterator] = te[Symbol.iterator]), ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var xe = function(e) {
        function t(e, t, n, o) {
            var r,
                i,
                a,
                s,
                l,
                u,
                c,
                d = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!o && ((t ? t.ownerDocument || t : I) !== z && F(t), t = t || z, _)) {
                if (11 !== h && (l = ve.exec(e)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(r)))
                                return n;
                            if (a.id === r)
                                return n.push(a), n
                        } else if (d && (a = d.getElementById(r)) && P(t, a) && a.id === r)
                            return n.push(a), n
                    } else {
                        if (l[2])
                            return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && C.getElementsByClassName && t.getElementsByClassName)
                            return J.apply(n, t.getElementsByClassName(r)), n
                    }
                if (C.qsa && !X[e + " "] && (!q || !q.test(e))) {
                    if (1 !== h)
                        d = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(we, Ce) : t.setAttribute("id", s = R), u = N(e), i = u.length; i--;)
                            u[i] = "#" + s + " " + p(u[i]);
                        c = u.join(","), d = ye.test(e) && f(t.parentNode) || t
                    }
                    if (c)
                        try {
                            return J.apply(n, d.querySelectorAll(c)), n
                        } catch (g) {} finally {
                            s === R && t.removeAttribute("id")
                        }
                }
            }
            return A(e.replace(se, "$1"), t, n, o)
        }
        function n() {
            function e(n, o) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = o
            }
            var t = [];
            return e
        }
        function o(e) {
            return e[R] = !0, e
        }
        function r(e) {
            var t = z.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function i(e, t) {
            for (var n = e.split("|"), o = n.length; o--;)
                T.attrHandle[n[o]] = t
        }
        function a(e, t) {
            var n = t && e,
                o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (o)
                return o;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ee(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }
        function c(e) {
            return o(function(t) {
                return t = +t, o(function(n, o) {
                    for (var r, i = e([], n.length, t), a = i.length; a--;)
                        n[r = i[a]] && (n[r] = !(o[r] = n[r]))
                })
            })
        }
        function f(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function d() {}
        function p(e) {
            for (var t = 0, n = e.length, o = ""; t < n; t++)
                o += e[t].value;
            return o
        }
        function h(e, t, n) {
            var o = t.dir,
                r = t.next,
                i = r || o,
                a = n && "parentNode" === i,
                s = B++;
            return t.first ? function(t, n, r) {
                for (; t = t[o];)
                    if (1 === t.nodeType || a)
                        return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var u,
                    c,
                    f,
                    d = [W, s];
                if (l) {
                    for (; t = t[o];)
                        if ((1 === t.nodeType || a) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[o];)
                        if (1 === t.nodeType || a)
                            if (f = t[R] || (t[R] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase())
                                t = t[o] || t;
                            else {
                                if ((u = c[i]) && u[0] === W && u[1] === s)
                                    return d[2] = u[2];
                                if (c[i] = d, d[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function g(e) {
            return e.length > 1 ? function(t, n, o) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, o))
                        return !1;
                return !0
            } : e[0]
        }
        function m(e, n, o) {
            for (var r = 0, i = n.length; r < i; r++)
                t(e, n[r], o);
            return o
        }
        function v(e, t, n, o, r) {
            for (var i, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
                (i = e[s]) && (n && !n(i, o, r) || (a.push(i), u && t.push(s)));
            return a
        }
        function y(e, t, n, r, i, a) {
            return r && !r[R] && (r = y(r)), i && !i[R] && (i = y(i, a)), o(function(o, a, s, l) {
                var u,
                    c,
                    f,
                    d = [],
                    p = [],
                    h = a.length,
                    g = o || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : v(g, d, e, s, l),
                    b = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, b, s, l), r)
                    for (u = v(b, p), r(u, [], s, l), c = u.length; c--;)
                        (f = u[c]) && (b[p[c]] = !(y[p[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (u = [], c = b.length; c--;)
                                (f = b[c]) && u.push(y[c] = f);
                            i(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)
                            (f = b[c]) && (u = i ? ee(o, f) : d[c]) > -1 && (o[u] = !(a[u] = f))
                    }
                } else
                    b = v(b === a ? b.splice(h, b.length) : b), i ? i(null, a, b, l) : J.apply(a, b)
            })
        }
        function b(e) {
            for (var t, n, o, r = e.length, i = T.relative[e[0].type], a = i || T.relative[" "], s = i ? 1 : 0, l = h(function(e) {
                    return e === t
                }, a, !0), u = h(function(e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function(e, n, o) {
                    var r = !i && (o || n !== D) || ((t = n).nodeType ? l(e, n, o) : u(e, n, o));
                    return t = null, r
                }]; s < r; s++)
                if (n = T.relative[e[s].type])
                    c = [h(g(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                        for (o = ++s; o < r && !T.relative[e[o].type]; o++)
                            ;
                        return y(s > 1 && g(c), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, s < o && b(e.slice(s, o)), o < r && b(e = e.slice(o)), o < r && p(e))
                    }
                    c.push(n)
                }
            return g(c)
        }
        function x(e, n) {
            var r = n.length > 0,
                i = e.length > 0,
                a = function(o, a, s, l, u) {
                    var c,
                        f,
                        d,
                        p = 0,
                        h = "0",
                        g = o && [],
                        m = [],
                        y = D,
                        b = o || i && T.find.TAG("*", u),
                        x = W += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (D = a === z || a || u); h !== w && null != (c = b[h]); h++) {
                        if (i && c) {
                            for (f = 0, a || c.ownerDocument === z || (F(c), s = !_); d = e[f++];)
                                if (d(c, a || z, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (W = x)
                        }
                        r && ((c = !d && c) && p--, o && g.push(c))
                    }
                    if (p += h, r && h !== p) {
                        for (f = 0; d = n[f++];)
                            d(g, m, a, s);
                        if (o) {
                            if (p > 0)
                                for (; h--;)
                                    g[h] || m[h] || (m[h] = G.call(l));
                            m = v(m)
                        }
                        J.apply(l, m), u && !o && m.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (W = x, D = y), g
                };
            return r ? o(a) : a
        }
        var w,
            C,
            T,
            E,
            S,
            N,
            k,
            A,
            D,
            j,
            O,
            F,
            z,
            L,
            _,
            q,
            M,
            H,
            P,
            R = "sizzle" + 1 * new Date,
            I = e.document,
            W = 0,
            B = 0,
            $ = n(),
            U = n(),
            X = n(),
            Y = function(e, t) {
                return e === t && (O = !0), 0
            },
            V = {}.hasOwnProperty,
            Q = [],
            G = Q.pop,
            K = Q.push,
            J = Q.push,
            Z = Q.slice,
            ee = function(e, t) {
                for (var n = 0, o = e.length; n < o; n++)
                    if (e[n] === t)
                        return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            oe = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            re = "\\[" + ne + "*(" + oe + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
            ie = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(ie),
            de = new RegExp("^" + oe + "$"),
            pe = {
                ID: new RegExp("^#(" + oe + ")"),
                CLASS: new RegExp("^\\.(" + oe + ")"),
                TAG: new RegExp("^(" + oe + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function(e, t, n) {
                var o = "0x" + t - 65536;
                return o !== o || n ? t : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
            },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ce = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Te = function() {
                F()
            },
            Ee = h(function(e) {
                return e.disabled === !0 && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            J.apply(Q = Z.call(I.childNodes), I.childNodes), Q[I.childNodes.length].nodeType
        } catch (Se) {
            J = {
                apply: Q.length ? function(e, t) {
                    K.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, o = 0; e[n++] = t[o++];)
                        ;
                    e.length = n - 1
                }
            }
        }
        C = t.support = {}, S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, F = t.setDocument = function(e) {
            var t,
                n,
                o = e ? e.ownerDocument || e : I;
            return o !== z && 9 === o.nodeType && o.documentElement ? (z = o, L = z.documentElement, _ = !S(z), I !== z && (n = z.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), C.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), C.getElementsByTagName = r(function(e) {
                return e.appendChild(z.createComment("")), !e.getElementsByTagName("*").length
            }), C.getElementsByClassName = me.test(z.getElementsByClassName), C.getById = r(function(e) {
                return L.appendChild(e).id = R, !z.getElementsByName || !z.getElementsByName(R).length
            }), C.getById ? (T.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && _) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (T.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && _) {
                    var n,
                        o,
                        r,
                        i = t.getElementById(e);
                    if (i) {
                        if (n = i.getAttributeNode("id"), n && n.value === e)
                            return [i];
                        for (r = t.getElementsByName(e), o = 0; i = r[o++];)
                            if (n = i.getAttributeNode("id"), n && n.value === e)
                                return [i]
                    }
                    return []
                }
            }), T.find.TAG = C.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : C.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n,
                    o = [],
                    r = 0,
                    i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[r++];)
                        1 === n.nodeType && o.push(n);
                    return o
                }
                return i
            }, T.find.CLASS = C.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && _)
                    return t.getElementsByClassName(e)
            }, M = [], q = [], (C.qsa = me.test(z.querySelectorAll)) && (r(function(e) {
                L.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || q.push(".#.+[+~]")
            }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = z.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (C.matchesSelector = me.test(H = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
                C.disconnectedMatch = H.call(e, "*"), H.call(e, "[s!='']:x"), M.push("!=", ie)
            }), q = q.length && new RegExp(q.join("|")), M = M.length && new RegExp(M.join("|")), t = me.test(L.compareDocumentPosition), P = t || me.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    o = t && t.parentNode;
                return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e)
                            return !0;
                return !1
            }, Y = t ? function(e, t) {
                if (e === t)
                    return O = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !C.sortDetached && t.compareDocumentPosition(e) === n ? e === z || e.ownerDocument === I && P(I, e) ? -1 : t === z || t.ownerDocument === I && P(I, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t)
                    return O = !0, 0;
                var n,
                    o = 0,
                    r = e.parentNode,
                    i = t.parentNode,
                    s = [e],
                    l = [t];
                if (!r || !i)
                    return e === z ? -1 : t === z ? 1 : r ? -1 : i ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                if (r === i)
                    return a(e, t);
                for (n = e; n = n.parentNode;)
                    s.unshift(n);
                for (n = t; n = n.parentNode;)
                    l.unshift(n);
                for (; s[o] === l[o];)
                    o++;
                return o ? a(s[o], l[o]) : s[o] === I ? -1 : l[o] === I ? 1 : 0
            }, z) : z
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== z && F(e), n = n.replace(ce, "='$1']"), C.matchesSelector && _ && !X[n + " "] && (!M || !M.test(n)) && (!q || !q.test(n)))
                try {
                    var o = H.call(e, n);
                    if (o || C.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return o
                } catch (r) {}
            return t(n, z, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== z && F(e), P(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== z && F(e);
            var n = T.attrHandle[t.toLowerCase()],
                o = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
            return void 0 !== o ? o : C.attributes || !_ ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, t.escape = function(e) {
            return (e + "").replace(we, Ce)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t,
                n = [],
                o = 0,
                r = 0;
            if (O = !C.detectDuplicates, j = !C.sortStable && e.slice(0), e.sort(Y), O) {
                for (; t = e[r++];)
                    t === e[r] && (o = n.push(r));
                for (; o--;)
                    e.splice(n[o], 1)
            }
            return j = null, e
        }, E = t.getText = function(e) {
            var t,
                n = "",
                o = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += E(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[o++];)
                    n += E(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: pe,
            attrHandle: {},
            find: {},
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
                    return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t,
                        n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                },
                ATTR: function(e, n, o) {
                    return function(r) {
                        var i = t.attr(r, e);
                        return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === o : "!=" === n ? i !== o : "^=" === n ? o && 0 === i.indexOf(o) : "*=" === n ? o && i.indexOf(o) > -1 : "$=" === n ? o && i.slice(-o.length) === o : "~=" === n ? (" " + i.replace(ae, " ") + " ").indexOf(o) > -1 : "|=" === n && (i === o || i.slice(0, o.length + 1) === o + "-"))
                    }
                },
                CHILD: function(e, t, n, o, r) {
                    var i = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === o && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u,
                            c,
                            f,
                            d,
                            p,
                            h,
                            g = i !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                        if (m) {
                            if (i) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                for (d = m, f = d[R] || (d[R] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), u = c[e] || [], p = u[0] === W && u[1], b = p && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++b && d === t) {
                                        c[e] = [W, p, b];
                                        break
                                    }
                            } else if (y && (d = t, f = d[R] || (d[R] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), u = c[e] || [], p = u[0] === W && u[1], b = p), b === !1)
                                for (; (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[R] || (d[R] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [W, b]), d !== t));)
                                    ;
                            return b -= r, b === o || b % o === 0 && b / o >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r,
                        i = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[R] ? i(n) : i.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, t) {
                        for (var o, r = i(e, n), a = r.length; a--;)
                            o = ee(e, r[a]), e[o] = !(t[o] = r[a])
                    }) : function(e) {
                        return i(e, 0, r)
                    }) : i
                }
            },
            pseudos: {
                not: o(function(e) {
                    var t = [],
                        n = [],
                        r = k(e.replace(se, "$1"));
                    return r[R] ? o(function(e, t, n, o) {
                        for (var i, a = r(e, null, o, []), s = e.length; s--;)
                            (i = a[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, o, i) {
                        return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                    }
                }),
                has: o(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: o(function(e) {
                    return e = e.replace(be, xe), function(t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                    }
                }),
                lang: o(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(), function(t) {
                        var n;
                        do if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                            return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === z.activeElement && (!z.hasFocus || z.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: u(!1),
                disabled: u(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var o = n < 0 ? n + t : n; --o >= 0;)
                        e.push(o);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var o = n < 0 ? n + t : n; ++o < t;)
                        e.push(o);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[w] = s(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            T.pseudos[w] = l(w);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, N = t.tokenize = function(e, n) {
            var o,
                r,
                i,
                a,
                s,
                l,
                u,
                c = U[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e, l = [], u = T.preFilter; s;) {
                o && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(i = [])), o = !1, (r = ue.exec(s)) && (o = r.shift(), i.push({
                    value: o,
                    type: r[0].replace(se, " ")
                }), s = s.slice(o.length));
                for (a in T.filter)
                    !(r = pe[a].exec(s)) || u[a] && !(r = u[a](r)) || (o = r.shift(), i.push({
                        value: o,
                        type: a,
                        matches: r
                    }), s = s.slice(o.length));
                if (!o)
                    break
            }
            return n ? s.length : s ? t.error(e) : U(e, l).slice(0)
        }, k = t.compile = function(e, t) {
            var n,
                o = [],
                r = [],
                i = X[e + " "];
            if (!i) {
                for (t || (t = N(e)), n = t.length; n--;)
                    i = b(t[n]), i[R] ? o.push(i) : r.push(i);
                i = X(e, x(r, o)), i.selector = e
            }
            return i
        }, A = t.select = function(e, t, n, o) {
            var r,
                i,
                a,
                s,
                l,
                u = "function" == typeof e && e,
                c = !o && N(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (i = c[0] = c[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && 9 === t.nodeType && _ && T.relative[i[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(be, xe), t) || [])[0], !t)
                        return n;
                    u && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (r = pe.needsContext.test(e) ? 0 : i.length; r-- && (a = i[r], !T.relative[s = a.type]);)
                    if ((l = T.find[s]) && (o = l(a.matches[0].replace(be, xe), ye.test(i[0].type) && f(t.parentNode) || t))) {
                        if (i.splice(r, 1), e = o.length && p(i), !e)
                            return J.apply(n, o), n;
                        break
                    }
            }
            return (u || k(e, c))(o, t, !_, n, !t || ye.test(e) && f(t.parentNode) || t), n
        }, C.sortStable = R.split("").sort(Y).join("") === R, C.detectDuplicates = !!O, F(), C.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(z.createElement("fieldset"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), C.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || i("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || i(te, function(e, t, n) {
            var o;
            if (!n)
                return e[t] === !0 ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }), t
    }(e);
    ge.find = xe, ge.expr = xe.selectors, ge.expr[":"] = ge.expr.pseudos, ge.uniqueSort = ge.unique = xe.uniqueSort, ge.text = xe.getText, ge.isXMLDoc = xe.isXML, ge.contains = xe.contains, ge.escapeSelector = xe.escape;
    var we = function(e, t, n) {
            for (var o = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && ge(e).is(n))
                        break;
                    o.push(e)
                }
            return o
        },
        Ce = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Te = ge.expr.match.needsContext,
        Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Se = /^.[^:#\[\.,]*$/;
    ge.filter = function(e, t, n) {
        var o = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? ge.find.matchesSelector(o, e) ? [o] : [] : ge.find.matches(e, ge.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ge.fn.extend({
        find: function(e) {
            var t,
                n,
                o = this.length,
                r = this;
            if ("string" != typeof e)
                return this.pushStack(ge(e).filter(function() {
                    for (t = 0; t < o; t++)
                        if (ge.contains(r[t], this))
                            return !0
                }));
            for (n = this.pushStack([]), t = 0; t < o; t++)
                ge.find(e, r[t], n);
            return o > 1 ? ge.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && Te.test(e) ? ge(e) : e || [], !1).length
        }
    });
    var Ne,
        ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Ae = ge.fn.init = function(e, t, n) {
            var o,
                r;
            if (!e)
                return this;
            if (n = n || Ne, "string" == typeof e) {
                if (o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e), !o || !o[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (o[1]) {
                    if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Ee.test(o[1]) && ge.isPlainObject(t))
                        for (o in t)
                            ge.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                    return this
                }
                return r = ne.getElementById(o[2]), r && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : ge.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ge) : ge.makeArray(e, this)
        };
    Ae.prototype = ge.fn, Ne = ge(ne);
    var De = /^(?:parents|prev(?:Until|All))/,
        je = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ge.fn.extend({
        has: function(e) {
            var t = ge(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ge.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n,
                o = 0,
                r = this.length,
                i = [],
                a = "string" != typeof e && ge(e);
            if (!Te.test(e))
                for (; o < r; o++)
                    for (n = this[o]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        }
            return this.pushStack(i.length > 1 ? ge.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(ge(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ge.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return we(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return we(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return we(e, "nextSibling")
        },
        prevAll: function(e) {
            return we(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return we(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return we(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Ce((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Ce(e.firstChild)
        },
        contents: function(e) {
            return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), ge.merge([], e.childNodes))
        }
    }, function(e, t) {
        ge.fn[e] = function(n, o) {
            var r = ge.map(this, t, n);
            return "Until" !== e.slice(-5) && (o = n), o && "string" == typeof o && (r = ge.filter(o, r)), this.length > 1 && (je[e] || ge.uniqueSort(r), De.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var Oe = /[^\x20\t\r\n\f]+/g;
    ge.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : ge.extend({}, e);
        var t,
            n,
            o,
            r,
            i = [],
            a = [],
            l = -1,
            u = function() {
                for (r = r || e.once, o = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < i.length;)
                        i[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = i.length, n = !1);
                e.memory || (n = !1), t = !1, r && (i = n ? [] : "")
            },
            c = {
                add: function() {
                    return i && (n && !t && (l = i.length - 1, a.push(n)), function o(t) {
                        ge.each(t, function(t, n) {
                            ge.isFunction(n) ? e.unique && c.has(n) || i.push(n) : n && n.length && "string" !== ge.type(n) && o(n)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return ge.each(arguments, function(e, t) {
                        for (var n; (n = ge.inArray(t, i, n)) > -1;)
                            i.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? ge.inArray(e, i) > -1 : i.length > 0
                },
                empty: function() {
                    return i && (i = []), this
                },
                disable: function() {
                    return r = a = [], i = n = "", this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return r = a = [], n || t || (i = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return c
    }, ge.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", ge.Callbacks("memory"), ge.Callbacks("memory"), 2], ["resolve", "done", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 1, "rejected"]],
                o = "pending",
                r = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return ge.Deferred(function(t) {
                            ge.each(n, function(n, o) {
                                var r = ge.isFunction(e[o[4]]) && e[o[4]];
                                i[o[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && ge.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[o[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, o, r) {
                        function i(t, n, o, r) {
                            return function() {
                                var s = this,
                                    c = arguments,
                                    f = function() {
                                        var e,
                                            f;
                                        if (!(t < a)) {
                                            if (e = o.apply(s, c), e === n.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, ge.isFunction(f) ? r ? f.call(e, i(a, n, l, r), i(a, n, u, r)) : (a++, f.call(e, i(a, n, l, r), i(a, n, u, r), i(a, n, l, n.notifyWith))) : (o !== l && (s = void 0, c = [e]), (r || n.resolveWith)(s, c))
                                        }
                                    },
                                    d = r ? f : function() {
                                        try {
                                            f()
                                        } catch (e) {
                                            ge.Deferred.exceptionHook && ge.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (o !== u && (s = void 0, c = [e]), n.rejectWith(s, c))
                                        }
                                    };
                                t ? d() : (ge.Deferred.getStackHook && (d.stackTrace = ge.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        var a = 0;
                        return ge.Deferred(function(e) {
                            n[0][3].add(i(0, e, ge.isFunction(r) ? r : l, e.notifyWith)), n[1][3].add(i(0, e, ge.isFunction(t) ? t : l)), n[2][3].add(i(0, e, ge.isFunction(o) ? o : u))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ge.extend(e, r) : r
                    }
                },
                i = {};
            return ge.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                r[t[1]] = a.add, s && a.add(function() {
                    o = s
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), i[t[0]] = function() {
                    return i[t[0] + "With"](this === i ? void 0 : this, arguments), this
                }, i[t[0] + "With"] = a.fireWith
            }), r.promise(i), t && t.call(i, i), i
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                o = Array(n),
                r = re.call(arguments),
                i = ge.Deferred(),
                a = function(e) {
                    return function(n) {
                        o[e] = this, r[e] = arguments.length > 1 ? re.call(arguments) : n, --t || i.resolveWith(o, r)
                    }
                };
            if (t <= 1 && (c(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || ge.isFunction(r[n] && r[n].then)))
                return i.then();
            for (; n--;)
                c(r[n], a(n), i.reject);
            return i.promise()
        }
    });
    var Fe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ge.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Fe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, ge.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var ze = ge.Deferred();
    ge.fn.ready = function(e) {
        return ze.then(e)["catch"](function(e) {
            ge.readyException(e)
        }), this
    }, ge.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (e === !0 ? --ge.readyWait : ge.isReady) || (ge.isReady = !0, e !== !0 && --ge.readyWait > 0 || ze.resolveWith(ne, [ge]))
        }
    }), ge.ready.then = ze.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(ge.ready) : (ne.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
    var Le = function(e, t, n, o, r, i, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === ge.type(n)) {
                r = !0;
                for (s in n)
                    Le(e, t, s, n[s], !0, i, a)
            } else if (void 0 !== o && (r = !0, ge.isFunction(o) || (a = !0), u && (a ? (t.call(e, o), t = null) : (u = t, t = function(e, t, n) {
                return u.call(ge(e), n)
            })), t))
                for (; s < l; s++)
                    t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : i
        },
        _e = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    d.uid = 1, d.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, _e(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var o,
                r = this.cache(e);
            if ("string" == typeof t)
                r[ge.camelCase(t)] = n;
            else
                for (o in t)
                    r[ge.camelCase(o)] = t[o];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ge.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n,
                o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(ge.camelCase) : (t = ge.camelCase(t), t = t in o ? [t] : t.match(Oe) || []), n = t.length;
                    for (; n--;)
                        delete o[t[n]]
                }
                (void 0 === t || ge.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ge.isEmptyObject(t)
        }
    };
    var qe = new d,
        Me = new d,
        He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Pe = /[A-Z]/g;
    ge.extend({
        hasData: function(e) {
            return Me.hasData(e) || qe.hasData(e)
        },
        data: function(e, t, n) {
            return Me.access(e, t, n)
        },
        removeData: function(e, t) {
            Me.remove(e, t)
        },
        _data: function(e, t, n) {
            return qe.access(e, t, n)
        },
        _removeData: function(e, t) {
            qe.remove(e, t)
        }
    }), ge.fn.extend({
        data: function(e, t) {
            var n,
                o,
                r,
                i = this[0],
                a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (r = Me.get(i), 1 === i.nodeType && !qe.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--;)
                        a[n] && (o = a[n].name, 0 === o.indexOf("data-") && (o = ge.camelCase(o.slice(5)), h(i, o, r[o])));
                    qe.set(i, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Me.set(this, e)
            }) : Le(this, function(t) {
                var n;
                if (i && void 0 === t) {
                    if (n = Me.get(i, e), void 0 !== n)
                        return n;
                    if (n = h(i, e), void 0 !== n)
                        return n
                } else
                    this.each(function() {
                        Me.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Me.remove(this, e)
            })
        }
    }), ge.extend({
        queue: function(e, t, n) {
            var o;
            if (e)
                return t = (t || "fx") + "queue", o = qe.get(e, t), n && (!o || Array.isArray(n) ? o = qe.access(e, t, ge.makeArray(n)) : o.push(n)), o || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ge.queue(e, t),
                o = n.length,
                r = n.shift(),
                i = ge._queueHooks(e, t),
                a = function() {
                    ge.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), o--), r && ("fx" === t && n.unshift("inprogress"), delete i.stop, r.call(e, a, i)), !o && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return qe.get(e, n) || qe.access(e, n, {
                    empty: ge.Callbacks("once memory").add(function() {
                        qe.remove(e, [t + "queue", n])
                    })
                })
        }
    }), ge.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ge.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ge.queue(this, e, t);
                ge._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ge.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n,
                o = 1,
                r = ge.Deferred(),
                i = this,
                a = this.length,
                s = function() {
                    --o || r.resolveWith(i, [i])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)
                n = qe.get(i[a], e + "queueHooks"), n && n.empty && (o++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ie = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
        We = ["Top", "Right", "Bottom", "Left"],
        Be = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && ge.contains(e.ownerDocument, e) && "none" === ge.css(e, "display")
        },
        $e = function(e, t, n, o) {
            var r,
                i,
                a = {};
            for (i in t)
                a[i] = e.style[i], e.style[i] = t[i];
            r = n.apply(e, o || []);
            for (i in t)
                e.style[i] = a[i];
            return r
        },
        Ue = {};
    ge.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Be(this) ? ge(this).show() : ge(this).hide()
            })
        }
    });
    var Xe = /^(?:checkbox|radio)$/i,
        Ye = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ve = /^$|\/(?:java|ecma)script/i,
        Qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td;
    var Ge = /<|&#?\w+;/;
    !function() {
        var e = ne.createDocumentFragment(),
            t = e.appendChild(ne.createElement("div")),
            n = ne.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ke = ne.documentElement,
        Je = /^key/,
        Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^([^.]*)(?:\.(.+)|)/;
    ge.event = {
        global: {},
        add: function(e, t, n, o, r) {
            var i,
                a,
                s,
                l,
                u,
                c,
                f,
                d,
                p,
                h,
                g,
                m = qe.get(e);
            if (m)
                for (n.handler && (i = n, n = i.handler, r = i.selector), r && ge.find.matchesSelector(Ke, r), n.guid || (n.guid = ge.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                    return "undefined" != typeof ge && ge.event.triggered !== t.type ? ge.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(Oe) || [""], u = t.length; u--;)
                    s = et.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (f = ge.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = ge.event.special[p] || {}, c = ge.extend({
                        type: p,
                        origType: g,
                        data: o,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ge.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, i), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, o, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), ge.event.global[p] = !0)
        },
        remove: function(e, t, n, o, r) {
            var i,
                a,
                s,
                l,
                u,
                c,
                f,
                d,
                p,
                h,
                g,
                m = qe.hasData(e) && qe.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(Oe) || [""], u = t.length; u--;)
                    if (s = et.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = ge.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, d = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;)
                            c = d[i], !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || o && o !== c.selector && ("**" !== o || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ge.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l)
                            ge.event.remove(e, p + t[u], n, o, !0);
                ge.isEmptyObject(l) && qe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t,
                n,
                o,
                r,
                i,
                a,
                s = ge.event.fix(e),
                l = new Array(arguments.length),
                u = (qe.get(this, "events") || {})[s.type] || [],
                c = ge.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, s) !== !1) {
                for (a = ge.event.handlers.call(this, s, u), t = 0; (r = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = r.elem, n = 0; (i = r.handlers[n++]) && !s.isImmediatePropagationStopped();)
                        s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, o = ((ge.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, l), void 0 !== o && (s.result = o) === !1 && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n,
                o,
                r,
                i,
                a,
                s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || u.disabled !== !0)) {
                        for (i = [], a = {}, n = 0; n < l; n++)
                            o = t[n], r = o.selector + " ", void 0 === a[r] && (a[r] = o.needsContext ? ge(r, this).index(u) > -1 : ge.find(r, this, null, [u]).length), a[r] && i.push(o);
                        i.length && s.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(ge.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ge.isFunction(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[ge.expando] ? e : new ge.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== T() && this.focus)
                        return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === T() && this.blur)
                        return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && r(this, "input"))
                        return this.click(), !1
                },
                _default: function(e) {
                    return r(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ge.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ge.Event = function(e, t) {
        return this instanceof ge.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? w : C, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), void (this[ge.expando] = !0)) : new ge.Event(e, t)
    }, ge.Event.prototype = {
        constructor: ge.Event,
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ge.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Je.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, ge.event.addProp), ge.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ge.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n,
                    o = this,
                    r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === o || ge.contains(o, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ge.fn.extend({
        on: function(e, t, n, o) {
            return E(this, e, t, n, o)
        },
        one: function(e, t, n, o) {
            return E(this, e, t, n, o, 1)
        },
        off: function(e, t, n) {
            var o,
                r;
            if (e && e.preventDefault && e.handleObj)
                return o = e.handleObj, ge(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = C), this.each(function() {
                ge.event.remove(this, e, n, t)
            })
        }
    });
    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ge.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var o,
                r,
                i,
                a,
                s = e.cloneNode(!0),
                l = ge.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e)))
                for (a = y(s), i = y(e), o = 0, r = i.length; o < r; o++)
                    D(i[o], a[o]);
            if (t)
                if (n)
                    for (i = i || y(e), a = a || y(s), o = 0, r = i.length; o < r; o++)
                        A(i[o], a[o]);
                else
                    A(e, s);
            return a = y(s, "script"), a.length > 0 && b(a, !l && y(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, o, r = ge.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (_e(n)) {
                    if (t = n[qe.expando]) {
                        if (t.events)
                            for (o in t.events)
                                r[o] ? ge.event.remove(n, o) : ge.removeEvent(n, o, t.handle);
                        n[qe.expando] = void 0
                    }
                    n[Me.expando] && (n[Me.expando] = void 0)
                }
        }
    }), ge.fn.extend({
        detach: function(e) {
            return O(this, e, !0)
        },
        remove: function(e) {
            return O(this, e)
        },
        text: function(e) {
            return Le(this, function(e) {
                return void 0 === e ? ge.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return j(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return j(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = S(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (ge.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ge.clone(this, e, t)
            })
        },
        html: function(e) {
            return Le(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    o = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !nt.test(e) && !Qe[(Ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ge.htmlPrefilter(e);
                    try {
                        for (; n < o; n++)
                            t = this[n] || {}, 1 === t.nodeType && (ge.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return j(this, arguments, function(t) {
                var n = this.parentNode;
                ge.inArray(this, e) < 0 && (ge.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), ge.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ge.fn[e] = function(e) {
            for (var n, o = [], r = ge(e), i = r.length - 1, a = 0; a <= i; a++)
                n = a === i ? this : this.clone(!0), ge(r[a])[t](n), ae.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var at = /^margin/,
        st = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"),
        lt = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    !function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ke.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, i = "2px" === t.marginLeft, o = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Ke.removeChild(a), s = null
            }
        }
        var n,
            o,
            r,
            i,
            a = ne.createElement("div"),
            s = ne.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), ge.extend(pe, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), o
            },
            pixelMarginRight: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), i
            }
        }))
    }();
    var ut = /^(none|table(?!-c[ea]).+)/,
        ct = /^--/,
        ft = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pt = ["Webkit", "Moz", "ms"],
        ht = ne.createElement("div").style;
    ge.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = F(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                    i,
                    a,
                    s = ge.camelCase(t),
                    l = ct.test(t),
                    u = e.style;
                return l || (t = _(s)), a = ge.cssHooks[t] || ge.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, o)) ? r : u[t] : (i = typeof n, "string" === i && (r = Ie.exec(n)) && r[1] && (n = g(e, t, r), i = "number"), void (null != n && n === n && ("number" === i && (n += r && r[3] || (ge.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, o)) || (l ? u.setProperty(t, n) : u[t] = n))))
            }
        },
        css: function(e, t, n, o) {
            var r,
                i,
                a,
                s = ge.camelCase(t),
                l = ct.test(t);
            return l || (t = _(s)), a = ge.cssHooks[t] || ge.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = F(e, t, o)), "normal" === r && t in dt && (r = dt[t]), "" === n || n ? (i = parseFloat(r), n === !0 || isFinite(i) ? i || 0 : r) : r
        }
    }), ge.each(["height", "width"], function(e, t) {
        ge.cssHooks[t] = {
            get: function(e, n, o) {
                if (n)
                    return !ut.test(ge.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? H(e, t, o) : $e(e, ft, function() {
                        return H(e, t, o)
                    })
            },
            set: function(e, n, o) {
                var r,
                    i = o && lt(e),
                    a = o && M(e, t, o, "border-box" === ge.css(e, "boxSizing", !1, i), i);
                return a && (r = Ie.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = ge.css(e, t)), q(e, n, a)
            }
        }
    }), ge.cssHooks.marginLeft = z(pe.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(F(e, "marginLeft")) || e.getBoundingClientRect().left - $e(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }), ge.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ge.cssHooks[e + t] = {
            expand: function(n) {
                for (var o = 0, r = {}, i = "string" == typeof n ? n.split(" ") : [n]; o < 4; o++)
                    r[e + We[o] + t] = i[o] || i[o - 2] || i[0];
                return r
            }
        }, at.test(e) || (ge.cssHooks[e + t].set = q)
    }), ge.fn.extend({
        css: function(e, t) {
            return Le(this, function(e, t, n) {
                var o,
                    r,
                    i = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (o = lt(e), r = t.length; a < r; a++)
                        i[t[a]] = ge.css(e, t[a], !1, o);
                    return i
                }
                return void 0 !== n ? ge.style(e, t, n) : ge.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), ge.Tween = P, P.prototype = {
        constructor: P,
        init: function(e, t, n, o, r, i) {
            this.elem = e, this.prop = n, this.easing = r || ge.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = i || (ge.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this)
        },
        run: function(e) {
            var t,
                n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ge.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ge.fx = P.prototype.init, ge.fx.step = {};
    var gt,
        mt,
        vt = /^(?:toggle|show|hide)$/,
        yt = /queueHooks$/;
    ge.Animation = ge.extend(X, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return g(n.elem, e, Ie.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Oe);
            for (var n, o = 0, r = e.length; o < r; o++)
                n = e[o], X.tweeners[n] = X.tweeners[n] || [], X.tweeners[n].unshift(t)
        },
        prefilters: [$],
        prefilter: function(e, t) {
            t ? X.prefilters.unshift(e) : X.prefilters.push(e)
        }
    }), ge.speed = function(e, t, n) {
        var o = e && "object" == typeof e ? ge.extend({}, e) : {
            complete: n || !n && t || ge.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ge.isFunction(t) && t
        };
        return ge.fx.off ? o.duration = 0 : "number" != typeof o.duration && (o.duration in ge.fx.speeds ? o.duration = ge.fx.speeds[o.duration] : o.duration = ge.fx.speeds._default), null != o.queue && o.queue !== !0 || (o.queue = "fx"), o.old = o.complete, o.complete = function() {
            ge.isFunction(o.old) && o.old.call(this), o.queue && ge.dequeue(this, o.queue)
        }, o
    }, ge.fn.extend({
        fadeTo: function(e, t, n, o) {
            return this.filter(Be).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, o)
        },
        animate: function(e, t, n, o) {
            var r = ge.isEmptyObject(e),
                i = ge.speed(t, n, o),
                a = function() {
                    var t = X(this, ge.extend({}, e), i);
                    (r || qe.get(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, r || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
        },
        stop: function(e, t, n) {
            var o = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    i = ge.timers,
                    a = qe.get(this);
                if (r)
                    a[r] && a[r].stop && o(a[r]);
                else
                    for (r in a)
                        a[r] && a[r].stop && yt.test(r) && o(a[r]);
                for (r = i.length; r--;)
                    i[r].elem !== this || null != e && i[r].queue !== e || (i[r].anim.stop(n), t = !1, i.splice(r, 1));
                !t && n || ge.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t,
                    n = qe.get(this),
                    o = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    i = ge.timers,
                    a = o ? o.length : 0;
                for (n.finish = !0, ge.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = i.length; t--;)
                    i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; t < a; t++)
                    o[t] && o[t].finish && o[t].finish.call(this);
                delete n.finish
            })
        }
    }), ge.each(["toggle", "show", "hide"], function(e, t) {
        var n = ge.fn[t];
        ge.fn[t] = function(e, o, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, o, r)
        }
    }), ge.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
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
        ge.fn[e] = function(e, n, o) {
            return this.animate(t, e, n, o)
        }
    }), ge.timers = [], ge.fx.tick = function() {
        var e,
            t = 0,
            n = ge.timers;
        for (gt = ge.now(); t < n.length; t++)
            e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || ge.fx.stop(), gt = void 0
    }, ge.fx.timer = function(e) {
        ge.timers.push(e), ge.fx.start()
    }, ge.fx.interval = 13, ge.fx.start = function() {
        mt || (mt = !0, R())
    }, ge.fx.stop = function() {
        mt = null
    }, ge.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ge.fn.delay = function(t, n) {
        return t = ge.fx ? ge.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, o) {
            var r = e.setTimeout(n, t);
            o.stop = function() {
                e.clearTimeout(r)
            }
        })
    }, function() {
        var e = ne.createElement("input"),
            t = ne.createElement("select"),
            n = t.appendChild(ne.createElement("option"));
        e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
    }();
    var bt,
        xt = ge.expr.attrHandle;
    ge.fn.extend({
        attr: function(e, t) {
            return Le(this, ge.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ge.removeAttr(this, e)
            })
        }
    }), ge.extend({
        attr: function(e, t, n) {
            var o,
                r,
                i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
                return "undefined" == typeof e.getAttribute ? ge.prop(e, t, n) : (1 === i && ge.isXMLDoc(e) || (r = ge.attrHooks[t.toLowerCase()] || (ge.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void ge.removeAttr(e, t) : r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (o = r.get(e, t)) ? o : (o = ge.find.attr(e, t), null == o ? void 0 : o))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!pe.radioValue && "radio" === t && r(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n,
                o = 0,
                r = t && t.match(Oe);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];)
                    e.removeAttribute(n)
        }
    }), bt = {
        set: function(e, t, n) {
            return t === !1 ? ge.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ge.each(ge.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = xt[t] || ge.find.attr;
        xt[t] = function(e, t, o) {
            var r,
                i,
                a = t.toLowerCase();
            return o || (i = xt[a], xt[a] = r, r = null != n(e, t, o) ? a : null, xt[a] = i), r
        }
    });
    var wt = /^(?:input|select|textarea|button)$/i,
        Ct = /^(?:a|area)$/i;
    ge.fn.extend({
        prop: function(e, t) {
            return Le(this, ge.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ge.propFix[e] || e]
            })
        }
    }), ge.extend({
        prop: function(e, t, n) {
            var o,
                r,
                i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
                return 1 === i && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, r = ge.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : e[t] = n : r && "get" in r && null !== (o = r.get(e, t)) ? o : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ge.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), pe.optSelected || (ge.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ge.propFix[this.toLowerCase()] = this
    }), ge.fn.extend({
        addClass: function(e) {
            var t,
                n,
                o,
                r,
                i,
                a,
                s,
                l = 0;
            if (ge.isFunction(e))
                return this.each(function(t) {
                    ge(this).addClass(e.call(this, t, V(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(Oe) || []; n = this[l++];)
                    if (r = V(n), o = 1 === n.nodeType && " " + Y(r) + " ") {
                        for (a = 0; i = t[a++];)
                            o.indexOf(" " + i + " ") < 0 && (o += i + " ");
                        s = Y(o), r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t,
                n,
                o,
                r,
                i,
                a,
                s,
                l = 0;
            if (ge.isFunction(e))
                return this.each(function(t) {
                    ge(this).removeClass(e.call(this, t, V(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Oe) || []; n = this[l++];)
                    if (r = V(n), o = 1 === n.nodeType && " " + Y(r) + " ") {
                        for (a = 0; i = t[a++];)
                            for (; o.indexOf(" " + i + " ") > -1;)
                                o = o.replace(" " + i + " ", " ");
                        s = Y(o), r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function(n) {
                ge(this).toggleClass(e.call(this, n, V(this), t), t)
            }) : this.each(function() {
                var t,
                    o,
                    r,
                    i;
                if ("string" === n)
                    for (o = 0, r = ge(this), i = e.match(Oe) || []; t = i[o++];)
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || (t = V(this), t && qe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : qe.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t,
                n,
                o = 0;
            for (t = " " + e + " "; n = this[o++];)
                if (1 === n.nodeType && (" " + Y(V(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var Tt = /\r/g;
    ge.fn.extend({
        val: function(e) {
            var t,
                n,
                o,
                r = this[0];
            return arguments.length ? (o = ge.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = o ? e.call(this, n, ge(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = ge.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = ge.valHooks[r.type] || ge.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Tt, "") : null == n ? "" : n)) : void 0
        }
    }), ge.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ge.find.attr(e, "value");
                    return null != t ? t : Y(ge.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t,
                        n,
                        o,
                        i = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        l = s ? null : [],
                        u = s ? a + 1 : i.length;
                    for (o = a < 0 ? u : s ? a : 0; o < u; o++)
                        if (n = i[o], (n.selected || o === a) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                            if (t = ge(n).val(), s)
                                return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var n, o, r = e.options, i = ge.makeArray(t), a = r.length; a--;)
                        o = r[a], (o.selected = ge.inArray(ge.valHooks.option.get(o), i) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), ge.each(["radio", "checkbox"], function() {
        ge.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = ge.inArray(ge(e).val(), t) > -1
            }
        }, pe.checkOn || (ge.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Et = /^(?:focusinfocus|focusoutblur)$/;
    ge.extend(ge.event, {
        trigger: function(t, n, o, r) {
            var i,
                a,
                s,
                l,
                u,
                c,
                f,
                d = [o || ne],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = o = o || ne, 3 !== o.nodeType && 8 !== o.nodeType && !Et.test(p + ge.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[ge.expando] ? t : new ge.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : ge.makeArray(n, [t]), f = ge.event.special[p] || {}, r || !f.trigger || f.trigger.apply(o, n) !== !1)) {
                if (!r && !f.noBubble && !ge.isWindow(o)) {
                    for (l = f.delegateType || p, Et.test(l + p) || (a = a.parentNode); a; a = a.parentNode)
                        d.push(a), s = a;
                    s === (o.ownerDocument || ne) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (i = 0; (a = d[i++]) && !t.isPropagationStopped();)
                    t.type = i > 1 ? l : f.bindType || p, c = (qe.get(a, "events") || {})[t.type] && qe.get(a, "handle"), c && c.apply(a, n), c = u && a[u], c && c.apply && _e(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !_e(o) || u && ge.isFunction(o[p]) && !ge.isWindow(o) && (s = o[u], s && (o[u] = null), ge.event.triggered = p, o[p](), ge.event.triggered = void 0, s && (o[u] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var o = ge.extend(new ge.Event, n, {
                type: e,
                isSimulated: !0
            });
            ge.event.trigger(o, null, t)
        }
    }), ge.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ge.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return ge.event.trigger(e, t, n, !0)
        }
    }), ge.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        ge.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ge.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), pe.focusin = "onfocusin" in e, pe.focusin || ge.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ge.event.simulate(t, e.target, ge.event.fix(e))
        };
        ge.event.special[t] = {
            setup: function() {
                var o = this.ownerDocument || this,
                    r = qe.access(o, t);
                r || o.addEventListener(e, n, !0), qe.access(o, t, (r || 0) + 1)
            },
            teardown: function() {
                var o = this.ownerDocument || this,
                    r = qe.access(o, t) - 1;
                r ? qe.access(o, t, r) : (o.removeEventListener(e, n, !0), qe.remove(o, t))
            }
        }
    });
    var St = e.location,
        Nt = ge.now(),
        kt = /\?/;
    ge.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (o) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + t), n
    };
    var At = /\[\]$/,
        Dt = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    ge.param = function(e, t) {
        var n,
            o = [],
            r = function(e, t) {
                var n = ge.isFunction(t) ? t() : t;
                o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !ge.isPlainObject(e))
            ge.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                Q(n, e[n], t, r);
        return o.join("&")
    }, ge.fn.extend({
        serialize: function() {
            return ge.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ge.prop(this, "elements");
                return e ? ge.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ge(this).is(":disabled") && Ot.test(this.nodeName) && !jt.test(e) && (this.checked || !Xe.test(e))
            }).map(function(e, t) {
                var n = ge(this).val();
                return null == n ? null : Array.isArray(n) ? ge.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var Ft = /%20/g,
        zt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Pt = {},
        Rt = {},
        It = "*/".concat("*"),
        Wt = ne.createElement("a");
    Wt.href = St.href, ge.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal: qt.test(St.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ge.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? J(J(e, ge.ajaxSettings), t) : J(ge.ajaxSettings, e)
        },
        ajaxPrefilter: G(Pt),
        ajaxTransport: G(Rt),
        ajax: function(t, n) {
            function o(t, n, o, s) {
                var u,
                    d,
                    p,
                    x,
                    w,
                    C = n;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, o && (x = Z(h, T, o)), x = ee(h, x, T, u), u ? (h.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ge.lastModified[i] = w), w = T.getResponseHeader("etag"), w && (ge.etag[i] = w)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, d = x.data, p = x.error, u = !p)) : (p = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || C) + "", u ? v.resolveWith(g, [d, C, T]) : v.rejectWith(g, [T, C, p]), T.statusCode(b), b = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [T, h, u ? d : p]), y.fireWith(g, [T, C]), f && (m.trigger("ajaxComplete", [T, h]), --ge.active || ge.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r,
                i,
                a,
                s,
                l,
                u,
                c,
                f,
                d,
                p,
                h = ge.ajaxSetup({}, n),
                g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? ge(g) : ge.event,
                v = ge.Deferred(),
                y = ge.Callbacks("once memory"),
                b = h.statusCode || {},
                x = {},
                w = {},
                C = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = _t.exec(a);)
                                    s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c)
                                T.always(e[T.status]);
                            else
                                for (t in e)
                                    b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return r && r.abort(t), o(0, t), this
                    }
                };
            if (v.promise(T), h.url = ((t || h.url || St.href) + "").replace(Ht, St.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Oe) || [""], null == h.crossDomain) {
                u = ne.createElement("a");
                try {
                    u.href = h.url, u.href = u.href, h.crossDomain = Wt.protocol + "//" + Wt.host != u.protocol + "//" + u.host
                } catch (E) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = ge.param(h.data, h.traditional)), K(Pt, h, n, T), c)
                return T;
            f = ge.event && h.global, f && 0 === ge.active++ && ge.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), i = h.url.replace(zt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ft, "+")) : (p = h.url.slice(i.length), h.data && (i += (kt.test(i) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (i = i.replace(Lt, "$1"), p = (kt.test(i) ? "&" : "?") + "_=" + Nt++ + p), h.url = i + p), h.ifModified && (ge.lastModified[i] && T.setRequestHeader("If-Modified-Since", ge.lastModified[i]), ge.etag[i] && T.setRequestHeader("If-None-Match", ge.etag[i])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers)
                T.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (h.beforeSend.call(g, T, h) === !1 || c))
                return T.abort();
            if (C = "abort", y.add(h.complete), T.done(h.success), T.fail(h.error), r = K(Rt, h, n, T)) {
                if (T.readyState = 1, f && m.trigger("ajaxSend", [T, h]), c)
                    return T;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    T.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, r.send(x, o)
                } catch (E) {
                    if (c)
                        throw E;
                    o(-1, E)
                }
            } else
                o(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return ge.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ge.get(e, void 0, t, "script")
        }
    }), ge.each(["get", "post"], function(e, t) {
        ge[t] = function(e, n, o, r) {
            return ge.isFunction(n) && (r = r || o, o = n, n = void 0), ge.ajax(ge.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: o
            }, ge.isPlainObject(e) && e))
        }
    }), ge._evalUrl = function(e) {
        return ge.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ge.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ge.isFunction(e) && (e = e.call(this[0])), t = ge(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;)
                    e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return ge.isFunction(e) ? this.each(function(t) {
                ge(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ge(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ge.isFunction(e);
            return this.each(function(n) {
                ge(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ge(this).replaceWith(this.childNodes)
            }), this
        }
    }), ge.expr.pseudos.hidden = function(e) {
        return !ge.expr.pseudos.visible(e)
    }, ge.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ge.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        $t = ge.ajaxSettings.xhr();
    pe.cors = !!$t && "withCredentials" in $t, pe.ajax = $t = !!$t, ge.ajaxTransport(function(t) {
        var n,
            o;
        if (pe.cors || $t && !t.crossDomain)
            return {
                send: function(r, i) {
                    var a,
                        s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (a in r)
                        s.setRequestHeader(a, r[a]);
                    n = function(e) {
                        return function() {
                            n && (n = o = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = n(), o = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = o : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && o()
                        })
                    }, n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (l) {
                        if (n)
                            throw l
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }), ge.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), ge.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ge.globalEval(e), e
            }
        }
    }), ge.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ge.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t,
                n;
            return {
                send: function(o, r) {
                    t = ge("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), ne.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ut = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    ge.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ut.pop() || ge.expando + "_" + Nt++;
            return this[e] = !0, e
        }
    }), ge.ajaxPrefilter("json jsonp", function(t, n, o) {
        var r,
            i,
            a,
            s = t.jsonp !== !1 && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return r = t.jsonpCallback = ge.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Xt, "$1" + r) : t.jsonp !== !1 && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return a || ge.error(r + " was not called"), a[0]
            }, t.dataTypes[0] = "json", i = e[r], e[r] = function() {
                a = arguments
            }, o.always(function() {
                void 0 === i ? ge(e).removeProp(r) : e[r] = i, t[r] && (t.jsonpCallback = n.jsonpCallback, Ut.push(r)), a && ge.isFunction(i) && i(a[0]), a = i = void 0
            }), "script"
    }), pe.createHTMLDocument = function() {
        var e = ne.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), ge.parseHTML = function(e, t, n) {
        if ("string" != typeof e)
            return [];
        "boolean" == typeof t && (n = t, t = !1);
        var o,
            r,
            i;
        return t || (pe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), o = t.createElement("base"), o.href = ne.location.href, t.head.appendChild(o)) : t = ne), r = Ee.exec(e), i = !n && [], r ? [t.createElement(r[1])] : (r = x([e], t, i), i && i.length && ge(i).remove(), ge.merge([], r.childNodes))
    }, ge.fn.load = function(e, t, n) {
        var o,
            r,
            i,
            a = this,
            s = e.indexOf(" ");
        return s > -1 && (o = Y(e.slice(s)), e = e.slice(0, s)), ge.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && ge.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(o ? ge("<div>").append(ge.parseHTML(e)).find(o) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, i || [e.responseText, t, e])
            })
        }), this
    }, ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ge.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ge.expr.pseudos.animated = function(e) {
        return ge.grep(ge.timers, function(t) {
            return e === t.elem
        }).length
    }, ge.offset = {
        setOffset: function(e, t, n) {
            var o,
                r,
                i,
                a,
                s,
                l,
                u,
                c = ge.css(e, "position"),
                f = ge(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), i = ge.css(e, "top"), l = ge.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (i + l).indexOf("auto") > -1, u ? (o = f.position(), a = o.top, r = o.left) : (a = parseFloat(i) || 0, r = parseFloat(l) || 0), ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, ge.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    ge.offset.setOffset(this, e, t)
                });
            var t,
                n,
                o,
                r,
                i = this[0];
            return i ? i.getClientRects().length ? (o = i.getBoundingClientRect(), t = i.ownerDocument, n = t.documentElement, r = t.defaultView, {
                top: o.top + r.pageYOffset - n.clientTop,
                left: o.left + r.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e,
                    t,
                    n = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ge.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), r(e[0], "html") || (o = e.offset()), o = {
                    top: o.top + ge.css(e[0], "borderTopWidth", !0),
                    left: o.left + ge.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - o.top - ge.css(n, "marginTop", !0),
                    left: t.left - o.left - ge.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ge.css(e, "position");)
                    e = e.offsetParent;
                return e || Ke
            })
        }
    }), ge.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        ge.fn[e] = function(o) {
            return Le(this, function(e, o, r) {
                var i;
                return ge.isWindow(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === r ? i ? i[t] : e[o] : void (i ? i.scrollTo(n ? i.pageXOffset : r, n ? r : i.pageYOffset) : e[o] = r)
            }, e, o, arguments.length)
        }
    }), ge.each(["top", "left"], function(e, t) {
        ge.cssHooks[t] = z(pe.pixelPosition, function(e, n) {
            if (n)
                return n = F(e, t), st.test(n) ? ge(e).position()[t] + "px" : n
        })
    }), ge.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ge.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, o) {
            ge.fn[o] = function(r, i) {
                var a = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return Le(this, function(t, n, r) {
                    var i;
                    return ge.isWindow(t) ? 0 === o.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ge.css(t, n, s) : ge.style(t, n, r, s)
                }, t, a ? r : void 0, a)
            }
        })
    }), ge.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, o) {
            return this.on(t, e, n, o)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), ge.holdReady = function(e) {
        e ? ge.readyWait++ : ge.ready(!0)
    }, ge.isArray = Array.isArray, ge.parseJSON = JSON.parse, ge.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ge
    });
    var Yt = e.jQuery,
        Vt = e.$;
    return ge.noConflict = function(t) {
        return e.$ === ge && (e.$ = Vt), t && e.jQuery === ge && (e.jQuery = Yt), ge
    }, t || (e.jQuery = e.$ = ge), ge
}), function() {
    !function(e) {
        return e.bigfoot = function(t) {
            var n,
                o,
                r,
                i,
                a,
                s,
                l,
                u,
                c,
                f,
                d,
                p,
                h,
                g,
                m,
                v,
                y,
                b,
                x,
                w,
                C,
                T,
                E,
                S,
                N,
                k,
                A;
            return r = void 0, c = {
                actionOriginalFN: "hide",
                activateCallback: function() {},
                activateOnHover: !1,
                allowMultipleFN: !1,
                anchorPattern: /(fn|footnote|note)[:\-_\d]/gi,
                anchorParentTagname: "sup",
                breakpoints: {},
                deleteOnUnhover: !1,
                footnoteParentClass: "footnote",
                footnoteTagname: "li",
                hoverDelay: 250,
                numberResetSelector: void 0,
                popoverDeleteDelay: 300,
                popoverCreateDelay: 100,
                positionContent: !0,
                preventPageScroll: !0,
                scope: !1,
                useFootnoteOnlyOnce: !0,
                contentMarkup: "<aside class='bigfoot-footnote is-positioned-bottom' data-footnote-number='{{FOOTNOTENUM}}' data-footnote-identifier='{{FOOTNOTEID}}' alt='Footnote {{FOOTNOTENUM}}'> <div class='bigfoot-footnote__wrapper'> <div class='bigfoot-footnote__content'> {{FOOTNOTECONTENT}} </div></div> <div class='bigfoot-footnote__tooltip'></div> </aside>",
                buttonMarkup: "<div class='bigfoot-footnote__container'> <button class='bigfoot-footnote__button' id='{{SUP:data-footnote-backlink-ref}}' data-footnote-number='{{FOOTNOTENUM}}' data-footnote-identifier='{{FOOTNOTEID}}' alt='See Footnote {{FOOTNOTENUM}}' rel='footnote' data-bigfoot-footnote='{{FOOTNOTECONTENT}}'> <svg class='bigfoot-footnote__button__circle' viewbox='0 0 6 6' preserveAspectRatio='xMinYMin'><circle r='3' cx='3' cy='3' fill='white'></circle></svg> <svg class='bigfoot-footnote__button__circle' viewbox='0 0 6 6' preserveAspectRatio='xMinYMin'><circle r='3' cx='3' cy='3' fill='white'></circle></svg> <svg class='bigfoot-footnote__button__circle' viewbox='0 0 6 6' preserveAspectRatio='xMinYMin'><circle r='3' cx='3' cy='3' fill='white'></circle></svg> </button></div>"
            }, E = e.extend(c, t), m = {}, p = function() {
                var t,
                    n,
                    o,
                    r,
                    i,
                    a,
                    l,
                    u,
                    c,
                    d,
                    p,
                    h,
                    g,
                    m,
                    v,
                    b,
                    x,
                    C,
                    T,
                    S;
                for (p = E.scope ? "" + E.scope + " a[href*='#']" : "a[href*='#']", o = e(p).filter(function() {
                    var t,
                        n;
                    return t = e(this), n = t.attr("rel"), "null" !== n && null != n || (n = ""), ("" + t.attr("href") + n).match(E.anchorPattern) && t.closest("[class*=" + E.footnoteParentClass + "]:not(a):not(" + E.anchorParentTagname + ")").length < 1
                }), b = [], m = [], c = [], s(o, m), e(m).each(function() {
                    var t,
                        n;
                    if (n = e(this).data("footnote-ref").replace(/[:.+~*\]\[]/g, "\\$&"), E.useFootnoteOnlyOnce && (n = "" + n + ":not(.footnote-processed)"), t = e(n).closest(E.footnoteTagname), t.length > 0)
                        return b.push(t.first().addClass("footnote-processed")), c.push(this)
                }), n = e("[data-footnote-identifier]:last"), g = n.length < 1 ? 0 : +n.data("footnote-identifier"), S = [], x = C = 0, T = b.length; 0 <= T ? C < T : C > T; x = 0 <= T ? ++C : --C)
                    switch (h = y(e(b[x]).html().trim(), e(c[x]).data("footnote-backlink-ref")), h = h.replace(/"/g, "&quot;").replace(/&lt;/g, "&ltsym;").replace(/&gt;/g, "&gtsym;").replace(/'/g, "&apos;"), g += 1, d = "", l = e(c[x]), u = e(b[x]), null != E.numberResetSelector ? (t = l.closest(E.numberResetSelector), t.is(i) ? v += 1 : v = 1, i = t) : v = g, 0 !== h.indexOf("<") && (h = "<p>" + h + "</p>"), d = E.buttonMarkup.replace(/\{\{FOOTNOTENUM\}\}/g, v).replace(/\{\{FOOTNOTEID\}\}/g, g).replace(/\{\{FOOTNOTECONTENT\}\}/g, h), d = w(d, "SUP", l), d = w(d, "FN", u), r = e(d).insertBefore(l), a = u.parent(), E.actionOriginalFN.toLowerCase()) {
                    case "hide":
                        l.addClass("footnote-print-only"), u.addClass("footnote-print-only"), S.push(f(a));
                        break;
                    case "delete":
                        l.remove(), u.remove(), S.push(f(a));
                        break;
                    default:
                        S.push(l.addClass("footnote-print-only"))
                    }
                return S
            }, s = function(t, n) {
                var o,
                    r,
                    i,
                    a;
                null == n && (n = []), o = void 0, r = void 0, i = void 0, a = void 0, t.each(function() {
                    var t,
                        r;
                    return r = e(this), i = "#" + r.attr("href").split("#")[1], o = r.closest(E.anchorParentTagname), t = r.find(E.anchorParentTagname), o.length > 0 ? (a = (o.attr("id") || "") + (r.attr("id") || ""), n.push(o.attr({
                        "data-footnote-backlink-ref": a,
                        "data-footnote-ref": i
                    }))) : t.length > 0 ? (a = (t.attr("id") || "") + (r.attr("id") || ""), n.push(r.attr({
                        "data-footnote-backlink-ref": a,
                        "data-footnote-ref": i
                    }))) : (a = r.attr("id") || "", n.push(r.attr({
                        "data-footnote-backlink-ref": a,
                        "data-footnote-ref": i
                    })))
                })
            }, f = function(e) {
                var t;
                return t = void 0, e.is(":empty") || 0 === e.children(":not(.footnote-print-only)").length ? (t = e.parent(), "delete" === E.actionOriginalFN.toLowerCase() ? e.remove() : e.addClass("footnote-print-only"), f(t)) : e.children(":not(.footnote-print-only)").length === e.children("hr:not(.footnote-print-only)").length ? (t = e.parent(), "delete" === E.actionOriginalFN.toLowerCase() ? e.remove() : (e.children("hr").addClass("footnote-print-only"), e.addClass("footnote-print-only")), f(t)) : void 0
            }, y = function(e, t) {
                var n;
                return t.indexOf(" ") >= 0 && (t = t.trim().replace(/\s+/g, "|").replace(/(.*)/g, "($1)")), n = new RegExp("(\\s|&nbsp;)*<\\s*a[^#<]*#" + t + "[^>]*>(.*?)<\\s*/\\s*a>", "g"), e.replace(n, "").replace("[]", "")
            }, w = function(e, t, n) {
                var o,
                    r,
                    i,
                    a;
                for (r = new RegExp("\\{\\{" + t + ":([^\\}]*)\\}\\}", "g"), o = void 0, a = void 0, i = void 0, o = r.exec(e); o;)
                    o[1] && (a = n.attr(o[1]) || "", e = e.replace("{{" + t + ":" + o[1] + "}}", a)), o = r.exec(e);
                return e
            }, i = function(t) {
                var n,
                    o,
                    r;
                if (E.activateOnHover) {
                    if (n = e(t.target).closest(".bigfoot-footnote__button"), o = "[data-footnote-identifier='" + n.attr("data-footnote-identifier") + "']", n.hasClass("is-active"))
                        return;
                    n.addClass("is-hover-instantiated"), E.allowMultipleFN || (r = ".bigfoot-footnote:not(" + o + ")", x(r)), u(".bigfoot-footnote__button" + o).addClass("is-hover-instantiated")
                }
            }, S = function(t) {
                var n,
                    o,
                    r;
                r = e(t.target), n = r.closest(".bigfoot-footnote__button"), o = r.closest(".bigfoot-footnote"), n.length > 0 ? (t.preventDefault(), l(n)) : o.length < 1 && e(".bigfoot-footnote").length > 0 && x()
            }, l = function(e) {
                var t;
                e.blur(), t = "data-footnote-identifier='" + e.attr("data-footnote-identifier") + "'", e.hasClass("changing") || (e.hasClass("is-active") ? E.allowMultipleFN ? x(".bigfoot-footnote[" + t + "]") : x() : (e.addClass("changing"), setTimeout(function() {
                    return e.removeClass("changing")
                }, E.popoverCreateDelay), u(".bigfoot-footnote__button[" + t + "]"), e.addClass("is-click-instantiated"), E.allowMultipleFN || x(".bigfoot-footnote:not([" + t + "])")))
            }, u = function(t) {
                var n,
                    o;
                return n = void 0, n = "string" != typeof t && E.allowMultipleFN ? t : "string" != typeof t ? t.first() : E.allowMultipleFN ? e(t).closest(".bigfoot-footnote__button") : e(t + ":first").closest(".bigfoot-footnote__button"), o = e(), n.each(function() {
                    var t,
                        r,
                        i,
                        s;
                    i = e(this), s = void 0;
                    try {
                        return s = E.contentMarkup.replace(/\{\{FOOTNOTENUM\}\}/g, i.attr("data-footnote-number")).replace(/\{\{FOOTNOTEID\}\}/g, i.attr("data-footnote-identifier")).replace(/\{\{FOOTNOTECONTENT\}\}/g, i.attr("data-bigfoot-footnote")).replace(/\&gtsym\;/g, "&gt;").replace(/\&ltsym\;/g, "&lt;"), s = w(s, "BUTTON", i)
                    } finally {
                        t = e(s);
                        try {
                            E.activateCallback(t, i)
                        } catch (l) {}
                        t.insertAfter(n), m[i.attr("data-footnote-identifier")] = "init", t.attr("bigfoot-max-width", a(t.css("max-width"), t)), t.css("max-width", 1e4), r = t.find(".bigfoot-footnote__content"), t.attr("data-bigfoot-max-height", a(r.css("max-height"), r)), C(), i.addClass("is-active"), t.find(".bigfoot-footnote__content").bindScrollHandler(), o = o.add(t)
                    }
                }), setTimeout(function() {
                    return o.addClass("is-active")
                }, E.popoverCreateDelay), o
            }, o = function() {
                var e,
                    t;
                return e = document.createElement("div"), e.style.cssText = "display:inline-block;padding:0;line-height:1;position:absolute;visibility:hidden;font-size:1em;", e.appendChild(document.createElement("M")), document.body.appendChild(e), t = e.offsetHeight, document.body.removeChild(e), t
            }, a = function(e, t) {
                return "none" === e ? e = 1e4 : e.indexOf("rem") >= 0 ? e = parseFloat(e) * o() : e.indexOf("em") >= 0 ? e = parseFloat(e) * parseFloat(t.css("font-size")) : e.indexOf("px") >= 0 ? (e = parseFloat(e), e <= 60 && (e /= parseFloat(t.parent().css("width")))) : e.indexOf("%") >= 0 && (e = parseFloat(e) / 100), e
            }, e.fn.bindScrollHandler = function() {
                return E.preventPageScroll ? (e(this).on("DOMMouseScroll mousewheel", function(t) {
                    var n,
                        o,
                        r,
                        i,
                        a,
                        s,
                        l,
                        u;
                    if (o = e(this), l = o.scrollTop(), s = o[0].scrollHeight, i = parseInt(o.css("height")), n = o.closest(".bigfoot-footnote"), o.scrollTop() > 0 && o.scrollTop() < 10 && n.addClass("is-scrollable"), n.hasClass("is-scrollable"))
                        return r = "DOMMouseScroll" === t.type ? t.originalEvent.detail * -40 : t.originalEvent.wheelDelta, u = r > 0, a = function() {
                            return t.stopPropagation(), t.preventDefault(), t.returnValue = !1, !1
                        }, !u && -r > s - i - l ? (o.scrollTop(s), n.addClass("is-fully-scrolled"), a()) : u && r > l ? (o.scrollTop(0), n.removeClass("is-fully-scrolled"), a()) : n.removeClass("is-fully-scrolled")
                }), e(this)) : e(this)
            }, N = function(t) {
                if (E.deleteOnUnhover && E.activateOnHover)
                    return setTimeout(function() {
                        var n;
                        if (n = e(t.target).closest(".bigfoot-footnote, .bigfoot-footnote__button"), e(".bigfoot-footnote__button:hover, .bigfoot-footnote:hover").length < 1)
                            return x()
                    }, E.hoverDelay)
            }, d = function(e) {
                if (27 === e.keyCode)
                    return x()
            }, x = function(t, n) {
                var o,
                    r,
                    i,
                    a;
                return null == t && (t = ".bigfoot-footnote"), null == n && (n = E.popoverDeleteDelay), o = e(), a = void 0, r = void 0, i = void 0, e(t).each(function() {
                    if (i = e(this), a = i.attr("data-footnote-identifier"), r = e(".bigfoot-footnote__button[data-footnote-identifier='" + a + "']"), !r.hasClass("changing"))
                        return o = o.add(r), r.removeClass("is-active is-hover-instantiated is-click-instantiated").addClass("changing"), i.removeClass("is-active").addClass("disapearing"), setTimeout(function() {
                            return i.remove(), delete m[a], r.removeClass("changing")
                        }, n)
                }), o
            }, C = function(t) {
                var n;
                E.positionContent && (n = t ? t.type : "resize", e(".bigfoot-footnote").each(function() {
                    var t,
                        o,
                        r,
                        i,
                        a,
                        s,
                        l,
                        u,
                        c,
                        f,
                        d,
                        p,
                        h,
                        g,
                        y,
                        b;
                    if (i = e(this), s = i.attr("data-footnote-identifier"), a = "data-footnote-identifier='" + s + "'", o = i.find(".bigfoot-footnote__content"), t = i.siblings(".bigfoot-footnote__button"), y = T(t), u = parseFloat(i.css("margin-top")), c = +i.attr("data-bigfoot-max-height"), b = 2 * u + i.outerHeight(), f = 1e4, h = y.bottomRoom < b && y.topRoom > y.bottomRoom, l = m[s], h ? ("top" !== l && (m[s] = "top", i.addClass("is-positioned-top").removeClass("is-positioned-bottom"), i.css("transform-origin", 100 * y.leftRelative + "% 100%")), f = y.topRoom - u - 15) : ("bottom" === l && "init" !== l || (m[s] = "bottom", i.removeClass("is-positioned-top").addClass("is-positioned-bottom"), i.css("transform-origin", 100 * y.leftRelative + "% 0%")), f = y.bottomRoom - u - 15), i.find(".bigfoot-footnote__content").css({
                        "max-height": Math.min(f, c) + "px"
                    }), "resize" === n && (p = parseFloat(i.attr("bigfoot-max-width")), r = i.find(".bigfoot-footnote__wrapper"), d = p, p <= 1 && (g = function() {
                        var t,
                            n;
                        return n = 1e4, E.maxWidthRelativeTo && (t = e(E.maxWidthRelativeTo), t.length > 0 && (n = t.outerWidth())), Math.min(window.innerWidth, n)
                    }(), d = g * p), d = Math.min(d, i.find(".bigfoot-footnote__content").outerWidth() + 1), r.css("max-width", d + "px"), i.css({
                        left: -y.leftRelative * d + parseFloat(t.css("margin-left")) + t.outerWidth() / 2 + "px"
                    }), v(i, y.leftRelative)), parseInt(i.outerHeight()) < i.find(".bigfoot-footnote__content")[0].scrollHeight)
                        return i.addClass("is-scrollable")
                }))
            }, v = function(e, t) {
                var n;
                null == t && (t = .5), n = e.find(".bigfoot-footnote__tooltip"), n.length > 0 && n.css("left", "" + 100 * t + "%")
            }, T = function(e) {
                var t,
                    n,
                    o,
                    r,
                    i,
                    a;
                return n = parseFloat(e.css("margin-left")), o = parseFloat(e.outerWidth()) - n, t = parseFloat(e.outerHeight()), a = A(), i = e.offset().top - a.scrollY + t / 2, r = e.offset().left - a.scrollX + o / 2, {
                    topRoom: i,
                    bottomRoom: a.height - i,
                    leftRoom: r,
                    rightRoom: a.width - r,
                    leftRelative: r / a.width,
                    topRelative: i / a.height
                }
            }, A = function() {
                var t;
                return t = e(window), {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    scrollX: t.scrollLeft(),
                    scrollY: t.scrollTop()
                }
            }, n = function(e, t, n, o, i) {
                var a,
                    s,
                    l,
                    u,
                    c,
                    f,
                    d;
                return null == o && (o = E.popoverDeleteDelay), null == i && (i = !0), u = void 0, s = void 0, f = void 0, "string" == typeof e ? (f = "iphone" === e.toLowerCase() ? "<320px" : "ipad" === e.toLowerCase() ? "<768px" : e, s = ">" === f.charAt(0) ? "min" : "<" === f.charAt(0) ? "max" : null, c = s ? "(" + s + "-width: " + f.substring(1) + ")" : f, u = window.matchMedia(c)) : u = e, u.media && "invalid" === u.media ? {
                    added: !1,
                    mq: u,
                    listener: null
                } : (d = "min" === s, a = "max" === s, t = t || g(i, o, d, function(e) {
                    return e.addClass("is-bottom-fixed")
                }), n = n || g(i, o, a, function() {}), l = function(e) {
                    e.matches ? t(i, r) : n(i, r)
                }, u.addListener(l), l(u), E.breakpoints[e] = {
                    added: !0,
                    mq: u,
                    listener: l
                }, E.breakpoints[e])
            }, g = function(e, t, n, o) {
                return function(e, r) {
                    var i;
                    return i = void 0, e && (i = r.close(), r.updateSetting("activateCallback", o)), setTimeout(function() {
                        if (r.updateSetting("positionContent", n), e)
                            return r.activate(i)
                    }, t)
                }
            }, b = function(e, t) {
                var n,
                    o,
                    r,
                    i;
                if (r = null, n = void 0, i = !1, "string" == typeof e)
                    i = void 0 !== E.breakpoints[e];
                else
                    for (n in E.breakpoints)
                        E.breakpoints.hasOwnProperty(n) && E.breakpoints[n].mq === e && (i = !0);
                return i && (o = E.breakpoints[n || e], t ? t({
                    matches: !1
                }) : o.listener({
                    matches: !1
                }), o.mq.removeListener(o.listener), delete E.breakpoints[n || e]), i
            }, k = function(e, t) {
                var n,
                    o;
                if (n = void 0, "string" == typeof e)
                    n = E[e], E[e] = t;
                else {
                    n = {};
                    for (o in e)
                        e.hasOwnProperty(o) && (n[o] = E[o], E[o] = e[o])
                }
                return n
            }, h = function(e) {
                return E[e]
            }, e(document).ready(function() {
                return p(), e(document).on("mouseenter", ".bigfoot-footnote__button", i), e(document).on("touchend click", S), e(document).on("mouseout", ".is-hover-instantiated", N), e(document).on("keyup", d), e(window).on("scroll resize", C), e(document).on("gestureend", function() {
                    return C()
                })
            }), r = {
                removePopovers: x,
                close: x,
                createPopover: u,
                activate: u,
                repositionFeet: C,
                reposition: C,
                addBreakpoint: n,
                removeBreakpoint: b,
                getSetting: h,
                updateSetting: k
            }
        }
    }(jQuery)
}.call(this), /*!
*jQuery Smooth Scroll- v2.1.2- 2017-01-19*https:*Copyright(c)2017 Karl Swedberg*Licensed MIT*/
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function(e) {
    var t = "2.1.2",
        n = {},
        o = {
            exclude: [],
            excludeWithin: [],
            offset: 0,
            direction: "top",
            delegateSelector: null,
            scrollElement: null,
            scrollTarget: null,
            beforeScroll: function() {},
            afterScroll: function() {},
            easing: "swing",
            speed: 400,
            autoCoefficient: 2,
            preventDefault: !0
        },
        r = function(t) {
            var n = [],
                o = !1,
                r = t.dir && "left" === t.dir ? "scrollLeft" : "scrollTop";
            return this.each(function() {
                var t = e(this);
                if (this !== document && this !== window)
                    return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void (t[r]() > 0 ? n.push(this) : (t[r](1), o = t[r]() > 0, o && n.push(this), t[r](0))) : (n.push(document.scrollingElement), !1)
            }), n.length || this.each(function() {
                this === document.documentElement && "smooth" === e(this).css("scrollBehavior") && (n = [this]), n.length || "BODY" !== this.nodeName || (n = [this])
            }), "first" === t.el && n.length > 1 && (n = [n[0]]), n
        },
        i = /^([\-\+]=)(\d+)/;
    e.fn.extend({
        scrollable: function(e) {
            var t = r.call(this, {
                dir: e
            });
            return this.pushStack(t)
        },
        firstScrollable: function(e) {
            var t = r.call(this, {
                el: "first",
                dir: e
            });
            return this.pushStack(t)
        },
        smoothScroll: function(t, n) {
            if (t = t || {}, "options" === t)
                return n ? this.each(function() {
                    var t = e(this),
                        o = e.extend(t.data("ssOpts") || {}, n);
                    e(this).data("ssOpts", o)
                }) : this.first().data("ssOpts");
            var o = e.extend({}, e.fn.smoothScroll.defaults, t),
                r = function(t) {
                    var n = function(e) {
                            return e.replace(/(:|\.|\/)/g, "\\$1")
                        },
                        r = this,
                        i = e(this),
                        a = e.extend({}, o, i.data("ssOpts") || {}),
                        s = o.exclude,
                        l = a.excludeWithin,
                        u = 0,
                        c = 0,
                        f = !0,
                        d = {},
                        p = e.smoothScroll.filterPath(location.pathname),
                        h = e.smoothScroll.filterPath(r.pathname),
                        g = location.hostname === r.hostname || !r.hostname,
                        m = a.scrollTarget || h === p,
                        v = n(r.hash);
                    if (v && !e(v).length && (f = !1), a.scrollTarget || g && m && v) {
                        for (; f && u < s.length;)
                            i.is(n(s[u++])) && (f = !1);
                        for (; f && c < l.length;)
                            i.closest(l[c++]).length && (f = !1)
                    } else
                        f = !1;
                    f && (a.preventDefault && t.preventDefault(), e.extend(d, a, {
                        scrollTarget: a.scrollTarget || v,
                        link: r
                    }), e.smoothScroll(d))
                };
            return null !== t.delegateSelector ? this.off("click.smoothscroll", t.delegateSelector).on("click.smoothscroll", t.delegateSelector, r) : this.off("click.smoothscroll").on("click.smoothscroll", r), this
        }
    });
    var a = function(e) {
        var t = {
                relative: ""
            },
            n = "string" == typeof e && i.exec(e);
        return "number" == typeof e ? t.px = e : n && (t.relative = n[1], t.px = parseFloat(n[2]) || 0), t
    };
    e.smoothScroll = function(t, o) {
        if ("options" === t && "object" == typeof o)
            return e.extend(n, o);
        var r,
            i,
            s,
            l,
            u = a(t),
            c = {},
            f = 0,
            d = "offset",
            p = "scrollTop",
            h = {},
            g = {};
        u.px ? r = e.extend({
            link: null
        }, e.fn.smoothScroll.defaults, n) : (r = e.extend({
            link: null
        }, e.fn.smoothScroll.defaults, t || {}, n), r.scrollElement && (d = "position", "static" === r.scrollElement.css("position") && r.scrollElement.css("position", "relative")), o && (u = a(o))), p = "left" === r.direction ? "scrollLeft" : p, r.scrollElement ? (i = r.scrollElement, u.px || /^(?:HTML|BODY)$/.test(i[0].nodeName) || (f = i[p]())) : i = e("html, body").firstScrollable(r.direction), r.beforeScroll.call(i, r), c = u.px ? u : {
            relative: "",
            px: e(r.scrollTarget)[d]() && e(r.scrollTarget)[d]()[r.direction] || 0
        }, h[p] = c.relative + (c.px + f + r.offset), s = r.speed, "auto" === s && (l = Math.abs(h[p] - i[p]()), s = l / r.autoCoefficient), g = {
            duration: s,
            easing: r.easing,
            complete: function() {
                r.afterScroll.call(r.link, r)
            }
        }, r.step && (g.step = r.step), i.length ? i.stop().animate(h, g) : r.afterScroll.call(r.link, r)
    }, e.smoothScroll.version = t, e.smoothScroll.filterPath = function(e) {
        return e = e || "", e.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
    }, e.fn.smoothScroll.defaults = o
}), !function(e, t) {
    var n = t(e, e.document);
    e.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n)
}(window, function(e, t) {
    "use strict";
    if (t.getElementsByClassName) {
        var n,
            o = t.documentElement,
            r = e.Date,
            i = e.HTMLPictureElement,
            a = "addEventListener",
            s = "getAttribute",
            l = e[a],
            u = e.setTimeout,
            c = e.requestAnimationFrame || u,
            f = e.requestIdleCallback,
            d = /^picture$/i,
            p = ["load", "error", "lazyincluded", "_lazyloaded"],
            h = {},
            g = Array.prototype.forEach,
            m = function(e, t) {
                return h[t] || (h[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), h[t].test(e[s]("class") || "") && h[t]
            },
            v = function(e, t) {
                m(e, t) || e.setAttribute("class", (e[s]("class") || "").trim() + " " + t)
            },
            y = function(e, t) {
                var n;
                (n = m(e, t)) && e.setAttribute("class", (e[s]("class") || "").replace(n, " "))
            },
            b = function(e, t, n) {
                var o = n ? a : "removeEventListener";
                n && b(e, t), p.forEach(function(n) {
                    e[o](n, t)
                })
            },
            x = function(e, n, o, r, i) {
                var a = t.createEvent("CustomEvent");
                return a.initCustomEvent(n, !r, !i, o || {}), e.dispatchEvent(a), a
            },
            w = function(t, o) {
                var r;
                !i && (r = e.picturefill || n.pf) ? r({
                    reevaluate: !0,
                    elements: [t]
                }) : o && o.src && (t.src = o.src)
            },
            C = function(e, t) {
                return (getComputedStyle(e, null) || {})[t]
            },
            T = function(e, t, o) {
                for (o = o || e.offsetWidth; o < n.minSize && t && !e._lazysizesWidth;)
                    o = t.offsetWidth, t = t.parentNode;
                return o
            },
            E = function() {
                var e,
                    n,
                    o = [],
                    r = [],
                    i = o,
                    a = function() {
                        var t = i;
                        for (i = o.length ? r : o, e = !0, n = !1; t.length;)
                            t.shift()();
                        e = !1
                    },
                    s = function(o, r) {
                        e && !r ? o.apply(this, arguments) : (i.push(o), n || (n = !0, (t.hidden ? u : c)(a)))
                    };
                return s._lsFlush = a, s
            }(),
            S = function(e, t) {
                return t ? function() {
                    E(e)
                } : function() {
                    var t = this,
                        n = arguments;
                    E(function() {
                        e.apply(t, n)
                    })
                }
            },
            N = function(e) {
                var t,
                    n = 0,
                    o = 125,
                    i = 666,
                    a = i,
                    s = function() {
                        t = !1, n = r.now(), e()
                    },
                    l = f ? function() {
                        f(s, {
                            timeout: a
                        }), a !== i && (a = i)
                    } : S(function() {
                        u(s)
                    }, !0);
                return function(e) {
                    var i;
                    (e = e === !0) && (a = 44), t || (t = !0, i = o - (r.now() - n), 0 > i && (i = 0), e || 9 > i && f ? l() : u(l, i))
                }
            },
            k = function(e) {
                var t,
                    n,
                    o = 99,
                    i = function() {
                        t = null, e()
                    },
                    a = function() {
                        var e = r.now() - n;
                        o > e ? u(a, o - e) : (f || i)(i)
                    };
                return function() {
                    n = r.now(), t || (t = u(a, o))
                }
            },
            A = function() {
                var i,
                    c,
                    f,
                    p,
                    h,
                    T,
                    A,
                    j,
                    O,
                    F,
                    z,
                    L,
                    _,
                    q,
                    M,
                    H = /^img$/i,
                    P = /^iframe$/i,
                    R = "onscroll" in e && !/glebot/.test(navigator.userAgent),
                    I = 0,
                    W = 0,
                    B = 0,
                    $ = -1,
                    U = function(e) {
                        B--, e && e.target && b(e.target, U), (!e || 0 > B || !e.target) && (B = 0)
                    },
                    X = function(e, n) {
                        var r,
                            i = e,
                            a = "hidden" == C(t.body, "visibility") || "hidden" != C(e, "visibility");
                        for (O -= n, L += n, F -= n, z += n; a && (i = i.offsetParent) && i != t.body && i != o;)
                            a = (C(i, "opacity") || 1) > 0, a && "visible" != C(i, "overflow") && (r = i.getBoundingClientRect(), a = z > r.left && F < r.right && L > r.top - 1 && O < r.bottom + 1);
                        return a
                    },
                    Y = function() {
                        var e,
                            r,
                            a,
                            l,
                            u,
                            d,
                            p,
                            g,
                            m;
                        if ((h = n.loadMode) && 8 > B && (e = i.length)) {
                            r = 0, $++, null == q && ("expand" in n || (n.expand = o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370), _ = n.expand, q = _ * n.expFactor), q > W && 1 > B && $ > 2 && h > 2 && !t.hidden ? (W = q, $ = 0) : W = h > 1 && $ > 1 && 6 > B ? _ : I;
                            for (; e > r; r++)
                                if (i[r] && !i[r]._lazyRace)
                                    if (R)
                                        if ((g = i[r][s]("data-expand")) && (d = 1 * g) || (d = W), m !== d && (A = innerWidth + d * M, j = innerHeight + d, p = -1 * d, m = d), a = i[r].getBoundingClientRect(), (L = a.bottom) >= p && (O = a.top) <= j && (z = a.right) >= p * M && (F = a.left) <= A && (L || z || F || O) && (f && 3 > B && !g && (3 > h || 4 > $) || X(i[r], d))) {
                                            if (te(i[r]), u = !0, B > 9)
                                                break
                                        } else
                                            !u && f && !l && 4 > B && 4 > $ && h > 2 && (c[0] || n.preloadAfterLoad) && (c[0] || !g && (L || z || F || O || "auto" != i[r][s](n.sizesAttr))) && (l = c[0] || i[r]);
                                    else
                                        te(i[r]);
                            l && !u && te(l)
                        }
                    },
                    V = N(Y),
                    Q = function(e) {
                        v(e.target, n.loadedClass), y(e.target, n.loadingClass), b(e.target, K)
                    },
                    G = S(Q),
                    K = function(e) {
                        G({
                            target: e.target
                        })
                    },
                    J = function(e, t) {
                        try {
                            e.contentWindow.location.replace(t)
                        } catch (n) {
                            e.src = t
                        }
                    },
                    Z = function(e) {
                        var t,
                            o,
                            r = e[s](n.srcsetAttr);
                        (t = n.customMedia[e[s]("data-media") || e[s]("media")]) && e.setAttribute("media", t), r && e.setAttribute("srcset", r), t && (o = e.parentNode, o.insertBefore(e.cloneNode(), e), o.removeChild(e))
                    },
                    ee = S(function(e, t, o, r, i) {
                        var a,
                            l,
                            c,
                            f,
                            h,
                            m;
                        (h = x(e, "lazybeforeunveil", t)).defaultPrevented || (r && (o ? v(e, n.autosizesClass) : e.setAttribute("sizes", r)), l = e[s](n.srcsetAttr), a = e[s](n.srcAttr), i && (c = e.parentNode, f = c && d.test(c.nodeName || "")), m = t.firesLoad || "src" in e && (l || a || f), h = {
                            target: e
                        }, m && (b(e, U, !0), clearTimeout(p), p = u(U, 2500), v(e, n.loadingClass), b(e, K, !0)), f && g.call(c.getElementsByTagName("source"), Z), l ? e.setAttribute("srcset", l) : a && !f && (P.test(e.nodeName) ? J(e, a) : e.src = a), (l || f) && w(e, {
                            src: a
                        })), e._lazyRace && delete e._lazyRace, y(e, n.lazyClass), E(function() {
                            (!m || e.complete && e.naturalWidth > 1) && (m ? U(h) : B--, Q(h))
                        }, !0)
                    }),
                    te = function(e) {
                        var t,
                            o = H.test(e.nodeName),
                            r = o && (e[s](n.sizesAttr) || e[s]("sizes")),
                            i = "auto" == r;
                        (!i && f || !o || !e.src && !e.srcset || e.complete || m(e, n.errorClass)) && (t = x(e, "lazyunveilread").detail, i && D.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, B++, ee(e, t, i, r, o))
                    },
                    ne = function() {
                        if (!f) {
                            if (r.now() - T < 999)
                                return void u(ne, 999);
                            var e = k(function() {
                                n.loadMode = 3, V()
                            });
                            f = !0, n.loadMode = 3, V(), l("scroll", function() {
                                3 == n.loadMode && (n.loadMode = 2), e()
                            }, !0)
                        }
                    };
                return {
                    _: function() {
                        T = r.now(), i = t.getElementsByClassName(n.lazyClass), c = t.getElementsByClassName(n.lazyClass + " " + n.preloadClass), M = n.hFac, l("scroll", V, !0), l("resize", V, !0), e.MutationObserver ? new MutationObserver(V).observe(o, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (o[a]("DOMNodeInserted", V, !0), o[a]("DOMAttrModified", V, !0), setInterval(V, 999)), l("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(e) {
                            t[a](e, V, !0)
                        }), /d$|^c/.test(t.readyState) ? ne() : (l("load", ne), t[a]("DOMContentLoaded", V), u(ne, 2e4)), i.length ? (Y(), E._lsFlush()) : V()
                    },
                    checkElems: V,
                    unveil: te
                }
            }(),
            D = function() {
                var e,
                    o = S(function(e, t, n, o) {
                        var r,
                            i,
                            a;
                        if (e._lazysizesWidth = o, o += "px", e.setAttribute("sizes", o), d.test(t.nodeName || ""))
                            for (r = t.getElementsByTagName("source"), i = 0, a = r.length; a > i; i++)
                                r[i].setAttribute("sizes", o);
                        n.detail.dataAttr || w(e, n.detail)
                    }),
                    r = function(e, t, n) {
                        var r,
                            i = e.parentNode;
                        i && (n = T(e, i, n), r = x(e, "lazybeforesizes", {
                            width: n,
                            dataAttr: !!t
                        }), r.defaultPrevented || (n = r.detail.width, n && n !== e._lazysizesWidth && o(e, i, r, n)))
                    },
                    i = function() {
                        var t,
                            n = e.length;
                        if (n)
                            for (t = 0; n > t; t++)
                                r(e[t])
                    },
                    a = k(i);
                return {
                    _: function() {
                        e = t.getElementsByClassName(n.autosizesClass), l("resize", a)
                    },
                    checkElems: a,
                    updateElem: r
                }
            }(),
            j = function() {
                j.i || (j.i = !0, D._(), A._())
            };
        return function() {
            var t,
                o = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: .8,
                    loadMode: 2
                };
            n = e.lazySizesConfig || e.lazysizesConfig || {};
            for (t in o)
                t in n || (n[t] = o[t]);
            e.lazySizesConfig = n, u(function() {
                n.init && j()
            })
        }(), {
            cfg: n,
            autoSizer: D,
            loader: A,
            init: j,
            uP: w,
            aC: v,
            rC: y,
            hC: m,
            fire: x,
            gW: T,
            rAF: E
        }
    }
}), function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(n) {
        return t(e, n)
    }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, require("jquery")) : e.lity = t(e, e.jQuery || e.Zepto)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e) {
        var t = N();
        return M && e.length ? (e.one(M, t.resolve), setTimeout(t.resolve, 500)) : t.resolve(), t.promise()
    }
    function o(e, n, o) {
        if (1 === arguments.length)
            return t.extend({}, e);
        if ("string" == typeof n) {
            if ("undefined" == typeof o)
                return "undefined" == typeof e[n] ? null : e[n];
            e[n] = o
        } else
            t.extend(e, n);
        return this
    }
    function r(e) {
        for (var t, n = decodeURI(e.split("#")[0]).split("&"), o = {}, r = 0, i = n.length; r < i; r++)
            n[r] && (t = n[r].split("="), o[t[0]] = t[1]);
        return o
    }
    function i(e, n) {
        return e + (e.indexOf("?") > -1 ? "&" : "?") + t.param(n)
    }
    function a(e, t) {
        var n = e.indexOf("#");
        return -1 === n ? t : (n > 0 && (e = e.substr(n)), t + e)
    }
    function s(e) {
        return t('<span class="lity-error"/>').append(e)
    }
    function l(e, n) {
        var o = n.opener() && n.opener().data("lity-desc") || "Image with no description",
            r = t('<img src="' + e + '" alt="' + o + '"/>'),
            i = N(),
            a = function() {
                i.reject(s("Failed loading image"))
            };
        return r.on("load", function() {
            return 0 === this.naturalWidth ? a() : void i.resolve(r)
        }).on("error", a), i.promise()
    }
    function u(e, n) {
        var o,
            r,
            i;
        try {
            o = t(e)
        } catch (a) {
            return !1
        }
        return !!o.length && (r = t('<i style="display:none !important"/>'), i = o.hasClass("lity-hide"), n.element().one("lity:remove", function() {
                r.before(o).remove(), i && !o.closest(".lity-content").length && o.addClass("lity-hide")
            }), o.removeClass("lity-hide").after(r))
    }
    function c(e) {
        var n = L.exec(e);
        return !!n && p(a(e, i("https://www.youtube" + (n[2] || "") + ".com/embed/" + n[4], t.extend({
                autoplay: 1
            }, r(n[5] || "")))))
    }
    function f(e) {
        var n = _.exec(e);
        return !!n && p(a(e, i("https://player.vimeo.com/video/" + n[3], t.extend({
                autoplay: 1
            }, r(n[4] || "")))))
    }
    function d(e) {
        var t = q.exec(e);
        return !!t && p(a(e, i("https://www.google." + t[3] + "/maps?" + t[6], {
                output: t[6].indexOf("layer=c") > 0 ? "svembed" : "embed"
            })))
    }
    function p(e) {
        return '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="' + e + '"/></div>'
    }
    function h() {
        return E.documentElement.clientHeight ? E.documentElement.clientHeight : Math.round(S.height())
    }
    function g(e) {
        var t = x();
        t && (27 === e.keyCode && t.close(), 9 === e.keyCode && m(e, t))
    }
    function m(e, t) {
        var n = t.element().find(O),
            o = n.index(E.activeElement);
        e.shiftKey && o <= 0 ? (n.get(n.length - 1).focus(), e.preventDefault()) : e.shiftKey || o !== n.length - 1 || (n.get(0).focus(), e.preventDefault())
    }
    function v() {
        t.each(A, function(e, t) {
            t.resize()
        })
    }
    function y(e) {
        1 === A.unshift(e) && (k.addClass("lity-active"), S.on({
            resize: v,
            keydown: g
        })), t("body > *").not(e.element()).addClass("lity-hidden").each(function() {
            var e = t(this);
            void 0 === e.data(j) && e.data(j, e.attr(D) || null)
        }).attr(D, "true")
    }
    function b(e) {
        var n;
        e.element().attr(D, "true"), 1 === A.length && (k.removeClass("lity-active"), S.off({
            resize: v,
            keydown: g
        })), A = t.grep(A, function(t) {
            return e !== t
        }), n = A.length ? A[0].element() : t(".lity-hidden"), n.removeClass("lity-hidden").each(function() {
            var e = t(this),
                n = e.data(j);
            n ? e.attr(D, n) : e.removeAttr(D), e.removeData(j)
        })
    }
    function x() {
        return 0 === A.length ? null : A[0]
    }
    function w(e, n, o, r) {
        var i,
            a = "inline",
            s = t.extend({}, o);
        return r && s[r] ? (i = s[r](e, n), a = r) : (t.each(["inline", "iframe"], function(e, t) {
            delete s[t], s[t] = o[t]
        }), t.each(s, function(t, o) {
            return !o || (!(!o.test || o.test(e, n)) || (i = o(e, n), !1 !== i ? (a = t, !1) : void 0))
        })), {
            handler: a,
            content: i || ""
        }
    }
    function C(e, r, i, a) {
        function s(e) {
            c = t(e).css("max-height", h() + "px"), u.find(".lity-loader").each(function() {
                var e = t(this);
                n(e).always(function() {
                    e.remove()
                })
            }), u.removeClass("lity-loading").find(".lity-content").empty().append(c), d = !0, c.trigger("lity:ready", [f])
        }
        var l,
            u,
            c,
            f = this,
            d = !1,
            p = !1;
        r = t.extend({}, F, r), u = t(r.template), f.element = function() {
            return u
        }, f.opener = function() {
            return i
        }, f.options = t.proxy(o, f, r), f.handlers = t.proxy(o, f, r.handlers), f.resize = function() {
            d && !p && c.css("max-height", h() + "px").trigger("lity:resize", [f])
        }, f.close = function() {
            if (d && !p) {
                p = !0, b(f);
                var e = N();
                return a && t.contains(u, E.activeElement) && a.focus(), c.trigger("lity:close", [f]), u.removeClass("lity-opened").addClass("lity-closed"), n(c.add(u)).always(function() {
                    c.trigger("lity:remove", [f]), u.remove(), u = void 0, e.resolve()
                }), e.promise()
            }
        }, l = w(e, f, r.handlers, r.handler), u.attr(D, "false").addClass("lity-loading lity-opened lity-" + l.handler).appendTo("body").focus().on("click", "[data-lity-close]", function(e) {
            t(e.target).is("[data-lity-close]") && f.close()
        }).trigger("lity:open", [f]), y(f), t.when(l.content).always(s)
    }
    function T(e, n, o) {
        e.preventDefault ? (e.preventDefault(), o = t(this), e = o.data("lity-target") || o.attr("href") || o.attr("src")) : o = t(o);
        var r = new C(e, t.extend({}, o.data("lity-options") || o.data("lity"), n), o, E.activeElement);
        if (!e.preventDefault)
            return r
    }
    var E = e.document,
        S = t(e),
        N = t.Deferred,
        k = t("html"),
        A = [],
        D = "aria-hidden",
        j = "lity-" + D,
        O = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',
        F = {
            handler: null,
            handlers: {
                image: l,
                inline: u,
                youtube: c,
                vimeo: f,
                googlemaps: d,
                iframe: p
            },
            template: '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'
        },
        z = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,
        L = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,
        _ = /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,
        q = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,
        M = function() {
            var e = E.createElement("div"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in t)
                if (void 0 !== e.style[n])
                    return t[n];
            return !1
        }();
    return l.test = function(e) {
        return z.test(e)
    }, T.version = "2.1.0", T.options = t.proxy(o, T, F), T.handlers = t.proxy(o, T, F.handlers), T.current = x, t(E).on("click.lity", "[data-lity]", T), T
}), function(e, t, n) {
    "use strict";
    var o,
        r = e.lazySizes && lazySizes.cfg || e.lazySizesConfig,
        i = t.createElement("img"),
        a = "sizes" in i && "srcset" in i,
        s = /\s+\d+h/g,
        l = function() {
            var e = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
                n = Array.prototype.forEach;
            return function(o) {
                var r = t.createElement("img"),
                    i = function(t) {
                        var n,
                            o = t.getAttribute(lazySizesConfig.srcsetAttr);
                        o && (o.match(e) && (n = "w" == RegExp.$2 ? RegExp.$1 / RegExp.$3 : RegExp.$3 / RegExp.$1, n && t.setAttribute("data-aspectratio", n)), t.setAttribute(lazySizesConfig.srcsetAttr, o.replace(s, "")))
                    },
                    a = function(e) {
                        var t = e.target.parentNode;
                        t && "PICTURE" == t.nodeName && n.call(t.getElementsByTagName("source"), i), i(e.target)
                    },
                    l = function() {
                        r.currentSrc && t.removeEventListener("lazybeforeunveil", a)
                    };
                o[1] && (t.addEventListener("lazybeforeunveil", a), r.onload = l, r.onerror = l, r.srcset = "data:,a 1w 1h", r.complete && l())
            }
        }();
    if (r || (r = {}, e.lazySizesConfig = r), r.supportsType || (r.supportsType = function(e) {
        return !e
    }), !e.picturefill && !r.pf) {
        if (e.HTMLPictureElement && a)
            return t.msElementsFromPoint && l(navigator.userAgent.match(/Edge\/(\d+)/)), void (r.pf = function() {});
        r.pf = function(t) {
            var n,
                r;
            if (!e.picturefill)
                for (n = 0, r = t.elements.length; n < r; n++)
                    o(t.elements[n])
        }, o = function() {
            var n = function(e, t) {
                    return e.w - t.w
                },
                i = /^\s*\d+\.*\d*px\s*$/,
                l = function(e) {
                    var t,
                        n,
                        o = e.length,
                        r = e[o - 1],
                        i = 0;
                    for (i; i < o; i++)
                        if (r = e[i], r.d = r.w / e.w, r.d >= e.d) {
                            !r.cached && (t = e[i - 1]) && t.d > e.d - .13 * Math.pow(e.d, 2.2) && (n = Math.pow(t.d - .6, 1.6), t.cached && (t.d += .15 * n), t.d + (r.d - e.d) * n > e.d && (r = t));
                            break
                        }
                    return r
                },
                u = function() {
                    var e,
                        t = /(([^,\s].[^\s]+)\s+(\d+)w)/g,
                        n = /\s/,
                        o = function(t, n, o, r) {
                            e.push({
                                c: n,
                                u: o,
                                w: 1 * r
                            })
                        };
                    return function(r) {
                        return e = [], r = r.trim(), r.replace(s, "").replace(t, o), e.length || !r || n.test(r) || e.push({
                            c: r,
                            u: r,
                            w: 99
                        }), e
                    }
                }(),
                c = function() {
                    c.init || (c.init = !0, addEventListener("resize", function() {
                        var e,
                            n = t.getElementsByClassName("lazymatchmedia"),
                            r = function() {
                                var e,
                                    t;
                                for (e = 0, t = n.length; e < t; e++)
                                    o(n[e])
                            };
                        return function() {
                            clearTimeout(e), e = setTimeout(r, 66)
                        }
                    }()))
                },
                f = function(t, n) {
                    var o,
                        i = t.getAttribute("srcset") || t.getAttribute(r.srcsetAttr);
                    !i && n && (i = t._lazypolyfill ? t._lazypolyfill._set : t.getAttribute(r.srcAttr) || t.getAttribute("src")), t._lazypolyfill && t._lazypolyfill._set == i || (o = u(i || ""), n && t.parentNode && (o.isPicture = "PICTURE" == t.parentNode.nodeName.toUpperCase(), o.isPicture && e.matchMedia && (lazySizes.aC(t, "lazymatchmedia"), c())), o._set = i, Object.defineProperty(t, "_lazypolyfill", {
                        value: o,
                        writable: !0
                    }))
                },
                d = function(t) {
                    var n = e.devicePixelRatio || 1,
                        o = lazySizes.getX && lazySizes.getX(t);
                    return Math.min(o || n, 2.5, n)
                },
                p = function(t) {
                    return e.matchMedia ? (p = function(e) {
                        return !e || (matchMedia(e) || {}).matches
                    })(t) : !t
                },
                h = function(e) {
                    var t,
                        o,
                        a,
                        s,
                        u,
                        c,
                        h;
                    if (s = e, f(s, !0), u = s._lazypolyfill, u.isPicture)
                        for (o = 0, t = e.parentNode.getElementsByTagName("source"), a = t.length; o < a; o++)
                            if (r.supportsType(t[o].getAttribute("type"), e) && p(t[o].getAttribute("media"))) {
                                s = t[o], f(s), u = s._lazypolyfill;
                                break
                            }
                    return u.length > 1 ? (h = s.getAttribute("sizes") || "", h = i.test(h) && parseInt(h, 10) || lazySizes.gW(e, e.parentNode), u.d = d(e), !u.src || !u.w || u.w < h ? (u.w = h, c = l(u.sort(n)), u.src = c) : c = u.src) : c = u[0], c
                },
                g = function(e) {
                    if (!a || !e.parentNode || "PICTURE" == e.parentNode.nodeName.toUpperCase()) {
                        var t = h(e);
                        t && t.u && e._lazypolyfill.cur != t.u && (e._lazypolyfill.cur = t.u, t.cached = !0, e.setAttribute(r.srcAttr, t.u), e.setAttribute("src", t.u))
                    }
                };
            return g.parse = u, g
        }(), r.loadedClass && r.loadingClass && !function() {
            var e = [];
            ['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function(t) {
                e.push(t + r.loadedClass), e.push(t + r.loadingClass)
            }), r.pf({
                elements: t.querySelectorAll(e.join(", "))
            })
        }()
    }
}(window, document), function(e) {
    "use strict";
    var t,
        n = e.createElement("img");
    !("srcset" in n) || "sizes" in n || window.HTMLPictureElement || (t = /^picture$/i, e.addEventListener("lazybeforeunveil", function(n) {
        var o,
            r,
            i,
            a,
            s,
            l,
            u;
        !n.defaultPrevented && !lazySizesConfig.noIOSFix && (o = n.target) && (i = o.getAttribute(lazySizesConfig.srcsetAttr)) && (r = o.parentNode) && ((s = t.test(r.nodeName || "")) || (a = o.getAttribute("sizes") || o.getAttribute(lazySizesConfig.sizesAttr))) && (l = s ? r : e.createElement("picture"), o._lazyImgSrc || Object.defineProperty(o, "_lazyImgSrc", {
            value: e.createElement("source"),
            writable: !0
        }), u = o._lazyImgSrc, a && u.setAttribute("sizes", a), u.setAttribute(lazySizesConfig.srcsetAttr, i), o.setAttribute("data-pfsrcset", i), o.removeAttribute(lazySizesConfig.srcsetAttr), s || (r.insertBefore(l, o), l.appendChild(o)), l.insertBefore(u, o))
    }))
}(document), !function(e, t) {
    "function" == typeof define && define.amd ? define([], function() {
        return e.svg4everybody = t()
    }) : "object" == typeof module && module.exports ? module.exports = t() : e.svg4everybody = t()
}(this, function() {
    function e(e, t, n) {
        if (n) {
            var o = document.createDocumentFragment(),
                r = !t.hasAttribute("viewBox") && n.getAttribute("viewBox");
            r && t.setAttribute("viewBox", r);
            for (var i = n.cloneNode(!0); i.childNodes.length;)
                o.appendChild(i.firstChild);
            e.appendChild(o)
        }
    }
    function t(t) {
        t.onreadystatechange = function() {
            if (4 === t.readyState) {
                var n = t._cachedDocument;
                n || (n = t._cachedDocument = document.implementation.createHTMLDocument(""), n.body.innerHTML = t.responseText, t._cachedTarget = {}), t._embeds.splice(0).map(function(o) {
                    var r = t._cachedTarget[o.id];
                    r || (r = t._cachedTarget[o.id] = n.getElementById(o.id)), e(o.parent, o.svg, r)
                })
            }
        }, t.onreadystatechange()
    }
    function n(n) {
        function r() {
            for (var n = 0; n < h.length;) {
                var s = h[n],
                    l = s.parentNode,
                    u = o(l);
                if (u) {
                    var c = s.getAttribute("xlink:href") || s.getAttribute("href");
                    if (!c && a.attributeName && (c = s.getAttribute(a.attributeName)), i)
                        if (!a.validate || a.validate(c, u, s)) {
                            l.removeChild(s);
                            var f = c.split("#"),
                                m = f.shift(),
                                v = f.join("#");
                            if (m.length) {
                                var y = d[m];
                                y || (y = d[m] = new XMLHttpRequest, y.open("GET", m), y.send(), y._embeds = []), y._embeds.push({
                                    parent: l,
                                    svg: u,
                                    id: v
                                }), t(y)
                            } else
                                e(l, u, document.getElementById(v))
                        } else
                            ++n, ++g
                } else
                    ++n
            }
            (!h.length || h.length - g > 0) && p(r, 67)
        }
        var i,
            a = Object(n),
            s = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
            l = /\bAppleWebKit\/(\d+)\b/,
            u = /\bEdge\/12\.(\d+)\b/,
            c = /\bEdge\/.(\d+)\b/,
            f = window.top !== window.self;
        i = "polyfill" in a ? a.polyfill : s.test(navigator.userAgent) || (navigator.userAgent.match(u) || [])[1] < 10547 || (navigator.userAgent.match(l) || [])[1] < 537 || c.test(navigator.userAgent) && f;
        var d = {},
            p = window.requestAnimationFrame || setTimeout,
            h = document.getElementsByTagName("use"),
            g = 0;
        i && r()
    }
    function o(e) {
        for (var t = e; "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode);)
            ;
        return t
    }
    return n
}), WebFontConfig = {
    google: {
        families: ["PT Serif:400,400italic,700", "PT Sans Narrow:400,700"]
    }
}, $(document).ready(function() {
    svg4everybody(), $("a").smoothScroll({
        offset: -20
    }), $("a[href$='.jpg'], a[href$='.png'], a[href$='.gif']").attr("data-lity", "");
    $.bigfoot()
}), function(e) {
    function t(t) {
        e("#comment-form .js-notice").removeClass("hidden"), e("#comment-form .js-notice-text").html(t)
    }
    e(".js-comments");
    e("#comment-form").submit(function() {
        var n = this;
        return e(n).addClass("disabled"), e("#comment-form-submit").html('<svg class="icon spin"><use xlink:href="/assets/icons/icons.svg#icon-loading"></use></svg> Loading...'), e.ajax({
            type: e(this).attr("method"),
            url: e(this).attr("action"),
            data: e(this).serialize(),
            contentType: "application/x-www-form-urlencoded",
            success: function(n) {
                e("#comment-form-submit").html("Submitted").addClass("btn--disabled"), e("#comment-form .js-notice").removeClass("notice--danger").addClass("notice--success"), t('<strong>Thanks for your comment!</strong> It is <a href="https://github.com/mmistakes/made-mistakes-jekyll/pulls">currently pending</a> and will show on the site once approved.')
            },
            error: function(o) {
                console.log(o), e("#comment-form-submit").html("Submit Comment"), e("#comment-form .js-notice").removeClass("notice--success").addClass("notice--danger"), t("<strong>Sorry, there was an error with your submission.</strong> Please make sure all required fields have been completed and try again."), e(n).removeClass("disabled")
            }
        }), !1
    })
}(jQuery);
var addComment = {
    moveForm: function(e, t, n, o) {
        var r,
            i,
            a,
            s,
            l = this,
            u = l.I(e),
            c = l.I(n),
            f = l.I("cancel-comment-reply-link"),
            d = l.I("comment-replying-to"),
            p = l.I("comment-post-slug"),
            h = c.getElementsByTagName("form")[0];
        if (u && c && f && d && h) {
            l.respondId = n, o = o || !1, l.I("sm-temp-form-div") || (r = document.createElement("div"), r.id = "sm-temp-form-div", r.style.display = "none", c.parentNode.insertBefore(r, c)), u.parentNode.insertBefore(c, u.nextSibling), p && o && (p.value = o), d.value = t, f.style.display = "", f.onclick = function() {
                var e = addComment,
                    t = e.I("sm-temp-form-div"),
                    n = e.I(e.respondId);
                if (t && n)
                    return e.I("comment-replying-to").value = null, t.parentNode.insertBefore(n, t), t.parentNode.removeChild(t), this.style.display = "none", this.onclick = null, !1
            };
            try {
                for (var g = 0; g < h.elements.length; g++)
                    if (i = h.elements[g], s = !1, "getComputedStyle" in window ? a = window.getComputedStyle(i) : document.documentElement.currentStyle && (a = i.currentStyle), (i.offsetWidth <= 0 && i.offsetHeight <= 0 || "hidden" === a.visibility) && (s = !0), "hidden" !== i.type && !i.disabled && !s) {
                        i.focus();
                        break
                    }
            } catch (m) {}
            return !1
        }
    },
    I: function(e) {
        return document.getElementById(e)
    }
};
