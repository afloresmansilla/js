/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(n, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    "use strict";

    function ir(n, t) {
        t = t || u;
        var i = t.createElement("script");
        i.text = n;
        t.head.appendChild(i).parentNode.removeChild(i)
    }

    function fi(n) {
        var t = !!n && "length" in n && n.length,
            r = i.type(n);
        return "function" !== r && !i.isWindow(n) && ("array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n)
    }

    function l(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    }

    function oi(n, t, r) {
        return i.isFunction(t) ? i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function(n) {
            return n === t !== r
        }) : "string" != typeof t ? i.grep(n, function(n) {
            return ot.call(t, n) > -1 !== r
        }) : er.test(t) ? i.filter(t, n, r) : (t = i.filter(t, n), i.grep(n, function(n) {
            return ot.call(t, n) > -1 !== r && 1 === n.nodeType
        }))
    }

    function ar(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType);
        return n
    }

    function ne(n) {
        var t = {};
        return i.each(n.match(h) || [], function(n, i) {
            t[i] = !0
        }), t
    }

    function nt(n) {
        return n
    }

    function pt(n) {
        throw n;
    }

    function vr(n, t, r, u) {
        var f;
        try {
            n && i.isFunction(f = n.promise) ? f.call(n).done(t).fail(r) : n && i.isFunction(f = n.then) ? f.call(n, t, r) : t.apply(void 0, [n].slice(u))
        } catch (n) {
            r.apply(void 0, [n])
        }
    }

    function bt() {
        u.removeEventListener("DOMContentLoaded", bt);
        n.removeEventListener("load", bt);
        i.ready()
    }

    function ht() {
        this.expando = i.expando + ht.uid++
    }

    function re(n) {
        return "true" === n || "false" !== n && ("null" === n ? null : n === +n + "" ? +n : te.test(n) ? JSON.parse(n) : n)
    }

    function pr(n, t, i) {
        var r;
        if (void 0 === i && 1 === n.nodeType)
            if (r = "data-" + t.replace(ie, "-$&").toLowerCase(), i = n.getAttribute(r), "string" == typeof i) {
                try {
                    i = re(i)
                } catch (u) {}
                e.set(n, t, i)
            } else i = void 0;
        return i
    }

    function kr(n, t, r, u) {
        var h, e = 1,
            l = 20,
            c = u ? function() {
                return u.cur()
            } : function() {
                return i.css(n, t, "")
            },
            s = c(),
            o = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = (i.cssNumber[t] || "px" !== o && +s) && ct.exec(i.css(n, t));
        if (f && f[3] !== o) {
            o = o || f[3];
            r = r || [];
            f = +s || 1;
            do e = e || ".5", f /= e, i.style(n, t, f + o); while (e !== (e = c() / s) && 1 !== e && --l)
        }
        return r && (f = +f || +s || 0, h = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = o, u.start = f, u.end = h)), h
    }

    function ue(n) {
        var r, f = n.ownerDocument,
            u = n.nodeName,
            t = si[u];
        return t ? t : (r = f.body.appendChild(f.createElement(u)), t = i.css(r, "display"), r.parentNode.removeChild(r), "none" === t && (t = "block"), si[u] = t, t)
    }

    function tt(n, t) {
        for (var e, u, f = [], i = 0, o = n.length; i < o; i++) u = n[i], u.style && (e = u.style.display, t ? ("none" === e && (f[i] = r.get(u, "display") || null, f[i] || (u.style.display = "")), "" === u.style.display && kt(u) && (f[i] = ue(u))) : "none" !== e && (f[i] = "none", r.set(u, "display", e)));
        for (i = 0; i < o; i++) null != f[i] && (n[i].style.display = f[i]);
        return n
    }

    function o(n, t) {
        var r;
        return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && l(n, t) ? i.merge([n], r) : r
    }

    function hi(n, t) {
        for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function iu(n, t, r, u, f) {
        for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if (e = n[l], e || 0 === e)
                if ("object" === i.type(e)) i.merge(y, e.nodeType ? [e] : e);
                else if (tu.test(e)) {
            for (s = s || h.appendChild(t.createElement("div")), p = (gr.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) s = s.lastChild;
            i.merge(y, s.childNodes);
            s = h.firstChild;
            s.textContent = ""
        } else y.push(t.createTextNode(e));
        for (h.textContent = "", l = 0; e = y[l++];)
            if (u && i.inArray(e, u) > -1) f && f.push(e);
            else if (w = i.contains(e.ownerDocument, e), s = o(h.appendChild(e), "script"), w && hi(s), r)
            for (v = 0; e = s[v++];) nu.test(e.type || "") && r.push(e);
        return h
    }

    function gt() {
        return !0
    }

    function it() {
        return !1
    }

    function uu() {
        try {
            return u.activeElement
        } catch (n) {}
    }

    function ci(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof r && (u = u || r, r = void 0);
            for (s in t) ci(n, s, r, u, t[s], e);
            return n
        }
        if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), f === !1) f = it;
        else if (!f) return n;
        return 1 === e && (o = f, f = function(n) {
            return i().off(n), o.apply(this, arguments)
        }, f.guid = o.guid || (o.guid = i.guid++)), n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }

    function fu(n, t) {
        return l(n, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") ? i(">tbody", n)[0] || n : n
    }

    function ae(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
    }

    function ve(n) {
        var t = ce.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function eu(n, t) {
        var u, c, f, s, h, l, a, o;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), o = s.events)) {
                delete h.handle;
                h.events = {};
                for (f in o)
                    for (u = 0, c = o[f].length; u < c; u++) i.event.add(t, f, o[f][u])
            }
            e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
        }
    }

    function ye(n, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && dr.test(n.type) ? t.checked = n.checked : "input" !== i && "textarea" !== i || (t.defaultValue = n.defaultValue)
    }

    function rt(n, t, u, e) {
        t = gi.apply([], t);
        var l, p, c, a, s, w, h = 0,
            v = n.length,
            k = v - 1,
            y = t[0],
            b = i.isFunction(y);
        if (b || v > 1 && "string" == typeof y && !f.checkClone && he.test(y)) return n.each(function(i) {
            var r = n.eq(i);
            b && (t[0] = y.call(this, i, r.html()));
            rt(r, t, u, e)
        });
        if (v && (l = iu(t, n[0].ownerDocument, !1, n, e), p = l.firstChild, 1 === l.childNodes.length && (l = p), p || e)) {
            for (c = i.map(o(l, "script"), ae), a = c.length; h < v; h++) s = l, h !== k && (s = i.clone(s, !0, !0), a && i.merge(c, o(s, "script"))), u.call(n[h], s, h);
            if (a)
                for (w = c[c.length - 1].ownerDocument, i.map(c, ve), h = 0; h < a; h++) s = c[h], nu.test(s.type || "") && !r.access(s, "globalEval") && i.contains(w, s) && (s.src ? i._evalUrl && i._evalUrl(s.src) : ir(s.textContent.replace(le, ""), w))
        }
        return n
    }

    function ou(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(o(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && hi(o(u, "script")), u.parentNode.removeChild(u));
        return n
    }

    function lt(n, t, r) {
        var o, s, h, u, e = n.style;
        return r = r || ni(n), r && (u = r.getPropertyValue(t) || r[t], "" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), !f.pixelMarginRight() && li.test(u) && su.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = u, u = r.width, e.width = o, e.minWidth = s, e.maxWidth = h)), void 0 !== u ? u + "" : u
    }

    function hu(n, t) {
        return {
            get: function() {
                return n() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function be(n) {
        if (n in vu) return n;
        for (var i = n[0].toUpperCase() + n.slice(1), t = au.length; t--;)
            if (n = au[t] + i, n in vu) return n
    }

    function yu(n) {
        var t = i.cssProps[n];
        return t || (t = i.cssProps[n] = be(n) || n), t
    }

    function pu(n, t, i) {
        var r = ct.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }

    function wu(n, t, r, u, f) {
        for (var o = 0, e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0; e < 4; e += 2) "margin" === r && (o += i.css(n, r + b[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + b[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + b[e] + "Width", !0, f))) : (o += i.css(n, "padding" + b[e], !0, f), "padding" !== r && (o += i.css(n, "border" + b[e] + "Width", !0, f)));
        return o
    }

    function bu(n, t, r) {
        var o, e = ni(n),
            u = lt(n, t, e),
            s = "border-box" === i.css(n, "boxSizing", !1, e);
        return li.test(u) ? u : (o = s && (f.boxSizingReliable() || u === n.style[t]), "auto" === u && (u = n["offset" + t[0].toUpperCase() + t.slice(1)]), u = parseFloat(u) || 0, u + wu(n, t, r || (s ? "border" : "content"), o, e) + "px")
    }

    function s(n, t, i, r, u) {
        return new s.prototype.init(n, t, i, r, u)
    }

    function ai() {
        ti && (u.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(ai) : n.setTimeout(ai, i.fx.interval), i.fx.tick())
    }

    function gu() {
        return n.setTimeout(function() {
            ut = void 0
        }), ut = i.now()
    }

    function ii(n, t) {
        var r, u = 0,
            i = {
                height: n
            };
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = b[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function nf(n, t, i) {
        for (var u, f = (a.tweeners[t] || []).concat(a.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function ke(n, t, u) {
        var f, y, w, c, b, s, o, l, k = "width" in t || "height" in t,
            v = this,
            p = {},
            h = n.style,
            a = n.nodeType && kt(n),
            e = r.get(n, "fxshow");
        u.queue || (c = i._queueHooks(n, "fx"), null == c.unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() {
            c.unqueued || b()
        }), c.unqueued++, v.always(function() {
            v.always(function() {
                c.unqueued--;
                i.queue(n, "fx").length || c.empty.fire()
            })
        }));
        for (f in t)
            if (y = t[f], ku.test(y)) {
                if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
                    if ("show" !== y || !e || void 0 === e[f]) continue;
                    a = !0
                }
                p[f] = e && e[f] || i.style(n, f)
            } if (s = !i.isEmptyObject(t), s || !i.isEmptyObject(p)) {
            k && 1 === n.nodeType && (u.overflow = [h.overflow, h.overflowX, h.overflowY], o = e && e.display, null == o && (o = r.get(n, "display")), l = i.css(n, "display"), "none" === l && (o ? l = o : (tt([n], !0), o = n.style.display || o, l = i.css(n, "display"), tt([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (s || (v.done(function() {
                h.display = o
            }), null == o && (l = h.display, o = "none" === l ? "" : l)), h.display = "inline-block"));
            u.overflow && (h.overflow = "hidden", v.always(function() {
                h.overflow = u.overflow[0];
                h.overflowX = u.overflow[1];
                h.overflowY = u.overflow[2]
            }));
            s = !1;
            for (f in p) s || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                display: o
            }), w && (e.hidden = !a), a && tt([n], !0), v.done(function() {
                a || tt([n]);
                r.remove(n, "fxshow");
                for (f in p) i.style(n, f, p[f])
            })), s = nf(a ? e[f] : 0, f, v), f in e || (e[f] = s.start, a && (s.end = s.start, s.start = 0))
        }
    }

    function de(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function a(n, t, r) {
        var e, o, s = 0,
            l = a.prefilters.length,
            f = i.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (o) return !1;
                for (var s = ut || gu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
                return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (e || f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {},
                    easing: i.easing._default
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: ut || gu(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < r; i++) u.tweens[i].run(1);
                    return t ? (f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u, t])) : f.rejectWith(n, [u, t]), this
                }
            }),
            h = u.props;
        for (de(h, u.opts.specialEasing); s < l; s++)
            if (e = a.prefilters[s].call(u, n, h, u.opts)) return i.isFunction(e.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(e.stop, e)), e;
        return i.map(h, nf, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    function k(n) {
        var t = n.match(h) || [];
        return t.join(" ")
    }

    function d(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }

    function pi(n, t, r, u) {
        var f;
        if (Array.isArray(t)) i.each(t, function(t, i) {
            r || ge.test(n) ? u(n, i) : pi(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
        });
        else if (r || "object" !== i.type(t)) u(n, t);
        else
            for (f in t) pi(n + "[" + f + "]", t[f], r, u)
    }

    function cf(n) {
        return function(t, r) {
            "string" != typeof t && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++]) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function lf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
            }), h
        }
        var f = {},
            o = n === wi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ki(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }

    function so(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes;
            "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) {
                    r.unshift(u);
                    break
                } if (r[0] in i) f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) {
                    f = u;
                    break
                }
                o || (o = u)
            }
            f = f || o
        }
        if (f) return f !== r[0] && r.unshift(f), i[f]
    }

    function ho(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                if ("*" === u) u = e;
                else if ("*" !== e && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                        f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                        break
                    } if (f !== !0)
                if (f && n.throws) t = f(t);
                else try {
                    t = f(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: f ? l : "No conversion from " + e + " to " + u
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var p = [],
        u = n.document,
        pf = Object.getPrototypeOf,
        w = p.slice,
        gi = p.concat,
        ui = p.push,
        ot = p.indexOf,
        vt = {},
        nr = vt.toString,
        yt = vt.hasOwnProperty,
        tr = yt.toString,
        wf = tr.call(Object),
        f = {},
        rr = "3.2.1",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        bf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        kf = /^-ms-/,
        df = /-([a-z])/g,
        gf = function(n, t) {
            return t.toUpperCase()
        },
        y, ei, er, or, sr, hr, cr, lr, h, yr, wt, v, st, si, tu, ut, ti, ku, du, tf, ft, rf, uf, ff, vi, af, et, di, ri, vf, yf;
    i.fn = i.prototype = {
        jquery: rr,
        constructor: i,
        length: 0,
        toArray: function() {
            return w.call(this)
        },
        get: function(n) {
            return null == n ? w.call(this) : n < 0 ? this[n + this.length] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(w.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ui,
        sort: p.sort,
        splice: p.splice
    };
    i.extend = i.fn.extend = function() {
        var e, f, r, t, o, s, n = arguments[0] || {},
            u = 1,
            c = arguments.length,
            h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); u < c; u++)
            if (null != (e = arguments[u]))
                for (f in e) r = n[f], t = e[f], n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (o ? (o = !1, s = r && Array.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (rr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isWindow: function(n) {
            return null != n && n === n.window
        },
        isNumeric: function(n) {
            var t = i.type(n);
            return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
        },
        isPlainObject: function(n) {
            var t, i;
            return !(!n || "[object Object]" !== nr.call(n)) && (!(t = pf(n)) || (i = yt.call(t, "constructor") && t.constructor, "function" == typeof i && tr.call(i) === wf))
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        type: function(n) {
            return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? vt[nr.call(n)] || "object" : typeof n
        },
        globalEval: function(n) {
            ir(n)
        },
        camelCase: function(n) {
            return n.replace(kf, "ms-").replace(df, gf)
        },
        each: function(n, t) {
            var r, i = 0;
            if (fi(n)) {
                for (r = n.length; i < r; i++)
                    if (t.call(n[i], i, n[i]) === !1) break
            } else
                for (i in n)
                    if (t.call(n[i], i, n[i]) === !1) break;
            return n
        },
        trim: function(n) {
            return null == n ? "" : (n + "").replace(bf, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (fi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ui.call(r, n)), r
        },
        inArray: function(n, t, i) {
            return null == t ? -1 : ot.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
            return n.length = r, n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var e, u, r = 0,
                f = [];
            if (fi(n))
                for (e = n.length; r < e; r++) u = t(n[r], r, i), null != u && f.push(u);
            else
                for (r in n) u = t(n[r], r, i), null != u && f.push(u);
            return gi.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, f, r;
            if ("string" == typeof t && (u = n[t], t = n, n = u), i.isFunction(n)) return f = w.call(arguments, 2), r = function() {
                return n.apply(t || this, f.concat(w.call(arguments)))
            }, r.guid = n.guid = n.guid || i.guid++, r
        },
        now: Date.now,
        support: f
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        vt["[object " + t + "]"] = t.toLowerCase()
    });
    y = function(n) {
        function u(n, t, r, u) {
            var s, w, l, a, d, y, g, p = t && t.ownerDocument,
                v = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof n || !n || 1 !== v && 9 !== v && 11 !== v) return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
                if (11 !== v && (d = cr.exec(n)))
                    if (s = d[1]) {
                        if (9 === v) {
                            if (!(l = t.getElementById(s))) return r;
                            if (l.id === s) return r.push(l), r
                        } else if (p && (l = p.getElementById(s)) && et(t, l) && l.id === s) return r.push(l), r
                    } else {
                        if (d[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                        if ((s = d[3]) && e.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r
                    } if (e.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                    if (1 !== v) p = t, g = n;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(vi, yi) : t.setAttribute("id", a = f), y = ft(n), w = y.length; w--;) y[w] = "#" + a + " " + yt(y[w]);
                        g = y.join(",");
                        p = ni.test(n) && ri(t.parentNode) || t
                    }
                    if (g) try {
                        return k.apply(r, p.querySelectorAll(g)), r
                    } catch (nt) {} finally {
                        a === f && t.removeAttribute("id")
                    }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }

        function ti() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
            }
            var i = [];
            return n
        }

        function l(n) {
            return n[f] = !0, n
        }

        function a(n) {
            var t = i.createElement("fieldset");
            try {
                return !!n(t)
            } catch (r) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ii(n, i) {
            for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
        }

        function wi(n, t) {
            var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function ar(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }

        function vr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }

        function bi(n) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && lr(t) === n : t.disabled === n : "label" in t && t.disabled === n
            }
        }

        function it(n) {
            return l(function(t) {
                return t = +t, l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ri(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n
        }

        function ki() {}

        function yt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function pt(n, t, i) {
            var r = t.dir,
                u = t.next,
                e = u || r,
                o = i && "parentNode" === e,
                s = di++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (1 === t.nodeType || o) return n(t, i, u);
                return !1
            } : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, h)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (a = t[f] || (t[f] = {}), l = a[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((c = l[e]) && c[0] === v && c[1] === s) return y[2] = c[2];
                                if (l[e] = y, y[2] = n(t, i, h)) return !0
                            } return !1
            }
        }

        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function yr(n, t, i) {
            for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
            return i
        }

        function wt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
            return o
        }

        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), l(function(f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    b = f || yr(t || "*", o.nodeType ? [o] : o, []),
                    v = !n || !f && t ? b : wt(b, p, n, o, s),
                    h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = wt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = wt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
            })
        }

        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = pt(function(n) {
                    return n === o
                }, c, !0), a = pt(function(n) {
                    return nt(o, n) > -1
                }, c, !0), e = [function(n, t, i) {
                    var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                    return o = null, r
                }]; i < s; i++)
                if (u = t.relative[n[i].type]) e = [pt(ui(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && yt(n))
                    }
                    e.push(u)
                } return ui(e)
        }

        function pr(n, r) {
            var f = r.length > 0,
                e = n.length > 0,
                o = function(o, s, c, l, a) {
                    var y, nt, d, g = 0,
                        p = "0",
                        tt = o && [],
                        w = [],
                        it = ht,
                        rt = o || e && t.find.TAG("*", a),
                        ut = v += null == it ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (a && (ht = s === i || s || a); p !== ft && null != (y = rt[p]); p++) {
                        if (e && y) {
                            for (nt = 0, s || y.ownerDocument === i || (b(y), c = !h); d = n[nt++];)
                                if (d(y, s || i, c)) {
                                    l.push(y);
                                    break
                                } a && (v = ut)
                        }
                        f && ((y = !d && y) && g--, o && tt.push(y))
                    }
                    if (g += p, f && p !== g) {
                        for (nt = 0; d = r[nt++];) d(tt, w, s, c);
                        if (o) {
                            if (g > 0)
                                while (p--) tt[p] || w[p] || (w[p] = nr.call(l));
                            w = wt(w)
                        }
                        k.apply(l, w);
                        a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                    }
                    return a && (v = ut, ht = it), tt
                };
            return f ? l(o) : o
        }
        var rt, e, t, st, oi, ft, bt, si, ht, w, ut, b, i, s, h, o, d, ct, et, f = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            di = 0,
            hi = ti(),
            ci = ti(),
            lt = ti(),
            kt = function(n, t) {
                return n === t && (ut = !0), 0
            },
            gi = {}.hasOwnProperty,
            g = [],
            nr = g.pop,
            tr = g.push,
            k = g.push,
            li = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            dt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ai = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            gt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ai + ")*)|.*)\\)|)",
            ir = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            rr = new RegExp("^" + r + "*," + r + "*"),
            ur = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            fr = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
            er = new RegExp(gt),
            or = new RegExp("^" + tt + "$"),
            vt = {
                ID: new RegExp("^#(" + tt + ")"),
                CLASS: new RegExp("^\\.(" + tt + ")"),
                TAG: new RegExp("^(" + tt + "|[*])"),
                ATTR: new RegExp("^" + ai),
                PSEUDO: new RegExp("^" + gt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + dt + ")$", "i"),
                needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
            },
            sr = /^(?:input|select|textarea|button)$/i,
            hr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            cr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ni = /[+~]/,
            y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
            p = function(n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            vi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            yi = function(n, t) {
                return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
            },
            pi = function() {
                b()
            },
            lr = pt(function(n) {
                return n.disabled === !0 && ("form" in n || "label" in n)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            k.apply(g = li.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (wr) {
            k = {
                apply: g.length ? function(n, t) {
                    tr.apply(n, li.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        e = u.support = {};
        oi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return !!t && "HTML" !== t.nodeName
        };
        b = u.setDocument = function(n) {
            var v, u, l = n ? n.ownerDocument || n : c;
            return l !== i && 9 === l.nodeType && l.documentElement ? (i = l, s = i.documentElement, h = !oi(i), c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)), e.attributes = a(function(n) {
                return n.className = "i", !n.getAttribute("className")
            }), e.getElementsByTagName = a(function(n) {
                return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
            }), e.getElementsByClassName = ot.test(i.getElementsByClassName), e.getById = a(function(n) {
                return s.appendChild(n).id = f, !i.getElementsByName || !i.getElementsByName(f).length
            }), e.getById ? (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }, t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }) : (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }, t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && h) {
                    var i, u, f, r = t.getElementById(n);
                    if (r) {
                        if (i = r.getAttributeNode("id"), i && i.value === n) return [r];
                        for (f = t.getElementsByName(n), u = 0; r = f[u++];)
                            if (i = r.getAttributeNode("id"), i && i.value === n) return [r]
                    }
                    return []
                }
            }), t.find.TAG = e.getElementsByTagName ? function(n, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
            } : function(n, t) {
                var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++]) 1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }, t.find.CLASS = e.getElementsByClassName && function(n, t) {
                if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n)
            }, d = [], o = [], (e.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + dt + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
            }), a(function(n) {
                n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (e.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                e.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", gt)
            }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            } : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1
            }, kt = v ? function(n, t) {
                if (n === t) return ut = !0, 0;
                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & r || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
            } : function(n, t) {
                if (n === t) return ut = !0, 0;
                var r, u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t];
                if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                if (o === s) return wi(n, t);
                for (r = n; r = r.parentNode;) f.unshift(r);
                for (r = t; r = r.parentNode;) e.unshift(r);
                while (f[u] === e[u]) u++;
                return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
            }, i) : i
        };
        u.matches = function(n, t) {
            return u(n, null, null, t)
        };
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== i && b(n), t = t.replace(fr, "='$1']"), e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
                var r = ct.call(n, t);
                if (r || e.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r
            } catch (f) {}
            return u(t, i, null, [n]).length > 0
        };
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== i && b(n), et(n, t)
        };
        u.attr = function(n, r) {
            (n.ownerDocument || n) !== i && b(n);
            var f = t.attrHandle[r.toLowerCase()],
                u = f && gi.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : void 0;
            return void 0 !== u ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        };
        u.escape = function(n) {
            return (n + "").replace(vi, yi)
        };
        u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function(n) {
            var r, u = [],
                t = 0,
                i = 0;
            if (ut = !e.detectDuplicates, w = !e.sortStable && n.slice(0), n.sort(kt), ut) {
                while (r = n[i++]) r === n[i] && (t = u.push(i));
                while (t--) n.splice(u[t], 1)
            }
            return w = null, n
        };
        st = u.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent) return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                } else if (3 === t || 4 === t) return n.nodeValue
            } else
                while (r = n[u++]) i += st(r);
            return i
        };
        t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
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
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && er.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(ir, " ") + " ").indexOf(i) > -1 : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3),
                        o = "last" !== n.slice(-4),
                        e = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    } : function(t, i, h) {
                        var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling",
                            d = t.parentNode,
                            nt = e && t.nodeName.toLowerCase(),
                            g = !h && !e,
                            l = !1;
                        if (d) {
                            if (s) {
                                while (k) {
                                    for (c = t; c = c[k];)
                                        if (e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                    b = k = "only" === n && !b && "nextSibling"
                                }
                                return !0
                            }
                            if (b = [o ? d.firstChild : d.lastChild], o && g) {
                                for (c = d, y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a && p[2], c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop();)
                                    if (1 === c.nodeType && ++l && c === t) {
                                        w[n] = [v, a, l];
                                        break
                                    }
                            } else if (g && (c = t, y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a), l === !1)
                                while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                    if ((e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && (y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), w[n] = [v, l]), c === t)) break;
                            return l -= u, l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                        for (var u, f = r(n, i), e = f.length; e--;) u = nt(n, f[e]), n[u] = !(t[u] = f[e])
                    }) : function(n) {
                        return r(n, 0, e)
                    }) : r
                }
            },
            pseudos: {
                not: l(function(n) {
                    var t = [],
                        r = [],
                        i = bt(n.replace(at, "$1"));
                    return i[f] ? l(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                    }
                }),
                has: l(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: l(function(n) {
                    return n = n.replace(y, p),
                        function(t) {
                            return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                        }
                }),
                lang: l(function(n) {
                    return or.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: bi(!1),
                disabled: bi(!0),
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return hr.test(n.nodeName)
                },
                input: function(n) {
                    return sr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: it(function() {
                    return [0]
                }),
                last: it(function(n, t) {
                    return [t - 1]
                }),
                eq: it(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: it(function(n, t) {
                    for (var i = 0; i < t; i += 2) n.push(i);
                    return n
                }),
                odd: it(function(n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n
                }),
                lt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                    return n
                }),
                gt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (rt in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[rt] = ar(rt);
        for (rt in {
                submit: !0,
                reset: !0
            }) t.pseudos[rt] = vr(rt);
        return ki.prototype = t.filters = t.pseudos, t.setFilters = new ki, ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                (!e || (f = rr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                e = !1;
                (f = ur.exec(r)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }), r = r.slice(e.length));
                for (o in t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }, bt = u.compile = function(n, t) {
            var r, u = [],
                e = [],
                i = lt[n + " "];
            if (!i) {
                for (t || (t = ft(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                i = lt(n, pr(e, u));
                i.selector = n
            }
            return i
        }, si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = "function" == typeof n && n,
                s = !u && ft(n = c.selector || n);
            if (r = r || [], 1 === s.length) {
                if (f = s[0] = s[0].slice(0), f.length > 2 && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                    if (i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0], !i) return r;
                    c && (i = i.parentNode);
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
                    if (e = f[o], t.relative[l = e.type]) break;
                    if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ni.test(f[0].type) && ri(i.parentNode) || i))) {
                        if (f.splice(o, 1), n = u.length && yt(f), !n) return k.apply(r, u), r;
                        break
                    }
                }
            }
            return (c || bt(n, s))(u, i, !h, r, !i || ni.test(n) && ri(i.parentNode) || i), r
        }, e.sortStable = f.split("").sort(kt).join("") === f, e.detectDuplicates = !!ut, b(), e.sortDetached = a(function(n) {
            return 1 & n.compareDocumentPosition(i.createElement("fieldset"))
        }), a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
        }) || ii("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), e.attributes && a(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
        }) || ii("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
        }), a(function(n) {
            return null == n.getAttribute("disabled")
        }) || ii(dt, function(n, t, i) {
            var r;
            if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n);
    i.find = y;
    i.expr = y.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = y.uniqueSort;
    i.text = y.getText;
    i.isXMLDoc = y.isXML;
    i.contains = y.contains;
    i.escapeSelector = y.escape;
    var g = function(n, t, r) {
            for (var u = [], f = void 0 !== r;
                (n = n[t]) && 9 !== n.nodeType;)
                if (1 === n.nodeType) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                } return u
        },
        ur = function(n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i
        },
        fr = i.expr.match.needsContext;
    ei = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    er = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length,
                f = this;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return u > 1 ? i.uniqueSort(r) : r
        },
        filter: function(n) {
            return this.pushStack(oi(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(oi(this, n || [], !0))
        },
        is: function(n) {
            return !!oi(this, "string" == typeof n && fr.test(n) ? i(n) : n || [], !1).length
        }
    });
    sr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    hr = i.fn.init = function(n, t, r) {
        var f, e;
        if (!n) return this;
        if (r = r || or, "string" == typeof n) {
            if (f = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : sr.exec(n), !f || !f[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (f[1]) {
                if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), ei.test(f[1]) && i.isPlainObject(t))
                    for (f in t) i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                return this
            }
            return e = u.getElementById(f[2]), e && (this[0] = e, this.length = 1), this
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : i.isFunction(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
    };
    hr.prototype = i.fn;
    or = i(u);
    cr = /^(?:parents|prev(?:Until|All))/;
    lr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0,
                o = this.length,
                u = [],
                e = "string" != typeof n && i(n);
            if (!fr.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        } return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? ot.call(i(n), this[0]) : ot.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return g(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return g(n, "parentNode", i)
        },
        next: function(n) {
            return ar(n, "nextSibling")
        },
        prev: function(n) {
            return ar(n, "previousSibling")
        },
        nextAll: function(n) {
            return g(n, "nextSibling")
        },
        prevAll: function(n) {
            return g(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return g(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return g(n, "previousSibling", i)
        },
        siblings: function(n) {
            return ur((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return ur(n.firstChild)
        },
        contents: function(n) {
            return l(n, "iframe") ? n.contentDocument : (l(n, "template") && (n = n.content || n), i.merge([], n.childNodes))
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (lr[n] || i.uniqueSort(f), cr.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    h = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        n = "string" == typeof n ? ne(n) : i.extend({}, n);
        var e, r, h, u, t = [],
            o = [],
            f = -1,
            c = function() {
                for (u = u || n.once, h = e = !0; o.length; f = -1)
                    for (r = o.shift(); ++f < t.length;) t[f].apply(r[0], r[1]) === !1 && n.stopOnFalse && (f = t.length, r = !1);
                n.memory || (r = !1);
                e = !1;
                u && (t = r ? [] : "")
            },
            s = {
                add: function() {
                    return t && (r && !e && (f = t.length - 1, o.push(r)), function u(r) {
                        i.each(r, function(r, f) {
                            i.isFunction(f) ? n.unique && s.has(f) || t.push(f) : f && f.length && "string" !== i.type(f) && u(f)
                        })
                    }(arguments), r && !e && c()), this
                },
                remove: function() {
                    return i.each(arguments, function(n, r) {
                        for (var u;
                            (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), u <= f && f--
                    }), this
                },
                has: function(n) {
                    return n ? i.inArray(n, t) > -1 : t.length > 0
                },
                empty: function() {
                    return t && (t = []), this
                },
                disable: function() {
                    return u = o = [], t = r = "", this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return u = o = [], r || e || (t = r = ""), this
                },
                locked: function() {
                    return !!u
                },
                fireWith: function(n, t) {
                    return u || (t = t || [], t = [n, t.slice ? t.slice() : t], o.push(t), e || c()), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!h
                }
            };
        return s
    };
    i.extend({
        Deferred: function(t) {
            var u = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                e = "pending",
                f = {
                    state: function() {
                        return e
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function(n) {
                        return f.then(null, n)
                    },
                    pipe: function() {
                        var n = arguments;
                        return i.Deferred(function(t) {
                            i.each(u, function(u, f) {
                                var e = i.isFunction(n[f[4]]) && n[f[4]];
                                r[f[1]](function() {
                                    var n = e && e.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    then: function(t, r, f) {
                        function o(t, r, u, f) {
                            return function() {
                                var s = this,
                                    h = arguments,
                                    l = function() {
                                        var n, c;
                                        if (!(t < e)) {
                                            if (n = u.apply(s, h), n === r.promise()) throw new TypeError("Thenable self-resolution");
                                            c = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                            i.isFunction(c) ? f ? c.call(n, o(e, r, nt, f), o(e, r, pt, f)) : (e++, c.call(n, o(e, r, nt, f), o(e, r, pt, f), o(e, r, nt, r.notifyWith))) : (u !== nt && (s = void 0, h = [n]), (f || r.resolveWith)(s, h))
                                        }
                                    },
                                    c = f ? l : function() {
                                        try {
                                            l()
                                        } catch (n) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(n, c.stackTrace);
                                            t + 1 >= e && (u !== pt && (s = void 0, h = [n]), r.rejectWith(s, h))
                                        }
                                    };
                                t ? c() : (i.Deferred.getStackHook && (c.stackTrace = i.Deferred.getStackHook()), n.setTimeout(c))
                            }
                        }
                        var e = 0;
                        return i.Deferred(function(n) {
                            u[0][3].add(o(0, n, i.isFunction(f) ? f : nt, n.notifyWith));
                            u[1][3].add(o(0, n, i.isFunction(t) ? t : nt));
                            u[2][3].add(o(0, n, i.isFunction(r) ? r : pt))
                        }).promise()
                    },
                    promise: function(n) {
                        return null != n ? i.extend(n, f) : f
                    }
                },
                r = {};
            return i.each(u, function(n, t) {
                var i = t[2],
                    o = t[5];
                f[t[1]] = i.add;
                o && i.add(function() {
                    e = o
                }, u[3 - n][2].disable, u[0][2].lock);
                i.add(t[3].fire);
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                };
                r[t[0] + "With"] = i.fireWith
            }), f.promise(r), t && t.call(r, r), r
        },
        when: function(n) {
            var f = arguments.length,
                t = f,
                e = Array(t),
                u = w.call(arguments),
                r = i.Deferred(),
                o = function(n) {
                    return function(t) {
                        e[n] = this;
                        u[n] = arguments.length > 1 ? w.call(arguments) : t;
                        --f || r.resolveWith(e, u)
                    }
                };
            if (f <= 1 && (vr(n, r.done(o(t)).resolve, r.reject, !f), "pending" === r.state() || i.isFunction(u[t] && u[t].then))) return r.then();
            while (t--) vr(u[t], o(t), r.reject);
            return r.promise()
        }
    });
    yr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) {
        n.console && n.console.warn && t && yr.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    };
    i.readyException = function(t) {
        n.setTimeout(function() {
            throw t;
        })
    };
    wt = i.Deferred();
    i.fn.ready = function(n) {
        return wt.then(n)["catch"](function(n) {
            i.readyException(n)
        }), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || wt.resolveWith(u, [i]))
        }
    });
    i.ready.then = wt.then;
    "complete" === u.readyState || "loading" !== u.readyState && !u.documentElement.doScroll ? n.setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", bt), n.addEventListener("load", bt));
    v = function(n, t, r, u, f, e, o) {
        var s = 0,
            c = n.length,
            h = null == r;
        if ("object" === i.type(r)) {
            f = !0;
            for (s in r) v(n, t, s, r[s], !0, e, o)
        } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                return h.call(i(n), r)
            })), t))
            for (; s < c; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    };
    st = function(n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
    };
    ht.uid = 1;
    ht.prototype = {
        cache: function(n) {
            var t = n[this.expando];
            return t || (t = {}, st(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(n, t, r) {
            var u, f = this.cache(n);
            if ("string" == typeof t) f[i.camelCase(t)] = r;
            else
                for (u in t) f[i.camelCase(u)] = t[u];
            return f
        },
        get: function(n, t) {
            return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][i.camelCase(t)]
        },
        access: function(n, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t)
        },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (Array.isArray(t) ? t = t.map(i.camelCase) : (t = i.camelCase(t), t = (t in r) ? [t] : t.match(h) || []), u = t.length; u--;) delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
            }
        },
        hasData: function(n) {
            var t = n[this.expando];
            return void 0 !== t && !i.isEmptyObject(t)
        }
    };
    var r = new ht,
        e = new ht,
        te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ie = /[A-Z]/g;
    i.extend({
        hasData: function(n) {
            return e.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return e.access(n, t, i)
        },
        removeData: function(n, t) {
            e.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var o, f, s, u = this[0],
                h = u && u.attributes;
            if (void 0 === n) {
                if (this.length && (s = e.get(u), 1 === u.nodeType && !r.get(u, "hasDataAttrs"))) {
                    for (o = h.length; o--;) h[o] && (f = h[o].name, 0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), pr(u, f, s[f])));
                    r.set(u, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof n ? this.each(function() {
                e.set(this, n)
            }) : v(this, function(t) {
                var i;
                if (u && void 0 === t) {
                    if ((i = e.get(u, n), void 0 !== i) || (i = pr(u, n), void 0 !== i)) return i
                } else this.each(function() {
                    e.set(this, n, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                e.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() {
                    i.dequeue(n, t)
                };
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {
                    --e || o.resolveWith(f, [f])
                };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var wr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ct = new RegExp("^(?:([+-])=|)(" + wr + ")([a-z%]*)$", "i"),
        b = ["Top", "Right", "Bottom", "Left"],
        kt = function(n, t) {
            return n = t || n, "none" === n.style.display || "" === n.style.display && i.contains(n.ownerDocument, n) && "none" === i.css(n, "display")
        },
        br = function(n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f
        };
    si = {};
    i.fn.extend({
        show: function() {
            return tt(this, !0)
        },
        hide: function() {
            return tt(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                kt(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var dr = /^(?:checkbox|radio)$/i,
        gr = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        nu = /^$|\/(?:java|ecma)script/i,
        c = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            thead: [1, "<table>", "<\/table>"],
            col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: [0, "", ""]
        };
    c.optgroup = c.option;
    c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
    c.th = c.td;
    tu = /<|&#?\w+;/;
    ! function() {
        var i = u.createDocumentFragment(),
            n = i.appendChild(u.createElement("div")),
            t = u.createElement("input");
        t.setAttribute("type", "radio");
        t.setAttribute("checked", "checked");
        t.setAttribute("name", "t");
        n.appendChild(t);
        f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        n.innerHTML = "<textarea>x<\/textarea>";
        f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
    }();
    var dt = u.documentElement,
        fe = /^key/,
        ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ru = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var v, y, w, p, b, c, s, l, o, k, d, a = r.get(n);
            if (a)
                for (u.handler && (v = u, u = v.handler, e = v.selector), e && i.find.matchesSelector(dt, e), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) {
                        if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
                    }), t = (t || "").match(h) || [""], b = t.length; b--;) w = ru.exec(t[b]) || [], o = d = w[1], k = (w[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, c = i.extend({
                    type: o,
                    origType: d,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: k.join(".")
                }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y)), s.add && (s.add.call(n, c), c.handler.guid || (c.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, c) : l.push(c), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, c, v, p, s, l, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (t = (t || "").match(h) || [""], p = t.length; p--;)
                    if (c = ru.exec(t[p]) || [], o = d = c[1], b = (c[2] || "").split(".").sort(), o) {
                        for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                        k && !a.length && (l.teardown && l.teardown.call(n, b, w.handle) !== !1 || i.removeEvent(n, o, w.handle), delete v[o])
                    } else
                        for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var t = i.event.fix(n),
                u, c, s, e, f, l, h = new Array(arguments.length),
                a = (r.get(this, "events") || {})[t.type] || [],
                o = i.event.special[t.type] || {};
            for (h[0] = t, u = 1; u < arguments.length; u++) h[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || o.preDispatch.call(this, t) !== !1) {
                for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, s = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== s && (t.result = s) === !1 && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(n, t) {
            var f, e, u, o, s, c = [],
                h = t.delegateCount,
                r = n.target;
            if (h && r.nodeType && !("click" === n.type && n.button >= 1))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || r.disabled !== !0)) {
                        for (o = [], s = {}, f = 0; f < h; f++) e = t[f], u = e.selector + " ", void 0 === s[u] && (s[u] = e.needsContext ? i(u, this).index(r) > -1 : i.find(u, this, null, [r]).length), s[u] && o.push(e);
                        o.length && c.push({
                            elem: r,
                            handlers: o
                        })
                    } return r = this, h < t.length && c.push({
                elem: r,
                handlers: t.slice(h)
            }), c
        },
        addProp: function(n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: i.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[n]
                },
                set: function(t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(n) {
            return n[i.expando] ? n : new i.Event(n)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== uu() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === uu() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && l(this, "input")) return this.click(), !1
                },
                _default: function(n) {
                    return l(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    };
    i.Event = function(n, t) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? gt : it, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: it,
        isPropagationStopped: it,
        isImmediatePropagationStopped: it,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = gt;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = gt;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = gt;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
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
        char: !0,
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
        which: function(n) {
            var t = n.button;
            return null == n.which && fe.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && ee.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which
        }
    }, i.event.addProp);
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return ci(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return ci(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if ("object" == typeof n) {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return t !== !1 && "function" != typeof t || (r = t, t = void 0), r === !1 && (r = it), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        se = /<script|<style|<link/i,
        he = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ce = /^true\/(.*)/,
        le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) {
            return n.replace(oe, "<$1><\/$2>")
        },
        clone: function(n, t, r) {
            var u, c, s, e, h = n.cloneNode(!0),
                l = i.contains(n.ownerDocument, n);
            if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (e = o(h), s = o(n), u = 0, c = s.length; u < c; u++) ye(s[u], e[u]);
            if (t)
                if (r)
                    for (s = s || o(n), e = e || o(h), u = 0, c = s.length; u < c; u++) eu(s[u], e[u]);
                else eu(n, h);
            return e = o(h, "script"), e.length > 0 && hi(e, !l && o(n, "script")), h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, o = 0; void 0 !== (t = n[o]); o++)
                if (st(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0
                    }
                    t[e.expando] && (t[e.expando] = void 0)
                }
        }
    });
    i.fn.extend({
        detach: function(n) {
            return ou(this, n, !0)
        },
        remove: function(n) {
            return ou(this, n)
        },
        text: function(n) {
            return v(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return rt(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = fu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return rt(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = fu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return rt(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return rt(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(o(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = null != n && n, t = null == t ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return v(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof n && !se.test(n) && !c[(gr.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) t = this[r] || {}, 1 === t.nodeType && (i.cleanData(o(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (f) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return rt(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(o(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ui.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var su = /^margin/,
        li = new RegExp("^(" + wr + ")(?!px)[a-z%]+$", "i"),
        ni = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = n), i.getComputedStyle(t)
        };
    ! function() {
        function r() {
            if (t) {
                t.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                t.innerHTML = "";
                dt.appendChild(e);
                var i = n.getComputedStyle(t);
                o = "1%" !== i.top;
                c = "2px" === i.marginLeft;
                s = "4px" === i.width;
                t.style.marginRight = "50%";
                h = "4px" === i.marginRight;
                dt.removeChild(e);
                t = null
            }
        }
        var o, s, h, c, e = u.createElement("div"),
            t = u.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === t.style.backgroundClip, e.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", e.appendChild(t), i.extend(f, {
            pixelPosition: function() {
                return r(), o
            },
            boxSizingReliable: function() {
                return r(), s
            },
            pixelMarginRight: function() {
                return r(), h
            },
            reliableMarginLeft: function() {
                return r(), c
            }
        }))
    }();
    var pe = /^(none|table(?!-c[ea]).+)/,
        cu = /^--/,
        we = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        lu = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        au = ["Webkit", "Moz", "ms"],
        vu = u.createElement("div").style;
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = lt(n, "opacity");
                        return "" === i ? "1" : i
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
            float: "cssFloat"
        },
        style: function(n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var e, s, o, c = i.camelCase(t),
                    l = cu.test(t),
                    h = n.style;
                return l || (t = yu(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r ? o && "get" in o && void 0 !== (e = o.get(n, !1, u)) ? e : h[t] : (s = typeof r, "string" === s && (e = ct.exec(r)) && e[1] && (r = kr(n, t, e), s = "number"), null != r && r === r && ("number" === s && (r += e && e[3] || (i.cssNumber[c] ? "" : "px")), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (h[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? h.setProperty(t, r) : h[t] = r)), void 0)
            }
        },
        css: function(n, t, r, u) {
            var f, o, e, s = i.camelCase(t),
                h = cu.test(t);
            return h || (t = yu(s)), e = i.cssHooks[t] || i.cssHooks[s], e && "get" in e && (f = e.get(n, !0, r)), void 0 === f && (f = lt(n, t, u)), "normal" === f && t in lu && (f = lu[t]), "" === r || r ? (o = parseFloat(f), r === !0 || isFinite(o) ? o || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return !pe.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? bu(n, t, u) : br(n, we, function() {
                    return bu(n, t, u)
                })
            },
            set: function(n, r, u) {
                var f, e = u && ni(n),
                    o = u && wu(n, t, u, "border-box" === i.css(n, "boxSizing", !1, e), e);
                return o && (f = ct.exec(r)) && "px" !== (f[3] || "px") && (n.style[t] = r, r = i.css(n, t)), pu(n, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = hu(f.reliableMarginLeft, function(n, t) {
        if (t) return (parseFloat(lt(n, "marginLeft")) || n.getBoundingClientRect().left - br(n, {
            marginLeft: 0
        }, function() {
            return n.getBoundingClientRect().left
        })) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        su.test(n) || (i.cssHooks[n + t].set = pu)
    });
    i.fn.extend({
        css: function(n, t) {
            return v(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (Array.isArray(t)) {
                    for (f = ni(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        }
    });
    i.Tween = s;
    s.prototype = {
        constructor: s,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = s.propHooks[this.prop];
            return n && n.get ? n.get(this) : s.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = s.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this
        }
    };
    s.prototype.init.prototype = s.prototype;
    s.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
            }
        }
    };
    s.propHooks.scrollTop = s.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = s.prototype.init;
    i.fx.step = {};
    ku = /^(?:toggle|show|hide)$/;
    du = /queueHooks$/;
    i.Animation = i.extend(a, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return kr(i.elem, n, ct.exec(t), i), i
            }]
        },
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.match(h);
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], a.tweeners[r] = a.tweeners[r] || [], a.tweeners[r].unshift(t)
        },
        prefilters: [ke],
        prefilter: function(n, t) {
            t ? a.prefilters.unshift(n) : a.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return i.fx.off ? u.duration = 0 : "number" != typeof u.duration && (u.duration = u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default), null != u.queue && u.queue !== !0 || (u.queue = "fx"), u.old = u.complete, u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(kt).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = a(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = null != n && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && du.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                !s && u || i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ii(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: ii("show"),
        slideUp: ii("hide"),
        slideToggle: ii("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (ut = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        ut = void 0
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        ti || (ti = !0, ai())
    };
    i.fx.stop = function() {
        ti = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
            return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function(i, r) {
                var u = n.setTimeout(i, t);
                r.stop = function() {
                    n.clearTimeout(u)
                }
            })
        },
        function() {
            var n = u.createElement("input"),
                t = u.createElement("select"),
                i = t.appendChild(u.createElement("option"));
            n.type = "checkbox";
            f.checkOn = "" !== n.value;
            f.optSelected = i.selected;
            n = u.createElement("input");
            n.value = "t";
            n.type = "radio";
            f.radioValue = "t" === n.value
        }();
    ft = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return v(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (f = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? tf : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : f && "set" in f && void 0 !== (u = f.set(n, r, t)) ? u : (n.setAttribute(t, r + ""), r) : f && "get" in f && null !== (u = f.get(n, t)) ? u : (u = i.find.attr(n, t), null == u ? void 0 : u))
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!f.radioValue && "radio" === t && l(n, "input")) {
                        var i = n.value;
                        return n.setAttribute("type", t), i && (n.value = i), t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var i, u = 0,
                r = t && t.match(h);
            if (r && 1 === n.nodeType)
                while (i = r[u++]) n.removeAttribute(i)
        }
    });
    tf = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = ft[t] || i.find.attr;
        ft[t] = function(n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = ft[u], ft[u] = f, f = null != r(n, t, i) ? u : null, ft[u] = e), f
        }
    });
    rf = /^(?:input|select|textarea|button)$/i;
    uf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return v(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : rf.test(n.nodeName) || uf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    f.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, u, f, s, e, c = 0;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, d(this)))
            });
            if ("string" == typeof n && n)
                for (o = n.match(h) || []; t = this[c++];)
                    if (u = d(t), r = 1 === t.nodeType && " " + k(u) + " ") {
                        for (s = 0; f = o[s++];) r.indexOf(" " + f + " ") < 0 && (r += f + " ");
                        e = k(r);
                        u !== e && t.setAttribute("class", e)
                    } return this
        },
        removeClass: function(n) {
            var o, r, t, u, f, s, e, c = 0;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, d(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof n && n)
                for (o = n.match(h) || []; r = this[c++];)
                    if (u = d(r), t = 1 === r.nodeType && " " + k(u) + " ") {
                        for (s = 0; f = o[s++];)
                            while (t.indexOf(" " + f + " ") > -1) t = t.replace(" " + f + " ", " ");
                        e = k(t);
                        u !== e && r.setAttribute("class", e)
                    } return this
        },
        toggleClass: function(n, t) {
            var u = typeof n;
            return "boolean" == typeof t && "string" === u ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, d(this), t), t)
            }) : this.each(function() {
                var t, e, f, o;
                if ("string" === u)
                    for (e = 0, f = i(this), o = n.match(h) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                else void 0 !== n && "boolean" !== u || (t = d(this), t && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || n === !1 ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (1 === t.nodeType && (" " + k(d(t)) + " ").indexOf(i) > -1) return !0;
            return !1
        }
    });
    ff = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                var u;
                1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(ff, "") : null == r ? "" : r)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : k(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (t = o[r], (t.selected || r === u) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            s.push(e)
                        } return s
                },
                set: function(n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0);
                    return u || (n.selectedIndex = -1), e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (Array.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1
            }
        };
        f.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        })
    });
    vi = /^(?:focusinfocus|focusoutblur)$/;
    i.extend(i.event, {
        trigger: function(t, f, e, o) {
            var w, s, c, b, a, v, l, p = [e || u],
                h = yt.call(t, "type") ? t.type : t,
                y = yt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = e = e || u, 3 !== e.nodeType && 8 !== e.nodeType && !vi.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = e), f = null == f ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                if (!o && !l.noBubble && !i.isWindow(e)) {
                    for (b = l.delegateType || h, vi.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                }
                for (w = 0;
                    (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && st(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), f) !== !1 || !st(e) || a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = void 0, c && (e[a] = c)), t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    f.focusin = "onfocusin" in n;
    f.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    var at = n.location,
        ef = i.now(),
        yi = /\?/;
    i.parseXML = function(t) {
        var r;
        if (!t || "string" != typeof t) return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (u) {
            r = void 0
        }
        return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
    };
    var ge = /\[\]$/,
        of = /\r?\n/g,
        no = /^(?:submit|button|image|reset|file)$/i,
        to = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [],
            f = function(n, t) {
                var r = i.isFunction(t) ? t() : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == r ? "" : r)
            };
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            f(this.name, this.value)
        });
        else
            for (r in n) pi(r, n[r], t, f);
        return u.join("&")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && to.test(this.nodeName) && !no.test(n) && (this.checked || !dr.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : Array.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace( of , "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace( of , "\r\n")
                }
            }).get()
        }
    });
    var io = /%20/g,
        ro = /#.*$/,
        uo = /([?&])_=[^&]*/,
        fo = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        eo = /^(?:GET|HEAD)$/,
        oo = /^\/\//,
        sf = {},
        wi = {},
        hf = "*/".concat("*"),
        bi = u.createElement("a");
    return bi.href = at.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: at.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(at.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": hf,
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
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
        },
        ajaxPrefilter: cf(sf),
        ajaxTransport: cf(wi),
        ajax: function(t, r) {
            function b(t, r, u, h) {
                var y, rt, g, p, b, l = r;
                s || (s = !0, d && n.clearTimeout(d), a = void 0, k = h || "", e.readyState = t > 0 ? 4 : 0, y = t >= 200 && t < 300 || 304 === t, u && (p = so(f, e, u)), p = ho(f, p, e, y), y ? (f.ifModified && (b = e.getResponseHeader("Last-Modified"), b && (i.lastModified[o] = b), b = e.getResponseHeader("etag"), b && (i.etag[o] = b)), 204 === t || "HEAD" === f.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, g = p.error, y = !g)) : (g = l, !t && l || (l = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || l) + "", y ? tt.resolveWith(c, [rt, l, e]) : tt.rejectWith(c, [e, l, g]), e.statusCode(w), w = void 0, v && nt.trigger(y ? "ajaxSuccess" : "ajaxError", [e, f, y ? rt : g]), it.fireWith(c, [e, l]), v && (nt.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (r = t, t = void 0);
            r = r || {};
            var a, o, k, y, d, l, s, v, g, p, f = i.ajaxSetup({}, r),
                c = f.context || f,
                nt = f.context && (c.nodeType || c.jquery) ? i(c) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = f.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (s) {
                            if (!y)
                                for (y = {}; t = fo.exec(k);) y[t[1].toLowerCase()] = t[2];
                            t = y[n.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return s ? k : null
                    },
                    setRequestHeader: function(n, t) {
                        return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return null == s && (f.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this
                    },
                    abort: function(n) {
                        var t = n || ft;
                        return a && a.abort(t), b(0, t), this
                    }
                };
            if (tt.promise(e), f.url = ((t || f.url || at.href) + "").replace(oo, at.protocol + "//"), f.type = r.method || r.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(h) || [""], null == f.crossDomain) {
                l = u.createElement("a");
                try {
                    l.href = f.url;
                    l.href = l.href;
                    f.crossDomain = bi.protocol + "//" + bi.host != l.protocol + "//" + l.host
                } catch (et) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = i.param(f.data, f.traditional)), lf(sf, f, r, e), s) return e;
            v = i.event && f.global;
            v && 0 == i.active++ && i.event.trigger("ajaxStart");
            f.type = f.type.toUpperCase();
            f.hasContent = !eo.test(f.type);
            o = f.url.replace(ro, "");
            f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(io, "+")) : (p = f.url.slice(o.length), f.data && (o += (yi.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (o = o.replace(uo, "$1"), p = (yi.test(o) ? "&" : "?") + "_=" + ef++ + p), f.url = o + p);
            f.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
            (f.data && f.hasContent && f.contentType !== !1 || r.contentType) && e.setRequestHeader("Content-Type", f.contentType);
            e.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + hf + "; q=0.01" : "") : f.accepts["*"]);
            for (g in f.headers) e.setRequestHeader(g, f.headers[g]);
            if (f.beforeSend && (f.beforeSend.call(c, e, f) === !1 || s)) return e.abort();
            if (ft = "abort", it.add(f.complete), e.done(f.success), e.fail(f.error), a = lf(wi, f, r, e)) {
                if (e.readyState = 1, v && nt.trigger("ajaxSend", [e, f]), s) return e;
                f.async && f.timeout > 0 && (d = n.setTimeout(function() {
                    e.abort("timeout")
                }, f.timeout));
                try {
                    s = !1;
                    a.send(rt, b)
                } catch (et) {
                    if (s) throw et;
                    b(-1, et)
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    }), i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax(i.extend({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            }, i.isPlainObject(n) && n))
        }
    }), i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, i.fn.extend({
        wrapAll: function(n) {
            var t;
            return this[0] && (i.isFunction(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function(n) {
            return this.parent(n).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }), this
        }
    }), i.expr.pseudos.hidden = function(n) {
        return !i.expr.pseudos.visible(n)
    }, i.expr.pseudos.visible = function(n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    }, i.ajaxSettings.xhr = function() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }, af = {
        0: 200,
        1223: 204
    }, et = i.ajaxSettings.xhr(), f.cors = !!et && "withCredentials" in et, f.ajax = et = !!et, i.ajaxTransport(function(t) {
        var i, r;
        if (f.cors || et && !t.crossDomain) return {
            send: function(u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                for (o in u) e.setRequestHeader(o, u[o]);
                i = function(n) {
                    return function() {
                        i && (i = r = e.onload = e.onerror = e.onabort = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(af[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                            binary: e.response
                        } : {
                            text: e.responseText
                        }, e.getAllResponseHeaders()))
                    }
                };
                e.onload = i();
                r = e.onerror = i("error");
                void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() {
                    4 === e.readyState && n.setTimeout(function() {
                        i && r()
                    })
                };
                i = i("abort");
                try {
                    e.send(t.hasContent && t.data || null)
                } catch (s) {
                    if (i) throw s;
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), i.ajaxPrefilter(function(n) {
        n.crossDomain && (n.contents.script = !1)
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var r, t;
            return {
                send: function(f, e) {
                    r = i("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e("error" === n.type ? 404 : 200, n.type)
                    });
                    u.head.appendChild(r[0])
                },
                abort: function() {
                    t && t()
                }
            }
        }
    }), di = [], ri = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = di.pop() || i.expando + "_" + ef++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, e, o, s = t.jsonp !== !1 && (ri.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ri.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ri, "$1" + f) : t.jsonp !== !1 && (t.url += (yi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
            return o || i.error(f + " was not called"), o[0]
        }, t.dataTypes[0] = "json", e = n[f], n[f] = function() {
            o = arguments
        }, u.always(function() {
            void 0 === e ? i(n).removeProp(f) : n[f] = e;
            t[f] && (t.jsonpCallback = r.jsonpCallback, di.push(f));
            o && i.isFunction(e) && e(o[0]);
            o = e = void 0
        }), "script"
    }), f.createHTMLDocument = function() {
        var n = u.implementation.createHTMLDocument("").body;
        return n.innerHTML = "<form><\/form><form><\/form>", 2 === n.childNodes.length
    }(), i.parseHTML = function(n, t, r) {
        if ("string" != typeof n) return [];
        "boolean" == typeof t && (r = t, t = !1);
        var s, e, o;
        return t || (f.createHTMLDocument ? (t = u.implementation.createHTMLDocument(""), s = t.createElement("base"), s.href = u.location.href, t.head.appendChild(s)) : t = u), e = ei.exec(n), o = !r && [], e ? [t.createElement(e[1])] : (e = iu([n], t, o), o && o.length && i(o).remove(), i.merge([], e.childNodes))
    }, i.fn.load = function(n, t, r) {
        var u, o, s, f = this,
            e = n.indexOf(" ");
        return e > -1 && (u = k(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), f.length > 0 && i.ajax({
            url: n,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            s = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).always(r && function(n, t) {
            f.each(function() {
                r.apply(this, s || [n.responseText, t, n])
            })
        }), this
    }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }), i.expr.pseudos.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {};
            "static" === l && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
            null != t.top && (f.top = t.top - u.top + h);
            null != t.left && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var r, u, f, e, t = this[0];
            if (t) return t.getClientRects().length ? (f = t.getBoundingClientRect(), r = t.ownerDocument, u = r.documentElement, e = r.defaultView, {
                top: f.top + e.pageYOffset - u.clientTop,
                left: f.left + e.pageXOffset - u.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var t, r, u = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (t = this.offsetParent(), r = this.offset(), l(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + i.css(t[0], "borderTopWidth", !0),
                    left: n.left + i.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: r.top - n.top - i.css(u, "marginTop", !0),
                    left: r.left - n.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || dt
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(u) {
            return v(this, function(n, u, f) {
                var e;
                return i.isWindow(n) ? e = n : 9 === n.nodeType && (e = n.defaultView), void 0 === f ? e ? e[t] : n[u] : void(e ? e.scrollTo(r ? e.pageXOffset : f, r ? f : e.pageYOffset) : n[u] = f)
            }, n, u, arguments.length)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = hu(f.pixelPosition, function(n, r) {
            if (r) return r = lt(n, t), li.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || "boolean" != typeof f),
                    s = r || (f === !0 || e === !0 ? "margin" : "border");
                return v(this, function(t, r, f) {
                    var e;
                    return i.isWindow(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : void 0, o)
            }
        })
    }), i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    }), i.holdReady = function(n) {
        n ? i.readyWait++ : i.ready(!0)
    }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = l, "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }), vf = n.jQuery, yf = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = yf), t && n.jQuery === i && (n.jQuery = vf), i
    }, t || (n.jQuery = n.$ = i), i
});
(function(n) {
    function o(i, r, f, o) {
        var s = {
            data: o || (r ? r.data : {}),
            _wrap: r ? r._wrap : null,
            tmpl: null,
            parent: r || null,
            nodes: [],
            calls: d,
            nest: g,
            wrap: nt,
            html: tt,
            update: it
        };
        return i && n.extend(s, i, {
            nodes: [],
            parent: r
        }), f && (s.tmpl = f, s._ctnt = s._ctnt || s.tmpl(n, s), s.key = ++e, (h.length ? u : t)[e] = s), s
    }

    function s(t, i, u) {
        var f, e = u ? n.map(u, function(n) {
            return typeof n == "string" ? t.key ? n.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + r + '="' + t.key + '" $2') : n : s(n, t, n._ctnt)
        }) : t;
        return i ? e : (e = e.join(""), e.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function(t, i, r, u) {
            f = n(r).get();
            b(f);
            i && (f = c(i).concat(f));
            u && (f = f.concat(c(u)))
        }), f ? f : c(e))
    }

    function c(t) {
        var i = document.createElement("div");
        return i.innerHTML = t, n.makeArray(i.childNodes)
    }

    function p(t) {
        return new Function("jQuery", "$item", "var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('" + n.trim(t).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function(t, i, r, u, f, e, o) {
            var h = n.tmpl.tag[r],
                c, s, a;
            if (!h) throw "Template command not found: " + r;
            return c = h._default || [], e && !/\w$/.test(f) && (f += e, e = ""), f ? (f = l(f), o = o ? "," + l(o) + ")" : e ? ")" : "", s = e ? f.indexOf(".") > -1 ? f + e : "(" + f + ").call($item" + o : f, a = e ? s : "(typeof(" + f + ")==='function'?(" + f + ").call($item):(" + f + "))") : a = s = c.$1 || "null", u = l(u), "');" + h[i ? "close" : "open"].split("$notnull_1").join(f ? "typeof(" + f + ")!=='undefined' && (" + f + ")!=null" : "true").split("$1a").join(a).split("$1").join(s).split("$2").join(u ? u.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g, function(n, t, i, r) {
                return r = r ? "," + r + ")" : i ? ")" : "", r ? "(" + t + ").call($item" + r : n
            }) : c.$2 || "") + "_.push('"
        }) + "');}return _;")
    }

    function w(t, i) {
        t._wrap = s(t, !0, n.isArray(i) ? i : [v.test(i) ? i : n(i).html()]).join("")
    }

    function l(n) {
        return n ? n.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }

    function k(n) {
        var t = document.createElement("div");
        return t.appendChild(n.cloneNode(!0)), t.innerHTML
    }

    function b(f) {
        function p(f) {
            function p(n) {
                n = n + a;
                s = v[n] = v[n] || o(s, t[s.parent.key + a] || s.parent, null, !0)
            }
            var y, h = f,
                c, s, l;
            if (l = f.getAttribute(r)) {
                while (h.parentNode && (h = h.parentNode).nodeType === 1 && !(y = h.getAttribute(r)));
                y !== l && (h = h.parentNode ? h.nodeType === 11 ? 0 : h.getAttribute(r) || 0 : 0, (s = t[l]) || (s = u[l], s = o(s, t[h] || u[h], null, !0), s.key = ++e, t[e] = s), i && p(l));
                f.removeAttribute(r)
            } else i && (s = n.data(f, "tmplItem")) && (p(s.key), t[s.key] = s, h = n.data(f.parentNode, "tmplItem"), h = h ? h.key : 0);
            if (s) {
                for (c = s; c && c.key != h;) c.nodes.push(f), c = c.parent;
                delete s._ctnt;
                delete s._wrap;
                n.data(f, "tmplItem", s)
            }
        }
        for (var a = "_" + i, c, l, v = {}, h, s = 0, y = f.length; s < y; s++)
            if ((c = f[s]).nodeType === 1) {
                for (l = c.getElementsByTagName("*"), h = l.length - 1; h >= 0; h--) p(l[h]);
                p(c)
            }
    }

    function d(n, t, i, r) {
        if (!n) return h.pop();
        h.push({
            _: n,
            tmpl: t,
            item: this,
            data: i,
            options: r
        })
    }

    function g(t, i, r) {
        return n.tmpl(n.template(t), i, r, this)
    }

    function nt(t, i) {
        var r = t.options || {};
        return r.wrapped = i, n.tmpl(n.template(t.tmpl), t.data, r, t.item)
    }

    function tt(t, i) {
        var r = this._wrap;
        return n.map(n(n.isArray(r) ? r.join("") : r).filter(t || "*"), function(n) {
            return i ? n.innerText || n.textContent : n.outerHTML || k(n)
        })
    }

    function it() {
        var t = this.nodes;
        n.tmpl(null, null, null, this).insertBefore(t[0]);
        n(t).remove()
    }
    var a = n.fn.domManip,
        r = "_tmplitem",
        v = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
        t = {},
        u = {},
        f, y = {
            key: 0,
            data: {}
        },
        e = 0,
        i = 0,
        h = [];
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(r, u) {
        n.fn[r] = function(e) {
            var o = [],
                h = n(e),
                c, s, a, v, l = this.length === 1 && this[0].parentNode;
            if (f = t || {}, l && l.nodeType === 11 && l.childNodes.length === 1 && h.length === 1) h[u](this[0]), o = this;
            else {
                for (s = 0, a = h.length; s < a; s++) i = s, c = (s > 0 ? this.clone(!0) : this).get(), n.fn[u].apply(n(h[s]), c), o = o.concat(c);
                i = 0;
                o = this.pushStack(o, r, h.selector)
            }
            return v = f, f = null, n.tmpl.complete(v), o
        }
    });
    n.fn.extend({
        tmpl: function(t, i, r) {
            return n.tmpl(this[0], t, i, r)
        },
        tmplItem: function() {
            return n.tmplItem(this[0])
        },
        template: function(t) {
            return n.template(t, this[0])
        },
        domManip: function(r, u, e) {
            if (r[0] && r[0].nodeType) {
                for (var o = n.makeArray(arguments), s = r.length, h = 0, c; h < s && !(c = n.data(r[h++], "tmplItem")););
                s > 1 && (o[0] = [n.makeArray(r)]);
                c && i && (o[2] = function(t) {
                    n.tmpl.afterManip(this, t, e)
                });
                a.apply(this, o)
            } else a.apply(this, arguments);
            return i = 0, f || n.tmpl.complete(t), this
        }
    });
    n.extend({
        tmpl: function(i, r, f, e) {
            var h, c = !e;
            if (c) e = y, i = n.template[i] || n.template(null, i), u = {};
            else if (!i) return i = e.tmpl, t[e.key] = e, e.nodes = [], e.wrapped && w(e, e.wrapped), n(s(e, null, e.tmpl(n, e)));
            return i ? (typeof r == "function" && (r = r.call(e || {})), f && f.wrapped && w(f, f.wrapped), h = n.isArray(r) ? n.map(r, function(n) {
                return n ? o(f, e, i, n) : null
            }) : [o(f, e, i, r)], c ? n(s(e, null, h)) : h) : []
        },
        tmplItem: function(t) {
            var i;
            for (t instanceof n && (t = t[0]); t && t.nodeType === 1 && !(i = n.data(t, "tmplItem")) && (t = t.parentNode););
            return i || y
        },
        template: function(t, i) {
            return i ? (typeof i == "string" ? i = p(i) : i instanceof n && (i = i[0] || {}), i.nodeType && (i = n.data(i, "tmpl") || n.data(i, "tmpl", p(i.innerHTML))), typeof t == "string" ? n.template[t] = i : i) : t ? typeof t != "string" ? n.template(null, t) : n.template[t] || n.template(null, v.test(t) ? t : n(t)) : null
        },
        encode: function(n) {
            return ("" + n).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    });
    n.extend(n.tmpl, {
        tag: {
            tmpl: {
                _default: {
                    $2: "null"
                },
                open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {
                    $2: "null"
                },
                open: "$item.calls(_,$1,$2);_=[];",
                close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
            },
            each: {
                _default: {
                    $2: "$index, $value"
                },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: {
                    $1: "true"
                },
                open: "}else if(($notnull_1) && $1a){"
            },
            html: {
                open: "if($notnull_1){_.push($1a);}"
            },
            "=": {
                _default: {
                    $1: "$data"
                },
                open: "if($notnull_1){_.push($.encode($1a));}"
            },
            "!": {
                open: ""
            }
        },
        complete: function() {
            t = {}
        },
        afterManip: function(t, r, u) {
            var f = r.nodeType === 11 ? n.makeArray(r.childNodes) : r.nodeType === 1 ? [r] : [];
            u.call(t, r);
            b(f);
            i++
        }
    })
})(jQuery);

function CheckSessionTimeout() {
    var n = 59;
    n = n * 6e4 - 3e4;
    timeout !== undefined && window.clearTimeout(timeout);
    timeout = window.setTimeout("showTimeoutHome();", n)
}

function InitHome() {
    SaveTracker("rs.sessionexpiry.tracking");
    secs = 30;
    StopHomeTimer();
    StartHomeTimer()
}

function StopHomeTimer() {
    TimerRunning && window.clearTimeout(TimerID);
    TimerRunning = !1
}

function StartHomeTimer() {
    TimerRunning = !0;
    TimerID = window.setTimeout("StartHomeTimer()", 1e3);
    secs === 0 ? (HomeCommonService.IsRemainingSecsExpired = !0, StopHomeTimer()) : HomeCommonService.IsRemainingSecsExpired = !1;
    secs--
}

function PageRedirectToCMS() {
    window.onbeforeunload = null;
    $("#sessionDialog").hide();
    $(".overlay").removeClass("active");
    var n = location.href.replace(location.href, "https://www.rastreator.com");
    window.parent.location.replace(n)
}

function StopHomeTimeout() {
    console.log("==Stop Timer==");
    window.clearTimeout(timeout)
}

function processHomeSessionKill(n) {
    $.ajax({
        type: "GET",
        url: n,
        async: !1,
        data: {},
        contentType: "application/json",
        dataType: "json",
        success: function() {
            PageRedirectToCMS()
        },
        failure: function() {
            console.log("==Fail Session==")
        }
    })
}

function processHomeSessionReactivation(n) {
    CheckSessionTimeout();
    isOverlayClick = !1;
    $.ajax({
        type: "GET",
        async: !1,
        url: n,
        data: {},
        contentType: "application/json",
        dataType: "json",
        success: function() {
            $("#sessionDialog").hide();
            $(".overlay").removeClass("active");
            console.log("==Session Reactive==")
        },
        failure: function() {
            console.log("==Fail Reactive Session==")
        }
    })
}

function isTimeRunning(n, t) {
    TimerRunning ? (n = n + "?Option=ReactivateSession", processHomeSessionReactivation(n)) : (n = n + "?Option=KillSession", processHomeSessionKill(n, t))
}
var secs, TimerRunning, TimerID, showTimeoutHome, pUrl, timeout, isOverlayClick;
TimerRunning = !1;
console.log("Home Product Session JS Loaded");
isOverlayClick = !1;
showTimeoutHome = function() {
    $(".overlay").addClass("active");
    $("#sessionDialog").show().load("/Sesion-Vencimiento.aspx")
};
$(".wsection").click(function() {
    $.post("/HomeCallbacks.aspx", function(n) {
        if (n === "SessionExpired" || n === "SpamSuspected") {
            var t = location.href.replace(location.href, "https://www.rastreator.com");
            window.parent.location.replace(t)
        }
    })
});
var LastQuote = function() {},
    lastQuoteObj;
LastQuote.prototype = function() {
    var f, t, o, r, u, c, s, n, l, y, p = function() {
            ft()
        },
        a = function() {
            if (h(u) && (CommonFunctionsModule.setCookieForHours("lq_trackingid", u, 24), lastQuoteObj.IsPopUpShowed = e("is_popup"), lastQuoteObj.IsPopUpShowed === undefined || lastQuoteObj.IsPopUpShowed === null ? (lastQuoteObj.IsPopUpShowed = "true", n = "true", i("is_verify", n)) : (lastQuoteObj.IsPopUpShowed = "false", n = "false", i("is_verify", n)), i("is_popup", lastQuoteObj.IsPopUpShowed)), f.CustomerActivityID > 0) {
                if (lastQuoteObj.IsPopUpShowed = e("is_popup"), !h(u) && lastQuoteObj.IsPopUpShowed === "true" && !r) return !1;
                lastQuoteObj.IsPopUpShowed !== "false" || r || i("is_popup", "true");
                HomeCommonService.saveCounter(HomeCommonService.getCounterName("LastQuotePopUpIndex"));
                $(".overlay").addClass("active");
                $("#loadPreviousQuoteModel").show().load("/PreviousQuote.aspx");
                $("#previousQuoteModalEmail").hide();
                setTimeout(function() {
                    HomeCommonService.pushDataLayerEvent({
                        event: "virtualpage",
                        virtualpage: "lastquotepopup",
                        categoryvp: "insurance",
                        productvp: "home",
                        lastquotepopupscreen: "1"
                    })
                }, 2e3)
            }
        },
        w = function() {
            $(".overlay").removeClass("active");
            $("#previousQuoteModal").hide();
            var n = event.target.className.indexOf("second-screen") > -1 ? "2" : event.target.className.indexOf("third-screen") > -1 ? "3" : "1";
            HomeCommonService.dataLayerEvent = {
                event: "lastquotepopupanswer",
                lastquotepopupanswer: "close",
                lastquotepopupcategory: "insurance",
                lastquotepopupproduct: "home",
                lastquotepopupscreen: n
            };
            HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent);
            $("html, body").animate({
                scrollTop: 0
            })
        },
        b = function(n) {
            $(".overlay").removeClass("active");
            $("#previousQuoteModal").hide();
            var t = n.target.className.indexOf("second-screen") > -1 ? "2" : n.target.className.indexOf("third-screen") > -1 ? "3" : "1";
            HomeCommonService.dataLayerEvent = {
                event: "lastquotepopupanswer",
                lastquotepopupanswer: "nuevacomparativa",
                lastquotepopupcategory: "insurance",
                lastquotepopupproduct: "home",
                lastquotepopupscreen: t
            };
            HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent);
            $("html, body").animate({
                scrollTop: 0
            })
        },
        k = function(n) {
            $(".overlay").removeClass("active");
            $("#previousQuoteModal").hide();
            var t = n.target.className.indexOf("second-screen") > -1 ? "2" : n.target.className.indexOf("third-screen") > -1 ? "3" : "1";
            HomeCommonService.dataLayerEvent = {
                event: "lastquotepopupanswer",
                lastquotepopupanswer: "close",
                lastquotepopupcategory: "insurance",
                lastquotepopupproduct: "home",
                lastquotepopupscreen: t
            };
            HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent);
            $("html, body").animate({
                scrollTop: 0
            })
        },
        d = function() {
            et(f);
            HomeCommonService.dataLayerEvent = {
                event: "lastquotepopupanswer",
                lastquotepopupanswer: "recuperarcomparativa",
                lastquotepopupcategory: "insurance",
                lastquotepopupproduct: "home",
                lastquotepopupscreen: "1"
            };
            HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent);
            lastQuoteObj.IsPopUpShowed = e("is_popup");
            n = e("is_verify");
            !h(u) && lastQuoteObj.IsPopUpShowed === "true" && r && n == "true" ? v() : (i("is_popup", "true"), $(".overlay").addClass("second-screen"), $(".icon-cancel").addClass("icon-cancel-second-screen"), $(".closePreviousQuoteModalByButton").addClass("second-screen"), HomeCommonService.saveCounter(HomeCommonService.getCounterName("LastQuotePopUpVerifyEmail")), $("#previousQuoteModalEmailBlock").removeAttr("style"), $("#previousQuoteModalEmailBlock").css("display", "block"), $("#previousQuoteStep1").css("display", "none"));
            HomeCommonService.dataLayerEvent = {
                event: "virtualpage",
                virtualpage: "lastquotepopup",
                categoryvp: "insurance",
                productvp: "home",
                lastquotepopupscreen: "2"
            };
            HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent)
        },
        g = function() {
            var t = $("#txt_Email").val();
            if (t = t.replace("á", "a"), t = t.replace("Á", "A"), t = t.replace("é", "e"), t = t.replace("É", "E"), t = t.replace("í", "i"), t = t.replace("Í", "I"), t = t.replace("ó", "o"), t = t.replace("Ó", "O"), t = t.replace("ú", "u"), t = t.replace("Ú", "U"), $("#txt_Email").val(t), HomeCommonService.selectedItem.email = t, $("#txt_Email").removeClass("error"), $("#errorEmail").text(""), it())
                if (f.EmailAddress.toLowerCase() === t.toLowerCase()) n = "true", i("is_verify", n), HomeCommonService.saveCounter(HomeCommonService.getCounterName("LastQuotePopUpdetails")), $(".overlay").removeClass("second-screen"), $(".overlay").addClass("third-screen"), $(".icon-cancel").removeClass("icon-cancel-second-screen"), $(".icon-cancel").addClass("icon-cancel-third-screen"), $(".closePreviousQuoteModalByButton").removeClass("second-screen"), $(".closePreviousQuoteModalByButton").addClass("third-screen"), HomeCommonService.dataLayerEvent = {
                    event: "lastquotepopupanswer",
                    lastquotepopupanswer: "emailverify",
                    lastquotepopupcategory: "insurance",
                    lastquotepopupproduct: "home",
                    lastquotepopupscreen: "2"
                }, HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent), $("#Screen1").css("display", "none"), $("#Screen3").removeAttr("style"), $("#Screen3").css("display", "block"), HomeCommonService.dataLayerEvent = {
                    event: "virtualpage",
                    virtualpage: "lastquotepopup",
                    categoryvp: "insurance",
                    productvp: "home",
                    lastquotepopupscreen: "3"
                }, HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent);
                else return n = "false", i("is_verify", n), HomeCommonService.dataLayerEvent = {
                    event: "virtualpage",
                    virtualpage: "lastquotepopuperror",
                    categoryvp: "insurance",
                    productvp: "home",
                    lastquotepopupscreen: "2"
                }, HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent), $("#txt_Email").addClass("error"), $("#errorEmail").text(CommonData.ErrorMessages.PreviousQuotePopUpEmailNotMatch), !1;
            else return HomeCommonService.dataLayerEvent = {
                event: "virtualpage",
                virtualpage: "lastquotepopuperror",
                categoryvp: "insurance",
                productvp: "home",
                lastquotepopupscreen: "2"
            }, HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent), !1
        },
        v = function() {
            rt()
        },
        nt = function() {
            if (getKeyCode(this, event) == 13) return $("#PreviousQuoteStep2").click()
        },
        tt = function() {
            HomeCommonService.isInternalRedirect = !0;
            var n = s + "/modifica-tus-datos.aspx?c-sig=" + l + "&id=" + o + "&returncode=lastquotes";
            wsURl = location.href.replace(location.href, n);
            window.parent.location.replace(n)
        },
        it = function() {
            var n = !1;
            return HomeCommonService.selectedItem.email && HomeCommonService.selectedItem.email.indexOf("@") !== -1 && HomeCommonService.selectedItem.email.indexOf(".") !== -1 && HomeValidationService.IsValidEmail("txt_Email") ? ($("#txt_Email").removeClass("error"), $("#errorEmail").text(""), n = !0) : ($("#txt_Email").addClass("error"), $("#errorEmail").text(CommonData.ErrorMessages.InvalidPreviousQuotePopUpEmail), n = !1), n
        },
        rt = function() {
            var t = ut(),
                n;
            HomeCommonService.isInternalRedirect = !0;
            n = location.href.replace(location.href, t);
            window.parent.location.replace(n)
        },
        ut = function() {
            return s + "/email-quotes-landing.aspx?returncode=lastquotes&id=" + o
        },
        ft = function() {
            $.ajax({
                type: "GET",
                url: CommonData.Urls.GetLastQuoteDetailURL,
                contentType: "application/json;",
                dataType: "json",
                async: !1,
                success: function(n) {
                    n && (f = JSON.parse(n.Item1), t = JSON.parse(n.Item2), r = t.IsMobile, o = t.encryptedQuoteID, u = t.SessionTrackerID, c = t.IsRastreator, s = t.landingUrlBase, l = t.cSig, t.isUPAEnable || a())
                }
            })
        },
        et = function(n) {
            $("#spanEmail").html(n.MaskedEmailAddress);
            $("#firstRow").html(n.HouseKind + ' <i class="icon icon-check"><\/i>');
            $("#secondRow").html(n.PostalCode + ' <i class="icon icon-check"><\/i>');
            $("#thirdRow").html(n.HouseArea + 'm2 <i class="icon icon-check"><\/i>');
            $("#fourthRow").html(n.ContructionYear + ' <i class="icon icon-check"><\/i>')
        },
        e = function(n) {
            return localStorage.getItem(n)
        },
        i = function(n, t) {
            localStorage.setItem(n, t)
        },
        ot = function(n) {
            n in localStorage && localStorage.removeItem(n)
        },
        h = function(n) {
            return CommonFunctionsModule.getCookie("lq_trackingid") !== n || CommonFunctionsModule.getCookie("lq_trackingid") === "" ? !0 : !1
        };
    return {
        PreviousQuoteModalLoad: a,
        ClosePreviousQuoteModal: w,
        ClosePreviousQuoteModalByButton: b,
        ClosePreviousQuoteModalByOverlay: k,
        PreviousQuoteStep1: d,
        PreviousQuoteStep2: g,
        PreviousQuoteStep3: v,
        keyPressOnEmail: nt,
        GetWS: tt,
        init: p,
        IsMobile: r,
        IsRastreator: c,
        IsPopUpShowed: y
    }
}();
lastQuoteObj = new LastQuote;

function wait(n) {
    for (var t = Date.now(), i = t; i - t < n;) i = Date.now()
}
var body = document.querySelector("body"),
    helpButton = document.querySelector("#helpButton"),
    helpWrapper = document.querySelector(".help-wrapper"),
    chatBtn = document.querySelector('.menu-item[data-id="chat"]');
window.addEventListener("DOMContentLoaded", function() {
    var n = document.createElement("script"),
        t, i;
    n.type = "text/javascript";
    n.async = !0;
    n.src = "//storage.googleapis.com/code.snapengage.com/js/640432e3-3bc9-444f-9b6b-23cb7583d25a.js";
    t = !1;
    n.onload = n.onreadystatechange = function() {
        t || this.readyState && this.readyState !== "loaded" && this.readyState !== "complete" || (t = !0, SnapEngage.getAgentStatusAsync(function(n) {
            n || chatBtn == null || (chatBtn.style.display = "none")
        }), SnapEngage.setCallback("Open", function() {
            body.style.overflow = "auto";
            helpButton.style.opacity = 1;
            helpWrapper.classList.remove("in", "desktop", "mobile", "callmeback", "chat", "email")
        }))
    };
    i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i)
});
$(document).ready(function() {
    CheckSessionTimeout();
    initCJ();
    wait(500);
    progressBar.init();
    progressBar.resetSection();
    dhtmlHistory.firstLoad = null;
    window.historyStorage.init();
    window.dhtmlHistory.create();
    dhtmlHistory.initialize();
    dhtmlHistory.addListener(HandleNavigation);
    HomeCommonService.isInternalRedirect = !1;
    $(window).on("beforeunload pagehide", function() {
        if (!flagWhiteLabel && !HomeCommonService.isInternalRedirect) return !1
    });
    setTimeout(function() {
        var n = $(".grecaptcha-badge");
        n !== null && n.parent().hide()
    }, 1e3);
    $(".collapse").on("click", ".collapse-trigger", function() {
        $(this).next(".collapsed").toggleClass("active");
        $(this).find("span").toggleClass("active");
        var n = $(this).next(".collapsed.active")[0];
        $(this).next(".collapsed.active")[0] !== undefined && setTimeout(function() {
            n !== undefined && n.firstElementChild !== undefined && n.firstElementChild !== null && n.firstElementChild.scrollIntoView({
                block: "start",
                behavior: "smooth"
            })
        }, 100)
    })
});
var CommonData = {
    Urls: {
        GetCaptchaV3ModelApi: "/api/CJ/GetCaptchaV3Model",
        GetIPTrackerModelApi: "/api/CJ/IsIPTrakingEnable",
        QuestionAPI: "/api/CJ/",
        CJ_Default_URL: "/datos-comparativa.aspx",
        TemplateURL: "/Templates/",
        Progress_Page_URL: "/progress.aspx?waitPageType=isWaitPageCounterInserted",
        SaveCounterURL: "https://seguro-hogar.rastreator.com/HomeCallbacks.aspx?Option=SaveCounter&CounterName=",
        SpanEmailCheckURL: "https://seguro-hogar.rastreator.com/HomeCallbacks.aspx?Option=SpamEmailCheck&email=",
        CaptchaRequiredCheckURL: "https://seguro-hogar.rastreator.com/HomeCallbacks.aspx?Option=CaptchaRequired&JourneyTime=",
        Image_CDN: "",
        CSS_CDN: "",
        JS_CDN: "",
        SaveCallMeBackURL: "/api/CJ/SaveCallMeBackDetails?",
        RedirectUrl: "https://www.rastreator.com/",
        GetLastQuoteDetailURL: "/api/CJ/GetLastQuoteDetail",
        SetEmailVerificationStatusForLastQuoteURL: "/api/CJ/SetEmailVerificationStatusForLastQuote",
        CmsUrlTestEnvironment: "http://www.rastreatortest.com/",
        CmsUrlProdctionEnvironment: "https://www.rastreator.com/",
        SegurosCmsUrlTestEnvironment: "http://testing.seguros.es/",
        SegurosCJUrlProductionEnvironment: "https://www.seguros.es/",
        MaintenancePageTest: "http://maintenance.rastreatortest.com/mantenimiento.html",
        MaintenancePageProd: "http://maintenance.rastreator.com/mantenimiento.html",
        RobotRedirectionPage: "https://www.rastreator.com/mantenimiento.aspx",
        UPASettingsApi: "/api/CJ/GetUpaConfiguration"
    },
    ErrorMessages: {
        SessionExpired: "SessionExpired",
        DateInvalid: "Por favor, selecciona una fecha válida.",
        Day: "Por favor, selecciona un día.",
        Month: "Por favor, selecciona un mes.",
        Year: "Por favor, selecciona un año.",
        InvalidDayMessage: "Por favor, introduce un día.",
        InvalidMonthMessage: "Por favor, selecciona un mes.",
        InvalidYearMessage: "Por favor, introduce un año.",
        PostalCode: "Por favor, introduce un código postal correcto.",
        Dni: "Por favor, introduce un DNI/NIE válido.",
        HabitualPostalCode: "Por favor, introduce un Código Postal correcto.",
        InvalidDateExceedMessage: "La fecha de inscripción no puede exceder la fecha de compra. Por favor, seleccione uno",
        Email: "Por favor, introduce un email correcto",
        Phone: "Por favor, introduce un teléfono correcto",
        InvalidCaptcha: "Por favor, introduce los números de la imagen",
        InvalidCaptchaOperation: "Por favor, introduce el resultado de la operación",
        TermCondition: "Por favor, acepta el Aviso Legal y la Política de Privacidad",
        InvalidDropDownSelection: "Por favor, selecciona una opción",
        InvalidHouseArea: "Por favor, introduce una superficie de vivienda correcta",
        InvalidLandArea: "Por favor, introduce una superficie de parcela correcta",
        HouseAreaLessThan20NotAllowed: "La superficie de la vivienda debe ser mayor o igual a 20 m2",
        NumberOfRooms: "Por favor, selecciona el número de dormitorios de los que dispone la vivienda",
        NumberOfRestRooms: "Por favor, selecciona el número de baños y/o aseos de los que dispone la vivienda",
        ContinentRequired: "Por favor, introduce el valor del continente de la vivienda",
        InvalidContinentWithZero: "Por favor, introduce el valor del continente de la vivienda",
        InvalidContinent: "Por favor, introduce un valor correcto para el continente de la vivienda hasta 12.000",
        InvalidContent: "Por favor, introduce el valor del contenido de la vivienda",
        InvalidSafeBox: "Por favor, introduce un valor correcto",
        InvalidValueofSpecialObjects: "Por favor, introduce un valor correcto",
        PolicyHolderLegalAge: "El tomador del seguro debe ser mayor de edad",
        FavouriteKindInsurance: "Por favor, selecciona al menos una opción",
        Options: "Por favor seleccione una opción",
        DateInvalidNotWithinSixMonths: "Revisa la fecha de contratación/renovación. No puede ser superior a 6 meses desde la fecha actual",
        InvalidPreviousQuotePopUpEmail: "Por favor, introduce una dirección de e-mail correcta",
        PreviousQuotePopUpEmailNotMatch: "El email no coincide con la anterior comparativa. Recuerda que debe ser el mismo que usaste."
    },
    Constants: {
        IsRobotSessionHome: "GetIsRobotSessionHome",
        IsSessionAvailableApiKey: "IsSessionAvailable",
        CallCentreQuestionAPIKey: "GetQuestionMasterForCallCentre",
        CheckSpamEmailAPIKey: "IsSpamEmail",
        GetCallCentreExecutiveAPIKey: "GetCallCenterExecutives",
        SavePartialRiskAPIKey: "SavePartialRisk",
        CJQuestionAPIKey: "GetQuestionMasterForCJ",
        WSQuestionAPIKey: "GetQuestionModelForWS",
        WSCheckCaptchaAPIKey: "CheckCaptchaRequiredForWS",
        CaptchaValidationKey: "ValidateCaptcha",
        EmailQuestionKey: "Question_OthersSection_EMail",
        SubmitRisk: "SubmitRisk",
        SubmitRiskWS: "SubmitRiskWS",
        QuotePage: "QuotePage",
        WhiteLabelString: "utm_campaign=whitelabels",
        CJQuestionTemplateContainer: "QuestionWrapper",
        CJQuestionSafeBoxSubTemplateContainer: "subTemplate_",
        PostalCodeControlId: "txt_PostalCode",
        PostalCodeResultControlId: "lblCity",
        ContructionYear: "ContructionYear",
        RenewalYear: "RenewalYear",
        HouseSection: "HouseSection",
        InsuranceSection: "InsuranceSection",
        PolicyHolderSection: "PolicyHolderSection",
        OtherSection: "OtherSection",
        CJSaveAnswerDataLayerEvent: "cjanswer",
        ProductNameForHelpModule: "Seguro de Hogar",
        GetFirstQuestionDetailsCJ: "GetFirstQuestionDetailsCJ",
        RiskCompareExcludingPhone: "RiskCompareExcludingPhone"
    },
    QuestionKeys: {
        HouseSection: {
            Occupation: "Question_HomeSection_Occupation",
            Utilization: "Question_HomeSection_Utilization",
            PersonInHouse: "Question_HomeSection_PersonInHouse",
            IsHouseInsured: "Question_HomeSection_IsHouseInsured",
            IsHouseMortgage: "Question_HomeSection_IsHouseMortgage",
            PostalCode: "Question_HomeSection_PostalCode",
            HouseKind: "Question_HomeSection_HouseKind",
            Situation: "Question_HomeSection_Situation",
            ConstructionYear: "Question_HomeSection_ConstructionYear",
            HouseArea: "Question_HomeSection_HouseArea",
            LandArea: "Question_HomeSection_LandArea",
            NumberOfRooms: "Question_HomeSection_NumberOfRooms",
            NumberOfRestRooms: "Question_HomeSection_NumberOfRestRooms",
            ConstructionQuality: "Question_HomeSection_ConstructionQuality",
            ConstructionMaterial: "Question_HomeSection_ConstructionMaterial",
            RenewedAll: "Question_HomeSection_RenewedAll",
            RenewalYear: "Question_HomeSection_RenewalYear",
            AllProtectionSystems: "Question_ProtectionSection_AllProtectionSystems",
            IsAlarmConnectedCentral: "Question_ProtectionSection_IsAlarmConnectedCentral"
        },
        InsuranceSection: {
            Continent: "Question_CapitalSection_Continent",
            Content: "Question_CapitalSection_Content",
            JewelsOutOfSafeBox: "Question_CapitalSection_JewelsOutOfSafeBox",
            JewelsInSafeBox: "Question_CapitalSection_JewelsInSafeBox",
            ValueOfAllSpecialObjects: "Question_CapitalSection_ValueOfAllSpecialObjects",
            FavouriteKindInsurance: "Question_ProtectionSection_FavouriteKindInsurance",
            InitialDateOfInsurance: "Question_CapitalSection_InitialDateOfInsurance"
        },
        PolicyHolderSection: {
            PolicyHolderDateofBirth: "Question_CapitalSection_PolicyHolderDateofBirth",
            PolicyHolderOriginCountry: "Question_CapitalSection_PolicyHolderOriginCountry",
            Defaulter: "Question_ProtectionSection_Defaulter",
            DNI: "Question_ProtectionSection_DNI",
            HabitualPostalCode: "Question_ProtectionSection_HabitualPostalCode"
        },
        OtherSection: {
            Phone: "Question_OthersSection_Phone",
            Email: "Question_OthersSection_EMail"
        }
    },
    Templates: {
        TwoListTemplate: "TwoListTemplate.htm",
        SingleListTemplate: "SingleListTemplate.htm",
        PolicyHolderCountryTemplate: "PolicyHolderOriginCountry.htm"
    },
    RiskNodes: {
        HouseOccupation: "HouseOccupation",
        HouseUtilization: "HouseUtilization",
        IsHouseInsured: "IsHouseInsured",
        IsHouseMortgage: "IsHouseMortgage",
        HouseArea: "HouseArea",
        LandArea: "LandArea",
        NumberOfRooms: "NumberOfRooms",
        NumberOfBathrooms: "NumberOfBathrooms",
        ConstructionQuality: "ConstructionQuality",
        ConstructionMaterial: "ConstructionMaterial",
        Windowgrilles: "Windowgrilles",
        ArmoredDoor: "ArmoredDoor",
        AlarmSystem: "AlarmSystem",
        Safebox: "Safebox",
        ArmoredWindows: "ArmoredWindows",
        PermanentSecurityStaff: "PermanentSecurityStaff",
        Container: "Container",
        Content: "Content",
        JewelsOutOfSafeBox: "JewelsOutOfSafeBox",
        JewelsInSafeBox: "JewelsInSafeBox",
        PolicyHolderBirthDate: "PolicyHolderBirthDate",
        PolicyHolderOriginCountry: "PolicyHolderOriginCountry",
        FavouriteKindInsurance: "MainCoveragesSelected",
        InitialDateOfInsurance: "InitialDateOfInsurance",
        PolicyStartRealDate: "PolicyStartRealDate",
        ValueOfAllSpecialObjects: "ValueOfAllSpecialObjects"
    },
    QuestionsScrollKeyList: [
        ["Question_HomeSection_Utilization", "div_Question_HomeSection_Utilization"],
        ["Question_HomeSection_IsHouseMortgage", "div_Question_HomeSection_IsHouseMortgage"],
        ["Question_HomeSection_NumberOfRestRooms", "question_NumberOfBathrooms"],
        ["Question_HomeSection_NumberOfRooms", "question_NumberOfRooms"],
        ["Question_HomeSection_ConstructionMaterial", "div_Question_HomeSection_ConstructionMaterial"],
        ["Question_HomeSection_HouseArea", "div_HouseArea"],
        ["Question_HomeSection_LandArea", "div_LandArea"],
        ["Question_CapitalSection_Content", "div_Content"],
        ["Question_CapitalSection_Continent", "div_Container"],
        ["Question_CapitalSection_JewelsInSafeBox", "div_JewelsInSafeBox"],
        ["Email", "txtCaptcha"]
    ],
    Counters: [
        ["HouseSection", "rs.hogar.house.index"],
        ["InsuranceSection", "rs.hogar.insurance.index"],
        ["PolicyHolderSection", "rs.hogar.policyholder.index"],
        ["OtherSection", "rs.hogar.othersection.index"],
        ["Question_HomeSection_Occupation", "rs.home.Utilization"],
        ["Question_HomeSection_Utilization", "rs.hogar.Purpose"],
        ["Question_HomeSection_PersonInHouse", "rs.home.ResidentPeople"],
        ["Question_HomeSection_IsHouseInsured", "rs.home.IsHouseInsured"],
        ["Question_HomeSection_PostalCode", "rs.home.PostalCode"],
        ["Question_HomeSection_HouseKind", "rs.home.Kind"],
        ["Question_HomeSection_Situation", "rs.home.Situation"],
        ["Question_HomeSection_ConstructionYear", "rs.home.ConstructionYear"],
        ["Question_HomeSection_HouseArea", "rs.home.HouseAndLandArea"],
        ["Question_HomeSection_NumberOfRooms", "rs.home.NumberOfRooms"],
        ["Question_HomeSection_ConstructionQuality", "rs.home.ConstructionQuality"],
        ["Question_HomeSection_RenewedAll", "rs.home.Rehabilitated"],
        ["Question_HomeSection_RenewalYear", "rs.home.YearRehabilitated"],
        ["Question_ProtectionSection_AllProtectionSystems", "rs.home.ProtectionSystem"],
        ["Question_ProtectionSection_IsAlarmConnectedCentral", "rs.home.ConnectedAlarm"],
        ["Question_CapitalSection_Continent", "rs.home.Container"],
        ["Question_CapitalSection_Content", "rs.home.Content"],
        ["Question_CapitalSection_JewelsOutOfSafeBox", "rs.home.JewelsInandOutSafeBox"],
        ["Question_CapitalSection_ValueOfAllSpecialObjects", "rs.home.SpecialValueObject"],
        ["Question_CapitalSection_PolicyHolderDateofBirth", "rs.home.BirthdayPolicyHolder"],
        ["Question_CapitalSection_PolicyHolderOriginCountry", "rs.home.BirthPlacePolicyHolder"],
        ["Question_CapitalSection_InitialDateOfInsurance", "rs.home.InitialDateOfInsurance"],
        ["Question_ProtectionSection_FavouriteKindInsurance", "rs.home.CoverTypeMultiOption"],
        ["Question_ProtectionSection_Defaulter", "rs.home.HolderIsDefaulter"],
        ["Question_ProtectionSection_DNI", "rs.home.HolderDNI"],
        ["Question_ProtectionSection_HabitualPostalCode", "rs.home.HabitualPostalCode"],
        ["Question_OthersSection_Phone", "rs.home.Phone"],
        ["Question_OthersSection_EMail", "rs.home.Email"],
        ["LastQuotePopUpIndex", "rs.hogar.LastQuotePopUp.index"],
        ["LastQuotePopUpVerifyEmail", "rs.hogar.LastQuotePopUp.VerifyEmail"],
        ["LastQuotePopUpdetails", "rs.hogar.LastQuotePopUp.details"],
        ["LastQuotePopUpEditCJ", "rs.home.LastQuotePopUp.EditCJ"]
    ],
    HouseWindowGrilles: {
        EveryDoorsWindows: "EveryDoorsWindows",
        OnlyGroundFloor: "OnlyGroundFloor",
        No: "No"
    },
    AlarmSystems: {
        InEveryAccess: "InEveryAccess",
        OnlyOnGroundFloor: "OnlyOnGroundFloor",
        No: "No"
    },
    Safeboxes: {
        Fitted: "Fitted",
        NotFitted: "NotFitted",
        No: "No"
    },
    AllProtectionSystems: ["Windowgrilles1", "Windowgrilles2", "Safebox1", "ArmoredDoor", "ArmoredWindows", "Safebox2", "AlarmSystem1", "AlarmSystem2", "PermanentSecurityStaff", "OtherProtectionSystems"],
    GroupKeys: {
        JewelsInSafeAndOutSafeBox: "House_JewelsInSafeAndOutSafeBox"
    }
};
var CommonFunctionsModule = {
    formatNumberWithSeperator: function(n) {
        var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ",",
            e, r;
        n += "";
        var u = n.split("."),
            t = u[0],
            i = "";
        for (u.forEach(function(n, t) {
                t !== 0 && (i += n)
            }), e = u.length > 1 ? "." : "", r = /(\d+)(\d{3})/; r.test(t);) t = t.replace(r, "$1" + f + "$2");
        return i = i.replace(r, "$1" + f + "$2"), t + e + i
    },
    getAgeUsingDateOfBirth: function(n) {
        var t = new Date,
            i = new Date(n),
            r = t.getFullYear() - i.getFullYear(),
            u = t.getMonth() - i.getMonth();
        return (u < 0 || u === 0 && t.getDate() < i.getDate()) && r--, r
    },
    isValidDateFormatDDMMYYYY: function(n) {
        return /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(n)
    },
    loadScript: function(n, t) {
        var i = document.createElement("script");
        i.type = "text/javascript";
        i.readyState ? i.onreadystatechange = function() {
            (i.readyState === "loaded" || i.readyState === "complete") && (i.onreadystatechange = null, t())
        } : i.onload = function() {
            t()
        };
        i.src = n;
        document.getElementsByTagName("head")[0].appendChild(i)
    },
    setCookieForHours: function(n, t, i) {
        var u = new Date,
            f, r;
        u.setTime(u.getTime() + i * 36e5);
        f = "expires=" + u.toUTCString();
        r = window.location.href.replace("//", "/").split("/")[1].split(".");
        r = r[r.length - 2] + "." + r[r.length - 1];
        document.cookie = n + "=" + t + ";" + f + ";path=/;domain=" + r + ";"
    },
    setCookieForDays: function(n, t, i) {
        var u = new Date,
            f, r;
        u.setTime(u.getTime() + i * 864e5);
        f = "expires=" + u.toUTCString();
        r = window.location.href.replace("//", "/").split("/")[1].split(".");
        r = r[r.length - 2] + "." + r[r.length - 1];
        document.cookie = n + "=" + t + ";" + f + ";path=/;domain=" + r + ";"
    },
    getCookie: function(n) {
        for (var t, r = n + "=", f = decodeURIComponent(document.cookie), u = f.split(";"), i = 0; i < u.length; i++) {
            for (t = u[i]; t.charAt(0) == " ";) t = t.substring(1);
            if (t.indexOf(r) == 0) return t.substring(r.length, t.length)
        }
        return ""
    },
    allowNumbersOnly: function(n) {
        $(n).val($(n).val().replace(/[^0-9]/g, ""))
    },
    onlyNumberInput: function(n) {
        n = n ? n : window.event;
        var t = n.which ? n.which : n.keyCode;
        return t < 32 || t > 47 && t < 58
    },
    IsValidEmail: function(n) {
        var r, u, f, i;
        if (CommonService.selectedItem.email = $.trim(CommonService.selectedItem.email), CommonService.selectedItem.email == "") return !1;
        var t = CommonService.selectedItem.email,
            h = t.substr(t.lastIndexOf(".") + 1);
        if (h.length > 5) return !1;
        if (t.match(/@+/) == null || (r = t.split("@"), u = r[0], u.match(/\.$/) != null || t.match(/\.\./) != null) || (f = t.match(/^[A-Za-z0-9]+[A-Za-z0-9_\.-]+@[A-Za-z0-9]+([\.-]?[A-Za-z0-9]+)*(\.[A-Za-z0-9]{2,5})+$/), f == null)) return document.getElementById(n).focus(), !1;
        var e = document.getElementById(n).value,
            o = e.substring(e.lastIndexOf("@") + 1),
            s;
        for (i = 0; i < o.length; i++)
            if (s = o.substring(i, i + 1), "(~`!#$%^&*_+|=}{'?/)".indexOf(s) >= 0) return document.getElementById(n).focus(), !1;
        return !0
    },
    getCurrentEnvCMSUrl: function(n, t) {
        var i = window.location.href,
            r = window.location.search.toLowerCase().indexOf("utm_source=seguros.es") > 0;
        return r ? this.getSegurosCMSUrl() : i.indexOf("localhost") >= 0 || i.indexOf("rastreatortest.com") >= 0 || i.indexOf("rastreatorlocal.com") >= 0 || i.indexOf("rastreatordev.com") >= 0 ? n : i.indexOf("rastreator.com") >= 0 ? t : void 0
    },
    getSegurosCMSUrl: function() {
        if (window.location.ancestorOrigins != undefined && window.location.ancestorOrigins[0] !== undefined) return window.location.ancestorOrigins[0];
        var n = document.URL;
        return n.indexOf("localhost") >= 0 || n.indexOf("rastreatortest.com") >= 0 || n.indexOf("rastreatorlocal.com") >= 0 || n.indexOf("rastreatordev.com") >= 0 ? segTest : segProd
    },
    getMaintenancePageURL: function() {
        return document.location.hostname.indexOf("rastreator.com") > -1 ? "https://maintenance.rastreator.com/mantenimiento.html" : "https://maintenance.rastreatortest.com/mantenimiento.html"
    },
    checkBotSession: function(n, t) {
        $.ajax({
            type: "GET",
            async: !1,
            url: n,
            contentType: "application/json",
            dataType: "json",
            success: t
        })
    }
};


/*
function OnCaptchaSuccess(n) {
    var t = typeof n == "string" ? JSON.parse(n) : n;
    OnCaptchaReady(t)
}

function OnCaptchaError(n) {
    console.log("SaveVerifyCaptcha : FAIL.. && Error response:" + n)
}

function CheckIfNewSession(n) {
    return CommonFunctionsModule.getCookie(n) === "false" || CommonFunctionsModule.getCookie(n) === "" ? !0 : !1
}

function OnCaptchaReady(n) {
    window.grecaptcha && grecaptcha.ready(function() {
        if (n.CaptchaV3Model.IsEnabled) try {
            var t = CheckIfNewSession(n.CaptchaV3Model.Settings.CookieKey);
            t && (CommonFunctionsModule.setCookieForDays(n.CaptchaV3Model.Settings.CookieKey, !0, 1), grecaptcha.execute(n.CaptchaV3Model.Settings.SiteKey, {
                action: "homepage"
            }).then(function(t) {
                var i = n.CaptchaV3Model.Settings.CaptchaVerificationCustomAPI + "?sessiontrackerid=" + n.CaptchaV3Model.Settings.SessionTrackerId + "&token=" + t;
                $.getJSON(i, function(n) {
                    console.log(n)
                })
            }));
            hideCaptchaIcon()
        } catch (i) {
            console.log(i)
        }
    })
}

function hideCaptchaIcon() {
    setTimeout(function() {
        var n = document.getElementsByClassName("grecaptcha-badge");
        n != null && n.length > 0 && n[0].parentElement != null && (n[0].parentElement.hidden = !0)
    }, 2e3)
}

var ReCaptchaV3Service = ReCaptchaV3Service || {};
ReCaptchaV3Service.InitCaptcha = function(n, t) {
    var i = n + t;
    $.ajax({
        type: "GET",
        async: !1,
        url: i,
        contentType: "application/json",
        dataType: "json",
        success: OnCaptchaSuccess,
        failure: OnCaptchaError
    });
    hideCaptchaIcon()
};

*/

var upaCommonService = {
    isAlreadyLogedin: !1,
    isUserLoggedIn: !1,
    isMobileDevice: !1,
    isUPAEnable: !0,
    isErrorInLoginOrRegistrationInUPA: !1,
    isUPASocialUser: !1,
    loggedInUserEmail: "",
    isUserGoOnEmailSent: !1,
    isUserOnFirstLoginPage: !1,
    showHideUPALoginIcon: function() {
        const n = document.getElementById("cj-header");
        (window.location.hash == "#Q1" || window.location.hash == "#Q2" && upaCommonService.isOwnLanding()) && upaCommonService.isUPAEnable ? (upaCommonService.isMobileDevice ? $("#upa-login-trigger-mobile").css("display", "block") : $("#upa-login-trigger").css("display", "block"), n.classList.add("upa-header")) : (upaCommonService.isMobileDevice ? $("#upa-login-trigger-mobile").css("display", "none") : $("#upa-login-trigger").css("display", "none"), n != null && n.classList.remove("upa-header"))
    },
    isOwnLanding: function() {
        var i, t = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"),
            n;
        if (t.length <= 1) return !1;
        for (n = 0; n < t.length; n++)
            if (i = t[n].split("="), i[1] == "OwnLanding") return !0
    },
    addTriggerEventListiner: function() {
        var n = document.querySelector("webc-login-trigger");
        n && (n.addEventListener("finish", function(n) {
            if (n && n.detail && n.detail[0].step == "SSO-header" && n.detail[0].data.access == "login-header" && n.detail[0].status == !0 && (window.location.hash == "#Q1" || window.location.hash == "#Q2" && upaCommonService.isOwnLanding())) {
                upaCommonService.isUserLoggedIn = !0;
                upaCommonService.isAlreadyLogedin = !0;
                upaCommonService.loggedInUserEmail = n.detail[0].data.email;
                var t = {
                    event: "login",
                    loginID: n.detail[0].data.userAccountID
                };
                HomeCommonService.pushDataLayerEvent(t);
                HomeCommonService.saveCounter("rs.upa.cj.sso.qv-logged-in");
                upaAutoPopulateService.addUPAData(n.detail[0].data, !0)
            }
        }), n.addEventListener("logout", function() {
            upaCommonService.isUserLoggedIn = !1;
            upaCommonService.isAlreadyLogedin = !1;
            HomeCommonService.saveCounter("rs.upa.c-salir.Q1")
        }))
    },
    appendLoginTriggerInHeader: function() {
        upaCommonService.isUPAEnable = !0;
        $("#seo-title-id").html("");
        var n = upaCommonService.createLoginTriggerComponent();
        $("#seo-title-id").append("<div class='upalogin'><h1 class='pull-right' id='upa-login-trigger'>" + n.outerHTML + "<\/h1><\/div>")
    },
    appendMobileLoginTriggerInHeader: function() {
        upaCommonService.isUPAEnable = !0;
        $("#upa-login-trigger-mobile").html("");
        var n = upaCommonService.createLoginTriggerComponent();
        $("#upa-login-trigger-mobile").append(n.outerHTML);
        upaCommonService.isMobileDevice = !0
    },
    createLoginTriggerComponent: function() {
        var n = document.createElement("webc-login-trigger");
        return n.setAttribute("light-icon", "true"), n.setAttributeNode(document.createAttribute("allow-save-comparative-data")), n.setAttributeNode(document.createAttribute("redirect")), n.setAttribute("product-id", "3"), n
    },
    pushPopupEvent: function() {
        HomeCommonService.pushDataLayerEvent({
            event: "cjanswer",
            cjcategory: "insurance",
            cjproduct: "home",
            questionanswer: "q1",
            answer: "openupa"
        })
    },
    pushNotYouEvent: function() {
        HomeCommonService.pushDataLayerEvent({
            event: "cjanswer",
            cjcategory: "insurance",
            cjproduct: "home",
            questionanswer: "qx",
            answer: "¿no eres tu?"
        })
    },
    getUrlVars: function() {
        for (var t = [], n, r = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), i = 0; i < r.length; i++) n = r[i].split("="), t.push(n[0]), t[n[0]] = n[1];
        return t
    },
    showUpaComponent: function() {
        $("#newEmailForm").css("display", "none");
        $("#upaLoginBox").css("display", "none");
        $("#EmailFailureTemplate").css("display", "none");
        upaCommonService.addUpaLoginEventListner();
        !upaCommonService.isUPAEnable || upaCommonService.isUserLoggedIn || upaCommonService.isErrorInLoginOrRegistrationInUPA ? upaCommonService.isUPAEnable && upaCommonService.isUserLoggedIn && !upaCommonService.isErrorInLoginOrRegistrationInUPA && ($("#newEmailForm").css("display", "block"), $("#next").css("display", "block")) : ($("#upaLoginBox").css("display", "block"), $("#next").css("display", "none"))
    },
    addUpaLoginEventListner: function() {
        document.querySelector("webc-login").addEventListener("finish", function(n) {
            if (n && n.detail) {
                var t = HomeCommonService.getCounterName("Question_OthersSection_EMail");
                switch (n.detail[0].step) {
                    case "facebook-sso-step":
                    case "google-sso-step":
                        n.detail[0].data.access == "login-rrss" && n.detail[0].status && (upaCommonService.isUserLoggedIn = !0, upaCommonService.hideUPABoxAndShowNewTelephonePage("social", n.detail[0].data.email), HomeCommonService.saveCounter("rs.upa.cj.p-recepcion.success-cajaUPA"), HomeCommonService.saveCounter(t));
                        break;
                    case "access-email-step":
                        n.detail[0].data.access == "login" && n.detail[0].status && (upaCommonService.isUserLoggedIn = !0, upaCommonService.hideUPABoxAndShowNewTelephonePage("email", n.detail[0].data.email), HomeCommonService.saveCounter("rs.upa.cj.p-recepcion.success-cajaUPA"), HomeCommonService.saveCounter(t));
                        break;
                    case "SSO":
                        n.detail[0].data.access == "login" && n.detail[0].status && (upaCommonService.isUPASocialUser = !0, upaCommonService.isUserLoggedIn = !0, upaCommonService.isAlreadyLogedin = !0, $("#txt_Email").val(n.detail[0].data.email), $("p#newEmailText").removeClass("text-center"), $("p#newEmailText").text("En la siguiente pantalla podrás elegir el mejor seguro para ti. Además, te enviaremos los resultados por email."), HomeCommonService.isCaptchaRequiredForAutomation && HomeCommonService.refreshPromotionPageCaptchaImage(), HomeCommonService.saveCounter("rs.upa.cj.p-recepcion.success-logado-preQV"), HomeCommonService.saveCounter(t), HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent));
                        break;
                    case "privacy-agreement-step":
                        n.detail[0].data.access == "register" && n.detail[0].status && (upaCommonService.isUserLoggedIn = !0, upaCommonService.hideUPABoxAndShowNewTelephonePage("email", n.detail[0].data.email), $("#checkBox_Email").attr("checked", !0), $("#divPolitica").hide(), HomeCommonService.saveCounter("rs.upa.cj.p-recepcion.success-cajaUPA"), HomeCommonService.saveCounter(t));
                        break;
                    case "access-rrss-step":
                        n.detail[0].data.access == "register" && n.detail[0].status && (upaCommonService.isUserLoggedIn = !0, upaCommonService.hideUPABoxAndShowNewTelephonePage("social", n.detail[0].data.email), $("#checkBox_Email").attr("checked", !0), $("#divPolitica").hide(), HomeCommonService.saveCounter("rs.upa.cj.p-recepcion.success-cajaUPA"), HomeCommonService.saveCounter(t));
                        break;
                    case "create-account-step":
                        n.detail[0].data.access == "register" && n.detail[0].status && (upaCommonService.isUserLoggedIn = !0, upaCommonService.hideUPABoxAndShowNewTelephonePage("email", n.detail[0].data.email), HomeCommonService.saveCounter("rs.upa.cj.p-recepcion.success-cajaUPA"), HomeCommonService.saveCounter(t))
                }
                n.detail.length > 0 && !n.detail[0].status && (upaCommonService.isErrorInLoginOrRegistrationInUPA = !0, HomeCommonService.saveCounter("rs.upa.cj.p-recepcion.failure"), HomeCommonService.saveCounter(t), $("#newEmailForm").remove(), $("#upaLoginBox").hide(), $("#EmailFailureTemplate").show(), HomeCommonService.isCaptchaRequiredForAutomation && (document.getElementById("EmailFailImageCaptcha").src = "captchaImage.aspx?v=" + Math.random()), $("#next").css("display", "block"))
            }
        })
    },
    hideUPABoxAndShowNewTelephonePage: function(n, t) {
        document.getElementById("upaLoginBox").style.setProperty("display", "none", "important");
        document.getElementById("newEmailForm").style.setProperty("display", "block", "important");
        $("p#newEmailText").text("En la siguiente pantalla podrás elegir el mejor seguro para ti.");
        $("p#newEmailText").addClass("text-center");
        HomeCommonService.isCaptchaRequiredForAutomation && HomeCommonService.refreshPromotionPageCaptchaImage();
        $("#txt_Email").val(t);
        upaCommonService.loggedInUserEmail = t;
        $("#next").css("display", "block");
        HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent);
        switch (n) {
            case "email":
                document.getElementById("divEmail").style.setProperty("display", "none", "important");
                document.getElementById("itIsYou").style.setProperty("visibility", "hidden", "important");
                break;
            case "social":
                document.getElementById("divEmail").style.setProperty("display", "block", "important");
                document.getElementById("itIsYou").style.setProperty("visibility", "visible", "important")
        }
    },
    isItNotYou: function() {
        upaCommonService.pushNotYouEvent();
        HomeCommonService.saveCounter("rs.upa.cj.p-recepcion.success-cajaUPA.c-no-eres-tu");
        upaCommonService.deleteCookieByName("verifieduserInfo,verifieduserToken");
        upaCommonService.isUserLoggedIn = !1;
        upaCommonService.isAlreadyLogedin = !1;
        upaCommonService.showUPABoxAndHideNewTelephonePage();
        $("#next").css("display", "none");
        var n = document.querySelector("webc-login");
        n && n.vueComponent.restart()
    },
    showUPABoxAndHideNewTelephonePage: function() {
        document.getElementById("upaLoginBox").style.setProperty("display", "block", "important");
        document.getElementById("newEmailForm").style.setProperty("display", "none", "important")
    },
    deleteCookieByName: function(n) {
        var t = ["rastreator.com", "rastreatortest.com"],
            i = n.split(",");
        i.forEach(function(n) {
            t.forEach(function(t) {
                document.cookie = n + "=;path=/" + (t ? ";domain=" + t : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
            })
        })
    },
    isUpaGoBackActive: function(n) {
        var t;
        if (n) {
            var i = n.shadowRoot.getElementById("privacy-agreement-step").className.split(/\s+/),
                r = n.shadowRoot.getElementById("email-sent-step").className.split(/\s+/),
                u = n.shadowRoot.getElementById("access-step").className.split(/\s+/);
            for (upaCommonService.isUserOnFirstLoginPage = upaCommonService.getCookie("verifieduserToken") == null ? !0 : !1, t = 0; t < r.length; t++) r[t] === "in" && (upaCommonService.isUserOnFirstLoginPage = !1, upaCommonService.isUserGoOnEmailSent = !0);
            for (t = 0; t < u.length; t++) u[t] === "in" && (upaCommonService.isUserOnFirstLoginPage = !0, upaCommonService.isUserGoOnEmailSent = !1);
            if (n && (!upaCommonService.isUserOnFirstLoginPage || upaCommonService.isUserGoOnEmailSent) && !upaCommonService.isUserLoggedIn) {
                for (t = 0; t < i.length; t++) i[t] === "in" && HomeCommonService.saveCounter("rs.upa.cj.p-acceso-atras");
                return !0
            }
            return !1
        }
        return !1
    },
    getCookie: function(n) {
        var i = document.cookie,
            u = n + "=",
            t = i.indexOf("; " + u),
            r;
        if (t == -1) {
            if (t = i.indexOf(u), t != 0) return null
        } else t += 2, r = document.cookie.indexOf(";", t), r == -1 && (r = i.length);
        return decodeURI(i.substring(t + u.length, r))
    }
};
var upaAutoPopulateService = {
    UPAData: {},
    IsSignIn: !1,
    addUPAData: function(n, t) {
        this.UPAData = n;
        this.IsSignIn = t
    }
};

function code2city(n) {
    var t = new Array(53),
        i, r;
    return t[0] = "", t[1] = "ARABA/&Aacute;LAVA", t[2] = "ALBACETE", t[3] = "ALACANT/ALICANTE", t[4] = "ALMER&Iacute;A", t[5] = "&Aacute;VILA", t[6] = "BADAJOZ", t[7] = "ILLES BALEARS/ISLAS BALEARES", t[8] = "BARCELONA", t[9] = "BURGOS", t[10] = "C&Aacute;CERES", t[11] = "C&Aacute;DIZ", t[12] = "CASTELL&Oacute;/CASTELL&Oacute;N", t[13] = "CIUDAD REAL", t[14] = "C&Oacute;RDOBA", t[15] = "A CORU&Ntilde;A/LA CORU&Ntilde;A", t[16] = "CUENCA", t[17] = "GIRONA/GERONA", t[18] = "GRANADA", t[19] = "GUADALAJARA", t[20] = "GIPUZKOA/GUIP&Uacute;ZCOA", t[21] = "HUELVA", t[22] = "HUESCA", t[23] = "JA&Eacute;N", t[24] = "LE&Oacute;N", t[25] = "LLEIDA/L&Eacute;RIDA", t[26] = "LA RIOJA", t[27] = "LUGO", t[28] = "MADRID", t[29] = "M&Aacute;LAGA", t[30] = "MURCIA", t[31] = "NAFARROA/NAVARRA", t[32] = "OURENSE/ORENSE", t[33] = "ASTURIAS", t[34] = "PALENCIA", t[35] = "LAS PALMAS", t[36] = "PONTEVEDRA", t[37] = "SALAMANCA", t[38] = "SANTA CRUZ DE TENERIFE", t[39] = "CANTABRIA", t[40] = "SEGOVIA", t[41] = "SEVILLA", t[42] = "SORIA", t[43] = "TARRAGONA", t[44] = "TERUEL", t[45] = "TOLEDO", t[46] = "VALENCIA", t[47] = "VALLADOLID", t[48] = "BIZKAIA/VIZCAYA", t[49] = "ZAMORA", t[50] = "ZARAGOZA", t[51] = "CEUTA", t[52] = "MELILLA", i = "", isNaN(n) || n > 0 && n < 53 && (r = new Number(n), i = t[r]), i
}

function getKeyCode(n, t) {
    if (!t) var t = window.event;
    return t.keyCode ? code = t.keyCode ? t.keyCode : t.charCode : t.which && (code = t.which), code
}

function EmailMask(n) {
    var r = n.indexOf("@"),
        u = n.split("@"),
        i = [],
        t;
    for (i.push(n[0]), t = 1; t < r; t++) t % 2 != 0 ? (n[t] = "*", i.push("*")) : i.push(n[t]);
    return i.join("") + "@" + u[1]
}

function IsCheckEmail() {
    var n = $("input[name='txt_Email']").val();
    n.indexOf("*") >= 0 && n === EmailMask(PreviousEmail) && PreviousEmail !== "" && (document.getElementById("txt_Email").value = "")
}

function MaskPhoneNumber(n) {
    return n.replace(/\d(?=\d{3})/g, "●")
}

function resetPrefillNumber(n) {
    $(n).val().indexOf("●") >= 0 && $(n).val("")
}

function resetPrefillDin(n) {
    $(n).val().indexOf("*") >= 0 && $(n).val("")
}

function MaskDIN(n) {
    if (n != null || n != undefined) {
        var t = n.substring(2, n.length - 1).replace(/\w/g, "*");
        return n.substring(0, 2) + t.substring(0, n.length - 1) + n.substring(n.length - 1)
    }
}

function RestrictCharacters(n, t, i) {
    var u = t.keyCode || t.which,
        t, r;
    if (u == 0 || u == 229) code = getKeyCode(n.value);
    else {
        if (t || (t = window.event), t.charCode == 0) return !0;
        t.keyCode ? code = t.keyCode ? t.keyCode : t.charCode : t.which && (code = t.which)
    }
    return (r = String.fromCharCode(code), code == 27 || code == "₹") ? (this.blur(), !1) : t.ctrlKey || code == 9 || code == 8 || code == 36 || code == 37 || code == 38 || code == 39 && (code != 39 || r != "'") || code == 40 ? !1 : r.match(i) ? !0 : !1
}

function onKeyupRestrictCharacter(n) {
    $(n).val($(n).val().replace(/[^0-9]/g, ""))
}

function getQueryString(n, t) {
    var r = t ? t : window.location.href,
        u = new RegExp("[?&]" + n + "=([^&#]*)", "i"),
        i = u.exec(r);
    return i ? i[1] : null
}

function toggleNextButtonTextForProtectionSystems(n) {
    var t = !1,
        i;
    CommonData.AllProtectionSystems.forEach(function(n) {
        var i = $("input[name=checkbox_" + n + "]:checked").val();
        if (i) return t = !0, !1
    });
    n == "Windowgrilles1" ? document.getElementById("checkbox_Windowgrilles2").checked = !1 : n == "Windowgrilles2" && (document.getElementById("checkbox_Windowgrilles1").checked = !1);
    n == "Safebox1" ? document.getElementById("checkbox_Safebox2").checked = !1 : n == "Safebox2" && (document.getElementById("checkbox_Safebox1").checked = !1);
    n == "AlarmSystem1" ? document.getElementById("checkbox_AlarmSystem2").checked = !1 : n == "AlarmSystem2" && (document.getElementById("checkbox_AlarmSystem1").checked = !1);
    i = HomeCommonService.isCJ ? "next" : "btnClose";
    $("#" + i).text(t ? "Avanzar" : "No tengo ninguno")
}

function keyClickValidate(n) {
    var u = this.id,
        i = document.getElementById(n),
        r = document.getElementById(n).value.substring(0, 2),
        t;
    return i.value.length == 1 ? (t = i.value.substring(0, 1), parseInt(t) != 6 && parseInt(t) != 7 && parseInt(t) != 8 && parseInt(t) != 9 ? (i.value = "", !1) : !0) : parseInt(r) == 99 || r == "₹" ? (i.value = "", !1) : !0
}

function getFormatedDate(n) {
    if (n) {
        if (n.indexOf("-") > -1) {
            let t = n.split("-");
            return t[2] + "/" + t[1] + "/" + t[0]
        }
        return n
    }
    return ""
}
var PreviousEmail = "",
    PreviousPhone = "",
    PreviousDIN = "",
    HomeCommonService = {
        IsRemainingSecsExpired: !1,
        isBrowserButtonClicked: !1,
        isSessionCaptchaScoreSave: !1,
        maxQuestionReached: "",
        currentQuestion: {},
        questionMaster: {},
        contractType: {},
        selectedItem: {},
        activeSection: "",
        sectionModel: {},
        telephoneQuestionVersion: "",
        isCJ: !1,
        driverPostCodeStatus: "No",
        noOfInsurer: 1,
        previousInsurerRendered: !1,
        isPreviouslyInsurerRendered: !1,
        PreSelectedProtectionSystems: [],
        PreSelectedInsurances: [],
        currentSection: "",
        previousSection: "",
        dataLayerEvent: {},
        isIPTrackerExecuted: !1,
        isCaptchaRequiredForAutomation: !1,
        getQuestion: function(n) {
            var t = "";
            return t = $.grep(this.questionMaster, function(t) {
                return t.QuestionKey === n
            }), t = t[0].GroupKey ? $.grep(this.questionMaster, function(n) {
                return n.GroupKey === t[0].GroupKey
            }) : $.grep(this.questionMaster, function(n) {
                return n.QuestionKey === t[0].QuestionKey
            })
        },
        getQuestionKey: function(n) {
            var t = $.grep(HomeCommonService.questionMaster, function(t) {
                return t.QuestionNumber == n
            });
            return t[0].QuestionKey
        },
        getQuestionsByGroupKey: function(n) {
            return $.grep(this.questionMaster, function(t) {
                return t.GroupKey === n
            })
        },
        getCurrentQuestionGroupKey: function(n) {
            var t = $.grep(HomeCommonService.questionMaster, function(t) {
                return t.QuestionKey === n
            });
            return t[0].GroupKey
        },
        renderQuestion: function(n) {
            n == "Question_HomeSection_PersonInHouse" && HomeCommonService.WebHTTPCall(CommonData.Urls.QuestionAPI + CommonData.Constants.IsRobotSessionHome, CommonData.Constants.IsRobotSessionHome, 14, !1, "", "");
            n == "Question_HomeSection_Occupation" && HomeCommonService.isCJ ? (HomeCommonService.currentQuestion.QuestionNumber == 2 && (HomeCommonService.currentQuestion = HomeCommonService.questionMaster[0]), HomeCommonService.loadTemplate([HomeCommonService.currentQuestion])) : HomeCommonService.loadTemplate(HomeCommonService.getQuestion(n))
        },
        editAnswer: function() {},
        loadTemplate: function(n) {
            var s = "",
                u = n[0].TemplateName,
                a = n[0].QuestionNumber,
                r = n[0].TemplateHtml,
                c, t, f, h, it, rt, v, e, y, g, nt, tt, l, ut, ft, o;
            if ($("#PrivacyInfoDiv").addClass("hidden"), $("#prev").hide(), $(".divLegalText").hide(), h = HomeCommonService.isCJ ? "next" : "btnClose", $("#" + h).text("Avanzar"), c = !1, (n[0].QuestionKey == CommonData.QuestionKeys.InsuranceSection.JewelsOutOfSafeBox || n[0].QuestionKey == CommonData.QuestionKeys.InsuranceSection.ValueOfAllSpecialObjects) && (c = !0), c || $("#" + CommonData.Constants.CJQuestionTemplateContainer).html(""), HomeCommonService.isCJ ? (HomeCommonService.currentSection = n[0].SectionName, HomeCommonService.previousSection !== HomeCommonService.currentSection && (n[0].QuestionKey === CommonData.QuestionKeys.InsuranceSection.Continent || n[0].QuestionKey === CommonData.QuestionKeys.PolicyHolderSection.PolicyHolderDateofBirth || n[0].QuestionKey === CommonData.QuestionKeys.OtherSection.Email) && (HomeCommonService.previousSection = HomeCommonService.currentSection, s = HomeCommonService.getCounterName(HomeCommonService.currentSection), HomeCommonService.saveCounter(s)), upaCommonService.isUPAEnable && n[0].QuestionKey == CommonData.QuestionKeys.OtherSection.Email || (s = HomeCommonService.getCounterName(n[0].QuestionKey), HomeCommonService.saveCounter(s)), HomeCommonService.dataLayerEvent = {
                    event: "virtualpage",
                    virtualpage: "customerjourney",
                    categoryvp: "insurance",
                    productvp: "home",
                    sectionvp: HomeCommonService.getSectionNumber(n[0].SectionName),
                    question: "q" + n[0].QuestionNumber,
                    questiontext: n[0].QuestionText,
                    testversion: "HomeSplitPriceVersion_" + n[0].CJVersion
                }) : HomeCommonService.dataLayerEvent = {
                    event: "virtualpage",
                    virtualpage: "wise",
                    categoryvp: "insurance",
                    productvp: "home",
                    sectionvp: HomeCommonService.getSectionNumber(n[0].SectionName),
                    question: "q" + n[0].QuestionNumber,
                    questiontext: n[0].QuestionText,
                    testversion: "HomeSplitPriceVersion_" + n[0].CJVersion
                }, n[0].IsGrouped) {
                n.forEach(function(n) {
                    var t = HomeCommonService.getSelectedValueFromContract(n.RiskNode);
                    n.Options = $.grep(n.Options, function(n) {
                        return n.IsSelected = n.RiskValue === t, n
                    })
                });
                f = {};
                f.questions = n;
                switch (n[0].GroupKey) {
                    case CommonData.GroupKeys.JewelsInSafeAndOutSafeBox:
                        HomeCommonService.appendTemplateTo(r, f, CommonData.Constants.CJQuestionSafeBoxSubTemplateContainer + "1");
                        break;
                    default:
                        $("#" + CommonData.Constants.CJQuestionTemplateContainer).html("");
                        HomeCommonService.appendTemplateTo(r, f, CommonData.Constants.CJQuestionTemplateContainer)
                }
                HomeCommonService.manageNavigationButtons(u, HomeCommonService.isCJ, n[0].QuestionKey === CommonData.QuestionKeys.HouseSection.Occupation)
            } else {
                t = "";
                switch (n[0].QuestionKey) {
                    case CommonData.QuestionKeys.InsuranceSection.ValueOfAllSpecialObjects:
                        f = {};
                        f.questions = n;
                        HomeCommonService.appendTemplateTo(r, f, CommonData.Constants.CJQuestionSafeBoxSubTemplateContainer + "2");
                        break;
                    case CommonData.QuestionKeys.HouseSection.AllProtectionSystems:
                        HomeCommonService.PreSelectedProtectionSystems && HomeCommonService.PreSelectedProtectionSystems.length > 0 && n[0].Options.forEach(function(n) {
                            n.IsSelected = HomeCommonService.PreSelectedProtectionSystems.indexOf(n.Value) > -1 ? !0 : !1
                        });
                        n[0].Options.filter(function(n) {
                            return n.IsSelected
                        }).length == 0 && (h = HomeCommonService.isCJ ? "next" : "btnClose", $("#" + h).text("No tengo ninguno"));
                        HomeCommonService.appendTemplateTo(r, n, CommonData.Constants.CJQuestionTemplateContainer);
                        HomeCommonService.manageNavigationButtons(u, HomeCommonService.isCJ, n[0].QuestionKey === CommonData.QuestionKeys.HouseSection.Occupation);
                        break;
                    case CommonData.QuestionKeys.InsuranceSection.FavouriteKindInsurance:
                        it = this.getQuestionsByGroupKey(CommonData.GroupKeys.JewelsInSafeAndOutSafeBox);
                        rt = this.getQuestion(CommonData.QuestionKeys.InsuranceSection.ValueOfAllSpecialObjects);
                        this.renameNextButton("No me interesa");
                        v = !1;
                        n[0].Options.forEach(function(n) {
                            v = n.IsSelected;
                            n.subQuestions = n.Value == "1" ? it : rt
                        });
                        v && this.renameNextButton("Avanzar");
                        this.getQuestionsByGroupKey(CommonData.GroupKeys.JewelsInSafeAndOutSafeBox);
                        HomeCommonService.appendTemplateTo(r, n, CommonData.Constants.CJQuestionTemplateContainer);
                        HomeCommonService.manageNavigationButtons(u, HomeCommonService.isCJ, n[0].QuestionKey === CommonData.QuestionKeys.HouseSection.Occupation);
                        break;
                    case CommonData.QuestionKeys.InsuranceSection.InitialDateOfInsurance:
                    case CommonData.QuestionKeys.PolicyHolderSection.PolicyHolderDateofBirth:
                        n[0].QuestionKey == CommonData.QuestionKeys.PolicyHolderSection.PolicyHolderDateofBirth && !n[0].SelectedValue && upaAutoPopulateService.IsSignIn && upaAutoPopulateService.UPAData.dateOfBirth && (e = upaAutoPopulateService.UPAData.dateOfBirth.substring(0, 10).split("-"), n[0].Options.years[0].Value = e[0], n[0].Options.days[0].Value = e[2], n[0].Options.monthList.forEach(function(n) {
                            n.IsSelected = n.RiskValue === e[1]
                        }), n[0].SelectedValue = e[2] + "/" + e[1] + "/" + e[0]);
                        HomeCommonService.appendTemplateTo(r, n, CommonData.Constants.CJQuestionTemplateContainer);
                        HomeCommonService.manageNavigationButtons(u, HomeCommonService.isCJ, n[0].QuestionKey === CommonData.QuestionKeys.HouseSection.Occupation);
                        break;
                    case CommonData.QuestionKeys.HouseSection.PostalCode:
                        t = HomeCommonService.getSelectedValueFromContract(n[0].RiskNode);
                        !t && upaAutoPopulateService.IsSignIn && (t = upaAutoPopulateService.UPAData.province);
                        n[0].SelectedValue = t;
                        HomeCommonService.appendTemplateTo(r, n, CommonData.Constants.CJQuestionTemplateContainer);
                        HomeCommonService.manageNavigationButtons(u, HomeCommonService.isCJ, n[0].QuestionKey === CommonData.QuestionKeys.HouseSection.Occupation);
                        t && (document.getElementById(CommonData.Constants.PostalCodeResultControlId).innerHTML = code2city(modifyPostalCode(t).substring(0, 2)));
                        break;
                    case CommonData.QuestionKeys.PolicyHolderSection.HabitualPostalCode:
                        t = HomeCommonService.getSelectedValueFromContract(n[0].RiskNode);
                        n[0].SelectedValue = t;
                        HomeCommonService.appendTemplateTo(r, n, CommonData.Constants.CJQuestionTemplateContainer);
                        HomeCommonService.manageNavigationButtons(u, HomeCommonService.isCJ, n[0].QuestionKey === CommonData.QuestionKeys.HouseSection.Occupation);
                        t && (document.getElementById("lblHabitualCity").innerHTML = code2city(modifyPostalCode(t).substring(0, 2)));
                        break;
                    case CommonData.QuestionKeys.PolicyHolderSection.DNI:
                        t = HomeCommonService.getSelectedValueFromContract(n[0].RiskNode);
                        !t && upaAutoPopulateService.IsSignIn && (t = upaAutoPopulateService.UPAData.dni);
                        PreviousDIN == "" && (PreviousDIN = t);
                        y = JSON.parse(JSON.stringify(n));
                        y[0].SelectedValue = HomeCommonService.isCJ == !1 && MaskDIN(PreviousDIN) == MaskDIN(t) ? MaskDIN(t) : t;
                        HomeCommonService.appendTemplateTo(r, y, CommonData.Constants.CJQuestionTemplateContainer);
                        HomeCommonService.manageNavigationButtons(u, HomeCommonService.isCJ, n[0].QuestionKey === CommonData.QuestionKeys.HouseSection.Occupation);
                        break;
                    case CommonData.QuestionKeys.OtherSection.Phone:
                        break;
                    case CommonData.QuestionKeys.OtherSection.Email:
                        var p = HomeCommonService.contractType.PolicyHolderBirthDate.split("-"),
                            w = HomeCommonService.contractType.PolicyStartRealDate.split("-"),
                            b = new Date(p[0], p[1] - 1, p[2], 0, 0, 0, 0),
                            k = new Date(w[0], w[1] - 1, w[2], 0, 0, 0, 0),
                            d = !1,
                            i = CommonData.Urls.CaptchaRequiredCheckURL + $.trim($("#hidJourneyTime").val());
                        i = i + "&hidPostalCode=" + HomeCommonService.contractType.HouseDetails.PostalCode;
                        i = i + "&hidSelectedPolicyHolderDateofBirthDayValue=" + b.getDate().toString();
                        i = i + "&hidSelectedPolicyHolderDateofBirthMonthValue=" + (b.getMonth() + 1).toString();
                        i = i + "&hidSelectedPolicyHolderDateofBirthYearValue=" + b.getFullYear().toString();
                        i = i + "&hidSelectedInsuranceStartDateDayValue=" + k.getDate().toString();
                        i = i + "&hidSelectedInsuranceStartDateMonthValue=" + (k.getMonth() + 1).toString();
                        i = i + "&hidSelectedInsuranceStartDateYearValue=" + k.getFullYear().toString();

                        //Esto lo he cambiado
                        //HomeCommonService.isCJ ? (d = HomeCommonService.captchaRequired(i), n[0].IsCaptchaRequired = d, HomeCommonService.isCaptchaRequiredForAutomation = d) : n[0].IsCaptchaRequired = !1;
                        
                        g = $.trim($("#hidEmailIdFromSSO").val());
                        g && (n[0].SelectedValue = g);
                        n[0].SelectedValue && (n[0].SelectedValue.indexOf("*") < 0 && (PreviousEmail = n[0].SelectedValue), nt = "", nt = EmailMask(n[0].SelectedValue), n[0].SelectedValue = nt, n[0].Title += " (Utilizaste éste en la anterior comparativa. Si quieres, puedes cambiarlo)");
                        HomeCommonService.appendTemplateTo(r, n[0], CommonData.Constants.CJQuestionTemplateContainer);
                        HomeCommonService.manageNavigationButtons(u, HomeCommonService.isCJ, n[0].QuestionKey === CommonData.QuestionKeys.HouseSection.Occupation);
                        HomeCommonService.isCJ && upaCommonService.isUPAEnable && upaCommonService.showUpaComponent();
                        n[1] !== null && n[1] !== undefined && n[1] !== "" && (!upaAutoPopulateService.IsSignIn && n[1].SelectedValue && n[1].IsMaskingEnable ? (HomeCommonService.isCJ && (n[1].Title = "Teléfono"), n[1].SelectedValue.indexOf("●") < 0 && (PreviousPhone = n[1].SelectedValue), tt = "", tt = HomeCommonService.isCJ ? MaskPhoneNumber(n[1].SelectedValue) : n[1].SelectedValue, n[1].SelectedValue = tt) : (t = HomeCommonService.getSelectedValueFromContract(n[1].RiskNode), l = upaAutoPopulateService.UPAData.mobileNumber, l && upaAutoPopulateService.IsSignIn ? (n[1].SelectedValue = MaskPhoneNumber(l), PreviousPhone = l) : n[1].SelectedValue = t), $.get(CommonData.Urls.TemplateURL + n[1].TemplateName, function(t) {
                            upaCommonService.isUPAEnable ? (HomeCommonService.appendTemplateTo(t, n[1], "appendPhoneTemplate"), HomeCommonService.appendTemplateTo(t, n[1], "appendPhoneFailTemplate")) : (HomeCommonService.appendTemplateTo(t, n[1], "appendPhoneTemplate"), HomeCommonService.manageNavigationButtons(u, HomeCommonService.isCJ, n[0].QuestionKey === CommonData.QuestionKeys.HouseSection.Occupation));
                            upaCommonService.isUPAEnable && !HomeCommonService.isCJ && $("#divEmail").hide()
                        }));
                        HomeCommonService.isCJ && ($(".divLegalText").show(), $("#next").text("Ver precios"));
                        break;
                    case CommonData.QuestionKeys.PolicyHolderSection.PolicyHolderOriginCountry:
                        t = HomeCommonService.getSelectedValueFromContract(n[0].RiskNode);
                        !t && upaAutoPopulateService.IsSignIn && upaAutoPopulateService.UPAData.originCountry && (ut = n[0].Options.options.some(n => n.Text === upaAutoPopulateService.UPAData.originCountry), ut ? t = n[0].Options.options.filter(n => n.Text === upaAutoPopulateService.UPAData.originCountry)[0].RiskValue : (ft = n[0].Options.countryGroups.filter(n => n.Alphabet === upaAutoPopulateService.UPAData.originCountry[0])[0], t = ft.Options.filter(n => n.Text === upaAutoPopulateService.UPAData.originCountry)[0].RiskValue));
                        t && (o = !1, n[0].Options.options.every(function(n) {
                            return o = n.IsSelected = n.RiskValue === t, !o
                        }), o || (n[0].Options.countryGroups.forEach(function(n) {
                            n.Options && n.Options.forEach(function(n) {
                                n.IsSelected = n.RiskValue === t
                            })
                        }), n[0].Options.topCountries.forEach(function(n) {
                            n.IsSelected = n.RiskValue === t
                        })));
                        HomeCommonService.appendTemplateTo(r, n, CommonData.Constants.CJQuestionTemplateContainer);
                        HomeCommonService.manageNavigationButtons(u, HomeCommonService.isCJ, n[0].QuestionKey === CommonData.QuestionKeys.HouseSection.Occupation);
                        t && (o ? ($("#div_" + CommonData.RiskNodes.PolicyHolderOriginCountry).show(), $(".country-selector").addClass("hidden")) : ($("#div_" + CommonData.RiskNodes.PolicyHolderOriginCountry).hide(), $(".country-selector").removeClass("hidden"), HomeCommonService.ElementScrollIntoView(t)));
                        break;
                    default:
                        t = HomeCommonService.getSelectedValueFromContract(n[0].RiskNode);
                        n[0].Options = $.grep(n[0].Options, function(n) {
                            return n.IsSelected = n.RiskValue === t, n
                        });
                        n[0].SelectedValue = t;
                        HomeCommonService.appendTemplateTo(r, n, CommonData.Constants.CJQuestionTemplateContainer);
                        HomeCommonService.manageNavigationButtons(u, HomeCommonService.isCJ, n[0].QuestionKey === CommonData.QuestionKeys.HouseSection.Occupation)
                }
            }
            HomeCommonService.dataLayerEvent = HomeCommonService.isCJ ? {
                event: "virtualpage",
                virtualpage: "customerjourney",
                categoryvp: "insurance",
                productvp: "home",
                sectionvp: HomeCommonService.getSectionNumber(n[0].SectionName),
                question: "q" + n[0].QuestionNumber,
                questiontext: n[0].QuestionText,
                testversion: "HomeSplitPriceVersion_" + n[0].CJVersion
            } : {
                event: "virtualpage",
                virtualpage: "wise",
                categoryvp: "insurance",
                productvp: "home",
                sectionvp: HomeCommonService.getSectionNumber(n[0].SectionName),
                question: "q" + n[0].QuestionNumber,
                questiontext: n[0].QuestionText,
                testversion: "HomeSplitPriceVersion_" + n[0].CJVersion
            };
            n[0].QuestionNumber === 1 ? setTimeout(function() {
                HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent)
            }, 2e3) : HomeCommonService.isCJ && upaCommonService.isUPAEnable && n[0].QuestionKey != CommonData.QuestionKeys.OtherSection.Email ? HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent) : HomeCommonService.isCJ && !upaCommonService.isUPAEnable ? HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent) : HomeCommonService.isCJ || HomeCommonService.pushDataLayerEvent(HomeCommonService.dataLayerEvent);
            HomeCommonService.selectedItem = {};
            c || (this.currentQuestion = n[n.length - 1]);


            //Esto lo he quitado
            //HomeCommonService.isCJ && (HomeCommonService.isBrowserButtonClicked || cj.manageHash(a), progressBar.updateProgress(n[0].QuestionNumber), HomeCommonService.ElementScrollIntoView("cj-wrapper"), a === 1 && document.readyState === "interactive" && $("head").append('<link  href="' + CommonData.Urls.NEW_COOKIE_CSS + '" rel="stylesheet" type="text/css" />'), a === 2 && ReCaptchaV3Service && ReCaptchaV3Service.InitCaptcha("https://seguro-hogar.rastreator.com", CommonData.Urls.GetCaptchaV3ModelApi), HomeCommonService.isIPTrackerExecuted == !1 && IPTrackerService && (HomeCommonService.isIPTrackerExecuted = !0, IPTrackerService.InitIPTracker("https://seguro-hogar.rastreator.com", CommonData.Urls.GetIPTrackerModelApi)), upaCommonService.showHideUPALoginIcon());


            HomeCommonService.isCJ && (HomeCommonService.isBrowserButtonClicked || cj.manageHash(a), progressBar.updateProgress(n[0].QuestionNumber), HomeCommonService.ElementScrollIntoView("cj-wrapper"), a === 1 && document.readyState === "interactive" && $("head").append('<link  href="' + CommonData.Urls.NEW_COOKIE_CSS + '" rel="stylesheet" type="text/css" />'), a === 2, HomeCommonService.isIPTrackerExecuted == !1 && IPTrackerService && (HomeCommonService.isIPTrackerExecuted = !0, IPTrackerService.InitIPTracker("https://seguro-hogar.rastreator.com", CommonData.Urls.GetIPTrackerModelApi)), upaCommonService.showHideUPALoginIcon());
            maskingDob()
        },
        answerQuestion: function() {},
        moveNext: function() {},
        movePrevious: function() {
            var n = document.querySelector("webc-login");
            upaCommonService.isUPAEnable && upaCommonService.isUpaGoBackActive(n) ? n.vueComponent.goBack() : this.renderQuestion(HomeCommonService.currentQuestion.PreviousQuestionKey)
        },
        appendTemplateTo: function(n, t, i) {
            HomeCommonService.maxQuestionReached = this.currentQuestion.QuestionNumber;
            $(n).tmpl(t).appendTo("#" + i)
        },
        removeInsurerSubTemplate: function() {},
        resetAnswer: function() {},
        manageNavigationButtons: function(n, t, i) {
            if (t) {
                switch (n) {
                    case CommonData.Templates.TwoListTemplate:
                    case CommonData.Templates.SingleListTemplate:
                    case CommonData.Templates.PolicyHolderCountryTemplate:
                        $("#next").hide();
                        break;
                    default:
                        $("#next").show()
                }
                i || $("#prev").show()
            }
        },
        saveAnswer: function(n) {
            HomeCommonService.isBrowserButtonClicked = !1;
            this.getSelectedValue(HomeCommonService.currentQuestion.QuestionKey, HomeCommonService.currentQuestion.GroupKey, n);
            this.updateContract(HomeCommonService.currentQuestion.QuestionKey, HomeCommonService.currentQuestion.SectionName, HomeCommonService.currentQuestion.RiskNode, HomeCommonService.currentQuestion.QuestionNumber) && (HomeCommonService.currentQuestion.HasDependents === !0 ? this.updateQuestionModelDependencies() : cj.moveNext())
        },
        updateContract: function(n, t, i, r) {
            var u, h, f, c, o, s, l, a, e;
            if (HomeValidationService.validateAnswer(n, i)) {
                u = [];
                switch (n) {
                    case CommonData.QuestionKeys.HouseSection.Occupation:
                    case CommonData.QuestionKeys.HouseSection.Utilization:
                    case CommonData.QuestionKeys.HouseSection.HouseKind:
                    case CommonData.QuestionKeys.HouseSection.Situation:
                    case CommonData.QuestionKeys.HouseSection.RenewedAll:
                        HomeCommonService.contractType.HouseDetails[i] = HomeCommonService.selectedItem.riskValue;
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, HomeCommonService.selectedItem.riskValue, "q" + r);
                        break;
                    case CommonData.QuestionKeys.HouseSection.PersonInHouse:
                        HomeCommonService.contractType[i] = HomeCommonService.selectedItem.riskValue;
                        HomeCommonService.currentQuestion.SelectedValue = HomeCommonService.selectedItem.riskValue;
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, HomeCommonService.selectedItem.riskValue, "q" + r);
                        break;
                    case CommonData.QuestionKeys.HouseSection.IsHouseInsured:
                    case CommonData.QuestionKeys.HouseSection.IsHouseMortgage:
                        HomeCommonService.contractType.HouseDetails[CommonData.RiskNodes.IsHouseInsured] = HomeCommonService.selectedItem.FirstQuestion;
                        HomeCommonService.contractType.PolicyStartRealDate = "";
                        HomeCommonService.contractType.HouseDetails[CommonData.RiskNodes.IsHouseMortgage] = HomeCommonService.selectedItem.SecondQuestion;
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, HomeCommonService.selectedItem.FirstQuestion + "-" + HomeCommonService.selectedItem.SecondQuestion, "q" + r);
                        break;
                    case CommonData.QuestionKeys.HouseSection.PostalCode:
                        HomeCommonService.contractType.HouseDetails[i] = HomeCommonService.selectedItem.riskValue;
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, HomeCommonService.selectedItem.province, "q" + r);
                        break;
                    case CommonData.QuestionKeys.HouseSection.ConstructionYear:
                    case CommonData.QuestionKeys.HouseSection.RenewalYear:
                        HomeCommonService.contractType.HouseDetails[i] = new Date(parseInt(HomeCommonService.selectedItem.riskValue), 1, 1);
                        HomeCommonService.currentQuestion.SelectedValue = HomeCommonService.selectedItem.riskValue;
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, HomeCommonService.selectedItem.riskValue, "q" + r);
                        break;
                    case CommonData.QuestionKeys.HouseSection.LandArea:
                    case CommonData.QuestionKeys.HouseSection.HouseArea:
                        HomeCommonService.contractType.HouseDetails[CommonData.RiskNodes.HouseArea] = parseInt(HomeCommonService.selectedItem.FirstQuestion).toString();
                        HomeCommonService.contractType.HouseDetails[CommonData.RiskNodes.LandArea] = HomeCommonService.selectedItem.SecondQuestion === undefined ? null : parseInt(HomeCommonService.selectedItem.SecondQuestion).toString();
                        u = this.getQuestionsByGroupKey(HomeCommonService.currentQuestion.GroupKey);
                        u.forEach(function(n) {
                            n.SelectedValue = HomeCommonService.getSelectedValueFromContract(n.RiskNode)
                        });
                        h = HomeCommonService.selectedItem.SecondQuestion === undefined ? "0" : parseInt(HomeCommonService.selectedItem.SecondQuestion).toString();
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, parseInt(HomeCommonService.selectedItem.FirstQuestion).toString() + "-" + h, "q" + r);
                        break;
                    case CommonData.QuestionKeys.HouseSection.NumberOfRooms:
                    case CommonData.QuestionKeys.HouseSection.NumberOfRestRooms:
                        HomeCommonService.contractType.HouseDetails[CommonData.RiskNodes.NumberOfRooms] = HomeCommonService.selectedItem.FirstQuestion;
                        HomeCommonService.contractType.HouseDetails[CommonData.RiskNodes.NumberOfBathrooms] = HomeCommonService.selectedItem.SecondQuestion;
                        u = this.getQuestionsByGroupKey(HomeCommonService.currentQuestion.GroupKey);
                        u.forEach(function(n) {
                            n.SelectedValue = HomeCommonService.getSelectedValueFromContract(n.RiskNode)
                        });
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, HomeCommonService.selectedItem.FirstQuestion + "-" + HomeCommonService.selectedItem.SecondQuestion, "q" + r);
                        break;
                    case CommonData.QuestionKeys.InsuranceSection.Continent:
                        HomeCommonService.contractType[CommonData.RiskNodes.Container] = parseInt(HomeCommonService.selectedItem.riskValue).toString();
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, HomeCommonService.selectedItem.riskValue, "q" + r);
                        break;
                    case CommonData.QuestionKeys.InsuranceSection.Content:
                        HomeCommonService.contractType[CommonData.RiskNodes.Content] = parseInt(HomeCommonService.selectedItem.riskValue).toString();
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, HomeCommonService.selectedItem.riskValue, "q" + r);
                        break;
                    case CommonData.QuestionKeys.HouseSection.ConstructionQuality:
                    case CommonData.QuestionKeys.HouseSection.ConstructionMaterial:
                        HomeCommonService.contractType.HouseDetails[CommonData.RiskNodes.ConstructionQuality] = HomeCommonService.selectedItem.FirstQuestion;
                        HomeCommonService.contractType.HouseDetails[CommonData.RiskNodes.ConstructionMaterial] = HomeCommonService.selectedItem.SecondQuestion;
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, HomeCommonService.selectedItem.FirstQuestion + "-" + HomeCommonService.selectedItem.SecondQuestion, "q" + r);
                        break;
                    case CommonData.QuestionKeys.InsuranceSection.FavouriteKindInsurance:
                        HomeCommonService.contractType[CommonData.RiskNodes.JewelsOutOfSafeBox] = HomeCommonService.selectedItem.JewelsOutOfSafeBox ? parseInt(HomeCommonService.selectedItem.JewelsOutOfSafeBox).toString() : null;
                        HomeCommonService.contractType[CommonData.RiskNodes.JewelsInSafeBox] = HomeCommonService.selectedItem.JewelsInSafeBox ? parseInt(HomeCommonService.selectedItem.JewelsInSafeBox).toString() : null;
                        HomeCommonService.contractType[CommonData.RiskNodes.ValueOfAllSpecialObjects] = HomeCommonService.selectedItem.SpecialObject ? parseInt(HomeCommonService.selectedItem.SpecialObject).toString() : null;
                        HomeCommonService.currentQuestion.SelectedValue = HomeCommonService.selectedItem.SpecialObject ? parseInt(HomeCommonService.selectedItem.SpecialObject).toString() : "";
                        f = "";
                        f += HomeCommonService.selectedItem.JewelsOutOfSafeBox || HomeCommonService.selectedItem.JewelsInSafeBox ? "Jewels -" + (HomeCommonService.selectedItem.JewelsOutOfSafeBox ? HomeCommonService.selectedItem.JewelsOutOfSafeBox : "") + " - " + (HomeCommonService.selectedItem.JewelsInSafeBox ? HomeCommonService.selectedItem.JewelsInSafeBox : "") : null;
                        f += HomeCommonService.selectedItem.SpecialObject ? (f ? ", " : "") + "SpecialValueObjects - " + HomeCommonService.selectedItem.SpecialObject : "";
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, f, "q" + this.currentQuestion.QuestionNumber);
                        break;
                    case CommonData.QuestionKeys.InsuranceSection.JewelsInSafeBox:
                    case CommonData.QuestionKeys.InsuranceSection.JewelsOutOfSafeBox:
                        HomeCommonService.contractType[CommonData.RiskNodes.JewelsOutOfSafeBox] = parseInt(HomeCommonService.selectedItem.FirstQuestion).toString();
                        HomeCommonService.contractType[CommonData.RiskNodes.JewelsInSafeBox] = HomeCommonService.selectedItem.SecondQuestion === undefined ? "0" : parseInt(HomeCommonService.selectedItem.SecondQuestion).toString();
                        u = this.getQuestionsByGroupKey(HomeCommonService.currentQuestion.GroupKey);
                        u.forEach(function(n) {
                            n.SelectedValue = HomeCommonService.getSelectedValueFromContract(n.RiskNode)
                        });
                        c = HomeCommonService.selectedItem.SecondQuestion === undefined ? "0" : parseInt(HomeCommonService.selectedItem.SecondQuestion).toString();
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, HomeCommonService.selectedItem.FirstQuestion + "-" + c, "q" + r);
                        break;
                    case CommonData.QuestionKeys.InsuranceSection.ValueOfAllSpecialObjects:
                        HomeCommonService.contractType[i] = parseInt(HomeCommonService.selectedItem.riskValue).toString();
                        HomeCommonService.currentQuestion.SelectedValue = parseInt(HomeCommonService.selectedItem.riskValue).toString();
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, HomeCommonService.selectedItem.riskValue, "q" + r);
                        break;
                    case CommonData.QuestionKeys.HouseSection.AllProtectionSystems:
                        o = [];
                        for (s in HomeCommonService.selectedItem.riskValue) HomeCommonService.contractType[s] = HomeCommonService.selectedItem.riskValue[s];
                        HomeCommonService.PreSelectedProtectionSystems.forEach(function(n) {
                            n && $("#checkbox_" + n).is(":checked") && o.push($("#Selected" + n)[0].innerText)
                        });
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, o.join(" - "), "q" + r);
                        break;
                    case CommonData.QuestionKeys.PolicyHolderSection.PolicyHolderDateofBirth:
                        l = HomeCommonService.selectedItem.year + "-" + HomeCommonService.selectedItem.month + "-" + HomeCommonService.selectedItem.day;
                        HomeCommonService.contractType[CommonData.RiskNodes.PolicyHolderBirthDate] = l;
                        HomeCommonService.currentQuestion.Options.years[0].Value = HomeCommonService.selectedItem.year;
                        HomeCommonService.currentQuestion.Options.days[0].Value = HomeCommonService.selectedItem.day;
                        HomeCommonService.currentQuestion.Options.monthList.forEach(function(n) {
                            n.IsSelected = n.RiskValue === HomeCommonService.selectedItem.month
                        });
                        HomeCommonService.currentQuestion.SelectedValue = HomeCommonService.selectedItem.day + "/" + HomeCommonService.selectedItem.month + "/" + HomeCommonService.selectedItem.year;
                        a = (new Date).getFullYear() - parseInt(HomeCommonService.selectedItem.year);
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, a, "q" + r);
                        break;
                    case CommonData.QuestionKeys.InsuranceSection.InitialDateOfInsurance:
                        e = HomeCommonService.selectedItem.year + "-" + HomeCommonService.selectedItem.month + "-" + HomeCommonService.selectedItem.day;
                        HomeCommonService.contractType[CommonData.RiskNodes.PolicyStartRealDate] = e;
                        HomeCommonService.currentQuestion.Options.days.forEach(function(n) {
                            n.IsSelected = n.RiskValue === HomeCommonService.selectedItem.day
                        });
                        HomeCommonService.currentQuestion.Options.years.forEach(function(n) {
                            n.IsSelected = n.RiskValue === HomeCommonService.selectedItem.year
                        });
                        HomeCommonService.currentQuestion.Options.monthList.forEach(function(n) {
                            n.IsSelected = n.RiskValue === HomeCommonService.selectedItem.month
                        });
                        HomeCommonService.currentQuestion.SelectedValue = e;
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, e, "q" + r);
                        HomeCommonService.contractType.HouseDetails.IsHouseInsured == "No" && (HomeCommonService.getQuestion("Question_CapitalSection_PolicyHolderDateofBirth")[0].SelectedValue = "");
                        break;
                    case CommonData.QuestionKeys.PolicyHolderSection.DNI:
                        HomeCommonService.contractType[i] = HomeCommonService.selectedItem.riskValue;
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, "dni", "q" + r);
                        break;
                    case CommonData.QuestionKeys.PolicyHolderSection.HabitualPostalCode:
                        HomeCommonService.contractType[i] = HomeCommonService.selectedItem.riskValue;
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, HomeCommonService.selectedItem.HabitualProvince, "q" + r);
                        break;
                    case CommonData.QuestionKeys.OtherSection.Phone:
                        HomeCommonService.contractType[i] = HomeCommonService.selectedItem.riskValue;
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, "email", "q" + r);
                        HomeCommonService.contractType.Email = HomeCommonService.selectedItem.email;
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, "email", "q" + r);
                        break;
                    case CommonData.QuestionKeys.OtherSection.Email:
                        HomeCommonService.contractType[i] = HomeCommonService.selectedItem.riskValue;
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, "email", "q" + r);
                        break;
                    case CommonData.QuestionKeys.PolicyHolderSection.PolicyHolderOriginCountry:
                        HomeCommonService.contractType[i] = HomeCommonService.selectedItem.riskValue;
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, HomeCommonService.selectedItem.text, "q" + r);
                        break;
                    default:
                        HomeCommonService.contractType[i] = HomeCommonService.selectedItem.riskValue;
                        HomeCommonService.saveAnswerDataLayerEvent(CommonData.Constants.CJSaveAnswerDataLayerEvent, HomeCommonService.selectedItem.riskValue, "q" + r)
                }
                return !0
            }
            return !1
        },
        getSelectedValue: function(n, t, i) {
            var u, c, f, e, a, o, l, s, v, h, r;
            HomeCommonService.isCJ || document.getElementById("btnClose").scrollIntoView();
            u = selectedSQAnswer = selectedValue = "";
            switch (n) {
                case CommonData.QuestionKeys.HouseSection.IsHouseInsured:
                case CommonData.QuestionKeys.HouseSection.IsHouseMortgage:
                    u = $("input[name=radio_Question_HomeSection_IsHouseInsured]:checked").val();
                    selectedSQAnswer = $("input[name=radio_Question_HomeSection_IsHouseMortgage]:checked").val();
                    u && selectedSQAnswer && (HomeCommonService.selectedItem.FirstQuestion = u, HomeCommonService.selectedItem.SecondQuestion = selectedSQAnswer, HomeCommonService.selectedItem.riskValue = {
                        FirstQuestion: HomeCommonService.selectedItem.FirstQuestion,
                        SecondQuestion: HomeCommonService.selectedItem.SecondQuestion
                    });
                    HomeCommonService.QuestionScrollIntoView(n);
                    break;
                case CommonData.QuestionKeys.HouseSection.PersonInHouse:
                    selectedValue = this.getValueByControlId("HouseSection_PersonInHouse_option");
                    HomeCommonService.selectedItem.riskValue = HomeCommonService.selectedItem.value = selectedValue;
                    break;
                case CommonData.QuestionKeys.HouseSection.ConstructionYear:
                    selectedValue = this.getValueByControlId("HouseSection_ContructionYear_option");
                    HomeCommonService.selectedItem.riskValue = HomeCommonService.selectedItem.value = selectedValue;
                    break;
                case CommonData.QuestionKeys.HouseSection.PostalCode:
                    HomeCommonService.selectedItem.riskValue = HomeCommonService.selectedItem.selectedText = HomeCommonService.selectedItem.value = $("#txt_PostalCode").val();
                    HomeCommonService.selectedItem.province = $("#lblCity").html();
                    break;
                case CommonData.QuestionKeys.HouseSection.HouseArea:
                case CommonData.QuestionKeys.HouseSection.LandArea:
                    c = this.getQuestionsByGroupKey(t);
                    c && c.length > 1 ? (u = $("#txt_HouseArea").val(), selectedSQAnswer = $("#txt_LandArea").val(), HomeCommonService.selectedItem.FirstQuestion = u, HomeCommonService.selectedItem.SecondQuestion = selectedSQAnswer, u && selectedSQAnswer && (HomeCommonService.selectedItem.riskValue = {
                        FirstQuestion: HomeCommonService.selectedItem.FirstQuestion,
                        SecondQuestion: HomeCommonService.selectedItem.SecondQuestion
                    })) : (u = $("#txt_HouseArea").val(), HomeCommonService.selectedItem.FirstQuestion = u);
                    break;
                case CommonData.QuestionKeys.HouseSection.NumberOfRooms:
                case CommonData.QuestionKeys.HouseSection.NumberOfRestRooms:
                    u = this.getValueByControlId("HouseSection_NumberOfRooms_option");
                    HomeCommonService.selectedItem.FirstQuestion = u;
                    selectedSQAnswer = this.getValueByControlId("HouseSection_NumberOfBathrooms_option");
                    HomeCommonService.selectedItem.SecondQuestion = selectedSQAnswer;
                    u && selectedSQAnswer && (HomeCommonService.selectedItem.riskValue = {
                        FirstQuestion: HomeCommonService.selectedItem.FirstQuestion,
                        SecondQuestion: HomeCommonService.selectedItem.SecondQuestion
                    });
                    u && HomeCommonService.QuestionScrollIntoView(n);
                    break;
                case CommonData.QuestionKeys.HouseSection.ConstructionQuality:
                case CommonData.QuestionKeys.HouseSection.ConstructionMaterial:
                    u = $("input[name=radio_Question_HomeSection_ConstructionQuality]:checked").val();
                    selectedSQAnswer = $("input[name=radio_Question_HomeSection_ConstructionMaterial]:checked").val();
                    u && selectedSQAnswer && (HomeCommonService.selectedItem.FirstQuestion = u, HomeCommonService.selectedItem.SecondQuestion = selectedSQAnswer, HomeCommonService.selectedItem.riskValue = {
                        FirstQuestion: HomeCommonService.selectedItem.FirstQuestion,
                        SecondQuestion: HomeCommonService.selectedItem.SecondQuestion
                    });
                    HomeCommonService.QuestionScrollIntoView(n);
                    break;
                case CommonData.QuestionKeys.HouseSection.RenewalYear:
                    selectedValue = this.getValueByControlId("HouseSection_RenewalYear_option");
                    HomeCommonService.selectedItem.riskValue = HomeCommonService.selectedItem.value = selectedValue;
                    break;
                case CommonData.QuestionKeys.InsuranceSection.Continent:
                    HomeCommonService.selectedItem.riskValue = $("#txt_Container").val();
                    break;
                case CommonData.QuestionKeys.InsuranceSection.Content:
                    HomeCommonService.selectedItem.riskValue = $("#txt_Content").val();
                    break;
                case CommonData.QuestionKeys.HouseSection.AllProtectionSystems:
                    HomeCommonService.selectedItem.riskValue = {};
                    f = [];
                    CommonData.AllProtectionSystems.forEach(function(n) {
                        var t = $("input[name=checkbox_" + n + "]:checked").val();
                        t ? f.push(n) : f.push("")
                    });
                    HomeCommonService.PreSelectedProtectionSystems = f;
                    HomeCommonService.selectedItem.riskValue[CommonData.RiskNodes.Windowgrilles] = f[0] ? CommonData.HouseWindowGrilles.EveryDoorsWindows : f[1] ? CommonData.HouseWindowGrilles.OnlyGroundFloor : CommonData.HouseWindowGrilles.No;
                    HomeCommonService.selectedItem.riskValue[CommonData.RiskNodes.AlarmSystem] = f[6] ? CommonData.AlarmSystems.InEveryAccess : f[7] ? CommonData.AlarmSystems.OnlyOnGroundFloor : CommonData.AlarmSystems.No;
                    HomeCommonService.selectedItem.riskValue[CommonData.RiskNodes.Safebox] = f[2] ? CommonData.Safeboxes.Fitted : f[5] ? CommonData.Safeboxes.NotFitted : CommonData.Safeboxes.No;
                    [3, 4, 8, 9].forEach(function(n) {
                        HomeCommonService.selectedItem.riskValue[CommonData.AllProtectionSystems[n]] = f[n] ? "Yes" : "No"
                    });
                    break;
                case CommonData.QuestionKeys.InsuranceSection.FavouriteKindInsurance:
                    e = [];
                    a = [1, 2];
                    a.forEach(function(n) {
                        var t = $("input[name=checkbox_" + n + "]:checked").val();
                        t == "on" && e.push(n)
                    });
                    e.length > 0 && (HomeCommonService.selectedItem.riskValue = HomeCommonService.selectedItem.value = e.join(";"));
                    o = $("input[name=checkbox_1]:checked").val();
                    o ? (HomeCommonService.selectedItem.JewelsOutOfSafeBox = $("#txt_JewelsOutOfSafeBox").val(), HomeCommonService.selectedItem.JewelsInSafeBox = $("#txt_JewelsInSafeBox").val()) : (HomeCommonService.selectedItem.JewelsOutOfSafeBox = undefined, HomeCommonService.selectedItem.JewelsInSafeBox = undefined);
                    o = $("input[name=checkbox_2]:checked").val();
                    o ? (selectedValue = this.getValueByControlId("txt_ValueOfAllSpecialObjects"), HomeCommonService.selectedItem.SpecialObject = this.getValueByControlId("txt_ValueOfAllSpecialObjects")) : HomeCommonService.selectedItem.SpecialObject = undefined;
                    break;
                case CommonData.QuestionKeys.InsuranceSection.JewelsInSafeBox:
                case CommonData.QuestionKeys.InsuranceSection.JewelsOutOfSafeBox:
                    l = this.getQuestionsByGroupKey(t);
                    l && l.length > 1 ? (u = $("#txt_JewelsOutOfSafeBox").val(), selectedSQAnswer = $("#txt_JewelsInSafeBox").val(), HomeCommonService.selectedItem.FirstQuestion = u, HomeCommonService.selectedItem.SecondQuestion = selectedSQAnswer, u && selectedSQAnswer && (HomeCommonService.selectedItem.riskValue = {
                        FirstQuestion: HomeCommonService.selectedItem.FirstQuestion,
                        SecondQuestion: HomeCommonService.selectedItem.SecondQuestion
                    })) : (u = $("#txt_JewelsOutOfSafeBox").val(), HomeCommonService.selectedItem.FirstQuestion = u);
                    break;
                case CommonData.QuestionKeys.InsuranceSection.ValueOfAllSpecialObjects:
                    selectedValue = this.getValueByControlId("txt_ValueOfAllSpecialObjects");
                    HomeCommonService.selectedItem.riskValue = HomeCommonService.selectedItem.value = selectedValue;
                    break;
                case CommonData.QuestionKeys.PolicyHolderSection.PolicyHolderDateofBirth:
                    let y = $("#txt_dob").val();
                    if (y) {
                        let n = y.split("/");
                        HomeCommonService.selectedItem.day = n[0];
                        HomeCommonService.selectedItem.month = n[1];
                        HomeCommonService.selectedItem.year = n[2]
                    }
                    HomeCommonService.selectedItem.minYear = HomeCommonService.currentQuestion.Options.years[0].MinYear;
                    HomeCommonService.selectedItem.maxYear = HomeCommonService.currentQuestion.Options.years[0].MaxYear;
                    break;
                case CommonData.QuestionKeys.InsuranceSection.InitialDateOfInsurance:
                    let p = $("#txt_initial_date_insurance").val();
                    if (p) {
                        let n = p.split("/");
                        HomeCommonService.selectedItem.day = n[0];
                        HomeCommonService.selectedItem.month = n[1];
                        HomeCommonService.selectedItem.year = n[2]
                    }
                    break;
                case CommonData.QuestionKeys.PolicyHolderSection.PolicyHolderOriginCountry:
                    i && i === "000" ? ($("#div_" + CommonData.RiskNodes.PolicyHolderOriginCountry).hide(), $(".country-selector").removeClass("hidden")) : i != undefined ? ($("li").removeClass("selected"), $("#" + i).addClass("selected"), HomeCommonService.selectedItem.riskValue = HomeCommonService.selectedItem.value = i, HomeCommonService.selectedItem.text = $("#div_" + CommonData.RiskNodes.PolicyHolderOriginCountry).css("display") == "none" ? $("#" + i).attr("data-text") : $("#radio_" + i).attr("data-text")) : $("#div_" + CommonData.RiskNodes.PolicyHolderOriginCountry).css("display") == "none" ? $("li.selected").length > 0 && (HomeCommonService.selectedItem.riskValue = HomeCommonService.selectedItem.value = $("li.selected").attr("id")) : $("input[type=radio]:checked").length > 0 && (HomeCommonService.selectedItem.riskValue = HomeCommonService.selectedItem.value = $("input[type=radio]:checked").val());
                    break;
                case CommonData.QuestionKeys.PolicyHolderSection.DNI:
                    s = $("#txt_NIF").val();
                    HomeCommonService.selectedItem.riskValue = PreviousDIN !== "" && s === MaskDIN(PreviousDIN) && s.indexOf("*") >= 0 ? HomeCommonService.selectedItem.value = HomeCommonService.selectedItem.riskValue = PreviousDIN : HomeCommonService.selectedItem.value = HomeCommonService.selectedItem.riskValue = s;
                    break;
                case CommonData.QuestionKeys.PolicyHolderSection.HabitualPostalCode:
                    v = $("#txt_HabitualPostalCode").val();
                    HomeCommonService.selectedItem.riskValue = HomeCommonService.selectedItem.value = v;
                    HomeCommonService.selectedItem.HabitualProvince = $("#lblHabitualCity").html();
                    break;
                case CommonData.QuestionKeys.OtherSection.Phone:
                    HomeCommonService.selectedItem.politica = $("input[name=checkBox_Email]:checked").val();
                    r = $("#txt_Email").val();
                    r = r.replace("á", "a");
                    r = r.replace("Á", "A");
                    r = r.replace("é", "e");
                    r = r.replace("É", "E");
                    r = r.replace("í", "i");
                    r = r.replace("Í", "I");
                    r = r.replace("ó", "o");
                    r = r.replace("Ó", "O");
                    r = r.replace("ú", "u");
                    r = r.replace("Ú", "U");
                    $("#txt_Email").val(r);
                    HomeCommonService.selectedItem.email = PreviousEmail !== "" && r === EmailMask(PreviousEmail) && r.indexOf("*") >= 0 ? HomeCommonService.selectedItem.riskValue = PreviousEmail : HomeCommonService.selectedItem.riskValue = $("#txt_Email").val();
                    h = $("#txt_Phone").val();
                    HomeCommonService.selectedItem.phone = PreviousPhone !== "" && h === MaskPhoneNumber(PreviousPhone) && h.indexOf("●") >= 0 ? HomeCommonService.selectedItem.riskValue = PreviousPhone : HomeCommonService.selectedItem.riskValue = h;
                    break;
                case CommonData.QuestionKeys.OtherSection.Email:
                    HomeCommonService.selectedItem.politica = $("input[name=checkBox_Email]:checked").val();
                    r = $("#txt_Email").val();
                    r = r.replace("á", "a");
                    r = r.replace("Á", "A");
                    r = r.replace("é", "e");
                    r = r.replace("É", "E");
                    r = r.replace("í", "i");
                    r = r.replace("Í", "I");
                    r = r.replace("ó", "o");
                    r = r.replace("Ó", "O");
                    r = r.replace("ú", "u");
                    r = r.replace("Ú", "U");
                    $("#txt_Email").val(r);
                    HomeCommonService.selectedItem.email = PreviousEmail !== "" && r === EmailMask(PreviousEmail) && r.indexOf("*") >= 0 ? HomeCommonService.selectedItem.riskValue = PreviousEmail : HomeCommonService.selectedItem.riskValue = $("#txt_Email").val();
                    break;
                default:
                    HomeCommonService.selectedItem.riskValue = HomeCommonService.selectedItem.value = $("input[name=radio_singlelist]:checked").length > 0 ? $("input[name=radio_singlelist]:checked")[0].value : null
            }
        },
        getCounterName: function(n) {
            for (var i = "", t = 0; t < CommonData.Counters.length; t++)
                if (CommonData.Counters[t][0] === n) {
                    i = CommonData.Counters[t][1];
                    break
                } return i
        },
        saveCounter: function(n) {
            if (n) {
                var t = CommonData.Urls.SaveCounterURL + n;
                $.ajax({
                    type: "POST",
                    url: t,
                    async: !1,
                    cache: !1,
                    contentType: "application/x-www-form-urlencoded",
                    success: function() {}
                })
            }
        },
        getSectionNumber: function(n) {
            switch (n) {
                case CommonData.Constants.HouseSection:
                    return "section1";
                case CommonData.Constants.InsuranceSection:
                    return "section2";
                case CommonData.Constants.PolicyHolderSection:
                    return "section3";
                case CommonData.Constants.OtherSection:
                    return "section4"
            }
        },
        pushDataLayerEvent: function(n) {
            dataLayer.push(n)
        },
        saveAnswerDataLayerEvent: function(n, t, i) {
            var r = {
                event: n,
                cjcategory: "insurance",
                cjproduct: "home",
                answer: t,
                questionanswer: i
            };
            HomeCommonService.pushDataLayerEvent(r)
        },
        getRiskNodeByQuestionKey: function() {},
        spamEmailCheck: function() {},
        changeIsInsured: function() {},
        QuestionScrollIntoView: function(n) {
            CommonData.QuestionsScrollKeyList.forEach(function(t) {
                t[0] === n && HomeCommonService.ElementScrollIntoView(t[1])
            })
        },
        ElementScrollIntoView: function(n) {
            setTimeout(function() {
                var t = document.getElementById(n);
                t && t.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                })
            }, 100)
        },
        getValueByControlId: function(n) {
            return $("#" + n).val()
        },
        WebHTTPCall: function(n, t, i, r, u, f) {
            u = u === undefined || u === "" ? "GET" : u;
            this.createXmlHttp();
            CheckSessionTimeout();
            XmlHttp && (this.setNextResponseHandle(t), XmlHttp.onreadystatechange = HandleResponse, XmlHttp.open(u, n, !0), u === "POST" && XmlHttp.setRequestHeader("Content-Type", "application/json; charset=utf-8"), XmlHttp.send(f))
        },
        createXmlHttp: function() {
            try {
                XmlHttp = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (n) {
                try {
                    XmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {
                    XmlHttp = null
                }
            }
            XmlHttp || typeof XMLHttpRequest == "undefined" || (XmlHttp = new XMLHttpRequest)
        },
        getResponseHandle: function() {
            return "" + $("#hidNextQuestionHandle").val()
        },
        setNextResponseHandle: function(n) {
            $("#hidNextQuestionHandle").val(n)
        },
        getSelectedValueFromContract: function(n) {
            var t = HomeCommonService.contractType[n] !== undefined ? HomeCommonService.contractType : HomeCommonService.contractType.HouseDetails;
            switch (n) {
                case CommonData.Constants.ContructionYear:
                case CommonData.Constants.RenewalYear:
                    return new Date(t[n]).getFullYear().toString();
                default:
                    return t[n]
            }
        },
        updateQuestionModelDependencies: function() {
            var n = JSON.stringify(HomeCommonService.contractType);
            HomeCommonService.WebHTTPCall(CommonData.Urls.QuestionAPI + CommonData.Constants.CJQuestionAPIKey, CommonData.Constants.CJQuestionAPIKey, 14, !1, "POST", n)
        },
        setCDN: function(n) {
            n && (CommonData.Urls.JS_CDN = n.BaseJsUrl, CommonData.Urls.Image_CDN = n.BaseImageUrl, CommonData.Urls.CSS_CDN = n.BaseCssUrl, CommonData.Urls.NEW_COOKIE_CSS = n.NewCookieCssUrl, CommonData.Urls.NEW_COOKIE_JS = n.NewCookieJsUrl, this.manageHelpWindowButtons(n))
        },
        getImageCDN: function() {
            return CommonData.Urls.Image_CDN
        },
        manageHelpWindowButtons: function(n) {
            var t = getQueryString("isAutomation");
            if (t == "true" || n.IsEmailEnabled === !1 && n.IsCMBEnabled === !1 && n.IsChatWindowEnabled === !1) {
                $("#helpMenu").hide();
                return
            }
            $("#helpMenu").show();
            n.IsCMBEnabled === !0 ? $("#ctrlHelpSection_callmeback").show() : $("#ctrlHelpSection_callmeback").hide();
            n.IsChatWindowEnabled === !0 ? $("#ctrlHelpSection_chat").show() : $("#ctrlHelpSection_chat").hide();
            n.IsEmailEnabled === !0 ? $("#ctrlHelpSection_email").show() : $("#ctrlHelpSection_email").hide()
        },
        captchaRequired: function(n) {
            var t = !1;
            return document.getElementById("captchaText") == null && $.ajax({
                type: "Get",
                url: n,
                async: !1,
                cache: !1,
                success: function(n) {
                    n === CommonData.ErrorMessages.SessionExpired ? (HomeCommonService.isInternalRedirect = !0, window.location.href = window.location.origin + CommonData.Urls.CJ_Default_URL) : n !== null && (n = JSON.parse(n), t = n.IsCaptchaRequired)
                },
                error: function(n) {
                    console.log(n)
                }
            }), t
        },
        checkSpamEmail: function(n) {
            var t = !1;
            return $.ajax({
                type: "Get",
                url: n,
                async: !1,
                cache: !1,
                success: function(n) {
                    n !== null && (n = JSON.parse(n), t = n.IsSpamEmail)
                },
                error: function(n) {
                    console.log(n)
                }
            }), t
        },
        refreshPromotionPageCaptchaImage: function() {
            document.getElementById("ImageCaptcha").src = "captchaImage.aspx?v=" + Math.random()
        },
        setFocus: function(n) {
            setTimeout(function() {
                document.getElementById(n).focus()
            }, 10)
        },
        ConvertFromJsonString: function(n) {
            var t = "";
            return n != "" && (t = JSON.parse(n)), t
        },
        hightlightOnSelection: function(n) {
            n && (n.value ? $("#" + n.id).attr("style", "color: rgb(1, 83, 104);") : $("#" + n.id).attr("style", ""));
            HomeCommonService.currentQuestion.QuestionKey === CommonData.QuestionKeys.HouseSection.NumberOfRestRooms && HomeCommonService.QuestionScrollIntoView(HomeCommonService.currentQuestion.QuestionKey)
        },
        validateCaptcha: function(n) {
            var t = !1;
            return $.ajax({
                type: "Get",
                url: CommonData.Urls.QuestionAPI + CommonData.Constants.CaptchaValidationKey,
                async: !1,
                cache: !1,
                data: {
                    captcha: n
                },
                success: function(n) {
                    n !== null && (n = JSON.parse(n), t = n.IsCaptchaValid)
                },
                error: function(n) {
                    console.log(n)
                }
            }), t
        },
        getCurrentEnvCMSUrl: function() {
            return CommonFunctionsModule.getCurrentEnvCMSUrl(CommonData.Urls.CmsUrlTestEnvironment, CommonData.Urls.CmsUrlProdctionEnvironment, CommonData.Urls.SegurosCmsUrlTestEnvironment, CommonData.Urls.SegurosCJUrlProductionEnvironment)
        },
        onFavouriteInsuranceChange: function(n) {
            var t = $("input[name=checkbox_" + n + "]:checked").val();
            t ? $("#subTemplate_" + n).removeClass("hidden") : $("#subTemplate_" + n).addClass("hidden");
            $("input[name=checkbox_1]:checked").val() || $("input[name=checkbox_2]:checked").val() ? this.renameNextButton("Avanzar") : this.renameNextButton("No me interesa")
        },
        renameNextButton: function(n) {
            $("#next").text(n)
        }
    };

function initCJ() {
    IsSessionAvailable();
    whiteLabelUrl = document.location.href;
    whiteLabelUrl.indexOf(CommonData.Constants.WhiteLabelString) > -1 && (flagWhiteLabel = !0);
    HomeCommonService.WebHTTPCall(CommonData.Urls.QuestionAPI + CommonData.Constants.GetFirstQuestionDetailsCJ, CommonData.Constants.GetFirstQuestionDetailsCJ, 14, !1, "POST", "")
}

function HandleResponse() {
    var n, i, t, u, r;
    if (XmlHttp.readyState == 4)
        if (XmlHttp.status == 200) {
            if (n = XmlHttp.responseText, JSON.parse(n).RobotSessionHome == !0) return $(window).unbind("beforeunload"), i = window.location.href, i.indexOf("localhost") >= 0 || i.indexOf("rastreatortest.com") >= 0 || i.indexOf("rastreatorlocal.com") >= 0 || i.indexOf("rastreatordev.com") >= 0 ? window.location.href = CommonData.Urls.RobotRedirectionPage : i.indexOf("rastreator.com") >= 0 && (window.location.href = CommonData.Urls.RobotRedirectionPage), !1;
            if (JSON.parse(n).IsBlockedDNI == !0 && (HomeCommonService.isInternalRedirect = !0, window.location.href = CommonData.Urls.RobotRedirectionPage), JSON.parse(n).IsSessionExpired == !0) return HomeCommonService.isInternalRedirect = !0, flagWhiteLabel == !0 ? window.top.location.href = window.location.origin : window.location.href = CommonData.Urls.CmsUrlProdctionEnvironment, !1;
            if (n.indexOf("SpamSuspected") >= 0) return HomeCommonService.isInternalRedirect = !0, window.location.href = window.location.origin + CommonData.Urls.CJ_Default_URL, !1;
            switch (getResponseHandle()) {
                case CommonData.Constants.GetFirstQuestionDetailsCJ:
                    t = JSON.parse(n);
                    HomeCommonService.questionMaster = t.questionModel;
                    HomeCommonService.isCJ = !0;
                    HomeCommonService.contractType = t.contract;
                    HomeCommonService.setCDN(t.resourceModel);
                    HomeCommonService.currentQuestion = t.questionModel;
                    SkipQuestionOne();
                    break;
                case CommonData.Constants.CJQuestionAPIKey:
                    t = JSON.parse(n);
                    HomeCommonService.questionMaster = t.questionModel;
                    HomeCommonService.isCJ = !0;
                    HomeCommonService.contractType = t.contract;
                    HomeCommonService.setCDN(t.resourceModel);
                    HomeCommonService.questionMaster = HomeCommonService.questionMaster;
                    HomeCommonService.currentQuestion && HomeCommonService.currentQuestion.HasDependents ? (u = $.grep(HomeCommonService.questionMaster, function(n) {
                        return n.QuestionKey === HomeCommonService.currentQuestion.QuestionKey
                    }), HomeCommonService.currentQuestion = u[0], HomeCommonService.renderQuestion(HomeCommonService.currentQuestion.NextQuestionKey)) : HomeCommonService.renderQuestion(HomeCommonService.questionMaster[questionIndex].QuestionKey);
                    break;
                case "SubmitRisk":
                    console.log("submitted");
                    break;
                case "QuotePage":
                    r = [];
                    r = JSON.parse(n);
                    HomeCommonService.isInternalRedirect = !0;
                    window.location = r && r.option.length > 1 ? "https://seguro-hogar.rastreator.com/progress.aspx?c-sig=" + r.option[1] : CommonData.Urls.CJ_Default_URL;
                    break;
                case "SpamEmailCheck":
                    n == "SpamSuspected" && (window.location = CommonData.Urls.CmsUrlProdctionEnvironment)
            }
        } else console.log(XmlHttp.status), XmlHttp.status === 302 && (window.location.href = CommonData.Urls.CmsUrlProdctionEnvironment)
}

function SkipQuestionOne() {
    var n = GetParamsFromUrl("HouseOccupation"),
        t;
    n != null ? (t = GetMatchedParams(HomeCommonService.questionMaster.Options, n), t && (HomeCommonService.contractType.HouseDetails.HouseOccupation = n, HomeCommonService.updateQuestionModelDependencies(), questionIndex = 1)) : HomeCommonService.renderQuestion(HomeCommonService.currentQuestion.QuestionKey)
}

function GetMatchedParams(n, t) {
    for (var r = null, i = 0; i < n.length; i++)
        if (t == n[i].RiskValue) {
            r = n[i].RiskValue;
            break
        } return r
}

function GetParamsFromUrl(n) {
    var t = new RegExp("[?&]" + n + "=([^&#]*)").exec(document.location.href);
    return t == null ? null : decodeURI(t[1]) || 0
}

function CreateXmlHttp() {
    try {
        XmlHttp = new ActiveXObject("Msxml2.XMLHTTP")
    } catch (n) {
        try {
            XmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
            XmlHttp = null
        }
    }
    XmlHttp || typeof XMLHttpRequest == "undefined" || (XmlHttp = new XMLHttpRequest)
}

function getResponseHandle() {
    return "" + $("#hidNextQuestionHandle").val()
}

function setNextResponseHandle(n) {
    $("#hidNextQuestionHandle").val(n)
}

function CreateDivsForButtonNavigation(n) {
    var t, i, r;
    HomeCommonService.currentQuestion.QuestionNumber !== parseInt(n) && (HomeCommonService.isBrowserButtonClicked = !0, t = HomeCommonService.getQuestionKey(n), HomeCommonService.currentQuestion.QuestionNumber < parseInt(n) ? (i = HomeCommonService.getQuestionKey(parseInt(n) - 1), r = HomeCommonService.getCurrentQuestionGroupKey(i), HomeCommonService.getSelectedValue(i, r), HomeValidationService.validateAnswer(HomeCommonService.getQuestionKey(parseInt(n) - 1)) ? HomeCommonService.renderQuestion(t) : window.history.back()) : HomeCommonService.renderQuestion(t))
}

function IsSessionAvailable() {
    var n = CommonData.Urls.QuestionAPI + CommonData.Constants.IsSessionAvailableApiKey;
    $.ajax({
        type: "GET",
        url: n,
        async: !1,
        cache: !1,
        contentType: "application/x-www-form-urlencoded",
        success: function(n) {
            n && InsertFirstCounter()
        }
    })
}

function InsertFirstCounter() {
    try {
        SaveTrackerMultiple(["rs.hogar.house.index"])
    } catch (n) {
        $.ajax({
            url: '<%= ConfigurationManager.AppSettings["TrackerJsBaseUrl"] %>/Scripts/V2/tracker.min.js',
            success: function() {
                SaveTracker(["rs.hogar.house.index"])
            },
            error: function() {
                $.post("/commonCallback.aspx?Option=CounterFail", function() {}, "jsonp")
            }
        })
    }
}
var whiteLabelUrl, flagWhiteLabel = !1,
    questionIndex = 1,
    cj = {
        moveNext: function() {
            HomeCommonService.currentQuestion.QuestionKey === CommonData.QuestionKeys.OtherSection.Email || HomeCommonService.currentQuestion.QuestionKey === CommonData.QuestionKeys.OtherSection.Phone ? cj.submitRisk() : HomeCommonService.renderQuestion(HomeCommonService.currentQuestion.NextQuestionKey)
        },
        movePrevious: function() {
            HomeCommonService.isBrowserButtonClicked = !1;
            history.back()
        },
        submitRisk: function() {
            var n = JSON.stringify(HomeCommonService.contractType);
            HomeCommonService.WebHTTPCall(CommonData.Urls.QuestionAPI + CommonData.Constants.SubmitRisk, CommonData.Constants.QuotePage, 14, !1, "POST", n)
        },
        manageHash: function(n) {
            window.location.hash = "Q" + n
        }
    };
$(document).ready(function() {
    function i(t) {
        (n = JSON.parse(t), n || n.UpaSettings) && n.UpaSettings.IsUPAEnable && ($("#seo-title-id").html(""), $("#cj-header").addClass("upa-header"), HomeCommonService.isInternalRedirect = !0, u(n.UpaSettings.UPALoginTriggerUrl), f(n.UpaSettings.UPALoginUrl), n.UpaSettings.IsMobileDevice ? upaCommonService.appendMobileLoginTriggerInHeader() : upaCommonService.appendLoginTriggerInHeader(), upaCommonService.showHideUPALoginIcon(), upaCommonService.addTriggerEventListiner())
    }

    function r(n) {
        console.log("UPA JS CONFIGURATION : FAIL.. && response:" + n)
    }

    function u(n) {
        return new Promise(function(t, i) {
            const r = document.createElement("script");
            r.innerHTML = "";
            r.src = n;
            r.async = !0;
            r.defer = !0;
            r.onload = function() {
                t("success - postload")
            };
            r.onerror = function() {
                i("error")
            };
            document.head.appendChild(r)
        })
    }

    function f(n) {
        return new Promise(function(t, i) {
            const r = document.createElement("script");
            r.innerHTML = "";
            r.src = n;
            r.async = !0;
            r.defer = !0;
            r.onload = function() {
                t("success - postload")
            };
            r.onerror = function() {
                i("error")
            };
            document.head.appendChild(r)
        })
    }
    console.log("UPA JS LOADING : SUCCESSFULLY...");
    var n, t = "https://seguro-hogar.rastreator.com" + CommonData.Urls.UPASettingsApi;
    $.ajax({
        type: "GET",
        async: !1,
        url: t,
        contentType: "application/json",
        dataType: "json",
        success: i,
        failure: r
    });
    $("#upa-login-trigger").click(function() {
        upaCommonService.pushPopupEvent()
    });
    $("#upa-login-trigger-mobile").click(function() {
        upaCommonService.pushPopupEvent()
    })
});

function GetCityByPostCode(n) {
    var t, i;
    if (HomeValidationService.hideError(CommonData.Constants.PostalCodeControlId), String.prototype.trim = function() {
            return this.replace(/^\s*/, "").replace(/\s*$/, "")
        }, t = new String(n.value), t = t.trim().replace(".", ""), n.value = t, t = modifyPostalCode(t), postcodeValidation(t, "/HomeCallbacks.aspx")) {
        if (document.getElementById(CommonData.Constants.PostalCodeResultControlId).innerHTML = code2city(t.substring(0, 2)), $("#" + CommonData.Constants.PostalCodeResultControlId).removeClass("hidden"), HomeCommonService.driverPostCodeStatus != null && (i = HomeCommonService.driverPostCodeStatus, i === "No")) return document.getElementById(CommonData.Constants.PostalCodeResultControlId).innerHTML = "", HomeValidationService.showError(CommonData.ErrorMessages.PostalCode, CommonData.Constants.PostalCodeControlId), !1
    } else document.getElementById(CommonData.Constants.PostalCodeResultControlId).innerHTML = ""
}

function GetCityByHabitualPostCode(n) {
    var t, i;
    if (HomeValidationService.hideError("txt_HabitualPostalCode"), String.prototype.trim = function() {
            return this.replace(/^\s*/, "").replace(/\s*$/, "")
        }, t = new String(n.value), t = t.trim().replace(".", ""), n.value = t, t = modifyPostalCode(t), postcodeValidation(t, "/HomeCallbacks.aspx")) {
        if (document.getElementById("lblHabitualCity").innerHTML = code2city(t.substring(0, 2)), $("#lblHabitualCity").removeClass("hidden"), HomeCommonService.driverPostCodeStatus != null && (i = HomeCommonService.driverPostCodeStatus, i === "No")) return document.getElementById("lblHabitualCity").innerHTML = "", !1
    } else document.getElementById("lblHabitualCity").innerHTML = ""
}

function modifyPostalCode(n) {
    if ($.isNumeric(n) || (n = n.substring(0, n.length - 1)), n.length > 5 && (n = n.substring(0, 5)), n.length < 5 && n.length > 2)
        while (n.length < 5) n = "0" + n;
    return n
}

function postcodeValidation(n, t) {
    return n.trim().length != 5 || !$.isNumeric(n) || parseInt(n.substring(0, 2)) > 52 ? !1 : (getPostValidation(n, t), !0)
}

function getPostValidation(n, t) {
    var i = t + "?Option=GetPostCodeValidation&PostCode=" + n;
    $.ajax({
        type: "POST",
        url: i,
        async: !1,
        cache: !1,
        contentType: "application/x-www-form-urlencoded",
        success: function(t) {
            if (t == "SessionExpired" || t == "SpamSuspected" || t == "") return !1;
            arrResponseSplit = t.toString().split("|");
            arrResponseSplit[2] != null && (HomeCommonService.driverPostCodeStatus = arrResponseSplit[2]);
            arrResponseSplit[2] == "Yes" && (document.getElementById(CommonData.Constants.PostalCodeResultControlId).innerHTML = code2city(n.substring(0, 2)), document.getElementById(CommonData.Constants.PostalCodeResultControlId).innerHTML != "" && (HomeCommonService.contractType.HouseDetails.PostalCode = n))
        }
    })
}

function NumericKeyCode(n) {
    var t = n.which ? n.which : event.keyCode;
    return (!(t >= 48) || !(t <= 57)) && t != 8 ? (n.keycode = 0, !1) : !0
}
var digitsOnly = /[1234567890]/g,
    integerOnly = /[0-9\.]/g,
    alphaOnly = /[A-Z]/g,
    alphaNumericOnly = /[a-zA-Z0-9]/g,
    HomeValidationService = {
        showError: function(n, t) {
            t && $("#" + t).addClass("error");
            $(".error").removeClass("hidden");
            $("#errorContainer").text(n)
        },/*
        hideError: function(n) {
            n && $("#" + n).removeClass("error");
            $("#errorContainer").text("");
            $(".error").addClass("hidden")
        },
        validateAnswer: function(n, t) {
            var i = !0;
            switch (n) {
                case CommonData.QuestionKeys.HouseSection.IsHouseInsured:
                case CommonData.QuestionKeys.HouseSection.IsHouseMortgage:
                case CommonData.QuestionKeys.HouseSection.ConstructionQuality:
                case CommonData.QuestionKeys.HouseSection.ConstructionMaterial:
                    i = HomeValidationService.validateTwoListAnswer("");
                    break;
                case CommonData.QuestionKeys.HouseSection.PersonInHouse:
                    i = HomeValidationService.validateSingleDropDownAnswer(CommonData.ErrorMessages.InvalidDropDownSelection, "div_" + t);
                    break;
                case CommonData.QuestionKeys.HouseSection.PostalCode:
                    i = HomeValidationService.validatePostalCode(t);
                    break;
                case CommonData.QuestionKeys.HouseSection.Occupation:
                case CommonData.QuestionKeys.HouseSection.Utilization:
                case CommonData.QuestionKeys.HouseSection.HouseKind:
                case CommonData.QuestionKeys.HouseSection.Situation:
                case CommonData.QuestionKeys.HouseSection.RenewedAll:
                case CommonData.QuestionKeys.HouseSection.IsAlarmConnectedCentral:
                case CommonData.QuestionKeys.PolicyHolderSection.PolicyHolderOriginCountry:
                case CommonData.QuestionKeys.PolicyHolderSection.Defaulter:
                    i = HomeValidationService.validateSingleListAnswer(CommonData.ErrorMessages.Options);
                    break;
                case CommonData.QuestionKeys.HouseSection.ConstructionYear:
                    i = HomeValidationService.validateSingleDropDownAnswer(CommonData.ErrorMessages.InvalidDropDownSelection, "div_" + t);
                    break;
                case CommonData.QuestionKeys.HouseSection.HouseArea:
                case CommonData.QuestionKeys.HouseSection.LandArea:
                    i = HomeValidationService.validateHouseandLandAreaQuestion();
                    break;
                case CommonData.QuestionKeys.HouseSection.NumberOfRooms:
                case CommonData.QuestionKeys.HouseSection.NumberOfRestRooms:
                    i = HomeValidationService.validateRoomsandRestRoomsQuestion();
                    break;
                case CommonData.QuestionKeys.HouseSection.RenewalYear:
                    i = HomeValidationService.validateSingleDropDownAnswer(CommonData.ErrorMessages.InvalidDropDownSelection, "div_" + t);
                    break;
                case CommonData.QuestionKeys.InsuranceSection.Content:
                    i = HomeValidationService.validateContentQuestion();
                    break;
                case CommonData.QuestionKeys.InsuranceSection.Continent:
                    i = HomeValidationService.validateContinentQuestion();
                    break;
                case CommonData.QuestionKeys.InsuranceSection.JewelsInSafeBox:
                case CommonData.QuestionKeys.InsuranceSection.JewelsOutOfSafeBox:
                    i = HomeValidationService.validateSafeboxQuestion();
                    break;
                case CommonData.QuestionKeys.InsuranceSection.ValueOfAllSpecialObjects:
                    i = HomeValidationService.validateSingleInputBoxQuestion(CommonData.ErrorMessages.InvalidValueofSpecialObjects, "txt_" + t);
                    break;
                case CommonData.QuestionKeys.PolicyHolderSection.PolicyHolderDateofBirth:
                    i = HomeValidationService.validatePolicyHolderDOB(t);
                    break;
                case CommonData.QuestionKeys.InsuranceSection.InitialDateOfInsurance:
                    i = HomeValidationService.validateInitialDateOfInsurance(t);
                    break;
                case CommonData.QuestionKeys.InsuranceSection.FavouriteKindInsurance:
                    i = HomeValidationService.validateFavouriteKindInsurance(CommonData.ErrorMessages.FavouriteKindInsurance, t);
                    break;
                case CommonData.QuestionKeys.PolicyHolderSection.DNI:
                    i = HomeValidationService.validateDNI(t);
                    break;
                case CommonData.QuestionKeys.PolicyHolderSection.HabitualPostalCode:
                    i = HomeValidationService.validateHabitualPostalCode(t);
                    break;

                /*
                case CommonData.QuestionKeys.OtherSection.Email:
                    i = HomeValidationService.validateVCEmailQuestion(t);
                    break;
                case CommonData.QuestionKeys.OtherSection.Phone:
                    i = HomeValidationService.validatePhone(t)
                */
            }
            return i
        },
        saveErrorDataLayerEvent: function(n, t) {
            if (!n) {
                var i = {
                    event: "virtualpage",
                    virtualpage: "customerjourneyerror",
                    categoryvp: "insurance",
                    productvp: "home",
                    sectionvp: HomeCommonService.getSectionNumber(HomeCommonService.currentQuestion.SectionName),
                    question: "q" + HomeCommonService.currentQuestion.QuestionNumber,
                    cjerrormessage: t.join(" - ")
                };
                HomeCommonService.pushDataLayerEvent(i)
            }
        },
        validateTwoListAnswer: function(n) {
            return HomeCommonService.selectedItem.FirstQuestion && HomeCommonService.selectedItem.SecondQuestion ? (this.hideError(), !0) : (this.showError(n), !1)
        },
        validateSingleDropDownAnswer: function(n, t) {
            return HomeCommonService.selectedItem.value ? (this.hideError(t), !0) : (this.showError(n, t), HomeValidationService.saveErrorDataLayerEvent(!1, [n]), !1)
        },
        validatePostalCode: function(n) {
            this.hideError("txt_" + n);
            var t = $("#" + CommonData.Constants.PostalCodeResultControlId).text();
            return t ? !0 : (this.showError(CommonData.ErrorMessages.PostalCode, "txt_" + n), $("#txt_" + n).addClass("error"), $("#" + CommonData.Constants.PostalCodeResultControlId).text(""), HomeValidationService.saveErrorDataLayerEvent(!1, [CommonData.ErrorMessages.PostalCode]), !1)
        },
        validateHabitualPostalCode: function(n) {
            this.hideError("txt_" + n);
            var t = $("#lblHabitualCity").html();
            return t ? !0 : (this.showError(CommonData.ErrorMessages.HabitualPostalCode, "txt_" + n), $("#txt_" + n).addClass("error"), HomeValidationService.saveErrorDataLayerEvent(!1, [CommonData.ErrorMessages.HabitualPostalCode]), !1)
        },
        validateSingleListAnswer: function(n) {
            return HomeCommonService.selectedItem.value ? (this.hideError(), !0) : (this.showError(n, "errorContainer"), !1)
        },
        validateHouseandLandAreaQuestion: function() {
            $("#txt_HouseArea").removeClass("error");
            $("#errorContainer_HouseArea").text("");
            $("#txt_LandArea").removeClass("error");
            $("#errorContainer_LandArea").text("");
            var t = !0,
                n = [],
                i = HomeCommonService.getQuestionsByGroupKey(HomeCommonService.currentQuestion.GroupKey);
            if (i && i.length > 1) {
                if (!HomeCommonService.selectedItem.FirstQuestion && !HomeCommonService.selectedItem.SecondQuestion) return $("#txt_HouseArea").addClass("error"), $("#errorContainer_HouseArea").text(CommonData.ErrorMessages.InvalidHouseArea), $("#txt_LandArea").addClass("error"), $("#errorContainer_LandArea").text(CommonData.ErrorMessages.InvalidLandArea), t = !1, n.push(CommonData.ErrorMessages.InvalidHouseArea), n.push(CommonData.ErrorMessages.InvalidLandArea), HomeValidationService.saveErrorDataLayerEvent(!1, n), HomeCommonService.QuestionScrollIntoView(CommonData.QuestionKeys.HouseSection.HouseArea), t;
                HomeCommonService.selectedItem.FirstQuestion ? HomeCommonService.selectedItem.FirstQuestion < 20 && ($("#txt_HouseArea").addClass("error"), $("#errorContainer_HouseArea").text(CommonData.ErrorMessages.HouseAreaLessThan20NotAllowed), t = !1, n.push(CommonData.ErrorMessages.HouseAreaLessThan20NotAllowed), HomeCommonService.QuestionScrollIntoView(CommonData.QuestionKeys.HouseSection.HouseArea)) : ($("#txt_HouseArea").addClass("error"), $("#errorContainer_HouseArea").text(CommonData.ErrorMessages.InvalidHouseArea), t = !1, n.push(CommonData.ErrorMessages.InvalidHouseArea), HomeCommonService.QuestionScrollIntoView(CommonData.QuestionKeys.HouseSection.HouseArea));
                HomeCommonService.selectedItem.SecondQuestion || ($("#txt_LandArea").addClass("error"), $("#errorContainer_LandArea").text(CommonData.ErrorMessages.InvalidLandArea), t = !1, n.push(CommonData.ErrorMessages.InvalidLandArea))
            } else i && i.length === 1 && (HomeCommonService.selectedItem.FirstQuestion ? HomeCommonService.selectedItem.FirstQuestion < 20 && ($("#txt_HouseArea").addClass("error"), $("#errorContainer_HouseArea").text(CommonData.ErrorMessages.HouseAreaLessThan20NotAllowed), t = !1, n.push(CommonData.ErrorMessages.HouseAreaLessThan20NotAllowed)) : ($("#txt_HouseArea").addClass("error"), $("#errorContainer_HouseArea").text(CommonData.ErrorMessages.InvalidHouseArea), t = !1, n.push(CommonData.ErrorMessages.InvalidHouseArea), HomeCommonService.QuestionScrollIntoView(HomeCommonService.currentQuestion.QuestionKey)));
            return t ? !0 : (HomeValidationService.saveErrorDataLayerEvent(!1, n), !1)
        },
        validateRoomsandRestRoomsQuestion: function() {
            $("#div_NumberOfRooms").removeClass("error");
            $("#errorContainer_NumberOfRooms").find("p").text("");
            $("#div_NumberOfBathrooms").removeClass("error");
            $("#errorContainer_NumberOfBathrooms").find("p").text("");
            var n = [],
                t = !0;
            return !HomeCommonService.selectedItem.FirstQuestion && !HomeCommonService.selectedItem.SecondQuestion ? ($("#div_NumberOfRooms").addClass("error"), $("#errorContainer_NumberOfRooms").find("p").text(CommonData.ErrorMessages.NumberOfRooms), $("#div_NumberOfBathrooms").addClass("error"), $("#errorContainer_NumberOfBathrooms").find("p").text(CommonData.ErrorMessages.NumberOfRestRooms), t = !1, n.push(CommonData.ErrorMessages.NumberOfRooms), n.push(CommonData.ErrorMessages.NumberOfRestRooms), HomeValidationService.saveErrorDataLayerEvent(!1, n), HomeCommonService.QuestionScrollIntoView(CommonData.QuestionKeys.HouseSection.NumberOfRooms), t) : (HomeCommonService.selectedItem.FirstQuestion || ($("#div_NumberOfRooms").addClass("error"), $("#errorContainer_NumberOfRooms").find("p").text(CommonData.ErrorMessages.NumberOfRooms), t = !1, n.push(CommonData.ErrorMessages.NumberOfRooms), HomeCommonService.QuestionScrollIntoView(CommonData.QuestionKeys.HouseSection.NumberOfRooms)), HomeCommonService.selectedItem.SecondQuestion || ($("#div_NumberOfBathrooms").addClass("error"), $("#errorContainer_NumberOfBathrooms").find("p").text(CommonData.ErrorMessages.NumberOfRestRooms), t = !1, n.push(CommonData.ErrorMessages.NumberOfRestRooms)), t ? !0 : (HomeValidationService.saveErrorDataLayerEvent(!1, n), !1))
        },
        validateContinentAndContentQuestion: function() {
            $("#txt_Container").removeClass("error");
            $("#errorContainer_Container").text("");
            $("#txt_Content").removeClass("error");
            $("#errorContainer_Content").text("");
            var t = !0,
                n = [],
                i = HomeCommonService.contractType.HouseDetails[CommonData.RiskNodes.HouseOccupation];
            return i !== "Tenant" && !HomeCommonService.selectedItem.FirstQuestion && !HomeCommonService.selectedItem.SecondQuestion ? ($("#txt_Container").addClass("error"), $("#errorContainer_Container").text(CommonData.ErrorMessages.ContinentRequired), $("#txt_Content").addClass("error"), $("#errorContainer_Content").text(CommonData.ErrorMessages.InvalidContent), t = !1, n.push(CommonData.ErrorMessages.ContinentRequired), n.push(CommonData.ErrorMessages.InvalidContent), HomeValidationService.saveErrorDataLayerEvent(!1, n), t) : i === "Tenant" && !HomeCommonService.selectedItem.FirstQuestion && !HomeCommonService.selectedItem.SecondQuestion ? ($("#txt_Container").addClass("error"), $("#errorContainer_Container").text(CommonData.ErrorMessages.InvalidContinent), $("#txt_Content").addClass("error"), $("#errorContainer_Content").text(CommonData.ErrorMessages.InvalidContent), t = !1, n.push(CommonData.ErrorMessages.InvalidContinent), n.push(CommonData.ErrorMessages.InvalidContent), HomeValidationService.saveErrorDataLayerEvent(!1, n), t) : (i === "Tenant" || HomeCommonService.selectedItem.FirstQuestion ? i !== "Tenant" || HomeCommonService.selectedItem.FirstQuestion ? i === "Tenant" && parseInt(HomeCommonService.selectedItem.FirstQuestion) > 12e3 ? ($("#txt_Container").addClass("error"), $("#errorContainer_Container").text(CommonData.ErrorMessages.InvalidContinent), t = !1, n.push(CommonData.ErrorMessages.InvalidContinent)) : i !== "Tenant" && parseInt(HomeCommonService.selectedItem.FirstQuestion).toString() === "0" && ($("#txt_Container").val(""), $("#txt_Container").addClass("error"), $("#errorContainer_Container").text(CommonData.ErrorMessages.InvalidContinentWithZero), t = !1, n.push(CommonData.ErrorMessages.InvalidContinentWithZero)) : ($("#txt_Container").addClass("error"), $("#errorContainer_Container").text(CommonData.ErrorMessages.InvalidContinent), t = !1, n.push(CommonData.ErrorMessages.InvalidContinent), HomeCommonService.QuestionScrollIntoView(CommonData.QuestionKeys.InsuranceSection.Continent)) : ($("#txt_Container").addClass("error"), $("#errorContainer_Container").text(CommonData.ErrorMessages.ContinentRequired), t = !1, n.push(CommonData.ErrorMessages.ContinentRequired), HomeCommonService.QuestionScrollIntoView(CommonData.QuestionKeys.InsuranceSection.Continent)), HomeCommonService.selectedItem.SecondQuestion ? i === "Tenant" && parseInt(HomeCommonService.selectedItem.SecondQuestion).toString() === "0" && ($("#txt_Content").addClass("error"), $("#errorContainer_Content").text(CommonData.ErrorMessages.InvalidContent), t = !1, n.push(CommonData.ErrorMessages.InvalidContent)) : ($("#txt_Content").addClass("error"), $("#errorContainer_Content").text(CommonData.ErrorMessages.InvalidContent), t = !1, n.push(CommonData.ErrorMessages.InvalidContent), HomeCommonService.QuestionScrollIntoView(HomeCommonService.currentQuestion.QuestionKey)), t ? !0 : (HomeValidationService.saveErrorDataLayerEvent(!1, n), !1))
        },
        validateContinentQuestion: function() {
            $("#txt_Container").removeClass("error");
            $("#errorContainer").text("");
            var n = !0,
                t = [],
                i = HomeCommonService.contractType.HouseDetails[CommonData.RiskNodes.HouseOccupation];
            if (HomeCommonService.selectedItem.riskValue) i === "Tenant" && parseInt(HomeCommonService.selectedItem.riskValue) > 12e3 ? ($("#txt_Container").addClass("error"), $("#errorContainer").text(CommonData.ErrorMessages.InvalidContinent), n = !1, t.push(CommonData.ErrorMessages.InvalidContinent)) : i !== "Tenant" && parseInt(HomeCommonService.selectedItem.riskValue).toString() === "0" && ($("#txt_Container").val(""), $("#txt_Container").addClass("error"), $("#errorContainer").text(CommonData.ErrorMessages.InvalidContinentWithZero), n = !1, t.push(CommonData.ErrorMessages.InvalidContinentWithZero));
            else return $("#txt_Container").addClass("error"), $("#errorContainer").text(CommonData.ErrorMessages.ContinentRequired), n = !1, t.push(CommonData.ErrorMessages.ContinentRequired), HomeValidationService.saveErrorDataLayerEvent(!1, t), n;
            return n ? !0 : (HomeValidationService.saveErrorDataLayerEvent(!1, t), !1)
        },
        validateContentQuestion: function() {
            var t = HomeCommonService.contractType.HouseDetails[CommonData.RiskNodes.HouseOccupation],
                n = !0;
            return HomeCommonService.selectedItem.riskValue ? parseInt(HomeCommonService.selectedItem.riskValue).toString() === "0" && ($("#txt_Content").addClass("error"), $("#errorContainer").text(CommonData.ErrorMessages.InvalidContent), n = !1, errorMessages.push(CommonData.ErrorMessages.InvalidContent)) : ($("#txt_Content").addClass("error"), $("#errorContainer").text(CommonData.ErrorMessages.InvalidContent), n = !1, errorMessages.push(CommonData.ErrorMessages.InvalidContent), HomeCommonService.QuestionScrollIntoView(HomeCommonService.currentQuestion.QuestionKey)), n ? !0 : (HomeValidationService.saveErrorDataLayerEvent(!1, errorMessages), !1)
        },
        validateSafeboxQuestion: function() {
            $("#txt_JewelsOutOfSafeBox").removeClass("error");
            $("#errorContainer_JewelsOutOfSafeBox").text("");
            $("#txt_JewelsInSafeBox").removeClass("error");
            $("#errorContainer_JewelsInSafeBox").text("");
            var n = !0,
                t = [];
            return HomeCommonService.selectedItem.JewelsOutOfSafeBox == undefined || this.isNumber(HomeCommonService.selectedItem.JewelsOutOfSafeBox) || ($("#txt_JewelsOutOfSafeBox").addClass("error"), $("#errorContainer_JewelsOutOfSafeBox").text(CommonData.ErrorMessages.InvalidSafeBox), n = !1, t.push(CommonData.ErrorMessages.InvalidSafeBox), HomeCommonService.QuestionScrollIntoView(HomeCommonService.currentQuestion.QuestionKey)), HomeCommonService.selectedItem.JewelsInSafeBox == undefined || this.isNumber(HomeCommonService.selectedItem.JewelsInSafeBox) || ($("#txt_JewelsInSafeBox").addClass("error"), $("#errorContainer_JewelsInSafeBox").text(CommonData.ErrorMessages.InvalidSafeBox), n = !1, t.push(CommonData.ErrorMessages.InvalidSafeBox)), n ? !0 : (HomeValidationService.saveErrorDataLayerEvent(n, t), !1)
        },
        validateSpecialObject: function() {
            var n = "txt_" + CommonData.RiskNodes.ValueOfAllSpecialObjects;
            return ($("#" + n).removeClass("error"), $("#errorContainer_" + CommonData.RiskNodes.ValueOfAllSpecialObjects).text(""), HomeCommonService.selectedItem.SpecialObject != undefined && !this.isNumber(HomeCommonService.selectedItem.SpecialObject)) ? ($("#" + n).addClass("error"), $("#errorContainer_" + CommonData.RiskNodes.ValueOfAllSpecialObjects).text(CommonData.ErrorMessages.InvalidValueofSpecialObjects), !1) : !0
        },
        validateSingleInputBoxQuestion: function(n, t) {
            return HomeCommonService.selectedItem.value ? (this.hideError(t), !0) : (this.showError(n, t), HomeValidationService.saveErrorDataLayerEvent(!1, [n]), !1)
        },
        resetDOBErrorFields: function(n) {
            $("#errorDate_" + n).removeClass("error");
            $("#errorDate_" + n).find("p").text("");
            $("#day_" + n).removeClass("error");
            $("#div_" + n).removeClass("error");
            $("#year_" + n).removeClass("error");
            $("#errorDay_" + n).find("p").text("");
            $("#errorMonth_" + n).find("p").text("");
            $("#errorYear_" + n).find("p").text("")
        },
        validatePolicyHolderDOB: function(n) {
            var i = [],
                t;
            if (HomeValidationService.resetDOBErrorFields(n), t = !1, HomeCommonService.selectedItem.day || HomeCommonService.selectedItem.month || HomeCommonService.selectedItem.year) $("#txt_dob").removeClass("error"), t = !0;
            else return $("#txt_dob").addClass("error"), $("#errorText").text(CommonData.ErrorMessages.DateInvalid), t = !1, i.push(CommonData.ErrorMessages.DateInvalid), HomeValidationService.saveErrorDataLayerEvent(t, i), t;
            if (i = [], HomeCommonService.selectedItem.day && HomeCommonService.selectedItem.month && HomeCommonService.selectedItem.year) {
                HomeValidationService.resetDOBErrorFields(n);
                i = [];
                var r = parseInt(HomeCommonService.selectedItem.day),
                    u = parseInt(HomeCommonService.selectedItem.month),
                    f = parseInt(HomeCommonService.selectedItem.year);
                if (HomeValidationService.IsValidDate(r, u, f)) {
                    if (HomeValidationService.IsAge18Years(f, u, r)) t = !0;
                    else return $("#txt_dob").addClass("error"), $("#errorText").text(CommonData.ErrorMessages.PolicyHolderLegalAge), t = !1, i.push(CommonData.ErrorMessages.PolicyHolderLegalAge), HomeValidationService.saveErrorDataLayerEvent(t, i), t;
                    if (HomeValidationService.ValidateYearInRange(HomeCommonService.selectedItem.year, HomeCommonService.selectedItem.minYear, HomeCommonService.selectedItem.maxYear)) t = !0;
                    else return $("#txt_dob").addClass("error"), $("#errorText").text(CommonData.ErrorMessages.DateInvalid), t = !1, i.push(CommonData.ErrorMessages.DateInvalid), HomeValidationService.saveErrorDataLayerEvent(t, i), t
                } else $("#txt_dob").addClass("error"), $("#errorText").text(CommonData.ErrorMessages.DateInvalid), t = !1, i.push(CommonData.ErrorMessages.PolicyHolderLegalAge)
            }
            return HomeValidationService.saveErrorDataLayerEvent(t, i), t
        },
        resetInitialDateErrorFields: function(n) {
            $("#errorDate_" + n).removeClass("error");
            $("#errorDate_" + n).find("p").text("");
            $("#div_day_" + n).removeClass("error");
            $("#div_month_" + n).removeClass("error");
            $("#div_year_" + n).removeClass("error");
            $("#errorDay_" + n).find("p").text("");
            $("#errorMonth_" + n).find("p").text("");
            $("#errorYear_" + n).find("p").text("")
        },
        validateInitialDateOfInsurance: function(n) {
            var t, i, r;
            if (HomeValidationService.resetInitialDateErrorFields(n), t = !1, i = [], HomeCommonService.selectedItem.day || HomeCommonService.selectedItem.month || HomeCommonService.selectedItem.year) $("#txt_initial_date_insurance").removeClass("error"), t = !0;
            else return $("#txt_initial_date_insurance").addClass("error"), $("#errorText").text(CommonData.ErrorMessages.DateInvalid), t = !1, i.push(CommonData.ErrorMessages.DateInvalid), HomeValidationService.saveErrorDataLayerEvent(t, i), t;
            if (i = [], HomeCommonService.selectedItem.day && HomeCommonService.selectedItem.month && HomeCommonService.selectedItem.year) {
                HomeValidationService.resetInitialDateErrorFields(n);
                i = [];
                var u = parseInt(HomeCommonService.selectedItem.day),
                    f = parseInt(HomeCommonService.selectedItem.month),
                    e = parseInt(HomeCommonService.selectedItem.year);
                HomeValidationService.IsValidDate(u, f, e) ? (t = !0, r = HomeValidationService.IsPolicyStartDateValid(e, f, u), r !== "" ? ($("#txt_initial_date_insurance").addClass("error"), $("#errorText").text(r), t = !1, i.push(r)) : t = !0) : ($("#txt_initial_date_insurance").addClass("error"), $("#errorText").text(CommonData.ErrorMessages.DateInvalid), t = !1, i.push(CommonData.ErrorMessages.DateInvalid))
            }
            return HomeValidationService.saveErrorDataLayerEvent(t, i), t
        },
        validateFavouriteKindInsurance: function() {
            if (HomeCommonService.selectedItem.riskValue) {
                var n = !0,
                    t = !0;
                return HomeCommonService.selectedItem.riskValue.indexOf("1") > -1 && (n = this.validateSafeboxQuestion()), HomeCommonService.selectedItem.riskValue.indexOf("2") > -1 && (t = this.validateSpecialObject()), n && t
            }
            return !0
        },
        validateDNI: function(n) {
            var e = [],
                t, i, r, u, f;
            if ($("#txt_" + n).removeClass("error"), $("#errorContainer_" + n).text(""), t = HomeCommonService.selectedItem.value, t = t.replace(/\s\s+/g, "").replace(/[^\w\s]/gi, "").replace(/[^0-9a-zA-Z]/g, ""), i = !1, t.length > 0 && t.length === 9 && (r = t.charAt(0), r.toLowerCase() === "x" && (t = t.indexOf("x") === 0 || t.indexOf("X") === 0 ? t.replace("X", 0).replace("x", 0) : 0), r.toLowerCase() === "y" && (t = t.indexOf("y") === 0 || t.indexOf("Y") === 0 ? t.replace("y", 1).replace("Y", 1) : 1), r.toLowerCase() === "z" && (t = t.indexOf("z") === 0 || t.indexOf("Z") === 0 ? t.replace("Z", 2).replace("z", 2) : 2), u = "TRWAGMYFPDXBNJZSQVHLCKE", f = t.substring(t.length - 1, t.length).toUpperCase(), u.indexOf(f) !== -1)) {
                var s = t.substring(0, t.length - 1),
                    o = s % 23,
                    h = u.substring(o, o + 1);
                h === f && (i = !0)
            }
            return i || ($("#txt_" + n).addClass("error"), $("#errorContainer_" + n).text(CommonData.ErrorMessages.Dni), e.push(CommonData.ErrorMessages.Dni), HomeValidationService.saveErrorDataLayerEvent(i, e)), i
        },
        validatePhone: function(n) {
            var t = !1,
                i = [],
                r, u, f;
            if (!HomeValidationService.validateEmailQuestion("")) return t;
            if (($("#txt_" + n).removeClass("error"), $("#error_Phone").text(""), $("#label_" + n).removeClass("error"), r = HomeCommonService.selectedItem.phone, u = ["6", "7", "8", "9"], r.trim().length > 1 && r.trim().length < 9) || r.trim().length > 1 && $.inArray(r.trim().split("")[0], u) === -1) return $("#txt_" + n).addClass("error"), $("#error_Phone").text(CommonData.ErrorMessages.Phone), t = !1, i.push(CommonData.ErrorMessages.Phone), HomeValidationService.saveErrorDataLayerEvent(t, i), t;
            if (t = r.indexOf("●") >= 0 ? !0 : !0, HomeCommonService.isCJ && !HomeCommonService.selectedItem.politica && ($("#label_" + n).addClass("error"), $("#errorPolitica").text(CommonData.ErrorMessages.TermCondition), t = !1, i.push(CommonData.ErrorMessages.TermCondition), HomeValidationService.saveErrorDataLayerEvent(t, i)), HomeCommonService.isCJ && t) {
                if (i = [], f = "https://seguro-hogar.rastreator.com/HomeCallbacks.aspx?Option=EmailSpamCheck&hidEmail=" + $("#txt_Email").val(), HomeCommonService.checkSpamEmail(f)) return HomeCommonService.isInternalRedirect = !0, window.location.href = flagWhiteLabel == !0 ? whiteLabelUrl : HomeCommonService.getCurrentEnvCMSUrl(), !1;
                HomeValidationService.IsCaptchaValidated() ? ($("#captchaText").removeClass("error"), $("#captchaerrordiv").text(""), HomeValidationService.CaptchaVerify() ? (HomeValidationService.SubmitCaptcha(), t = !0) : ($("#captchaText").addClass("error"), $("#captchaerrordiv").text(CommonData.ErrorMessages.InvalidCaptchaOperation), t = !1, i.push(CommonData.ErrorMessages.InvalidCaptchaOperation), HomeValidationService.saveErrorDataLayerEvent(t, i))) : ($("#captchaText").addClass("error"), $("#captchaerrordiv").text(CommonData.ErrorMessages.InvalidCaptchaOperation), t = !1, i.push(CommonData.ErrorMessages.InvalidCaptchaOperation), HomeValidationService.saveErrorDataLayerEvent(t, i))
            }
            return t
        },
        validateEmailQuestion: function(n) {
            n = "Email";
            var t = !1,
                i = [];
            if ($("#txt_" + n).removeClass("error"), $("#errorEmail").text(""), $("#label_" + n).removeClass("error"), $("#errorPolitica").text(""), HomeCommonService.isCJ || HomeCommonService.selectedItem.email)
                if (HomeCommonService.selectedItem.email) $("#txt_" + n).removeClass("error"), $("#errorEmail").text(""), $("#label_" + n).removeClass("error"), $("#errorPolitica").text(""), t = !0;
                else return $("#txt_" + n).addClass("error"), $("#errorEmail").text(CommonData.ErrorMessages.Email), $("#label_" + n).addClass("error"), t = !1, i.push(CommonData.ErrorMessages.Email), HomeValidationService.saveErrorDataLayerEvent(t, i), t;
            else return $("#txt_" + n).addClass("error"), $("#errorEmail").text(CommonData.ErrorMessages.Email), t = !1, i.push(CommonData.ErrorMessages.Email), HomeValidationService.saveErrorDataLayerEvent(t, i), t;
            return i = [], HomeCommonService.selectedItem.email ? HomeCommonService.selectedItem.email.indexOf("@") === -1 || HomeCommonService.selectedItem.email.indexOf(".") === -1 ? ($("#txt_" + n).addClass("error"), $("#errorEmail").text(CommonData.ErrorMessages.Email), t = !1, i.push(CommonData.ErrorMessages.Email)) : HomeValidationService.IsValidEmail("txt_" + n) ? ($("#txt_" + n).removeClass("error"), $("#errorEmail").text(""), t = !0) : ($("#txt_" + n).addClass("error"), $("#errorEmail").text(CommonData.ErrorMessages.Email), t = !1, i.push(CommonData.ErrorMessages.Email)) : ($("#txt_" + n).addClass("error"), $("#errorEmail").text(CommonData.ErrorMessages.Email), t = !1, i.push(CommonData.ErrorMessages.Email)), t
        },
        validateVCEmailQuestion: function(n) {
            var t = !1,
                i = [],
                r;
            if ($("#txt_" + n).removeClass("error"), $("#errorEmail").text(""), $("#label_" + n).removeClass("error"), $("#errorPolitica").text(""), HomeCommonService.isCJ || HomeCommonService.selectedItem.email)
                if (HomeCommonService.selectedItem.email) $("#txt_" + n).removeClass("error"), $("#errorEmail").text(""), $("#label_" + n).removeClass("error"), $("#errorPolitica").text(""), t = !0;
                else return $("#txt_" + n).addClass("error"), $("#errorEmail").text(CommonData.ErrorMessages.Email), $("#label_" + n).addClass("error"), t = !1, i.push(CommonData.ErrorMessages.Email), HomeValidationService.saveErrorDataLayerEvent(t, i), t;
            else return $("#txt_" + n).addClass("error"), $("#errorEmail").text(CommonData.ErrorMessages.Email), t = !1, i.push(CommonData.ErrorMessages.Email), HomeValidationService.saveErrorDataLayerEvent(t, i), t;
            if (i = [], HomeCommonService.selectedItem.email ? HomeCommonService.selectedItem.email.indexOf("@") === -1 || HomeCommonService.selectedItem.email.indexOf(".") === -1 ? ($("#txt_" + n).addClass("error"), $("#errorEmail").text(CommonData.ErrorMessages.Email), t = !1, i.push(CommonData.ErrorMessages.Email)) : HomeValidationService.IsValidEmail("txt_" + n) ? ($("#txt_" + n).removeClass("error"), $("#errorEmail").text(""), t = !0) : ($("#txt_" + n).addClass("error"), $("#errorEmail").text(CommonData.ErrorMessages.Email), t = !1, i.push(CommonData.ErrorMessages.Email)) : ($("#txt_" + n).addClass("error"), $("#errorEmail").text(CommonData.ErrorMessages.Email), t = !1, i.push(CommonData.ErrorMessages.Email)), HomeCommonService.isCJ && !HomeCommonService.selectedItem.politica && ($("#label_" + n).addClass("error"), $("#errorPolitica").text(CommonData.ErrorMessages.TermCondition), t = !1, i.push(CommonData.ErrorMessages.TermCondition)), HomeCommonService.isCJ && t) {
                if (i = [], r = "https://seguro-hogar.rastreator.com/HomeCallbacks.aspx?Option=EmailSpamCheck&hidEmail=" + $("#txt_Email").val(), HomeCommonService.checkSpamEmail(r)) return HomeCommonService.isInternalRedirect = !0, window.location.href = flagWhiteLabel == !0 ? whiteLabelUrl : HomeCommonService.getCurrentEnvCMSUrl(), !1;
                HomeValidationService.IsCaptchaValidated() ? ($("#captchaText").removeClass("error"), $("#captchaerrordiv").text(""), HomeValidationService.CaptchaVerify() ? (HomeValidationService.SubmitCaptcha(), t = !0) : ($("#captchaText").addClass("error"), $("#captchaerrordiv").text(CommonData.ErrorMessages.InvalidCaptchaOperation), t = !1, i.push(CommonData.ErrorMessages.InvalidCaptchaOperation))) : ($("#captchaText").addClass("error"), $("#captchaerrordiv").text(CommonData.ErrorMessages.InvalidCaptchaOperation), t = !1, i.push(CommonData.ErrorMessages.InvalidCaptchaOperation))
            }
            return HomeValidationService.saveErrorDataLayerEvent(t, i), t
        },
        restrictCharacters: function(n, t, i) {
            var t, r;
            return n.value.length > n.maxLength ? !1 : (t || (t = window.event), t.charCode == 0) ? !0 : (t.keyCode ? code = t.keyCode ? t.keyCode : t.charCode : t.which && (code = t.which), r = String.fromCharCode(code), code == 27) ? (this.blur(), !1) : t.ctrlKey || code == 9 || code == 8 || code == 36 || code == 37 || code == 38 || code == 39 && (code != 39 || r != "'") || code == 40 ? !1 : r.match(i) ? !0 : !1
        },
        blockSpecialCharacters: function(n) {
            var t = n.keyCode ? event.keyCode : event.charCode;
            return t > 64 && t < 91 || t > 96 && t < 123 || t == 8 || t >= 48 && t <= 57
        },
        ValidateYearInRange: function(n, t, i) {
            return (n = parseInt(n), n >= t && n <= i) ? !0 : !1
        },
        IsValidDate: function(n, t, i) {
            var u = 0,
                r = 0;
            return (t = "00" + t, t = t.substring(t.length - 2), r = 0, isNaN(n) || isNaN(t) || isNaN(i)) ? !1 : (i == 0 && (r = 20), (t < 1 || t > 12) && (r = 21), n < 1 && (r = 22), (i % 4 == 0 || i % 100 == 0 || i % 400 == 0) && (u = 1), t == 2 && u == 1 && n > 29 && (r = 23), t == 2 && u != 1 && n > 28 && (r = 24), n > 31 && (t == "01" || t == "03" || t == "05" || t == "07" || t == "08" || t == "10" || t == "12") && (r = 25), n > 30 && (t == "04" || t == "06" || t == "09" || t == "11") && (r = 26), parseInt(n) == 0 && parseInt(t) == 0 && parseInt(i) == 0 && (r = 0), r === 0 ? !0 : !1)
        },
        IsAge18Years: function(n, t, i) {
            var r = parseInt(n) + 18,
                u = new Date("" + r + "/" + t + "/" + i + ""),
                f = new Date;
            return u <= f ? !0 : !1
        },
        IsDateLessThenToday: function(n, t) {
            var r = n.split("-"),
                u = parseInt(r[0]),
                i, f;
            return (t && (u += 18), i = new Date, f = i.getFullYear(), u < i.getFullYear()) ? !0 : u <= i.getFullYear() && r[1] < i.getMonth() + 1 ? !0 : u <= i.getFullYear() && r[1] <= i.getMonth() + 1 && r[2] <= i.getDate() ? !0 : !1
        },
        IsPolicyStartDateValid: function(n, t, i) {
            var r = new Date((new Date).toDateString()),
                u = new Date(n, t - 1, i),
                f = new Date(r.getFullYear(), r.getMonth() + 6, r.getDate());
            return u < r ? CommonData.ErrorMessages.DateInvalid : u > f ? CommonData.ErrorMessages.DateInvalidNotWithinSixMonths : ""
        },
        IsValidEmail: function(n) {
            var r, u, f, i;
            if (HomeCommonService.selectedItem.email = $.trim(HomeCommonService.selectedItem.email), HomeCommonService.selectedItem.email == "") return !1;
            var t = HomeCommonService.selectedItem.email,
                h = t.substr(t.lastIndexOf(".") + 1);
            if (h.length > 5) return !1;
            if (t.match(/@+/) == null || (r = t.split("@"), u = r[0], u.match(/\.$/) != null || t.match(/\.\./) != null) || (f = t.match(/^[A-Za-z0-9]+[A-Za-z0-9_\.-]+@[A-Za-z0-9]+([\.-]?[A-Za-z0-9]+)*(\.[A-Za-z0-9]{2,5})+$/), f == null)) return document.getElementById(n).focus(), !1;
            var e = document.getElementById(n).value,
                o = e.substring(e.lastIndexOf("@") + 1),
                s;
            for (i = 0; i < o.length; i++)
                if (s = o.substring(i, i + 1), "(~`!#$%^&*_+|=}{'?/)".indexOf(s) >= 0) return document.getElementById(n).focus(), !1;
            return !0
        },
        IsCaptchaValidated: function() {
            return document.getElementById("captchaText") != null ? (document.getElementById("captchaText").value = $.trim(document.getElementById("captchaText").value), document.getElementById("captchaText").value == "") ? !1 : !0 : !0
        },
        CaptchaVerify: function() {
            var n = !1,
                t;
            return document.getElementById("captchaText") != null ? (t = "https://seguro-hogar.rastreator.com/HomeCallbacks.aspx?Option=CaptchaVerify&value=" + $.trim(document.getElementById("captchaText").value), $.ajax({
                type: "Get",
                url: t,
                async: !1,
                cache: !1,
                success: function(t) {
                    if (t != null) {
                        if (t == "SessionExpired") {
                            if (flagWhiteLabel == !0) {
                                window.location.href = whiteLabelUrl;
                                return
                            }
                            window.location.href = "https://rastreator.com";
                            return
                        }
                        arrResponseSplit1 = HomeCommonService.ConvertFromJsonString(t);
                        arrResponseSplit1.option[0] == "1" && (n = !0)
                    }
                },
                error: function(n) {
                    console.log(n)
                }
            })) : n = !0, n
        },
        SubmitCaptcha: function() {
            if (document.getElementById("captchaText") != null) {
                var n = "https://seguro-hogar.rastreator.com/HomeCallbacks.aspx?Option=CaptchaSubmit&submittedvalue=" + $.trim(document.getElementById("captchaText").value);
                $.post(n, function(n) {
                    if (n == "SessionExpired") return window.location.href = flagWhiteLabel == !0 ? whiteLabelUrl : "https://rastreator.com", !1
                })
            }
        },
        isNumber: function(n) {
            return n == "" ? !1 : !isNaN(n)
        }
    };
var progressBar = {
    init: function() {
        this.grouptitle = $(".cj-group-title");
        this.liHome = "li#li-home";
        this.liProtection = "li#li-protection";
        this.liCapital = "li#li-capital";
        this.liOthers = "li#li-others";
        this.completed = 10;
        this.current = 20;
        this.homeSectionQuestionsCount = 15;
        this.protSectionQuestionsCount = 4;
        this.capitalSectionQuestionsCount = 4;
        this.othersSectionQuestionsCount = 2
    },
    resetSection: function(n) {
        n ? n > 15 && n <= 19 ? this.moveLandbackProgress("home", this.liHome) : n > 19 && n <= 23 ? (this.moveLandbackProgress("home", this.liHome), this.moveLandbackProgress("protection", this.liProtection)) : n > 24 && n <= 25 && (this.moveLandbackProgress("home", this.liHome), this.moveLandbackProgress("protection", this.liProtection), this.moveLandbackProgress("capital", this.liCapital)) : ($(this.liHome).removeClass("active"), $(this.liHome).removeClass("completed"), $(this.liProtection).removeClass("active"), $(this.liProtection).removeClass("completed"), $(this.liCapital).removeClass("active"), $(this.liCapital).removeClass("completed"), $(this.liOthers).removeClass("active"), $(this.liOthers).removeClass("completed"), $("li#li-home .progress").css("width", this.completed + "%"), $("li#li-home .circle").css("left", this.current + "px"), $("li#li-protection .progress").css("width", this.completed + "%"), $("li#li-protection .circle").css("left", this.current + "px"), $("li#li-capital .progress").css("width", this.completed + "%"), $(window).width() >= 768 ? $("li#li-capital .circle").css("left", this.current + "px") : $("li#li-capital .circle").css("left", "50%"), $("li#li-others .progress").css("width", this.completed + "%"), $(window).width() >= 768 ? $("li#li-others .circle").css("left", this.current + "px") : $("li#li-others .circle").css("left", "50%"))
    },
    moveLandbackProgress: function(n, t) {
        var r, i;
        $(t).addClass("active");
        $(t).addClass("completed");
        r = "li#li-" + n + ".active .progress";
        $(r).css("width", "100%");
        i = "li#li-" + n + ".active .circle";
        $(window).width() >= 768 ? $(i).css("left", "120px") : $(i).css("left", "50%")
    },
    moveProgress: function(n) {
        var i = "li#li-" + n + ".active .progress",
            t;
        $(i).css("width", this.completed + "%");
        t = "li#li-" + n + ".active .circle";
        $(window).width() >= 768 ? $(t).css("left", this.current + "px") : $(t).css("left", "50%")
    },
    updateProgress: function(n) {
        n <= 15 ? ($(this.liHome).addClass("active"), $(this.liHome).removeClass("completed"), $(this.liProtection).removeClass("active"), this.completed = 90 / this.homeSectionQuestionsCount * n + 10, this.current = 92 / this.homeSectionQuestionsCount * n + 20, this.moveProgress("home"), this.initSectionProgress("protection")) : n <= 19 ? (this.completeProgress("home"), $(this.liProtection).addClass("active"), $(this.liProtection).removeClass("completed"), $(this.liHome).addClass("completed"), $(this.liCapital).removeClass("active"), this.completed = 90 / this.protSectionQuestionsCount * (n - 15) + 10, this.current = 92 / this.protSectionQuestionsCount * (n - 15) + 20, this.moveProgress("protection"), this.grouptitle.text("SEGURO"), this.initSectionProgress("capital")) : n <= 23 ? (this.completeProgress("home"), this.completeProgress("protection"), $(this.liCapital).addClass("active"), $(this.liCapital).removeClass("completed"), $(this.liProtection).addClass("completed"), $(this.liOthers).removeClass("active"), $(this.liOthers).removeClass("completed"), this.completed = 90 / this.capitalSectionQuestionsCount * (n - 19) + 10, this.current = 92 / this.capitalSectionQuestionsCount * (n - 19) + 20, this.moveProgress("capital"), this.grouptitle.text("TOMADOR"), this.initSectionProgress("others")) : n <= 24 && (this.completeProgress("home"), this.completeProgress("protection"), this.completeProgress("capital"), $(this.liOthers).addClass("active"), $(this.liOthers).removeClass("completed"), $(this.liCapital).addClass("completed"), this.completed = 90 / this.othersSectionQuestionsCount * (n - 23) + 10, this.current = 92 / this.othersSectionQuestionsCount * (n - 23) + 20, this.moveProgress("others"), this.grouptitle.text("YA CASI ESTÁ"));
        n == 25 && ($(this.liOthers).addClass("completed"), this.completeProgress("home"), this.completeProgress("protection"), this.completeProgress("capital"), this.completeProgress("others"))
    },
    completeProgress: function(n) {
        var i = "li#li-" + n + ".active .progress",
            t;
        $(i).css("width", "95%");
        t = "li#li-" + n + ".active .circle";
        $(window).width() >= 768 ? $(t).css("left", "82%") : $(t).css("left", "50%")
    },
    initSectionProgress: function(n) {
        var i = "li#li-" + n + " .progress",
            t;
        $(i).css("width", "10%");
        t = "li#li-" + n + " .circle";
        $(window).width() >= 768 ? $(t).css("left", "20px") : $(t).css("left", "50%")
    }
};

function HandleNavigation(n) {
    n != undefined && isNaN(parseInt(n)) == !1 && (n = parseInt(n), CreateDivsForButtonNavigation(n))
}

function NavigationValidation() {
    return !0
}
h_flag = 0;
window.dhtmlHistory = {
    initialize: function() {
        this.isInternetExplorer() != !1 && (historyStorage.hasKey("DhtmlHistory_pageLoaded") == !1 ? (this.fireOnNewListener = !1, this.firstLoad = !0, historyStorage.put("DhtmlHistory_pageLoaded", !0)) : (this.fireOnNewListener = !0, this.firstLoad = !1))
    },
    addListener: function(n) {
        this.listener = n;
        this.fireOnNewListener == !0 && (this.fireHistoryEvent(this.currentLocation), this.fireOnNewListener = !1)
    },
    add: function(n, t) {
        var i = this,
            r = function() {
                var r, u;
                if (i.currentWaitTime > 0 && (i.currentWaitTime = i.currentWaitTime - i.WAIT_TIME), n = i.removeHash(n), r = document.getElementById(n), r != undefined || r != null) {
                    u = "Exception: History locations can not have the same value as _any_ id's that might be in the document, due to a bug in Internet Explorer; please ask the developer to choose a history location that does not match any HTML id's in this document. The following ID is already taken and can not be a location: " + n;
                    throw u;
                }
                historyStorage.put(n, t);
                i.ignoreLocationChange = !0;
                this.ieAtomicLocationChange = !0;
                i.currentLocation = n;
                window.location.hash = n;
                i.isInternetExplorer() && (i.iframe.src = "/LiveChatLocation.html?" + n);
                this.ieAtomicLocationChange = !1;
                dhtmlHistory.listener && dhtmlHistory.listener()
            };
        window.setTimeout(r, this.currentWaitTime);
        this.currentWaitTime = this.currentWaitTime + this.WAIT_TIME
    },
    isFirstLoad: function() {
        return this.firstLoad == !0 ? !0 : !1
    },
    isInternational: function() {
        return !1
    },
    getVersion: function() {
        return "0.05"
    },
    getCurrentLocation: function() {
        return this.removeHash(window.location.hash)
    },
    currentLocation: null,
    listener: null,
    iframe: null,
    ignoreLocationChange: null,
    WAIT_TIME: 200,
    currentWaitTime: 0,
    fireOnNewListener: null,
    firstLoad: null,
    ieAtomicLocationChange: null,
    create: function() {
        var i = this.getCurrentLocation(),
            n, t;
        this.currentLocation = i;
        this.isInternetExplorer() && (document.body.appendChild(document.createElement("<iframe style='border: 0px; width: 1px; height: 1px; position: absolute; bottom: 0px; right: 0px; visibility: visible;' name='DhtmlHistoryFrame' id='DhtmlHistoryFrame' src='/LiveChatLocation.html?Q1' />")), this.WAIT_TIME = 400);
        n = this;
        this.isInternetExplorer() == !1 ? historyStorage.hasKey("DhtmlHistory_pageLoaded") == !1 ? (this.ignoreLocationChange = !0, this.firstLoad = !0, historyStorage.put("DhtmlHistory_pageLoaded", !0)) : (this.ignoreLocationChange = !1, this.fireOnNewListener = !0) : this.ignoreLocationChange = !0;
        this.isInternetExplorer() && (this.iframe = document.getElementById("DhtmlHistoryFrame"));
        n = this;
        t = function() {
            n.checkLocation()
        };
        setInterval(t, 100);
        CallFromCJ = !0
    },
    fireHistoryEvent: function(n) {
        this.listener.call(null, n.substring(1))
    },
    checkLocation: function() {
        if (this.isInternetExplorer() == !1 && this.ignoreLocationChange == !0) {
            this.ignoreLocationChange = !1;
            return
        }
        if (this.isInternetExplorer() != !1 || this.ieAtomicLocationChange != !0) {
            var n = this.getCurrentLocation();
            if (parseInt(n.substring(1)) > this.currentLocation.substring(1) && !NavigationValidation(parseInt(this.currentLocation.substring(1)))) return this.isInternetExplorer() || window.history.back(), !1;
            if (n != this.currentLocation) {
                if (n == "" && (window.history.back(), window.location.hash = "Q1", n = "Q1"), this.ieAtomicLocationChange = !0, this.isInternetExplorer() && this.getIFrameHash() != n) this.iframe.src = "/LiveChatLocation.html?" + n;
                else if (this.isInternetExplorer()) return;
                this.currentLocation = n;
                n.substring(1) >= 1 && progressBar.updateProgress(parseInt(n.substring(1)));
                this.ieAtomicLocationChange = !1;
                this.fireHistoryEvent(n)
            }
        }
    },
    getIFrameHash: function() {
        var t = document.getElementById("DhtmlHistoryFrame"),
            i = t.contentWindow.document,
            n = new String(i.location.search);
        return n.length == 1 && n.charAt(0) == "?" ? n = "" : n.length >= 2 && n.charAt(0) == "?" && (n = n.substring(1)), n
    },
    removeHash: function(n) {
        return n == null || n == undefined ? null : n == "" ? "" : n.length == 1 && n.charAt(0) == "#" ? "" : n.length > 1 && n.charAt(0) == "#" ? n.substring(1) : n
    },
    iframeLoaded: function(n) {
        if (this.ignoreLocationChange == !0) {
            this.ignoreLocationChange = !1;
            return
        }
        var t = new String(n.search);
        if (t.length == 1 && t.charAt(0) == "?" ? t = "" : t.length >= 2 && t.charAt(0) == "?" && (t = t.substring(1)), parseInt(t.substring(1)) > parseInt(window.location.hash.substring(2)) && !NavigationValidation(parseInt(window.location.hash.substring(2)))) return window.history.back(), !1;
        this.pageLoadEvent != !0 && (window.location.hash = t, t.substring(1) >= 1 && ProgressBar());
        this.fireHistoryEvent(t)
    },
    isInternetExplorer: function() {
        var n = navigator.userAgent.toLowerCase();
        return document.all && n.indexOf("msie") != -1 && jQuery.browser.version < 8 ? !0 : !1
    }
};
window.historyStorage = {
    debugging: !1,
    storageHash: {},
    hashLoaded: !1,
    put: function(n, t) {
        this.assertValidKey(n);
        this.hasKey(n) && this.remove(n);
        this.storageHash[n] = t;
        this.saveHashTable()
    },
    get: function(n) {
        this.assertValidKey(n);
        this.loadHashTable();
        var t = this.storageHash[n];
        return t == undefined ? null : t
    },
    remove: function(n) {
        this.assertValidKey(n);
        this.loadHashTable();
        delete this.storageHash[n];
        this.saveHashTable()
    },
    reset: function() {
        this.storageField.value = "";
        this.storageHash = {}
    },
    hasKey: function(n) {
        return this.assertValidKey(n), this.loadHashTable(), typeof this.storageHash[n] == "undefined" ? !1 : !0
    },
    isValidKey: function(n) {
        return typeof n == "string"
    },
    storageField: null,
    init: function() {
        this.storageField = document.getElementById("historyStorageField")
    },
    assertValidKey: function(n) {
        if (this.isValidKey(n) == !1) throw "Please provide a valid key for window.historyStorage, key= " + n;
    },
    loadHashTable: function() {
        return
    },
    saveHashTable: function() {
        return
    }
};
var __JSON = {
    org: "http://www.JSON.org",
    copyright: "(c)2005 JSON.org",
    license: "http://www.crockford.com/JSON/license.html",
    stringify: function(n) {
        var r, i, f, t = "",
            u;
        switch (typeof n) {
            case "object":
                if (n) {
                    if (n.constructor == Array) {
                        for (i = 0; i < n.length; ++i) u = this.stringify(n[i]), t && (t += ","), t += u;
                        return "[" + t + "]"
                    }
                    if (typeof n.toString != "undefined") {
                        for (i in n) u = n[i], typeof u != "undefined" && typeof u != "function" && (u = this.stringify(u), t && (t += ","), t += this.stringify(i) + ":" + u);
                        return "{" + t + "}"
                    }
                }
                return "null";
            case "number":
                return isFinite(n) ? String(n) : "null";
            case "string":
                for (f = n.length, t = '"', i = 0; i < f; i += 1)
                    if (r = n.charAt(i), r >= " ")(r == "\\" || r == '"') && (t += "\\"), t += r;
                    else switch (r) {
                        case "\b":
                            t += "\\b";
                            break;
                        case "\f":
                            t += "\\f";
                            break;
                        case "\n":
                            t += "\\n";
                            break;
                        case "\r":
                            t += "\\r";
                            break;
                        case "\t":
                            t += "\\t";
                            break;
                        default:
                            r = r.charCodeAt();
                            t += "\\u00" + Math.floor(r / 16).toString(16) + (r % 16).toString(16)
                    }
                return t + '"';
            case "boolean":
                return String(n);
            default:
                return "null"
        }
    }
};

function restrictSpecialAndNumbers(n, t) {
    var t, i;
    return (t || (t = window.event), t.charCode == 0) ? !0 : (t.keyCode ? code = t.keyCode ? t.keyCode : t.charCode : t.which && (code = t.which), i = String.fromCharCode(code), code == 27) ? (this.blur(), !1) : t.ctrlKey || code == 9 || code == 8 || code == 36 || code == 37 || code == 38 || code == 40 ? !1 : code > 32 && code < 39 || code > 39 && code < 65 || code > 90 && code < 97 || code > 122 && code < 127 ? !1 : !0
}
var stickydiv = $(".help-button sticky"),
    validationMessage = "",
    responseSaveValues = "false",
    StickyHelpSection = function() {
        this.init = function() {
            var n = this;
            this.moveLeftButton(window.innerWidth);
            this.clickHelpButton();
            this.scrollFunctions();
            $(window).resize(function() {
                n.moveLeftButton(window.innerWidth)
            }).bind(this)
        };
        this.scrollFunctions = function() {
            $("body").scroll(function() {
                window.innerWidth > 992 && (this.calculateMaxHeight(), this.positionTopHelp())
            }.bind(this))
        };
        this.clickHelpButton = function() {
            var n = this;
            $("#help-button").delegate("", "click", function() {
                $("#help-button").css("opacity", 0);
                window.innerWidth > 992 ? ($(".help-wrapper").addClass("in desktop"), n.positionLeftHelp(), n.positionTopHelp(), n.calculateMaxHeight(), $("#callmeback-help").css("display") !== undefined && $("#callmeback-help").css("display") === "block" && $(".help-wrapper").addClass("callmeback"), $("#email-help").css("display") !== undefined && $("#email-help").css("display") === "block" && $(".help-wrapper").addClass("email")) : ($("body").css("overflow", "hidden"), $(".help-wrapper").addClass("in mobile"), $(".help-wrapper").removeAttr("style"));
                n.clickMenuItemButton();
                n.closeButton();
                n.backButton()
            })
        };
        this.moveLeftButton = function(n) {
            if (n > 992) {
                var t = $(".cj-logo").offset();
                t && ($(".help-button").css("left", t.left).addClass("sticky"), this.positionLeftHelp(), this.positionTopHelp(), this.calculateMaxHeight())
            } else $(".help-button").removeClass("sticky").removeAttr("style")
        };
        this.positionLeftHelp = function() {
            var n = $(".help-button").offset();
            $(".help-wrapper").css("left", n.left)
        };
        this.positionTopHelp = function() {
            var i;
            if ($(".help-wrapper").length > 0) {
                var n = $(".card-wrapper").offset().top,
                    t = $(".card-wrapper").height(),
                    r = $(".help-wrapper").offset().top,
                    u = $(".help-wrapper").height();
                n + t <= r + u ? (i = n + t - window.innerHeight, $(".help-wrapper").css("bottom", Math.abs(i))) : $(".help-wrapper").css("bottom", 36)
            }
        };
        this.calculateMaxHeight = function() {
            if ($(".help-wrapper").length > 0) {
                var n = $(window).height() - $("h1").offset().top - 36;
                $(".help-wrapper").css("max-height", n)
            }
        };
        this.clickMenuItemButton = function() {
            var n = this;
            $("#help-menu").delegate(".menu-item[data-item]", "click", function(t) {
                var i = t.currentTarget.dataset.item,
                    r;
                $("#" + i + "-help").length <= 0 && (r = n.loadTemplate(i), $(".help-wrapper").append(r), (i === "callmeback" || i === "email") && n.collapseTrigger());
                $(".help-wrapper").addClass(i);
                n.animateTemplate($("#help-menu"), $("#" + i + "-help"), "in")
            })
        };
        this.loadTemplate = function(n) {
            var t = "";
            switch (n) {
                case "callmeback":
                    $("#callmeback-help-template").tmpl(t).appendTo(".help-wrapper");
                    this.submitButton("thanksCallme");
                    break;
                case "thanksCallme":
                    $("#thankscallmeback-help-template").tmpl(t).appendTo(".help-wrapper");
                    break;
                case "whatsapp":
                    window.open("whatsapp://send?text=Hola%20Rastreator&phone=34611056669", "_blank");
                    break;
                case "email":
                    $("#emailmeback-help-template").tmpl(t).appendTo(".help-wrapper");
                    this.submitButton("thanksEmail");
                    break;
                case "thanksEmail":
                    $("#thanksemailmeback-help-template").tmpl(t).appendTo(".help-wrapper")
            }
        };
        this.animateTemplate = function(n, t, i) {
            i === "in" ? (n.addClass("out-to-left"), setTimeout(function() {
                t.show();
                setTimeout(function() {
                    t.removeClass("outside")
                }, 15)
            }, 50)) : (t.addClass("outside"), setTimeout(function() {
                t.hide()
            }, 150), setTimeout(function() {
                n.removeClass("out-to-left")
            }, 50))
        };
        this.closeButton = function() {
            var n = this;
            $(".help-wrapper").delegate(".icon-cancel", "click", function(t) {
                $("#help-button").css("opacity", 1);
                $("#CMBErrorSummary").html("");
                $("#CMBErrorSummary").css("display", "none");
                $("#EMBErrorContainer").html("");
                $("#EMBErrorContainer").css("display", "none");
                var i = t.target.offsetParent.id;
                i !== "help-menu" && (n.animateTemplate($("#help-menu"), $("#" + i), "out"), setTimeout(function() {
                    $(".help-container").not("#help-menu").remove()
                }, 300));
                $(".help-wrapper").removeClass("in desktop mobile callmeback chat email");
                $("body").attr("style", "")
            })
        };
        this.backButton = function() {
            var n = this;
            $(".help-wrapper").delegate(".icon-arrow-left", "click", function(t) {
                var i = t.target.offsetParent.id;
                n.animateTemplate($("#help-menu"), $("#" + i), "out");
                $("#CMBErrorSummary").html("");
                $("#CMBErrorSummary").css("display", "none");
                $("#EMBErrorContainer").html("");
                $("#EMBErrorContainer").css("display", "none");
                $(".help-wrapper").removeClass("callmeback chat email")
            })
        };
        this.submitButton = function() {
            var n = this;
            $(".help-wrapper").delegate(".btn.submit", "click", function(t) {
                var i = t.currentTarget.dataset.item,
                    r = {};
                if ($("#" + i + "-help").length <= 0) switch (i) {
                    case "thanksCallme":
                        if (n.DoValidate("callmeback")) $("#CMBErrorSummary").html(""), $("#CMBErrorSummary").css("display", "none");
                        else return $("#CMBErrorSummary").html(validationMessage), $("#CMBErrorSummary").css("display", "block"), !1;
                        n.loadTemplate("thanksCallme");
                        n.SaveValues("callmeback");
                        r = {
                            event: "form",
                            actionform: "submit",
                            form: "ayuda",
                            ayuda: "tellamamos",
                            productform: "home"
                        };
                        break;
                    case "thanksEmail":
                        if (n.DoValidate("email")) $("#EMBErrorContainer").html(""), $("#EMBErrorContainer").css("display", "none");
                        else return $("#EMBErrorContainer").html(validationMessage), $("#EMBErrorContainer").css("display", "block"), !1;
                        n.loadTemplate("thanksEmail");
                        n.SaveValues("emailmeback");
                        r = {
                            event: "form",
                            actionform: "submit",
                            form: "ayuda",
                            ayuda: "email",
                            productform: "home"
                        }
                }
                n.pushDatalayerEvent(r);
                n.closeButton();
                i === "thanksEmail" ? n.animateTemplate($("#email-help"), $("#thanksEmail-help"), "in") : n.animateTemplate($("#callmeback-help"), $("#thanksCallme-help"), "in")
            })
        };
        this.collapseTrigger = function() {
            $(this).next(".collapsed").toggleClass("active");
            $(this).find("span").toggleClass("active");
            var n = $(this).next(".collapsed.active")[0];
            $(this).next(".collapsed.active")[0] !== undefined && setTimeout(function() {
                n !== undefined && n.firstElementChild !== undefined && n.firstElementChild !== null && n.firstElementChild.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                })
            }, 100)
        };
        this.DoValidate = function(n) {
            switch (n) {
                case "callmeback":
                    if ($("#txtCmbNombre").val() != "" && $("#txtTelephone").val() != "" && $("input[name=radio-time]").is(":checked") && $("#chkPolicy").is(":checked") != !1) {
                        if ($("#txtTelephone").val().length < 9 || parseInt($("#txtTelephone").val().substring(0, 1)) != 6 && parseInt($("#txtTelephone").val().substring(0, 1)) != 7 && parseInt($("#txtTelephone").val().substring(0, 1)) != 8 && parseInt($("#txtTelephone").val().substring(0, 1)) != 9) return validationMessage = "Por favor, rellena todos los campos correctamente", !1
                    } else return validationMessage = "Por favor, rellena todos los campos correctamente", !1;
                    return !0;
                case "email":
                    return $("#txtEmailNombre").val() == "" || $("#chkEmailPolicy").is(":checked") == !1 || $("#txtEmail").val() == "" || $("#txtMessage").val() == "" ? (validationMessage = "Por favor, rellena todos los campos correctamente", !1) : this.emailValid("txtEmail") ? !0 : (validationMessage = "Por favor, introduce un email correcto", !1)
            }
        };
        this.emailValid = function(n) {
            var r, u, f, i;
            if (document.getElementById(n).value = $.trim(document.getElementById(n).value), document.getElementById(n).value == "") return !1;
            var t = document.getElementById(n).value,
                h = t.substr(t.lastIndexOf(".") + 1);
            if (h.length > 4) return !1;
            if (t.match(/@+/) == null || (r = t.split("@"), u = r[0], u.match(/\.$/) != null || t.match(/\.\./) != null) || (f = t.match(/^[A-Za-z0-9]+[A-Za-z0-9_\.-]+@[A-Za-z0-9]+([\.-]?[A-Za-z0-9]+)*(\.[A-Za-z0-9]{2,4})+$/), f == null)) return document.getElementById(n).focus(), !1;
            var e = document.getElementById(n).value,
                o = e.substring(e.lastIndexOf("@") + 1),
                s;
            for (i = 0; i < o.length; i++)
                if (s = o.substring(i, i + 1), "(~`!#$%^&*_+|=}{'?/)".indexOf(s) >= 0) return document.getElementById(n).focus(), !1;
            return !0
        };
        this.SaveValues = function(n) {
            var t = "",
                r = "",
                u = "",
                s = CommonData.Constants.ProductNameForHelpModule,
                f = "",
                e = "",
                o = "",
                h = window.location.href.substring(window.location.href.lastIndexOf("datos-comparativa")).split("#"),
                i;
            h.length > 1 && (o = typeof $("#referenceUrl").val() == "undefined" ? h.join("*") : $("#referenceUrl").val());
            switch (n) {
                case "callmeback":
                    t = $("#txtCmbNombre").val();
                    i = $("input[name='radio-time']:checked");
                    i !== undefined && i.siblings().length > 1 && (u = i.siblings()[1].innerText);
                    r = $("#txtTelephone").val();
                    break;
                case "emailmeback":
                    t = $("#txtEmailNombre").val();
                    e = $("#txtEmail").val();
                    f = $("#txtMessage").val()
            }
            var a = {
                    callerName: t,
                    callerTeleNumber: r,
                    callerTime: u,
                    callerEmailId: e,
                    callerProductName: s,
                    callerQuestion: f,
                    customerActivityId: 0,
                    referenceUrl: o,
                    projectName: "",
                    functionalityName: ""
                },
                c = location.href.split("#")[1] || "",
                l = CommonData.Urls.SaveCallMeBackURL + "callerName=" + t + "&callerTeleNumber=" + r + "&callerTime=" + u + "&callerEmailId=" + e + "&callerProductName=" + s + "&callerQuestion=" + f + "&customerActivityId=0&referenceUrl=" + o + "&projectName=''&functionalityName=''&questionNo=" + c;
            $.ajax({
                type: "POST",
                url: l,
                async: !1,
                dataType: "json",
                contentType: "application/json",
                success: function(n) {
                    responseSaveValues = n == "True" ? "true" : "false"
                }
            })
        };
        this.pushDatalayerEvent = function(n) {
            HomeCommonService.pushDataLayerEvent(n)
        }
    };
$(document).ready(function() {
    var n = "";
    n = location.href.indexOf("localhost") >= 0 || location.href.indexOf("rastreatorlocal") >= 0 ? "http://js.rastreatorlocal.com" : location.href.indexOf("rastreatortest") >= 0 ? "https://js.rastreatortest.com" : "https://js.rastreator.com";
    $.getScript(n + "/Common/stickyfillsjs.js", function() {
        var n = new StickyHelpSection;
        n.init()
    });
    $("body").on("scroll", function() {
        var n = $(document).outerHeight() - document.body.clientHeight - $("footer").outerHeight(),
            t = $("body").scrollTop(),
            i, r;
        t > n && (i = 48, r = t - n, $(".help-button.sticky").css("bottom", i + r))
    });
    $("body").on("click", function(n) {
        $(n.target).parents(".help-button").length == 0 && ($("#help-button").css("opacity", 1), $("#CMBErrorSummary").html(""), $("#CMBErrorSummary").css("display", "none"), $("#EMBErrorContainer").html(""), $("#EMBErrorContainer").css("display", "none"), $(".help-wrapper").removeClass("in desktop mobile callmeback chat email"), $("body").attr("style", ""))
    })
});

function OnIPTrackerModelSuccess(n) {
    var t = typeof n == "string" ? JSON.parse(n) : n,
        i;
    if (t && t.IPTrackerModel.IsEnabled) try {
        i = IPTrackerService.checkIfNewSession(t.IPTrackerModel.Settings.CookieKey);
        i && IPTrackerService.getLocation(t)
    } catch (r) {
        console.log("OnIPTrackerModelSuccess : FAIL.. && error:" + r)
    }
}

function OnIPTrackerModelError(n) {
    console.log("SaveUserIPAddress : FAIL.. && response:" + n)
}
var IPTrackerService = IPTrackerService || {};
IPTrackerService.checkIfNewSession = function(n) {
    return CommonFunctionsModule.getCookie(n) === "false" || CommonFunctionsModule.getCookie(n) === "" ? !0 : !1
};
IPTrackerService.getLocation = function(n) {
    var t = new XMLHttpRequest;
    t.open("GET", n.IPTrackerModel.Settings.TrackerApiEndpoint, !0);
    t.onload = function() {
        var r, u, i;
        t.status >= 200 && t.status < 400 && (r = JSON.parse(t.responseText), u = r.query, CommonFunctionsModule.setCookieForHours(n.IPTrackerModel.Settings.CookieKey, !0, 36), i = {}, i = IPTrackerService.getSaveModel(i, r, n.IPTrackerModel.Settings.SessionTrackerId), SaveUserIPAddress(i))
    };
    t.onerror = function() {
        console.log("Could not reach geolocation server")
    };
    t.send()
};
IPTrackerService.getSaveModel = function(n, t, i) {
    return n.IpAddress = t.query, n.SessionId = i, n.Lattitude = t.lat, n.Longitude = t.lon, n.ZipCode = t.zip, n.AutonomousSystemNumber = t.as, n.City = t.city, n
};
IPTrackerService.InitIPTracker = function(n, t) {
    var i = n + t;
    $.ajax({
        type: "GET",
        async: !1,
        url: i,
        contentType: "application/json",
        dataType: "json",
        success: OnIPTrackerModelSuccess,
        failure: OnIPTrackerModelError
    })
};
! function(n, t) {
    var i, r;
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        i = t();
        for (r in i)("object" == typeof exports ? exports : n)[r] = i[r]
    }
}(this, function() {
    function n(r) {
        if (t[r]) return t[r].exports;
        var u = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return i[r].call(u.exports, u, u.exports, n), u.l = !0, u.exports
    }
    return i = [function(n) {
        n.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17,"KEY_229":229}')
    }, function(n, t, i) {
        "use strict";

        function c(n, t, i, r, u) {
            var l = this,
                h = this.opts,
                f, e, c, o;
            if (void 0 === t) return "selectionStart" in n && "selectionEnd" in n ? (t = n.selectionStart, i = n.selectionEnd) : window.getSelection ? (f = window.getSelection().getRangeAt(0), f.commonAncestorContainer.parentNode !== n && f.commonAncestorContainer !== n || (t = f.startOffset, i = f.endOffset)) : document.selection && document.selection.createRange && (f = document.selection.createRange(), t = 0 - f.duplicate().moveStart("character", -n.inputmask._valueGet().length), i = t + f.text.length), {
                begin: r ? t : s.call(this, t),
                end: r ? i : s.call(this, i)
            };
            (Array.isArray(t) && (i = this.isRTL ? t[0] : t[1], t = this.isRTL ? t[1] : t[0]), void 0 !== t.begin && (i = this.isRTL ? t.begin : t.end, t = this.isRTL ? t.end : t.begin), "number" == typeof t) && (t = r ? t : s.call(this, t), i = r ? i : s.call(this, i), i = "number" == typeof i ? i : t, e = parseInt(((n.ownerDocument.defaultView || window).getComputedStyle ? (n.ownerDocument.defaultView || window).getComputedStyle(n, null) : n.currentStyle).fontSize) * i, (n.scrollLeft = e > n.scrollWidth ? e : 0, n.inputmask.caretPos = {
                begin: t,
                end: i
            }, h.insertModeVisual && !1 === h.insertMode && t === i && (u || i++), n === (n.inputmask.shadowRoot || document).activeElement) && ("setSelectionRange" in n ? n.setSelectionRange(t, i) : window.getSelection ? ((f = document.createRange(), void 0 === n.firstChild || null === n.firstChild) && (c = document.createTextNode(""), n.appendChild(c)), f.setStart(n.firstChild, t < n.inputmask._valueGet().length ? t : n.inputmask._valueGet().length), f.setEnd(n.firstChild, i < n.inputmask._valueGet().length ? i : n.inputmask._valueGet().length), f.collapse(!0), o = window.getSelection(), o.removeAllRanges(), o.addRange(f)) : n.createTextRange && (f = n.createTextRange(), f.collapse(!0), f.moveEnd("character", i), f.moveStart("character", t), f.select())))
        }

        function l(n) {
            for (var p = this, v = this.maskset, y = this.dependencyLib, c = r.getMaskTemplate.call(this, !0, e.call(this), !0, !0), f = c.length, l = e.call(this), o = {}, u = v.validPositions[l], a = void 0 !== u ? u.locator.slice() : void 0, i, s, t = l + 1; t < c.length; t++) i = r.getTestTemplate.call(this, t, a, t - 1), a = i.locator.slice(), o[t] = y.extend(!0, {}, i);
            for (s = u && void 0 !== u.alternation ? u.locator[u.alternation] : void 0, t = f - 1; l < t && (i = o[t], (i.match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || s && (s !== o[t].locator[u.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[u.alternation] && h.checkAlternationMatch.call(this, i.locator[u.alternation].toString().split(","), s.toString().split(",")) && "" !== r.getTests.call(this, t)[0].def)) && c[t] === r.getPlaceholder.call(this, t, i.match)); t--) f--;
            return n ? {
                l: f,
                def: o[f] ? o[f].match : void 0
            } : f
        }

        function a(n, t) {
            function k(n) {
                var t, e, u;
                if ("" !== h.radixPoint && 0 !== h.digits && (t = b.validPositions, void 0 === t[n] || t[n].input === r.getPlaceholder.call(i, n))) {
                    if (n < f.call(i, -1)) return !0;
                    if (e = o.call(i).indexOf(h.radixPoint), -1 !== e) {
                        for (u in t)
                            if (t[u] && e < u && t[u].input !== r.getPlaceholder.call(i, u)) return !1;
                        return !0
                    }
                }
                return !1
            }
            var i = this,
                b = this.maskset,
                h = this.opts,
                a, w;
            if (t && (i.isRTL ? n.end = n.begin : n.begin = n.end), n.begin === n.end) {
                switch (h.positionCaretOnClick) {
                    case "none":
                        break;
                    case "select":
                        n = {
                            begin: 0,
                            end: o.call(i).length
                        };
                        break;
                    case "ignore":
                        n.end = n.begin = f.call(i, e.call(i));
                        break;
                    case "radixFocus":
                        if (k(n.begin)) {
                            a = o.call(i).join("").indexOf(h.radixPoint);
                            n.end = n.begin = h.numericInput ? f.call(i, a) : a;
                            break
                        }
                        default:
                            var c = n.begin,
                                v = e.call(i, c, !0),
                                s = f.call(i, -1 !== v || u.call(i, 0) ? v : -1);
                            if (c <= s) n.end = n.begin = u.call(i, c, !1, !0) ? c : f.call(i, c);
                            else {
                                var y = b.validPositions[v],
                                    l = r.getTestTemplate.call(i, s, y ? y.match.locator : void 0, y),
                                    p = r.getPlaceholder.call(i, s, l.match);
                                ("" === p || o.call(i)[s] === p || !0 === l.match.optionalQuantifier || !0 === l.match.newBlockMarker) && (u.call(i, s, h.keepStatic, !0) || l.match.def !== p) || (w = f.call(i, s), (w <= c || c === s) && (s = w));
                                n.end = n.begin = s
                            }
                }
                return n
            }
        }

        function o(n) {
            var i = this,
                t = this.maskset;
            return void 0 !== t.buffer && !0 !== n || (t.buffer = r.getMaskTemplate.call(this, !0, e.call(this), !0), void 0 === t._buffer && (t._buffer = t.buffer.slice())), t.buffer
        }

        function v() {
            var t = this,
                n = this.maskset;
            return void 0 === n._buffer && (n._buffer = r.getMaskTemplate.call(this, !1, 1), void 0 === n.buffer && (n.buffer = n._buffer.slice())), n._buffer
        }

        function e(n, t, i) {
            var s = this.maskset,
                u = -1,
                f = -1,
                e = i || s.validPositions,
                o, r;
            for (o in void 0 === n && (n = -1), e) r = parseInt(o), e[r] && (t || !0 !== e[r].generatedInput) && (r <= n && (u = r), n <= r && (f = r));
            return -1 === u || u == n ? f : -1 == f ? u : n - u < f - n ? u : f
        }

        function u(n, t, i) {
            var h = this,
                o = this.maskset,
                u = r.getTestTemplate.call(this, n).match,
                f, e, s;
            return ("" === u.def && (u = r.getTest.call(this, n).match), !0 !== u.static) ? u.fn : !0 === i && void 0 !== o.validPositions[n] && !0 !== o.validPositions[n].generatedInput ? !0 : !0 !== t && -1 < n ? i ? (f = r.getTests.call(this, n), f.length > 1 + ("" === f[f.length - 1].match.def ? 1 : 0)) : (e = r.determineTestTemplate.call(this, n, r.getTests.call(this, n)), s = r.getPlaceholder.call(this, n, e.match), e.match.def !== s) : !1
        }

        function y(n) {
            var t = this.maskset;
            t.buffer = void 0;
            !0 !== n && (t.validPositions = {}, t.p = 0)
        }

        function f(n, t, i) {
            var e = this,
                f;
            for (void 0 === i && (i = !0), f = n + 1;
                "" !== r.getTest.call(this, f).match.def && (!0 === t && (!0 !== r.getTest.call(this, f).match.newBlockMarker || !u.call(this, f, void 0, !0)) || !0 !== t && !u.call(this, f, void 0, i));) f++;
            return f
        }

        function p(n, t) {
            var f = this,
                i = n - 1;
            if (n <= 0) return 0;
            for (; 0 < i && (!0 === t && (!0 !== r.getTest.call(this, i).match.newBlockMarker || !u.call(this, i, void 0, !0)) || !0 !== t && !u.call(this, i, void 0, !0));) i--;
            return i
        }

        function s(n) {
            var r = this,
                t = this.opts,
                i = this.el;
            return !this.isRTL || "number" != typeof n || t.greedy && "" === t.placeholder || !i || (n = Math.abs(this._valueGet().length - n)), n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.caret = c;
        t.determineLastRequiredPosition = l;
        t.determineNewCaretPosition = a;
        t.getBuffer = o;
        t.getBufferTemplate = v;
        t.getLastValidPosition = e;
        t.isMask = u;
        t.resetMaskSet = y;
        t.seekNext = f;
        t.seekPrevious = p;
        t.translatePosition = s;
        var r = i(3),
            h = i(4),
            w = i(11)
    }, function(n, t, i) {
        "use strict";

        function l(n) {
            return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, l(n)
        }

        function h(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }

        function r(n, t, i) {
            if (nt.default) {
                if (!(this instanceof r)) return new r(n, t, i);
                this.dependencyLib = u.default;
                this.el = void 0;
                this.events = {};
                this.maskset = void 0;
                !0 !== i && ("[object Object]" === Object.prototype.toString.call(n) ? t = n : (t = t || {}, n && (t.alias = n)), this.opts = u.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, this.userOptions = t || {}, v(this.opts.alias, t, this.opts));
                this.refreshValue = !1;
                this.undoValue = void 0;
                this.$el = void 0;
                this.skipKeyPressEvent = !1;
                this.skipInputEvent = !1;
                this.validationEvent = !1;
                this.ignorable = !1;
                this.maxLength;
                this.mouseEnter = !1;
                this.originalPlaceholder = void 0;
                this.isComposing = !1
            }
        }

        function v(n, t, i) {
            var f = r.prototype.aliases[n];
            return f ? (f.alias && v(f.alias, void 0, i), u.default.extend(!0, i, f), u.default.extend(!0, i, t), !0) : (null === i.mask && (i.mask = n), !1)
        }

        function tt(n, t, i, r) {
            function l(t, u) {
                var f = "" === r ? t : r + "-" + t;
                u = void 0 !== u ? u : n.getAttribute(f);
                null !== u && ("string" == typeof u && (0 === t.indexOf("on") ? u = c.default[u] : "false" === u ? u = !1 : "true" === u && (u = !0)), i[t] = u)
            }
            if (!0 === t.importDataAttributes) {
                var s = n.getAttribute(r),
                    h, f, e, o;
                if (s && "" !== s && (s = s.replace(/'/g, '"'), f = JSON.parse("{" + s + "}")), f)
                    for (o in e = void 0, f)
                        if ("alias" === o.toLowerCase()) {
                            e = f[o];
                            break
                        } for (h in l("alias", e), i.alias && v(i.alias, i, t), t) {
                    if (f)
                        for (o in e = void 0, f)
                            if (o.toLowerCase() === h.toLowerCase()) {
                                e = f[o];
                                break
                            } l(h, e)
                }
            }
            return u.default.extend(!0, t, i), "rtl" !== n.dir && !t.rightAlign || (n.style.textAlign = "right"), "rtl" !== n.dir && !t.numericInput || (n.dir = "ltr", n.removeAttribute("dir"), t.isRTL = !0), Object.keys(i).length
        }
        var o, a, p;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        i(17);
        i(18);
        var w = i(11),
            u = h(i(10)),
            c = h(i(5)),
            e = i(21),
            b = i(3),
            f = i(1),
            y = i(4),
            s = i(7),
            k = i(12),
            d = h(i(22)),
            g = h(i(23)),
            nt = h(i(6));
        o = c.default.document;
        a = "_inputmask_opts";
        r.prototype = {
            dataAttribute: "data-inputmask",
            defaults: g.default,
            definitions: d.default,
            aliases: {},
            masksCache: {},
            get isRTL() {
                return this.opts.isRTL || this.opts.numericInput
            },
            mask: function(n) {
                var t = this;
                return "string" == typeof n && (n = o.getElementById(n) || o.querySelectorAll(n)), n = n.nodeName ? [n] : Array.isArray(n) ? n : Array.from(n), n.forEach(function(n) {
                    var i = u.default.extend(!0, {}, t.opts),
                        f;
                    tt(n, i, u.default.extend(!0, {}, t.userOptions), t.dataAttribute) && (f = e.generateMaskSet(i, t.noMasksCache), void 0 !== f && (void 0 !== n.inputmask && (n.inputmask.opts.autoUnmask = !0, n.inputmask.remove()), n.inputmask = new r(void 0, void 0, !0), n.inputmask.opts = i, n.inputmask.noMasksCache = t.noMasksCache, n.inputmask.userOptions = u.default.extend(!0, {}, t.userOptions), n.inputmask.el = n, n.inputmask.$el = u.default(n), n.inputmask.maskset = f, u.default.data(n, a, t.userOptions), w.mask.call(n.inputmask)))
                }), n && n[0] && n[0].inputmask || this
            },
            option: function(n, t) {
                return "string" == typeof n ? this.opts[n] : "object" === l(n) ? (u.default.extend(this.userOptions, n), this.el && !0 !== t && this.mask(this.el), this) : void 0
            },
            unmaskedvalue: function(n) {
                if (this.maskset = this.maskset || e.generateMaskSet(this.opts, this.noMasksCache), void 0 === this.el || void 0 !== n) {
                    var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, n, this.opts) || n).split("");
                    s.checkVal.call(this, void 0, !1, !1, t);
                    "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, f.getBuffer.call(this), 0, this.opts)
                }
                return s.unmaskedvalue.call(this, this.el)
            },
            remove: function() {
                if (this.el) {
                    u.default.data(this.el, a, null);
                    var n = this.opts.autoUnmask ? s.unmaskedvalue(this.el) : this._valueGet(this.opts.autoUnmask),
                        t;
                    n !== f.getBufferTemplate.call(this).join("") ? this._valueSet(n, this.opts.autoUnmask) : this._valueSet("");
                    k.EventRuler.off(this.el);
                    Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (t = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value"), t && this.__valueGet && Object.defineProperty(this.el, "value", {
                        get: this.__valueGet,
                        set: this.__valueSet,
                        configurable: !0
                    })) : o.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), this.el.__defineSetter__("value", this.__valueSet));
                    this.el.inputmask = void 0
                }
                return this.el
            },
            getemptymask: function() {
                return this.maskset = this.maskset || e.generateMaskSet(this.opts, this.noMasksCache), f.getBufferTemplate.call(this).join("")
            },
            hasMaskedValue: function() {
                return !this.opts.autoUnmask
            },
            isComplete: function() {
                return this.maskset = this.maskset || e.generateMaskSet(this.opts, this.noMasksCache), y.isComplete.call(this, f.getBuffer.call(this))
            },
            getmetadata: function() {
                if (this.maskset = this.maskset || e.generateMaskSet(this.opts, this.noMasksCache), Array.isArray(this.maskset.metadata)) {
                    var n = b.getMaskTemplate.call(this, !0, 0, !1).join("");
                    return this.maskset.metadata.forEach(function(t) {
                        return t.mask !== n || (n = t, !1)
                    }), n
                }
                return this.maskset.metadata
            },
            isValid: function(n) {
                var u;
                (this.maskset = this.maskset || e.generateMaskSet(this.opts, this.noMasksCache), n) ? (u = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, n, this.opts) || n).split(""), s.checkVal.call(this, void 0, !0, !1, u)) : n = this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join("");
                for (var i = f.getBuffer.call(this), r = f.determineLastRequiredPosition.call(this), t = i.length - 1; r < t && !f.isMask.call(this, t); t--);
                return i.splice(r, t + 1 - r), y.isComplete.call(this, i) && n === (this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join(""))
            },
            format: function(n, t) {
                var r, i;
                return this.maskset = this.maskset || e.generateMaskSet(this.opts, this.noMasksCache), r = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, n, this.opts) || n).split(""), s.checkVal.call(this, void 0, !0, !1, r), i = this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join(""), t ? {
                    value: i,
                    metadata: this.getmetadata()
                } : i
            },
            setValue: function(n) {
                this.el && u.default(this.el).trigger("setvalue", [n])
            },
            analyseMask: e.analyseMask
        };
        r.extendDefaults = function(n) {
            u.default.extend(!0, r.prototype.defaults, n)
        };
        r.extendDefinitions = function(n) {
            u.default.extend(!0, r.prototype.definitions, n)
        };
        r.extendAliases = function(n) {
            u.default.extend(!0, r.prototype.aliases, n)
        };
        r.format = function(n, t, i) {
            return r(t).format(n, i)
        };
        r.unmask = function(n, t) {
            return r(t).unmaskedvalue(n)
        };
        r.isValid = function(n, t) {
            return r(t).isValid(n)
        };
        r.remove = function(n) {
            "string" == typeof n && (n = o.getElementById(n) || o.querySelectorAll(n));
            n = n.nodeName ? [n] : n;
            n.forEach(function(n) {
                n.inputmask && n.inputmask.remove()
            })
        };
        r.setValue = function(n, t) {
            "string" == typeof n && (n = o.getElementById(n) || o.querySelectorAll(n));
            n = n.nodeName ? [n] : n;
            n.forEach(function(n) {
                n.inputmask ? n.inputmask.setValue(t) : u.default(n).trigger("setvalue", [t])
            })
        };
        r.dependencyLib = u.default;
        c.default.Inputmask = r;
        p = r;
        t.default = p
    }, function(n, t) {
        "use strict";

        function e(n, t) {
            var i = (null != n.alternation ? n.mloc[o(n)] : n.locator).join("");
            if ("" !== i)
                for (; i.length < t;) i += "0";
            return i
        }

        function o(n) {
            var t = n.locator[n.alternation];
            return "string" == typeof t && 0 < t.length && (t = t.split(",")[0]), void 0 !== t ? t.toString() : ""
        }

        function u(n, t, r) {
            var l = this,
                o = this.opts,
                c = this.maskset,
                u, s, h, e;
            if (t = t || f.call(this, n).match, void 0 !== t.placeholder || !0 === r) return "function" == typeof t.placeholder ? t.placeholder(o) : t.placeholder;
            if (!0 !== t.static) return o.placeholder.charAt(n % o.placeholder.length);
            if (-1 < n && void 0 === c.validPositions[n] && (u = i.call(this, n), s = [], u.length > 1 + ("" === u[u.length - 1].match.def ? 1 : 0)))
                for (e = 0; e < u.length; e++)
                    if ("" !== u[e].match.def && !0 !== u[e].match.optionality && !0 !== u[e].match.optionalQuantifier && (!0 === u[e].match.static || void 0 === h || !1 !== u[e].match.fn.test(h.match.def, c, n, !0, o)) && (s.push(u[e]), !0 === u[e].match.static && (h = u[e]), 1 < s.length && /[0-9a-bA-Z]/.test(s[0].match.def))) return o.placeholder.charAt(n % o.placeholder.length);
            return t.def
        }

        function h(n, t, f, e, o) {
            var d = this,
                a = this.opts,
                l = this.maskset,
                k = a.greedy,
                v, w, h, c, y, b, p;
            o && (a.greedy = !1);
            t = t || 0;
            v = [];
            h = 0;
            do !0 === n && l.validPositions[h] ? (y = o && !0 === l.validPositions[h].match.optionality && void 0 === l.validPositions[h + 1] && (!0 === l.validPositions[h].generatedInput || l.validPositions[h].input == a.skipOptionalPartCharacter && 0 < h) ? r.call(this, h, i.call(this, h, w, h - 1)) : l.validPositions[h], c = y.match, w = y.locator.slice(), v.push(!0 === f ? y.input : !1 === f ? c.nativeDef : u.call(this, h, c))) : (y = s.call(this, h, w, h - 1), c = y.match, w = y.locator.slice(), p = !0 !== e && (!1 !== a.jitMasking ? a.jitMasking : c.jit), b = b && c.static && c.def !== a.groupSeparator && null === c.fn || l.validPositions[h - 1] && c.static && c.def !== a.groupSeparator && null === c.fn, b || !1 === p || void 0 === p || "number" == typeof p && isFinite(p) && h < p ? v.push(!1 === f ? c.nativeDef : u.call(this, h, c)) : b = !1), h++; while ((void 0 === this.maxLength || h < this.maxLength) && (!0 !== c.static || "" !== c.def) || h < t);
            return "" === v[v.length - 1] && v.pop(), !1 === f && void 0 !== l.maskLength || (l.maskLength = h - 1), a.greedy = k, v
        }

        function s(n, t, u) {
            var e = this,
                f = this.maskset;
            return f.validPositions[n] || r.call(this, n, i.call(this, n, t ? t.slice() : t, u))
        }

        function r(n, t) {
            var v = this,
                l = this.opts,
                r, h;
            n = 0 < n ? n - 1 : 0;
            for (var a = f.call(this, n), c = e(a), u, o, i, s = 0; s < t.length; s++) r = t[s], u = e(r, c.length), h = Math.abs(u - c), (void 0 === o || "" !== u && h < o || i && !l.greedy && i.match.optionality && "master" === i.match.newBlockMarker && (!r.match.optionality || !r.match.newBlockMarker) || i && i.match.optionalQuantifier && !r.match.optionalQuantifier) && (o = h, i = r);
            return i
        }

        function f(n, t) {
            var u = this,
                r = this.maskset;
            return r.validPositions[n] ? r.validPositions[n] : (t || i.call(this, n))[0]
        }

        function i(n, t, i) {
            function p(t, i, r, h) {
                function l(r, h, c) {
                    function ot(n, t) {
                        var i = 0 === t.matches.indexOf(n);
                        return i || t.matches.every(function(r, u) {
                            return !0 === r.isQuantifier ? i = ot(n, t.matches[u - 1]) : Object.prototype.hasOwnProperty.call(r, "matches") && (i = ot(n, r)), !i
                        }), i
                    }

                    function pt(n, t, i) {
                        var r, f, e, o;
                        return ((u.tests[n] || u.validPositions[n]) && (u.tests[n] || [u.validPositions[n]]).every(function(n) {
                            if (n.mloc[t]) return r = n, !1;
                            var e = void 0 !== i ? i : n.alternation,
                                u = void 0 !== n.locator[e] ? n.locator[e].toString().indexOf(t) : -1;
                            return (void 0 === f || u < f) && -1 !== u && (r = n, f = u), !0
                        }), r) ? (e = r.locator[r.alternation], o = r.mloc[t] || r.mloc[e] || r.locator, o.slice((void 0 !== i ? i : r.alternation) + 1)) : void 0 !== i ? pt(n, t) : void 0
                    }

                    function wt(n, t) {
                        function i(n) {
                            for (var i = [], r = -1, u, t = 0, f = n.length; t < f; t++)
                                if ("-" === n.charAt(t))
                                    for (u = n.charCodeAt(t + 1); ++r < u;) i.push(String.fromCharCode(r));
                                else r = n.charCodeAt(t), i.push(n.charAt(t));
                            return i.join("")
                        }
                        return n.match.def === t.match.nativeDef || !(!(s.regex || n.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === n.match.static || !0 === t.match.static) && -1 !== i(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(i(n.match.fn.toString().replace(/[[\]/]/g, "")))
                    }

                    function ti(t, i) {
                        return !0 === t.match.static && !0 !== i.match.static && i.match.fn.test(t.match.def, u, n, !1, s, !1)
                    }

                    function ut(n, t) {
                        var i = n.alternation,
                            e = void 0 === t || i === t.alternation && -1 === n.locator[i].toString().indexOf(t.locator[i]),
                            f, r, u;
                        if (!e && i > t.alternation)
                            for (f = t.alternation; f < i; f++)
                                if (n.locator[f] !== t.locator[f]) {
                                    i = f;
                                    e = !0;
                                    break
                                } if (e) {
                            if (n.mloc = n.mloc || {}, r = n.locator[i], void 0 !== r) {
                                if ("string" == typeof r && (r = r.split(",")[0]), void 0 === n.mloc[r] && (n.mloc[r] = n.locator.slice()), void 0 !== t) {
                                    for (u in t.mloc) "string" == typeof u && (u = u.split(",")[0]), void 0 === n.mloc[u] && (n.mloc[u] = t.mloc[u]);
                                    n.locator[i] = Object.keys(n.mloc).join(",")
                                }
                                return !0
                            }
                            n.alternation = void 0
                        }
                        return !1
                    }

                    function ii(n, t) {
                        if (n.locator.length !== t.locator.length) return !1;
                        for (var i = n.alternation + 1; i < n.locator.length; i++)
                            if (n.locator[i] !== t.locator[i]) return !1;
                        return !0
                    }
                    var bt, kt, vt, yt, ft, ht, y, et, ct, b, rt, tt, it;
                    if (e > n + s._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + u.mask;
                    if (e === n && void 0 === r.matches) return f.push({
                        match: r,
                        locator: h.reverse(),
                        cd: v,
                        mloc: {}
                    }), !0;
                    if (void 0 !== r.matches) {
                        if (r.isGroup && c !== r) {
                            if (r = l(t.matches[t.matches.indexOf(r) + 1], h, c), r) return !0
                        } else if (r.isOptional) {
                            if (bt = r, kt = f.length, r = p(r, i, h, c), r) {
                                if (f.forEach(function(n, t) {
                                        kt <= t && (n.match.optionality = !0)
                                    }), o = f[f.length - 1].match, void 0 !== c || !ot(o, bt)) return !0;
                                a = !0;
                                e = n
                            }
                        } else if (r.isAlternator) {
                            var st = r,
                                k = [],
                                lt, ri = f.slice(),
                                dt = h.length,
                                d = 0 < i.length ? i.shift() : -1;
                            if (-1 === d || "string" == typeof d) {
                                var gt = e,
                                    ni = i.slice(),
                                    w = [],
                                    nt;
                                if ("string" == typeof d) w = d.split(",");
                                else
                                    for (nt = 0; nt < st.matches.length; nt++) w.push(nt.toString());
                                if (void 0 !== u.excludes[n]) {
                                    for (var ui = w.slice(), at = 0, fi = u.excludes[n].length; at < fi; at++) vt = u.excludes[n][at].toString().split(":"), h.length == vt[1] && w.splice(w.indexOf(vt[0]), 1);
                                    0 === w.length && (delete u.excludes[n], w = ui)
                                }
                                for ((!0 === s.keepStatic || isFinite(parseInt(s.keepStatic)) && gt >= s.keepStatic) && (w = w.slice(0, 1)), yt = !1, ft = 0; ft < w.length; ft++)
                                    for (nt = parseInt(w[ft]), f = [], i = "string" == typeof d && pt(e, nt, dt) || ni.slice(), st.matches[nt] && l(st.matches[nt], [nt].concat(h), c) ? r = !0 : 0 === ft && (yt = !0), lt = f.slice(), e = gt, f = [], ht = 0; ht < lt.length; ht++) {
                                        for (y = lt[ht], et = !1, y.match.jit = y.match.jit || yt, y.alternation = y.alternation || dt, ut(y), ct = 0; ct < k.length; ct++)
                                            if (b = k[ct], "string" != typeof d || void 0 !== y.alternation && w.includes(y.locator[y.alternation].toString())) {
                                                if (y.match.nativeDef === b.match.nativeDef) {
                                                    et = !0;
                                                    ut(b, y);
                                                    break
                                                }
                                                if (wt(y, b)) {
                                                    ut(y, b) && (et = !0, k.splice(k.indexOf(b), 0, y));
                                                    break
                                                }
                                                if (wt(b, y)) {
                                                    ut(b, y);
                                                    break
                                                }
                                                if (ti(y, b)) {
                                                    ii(y, b) || void 0 !== g.inputmask.userOptions.keepStatic ? ut(y, b) && (et = !0, k.splice(k.indexOf(b), 0, y)) : s.keepStatic = !0;
                                                    break
                                                }
                                            } et || k.push(y)
                                    }
                                f = ri.concat(k);
                                e = n;
                                a = 0 < f.length;
                                r = 0 < k.length;
                                i = ni.slice()
                            } else r = l(st.matches[d] || t.matches[d], [d].concat(h), c);
                            if (r) return !0
                        } else if (r.isQuantifier && c !== t.matches[t.matches.indexOf(r) - 1]) {
                            for (rt = r, tt = 0 < i.length ? i.shift() : 0; tt < (isNaN(rt.quantifier.max) ? tt + 1 : rt.quantifier.max) && e <= n; tt++)
                                if (it = t.matches[t.matches.indexOf(rt) - 1], r = l(it, [tt].concat(h), it), r) {
                                    if (o = f[f.length - 1].match, o.optionalQuantifier = tt >= rt.quantifier.min, o.jit = (tt || 1) * it.matches.indexOf(o) >= rt.quantifier.jit, o.optionalQuantifier && ot(o, it)) {
                                        a = !0;
                                        e = n;
                                        break
                                    }
                                    return o.jit && (u.jitOffset[n] = it.matches.length - it.matches.indexOf(o)), !0
                                }
                        } else if (r = p(r, i, h, c), r) return !0
                    } else e++
                }
                for (var y, c = 0 < i.length ? i.shift() : 0; c < t.matches.length; c++)
                    if (!0 !== t.matches[c].isQuantifier) {
                        if (y = l(t.matches[c], [c].concat(r), h), y && e === n) return y;
                        if (n < e) break
                    }
            }

            function nt(n, t) {
                var i = [],
                    u;
                return Array.isArray(t) || (t = [t]), 0 < t.length && (void 0 === t[0].alternation || !0 === s.keepStatic ? (i = r.call(y, n, t.slice()).locator.slice(), 0 === i.length && (i = t[0].locator.slice())) : t.forEach(function(n) {
                    "" !== n.def && (0 === i.length ? (u = n.alternation, i = n.locator.slice()) : n.locator[u] && -1 === i[u].toString().indexOf(n.locator[u]) && (i[u] += "," + n.locator[u]))
                })), i
            }
            var y = this,
                b = this.dependencyLib,
                u = this.maskset,
                s = this.opts,
                g = this.el,
                k = u.maskToken,
                e = t ? i : 0,
                l = t ? t.slice() : [0],
                f = [],
                a = !1,
                o, v = t ? t.join("") : "",
                h, w, c, d;
            if (-1 < n && (void 0 === y.maxLength || n < y.maxLength)) {
                if (void 0 === t) {
                    for (h = n - 1; void 0 === (w = u.validPositions[h] || u.tests[h]) && -1 < h;) h--;
                    void 0 !== w && -1 < h && (l = nt(h, w), v = l.join(""), e = h)
                }
                if (u.tests[n] && u.tests[n][0].cd === v) return u.tests[n];
                for (c = l.shift(); c < k.length; c++)
                    if (d = p(k[c], l, [c]), d && e === n || n < e) break
            }
            return 0 !== f.length && !a || f.push({
                match: {
                    fn: null,
                    "static": !0,
                    optionality: !1,
                    casing: null,
                    def: "",
                    placeholder: ""
                },
                locator: [],
                mloc: {},
                cd: v
            }), void 0 !== t && u.tests[n] ? b.extend(!0, [], f) : (u.tests[n] = b.extend(!0, [], f), u.tests[n])
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.determineTestTemplate = r;
        t.getDecisionTaker = o;
        t.getMaskTemplate = h;
        t.getPlaceholder = u;
        t.getTest = f;
        t.getTests = i;
        t.getTestTemplate = s
    }, function(n, t, i) {
        "use strict";

        function y(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }

        function e(n, t, i, f, s, h) {
            var lt = this,
                nt = this.dependencyLib,
                st = this.opts,
                c = this.maskset,
                ht = nt.extend(!0, {}, c.validPositions),
                ct = nt.extend(!0, {}, c.tests),
                d, it, w = !1,
                b = !1,
                p, v, l, tt, a, g = void 0 !== s ? s : r.getLastValidPosition.call(this),
                et, ot, rt, ut, y, k, ft;
            if (h && (rt = h.begin, ut = h.end, h.begin > h.end && (rt = h.end, ut = h.begin)), -1 === g && void 0 === s) d = 0, v = u.getTest.call(this, d), it = v.alternation;
            else
                for (; 0 <= g; g--)
                    if (p = c.validPositions[g], p && void 0 !== p.alternation) {
                        if (v && v.locator[p.alternation] !== p.locator[p.alternation]) break;
                        d = g;
                        it = c.validPositions[d].alternation;
                        v = p
                    } if (void 0 !== it) {
                for (a = parseInt(d), c.excludes[a] = c.excludes[a] || [], !0 !== n && c.excludes[a].push(u.getDecisionTaker(v) + ":" + v.alternation), y = [], k = -1, l = a; l < r.getLastValidPosition.call(this, void 0, !0) + 1; l++) - 1 === k && n <= l && void 0 !== t && (y.push(t), k = y.length - 1), tt = c.validPositions[l], tt && !0 !== tt.generatedInput && (void 0 === h || l < rt || ut <= l) && y.push(tt.input), delete c.validPositions[l];
                for (-1 === k && void 0 !== t && (y.push(t), k = y.length - 1); void 0 !== c.excludes[a] && c.excludes[a].length < 10;) {
                    for (c.tests = {}, r.resetMaskSet.call(this, !0), w = !0, l = 0; l < y.length && (et = w.caret || r.getLastValidPosition.call(this, void 0, !0) + 1, ot = y[l], w = o.call(this, et, ot, !1, f, !0)); l++) l === k && (b = w), 1 == n && w && (b = {
                        caretPos: l
                    });
                    if (w) break;
                    if (r.resetMaskSet.call(this), v = u.getTest.call(this, a), c.validPositions = nt.extend(!0, {}, ht), c.tests = nt.extend(!0, {}, ct), !c.excludes[a]) {
                        b = e.call(this, n, t, i, f, a - 1, h);
                        break
                    }
                    if (ft = u.getDecisionTaker(v), -1 !== c.excludes[a].indexOf(ft + ":" + v.alternation)) {
                        b = e.call(this, n, t, i, f, a - 1, h);
                        break
                    }
                    for (c.excludes[a].push(ft + ":" + v.alternation), l = a; l < r.getLastValidPosition.call(this, void 0, !0) + 1; l++) delete c.validPositions[l]
                }
            }
            return b && !1 === st.keepStatic || delete c.excludes[a], b
        }

        function p(n, t, i) {
            var r = this.opts,
                o = this.maskset,
                u, e;
            switch (r.casing || t.casing) {
                case "upper":
                    n = n.toUpperCase();
                    break;
                case "lower":
                    n = n.toLowerCase();
                    break;
                case "title":
                    u = o.validPositions[i - 1];
                    n = 0 === i || u && u.input === String.fromCharCode(f.default.SPACE) ? n.toUpperCase() : n.toLowerCase();
                    break;
                default:
                    "function" == typeof r.casing && (e = Array.prototype.slice.call(arguments), e.push(o.validPositions), n = r.casing.apply(this, e))
            }
            return n
        }

        function w(n, t, i) {
            for (var r, s = this.opts, h = s.greedy ? t : t.slice(0, 1), f = !1, e = void 0 !== i ? i.split(",") : [], o, u = 0; u < e.length; u++) - 1 !== (o = n.indexOf(e[u])) && n.splice(o, 1);
            for (r = 0; r < n.length; r++)
                if (h.includes(n[r])) {
                    f = !0;
                    break
                } return f
        }

        function b(n, t, i, o) {
            var w = this,
                p = this.maskset,
                c = this.opts,
                a, l, v, h, y;
            (c.numericInput || this.isRTL) && (t === f.default.BACKSPACE ? t = f.default.DELETE : t === f.default.DELETE && (t = f.default.BACKSPACE), this.isRTL) && (a = i.end, i.end = i.begin, i.begin = a);
            l = r.getLastValidPosition.call(this, void 0, !0);
            (i.end >= r.getBuffer.call(this).length && l >= i.end && (i.end = l + 1), t === f.default.BACKSPACE ? i.end - i.begin < 1 && (i.begin = r.seekPrevious.call(this, i.begin)) : t === f.default.DELETE && i.begin === i.end && (i.end = r.isMask.call(this, i.end, !0, !0) ? i.end + 1 : r.seekNext.call(this, i.end) + 1), !1 !== (v = s.call(this, i))) && ((!0 !== o && !1 !== c.keepStatic || null !== c.regex && -1 !== u.getTest.call(this, i.begin).match.def.indexOf("|")) && (h = e.call(this, !0), h && (y = void 0 !== h.caret ? h.caret : h.pos ? r.seekNext.call(this, h.pos.begin ? h.pos.begin : h.pos) : r.getLastValidPosition.call(this, -1, !0), (t !== f.default.DELETE || i.begin > y) && i.begin)), !0 !== o && (p.p = t === f.default.DELETE ? i.begin + v : i.begin))
        }

        function h(n) {
            var c = this,
                e = this.opts,
                s = this.maskset,
                t, i;
            if ("function" == typeof e.isComplete) return e.isComplete(n, e);
            if ("*" !== e.repeat) {
                var o = !1,
                    f = r.determineLastRequiredPosition.call(this, !0),
                    h = r.seekPrevious.call(this, f.l);
                if (void 0 === f.def || f.def.newBlockMarker || f.def.optionality || f.def.optionalQuantifier)
                    for (o = !0, t = 0; t <= h; t++)
                        if (i = u.getTestTemplate.call(this, t).match, !0 !== i.static && void 0 === s.validPositions[t] && !0 !== i.optionality && !0 !== i.optionalQuantifier || !0 === i.static && n[t] !== u.getPlaceholder.call(this, t, i)) {
                            o = !1;
                            break
                        } return o
            }
        }

        function o(n, t, i, f, c, v, y) {
            function ft(n) {
                return w.isRTL ? 1 < n.begin - n.end || n.begin - n.end == 1 : 1 < n.end - n.begin || n.end - n.begin == 1
            }

            function et(n) {
                if (void 0 !== n) {
                    if (void 0 !== n.remove && (Array.isArray(n.remove) || (n.remove = [n.remove]), n.remove.sort(function(n, t) {
                            return t.pos - n.pos
                        }).forEach(function(n) {
                            s.call(w, {
                                begin: n,
                                end: n + 1
                            })
                        }), n.remove = void 0), void 0 !== n.insert && (Array.isArray(n.insert) || (n.insert = [n.insert]), n.insert.sort(function(n, t) {
                            return n.pos - t.pos
                        }).forEach(function(n) {
                            "" !== n.c && o.call(w, n.pos, n.c, void 0 === n.strict || n.strict, void 0 !== n.fromIsValid ? n.fromIsValid : f)
                        }), n.insert = void 0), n.refreshFromBuffer && n.buffer) {
                        var t = n.refreshFromBuffer;
                        l.call(w, !0 === t ? t : t.start, t.end, n.buffer);
                        n.refreshFromBuffer = void 0
                    }
                    void 0 !== n.rewritePosition && (b = n.rewritePosition, n = !0)
                }
                return n
            }

            function st(t, i, e) {
                var o = !1;
                return u.getTests.call(w, t).every(function(h) {
                    var c = h.match,
                        l, a;
                    return (r.getBuffer.call(w, !0), o = null != c.fn ? c.fn.test(i, d, t, e, g, ft(n)) : (i === c.def || i === g.skipOptionalPartCharacter) && "" !== c.def && {
                        c: u.getPlaceholder.call(w, t, c, !0) || c.def,
                        pos: t
                    }, !1 === o) ? !0 : (l = void 0 !== o.c ? o.c : i, a = t, l = l === g.skipOptionalPartCharacter && !0 === c.static ? u.getPlaceholder.call(w, t, c, !0) || c.def : l, o = et(o), !0 !== o && void 0 !== o.pos && o.pos !== t && (a = o.pos), !0 !== o && void 0 === o.pos && void 0 === o.c || !1 === s.call(w, n, ut.extend({}, h, {
                        input: p.call(w, l, c, a)
                    }), f, a) && (o = !1), !1)
                }), o
            }
            var w = this,
                ut = this.dependencyLib,
                g = this.opts,
                lt = w.el,
                d = w.maskset,
                b, k, ht, nt, it, ot, tt, ct, rt;
            if (i = !0 === i, b = n, void 0 !== n.begin && (b = w.isRTL ? n.end : n.begin), k = !0, ht = ut.extend(!0, {}, d.validPositions), !1 === g.keepStatic && void 0 !== d.excludes[b] && !0 !== c && !0 !== f)
                for (nt = b; nt < (w.isRTL ? n.begin : n.end); nt++) void 0 !== d.excludes[nt] && (d.excludes[nt] = void 0, delete d.tests[nt]);
            if ("function" == typeof g.preValidation && !0 !== f && !0 !== v && (k = g.preValidation.call(w, r.getBuffer.call(w), b, t, ft(n), g, d, n, i || c), k = et(k)), !0 === k) {
                if (void 0 === w.maxLength || b < r.translatePosition.call(w, w.maxLength)) {
                    if (k = st(b, t, i), (!i || !0 === f) && !1 === k && !0 !== v)
                        if (it = d.validPositions[b], it && !0 === it.match.static && (it.match.def === t || t === g.skipOptionalPartCharacter)) k = {
                            caret: r.seekNext.call(w, b)
                        };
                        else if ((g.insertMode || void 0 === d.validPositions[r.seekNext.call(w, b)] || n.end > b) && (ot = !1, d.jitOffset[b] && void 0 === d.validPositions[r.seekNext.call(w, b)] && (k = o.call(w, b + d.jitOffset[b], t, !0), !1 !== k && (!0 !== c && (k.caret = b), ot = !0)), n.end > b && (d.validPositions[b] = void 0), !ot && !r.isMask.call(w, b, g.keepStatic && 0 === b)))
                        for (tt = b + 1, ct = r.seekNext.call(w, b, !1, 0 !== b); tt <= ct; tt++)
                            if (k = st(tt, t, i), !1 !== k) {
                                k = a.call(w, b, void 0 !== k.pos ? k.pos : tt) || k;
                                b = tt;
                                break
                            }
                } else k = !1;
                !1 !== k || !g.keepStatic || !h.call(w, r.getBuffer.call(w)) && 0 !== b || i || !0 === c ? ft(n) && d.tests[b] && 1 < d.tests[b].length && g.keepStatic && !i && !0 !== c && (k = e.call(w, !0)) : k = e.call(w, b, t, i, f, void 0, n);
                !0 === k && (k = {
                    pos: b
                })
            }
            return "function" == typeof g.postValidation && !0 !== f && !0 !== v && (rt = g.postValidation.call(w, r.getBuffer.call(w, !0), void 0 !== n.begin ? w.isRTL ? n.end : n.begin : n, t, k, g, d, i, y), void 0 !== rt && (k = !0 === rt ? k : rt)), k && void 0 === k.pos && (k.pos = b), !1 === k || !0 === v ? (r.resetMaskSet.call(w, !0), d.validPositions = ut.extend(!0, {}, ht)) : a.call(w, void 0, b, !0), et(k)
        }

        function c(n, t, i) {
            for (var s = this, o = this.maskset, e = !1, f = u.getTests.call(this, n), r = 0; r < f.length; r++) {
                if (f[r].match && (!(f[r].match.nativeDef !== t.match[i.shiftPositions ? "def" : "nativeDef"] || i.shiftPositions && t.match.static) || f[r].match.nativeDef === t.match.nativeDef)) {
                    e = !0;
                    break
                }
                if (f[r].match && f[r].match.def === t.match.nativeDef) {
                    e = void 0;
                    break
                }
            }
            return !1 === e && void 0 !== o.jitOffset[n] && (e = c.call(this, n + o.jitOffset[n], t, i)), e
        }

        function l(n, t, i) {
            var p = this,
                h = this.maskset,
                e = this.opts,
                c = this.dependencyLib,
                l = this.el,
                u, f, a = e.skipOptionalPartCharacter,
                y = this.isRTL ? i.slice().reverse() : i,
                o, s;
            if (e.skipOptionalPartCharacter = "", !0 === n) r.resetMaskSet.call(this), h.tests = {}, n = 0, t = i.length, f = r.determineNewCaretPosition.call(this, {
                begin: 0,
                end: 0
            }, !1).begin;
            else {
                for (u = n; u < t; u++) delete h.validPositions[u];
                f = n
            }
            for (o = new c.Event("keypress"), u = n; u < t; u++) o.which = y[u].toString().charCodeAt(0), this.ignorable = !1, s = v.EventHandlers.keypressEvent.call(l, o, !0, !1, !1, f), !1 !== s && (f = s.forwardPosition);
            e.skipOptionalPartCharacter = a
        }

        function a(n, t, i) {
            var p = this,
                h = this.maskset,
                y = this.dependencyLib,
                f, l, c, e, a, v;
            if (void 0 === n)
                for (n = t - 1; 0 < n && !h.validPositions[n]; n--);
            for (f = n; f < t; f++)
                if (void 0 === h.validPositions[f] && !r.isMask.call(this, f, !0) && (l = 0 == f ? u.getTest.call(this, f) : h.validPositions[f - 1], l && (c = u.getTests.call(this, f).slice(), "" === c[c.length - 1].match.def && c.pop(), e = u.determineTestTemplate.call(this, f, c), e && (!0 !== e.match.jit || "master" === e.match.newBlockMarker && (a = h.validPositions[f + 1]) && !0 === a.match.optionalQuantifier) && (e = y.extend({}, e, {
                        input: u.getPlaceholder.call(this, f, e.match, !0) || e.match.def
                    }), e.generatedInput = !0, s.call(this, f, e, !0), !0 !== i)))) return v = h.validPositions[t].input, h.validPositions[t] = void 0, o.call(this, t, v, !0, !0)
        }

        function s(n, t, i, f) {
            function it(n, t, i) {
                var r = t[n],
                    u, f;
                return void 0 === r || !0 !== r.match.static || !0 === r.match.optionality || void 0 !== t[0] && void 0 !== t[0].alternation ? !1 : (u = i.begin <= n - 1 ? t[n - 1] && !0 === t[n - 1].match.static && t[n - 1] : t[n - 1], f = i.end > n + 1 ? t[n + 1] && !0 === t[n + 1].match.static && t[n + 1] : t[n + 1], u && f)
            }
            var rt = this,
                s = this.maskset,
                g = this.opts,
                p = this.dependencyLib,
                nt = 0,
                v = void 0 !== n.begin ? n.begin : n,
                y = void 0 !== n.end ? n.end : n,
                w, k, e, d;
            if (n.begin > n.end && (v = n.end, y = n.begin), f = void 0 !== f ? f : v, v !== y || g.insertMode && void 0 !== s.validPositions[f] && void 0 === i || void 0 === t) {
                for (w = p.extend(!0, {}, s.validPositions), k = r.getLastValidPosition.call(this, void 0, !0), s.p = v, e = k; v <= e; e--) delete s.validPositions[e], void 0 === t && delete s.tests[e + 1];
                var a = !0,
                    b = f,
                    h = b,
                    l, tt;
                for (t && (s.validPositions[f] = p.extend(!0, {}, t), h++, b++), e = t ? y : y - 1; e <= k; e++) {
                    if (void 0 !== (l = w[e]) && !0 !== l.generatedInput && (y <= e || v <= e && it(e, w, {
                            begin: v,
                            end: y
                        }))) {
                        for (;
                            "" !== u.getTest.call(this, h).match.def;) {
                            if (!1 !== (tt = c.call(this, h, l, g)) || "+" === l.match.def) {
                                if ("+" === l.match.def && r.getBuffer.call(this, !0), d = o.call(this, h, l.input, "+" !== l.match.def, "+" !== l.match.def), a = !1 !== d, b = (d.pos || h) + 1, !a && tt) break
                            } else a = !1;
                            if (a) {
                                void 0 === t && l.match.static && e === n.begin && nt++;
                                break
                            }
                            if (!a && h > s.maskLength) break;
                            h++
                        }
                        "" == u.getTest.call(this, h).match.def && (a = !1);
                        h = b
                    }
                    if (!a) break
                }
                if (!a) return s.validPositions = p.extend(!0, {}, w), r.resetMaskSet.call(this, !0), !1
            } else t && u.getTest.call(this, f).match.cd === t.match.cd && (s.validPositions[f] = p.extend(!0, {}, t));
            return r.resetMaskSet.call(this, !0), nt
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.alternate = e;
        t.checkAlternationMatch = w;
        t.isComplete = h;
        t.isValid = o;
        t.refreshFromBuffer = l;
        t.revalidateMask = s;
        t.handleRemove = b;
        var u = i(3),
            f = y(i(0)),
            r = i(1),
            v = i(8)
    }, function(n, t, i) {
        "use strict";

        function f(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }
        var r, u;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        r = f(i(6));
        u = r.default ? window : {};
        t.default = u
    }, function(n, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        var i = !("undefined" == typeof window || !window.document || !window.document.createElement),
            r = i;
        t.default = r
    }, function(n, t, i) {
        "use strict";

        function v(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }

        function h(n, t) {
            var i = n ? n.inputmask : this,
                u = i.opts;
            n.inputmask.refreshValue = !1;
            "function" == typeof u.onBeforeMask && (t = u.onBeforeMask.call(i, t, u) || t);
            t = t.toString().split("");
            l(n, !0, !1, t);
            i.undoValue = r.getBuffer.call(i).join("");
            (u.clearMaskOnLostFocus || u.clearIncomplete) && n.inputmask._valueGet() === r.getBufferTemplate.call(i).join("") && -1 === r.getLastValidPosition.call(i) && n.inputmask._valueSet("")
        }

        function c(n) {
            var r = this,
                t, i;
            for (n.length = 0, t = u.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (i = t.shift());) n.push(i);
            return n
        }

        function l(n, t, i, s, h) {
            function ft(n, t) {
                for (var e, o, f = u.getMaskTemplate.call(c, !0, 0).slice(n, r.seekNext.call(c, n, !1, !1)).join("").replace(/'/g, ""), i = f.indexOf(t); 0 < i && " " === f[i - 1];) i--;
                return e = 0 === i && !r.isMask.call(c, n) && (u.getTest.call(c, n).match.nativeDef === t.charAt(0) || !0 === u.getTest.call(c, n).match.static && u.getTest.call(c, n).match.nativeDef === "'" + t.charAt(0) || " " === u.getTest.call(c, n).match.nativeDef && (u.getTest.call(c, n + 1).match.nativeDef === t.charAt(0) || !0 === u.getTest.call(c, n + 1).match.static && u.getTest.call(c, n + 1).match.nativeDef === "'" + t.charAt(0))), !e && 0 < i && !r.isMask.call(c, n, !1, !0) && (o = r.seekNext.call(c, n), c.caretPos.begin < o && (c.caretPos = {
                    begin: o
                })), e
            }
            var c = n ? n.inputmask : this,
                a = c.maskset,
                p = c.opts,
                b = c.dependencyLib,
                k = s.slice(),
                d = "",
                y = -1,
                l = void 0,
                ut = p.skipOptionalPartCharacter,
                v, g, nt, tt, w, it, rt;
            if (p.skipOptionalPartCharacter = "", r.resetMaskSet.call(c), a.tests = {}, y = p.radixPoint ? r.determineNewCaretPosition.call(c, {
                    begin: 0,
                    end: 0
                }).begin : 0, a.p = y, c.caretPos = {
                    begin: y
                }, v = [], g = c.caretPos, (k.forEach(function(n, t) {
                    var s, h;
                    void 0 !== n && (void 0 === a.validPositions[t] && k[t] === u.getPlaceholder.call(c, t) && r.isMask.call(c, t, !0) && !1 === f.isValid.call(c, t, k[t], !0, void 0, void 0, !0) ? a.p++ : (s = new b.Event("_checkval"), s.which = n.toString().charCodeAt(0), d += n, h = r.getLastValidPosition.call(c, void 0, !0), ft(y, d) ? l = o.EventHandlers.keypressEvent.call(c, s, !0, !1, i, h + 1) : (l = o.EventHandlers.keypressEvent.call(c, s, !0, !1, i, c.caretPos.begin), l && (y = c.caretPos.begin + 1, d = "")), l ? (void 0 !== l.pos && a.validPositions[l.pos] && !0 === a.validPositions[l.pos].match.static && void 0 === a.validPositions[l.pos].alternation && (v.push(l.pos), c.isRTL || (l.forwardPosition = l.pos + 1)), e.call(c, void 0, r.getBuffer.call(c), l.forwardPosition, s, !1), c.caretPos = {
                        begin: l.forwardPosition,
                        end: l.forwardPosition
                    }, g = c.caretPos) : c.caretPos = g))
                }), 0 < v.length) && (w = r.seekNext.call(c, -1, void 0, !1), !f.isComplete.call(c, r.getBuffer.call(c)) && v.length <= w || f.isComplete.call(c, r.getBuffer.call(c)) && 0 < v.length && v.length !== w && 0 === v[0]))
                for (it = w; void 0 !== (nt = v.shift());) {
                    if (rt = new b.Event("_checkval"), tt = a.validPositions[nt], tt.generatedInput = !0, rt.which = tt.input.charCodeAt(0), l = o.EventHandlers.keypressEvent.call(c, rt, !0, !1, i, it), l && void 0 !== l.pos && l.pos !== nt && a.validPositions[l.pos] && !0 === a.validPositions[l.pos].match.static) v.push(l.pos);
                    else if (!l) break;
                    it++
                }
            t && e.call(c, n, r.getBuffer.call(c), l ? l.forwardPosition : c.caretPos.begin, h || new b.Event("checkval"), h && "input" === h.type && c.undoValue !== r.getBuffer.call(c).join(""));
            p.skipOptionalPartCharacter = ut
        }

        function y(n, t) {
            var i = n ? n.inputmask : this,
                u, f, o;
            a.ie ? n.inputmask._valueGet() !== t && (n.placeholder !== t || "" === n.placeholder) && (u = r.getBuffer.call(i).slice(), f = n.inputmask._valueGet(), f !== t && (o = r.getLastValidPosition.call(i), -1 === o && f === r.getBufferTemplate.call(i).join("") ? u = [] : -1 !== o && c.call(i, u), e(n, u))) : n.placeholder !== t && (n.placeholder = t, "" === n.placeholder && n.removeAttribute("placeholder"))
        }

        function p(n) {
            var t = n ? n.inputmask : this,
                o = t.opts,
                s = t.maskset,
                f, i, u, e, c;
            if (n) {
                if (void 0 === n.inputmask) return n.value;
                n.inputmask && n.inputmask.refreshValue && h(n, n.inputmask._valueGet(!0))
            }
            f = [];
            i = s.validPositions;
            for (u in i) i[u] && i[u].match && (1 != i[u].match.static || Array.isArray(s.metadata) && !0 !== i[u].generatedInput) && f.push(i[u].input);
            return e = 0 === f.length ? "" : (t.isRTL ? f.reverse() : f).join(""), "function" == typeof o.onUnMask && (c = (t.isRTL ? r.getBuffer.call(t).slice().reverse() : r.getBuffer.call(t)).join(""), e = o.onUnMask.call(t, c, e, o)), e
        }

        function e(n, t, i, u, e) {
            var o = n ? n.inputmask : this,
                a = o.opts,
                y = o.dependencyLib,
                h, c, l, v;
            u && "function" == typeof a.onBeforeWrite && (h = a.onBeforeWrite.call(o, u, t, i, a), h && (h.refreshFromBuffer && (c = h.refreshFromBuffer, f.refreshFromBuffer.call(o, !0 === c ? c : c.start, c.end, h.buffer || t), t = r.getBuffer.call(o, !0)), void 0 !== i && (i = void 0 !== h.caret ? h.caret : i)));
            void 0 !== n && (n.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== u && "blur" === u.type || r.caret.call(o, n, i, void 0, void 0, void 0 !== u && "keydown" === u.type && (u.keyCode === s.default.DELETE || u.keyCode === s.default.BACKSPACE)), !0 === e) && (l = y(n), v = n.inputmask._valueGet(), n.inputmask.skipInputEvent = !0, l.trigger("input"), setTimeout(function() {
                v === r.getBufferTemplate.call(o).join("") ? l.trigger("cleared") : !0 === f.isComplete.call(o, t) && l.trigger("complete")
            }, 0))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.applyInputValue = h;
        t.clearOptionalTail = c;
        t.checkVal = l;
        t.HandleNativePlaceholder = y;
        t.unmaskedvalue = p;
        t.writeBuffer = e;
        var s = v(i(0)),
            u = i(3),
            r = i(1),
            f = i(4),
            a = i(9),
            o = i(8)
    }, function(n, t, i) {
        "use strict";

        function c(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }
        var o;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.EventHandlers = void 0;
        var r = i(1),
            u = c(i(0)),
            s = i(9),
            e = i(4),
            f = i(7),
            h = i(3);
        o = {
            keydownEvent: function(n) {
                var t = this.inputmask,
                    l = t.opts,
                    p = t.dependencyLib,
                    a = t.maskset,
                    o = this,
                    w = p(o),
                    c = n.keyCode,
                    i = r.caret.call(t, o),
                    y = l.onKeyDown.call(this, n, r.getBuffer.call(t), i, l),
                    v;
                if (void 0 !== y) return y;
                c !== u.default.BACKSPACE && c !== u.default.DELETE && (!s.iphone || c !== u.default.BACKSPACE_SAFARI) && (!n.ctrlKey || c !== u.default.X || "oncut" in o) ? c === u.default.END || c === u.default.PAGE_DOWN ? (n.preventDefault(), v = r.seekNext.call(t, r.getLastValidPosition.call(t)), r.caret.call(t, o, n.shiftKey ? i.begin : v, v, !0)) : c === u.default.HOME && !n.shiftKey || c === u.default.PAGE_UP ? (n.preventDefault(), r.caret.call(t, o, 0, n.shiftKey ? i.begin : 0, !0)) : (l.undoOnEscape && c === u.default.ESCAPE || 90 === c && n.ctrlKey) && !0 !== n.altKey ? (f.checkVal(o, !0, !1, t.undoValue.split("")), w.trigger("click")) : !0 === l.tabThrough && c === u.default.TAB ? !0 === n.shiftKey ? (i.end = r.seekPrevious.call(t, i.end, !0), !0 === h.getTest.call(t, i.end - 1).match.static && i.end--, i.begin = r.seekPrevious.call(t, i.end, !0), 0 <= i.begin && 0 < i.end && (n.preventDefault(), r.caret.call(t, o, i.begin, i.end))) : (i.begin = r.seekNext.call(t, i.begin, !0), i.end = r.seekNext.call(t, i.begin, !0), i.end < a.maskLength && i.end--, i.begin <= a.maskLength && (n.preventDefault(), r.caret.call(t, o, i.begin, i.end))) : n.shiftKey || l.insertModeVisual && !1 === l.insertMode && (c === u.default.RIGHT ? setTimeout(function() {
                    var n = r.caret.call(t, o);
                    r.caret.call(t, o, n.begin)
                }, 0) : c === u.default.LEFT && setTimeout(function() {
                    var n = r.translatePosition.call(t, o.inputmask.caretPos.begin),
                        i = r.translatePosition.call(t, o.inputmask.caretPos.end);
                    t.isRTL ? r.caret.call(t, o, n + (n === a.maskLength ? 0 : 1)) : r.caret.call(t, o, n - (0 === n ? 0 : 1))
                }, 0)) : (n.preventDefault(), e.handleRemove.call(t, o, c, i), f.writeBuffer(o, r.getBuffer.call(t, !0), a.p, n, o.inputmask._valueGet() !== r.getBuffer.call(t).join("")));
                t.ignorable = l.ignorables.includes(c)
            },
            keypressEvent: function(n, t, i, o, s) {
                var h = this.inputmask || this,
                    v = h.opts,
                    d = h.dependencyLib,
                    p = h.maskset,
                    y = h.el,
                    g = d(y),
                    l = n.which || n.charCode || n.keyCode,
                    w, a, b, c, k;
                return !(!0 === t || n.ctrlKey && n.altKey) && (n.ctrlKey || n.metaKey || h.ignorable) ? (l === u.default.ENTER && h.undoValue !== r.getBuffer.call(h).join("") && (h.undoValue = r.getBuffer.call(h).join(""), setTimeout(function() {
                    g.trigger("change")
                }, 0)), h.skipInputEvent = !0, !0) : l && (44 !== l && 46 !== l || 3 !== n.location || "" === v.radixPoint || (l = v.radixPoint.charCodeAt(0)), w = t ? {
                    begin: s,
                    end: s
                } : r.caret.call(h, y), b = String.fromCharCode(l), p.writeOutBuffer = !0, c = e.isValid.call(h, w, b, o, void 0, void 0, void 0, t), (!1 !== c && (r.resetMaskSet.call(h, !0), a = void 0 !== c.caret ? c.caret : r.seekNext.call(h, c.pos.begin ? c.pos.begin : c.pos), p.p = a), a = v.numericInput && void 0 === c.caret ? r.seekPrevious.call(h, a) : a, !1 !== i && (setTimeout(function() {
                    v.onKeyValidation.call(y, l, c)
                }, 0), p.writeOutBuffer && !1 !== c)) && (k = r.getBuffer.call(h), f.writeBuffer(y, k, a, n, !0 !== t)), n.preventDefault(), t) ? (!1 !== c && (c.forwardPosition = a), c) : void 0
            },
            keyupEvent: function(n) {
                var t = this.inputmask;
                t.isComposing && (n.keyCode === u.default.KEY_229 || n.keyCode === u.default.ENTER) && t.$el.trigger("input")
            },
            pasteEvent: function(n) {
                var t = this.inputmask,
                    h = t.opts,
                    l = this,
                    i = t._valueGet(!0),
                    u = r.caret.call(t, this),
                    c, o, s, e;
                if (t.isRTL && (c = u.end, u.end = u.begin, u.begin = c), o = i.substr(0, u.begin), s = i.substr(u.end, i.length), o == (t.isRTL ? r.getBufferTemplate.call(t).slice().reverse() : r.getBufferTemplate.call(t)).slice(0, u.begin).join("") && (o = ""), s == (t.isRTL ? r.getBufferTemplate.call(t).slice().reverse() : r.getBufferTemplate.call(t)).slice(u.end).join("") && (s = ""), window.clipboardData && window.clipboardData.getData) i = o + window.clipboardData.getData("Text") + s;
                else {
                    if (!n.clipboardData || !n.clipboardData.getData) return !0;
                    i = o + n.clipboardData.getData("text/plain") + s
                }
                if (e = i, "function" == typeof h.onBeforePaste) {
                    if (e = h.onBeforePaste.call(t, i, h), !1 === e) return n.preventDefault();
                    e = e || i
                }
                return f.checkVal(this, !0, !1, e.toString().split(""), n), n.preventDefault()
            },
            inputFallBackEvent: function(n) {
                function w(n, i, u) {
                    var f, e;
                    return s.iemobile && (f = i.replace(r.getBuffer.call(t).join(""), ""), 1 === f.length && (e = i.split(""), e.splice(u.begin, 0, f), i = e.join(""))), i
                }

                function b(n, i, u) {
                    for (var e, o, l = n.substr(0, u.begin).split(""), a = n.substr(u.begin).split(""), v = i.substr(0, u.begin).split(""), y = i.substr(u.begin).split(""), k = l.length >= v.length ? l.length : v.length, d = a.length >= y.length ? a.length : y.length, s, f, c = "", w = [], b; l.length < k;) l.push("~");
                    for (; v.length < k;) v.push("~");
                    for (; a.length < d;) a.unshift("~");
                    for (; y.length < d;) y.unshift("~");
                    for (e = l.concat(a), o = v.concat(y), f = 0, s = e.length; f < s; f++) switch (b = h.getPlaceholder.call(t, r.translatePosition.call(t, f)), c) {
                        case "insertText":
                            o[f - 1] === e[f] && u.begin == e.length - 1 && w.push(e[f]);
                            f = s;
                            break;
                        case "insertReplacementText":
                            "~" === e[f] ? u.end++ : f = s;
                            break;
                        case "deleteContentBackward":
                            "~" === e[f] ? u.end++ : f = s;
                            break;
                        default:
                            e[f] !== o[f] && ("~" !== e[f + 1] && e[f + 1] !== b && void 0 !== e[f + 1] || (o[f] !== b || "~" !== o[f + 1]) && "~" !== o[f] ? "~" === o[f + 1] && o[f] === e[f + 1] ? (c = "insertText", w.push(e[f]), u.begin--, u.end--) : e[f] !== b && "~" !== e[f] && ("~" === e[f + 1] || o[f] !== e[f] && o[f + 1] === e[f + 1]) ? (c = "insertReplacementText", w.push(e[f]), u.begin--) : "~" === e[f] ? (c = "deleteContentBackward", !r.isMask.call(t, r.translatePosition.call(t, f), !0) && o[f] !== p.radixPoint || u.end++) : f = s : (c = "insertText", w.push(e[f]), u.begin--, u.end--))
                    }
                    return {
                        action: c,
                        data: w,
                        caret: u
                    }
                }
                var t = this.inputmask,
                    p = t.opts,
                    v = t.dependencyLib,
                    i = this,
                    e = i.inputmask._valueGet(!0),
                    y = (t.isRTL ? r.getBuffer.call(t).slice().reverse() : r.getBuffer.call(t)).join(""),
                    c = r.caret.call(t, i, void 0, void 0, !0),
                    l, a;
                if (y !== e) {
                    e = w(i, e, c);
                    l = b(e, y, c);
                    switch ((i.inputmask.shadowRoot || document).activeElement !== i && i.focus(), f.writeBuffer(i, r.getBuffer.call(t)), r.caret.call(t, i, c.begin, c.end, !0), l.action) {
                        case "insertText":
                        case "insertReplacementText":
                            l.data.forEach(function(n) {
                                var r = new v.Event("keypress");
                                r.which = n.charCodeAt(0);
                                t.ignorable = !1;
                                o.keypressEvent.call(i, r)
                            });
                            setTimeout(function() {
                                t.$el.trigger("keyup")
                            }, 0);
                            break;
                        case "deleteContentBackward":
                            a = new v.Event("keydown");
                            a.keyCode = u.default.BACKSPACE;
                            o.keydownEvent.call(i, a);
                            break;
                        default:
                            f.applyInputValue(i, e)
                    }
                    n.preventDefault()
                }
            },
            compositionendEvent: function() {
                var n = this.inputmask;
                n.isComposing = !1;
                n.$el.trigger("input")
            },
            setValueEvent: function(n, t, i) {
                var e = this.inputmask,
                    o = this,
                    u = n && n.detail ? n.detail[0] : t;
                void 0 === u && (u = this.inputmask._valueGet(!0));
                f.applyInputValue(this, u);
                (n.detail && void 0 !== n.detail[1] || void 0 !== i) && r.caret.call(e, this, n.detail ? n.detail[1] : i)
            },
            focusEvent: function(n) {
                var t = this.inputmask,
                    i = t.opts,
                    s = this,
                    u = this.inputmask._valueGet();
                i.showMaskOnFocus && u !== r.getBuffer.call(t).join("") && f.writeBuffer(this, r.getBuffer.call(t), r.seekNext.call(t, r.getLastValidPosition.call(t)));
                !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || e.isComplete.call(t, r.getBuffer.call(t)) && -1 !== r.getLastValidPosition.call(t) || o.clickEvent.apply(this, [n, !0]);
                t.undoValue = r.getBuffer.call(t).join("")
            },
            invalidEvent: function() {
                this.inputmask.validationEvent = !0
            },
            mouseleaveEvent: function() {
                var n = this.inputmask,
                    t = n.opts,
                    i = this;
                n.mouseEnter = !1;
                t.clearMaskOnLostFocus && (this.inputmask.shadowRoot || document).activeElement !== this && f.HandleNativePlaceholder(this, n.originalPlaceholder)
            },
            clickEvent: function(n, t) {
                var i = this.inputmask,
                    f = this,
                    u;
                (this.inputmask.shadowRoot || document).activeElement === this && (u = r.determineNewCaretPosition.call(i, r.caret.call(i, this), t), void 0 !== u && r.caret.call(i, this, u))
            },
            cutEvent: function(n) {
                var t = this.inputmask,
                    s = t.maskset,
                    c = this,
                    i = r.caret.call(t, this),
                    h = window.clipboardData || n.clipboardData,
                    o = t.isRTL ? r.getBuffer.call(t).slice(i.end, i.begin) : r.getBuffer.call(t).slice(i.begin, i.end);
                h.setData("text", t.isRTL ? o.reverse().join("") : o.join(""));
                document.execCommand && document.execCommand("copy");
                e.handleRemove.call(t, this, u.default.DELETE, i);
                f.writeBuffer(this, r.getBuffer.call(t), s.p, n, t.undoValue !== r.getBuffer.call(t).join(""))
            },
            blurEvent: function(n) {
                var t = this.inputmask,
                    u = t.opts,
                    h = t.dependencyLib,
                    s = h(this),
                    c = this,
                    o, i;
                this.inputmask && (f.HandleNativePlaceholder(this, t.originalPlaceholder), o = this.inputmask._valueGet(), i = r.getBuffer.call(t).slice(), "" !== o && (u.clearMaskOnLostFocus && (-1 === r.getLastValidPosition.call(t) && o === r.getBufferTemplate.call(t).join("") ? i = [] : f.clearOptionalTail.call(t, i)), !1 === e.isComplete.call(t, i) && (setTimeout(function() {
                    s.trigger("incomplete")
                }, 0), u.clearIncomplete && (r.resetMaskSet.call(t), i = u.clearMaskOnLostFocus ? [] : r.getBufferTemplate.call(t).slice())), f.writeBuffer(this, i, void 0, n)), t.undoValue !== r.getBuffer.call(t).join("") && (t.undoValue = r.getBuffer.call(t).join(""), s.trigger("change")))
            },
            mouseenterEvent: function() {
                var n = this.inputmask,
                    t = n.opts,
                    i = this;
                n.mouseEnter = !0;
                (this.inputmask.shadowRoot || document).activeElement !== this && (null == n.originalPlaceholder && this.placeholder !== n.originalPlaceholder && (n.originalPlaceholder = this.placeholder), t.showMaskOnHover && f.HandleNativePlaceholder(this, (n.isRTL ? r.getBufferTemplate.call(n).slice().reverse() : r.getBufferTemplate.call(n)).join("")))
            },
            submitEvent: function() {
                var n = this.inputmask,
                    t = n.opts;
                n.undoValue !== r.getBuffer.call(n).join("") && n.$el.trigger("change");
                t.clearMaskOnLostFocus && -1 === r.getLastValidPosition.call(n) && n._valueGet && n._valueGet() === r.getBufferTemplate.call(n).join("") && n._valueSet("");
                t.clearIncomplete && !1 === e.isComplete.call(n, r.getBuffer.call(n)) && n._valueSet("");
                t.removeMaskOnSubmit && (n._valueSet(n.unmaskedvalue(), !0), setTimeout(function() {
                    f.writeBuffer(n.el, r.getBuffer.call(n))
                }, 0))
            },
            resetEvent: function() {
                var n = this.inputmask;
                n.refreshValue = !0;
                setTimeout(function() {
                    f.applyInputValue(n.el, n._valueGet(!0))
                }, 0)
            }
        };
        t.EventHandlers = o
    }, function(n, t, i) {
        "use strict";

        function e(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }
        var u;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.iphone = t.iemobile = t.mobile = t.ie = t.ua = void 0;
        u = e(i(5));
        var r = u.default.navigator && u.default.navigator.userAgent || "",
            o = 0 < r.indexOf("MSIE ") || 0 < r.indexOf("Trident/"),
            s = "ontouchstart" in u.default,
            f = /iemobile/i.test(r),
            h = /iphone/i.test(r) && !f;
        t.iphone = h;
        t.iemobile = f;
        t.mobile = s;
        t.ie = o;
        t.ua = r
    }, function(n, t, i) {
        "use strict";

        function f(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }

        function r(n) {
            return n instanceof r ? n : this instanceof r ? void(null != n && n !== e.default && (this[0] = n.nodeName ? n : void 0 !== n[0] && n[0].nodeName ? n[0] : o.querySelector(n), void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new r(n)
        }
        var o, s;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        var h = f(i(13)),
            e = f(i(5)),
            c = f(i(19)),
            u = i(20);
        o = e.default.document;
        r.prototype = {
            on: u.on,
            off: u.off,
            trigger: u.trigger
        };
        r.extend = h.default;
        r.data = c.default;
        r.Event = u.Event;
        s = r;
        t.default = s
    }, function(n, t, i) {
        "use strict";

        function c(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }

        function l() {
            function y(n, i) {
                function l(n) {
                    function a(n) {
                        if (c.valHooks && (void 0 === c.valHooks[n] || !0 !== c.valHooks[n].inputmaskpatch)) {
                            var r = c.valHooks[n] && c.valHooks[n].get ? c.valHooks[n].get : function(n) {
                                    return n.value
                                },
                                u = c.valHooks[n] && c.valHooks[n].set ? c.valHooks[n].set : function(n, t) {
                                    return n.value = t, n
                                };
                            c.valHooks[n] = {
                                get: function(n) {
                                    if (n.inputmask) {
                                        if (n.inputmask.opts.autoUnmask) return n.inputmask.unmaskedvalue();
                                        var u = r(n);
                                        return -1 !== f.getLastValidPosition.call(t, void 0, void 0, n.inputmask.maskset.validPositions) || !0 !== i.nullable ? u : ""
                                    }
                                    return r(n)
                                },
                                set: function(n, t) {
                                    var i = u(n, t);
                                    return n.inputmask && e.applyInputValue(n, t), i
                                },
                                inputmaskpatch: !0
                            }
                        }
                    }

                    function h() {
                        return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== f.getLastValidPosition.call(t) || !0 !== i.nullable ? (this.inputmask.shadowRoot || document.activeElement) === this && i.clearMaskOnLostFocus ? (t.isRTL ? e.clearOptionalTail.call(t, f.getBuffer.call(t).slice()).reverse() : e.clearOptionalTail.call(t, f.getBuffer.call(t).slice())).join("") : u.call(this) : "" : u.call(this)
                    }

                    function l(n) {
                        o.call(this, n);
                        this.inputmask && e.applyInputValue(this, n)
                    }

                    function v(n) {
                        r.EventRuler.on(n, "mouseenter", function() {
                            var i = this,
                                n = this.inputmask._valueGet(!0);
                            n !== (t.isRTL ? f.getBuffer.call(t).reverse() : f.getBuffer.call(t)).join("") && e.applyInputValue(this, n)
                        })
                    }
                    var u, o, s;
                    n.inputmask.__valueGet || (!0 !== i.noValuePatching && (Object.getOwnPropertyDescriptor ? (s = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(n), "value") : void 0, s && s.get && s.set ? (u = s.get, o = s.set, Object.defineProperty(n, "value", {
                        get: h,
                        set: l,
                        configurable: !0
                    })) : "input" !== n.tagName.toLowerCase() && (u = function() {
                        return this.textContent
                    }, o = function(n) {
                        this.textContent = n
                    }, Object.defineProperty(n, "value", {
                        get: h,
                        set: l,
                        configurable: !0
                    }))) : document.__lookupGetter__ && n.__lookupGetter__("value") && (u = n.__lookupGetter__("value"), o = n.__lookupSetter__("value"), n.__defineGetter__("value", h), n.__defineSetter__("value", l)), n.inputmask.__valueGet = u, n.inputmask.__valueSet = o), n.inputmask._valueGet = function(n) {
                        return t.isRTL && !0 !== n ? u.call(this.el).split("").reverse().join("") : u.call(this.el)
                    }, n.inputmask._valueSet = function(n, i) {
                        o.call(this.el, null == n ? "" : !0 !== i && t.isRTL ? n.split("").reverse().join("") : n)
                    }, void 0 === u && (u = function() {
                        return this.value
                    }, o = function(n) {
                        this.value = n
                    }, a(n.type), v(n)))
                }
                var h, u, o;
                return "textarea" !== n.tagName.toLowerCase() && i.ignorables.push(s.default.ENTER), h = n.getAttribute("type"), u = "input" === n.tagName.toLowerCase() && i.supportsInputType.includes(h) || n.isContentEditable || "textarea" === n.tagName.toLowerCase(), u || ("input" === n.tagName.toLowerCase() ? (o = document.createElement("input"), o.setAttribute("type", h), u = "text" === o.type, o = null) : u = "partial"), !1 !== u ? l(n) : n.inputmask = void 0, u
            }
            var t = this,
                i = this.opts,
                n = this.el,
                c = this.dependencyLib,
                v, l, a;
            r.EventRuler.off(n);
            v = y(n, i);
            !1 !== v && (t.originalPlaceholder = n.placeholder, t.maxLength = void 0 !== n ? n.maxLength : void 0, -1 === t.maxLength && (t.maxLength = void 0), "inputMode" in n && null === n.getAttribute("inputmode") && (n.inputMode = i.inputmode, n.setAttribute("inputmode", i.inputmode)), !0 === v && (i.showMaskOnFocus = i.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(n.autocomplete), o.iphone && (i.insertModeVisual = !1), r.EventRuler.on(n, "submit", u.EventHandlers.submitEvent), r.EventRuler.on(n, "reset", u.EventHandlers.resetEvent), r.EventRuler.on(n, "blur", u.EventHandlers.blurEvent), r.EventRuler.on(n, "focus", u.EventHandlers.focusEvent), r.EventRuler.on(n, "invalid", u.EventHandlers.invalidEvent), r.EventRuler.on(n, "click", u.EventHandlers.clickEvent), r.EventRuler.on(n, "mouseleave", u.EventHandlers.mouseleaveEvent), r.EventRuler.on(n, "mouseenter", u.EventHandlers.mouseenterEvent), r.EventRuler.on(n, "paste", u.EventHandlers.pasteEvent), r.EventRuler.on(n, "cut", u.EventHandlers.cutEvent), r.EventRuler.on(n, "complete", i.oncomplete), r.EventRuler.on(n, "incomplete", i.onincomplete), r.EventRuler.on(n, "cleared", i.oncleared), !0 !== i.inputEventOnly && (r.EventRuler.on(n, "keydown", u.EventHandlers.keydownEvent), r.EventRuler.on(n, "keypress", u.EventHandlers.keypressEvent), r.EventRuler.on(n, "keyup", u.EventHandlers.keyupEvent)), (o.mobile || i.inputEventOnly) && n.removeAttribute("maxLength"), r.EventRuler.on(n, "input", u.EventHandlers.inputFallBackEvent), r.EventRuler.on(n, "compositionend", u.EventHandlers.compositionendEvent)), r.EventRuler.on(n, "setvalue", u.EventHandlers.setValueEvent), t.undoValue = f.getBufferTemplate.call(t).join(""), l = (n.inputmask.shadowRoot || document).activeElement, ("" !== n.inputmask._valueGet(!0) || !1 === i.clearMaskOnLostFocus || l === n) && (e.applyInputValue(n, n.inputmask._valueGet(!0), i), a = f.getBuffer.call(t).slice(), !1 === h.isComplete.call(t, a) && i.clearIncomplete && f.resetMaskSet.call(t), i.clearMaskOnLostFocus && l !== n && (-1 === f.getLastValidPosition.call(t) ? a = [] : e.clearOptionalTail.call(t, a)), (!1 === i.clearMaskOnLostFocus || i.showMaskOnFocus && l === n || "" !== n.inputmask._valueGet(!0)) && e.writeBuffer(n, a), l === n && f.caret.call(t, n, f.seekNext.call(t, f.getLastValidPosition.call(t)))))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.mask = l;
        var s = c(i(0)),
            f = i(1),
            e = i(7),
            r = i(12),
            o = i(9),
            h = i(4),
            u = i(8)
    }, function(n, t, i) {
        "use strict";

        function f(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }
        var e;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.EventRuler = void 0;
        var o = f(i(2)),
            r = f(i(0)),
            u = i(1),
            s = i(7);
        e = {
            on: function(n, t, i) {
                var f = n.inputmask.dependencyLib,
                    e = function(t) {
                        var c, l;
                        t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                        var h = this,
                            a, e = h.inputmask,
                            v = e ? e.opts : void 0;
                        if (void 0 === e && "FORM" !== this.nodeName) c = f.data(h, "_inputmask_opts"), f(h).off(), c && new o.default(c).mask(h);
                        else {
                            if (["submit", "reset", "setvalue"].includes(t.type) || "FORM" === this.nodeName || !(h.disabled || h.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === v.tabThrough && t.keyCode === r.default.TAB))) {
                                switch (t.type) {
                                    case "input":
                                        if (!0 === e.skipInputEvent || t.inputType && "insertCompositionText" === t.inputType) return e.skipInputEvent = !1, t.preventDefault();
                                        break;
                                    case "keydown":
                                        e.skipKeyPressEvent = !1;
                                        e.skipInputEvent = e.isComposing = t.keyCode === r.default.KEY_229;
                                        break;
                                    case "keyup":
                                    case "compositionend":
                                        e.isComposing && (e.skipInputEvent = !1);
                                        break;
                                    case "keypress":
                                        if (!0 === e.skipKeyPressEvent) return t.preventDefault();
                                        e.skipKeyPressEvent = !0;
                                        break;
                                    case "click":
                                    case "focus":
                                        return e.validationEvent ? (e.validationEvent = !1, n.blur(), s.HandleNativePlaceholder(n, (e.isRTL ? u.getBufferTemplate.call(e).slice().reverse() : u.getBufferTemplate.call(e)).join("")), setTimeout(function() {
                                            n.focus()
                                        }, 3e3)) : (a = arguments, setTimeout(function() {
                                            n.inputmask && i.apply(h, a)
                                        }, 0)), !1
                                }
                                return l = i.apply(h, arguments), !1 === l && (t.preventDefault(), t.stopPropagation()), l
                            }
                            t.preventDefault()
                        }
                    };
                n.inputmask.events[t] = n.inputmask.events[t] || [];
                n.inputmask.events[t].push(e);
                ["submit", "reset"].includes(t) ? null !== n.form && f(n.form).on(t, e.bind(n)) : f(n).on(t, e)
            },
            off: function(n, t) {
                var u, r, i, f, e;
                if (n.inputmask && n.inputmask.events) {
                    u = n.inputmask.dependencyLib;
                    r = n.inputmask.events;
                    for (i in t && (r = [], r[t] = n.inputmask.events[t]), r) {
                        for (f = r[i]; 0 < f.length;) e = f.pop(), ["submit", "reset"].includes(i) ? null !== n.form && u(n.form).off(i, e) : u(n).off(i, e);
                        delete n.inputmask.events[i]
                    }
                }
            }
        };
        t.EventRuler = e
    }, function(n, t) {
        "use strict";

        function i(n) {
            return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, i(n)
        }

        function r() {
            var o, f, u, t, s, c, n = arguments[0] || {},
                e = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof n && (h = n, n = arguments[e] || {}, e++), "object" !== i(n) && "function" != typeof n && (n = {}); e < l; e++)
                if (null != (o = arguments[e]))
                    for (f in o) u = n[f], t = o[f], n !== t && (h && t && ("[object Object]" === Object.prototype.toString.call(t) || (s = Array.isArray(t))) ? (c = s ? (s = !1, u && Array.isArray(u) ? u : []) : u && "[object Object]" === Object.prototype.toString.call(u) ? u : {}, n[f] = r(h, c, t)) : void 0 !== t && (n[f] = t));
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = r
    }, function(n, t) {
        "use strict";

        function r(n) {
            return n.replace(i, "\\$1")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = r;
        var i = new RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^)", "gim")
    }, function(n, t, i) {
        "use strict";

        function f(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }
        var r, u;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        i(16);
        i(24);
        i(25);
        i(26);
        r = f(i(2));
        u = r.default;
        t.default = u
    }, function(n, t, i) {
        "use strict";

        function e(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }

        function r(n, t, i) {
            return n = -1 < i - 1 && "." !== t.buffer[i - 1] ? (n = t.buffer[i - 1] + n, -1 < i - 2 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + n : "0" + n) : "00" + n, f.test(n)
        }
        var u = e(i(2)),
            f;
        u.default.extendDefinitions({
            A: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
            }
        });
        f = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
        u.default.extendAliases({
            cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
            },
            url: {
                regex: "(https?|ftp)://.*",
                autoUnmask: !1,
                keepStatic: !1,
                tabThrough: !0
            },
            ip: {
                mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
                definitions: {
                    i: {
                        validator: r
                    },
                    j: {
                        validator: r
                    },
                    k: {
                        validator: r
                    },
                    l: {
                        validator: r
                    }
                },
                onUnMask: function(n) {
                    return n
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                casing: "lower",
                onBeforePaste: function(n) {
                    return n = n.toLowerCase(), n.replace("mailto:", "")
                },
                definitions: {
                    "*": {
                        validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]"
                    }
                },
                onUnMask: function(n) {
                    return n
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            },
            ssn: {
                mask: "999-99-9999",
                postValidation: function(n) {
                    return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(n.join(""))
                }
            }
        })
    }, function() {
        "use strict";

        function n(t) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, n(t)
        }
        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === n("test".__proto__) ? function(n) {
            return n.__proto__
        } : function(n) {
            return n.constructor.prototype
        })
    }, function() {
        "use strict";
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(n, t) {
                var f, i, r, u;
                if (null == this) throw new TypeError('"this" is null or not defined');
                if (f = Object(this), i = f.length >>> 0, 0 == i) return !1;
                for (r = 0 | t, u = Math.max(0 <= r ? r : i - Math.abs(r), 0); u < i;) {
                    if (f[u] === n) return !0;
                    u++
                }
                return !1
            }
        })
    }, function(n, t) {
        "use strict";

        function i(n, t, i) {
            if (void 0 === i) return n.__data ? n.__data[t] : null;
            n.__data = n.__data || {};
            n.__data[t] = i
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = i
    }, function(n, t, i) {
        "use strict";

        function u(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }

        function e(n) {
            return n instanceof Element
        }

        function c(n, t) {
            function s(n, u) {
                r.addEventListener ? r.addEventListener(n, t, !1) : r.attachEvent && r.attachEvent("on" + n, t);
                i[n] = i[n] || {};
                i[n][u] = i[n][u] || [];
                i[n][u].push(t)
            }
            if (e(this[0]))
                for (var i = this[0].eventRegistry, r = this[0], f = n.split(" "), u = 0; u < f.length; u++) {
                    var o = f[u].split("."),
                        h = o[0],
                        c = o[1] || "global";
                    s(h, c)
                }
            return this
        }

        function l(n, t) {
            function c(n, t, u) {
                if (n in i == !0)
                    if (r.removeEventListener ? r.removeEventListener(n, u, !1) : r.detachEvent && r.detachEvent("on" + n, u), "global" === t)
                        for (var f in i[n]) i[n][f].splice(i[n][f].indexOf(u), 1);
                    else i[n][t].splice(i[n][t].indexOf(u), 1)
            }

            function l(n, r) {
                var o = [],
                    u, s, f, e;
                if (0 < n.length)
                    if (void 0 === t)
                        for (u = 0, s = i[n][r].length; u < s; u++) o.push({
                            ev: n,
                            namespace: r && 0 < r.length ? r : "global",
                            handler: i[n][r][u]
                        });
                    else o.push({
                        ev: n,
                        namespace: r && 0 < r.length ? r : "global",
                        handler: t
                    });
                else if (0 < r.length)
                    for (f in i)
                        for (e in i[f])
                            if (e === r)
                                if (void 0 === t)
                                    for (u = 0, s = i[f][e].length; u < s; u++) o.push({
                                        ev: f,
                                        namespace: e,
                                        handler: i[f][e][u]
                                    });
                                else o.push({
                                    ev: f,
                                    namespace: e,
                                    handler: t
                                });
                return o
            }
            var i, r, s, f;
            if (e(this[0]))
                for (i = this[0].eventRegistry, r = this[0], s = n.split(" "), f = 0; f < s.length; f++)
                    for (var h = s[f].split("."), o = l(h[0], h[1]), u = 0, a = o.length; u < a; u++) c(o[u].ev, o[u].namespace, o[u].handler);
            return this
        }

        function a(n) {
            var t, r, f, a;
            if (e(this[0]))
                for (var u = this[0].eventRegistry, h = this[0], v = "string" == typeof n ? n.split(" ") : [n.type], l = 0; l < v.length; l++) {
                    var y = v[l].split("."),
                        i = y[0],
                        c = y[1] || "global";
                    if (void 0 !== document && "global" === c)
                        if (f = {
                                bubbles: !0,
                                cancelable: !0,
                                detail: arguments[1]
                            }, document.createEvent) {
                            try {
                                t = new CustomEvent(i, f)
                            } catch (p) {
                                t = document.createEvent("CustomEvent");
                                t.initCustomEvent(i, f.bubbles, f.cancelable, f.detail)
                            }
                            n.type && o.default(t, n);
                            h.dispatchEvent(t)
                        } else t = document.createEventObject(), t.eventType = i, t.detail = arguments[1], n.type && o.default(t, n), h.fireEvent("on" + t.eventType, t);
                    else if (void 0 !== u[i])
                        if (arguments[0] = arguments[0].type ? arguments[0] : s.default.Event(arguments[0]), arguments[0].detail = arguments.slice(1), "global" === c)
                            for (a in u[i])
                                for (r = 0; r < u[i][a].length; r++) u[i][a][r].apply(h, arguments);
                        else
                            for (r = 0; r < u[i][c].length; r++) u[i][c][r].apply(h, arguments)
                }
            return this
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.on = c;
        t.off = l;
        t.trigger = a;
        t.Event = void 0;
        var o = u(i(13)),
            f = u(i(5)),
            s = u(i(10)),
            h = u(i(6)),
            r;
        t.Event = r;
        "function" == typeof f.default.CustomEvent ? t.Event = r = f.default.CustomEvent : h.default && (t.Event = r = function(n, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(n, t.bubbles, t.cancelable, t.detail), i
        }, r.prototype = f.default.Event.prototype)
    }, function(n, t, i) {
        "use strict";

        function u(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }

        function f(n, t) {
            function u(n, i, u) {
                var e = !1,
                    o, f, s;
                return (null !== n && "" !== n || (e = null !== u.regex, n = e ? (n = u.regex, n.replace(/^(\^)(.*)(\$)$/, "$2")) : (e = !0, ".*")), 1 === n.length && !1 === u.greedy && 0 !== u.repeat && (u.placeholder = ""), 0 < u.repeat || "*" === u.repeat || "+" === u.repeat) && (s = "*" === u.repeat ? 0 : "+" === u.repeat ? 1 : u.repeat, n = u.groupmarker[0] + n + u.groupmarker[1] + u.quantifiermarker[0] + s + "," + u.repeat + u.quantifiermarker[1]), f = e ? "regex_" + u.regex : u.numericInput ? n.split("").reverse().join("") : n, !1 !== u.keepStatic && (f = "ks_" + f), void 0 === Inputmask.prototype.masksCache[f] || !0 === t ? (o = {
                    mask: n,
                    maskToken: Inputmask.prototype.analyseMask(n, e, u),
                    validPositions: {},
                    _buffer: void 0,
                    buffer: void 0,
                    tests: {},
                    excludes: {},
                    metadata: i,
                    maskLength: void 0,
                    jitOffset: {}
                }, !0 !== t && (Inputmask.prototype.masksCache[f] = o, o = r.default.extend(!0, {}, Inputmask.prototype.masksCache[f]))) : o = r.default.extend(!0, {}, Inputmask.prototype.masksCache[f]), o
            }
            var f, i;
            if ("function" == typeof n.mask && (n.mask = n.mask(n)), Array.isArray(n.mask)) {
                if (1 < n.mask.length) return null === n.keepStatic && (n.keepStatic = !0), i = n.groupmarker[0], (n.isRTL ? n.mask.reverse() : n.mask).forEach(function(t) {
                    1 < i.length && (i += n.groupmarker[1] + n.alternatormarker + n.groupmarker[0]);
                    i += void 0 !== t.mask && "function" != typeof t.mask ? t.mask : t
                }), i += n.groupmarker[1], u(i, n.mask, n);
                n.mask = n.mask.pop()
            }
            return null === n.keepStatic && (n.keepStatic = !1), f = n.mask && void 0 !== n.mask.mask && "function" != typeof n.mask.mask ? u(n.mask.mask, n.mask, n) : u(n.mask, n.mask, n), f
        }

        function e(n, t, i) {
            function a(n, t, i, r) {
                this.matches = [];
                this.openGroup = n || !1;
                this.alternatorGroup = !1;
                this.isGroup = n || !1;
                this.isOptional = t || !1;
                this.isQuantifier = i || !1;
                this.isAlternator = r || !1;
                this.quantifier = {
                    min: 1,
                    max: 1
                }
            }

            function b(n, r, u) {
                var f, e;
                u = void 0 !== u ? u : n.matches.length;
                f = n.matches[u - 1];
                t ? (0 === r.indexOf("[") || h && /\\d|\\s|\\w]/i.test(r) || "." === r ? n.matches.splice(u++, 0, {
                    fn: new RegExp(r, i.casing ? "i" : ""),
                    "static": !1,
                    optionality: !1,
                    newBlockMarker: void 0 === f ? "master" : f.def !== r,
                    casing: null,
                    def: r,
                    placeholder: void 0,
                    nativeDef: r
                }) : (h && (r = r[r.length - 1]), r.split("").forEach(function(t) {
                    f = n.matches[u - 1];
                    n.matches.splice(u++, 0, {
                        fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                        "static": !0,
                        optionality: !1,
                        newBlockMarker: void 0 === f ? "master" : f.def !== t && !0 !== f.static,
                        casing: null,
                        def: i.staticDefinitionSymbol || t,
                        placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                        nativeDef: (h ? "'" : "") + t
                    })
                })), h = !1) : (e = i.definitions && i.definitions[r] || i.usePrototypeDefinitions && Inputmask.prototype.definitions[r], e && !h ? n.matches.splice(u++, 0, {
                    fn: e.validator ? "string" == typeof e.validator ? new RegExp(e.validator, i.casing ? "i" : "") : new function() {
                        this.test = e.validator
                    } : new RegExp("."),
                    "static": e.static || !1,
                    optionality: !1,
                    newBlockMarker: void 0 === f ? "master" : f.def !== (e.definitionSymbol || r),
                    casing: e.casing,
                    def: e.definitionSymbol || r,
                    placeholder: e.placeholder,
                    nativeDef: r,
                    generated: e.generated
                }) : (n.matches.splice(u++, 0, {
                    fn: /[a-z]/i.test(i.staticDefinitionSymbol || r) ? new RegExp("[" + (i.staticDefinitionSymbol || r) + "]", i.casing ? "i" : "") : null,
                    "static": !0,
                    optionality: !1,
                    newBlockMarker: void 0 === f ? "master" : f.def !== r && !0 !== f.static,
                    casing: null,
                    def: i.staticDefinitionSymbol || r,
                    placeholder: void 0 !== i.staticDefinitionSymbol ? r : void 0,
                    nativeDef: (h ? "'" : "") + r
                }), h = !1))
            }

            function ft(n) {
                n && n.matches && n.matches.forEach(function(r, u) {
                    var f = n.matches[u + 1];
                    (void 0 === f || void 0 === f.matches || !1 === f.isQuantifier) && r && r.isGroup && (r.isGroup = !1, t || (b(r, i.groupmarker[0], 0), !0 !== r.openGroup && b(r, i.groupmarker[1])));
                    ft(r)
                })
            }

            function p() {
                if (0 < r.length) {
                    if (f = r[r.length - 1], b(f, s), f.isAlternator) {
                        u = r.pop();
                        for (var n = 0; n < u.matches.length; n++) u.matches[n].isGroup && (u.matches[n].isGroup = !1);
                        0 < r.length ? (f = r[r.length - 1], f.matches.push(u)) : e.matches.push(u)
                    }
                } else b(e, s)
            }

            function et(n) {
                function f(n) {
                    return n === i.optionalmarker[0] ? n = i.optionalmarker[1] : n === i.optionalmarker[1] ? n = i.optionalmarker[0] : n === i.groupmarker[0] ? n = i.groupmarker[1] : n === i.groupmarker[1] && (n = i.groupmarker[0]), n
                }
                var t, r, u;
                for (t in n.matches = n.matches.reverse(), n.matches) Object.prototype.hasOwnProperty.call(n.matches, t) && (r = parseInt(t), n.matches[t].isQuantifier && n.matches[r + 1] && n.matches[r + 1].isGroup && (u = n.matches[t], n.matches.splice(t, 1), n.matches.splice(r + 1, 0, u)), n.matches[t] = void 0 !== n.matches[t].matches ? et(n.matches[t]) : f(n.matches[t]));
                return n
            }

            function g(n) {
                var t = new a(!0);
                return t.openGroup = !1, t.matches = n, t
            }

            function ot() {
                if (v = r.pop(), v.openGroup = !1, void 0 !== v)
                    if (0 < r.length) {
                        if (f = r[r.length - 1], f.matches.push(v), f.isAlternator) {
                            u = r.pop();
                            for (var n = 0; n < u.matches.length; n++) u.matches[n].isGroup = !1, u.matches[n].alternatorGroup = !1;
                            0 < r.length ? (f = r[r.length - 1], f.matches.push(u)) : e.matches.push(u)
                        }
                    } else e.matches.push(v);
                else p()
            }

            function st(n) {
                var t = n.pop();
                return t.isQuantifier && (t = g([n.pop(), t])), t
            }
            var at = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                vt = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                h = !1,
                e = new a,
                o, s, r = [],
                d = [],
                v, f, u, c, ut = !1,
                nt, tt, l, it, lt, k, rt;
            for (t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0); o = t ? vt.exec(n) : at.exec(n);) {
                if (s = o[0], t) switch (s.charAt(0)) {
                    case "?":
                        s = "{0,1}";
                        break;
                    case "+":
                    case "*":
                        s = "{" + s + "}";
                        break;
                    case "|":
                        0 === r.length && (nt = g(e.matches), nt.openGroup = !0, r.push(nt), e.matches = [], ut = !0)
                }
                if (h) p();
                else switch (s.charAt(0)) {
                    case "$":
                    case "^":
                        t || p();
                        break;
                    case "(?=":
                        break;
                    case "(?!":
                        break;
                    case "(?<=":
                        break;
                    case "(?<!":
                        break;
                    case i.escapeChar:
                        h = !0;
                        t && p();
                        break;
                    case i.optionalmarker[1]:
                    case i.groupmarker[1]:
                        ot();
                        break;
                    case i.optionalmarker[0]:
                        r.push(new a(!1, !0));
                        break;
                    case i.groupmarker[0]:
                        r.push(new a(!0));
                        break;
                    case i.quantifiermarker[0]:
                        tt = new a(!1, !1, !0);
                        s = s.replace(/[{}]/g, "");
                        var ht = s.split("|"),
                            y = ht[0].split(","),
                            w = isNaN(y[0]) ? y[0] : parseInt(y[0]),
                            ct = 1 === y.length ? w : isNaN(y[1]) ? y[1] : parseInt(y[1]);
                        "*" !== w && "+" !== w || (w = "*" === ct ? 0 : 1);
                        tt.quantifier = {
                            min: w,
                            max: ct,
                            jit: ht[1]
                        };
                        l = 0 < r.length ? r[r.length - 1].matches : e.matches;
                        (o = l.pop(), o.isAlternator) && (l.push(o), l = o.matches, it = new a(!0), lt = l.pop(), l.push(it), l = it.matches, o = lt);
                        o.isGroup || (o = g([o]));
                        l.push(o);
                        l.push(tt);
                        break;
                    case i.alternatormarker:
                        0 < r.length ? (f = r[r.length - 1], k = f.matches[f.matches.length - 1], c = f.openGroup && (void 0 === k.matches || !1 === k.isGroup && !1 === k.isAlternator) ? r.pop() : st(f.matches)) : c = st(e.matches);
                        c.isAlternator ? r.push(c) : (c.alternatorGroup ? (u = r.pop(), c.alternatorGroup = !1) : u = new a(!1, !1, !1, !0), u.matches.push(c), r.push(u), c.openGroup) && (c.openGroup = !1, rt = new a(!0), rt.alternatorGroup = !0, r.push(rt));
                        break;
                    default:
                        p()
                }
            }
            for (ut && ot(); 0 < r.length;) v = r.pop(), e.matches.push(v);
            return 0 < e.matches.length && (ft(e), d.push(e)), (i.numericInput || i.isRTL) && et(d[0]), d
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.generateMaskSet = f;
        t.analyseMask = e;
        var r = u(i(10))
    }, function(n, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        t.default = {
            9: {
                validator: "[0-9０-９]",
                definitionSymbol: "*"
            },
            a: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                definitionSymbol: "*"
            },
            "*": {
                validator: "[0-9０-９A-Za-zА-яЁёÀ-ÿµ]"
            }
        }
    }, function(n, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = void 0;
        var i = {
            _maxTestPos: 500,
            placeholder: "_",
            optionalmarker: ["[", "]"],
            quantifiermarker: ["{", "}"],
            groupmarker: ["(", ")"],
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: function() {},
            onincomplete: function() {},
            oncleared: function() {},
            repeat: 0,
            greedy: !1,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            insertModeVisual: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: function() {},
            onBeforeMask: null,
            onBeforePaste: function(n, t) {
                return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, n, t) : n
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: function() {},
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            _radixDance: !1,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ["text", "tel", "url", "password", "search"],
            ignorables: [8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
            isComplete: null,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: void 0,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "text",
            importDataAttributes: !0,
            shiftPositions: !0,
            usePrototypeDefinitions: !0
        };
        t.default = i
    }, function(n, t, i) {
        "use strict";

        function h(n) {
            return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, h(n)
        }

        function c(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }

        function v(n) {
            var i = new RegExp("\\d+$").exec(n[0]),
                t;
            return i && void 0 !== i[0] ? (t = r[n[0][0] + "x"].slice(""), t[0] = t[0](i[0]), t[3] = t[3](i[0]), t) : r[n[0]] ? r[n[0]] : void 0
        }

        function f(n) {
            var u, t, i, f;
            if (!n.tokenizer) {
                u = [];
                t = [];
                for (i in r) /\.*x$/.test(i) ? (f = i[0] + "\\d+", -1 === t.indexOf(f) && t.push(f)) : -1 === u.indexOf(i[0]) && u.push(i[0]);
                n.tokenizer = "(" + (0 < t.length ? t.join("|") + "|" : "") + u.join("+|") + ")+?|.";
                n.tokenizer = new RegExp(n.tokenizer, "g")
            }
            return n.tokenizer
        }

        function d(n, t, i) {
            if (void 0 === n.rawday || !isFinite(n.rawday) && new Date(n.date.getFullYear(), isFinite(n.rawmonth) ? n.month : n.date.getMonth() + 1, 0).getDate() >= n.day || "29" == n.day && !isFinite(n.rawyear) || new Date(n.date.getFullYear(), isFinite(n.rawmonth) ? n.month : n.date.getMonth() + 1, 0).getDate() >= n.day) return t;
            if ("29" == n.day) {
                var r = e(t.pos, i);
                if ("yyyy" === r.targetMatch[0] && t.pos - r.targetMatchIndex == 2) return t.remove = t.pos + 1, t
            } else if ("02" == n.month && "30" == n.day) return n.day = "03", n.date.setDate(3), n.date.setMonth(1), t.insert = [{
                pos: t.pos,
                c: "0"
            }, {
                pos: t.pos + 1,
                c: t.c
            }], t.caret = b.seekNext.call(this, t.pos + 1), t;
            return !1
        }

        function g(n, t, i, r, u) {
            var f, o, h, s;
            if (!t) return t;
            if (i.min) {
                if (n.rawyear && (f = n.rawyear.replace(/[^0-9]/g, ""), o = i.min.year.substr(0, f.length), f < o)) {
                    if (s = e(t.pos, i), f = n.rawyear.substr(0, t.pos - s.targetMatchIndex + 1).replace(/[^0-9]/g, "0"), o = i.min.year.substr(0, f.length), o <= f) return t.remove = s.targetMatchIndex + f.length, t;
                    if (f = "yyyy" === s.targetMatch[0] ? n.rawyear.substr(1, 1) : n.rawyear.substr(0, 1), o = i.min.year.substr(2, 1), h = i.max ? i.max.year.substr(2, 1) : f, 1 === f.length && o <= f && f <= h && !0 !== u) return "yyyy" === s.targetMatch[0] ? (t.insert = [{
                        pos: t.pos + 1,
                        c: f,
                        strict: !0
                    }], t.caret = t.pos + 2, r.validPositions[t.pos].input = i.min.year[1]) : (t.insert = [{
                        pos: t.pos + 1,
                        c: i.min.year[1],
                        strict: !0
                    }, {
                        pos: t.pos + 2,
                        c: f,
                        strict: !0
                    }], t.caret = t.pos + 3, r.validPositions[t.pos].input = i.min.year[0]), t;
                    t = !1
                }
                t && n.year && n.year === n.rawyear && i.min.date.getTime() == i.min.date.getTime() && (t = i.min.date.getTime() <= n.date.getTime())
            }
            return t && i.max && i.max.date.getTime() == i.max.date.getTime() && (t = i.max.date.getTime() >= n.date.getTime()), t
        }

        function o(n, t, i, r) {
            var u = "",
                e, o, s;
            for (f(i).lastIndex = 0; e = f(i).exec(n);)
                if (void 0 === t)
                    if (o = v(e)) u += "(" + o[0] + ")";
                    else switch (e[0]) {
                        case "[":
                            u += "(";
                            break;
                        case "]":
                            u += ")?";
                            break;
                        default:
                            u += w.default(e[0])
                    } else(o = v(e)) ? !0 !== r && o[3] ? (s = o[3], u += s.call(t.date)) : u += o[2] ? t["raw" + o[2]] : e[0] : u += e[0];
            return u
        }

        function u(n, t) {
            for (n = String(n), t = t || 2; n.length < t;) n = "0" + n;
            return n
        }

        function s(n, t, i) {
            function b(n, t) {
                if (n[o] = t.replace(/[^0-9]/g, "0"), n["raw" + o] = t, void 0 !== a) {
                    var i = n[o];
                    "day" === o && 0 === parseInt(i) && (i = 1);
                    "month" === o && (i = parseInt(i), 0 < i) && (i -= 1);
                    a.call(n.date, i)
                }
            }
            var v = {
                    date: new Date(1, 0, 1)
                },
                o, u = n,
                s, a, p, w;
            if ("string" == typeof u) {
                for (f(i).lastIndex = 0; s = f(i).exec(t);) {
                    var y = new RegExp("\\d+$").exec(s[0]),
                        c = y ? s[0][0] + "x" : s[0],
                        l = void 0;
                    y ? (p = f(i).lastIndex, w = e(s.index, i), f(i).lastIndex = p, l = u.slice(0, u.indexOf(w.nextMatch[0]))) : l = u.slice(0, c.length);
                    Object.prototype.hasOwnProperty.call(r, c) && (o = r[c][2], a = r[c][1], b(v, l, i));
                    u = u.slice(l.length)
                }
                return v
            }
            if (u && "object" === h(u) && Object.prototype.hasOwnProperty.call(u, "date")) return u
        }

        function y(n, t) {
            return o(t.inputFormat, {
                date: n
            }, t)
        }

        function e(n, t) {
            var r = 0,
                o, i, u = 0,
                e;
            for (f(t).lastIndex = 0; i = f(t).exec(t.inputFormat);)
                if (e = new RegExp("\\d+$").exec(i[0]), u = e ? parseInt(e[0]) : i[0].length, r += u, n <= r) {
                    o = i;
                    i = f(t).exec(t.inputFormat);
                    break
                } return {
                targetMatchIndex: r - u,
                nextMatch: i,
                targetMatch: o
            }
        }
        var a = c(i(2)),
            p = c(i(0)),
            w = c(i(14)),
            b = i(1),
            k = a.default.dependencyLib,
            nt = (new Date).getFullYear(),
            r = {
                d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
                dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                    return u(Date.prototype.getDate.call(this), 2)
                }],
                ddd: [""],
                dddd: [""],
                m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                    return Date.prototype.getMonth.call(this) + 1
                }],
                mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                    return u(Date.prototype.getMonth.call(this) + 1, 2)
                }],
                mmm: [""],
                mmmm: [""],
                yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                    return u(Date.prototype.getFullYear.call(this), 2)
                }],
                yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                    return u(Date.prototype.getFullYear.call(this), 4)
                }],
                h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
                hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                    return u(Date.prototype.getHours.call(this), 2)
                }],
                hx: [function(n) {
                    return "[0-9]{".concat(n, "}")
                }, Date.prototype.setHours, "hours", function() {
                    return Date.prototype.getHours
                }],
                H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
                HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                    return u(Date.prototype.getHours.call(this), 2)
                }],
                Hx: [function(n) {
                    return "[0-9]{".concat(n, "}")
                }, Date.prototype.setHours, "hours", function(n) {
                    return function() {
                        return u(Date.prototype.getHours.call(this), n)
                    }
                }],
                M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
                MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                    return u(Date.prototype.getMinutes.call(this), 2)
                }],
                s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
                ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                    return u(Date.prototype.getSeconds.call(this), 2)
                }],
                l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                    return u(Date.prototype.getMilliseconds.call(this), 3)
                }],
                L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                    return u(Date.prototype.getMilliseconds.call(this), 2)
                }],
                t: ["[ap]"],
                tt: ["[ap]m"],
                T: ["[AP]"],
                TT: ["[AP]M"],
                Z: [""],
                o: [""],
                S: [""]
            },
            l = {
                isoDate: "yyyy-mm-dd",
                isoTime: "HH:MM:ss",
                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
            };
        a.default.extendAliases({
            datetime: {
                mask: function(n) {
                    return n.numericInput = !1, r.S = n.i18n.ordinalSuffix.join("|"), n.inputFormat = l[n.inputFormat] || n.inputFormat, n.displayFormat = l[n.displayFormat] || n.displayFormat || n.inputFormat, n.outputFormat = l[n.outputFormat] || n.outputFormat || n.inputFormat, n.placeholder = "" !== n.placeholder ? n.placeholder : n.inputFormat.replace(/[[\]]/, ""), n.regex = o(n.inputFormat, void 0, n), n.min = s(n.min, n.inputFormat, n), n.max = s(n.max, n.inputFormat, n), null
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: void 0,
                outputFormat: void 0,
                min: null,
                max: null,
                skipOptionalPartCharacter: "",
                i18n: {
                    dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    ordinalSuffix: ["st", "nd", "rd", "th"]
                },
                preValidation: function(n, t, i, u, f, o, s, h) {
                    var c, l;
                    return h ? !0 : isNaN(i) && n[t] !== i && (c = e(t, f), c.nextMatch && c.nextMatch[0] === i && 1 < c.targetMatch[0].length && (l = r[c.targetMatch[0]][0], new RegExp(l).test("0" + n[t - 1]))) ? (n[t] = n[t - 1], n[t - 1] = "0", {
                        fuzzy: !0,
                        buffer: n,
                        refreshFromBuffer: {
                            start: t - 1,
                            end: t + 1
                        },
                        pos: t + 1
                    }) : !0
                },
                postValidation: function(n, t, i, u, f, h, c, l) {
                    var b = this,
                        a, p, w, v, y;
                    return c ? !0 : !1 === u ? (a = e(t + 1, f), a.targetMatch && a.targetMatchIndex === t && 1 < a.targetMatch[0].length && void 0 !== r[a.targetMatch[0]] && (p = r[a.targetMatch[0]][0], new RegExp(p).test("0" + i)) ? {
                        insert: [{
                            pos: t,
                            c: "0"
                        }, {
                            pos: t + 1,
                            c: i
                        }],
                        pos: t + 1
                    } : u) : ((u.fuzzy && (n = u.buffer, t = u.pos), a = e(t, f), a.targetMatch && a.targetMatch[0] && void 0 !== r[a.targetMatch[0]]) && (p = r[a.targetMatch[0]][0], w = n.slice(a.targetMatchIndex, a.targetMatchIndex + a.targetMatch[0].length), !1 === new RegExp(p).test(w.join("")) && 2 === a.targetMatch[0].length && h.validPositions[a.targetMatchIndex] && h.validPositions[a.targetMatchIndex + 1] && (h.validPositions[a.targetMatchIndex + 1].input = "0")), v = u, y = s(n.join(""), f.inputFormat, f), v && y.date.getTime() == y.date.getTime() && (v = d.call(this, y, v, f), v = g(y, v, f, h, l)), t && v && u.pos !== t ? {
                        buffer: o(f.inputFormat, y, f).split(""),
                        refreshFromBuffer: {
                            start: t,
                            end: u.pos
                        }
                    } : v)
                },
                onKeyDown: function(n, t, i, r) {
                    var u = this;
                    n.ctrlKey && n.keyCode === p.default.RIGHT && (this.inputmask._valueSet(y(new Date, r)), k(this).trigger("setvalue"))
                },
                onUnMask: function(n, t, i) {
                    return t ? o(i.outputFormat, s(n, i.inputFormat, i), i, !0) : t
                },
                casing: function(n, t) {
                    return 0 == t.nativeDef.indexOf("[ap]") ? n.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? n.toUpperCase() : n
                },
                onBeforeMask: function(n, t) {
                    return "[object Date]" === Object.prototype.toString.call(n) && (n = y(n, t)), n
                },
                insertMode: !1,
                shiftPositions: !1,
                keepStatic: !1,
                inputmode: "numeric"
            }
        })
    }, function(n, t, i) {
        "use strict";

        function o(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }

        function h(n, t) {
            for (var r = "", i = 0; i < n.length; i++) r += e.default.prototype.definitions[n.charAt(i)] || t.definitions[n.charAt(i)] || t.optionalmarker[0] === n.charAt(i) || t.optionalmarker[1] === n.charAt(i) || t.quantifiermarker[0] === n.charAt(i) || t.quantifiermarker[1] === n.charAt(i) || t.groupmarker[0] === n.charAt(i) || t.groupmarker[1] === n.charAt(i) || t.alternatormarker === n.charAt(i) ? "\\" + n.charAt(i) : n.charAt(i);
            return r
        }

        function f(n, t, i, r) {
            var u, e, f;
            if (0 < n.length && 0 < t && (!i.digitsOptional || r))
                for (u = n.indexOf(i.radixPoint), e = !1, i.negationSymbol.back === n[n.length - 1] && (e = !0, n.length--), -1 === u && (n.push(i.radixPoint), u = n.length - 1), f = 1; f <= t; f++) isFinite(n[u + f]) || (n[u + f] = "0");
            return e && n.push(i.negationSymbol.back), n
        }

        function c(n, t) {
            var r = 0,
                i, u, f;
            if ("+" === n) {
                for (r in t.validPositions);
                r = parseInt(r)
            }
            for (i in t.tests)
                if (i = parseInt(i), r <= i)
                    for (u = 0, f = t.tests[i].length; u < f; u++)
                        if ((void 0 === t.validPositions[i] || "-" === n) && t.tests[i][u].match.def === n) return i + (void 0 !== t.validPositions[i] && "-" !== n ? 1 : 0);
            return r
        }

        function l(n, t) {
            var u = -1,
                i, r;
            for (i in t.validPositions)
                if (r = t.validPositions[i], r && r.match.def === n) {
                    u = parseInt(i);
                    break
                } return u
        }

        function v(n) {
            void 0 === n.parseMinMaxOptions && (null !== n.min && (n.min = n.min.toString().replace(new RegExp(r.default(n.groupSeparator), "g"), ""), "," === n.radixPoint && (n.min = n.min.replace(n.radixPoint, ".")), n.min = isFinite(n.min) ? parseFloat(n.min) : NaN, isNaN(n.min) && (n.min = Number.MIN_VALUE)), null !== n.max && (n.max = n.max.toString().replace(new RegExp(r.default(n.groupSeparator), "g"), ""), "," === n.radixPoint && (n.max = n.max.replace(n.radixPoint, ".")), n.max = isFinite(n.max) ? parseFloat(n.max) : NaN, isNaN(n.max) && (n.max = Number.MAX_VALUE)), n.parseMinMaxOptions = "done")
        }

        function y(n) {
            var r, i, t, f, u;
            return n.repeat = 0, n.groupSeparator === n.radixPoint && n.digits && "0" !== n.digits && (n.groupSeparator = "." === n.radixPoint ? "," : "," === n.radixPoint ? "." : ""), " " === n.groupSeparator && (n.skipOptionalPartCharacter = void 0), 1 < n.placeholder.length && (n.placeholder = n.placeholder.charAt(0)), "radixFocus" === n.positionCaretOnClick && "" === n.placeholder && (n.positionCaretOnClick = "lvp"), r = "0", i = n.radixPoint, !0 === n.numericInput && void 0 === n.__financeInput ? (r = "1", n.positionCaretOnClick = "radixFocus" === n.positionCaretOnClick ? "lvp" : n.positionCaretOnClick, n.digitsOptional = !1, isNaN(n.digits) && (n.digits = 2), n._radixDance = !1, i = "," === n.radixPoint ? "?" : "!", "" !== n.radixPoint && void 0 === n.definitions[i] && (n.definitions[i] = {}, n.definitions[i].validator = "[" + n.radixPoint + "]", n.definitions[i].placeholder = n.radixPoint, n.definitions[i].static = !0, n.definitions[i].generated = !0)) : (n.__financeInput = !1, n.numericInput = !0), t = "[+]", (t += h(n.prefix, n), "" !== n.groupSeparator ? (void 0 === n.definitions[n.groupSeparator] && (n.definitions[n.groupSeparator] = {}, n.definitions[n.groupSeparator].validator = "[" + n.groupSeparator + "]", n.definitions[n.groupSeparator].placeholder = n.groupSeparator, n.definitions[n.groupSeparator].static = !0, n.definitions[n.groupSeparator].generated = !0), t += n._mask(n)) : t += "9{+}", void 0 !== n.digits && 0 !== n.digits) && (u = n.digits.toString().split(","), isFinite(u[0]) && u[1] && isFinite(u[1]) ? t += i + r + "{" + n.digits + "}" : (isNaN(n.digits) || 0 < parseInt(n.digits)) && (n.digitsOptional ? (f = t + i + r + "{0," + n.digits + "}", n.keepStatic = !0) : t += i + r + "{" + n.digits + "}")), t += h(n.suffix, n), t += "[-]", f && (t = [f + h(n.suffix, n) + "[-]", t]), n.greedy = !1, v(n), t
        }

        function p(n, t, i, r, u) {
            return u._radixDance && u.numericInput && t !== u.negationSymbol.back && n <= i && (0 < i || t == u.radixPoint) && (void 0 === r.validPositions[n - 1] || r.validPositions[n - 1].input !== u.negationSymbol.back) && (n -= 1), n
        }

        function a(n, t, i, r, u) {
            var f = t.buffer ? t.buffer.indexOf(u.radixPoint) : -1,
                e = -1 !== f && new RegExp("[0-9１-９]").test(n);
            return u._radixDance && e && null == t.validPositions[f] ? {
                insert: {
                    pos: f === i ? f + 1 : f,
                    c: u.radixPoint
                },
                pos: i
            } : e
        }

        function w(n, t) {
            var f = new RegExp("(^" + ("" !== t.negationSymbol.front ? r.default(t.negationSymbol.front) + "?" : "") + r.default(t.prefix) + ")(.*)(" + r.default(t.suffix) + ("" != t.negationSymbol.back ? r.default(t.negationSymbol.back) + "?" : "") + "$)").exec(n.slice().reverse().join("")),
                u = f ? f[2] : "",
                i = !1;
            return u && (u = u.split(t.radixPoint.charAt(0))[0], i = new RegExp("^[0" + t.groupSeparator + "]*").exec(u)), !(!i || !(1 < i[0].length || 0 < i[0].length && i[0].length < u.length)) && i
        }
        var e = o(i(2)),
            u = o(i(0)),
            r = o(i(14)),
            s = e.default.dependencyLib;
        e.default.extendAliases({
            numeric: {
                mask: y,
                _mask: function(n) {
                    return "(" + n.groupSeparator + "999){+|1}"
                },
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                _radixDance: !0,
                groupSeparator: "",
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                prefix: "",
                suffix: "",
                min: null,
                max: null,
                SetMaxOnOverflow: !1,
                step: 1,
                inputType: "text",
                unmaskAsNumber: !1,
                roundingFN: Math.round,
                inputmode: "numeric",
                shortcuts: {
                    k: "000",
                    m: "000000"
                },
                placeholder: "0",
                greedy: !1,
                rightAlign: !0,
                insertMode: !0,
                autoUnmask: !1,
                skipOptionalPartCharacter: "",
                definitions: {
                    0: {
                        validator: a
                    },
                    1: {
                        validator: a,
                        definitionSymbol: "9"
                    },
                    "+": {
                        validator: function(n, t, i, r, u) {
                            return u.allowMinus && ("-" === n || n === u.negationSymbol.front)
                        }
                    },
                    "-": {
                        validator: function(n, t, i, r, u) {
                            return u.allowMinus && n === u.negationSymbol.back
                        }
                    }
                },
                preValidation: function(n, t, i, r, u, f, e, o) {
                    var a, y, h, s, v;
                    if (!1 !== u.__financeInput && i === u.radixPoint) return !1;
                    if (a = u.shortcuts && u.shortcuts[i]) {
                        if (1 < a.length)
                            for (y = [], h = 0; h < a.length; h++) y.push({
                                pos: t + h,
                                c: a[h],
                                strict: !1
                            });
                        return {
                            insert: y
                        }
                    }
                    if (s = n.indexOf(u.radixPoint), v = t, t = p(t, i, s, f, u), "-" === i || i === u.negationSymbol.front) {
                        if (!0 !== u.allowMinus) return !1;
                        var w = !1,
                            b = l("+", f),
                            k = l("-", f);
                        return -1 !== b && (w = [b, k]), !1 !== w ? {
                            remove: w,
                            caret: v - u.negationSymbol.front.length
                        } : {
                            insert: [{
                                pos: c("+", f),
                                c: u.negationSymbol.front,
                                fromIsValid: !0
                            }, {
                                pos: c("-", f),
                                c: u.negationSymbol.back,
                                fromIsValid: void 0
                            }],
                            caret: v + u.negationSymbol.back.length
                        }
                    }
                    if (i === u.groupSeparator) return {
                        caret: v
                    };
                    if (o) return !0;
                    if (-1 !== s && !0 === u._radixDance && !1 === r && i === u.radixPoint && void 0 !== u.digits && (isNaN(u.digits) || 0 < parseInt(u.digits)) && s !== t) return {
                        caret: u._radixDance && t === s - 1 ? s + 1 : s
                    };
                    if (!1 === u.__financeInput)
                        if (r) {
                            if (u.digitsOptional) return {
                                rewritePosition: e.end
                            };
                            if (!u.digitsOptional) {
                                if (e.begin > s && e.end <= s) return i === u.radixPoint ? {
                                    insert: {
                                        pos: s + 1,
                                        c: "0",
                                        fromIsValid: !0
                                    },
                                    rewritePosition: s
                                } : {
                                    rewritePosition: s + 1
                                };
                                if (e.begin < s) return {
                                    rewritePosition: e.begin - 1
                                }
                            }
                        } else if (!u.showMaskOnHover && !u.showMaskOnFocus && !u.digitsOptional && 0 < u.digits && "" === this.__valueGet.call(this)) return {
                        rewritePosition: s
                    };
                    return {
                        rewritePosition: t
                    }
                },
                postValidation: function(n, t, i, r, u, e, o) {
                    if (!1 === r) return r;
                    if (o) return !0;
                    if (null !== u.min || null !== u.max) {
                        var h = u.onUnMask(n.slice().reverse().join(""), void 0, s.extend({}, u, {
                            unmaskAsNumber: !0
                        }));
                        if (null !== u.min && h < u.min && (h.toString().length > u.min.toString().length || h < 0)) return !1;
                        if (null !== u.max && h > u.max) return !!u.SetMaxOnOverflow && {
                            refreshFromBuffer: !0,
                            buffer: f(u.max.toString().replace(".", u.radixPoint).split(""), u.digits, u).reverse()
                        }
                    }
                    return r
                },
                onUnMask: function(n, t, i) {
                    if ("" === t && !0 === i.nullable) return t;
                    var u = n.replace(i.prefix, "");
                    return u = u.replace(i.suffix, ""), u = u.replace(new RegExp(r.default(i.groupSeparator), "g"), ""), "" !== i.placeholder.charAt(0) && (u = u.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== u.indexOf(i.radixPoint) && (u = u.replace(r.default.call(this, i.radixPoint), ".")), u = u.replace(new RegExp("^" + r.default(i.negationSymbol.front)), "-"), u = u.replace(new RegExp(r.default(i.negationSymbol.back) + "$"), ""), Number(u)) : u
                },
                isComplete: function(n, t) {
                    var i = (t.numericInput ? n.slice().reverse() : n).join("");
                    return i = i.replace(new RegExp("^" + r.default(t.negationSymbol.front)), "-"), i = i.replace(new RegExp(r.default(t.negationSymbol.back) + "$"), ""), i = i.replace(t.prefix, ""), i = i.replace(t.suffix, ""), i = i.replace(new RegExp(r.default(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace(r.default(t.radixPoint), ".")), isFinite(i)
                },
                onBeforeMask: function(n, t) {
                    var i = t.radixPoint || ",",
                        e, s, h;
                    isFinite(t.digits) && (t.digits = parseInt(t.digits));
                    "number" != typeof n && "number" !== t.inputType || "" === i || (n = n.toString().replace(".", i));
                    var c = "-" === n.charAt(0) || n.charAt(0) === t.negationSymbol.front,
                        o = n.split(i),
                        l = o[0].replace(/[^\-0-9]/g, ""),
                        u = 1 < o.length ? o[1].replace(/[^0-9]/g, "") : "",
                        a = 1 < o.length;
                    return n = l + ("" !== u ? i + u : u), e = 0, "" === i || (e = t.digitsOptional ? t.digits < u.length ? t.digits : u.length : t.digits, "" === u && t.digitsOptional) || (s = Math.pow(10, e || 1), n = n.replace(r.default(i), "."), isNaN(parseFloat(n)) || (n = (t.roundingFN(parseFloat(n) * s) / s).toFixed(e)), n = n.toString().replace(".", i)), (0 === t.digits && -1 !== n.indexOf(i) && (n = n.substring(0, n.indexOf(i))), null !== t.min || null !== t.max) && (h = n.toString().replace(i, "."), null !== t.min && h < t.min ? n = t.min.toString().replace(".", i) : null !== t.max && h > t.max && (n = t.max.toString().replace(".", i))), c && "-" !== n.charAt(0) && (n = "-" + n), f(n.toString().split(""), e, t, a).join("")
                },
                onBeforeWrite: function(n, t, i, u) {
                    function l(n, t) {
                        if (!1 !== u.__financeInput || t) {
                            var i = n.indexOf(u.radixPoint); - 1 !== i && n.splice(i, 1)
                        }
                        if ("" !== u.groupSeparator)
                            for (; - 1 !== (i = n.indexOf(u.groupSeparator));) n.splice(i, 1);
                        return n
                    }
                    var e, o = w(t, u),
                        v, c, y, p;
                    if (o)
                        for (var a = t.join("").lastIndexOf(o[0].split("").reverse().join("")) - (o[0] == o.input ? 0 : 1), b = o[0] == o.input ? 1 : 0, h = o[0].length - b; 0 < h; h--) delete this.maskset.validPositions[a + h], delete t[a + h];
                    if (n) switch (n.type) {
                        case "blur":
                        case "checkval":
                            if (null !== u.min && (v = u.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, u, {
                                    unmaskAsNumber: !0
                                })), null !== u.min && v < u.min)) return {
                                refreshFromBuffer: !0,
                                buffer: f(u.min.toString().replace(".", u.radixPoint).split(""), u.digits, u).reverse()
                            };
                            t[t.length - 1] === u.negationSymbol.front ? (c = new RegExp("(^" + ("" != u.negationSymbol.front ? r.default(u.negationSymbol.front) + "?" : "") + r.default(u.prefix) + ")(.*)(" + r.default(u.suffix) + ("" != u.negationSymbol.back ? r.default(u.negationSymbol.back) + "?" : "") + "$)").exec(l(t.slice(), !0).reverse().join("")), y = c ? c[2] : "", 0 == y && (e = {
                                refreshFromBuffer: !0,
                                buffer: [0]
                            })) : "" !== u.radixPoint && t[0] === u.radixPoint && (e && e.buffer ? e.buffer.shift() : (t.shift(), e = {
                                refreshFromBuffer: !0,
                                buffer: l(t)
                            }));
                            u.enforceDigitsOnBlur && (e = e || {}, p = e && e.buffer || t.slice().reverse(), e.refreshFromBuffer = !0, e.buffer = f(p, u.digits, u, !0).reverse())
                    }
                    return e
                },
                onKeyDown: function(n, t, i, r) {
                    var h = s(this),
                        e, o;
                    if (n.ctrlKey) switch (n.keyCode) {
                        case u.default.UP:
                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(r.step)), h.trigger("setvalue"), !1;
                        case u.default.DOWN:
                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(r.step)), h.trigger("setvalue"), !1
                    }
                    if (!n.shiftKey && (n.keyCode === u.default.DELETE || n.keyCode === u.default.BACKSPACE || n.keyCode === u.default.BACKSPACE_SAFARI) && i.begin !== t.length) {
                        if (t[n.keyCode === u.default.DELETE ? i.begin - 1 : i.end] === r.negationSymbol.front) return e = t.slice().reverse(), "" !== r.negationSymbol.front && e.shift(), "" !== r.negationSymbol.back && e.pop(), h.trigger("setvalue", [e.join(""), i.begin]), !1;
                        if (!0 === r._radixDance)
                            if (o = t.indexOf(r.radixPoint), r.digitsOptional) {
                                if (0 === o) return e = t.slice().reverse(), e.pop(), h.trigger("setvalue", [e.join(""), i.begin >= e.length ? e.length : i.begin]), !1
                            } else if (-1 !== o && (i.begin < o || i.end < o || n.keyCode === u.default.DELETE && i.begin === o)) return i.begin !== i.end || n.keyCode !== u.default.BACKSPACE && n.keyCode !== u.default.BACKSPACE_SAFARI || i.begin++, e = t.slice().reverse(), e.splice(e.length - i.begin, i.begin - i.end + 1), e = f(e, r.digits, r).join(""), h.trigger("setvalue", [e, i.begin >= e.length ? o + 1 : i.begin]), !1
                    }
                }
            },
            currency: {
                prefix: "",
                groupSeparator: ",",
                alias: "numeric",
                digits: 2,
                digitsOptional: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0
            },
            percentage: {
                alias: "numeric",
                min: 0,
                max: 100,
                suffix: " %",
                digits: 0,
                allowMinus: !1
            },
            indianns: {
                alias: "numeric",
                _mask: function(n) {
                    return "(" + n.groupSeparator + "99){*|1}(" + n.groupSeparator + "999){1|1}"
                },
                groupSeparator: ",",
                radixPoint: ".",
                placeholder: "0",
                digits: 2,
                digitsOptional: !1
            }
        })
    }, function(n, t, i) {
        "use strict";

        function o(n) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }, o(n)
        }

        function p(n, t) {
            if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
        }

        function w(n, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            n.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: n,
                    writable: !0,
                    configurable: !0
                }
            });
            t && r(n, t)
        }

        function b(n) {
            var t = l();
            return function() {
                var r = u(n),
                    i, f;
                return t ? (f = u(this).constructor, i = Reflect.construct(r, arguments, f)) : i = r.apply(this, arguments), k(this, i)
            }
        }

        function k(n, t) {
            return !t || "object" !== o(t) && "function" != typeof t ? d(n) : t
        }

        function d(n) {
            if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n
        }

        function s(n) {
            var t = "function" == typeof Map ? new Map : void 0;
            return s = function(n) {
                function i() {
                    return h(n, arguments, u(this).constructor)
                }
                if (null === n || !g(n)) return n;
                if ("function" != typeof n) throw new TypeError("Super expression must either be null or a function");
                if ("undefined" != typeof t) {
                    if (t.has(n)) return t.get(n);
                    t.set(n, i)
                }
                return i.prototype = Object.create(n.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), r(i, n)
            }, s(n)
        }

        function h() {
            return h = l() ? Reflect.construct : function(n, t, i) {
                var u = [null],
                    e, f;
                return u.push.apply(u, t), e = Function.bind.apply(n, u), f = new e, i && r(f, i.prototype), f
            }, h.apply(null, arguments)
        }

        function l() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (n) {
                return !1
            }
        }

        function g(n) {
            return -1 !== Function.toString.call(n).indexOf("[native code]")
        }

        function r(n, t) {
            return r = Object.setPrototypeOf || function(n, t) {
                return n.__proto__ = t, n
            }, r(n, t)
        }

        function u(n) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                return n.__proto__ || Object.getPrototypeOf(n)
            }, u(n)
        }

        function c(n) {
            return n && n.__esModule ? n : {
                "default": n
            }
        }
        var f = c(i(5)),
            v = c(i(2)),
            y = c(i(6)),
            e = f.default.document,
            a;
        y.default && e && e.head && e.head.attachShadow && f.default.customElements && void 0 === f.default.customElements.get("input-mask") && (a = function(n) {
            function t() {
                var n, f, o;
                p(this, t);
                n = i.call(this);
                var u = n.getAttributeNames(),
                    s = n.attachShadow({
                        mode: "closed"
                    }),
                    r = e.createElement("input");
                for (f in r.type = "text", s.appendChild(r), u) Object.prototype.hasOwnProperty.call(u, f) && r.setAttribute(u[f], n.getAttribute(u[f]));
                return o = new v.default, o.dataAttribute = "", o.mask(r), r.inputmask.shadowRoot = s, n
            }
            w(t, n);
            var i = b(t);
            return t
        }(s(HTMLElement)), f.default.customElements.define("input-mask", a))
    }], t = {}, n.m = i, n.c = t, n.d = function(t, i, r) {
        n.o(t, i) || Object.defineProperty(t, i, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, n.t = function(t, i) {
        var r, u;
        if ((1 & i && (t = n(t)), 8 & i) || 4 & i && "object" == typeof t && t && t.__esModule) return t;
        if (r = Object.create(null), n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & i && "string" != typeof t)
            for (u in t) n.d(r, u, function(n) {
                return t[n]
            }.bind(null, u));
        return r
    }, n.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(i, "a", i), i
    }, n.o = function(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, n.p = "", n(n.s = 15);
    var i, t
});

function maskingDob() {
    var n;
    for (dateMaskInputs = document.querySelectorAll("[date-mask]"), n = 0; n < dateMaskInputs.length; n++) {
        var t = dateMaskInputs[n],
            u = t.getAttribute("max-age"),
            r = t.getAttribute("min-age"),
            f = exports.configObj = exports.config(u, r),
            i = new Inputmask("datetime", f),
            e = i.opts.ignorables;
        i.userOptions.minAge = r;
        i.mask(t);
        t.addEventListener("keypress", function(n) {
            var t = this,
                i, r;
            e.indexOf(n.keyCode) < 0 ? (i = exports.getDateArray(t), r = exports.isMonthCompleted(i), exports.setErrors(t, n, i, r)) : n.keyCode === 8 && t.classList.remove("error")
        })
    }
}

function maskingAdditionalDob() {
    var n;
    for (dateMaskInputs = document.querySelectorAll("[date-mask-additional]"), n = 0; n < dateMaskInputs.length; n++) {
        var t = dateMaskInputs[n],
            u = t.getAttribute("max-age"),
            r = t.getAttribute("min-age"),
            f = exports.configObj = exports.config(u, r),
            i = new Inputmask("datetime", f),
            e = i.opts.ignorables;
        i.userOptions.minAge = r;
        i.mask(t);
        t.addEventListener("keypress", function(n) {
            var t = this,
                i, r;
            e.indexOf(n.keyCode) < 0 ? (i = exports.getDateArray(t), r = exports.isMonthCompleted(i), exports.setErrorsAdditionalInsurer(t, n, i, r)) : n.keyCode === 8 && t.classList.remove("error")
        })
    }
}
var exports = {
    configObj: {},
    errors: function(n) {
        var t = parseInt(n) === 1 ? "" : "s";
        return {
            invalidDate: "La fecha introducida no es correcta",
            minAgeOverflow: "El titular tiene que ser mayor de " + n + " año" + t,
            maxAgeOverflow: "La fecha no puede ser tan antigua",
            todayOverflow: "La fecha no puede ser futura"
        }
    },
    config: function(n, t) {
        return n = n ? n : 100, {
            inputFormat: "dd/mm/yyyy",
            placeholder: "dd/mm/yyyy",
            min: this.date(n),
            max: this.date(t),
            insertMode: !0,
            onKeyValidation: function(n, t) {
                var r = !isNaN(this.value.replace(/\//g, "")),
                    i = r || t ? "remove" : "add";
                i == "remove" && (this.getAttribute("id") == "txtCalendarBirthDateMain" ? $("#errorTxtCalendarBirthDateMain").addClass("hidden") : String(this.getAttribute("id")).includes("txtCalendarBirthDate") && $("#errorContainer").addClass("hidden"));
                this.classList[i]("error")
            }
        }
    },
    date: function(n) {
        var t = new Date,
            i = n && !isNaN(n) && n != ".5" ? parseInt(n) : 0;
        n == ".5" && (t = new Date(t.setMonth(t.getMonth() + 6)));
        return [t.getDate(), t.getMonth() + 1, t.getFullYear() - i].map(function(n) {
            return n < 10 && (n = "0" + n), n
        }).join("/")
    },
    prefillYear: function(n, t, i, r) {
        if (r && i[2] === "") {
            switch (t.key) {
                case "0":
                    i[2] = "20";
                    break;
                case "1":
                case "2":
                    break;
                default:
                    i[2] = "19"
            }
            i[2] = (i[2] + "aaaa").substring(0, 4);
            n.value = i.join("/")
        }
    },
    setErrorsAdditionalInsurer: function(n, t, i, r) {
        var o = n.inputmask.userOptions.minAge,
            f = this.errors(o),
            u = "",
            e;
        if (r) {
            var s = this.getDateCompare(i, t.key, "0"),
                h = this.getDateCompare(i, t.key, "9"),
                c = n.inputmask.opts.min.date,
                l = n.inputmask.opts.max.date;
            switch (!0) {
                case s > l:
                    u = f.todayOverflow;
                    $("#errorContainer").removeClass("hidden");
                    $("#errorContainer").text(u);
                    break;
                case h < c:
                    u = f.maxAgeOverflow;
                    $("#errorContainer").removeClass("hidden");
                    $("#errorContainer").text(u)
            }
            u.length == 0 && ($("#errorContainer").addClass("hidden"), $("#errorContainer").text(u))
        }
        e = this.getParent(n, "form-control");
        e
    },
    setErrors: function(n, t, i, r) {
        var c = n.inputmask.userOptions.minAge,
            v = this.errors(c),
            u = "",
            f, s, h;
        if (r) {
            var e = this.getDateCompare(i, t.key, "0"),
                l = this.getDateCompare(i, t.key, "9"),
                a = n.inputmask.opts.min.date,
                o = n.inputmask.opts.max.date;
            switch (!0) {
                case e > o:
                    u = n.id == "txt_initial_date_insurance" ? "Revisa la fecha de contratación/renovación. No puede ser superior a 6 meses desde la fecha actual." : "El tomador del seguro debe ser mayor de edad.";
                    $(".error-txt").text(u);
                    break;
                case l < a:
                    u = "Por favor, selecciona una fecha válida.";
                    $(".error-txt").text(u)
            }
            f = this.config(90, 18).max.split("/");
            s = new Date(f[2], f[1] - 1, f[0]);
            e > s && e <= o ? $("#dobWarning").removeClass("hidden") : $("#dobWarning").addClass("hidden")
        }
        u.length == 0 && $("#errorTxtCalendarBirthDateMain").addClass("hidden");
        h = this.getParent(n, "form-control");
        h
    },
    getParent: function(n, t) {
        for (var i = n; i.parentNode && !i.classList.contains(t);) i = i.parentNode;
        return i
    },
    isMonthCompleted: function(n) {
        return n[1] && n[1].length === 2
    },
    getDateArray: function(n) {
        return n.value.replace(/[a-z]/g, "").split("/")
    },
    getDateCompare: function(n, t, i) {
        return n[2] = (n[2].replace(/a/g, "") + t + Array(4).fill(i).join("")).substring(0, 4), new Date(n[2], n[1] - 1, n[0])
    }
};