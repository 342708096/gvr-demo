!function (t) {
    function e(r) {
        if (n[r])return n[r].exports;
        var a = n[r] = {exports: {}, id: r, loaded: !1};
        return t[r].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "https://assets.veervr.tv/www-app/vendor/vr-player/", e(0)
}([function (t, e, n) {
    "use strict";
    n(107), n(66), n(64), n(65), n(61);
    var r = n(63);
    (0, r.initPlayer)()
}, function (t, e) {
    var n = {};
    n.EPSILON = 1e-6, n.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, n.RANDOM = Math.random, n.ENABLE_SIMD = !1, n.SIMD_AVAILABLE = n.ARRAY_TYPE === Float32Array && "SIMD" in this, n.USE_SIMD = n.ENABLE_SIMD && n.SIMD_AVAILABLE, n.setMatrixArrayType = function (t) {
        n.ARRAY_TYPE = t
    };
    var r = Math.PI / 180;
    n.toRadian = function (t) {
        return t * r
    }, n.equals = function (t, e) {
        return Math.abs(t - e) <= n.EPSILON * Math.max(1, Math.abs(t), Math.abs(e))
    }, t.exports = n
}, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (t, e, n) {
    t.exports = !n(10)(function () {
        return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
    })
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e, n) {
    var r = n(12), a = n(38), o = n(26), i = Object.defineProperty;
    e.f = n(3) ? Object.defineProperty : function (t, e, n) {
        if (r(t), e = o(e, !0), r(n), a)try {
            return i(t, e, n)
        } catch (t) {
        }
        if ("get" in n || "set" in n)throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    var r = n(84), a = n(17);
    t.exports = function (t) {
        return r(a(t))
    }
}, function (t, e) {
    var n = t.exports = {version: "2.4.0"};
    "number" == typeof __e && (__e = n)
}, function (t, e, n) {
    var r = n(5), a = n(15);
    t.exports = n(3) ? function (t, e, n) {
        return r.f(t, e, a(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e, n) {
    var r = n(24)("wks"), a = n(16), o = n(2).Symbol, i = "function" == typeof o, u = t.exports = function (t) {
        return r[t] || (r[t] = i && o[t] || (i ? o : a)("Symbol." + t))
    };
    u.store = r
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e, n) {
    var r = n(43), a = n(18);
    t.exports = Object.keys || function (t) {
            return r(t, a)
        }
}, function (t, e, n) {
    var r = n(14);
    t.exports = function (t) {
        if (!r(t))throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e, n) {
    var r = n(2), a = n(7), o = n(81), i = n(8), u = "prototype", s = function (t, e, n) {
        var l, c, d, f = t & s.F, h = t & s.G, p = t & s.S, m = t & s.P, v = t & s.B, b = t & s.W,
            y = h ? a : a[e] || (a[e] = {}), M = y[u], g = h ? r : p ? r[e] : (r[e] || {})[u];
        h && (n = e);
        for (l in n)c = !f && g && void 0 !== g[l], c && l in y || (d = c ? g[l] : n[l], y[l] = h && "function" != typeof g[l] ? n[l] : v && c ? o(d, r) : b && g[l] == d ? function (t) {
            var e = function (e, n, r) {
                if (this instanceof t) {
                    switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e);
                        case 2:
                            return new t(e, n)
                    }
                    return new t(e, n, r)
                }
                return t.apply(this, arguments)
            };
            return e[u] = t[u], e
        }(d) : m && "function" == typeof d ? o(Function.call, d) : d, m && ((y.virtual || (y.virtual = {}))[l] = d, t & s.R && M && !M[l] && i(M, l, d)))
    };
    s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e) {
    var n = 0, r = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function (t, e) {
    t.exports = function (t) {
        if (void 0 == t)throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e) {
    t.exports = {}
}, function (t, e) {
    t.exports = !0
}, function (t, e) {
    e.f = {}.propertyIsEnumerable
}, function (t, e, n) {
    var r = n(5).f, a = n(4), o = n(9)("toStringTag");
    t.exports = function (t, e, n) {
        t && !a(t = n ? t : t.prototype, o) && r(t, o, {configurable: !0, value: e})
    }
}, function (t, e, n) {
    var r = n(24)("keys"), a = n(16);
    t.exports = function (t) {
        return r[t] || (r[t] = a(t))
    }
}, function (t, e, n) {
    var r = n(2), a = "__core-js_shared__", o = r[a] || (r[a] = {});
    t.exports = function (t) {
        return o[t] || (o[t] = {})
    }
}, function (t, e) {
    var n = Math.ceil, r = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function (t, e, n) {
    var r = n(14);
    t.exports = function (t, e) {
        if (!r(t))return t;
        var n, a;
        if (e && "function" == typeof(n = t.toString) && !r(a = n.call(t)))return a;
        if ("function" == typeof(n = t.valueOf) && !r(a = n.call(t)))return a;
        if (!e && "function" == typeof(n = t.toString) && !r(a = n.call(t)))return a;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e, n) {
    var r = n(2), a = n(7), o = n(20), i = n(28), u = n(5).f;
    t.exports = function (t) {
        var e = a.Symbol || (a.Symbol = o ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || u(e, t, {value: i.f(t)})
    }
}, function (t, e, n) {
    e.f = n(9)
}, function (t, e, n) {
    e.glMatrix = n(1), e.mat2 = n(108), e.mat2d = n(109), e.mat3 = n(46), e.mat4 = n(110), e.quat = n(111), e.vec2 = n(112), e.vec3 = n(47), e.vec4 = n(48)
}, function (t, e, n) {
    var r, a, o;
    !function (n) {
        var i = /iPhone/i, u = /iPod/i, s = /iPad/i, l = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, c = /Android/i,
            d = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
            f = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
            h = /IEMobile/i, p = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, m = /BlackBerry/i, v = /BB10/i, b = /Opera Mini/i,
            y = /(CriOS|Chrome)(?=.*\bMobile\b)/i, M = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
            g = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"), w = function (t, e) {
                return t.test(e)
            }, x = function (t) {
                var e = t || navigator.userAgent, n = e.split("[FBAN");
                if ("undefined" != typeof n[1] && (e = n[0]), n = e.split("Twitter"), "undefined" != typeof n[1] && (e = n[0]), this.apple = {
                        phone: w(i, e),
                        ipod: w(u, e),
                        tablet: !w(i, e) && w(s, e),
                        device: w(i, e) || w(u, e) || w(s, e)
                    }, this.amazon = {
                        phone: w(d, e),
                        tablet: !w(d, e) && w(f, e),
                        device: w(d, e) || w(f, e)
                    }, this.android = {
                        phone: w(d, e) || w(l, e),
                        tablet: !w(d, e) && !w(l, e) && (w(f, e) || w(c, e)),
                        device: w(d, e) || w(f, e) || w(l, e) || w(c, e)
                    }, this.windows = {
                        phone: w(h, e),
                        tablet: w(p, e),
                        device: w(h, e) || w(p, e)
                    }, this.other = {
                        blackberry: w(m, e),
                        blackberry10: w(v, e),
                        opera: w(b, e),
                        firefox: w(M, e),
                        chrome: w(y, e),
                        device: w(m, e) || w(v, e) || w(b, e) || w(M, e) || w(y, e)
                    }, this.seven_inch = w(g, e), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window)return this
            }, _ = function () {
                var t = new x;
                return t.Class = x, t
            };
        "undefined" != typeof t && t.exports && "undefined" == typeof window ? t.exports = x : "undefined" != typeof t && t.exports && "undefined" != typeof window ? t.exports = _() : (a = [], r = n.isMobile = _(), o = "function" == typeof r ? r.apply(e, a) : r, !(void 0 !== o && (t.exports = o)))
    }(this)
}, function (t, e, n) {
    function r(t) {
        return null == t ? void 0 === t ? s : u : l && l in Object(t) ? o(t) : i(t)
    }

    var a = n(49), o = n(129), i = n(135), u = "[object Null]", s = "[object Undefined]",
        l = a ? a.toStringTag : void 0;
    t.exports = r
}, function (t, e, n) {
    var r = n(53), a = "object" == typeof self && self && self.Object === Object && self,
        o = r || a || Function("return this")();
    t.exports = o
}, function (t, e, n) {
    function r(t) {
        return null != t && o(t.length) && !a(t)
    }

    var a = n(58), o = n(59);
    t.exports = r
}, function (t, e) {
    function n(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }

    t.exports = n
}, function (t, e) {
    function n(t) {
        return null != t && "object" == typeof t
    }

    t.exports = n
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e, n) {
    var r = n(14), a = n(2).document, o = r(a) && r(a.createElement);
    t.exports = function (t) {
        return o ? a.createElement(t) : {}
    }
}, function (t, e, n) {
    t.exports = !n(3) && !n(10)(function () {
            return 7 != Object.defineProperty(n(37)("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
        })
}, function (t, e, n) {
    "use strict";
    var r = n(20), a = n(13), o = n(44), i = n(8), u = n(4), s = n(19), l = n(86), c = n(22), d = n(93),
        f = n(9)("iterator"), h = !([].keys && "next" in [].keys()), p = "@@iterator", m = "keys", v = "values",
        b = function () {
            return this
        };
    t.exports = function (t, e, n, y, M, g, w) {
        l(n, e, y);
        var x, _, S, I = function (t) {
                if (!h && t in P)return P[t];
                switch (t) {
                    case m:
                        return function () {
                            return new n(this, t)
                        };
                    case v:
                        return function () {
                            return new n(this, t)
                        }
                }
                return function () {
                    return new n(this, t)
                }
            }, D = e + " Iterator", F = M == v, E = !1, P = t.prototype, T = P[f] || P[p] || M && P[M], O = T || I(M),
            k = M ? F ? I("entries") : O : void 0, A = "Array" == e ? P.entries || T : T;
        if (A && (S = d(A.call(new t)), S !== Object.prototype && (c(S, D, !0), r || u(S, f) || i(S, f, b))), F && T && T.name !== v && (E = !0, O = function () {
                return T.call(this)
            }), r && !w || !h && !E && P[f] || i(P, f, O), s[e] = O, s[D] = b, M)if (x = {
                values: F ? O : I(v),
                keys: g ? O : I(m),
                entries: k
            }, w)for (_ in x)_ in P || o(P, _, x[_]); else a(a.P + a.F * (h || E), e, x);
        return x
    }
}, function (t, e, n) {
    var r = n(12), a = n(90), o = n(18), i = n(23)("IE_PROTO"), u = function () {
    }, s = "prototype", l = function () {
        var t, e = n(37)("iframe"), r = o.length, a = "<", i = ">";
        for (e.style.display = "none", n(83).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(a + "script" + i + "document.F=Object" + a + "/script" + i), t.close(), l = t.F; r--;)delete l[s][o[r]];
        return l()
    };
    t.exports = Object.create || function (t, e) {
            var n;
            return null !== t ? (u[s] = r(t), n = new u, u[s] = null, n[i] = t) : n = l(), void 0 === e ? n : a(n, e)
        }
}, function (t, e, n) {
    var r = n(43), a = n(18).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
            return r(t, a)
        }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e, n) {
    var r = n(4), a = n(6), o = n(80)(!1), i = n(23)("IE_PROTO");
    t.exports = function (t, e) {
        var n, u = a(t), s = 0, l = [];
        for (n in u)n != i && r(u, n) && l.push(n);
        for (; e.length > s;)r(u, n = e[s++]) && (~o(l, n) || l.push(n));
        return l
    }
}, function (t, e, n) {
    t.exports = n(8)
}, function (t, e, n) {
    var r = n(17);
    t.exports = function (t) {
        return Object(r(t))
    }
}, function (t, e, n) {
    var r = n(1), a = {};
    a.create = function () {
        var t = new r.ARRAY_TYPE(9);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, a.fromMat4 = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t
    }, a.clone = function (t) {
        var e = new r.ARRAY_TYPE(9);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
    }, a.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
    }, a.fromValues = function (t, e, n, a, o, i, u, s, l) {
        var c = new r.ARRAY_TYPE(9);
        return c[0] = t, c[1] = e, c[2] = n, c[3] = a, c[4] = o, c[5] = i, c[6] = u, c[7] = s, c[8] = l, c
    }, a.set = function (t, e, n, r, a, o, i, u, s, l) {
        return t[0] = e, t[1] = n, t[2] = r, t[3] = a, t[4] = o, t[5] = i, t[6] = u, t[7] = s, t[8] = l, t
    }, a.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, a.transpose = function (t, e) {
        if (t === e) {
            var n = e[1], r = e[2], a = e[5];
            t[1] = e[3], t[2] = e[6], t[3] = n, t[5] = e[7], t[6] = r, t[7] = a
        } else t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8];
        return t
    }, a.invert = function (t, e) {
        var n = e[0], r = e[1], a = e[2], o = e[3], i = e[4], u = e[5], s = e[6], l = e[7], c = e[8], d = c * i - u * l,
            f = -c * o + u * s, h = l * o - i * s, p = n * d + r * f + a * h;
        return p ? (p = 1 / p, t[0] = d * p, t[1] = (-c * r + a * l) * p, t[2] = (u * r - a * i) * p, t[3] = f * p, t[4] = (c * n - a * s) * p, t[5] = (-u * n + a * o) * p, t[6] = h * p, t[7] = (-l * n + r * s) * p, t[8] = (i * n - r * o) * p, t) : null
    }, a.adjoint = function (t, e) {
        var n = e[0], r = e[1], a = e[2], o = e[3], i = e[4], u = e[5], s = e[6], l = e[7], c = e[8];
        return t[0] = i * c - u * l, t[1] = a * l - r * c, t[2] = r * u - a * i, t[3] = u * s - o * c, t[4] = n * c - a * s, t[5] = a * o - n * u, t[6] = o * l - i * s, t[7] = r * s - n * l, t[8] = n * i - r * o, t
    }, a.determinant = function (t) {
        var e = t[0], n = t[1], r = t[2], a = t[3], o = t[4], i = t[5], u = t[6], s = t[7], l = t[8];
        return e * (l * o - i * s) + n * (-l * a + i * u) + r * (s * a - o * u)
    }, a.multiply = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = e[3], u = e[4], s = e[5], l = e[6], c = e[7], d = e[8], f = n[0],
            h = n[1], p = n[2], m = n[3], v = n[4], b = n[5], y = n[6], M = n[7], g = n[8];
        return t[0] = f * r + h * i + p * l, t[1] = f * a + h * u + p * c, t[2] = f * o + h * s + p * d, t[3] = m * r + v * i + b * l, t[4] = m * a + v * u + b * c, t[5] = m * o + v * s + b * d, t[6] = y * r + M * i + g * l, t[7] = y * a + M * u + g * c, t[8] = y * o + M * s + g * d, t
    }, a.mul = a.multiply, a.translate = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = e[3], u = e[4], s = e[5], l = e[6], c = e[7], d = e[8], f = n[0],
            h = n[1];
        return t[0] = r, t[1] = a, t[2] = o, t[3] = i, t[4] = u, t[5] = s, t[6] = f * r + h * i + l, t[7] = f * a + h * u + c, t[8] = f * o + h * s + d, t
    }, a.rotate = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = e[3], u = e[4], s = e[5], l = e[6], c = e[7], d = e[8], f = Math.sin(n),
            h = Math.cos(n);
        return t[0] = h * r + f * i, t[1] = h * a + f * u, t[2] = h * o + f * s, t[3] = h * i - f * r, t[4] = h * u - f * a, t[5] = h * s - f * o, t[6] = l, t[7] = c, t[8] = d, t
    }, a.scale = function (t, e, n) {
        var r = n[0], a = n[1];
        return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = a * e[3], t[4] = a * e[4], t[5] = a * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
    }, a.fromTranslation = function (t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = e[0], t[7] = e[1], t[8] = 1, t
    }, a.fromRotation = function (t, e) {
        var n = Math.sin(e), r = Math.cos(e);
        return t[0] = r, t[1] = n, t[2] = 0, t[3] = -n, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, a.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = e[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, a.fromMat2d = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = 0, t[3] = e[2], t[4] = e[3], t[5] = 0, t[6] = e[4], t[7] = e[5], t[8] = 1, t
    }, a.fromQuat = function (t, e) {
        var n = e[0], r = e[1], a = e[2], o = e[3], i = n + n, u = r + r, s = a + a, l = n * i, c = r * i, d = r * u,
            f = a * i, h = a * u, p = a * s, m = o * i, v = o * u, b = o * s;
        return t[0] = 1 - d - p, t[3] = c - b, t[6] = f + v, t[1] = c + b, t[4] = 1 - l - p, t[7] = h - m, t[2] = f - v, t[5] = h + m, t[8] = 1 - l - d, t
    }, a.normalFromMat4 = function (t, e) {
        var n = e[0], r = e[1], a = e[2], o = e[3], i = e[4], u = e[5], s = e[6], l = e[7], c = e[8], d = e[9],
            f = e[10], h = e[11], p = e[12], m = e[13], v = e[14], b = e[15], y = n * u - r * i, M = n * s - a * i,
            g = n * l - o * i, w = r * s - a * u, x = r * l - o * u, _ = a * l - o * s, S = c * m - d * p,
            I = c * v - f * p, D = c * b - h * p, F = d * v - f * m, E = d * b - h * m, P = f * b - h * v,
            T = y * P - M * E + g * F + w * D - x * I + _ * S;
        return T ? (T = 1 / T, t[0] = (u * P - s * E + l * F) * T, t[1] = (s * D - i * P - l * I) * T, t[2] = (i * E - u * D + l * S) * T, t[3] = (a * E - r * P - o * F) * T, t[4] = (n * P - a * D + o * I) * T, t[5] = (r * D - n * E - o * S) * T, t[6] = (m * _ - v * x + b * w) * T, t[7] = (v * g - p * _ - b * M) * T, t[8] = (p * x - m * g + b * y) * T, t) : null
    }, a.str = function (t) {
        return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
    }, a.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
    }, a.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t[6] = e[6] + n[6], t[7] = e[7] + n[7], t[8] = e[8] + n[8], t
    }, a.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t[6] = e[6] - n[6], t[7] = e[7] - n[7], t[8] = e[8] - n[8], t
    }, a.sub = a.subtract, a.multiplyScalar = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * n, t
    }, a.multiplyScalarAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t[6] = e[6] + n[6] * r, t[7] = e[7] + n[7] * r, t[8] = e[8] + n[8] * r, t
    }, a.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
    }, a.equals = function (t, e) {
        var n = t[0], a = t[1], o = t[2], i = t[3], u = t[4], s = t[5], l = t[6], c = t[7], d = t[8], f = e[0],
            h = e[1], p = e[2], m = e[3], v = e[4], b = e[5], y = t[6], M = e[7], g = e[8];
        return Math.abs(n - f) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(f)) && Math.abs(a - h) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(h)) && Math.abs(o - p) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(p)) && Math.abs(i - m) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(u - v) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(s - b) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(b)) && Math.abs(l - y) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(y)) && Math.abs(c - M) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(M)) && Math.abs(d - g) <= r.EPSILON * Math.max(1, Math.abs(d), Math.abs(g))
    }, t.exports = a
}, function (t, e, n) {
    var r = n(1), a = {};
    a.create = function () {
        var t = new r.ARRAY_TYPE(3);
        return t[0] = 0, t[1] = 0, t[2] = 0, t
    }, a.clone = function (t) {
        var e = new r.ARRAY_TYPE(3);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
    }, a.fromValues = function (t, e, n) {
        var a = new r.ARRAY_TYPE(3);
        return a[0] = t, a[1] = e, a[2] = n, a
    }, a.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
    }, a.set = function (t, e, n, r) {
        return t[0] = e, t[1] = n, t[2] = r, t
    }, a.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t
    }, a.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t
    }, a.sub = a.subtract, a.multiply = function (t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t[2] = e[2] * n[2], t
    }, a.mul = a.multiply, a.divide = function (t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t[2] = e[2] / n[2], t
    }, a.div = a.divide, a.ceil = function (t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t
    }, a.floor = function (t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t
    }, a.min = function (t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t[2] = Math.min(e[2], n[2]), t
    }, a.max = function (t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t[2] = Math.max(e[2], n[2]), t
    }, a.round = function (t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t
    }, a.scale = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t
    }, a.scaleAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t
    }, a.distance = function (t, e) {
        var n = e[0] - t[0], r = e[1] - t[1], a = e[2] - t[2];
        return Math.sqrt(n * n + r * r + a * a)
    }, a.dist = a.distance, a.squaredDistance = function (t, e) {
        var n = e[0] - t[0], r = e[1] - t[1], a = e[2] - t[2];
        return n * n + r * r + a * a
    }, a.sqrDist = a.squaredDistance, a.length = function (t) {
        var e = t[0], n = t[1], r = t[2];
        return Math.sqrt(e * e + n * n + r * r)
    }, a.len = a.length, a.squaredLength = function (t) {
        var e = t[0], n = t[1], r = t[2];
        return e * e + n * n + r * r
    }, a.sqrLen = a.squaredLength, a.negate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t
    }, a.inverse = function (t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t
    }, a.normalize = function (t, e) {
        var n = e[0], r = e[1], a = e[2], o = n * n + r * r + a * a;
        return o > 0 && (o = 1 / Math.sqrt(o), t[0] = e[0] * o, t[1] = e[1] * o, t[2] = e[2] * o), t
    }, a.dot = function (t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }, a.cross = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = n[0], u = n[1], s = n[2];
        return t[0] = a * s - o * u, t[1] = o * i - r * s, t[2] = r * u - a * i, t
    }, a.lerp = function (t, e, n, r) {
        var a = e[0], o = e[1], i = e[2];
        return t[0] = a + r * (n[0] - a), t[1] = o + r * (n[1] - o), t[2] = i + r * (n[2] - i), t
    }, a.hermite = function (t, e, n, r, a, o) {
        var i = o * o, u = i * (2 * o - 3) + 1, s = i * (o - 2) + o, l = i * (o - 1), c = i * (3 - 2 * o);
        return t[0] = e[0] * u + n[0] * s + r[0] * l + a[0] * c, t[1] = e[1] * u + n[1] * s + r[1] * l + a[1] * c, t[2] = e[2] * u + n[2] * s + r[2] * l + a[2] * c, t
    }, a.bezier = function (t, e, n, r, a, o) {
        var i = 1 - o, u = i * i, s = o * o, l = u * i, c = 3 * o * u, d = 3 * s * i, f = s * o;
        return t[0] = e[0] * l + n[0] * c + r[0] * d + a[0] * f, t[1] = e[1] * l + n[1] * c + r[1] * d + a[1] * f, t[2] = e[2] * l + n[2] * c + r[2] * d + a[2] * f, t
    }, a.random = function (t, e) {
        e = e || 1;
        var n = 2 * r.RANDOM() * Math.PI, a = 2 * r.RANDOM() - 1, o = Math.sqrt(1 - a * a) * e;
        return t[0] = Math.cos(n) * o, t[1] = Math.sin(n) * o, t[2] = a * e, t
    }, a.transformMat4 = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = n[3] * r + n[7] * a + n[11] * o + n[15];
        return i = i || 1, t[0] = (n[0] * r + n[4] * a + n[8] * o + n[12]) / i, t[1] = (n[1] * r + n[5] * a + n[9] * o + n[13]) / i, t[2] = (n[2] * r + n[6] * a + n[10] * o + n[14]) / i, t
    }, a.transformMat3 = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2];
        return t[0] = r * n[0] + a * n[3] + o * n[6], t[1] = r * n[1] + a * n[4] + o * n[7], t[2] = r * n[2] + a * n[5] + o * n[8], t
    }, a.transformQuat = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = n[0], u = n[1], s = n[2], l = n[3], c = l * r + u * o - s * a,
            d = l * a + s * r - i * o, f = l * o + i * a - u * r, h = -i * r - u * a - s * o;
        return t[0] = c * l + h * -i + d * -s - f * -u, t[1] = d * l + h * -u + f * -i - c * -s, t[2] = f * l + h * -s + c * -u - d * -i, t
    }, a.rotateX = function (t, e, n, r) {
        var a = [], o = [];
        return a[0] = e[0] - n[0], a[1] = e[1] - n[1], a[2] = e[2] - n[2], o[0] = a[0], o[1] = a[1] * Math.cos(r) - a[2] * Math.sin(r), o[2] = a[1] * Math.sin(r) + a[2] * Math.cos(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
    }, a.rotateY = function (t, e, n, r) {
        var a = [], o = [];
        return a[0] = e[0] - n[0], a[1] = e[1] - n[1], a[2] = e[2] - n[2], o[0] = a[2] * Math.sin(r) + a[0] * Math.cos(r), o[1] = a[1], o[2] = a[2] * Math.cos(r) - a[0] * Math.sin(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
    }, a.rotateZ = function (t, e, n, r) {
        var a = [], o = [];
        return a[0] = e[0] - n[0], a[1] = e[1] - n[1], a[2] = e[2] - n[2], o[0] = a[0] * Math.cos(r) - a[1] * Math.sin(r), o[1] = a[0] * Math.sin(r) + a[1] * Math.cos(r), o[2] = a[2], t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
    }, a.forEach = function () {
        var t = a.create();
        return function (e, n, r, a, o, i) {
            var u, s;
            for (n || (n = 3), r || (r = 0), s = a ? Math.min(a * n + r, e.length) : e.length, u = r; u < s; u += n)t[0] = e[u], t[1] = e[u + 1], t[2] = e[u + 2], o(t, t, i), e[u] = t[0], e[u + 1] = t[1], e[u + 2] = t[2];
            return e
        }
    }(), a.angle = function (t, e) {
        var n = a.fromValues(t[0], t[1], t[2]), r = a.fromValues(e[0], e[1], e[2]);
        a.normalize(n, n), a.normalize(r, r);
        var o = a.dot(n, r);
        return o > 1 ? 0 : Math.acos(o)
    }, a.str = function (t) {
        return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
    }, a.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
    }, a.equals = function (t, e) {
        var n = t[0], a = t[1], o = t[2], i = e[0], u = e[1], s = e[2];
        return Math.abs(n - i) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(a - u) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(u)) && Math.abs(o - s) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(s))
    }, t.exports = a
}, function (t, e, n) {
    var r = n(1), a = {};
    a.create = function () {
        var t = new r.ARRAY_TYPE(4);
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
    }, a.clone = function (t) {
        var e = new r.ARRAY_TYPE(4);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }, a.fromValues = function (t, e, n, a) {
        var o = new r.ARRAY_TYPE(4);
        return o[0] = t, o[1] = e, o[2] = n, o[3] = a, o
    }, a.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }, a.set = function (t, e, n, r, a) {
        return t[0] = e, t[1] = n, t[2] = r, t[3] = a, t
    }, a.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t
    }, a.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t
    }, a.sub = a.subtract, a.multiply = function (t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t[2] = e[2] * n[2], t[3] = e[3] * n[3], t
    }, a.mul = a.multiply, a.divide = function (t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t[2] = e[2] / n[2], t[3] = e[3] / n[3], t
    }, a.div = a.divide, a.ceil = function (t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t[3] = Math.ceil(e[3]), t
    }, a.floor = function (t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t[3] = Math.floor(e[3]), t
    }, a.min = function (t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t[2] = Math.min(e[2], n[2]), t[3] = Math.min(e[3], n[3]), t
    }, a.max = function (t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t[2] = Math.max(e[2], n[2]), t[3] = Math.max(e[3], n[3]), t
    }, a.round = function (t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t[3] = Math.round(e[3]), t
    }, a.scale = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t
    }, a.scaleAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t
    }, a.distance = function (t, e) {
        var n = e[0] - t[0], r = e[1] - t[1], a = e[2] - t[2], o = e[3] - t[3];
        return Math.sqrt(n * n + r * r + a * a + o * o)
    }, a.dist = a.distance, a.squaredDistance = function (t, e) {
        var n = e[0] - t[0], r = e[1] - t[1], a = e[2] - t[2], o = e[3] - t[3];
        return n * n + r * r + a * a + o * o
    }, a.sqrDist = a.squaredDistance, a.length = function (t) {
        var e = t[0], n = t[1], r = t[2], a = t[3];
        return Math.sqrt(e * e + n * n + r * r + a * a)
    }, a.len = a.length, a.squaredLength = function (t) {
        var e = t[0], n = t[1], r = t[2], a = t[3];
        return e * e + n * n + r * r + a * a
    }, a.sqrLen = a.squaredLength, a.negate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t
    }, a.inverse = function (t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t[3] = 1 / e[3], t
    }, a.normalize = function (t, e) {
        var n = e[0], r = e[1], a = e[2], o = e[3], i = n * n + r * r + a * a + o * o;
        return i > 0 && (i = 1 / Math.sqrt(i), t[0] = n * i, t[1] = r * i, t[2] = a * i, t[3] = o * i), t
    }, a.dot = function (t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
    }, a.lerp = function (t, e, n, r) {
        var a = e[0], o = e[1], i = e[2], u = e[3];
        return t[0] = a + r * (n[0] - a), t[1] = o + r * (n[1] - o), t[2] = i + r * (n[2] - i), t[3] = u + r * (n[3] - u), t
    }, a.random = function (t, e) {
        return e = e || 1, t[0] = r.RANDOM(), t[1] = r.RANDOM(), t[2] = r.RANDOM(), t[3] = r.RANDOM(), a.normalize(t, t), a.scale(t, t, e), t
    }, a.transformMat4 = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = e[3];
        return t[0] = n[0] * r + n[4] * a + n[8] * o + n[12] * i, t[1] = n[1] * r + n[5] * a + n[9] * o + n[13] * i, t[2] = n[2] * r + n[6] * a + n[10] * o + n[14] * i, t[3] = n[3] * r + n[7] * a + n[11] * o + n[15] * i, t
    }, a.transformQuat = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = n[0], u = n[1], s = n[2], l = n[3], c = l * r + u * o - s * a,
            d = l * a + s * r - i * o, f = l * o + i * a - u * r, h = -i * r - u * a - s * o;
        return t[0] = c * l + h * -i + d * -s - f * -u, t[1] = d * l + h * -u + f * -i - c * -s, t[2] = f * l + h * -s + c * -u - d * -i, t[3] = e[3], t
    }, a.forEach = function () {
        var t = a.create();
        return function (e, n, r, a, o, i) {
            var u, s;
            for (n || (n = 4), r || (r = 0), s = a ? Math.min(a * n + r, e.length) : e.length, u = r; u < s; u += n)t[0] = e[u], t[1] = e[u + 1], t[2] = e[u + 2], t[3] = e[u + 3], o(t, t, i), e[u] = t[0], e[u + 1] = t[1], e[u + 2] = t[2], e[u + 3] = t[3];
            return e
        }
    }(), a.str = function (t) {
        return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
    }, a.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
    }, a.equals = function (t, e) {
        var n = t[0], a = t[1], o = t[2], i = t[3], u = e[0], s = e[1], l = e[2], c = e[3];
        return Math.abs(n - u) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(u)) && Math.abs(a - s) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(s)) && Math.abs(o - l) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(i - c) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(c))
    }, t.exports = a
}, function (t, e, n) {
    var r = n(32), a = r.Symbol;
    t.exports = a
}, function (t, e, n) {
    function r(t, e, n) {
        var r = t[e];
        u.call(t, e) && o(r, n) && (void 0 !== n || e in t) || a(t, e, n)
    }

    var a = n(51), o = n(56), i = Object.prototype, u = i.hasOwnProperty;
    t.exports = r
}, function (t, e, n) {
    function r(t, e, n) {
        "__proto__" == e && a ? a(t, e, {configurable: !0, enumerable: !0, value: n, writable: !0}) : t[e] = n
    }

    var a = n(52);
    t.exports = r
}, function (t, e, n) {
    var r = n(128), a = function () {
        try {
            var t = r(Object, "defineProperty");
            return t({}, "", {}), t
        } catch (t) {
        }
    }();
    t.exports = a
}, function (t, e) {
    (function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    function n(t, e) {
        return e = null == e ? r : e, !!e && ("number" == typeof t || a.test(t)) && t > -1 && t % 1 == 0 && t < e
    }

    var r = 9007199254740991, a = /^(?:0|[1-9]\d*)$/;
    t.exports = n
}, function (t, e) {
    function n(t) {
        var e = t && t.constructor, n = "function" == typeof e && e.prototype || r;
        return t === n
    }

    var r = Object.prototype;
    t.exports = n
}, function (t, e) {
    function n(t, e) {
        return t === e || t !== t && e !== e
    }

    t.exports = n
}, function (t, e) {
    function n(t) {
        return t
    }

    t.exports = n
}, function (t, e, n) {
    function r(t) {
        if (!o(t))return !1;
        var e = a(t);
        return e == u || e == s || e == i || e == l
    }

    var a = n(31), o = n(34), i = "[object AsyncFunction]", u = "[object Function]", s = "[object GeneratorFunction]",
        l = "[object Proxy]";
    t.exports = r
}, function (t, e) {
    function n(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
    }

    var r = 9007199254740991;
    t.exports = n
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {
        }, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
    }
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var a = n(29), o = n(114), i = r(o), u = n(30), s = r(u);
    window.reqAnimFrameID = 0;
    var l = function (t) {
        var e = Math.floor(t), n = e % 60, r = Math.floor(e / 60);
        return r || (r = "00"), n < 10 && (n = "0" + n), r + ":" + n
    }, c = {
        manualControls: {
            a: {index: 1, sign: 1, active: 0},
            d: {index: 1, sign: -1, active: 0},
            w: {index: 0, sign: 1, active: 0},
            s: {index: 0, sign: -1, active: 0},
            q: {index: 2, sign: -1, active: 0},
            e: {index: 2, sign: 1, active: 0}
        },
        manualRotateRate: new Float32Array([0, 0, 0]),
        canvasSizeX: 0,
        canvasSizeY: 0,
        offsetX: 3.1415926,
        offsetY: 0,
        initPlay: !0,
        dragging: !1,
        autoHideTimer: null,
        waitingPlay: !1,
        create: function () {
            canvas.addEventListener("mouseenter", function () {
                c.show()
            }), canvas.addEventListener("mousemove", function () {
                c.show()
            }), playPauseBtn.addEventListener("click", function () {
                c.playPause()
            }), vrBtn.addEventListener("click", function () {
                c.toggleVR()
            }), fullscreenBtn && fullscreenBtn.addEventListener("click", function () {
                c.toggleFullscreen()
            }), video.addEventListener("timeupdate", function () {
                if (!video.paused) {
                    var t = 100 / video.duration * video.currentTime;
                    progressBox.style.width = t + "%", curTime.innerHTML = l(video.currentTime), totalTime.innerHTML = l(video.duration)
                }
            }), seekBar.addEventListener("click", function (t) {
                if (!c.dragging) {
                    var e = t.pageX || t.touches[0].pageX;
                    c.setVideoProgress(e)
                }
            });
            var t = null, e = function (e) {
                t = video.paused, video.paused || c.pause(), c.dragging = !0
            }, n = function (t) {
                c.dragging && c.setVideoProgress(t.pageX || t.touches[0].pageX), t.preventDefault()
            }, r = function (e) {
                c.dragging && (t || c.play(), c.dragging = !1)
            };
            progressThumb.addEventListener("mousedown", e), document.addEventListener("mousemove", n), document.addEventListener("mouseup", r), progressThumb.addEventListener("touchstart", e), document.addEventListener("touchmove", n), document.addEventListener("touchend", r)
        },
        enableKeyControls: function () {
            var t = function (t, e) {
                var n = c.manualControls[String.fromCharCode(t.keyCode).toLowerCase()];
                n && (1 === e && n.active || e === -1 && !n.active || (n.active = 1 === e, c.manualRotateRate[n.index] += e * n.sign))
            }, e = function (t) {
                var e = t.keyCode;
                37 === e ? video.currentTime = video.currentTime - 5 : 39 === e && (video.currentTime = video.currentTime + 5)
            }, n = function (t) {
                switch (String.fromCharCode(t.charCode)) {
                    case"f":
                        c.fullscreen();
                        break;
                    case"z":
                        "undefined" != typeof vrSensor ? vrSensor.zeroSensor() : a.quat.invert(manualRotation, webGL.getPhoneVR().rotationQuat());
                        break;
                    case"p":
                        c.playPause();
                        break;
                    case" ":
                        c.playPause();
                        break;
                    case"g":
                        c.fullscreenIgnoreHMD();
                        break;
                    case"l":
                        c.toggleLooping()
                }
            };
            document.addEventListener("keydown", function (e) {
                t(e, 1)
            }, !1), document.addEventListener("keyup", function (e) {
                t(e, -1)
            }, !1), document.addEventListener("keydown", e, !1), window.addEventListener("keypress", n, !0)
        },
        enableTouchControls: function () {
            var t = 0, e = 0, n = !1, r = 0, a = 0, o = function (o) {
                if ("mousemove" === o.type) {
                    var i = !1;
                    i = "buttons" in o ? 1 === o.buttons : "which" in o ? 1 === o.which : 1 === o.button, i || (n = !1)
                }
                if (o.preventDefault(), n) {
                    var u = o.pageX || o.touches[0].pageX, s = o.pageY || o.touches[0].pageY,
                        l = u - window.pageXOffset, d = s - window.pageYOffset;
                    e = (d - a) / c.canvasSizeY * -5, t = (l - r) / c.canvasSizeX * -5, r || (r = t, a = e);
                    var f = t - r, h = e - a;
                    r = t, a = e, c.offsetX -= f, c.offsetY -= h
                }
            }, i = function () {
                r = null, a = null, n = !1
            }, u = function (t) {
                n = !0
            };
            canvas.addEventListener("mousedown", u), canvas.addEventListener("mousemove", o), canvas.addEventListener("mouseup", i), canvas.addEventListener("touchstart", u), canvas.addEventListener("touchmove", o), canvas.addEventListener("touchend", i)
        },
        enableMouseControls: function () {
            var t = 0, e = 0, n = function (n) {
                var r = n.pageX - window.pageXOffset, a = n.pageY - window.pageYOffset, o = .5 * c.canvasSizeY,
                    i = .5 * c.canvasSizeX;
                e = (a - o) / o * (30 * Math.PI / 180), t = (r - i) / i * (67.5 * Math.PI / 180), c.offsetX = t, c.offsetY = e
            };
            document.addEventListener("mousemove", n)
        },
        loaded: function () {
            c.hideLoading(), curTime.innerHTML = l(video.currentTime), totalTime.innerHTML = l(video.duration), c.sendToParent({
                type: "playerLoaded",
                data: {duration: video.duration}
            }), (c.initPlay && settings.autoplay || c.waitingPlay) && (playPauseBtn.click(), c.waitingPlay && (c.waitingPlay = !1))
        },
        play: function () {
            return video.readyState < 4 ? void(c.waitingPlay = !0) : (window.poster.classList.add("hide"), video.ended && (video.currentTime = .1), video.play(), video.paused || (c.hide(), window.playPauseBtn.classList.add("pause"), window.playPauseBtn.classList.remove("play")), reqAnimFrameID || (reqAnimFrameID = requestAnimationFrame(webGL.drawScene)), void(c.initPlay && (c.initPlay = !1)))
        },
        pause: function () {
            video.pause(), window.playPauseBtn.classList.add("play"), window.playPauseBtn.classList.remove("pause")
        },
        playPause: function () {
            video.paused === !0 ? c.play() : c.pause()
        },
        setLooping: function (t) {
            t = !!t, video.loop !== t && c.toggleLooping()
        },
        toggleLooping: function () {
            video.loop === !0 ? video.loop = !1 : video.loop = !0
        },
        ended: function () {
            c.pause(), reqAnimFrameID && (cancelAnimationFrame(reqAnimFrameID), reqAnimFrameID = 0)
        },
        mute: function () {
            video.muted || (video.muted = !0)
        },
        unmute: function () {
            video.muted && (video.muted = !1)
        },
        loadVideo: function (t) {
            c.pause(), webGL.gl.clear(webGL.gl.COLOR_BUFFER_BIT), reqAnimFrameID && (cancelAnimationFrame(reqAnimFrameID), reqAnimFrameID = 0), manualRotation = a.quat.create(), c.addSourceToVideo(t, "video/mp4"), video.load(), (0, i.default)(video)
        },
        hide: function () {
            window.videoControls.classList.add("hidden"), window.playPauseBtn.classList.add("hidden"), window.showControl = !1
        },
        show: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (t || !window.showControl) {
                window.videoControls.classList.remove("hidden", "hide"), window.playPauseBtn.classList.remove("hidden", "hide"), window.showControl = !0;
                var e = c.autoHideTimer;
                t || (e && (clearTimeout(e), c.autoHideTimer = null), c.autoHideTimer = setTimeout(c.hide, 3e3))
            }
        },
        openVR: function () {
            manualRotation = a.quat.create(), vrMode = !0, window.vrBtn.classList.remove("open"), window.vrBtn.classList.add("close")
        },
        closeVR: function () {
            vrMode = !1, window.vrBtn.classList.remove("close"), window.vrBtn.classList.add("open")
        },
        toggleVR: function () {
            window.vrMode ? c.closeVR() : c.openVR()
        },
        toggleFullscreen: function () {
            window.fullscreen ? c.cancelFullscreen() : c.fullscreenIgnoreHMD()
        },
        fullscreen: function () {
            canvas.mozRequestFullScreen ? canvas.mozRequestFullScreen({vrDisplay: vrHMD}) : canvas.webkitRequestFullscreen ? canvas.webkitRequestFullscreen({vrDisplay: vrHMD}) : canvas.requestFullScreen && canvas.requestFullscreen()
        },
        fullscreenIgnoreHMD: function () {
            canvas.mozRequestFullScreen ? canvas.mozRequestFullScreen() : canvas.webkitRequestFullscreen ? canvas.webkitRequestFullscreen() : canvas.requestFullScreen && canvas.requestFullscreen(),
                window.fullscreen = !0, window.fullscreenBtn.classList.remove("expand"), window.fullscreenBtn.classList.add("shrink")
        },
        cancelFullscreen: function () {
            document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.cancelFullScreen && document.cancelFullScreen(), window.fullscreen = !1, window.fullscreenBtn.classList.remove("shrink"), window.fullscreenBtn.classList.add("expand")
        },
        hideOnboarding: function () {
            for (var t = window.hint.length, e = 0; e < t; e++)window.hint[e].classList.add("hide")
        },
        initOnboarding: function () {
            var t = void 0;
            t = "en" === window.settings.lang ? {
                onboarding: {
                    pc: {text: "Click and Drag to enjoy 360 video"},
                    mobile: {title: "Enjoy 360 Video", rotate: "rotate the phone", or: "OR", drag: "drag the screen"}
                }, portrailLock: {title: "Turn off orientation lock"}
            } : {
                onboarding: {
                    pc: {text: "拖动屏幕体验360度视角"},
                    mobile: {title: "体验360度视频", rotate: "转动手机", or: "或", drag: "拖动屏幕"}
                }, portrailLock: {title: "请关闭竖排方向锁定"}
            };
            var e = document.getElementsByClassName("hint pc")[0],
                n = document.getElementsByClassName("hint mobile")[0];
            e.getElementsByClassName("text")[0].innerHTML = t.onboarding.pc.text, n.getElementsByClassName("title")[0].innerHTML = t.onboarding.mobile.title, n.getElementsByClassName("rotate-text")[0].innerHTML = t.onboarding.mobile.rotate, n.getElementsByClassName("drag-text")[0].innerHTML = t.onboarding.mobile.drag, n.getElementsByClassName("separate")[0].innerHTML = t.onboarding.mobile.or, window.portrailLock.getElementsByClassName("title")[0].innerHTML = t.portrailLock.title
        },
        snapShot: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = function t() {
                c.pause(), setTimeout(function () {
                    var e = canvas.toDataURL("image/png");
                    c.sendToParent({
                        type: "snapShotTaken",
                        data: {moment: video.currentTime, imageSrc: e}
                    }), c.play(), video.removeEventListener("seeked", t)
                }, 1e3)
            };
            if (t) {
                var n = t.moment;
                video.currentTime = n, video.addEventListener("seeked", e)
            } else e()
        },
        sendToParent: function (t) {
            window.parent.postMessage(t, "*")
        },
        checkPortrailLock: function () {
            if (vrMode) {
                var t = webGL.getPhoneVR().deviceOrientation, e = util.isPortrait();
                e && "landscape" === t && !window.showPortrailLock && c.showPortrailLock(), "portrail" === t && window.showPortrailLock && c.hidePortrailLock()
            }
        },
        showPortrailLock: function () {
            window.showPortrailLock = !0;
            var t = webGL.getPhoneVR().deviceGamma > 0 ? -90 : 90;
            window.portrailLock.style.transform = "rotate(" + t + "deg)", window.portrailLock.classList.remove("hide"), setTimeout(c.hidePortrailLock, 3e3)
        },
        hidePortrailLock: function () {
            window.showPortrailLock = !1, window.portrailLock.classList.add("hide")
        },
        setVideoProgress: function (t) {
            var e = function () {
                for (var t = progressBox.offsetLeft, e = progressBox; e = e.offsetParent;)t += e.offsetLeft;
                return t
            }, n = Math.max(0, Math.min(1, (t - e()) / seekBar.offsetWidth));
            video.currentTime = n * video.duration, progressBox.style.width = 100 * n + "%"
        },
        showLoading: function () {
            window.loading && window.loading.classList.remove("hide")
        },
        hideLoading: function () {
            window.loading && window.loading.classList.add("hide")
        },
        addSourceToVideo: function (t, e) {
            var n = document.createElement("source");
            if (n.src = t, n.type = e, s.default.apple.device) {
                var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), a = parseInt(r[1], 10),
                    o = parseInt(r[2], 10);
                a >= 10 && o >= 3 ? video.appendChild(n) : video.src = t
            } else video.appendChild(n)
        }
    };
    window.controls = c
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var a = n(71), o = r(a), i = n(72), u = r(i), s = n(29), l = function () {
        function t() {
            (0, o.default)(this, t), this.deviceAlpha = null, this.deviceGamma = null, this.deviceBeta = null, this.screenOrientation = null, this.deltaAlpha = null, this.deviceOrientation = null
        }

        return (0, u.default)(t, [{
            key: "updateOrientation", value: function (t) {
                if (t.alpha) {
                    this.deltaAlpha || (this.deltaAlpha = 180 + t.alpha);
                    var e = t.alpha, n = t.gamma, r = t.beta;
                    this.deviceAlpha = e, this.deviceGamma = n, this.deviceBeta = r, Math.abs(n) > 70 && Math.abs(r) < 30 && (this.deviceOrientation = "landscape"), Math.abs(r) > 70 && Math.abs(n) < 35 && (this.deviceOrientation = "portrail")
                }
            }
        }, {
            key: "updateScreenOrientation", value: function (t) {
                this.screenOrientation = t
            }
        }, {
            key: "orientationIsAvailable", value: function () {
                return this.deviceAlpha
            }
        }, {
            key: "rotationQuat", value: function () {
                if (!this.orientationIsAvailable())return s.quat.create(1, 0, 0, 0);
                var t = Math.PI / 180, e = this.deviceAlpha * t / 2, n = this.deviceBeta * t / 2,
                    r = this.deviceGamma * t / 2, a = Math.cos(n), o = Math.cos(r), i = Math.cos(e), u = Math.sin(n),
                    l = Math.sin(r), c = Math.sin(e), d = a * o * i - u * l * c;
                n = u * o * i - a * l * c, r = a * l * i + u * o * c, e = a * o * c + u * l * i;
                var f = s.quat.fromValues(n, r, e, d), h = this.screenOrientation * t / 2,
                    p = [0, 0, -Math.sin(h), Math.cos(h)], m = s.quat.create();
                s.quat.multiply(m, f, p);
                var v = Math.sqrt(.5);
                return s.quat.multiply(m, s.quat.fromValues(-v, 0, 0, v), m), m
            }
        }]), t
    }();
    e.default = l, t.exports = e.default
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.initPlayer = void 0;
    var a = n(30), o = r(a), i = n(149), u = r(i), s = n(141), l = r(s), c = {}, d = function () {
        window.container || (window.container = document.getElementById("video-container")), window.container.style.width = window.innerWidth + "px", window.container.style.height = window.innerHeight + "px"
    };
    window.addEventListener("resize", d);
    var f = function (t) {
        if (t) {
            var e = util.getTruthyURLSearchParams(t, {
                autoplay: void 0,
                controls: !0,
                loop: !0,
                sound: !0,
                projection: "mono",
                overlay: !1,
                lang: "zh-CN",
                vrmode: !0,
                fullscreen: !0,
                hfov: 360,
                vfov: 180
            });
            window.settings = e, e.isMobile ? document.body.setAttribute("version", "mobile") : document.body.setAttribute("version", "pc"), document.body.setAttribute("lang", e.lang), e.controls ? controls.show(!0) : (controls.hide(), "undefined" == typeof e.autoplay && (e.autoplay = !0)), e.sound ? controls.unmute() : controls.mute(), e.overlay ? (window.overlay.classList.remove("hide"), controls.enableMouseControls(), controls.hideOnboarding()) : (controls.initOnboarding(), window.overlay.classList.add("hide"), controls.show(!0), setTimeout(controls.hideOnboarding, 3e3)), e.projection = util.getCustomProjection(e.projection), projection !== e.projection && (projection = e.projection, window.projectionSelect && (window.projectionSelect.value = e.projection)), hfov = e.hfov, vfov = e.vfov, controls.setLooping(e.loop), e.video && (window.video.innerHTML = "", controls.loadVideo(e.video)), e.autoplay === !1 && window.video.pause(), e.monitor && u.default.monitor(window.video, {
                debug: !1,
                data: (0, l.default)({
                    player_name: "VeeR VR Player",
                    player_version: "1.0.0",
                    player_init_time: Date.now()
                }, e.monitor)
            }), e.poster && (window.poster.src = e.poster)
        }
    }, h = function () {
        c.setupControls || (o.default.any ? (window.videoControls = document.getElementById("mobileControl"), window.playPauseBtn = document.getElementById("playPauseBtn"), window.fullscreenBtn = null) : (window.videoControls = document.getElementById("pcControl"), window.playPauseBtn = window.videoControls.getElementsByClassName("play-toggle")[0], window.fullscreenBtn = window.videoControls.getElementsByClassName("fullscreen-toggle")[0]), window.vrBtn = window.videoControls.getElementsByClassName("vr-toggle")[0], window.loading = document.getElementById("loading"), window.poster = document.getElementById("poster"), window.seekBar = window.videoControls.getElementsByClassName("seek-bar")[0], window.progressBox = window.videoControls.getElementsByClassName("progress-box")[0], window.progressThumb = window.videoControls.getElementsByClassName("progress-thumb")[0], window.curTime = window.videoControls.getElementsByClassName("cur-time")[0], window.totalTime = window.videoControls.getElementsByClassName("total-time")[0], d(), window.canvas = document.getElementById("glcanvas"), window.video = document.getElementById("video"), window.vrMode = !1, window.showControl = !0, window.fullscreen = !1, window.overlay = document.getElementById("overlay"), window.hint = document.getElementsByClassName("hint"), window.portrailLock = document.getElementById("portrailLock"), controls.create(), c.setupControls = !0)
    }, p = function () {
        c.initPlayer || (h(), webVR.initWebVR(), webGL.initWebGL(), webGL.gl && (webGL.gl.clearColor(0, 0, 0, 0), webGL.gl.clearDepth(1), webGL.gl.disable(webGL.gl.DEPTH_TEST), util.setCanvasSize(), controls.enableKeyControls(), controls.enableTouchControls(), window.shader = new webGL.Shader({
            fragmentShaderName: "shader-fs",
            vertexShaderName: "shader-vs",
            attributes: ["aVertexPosition"],
            uniforms: ["uSampler", "eye", "projection", "proj_inv", "rotateFlag", "hfov", "vfov"]
        }), webGL.initBuffers(), webGL.initTextures(), window.video.addEventListener("canplaythrough", controls.loaded), window.video.addEventListener("ended", controls.ended), window.video.addEventListener("waiting", controls.showLoading), window.video.addEventListener("seeked", controls.hideLoading), window.video.addEventListener("play", controls.hideLoading)), f(window.location.hash || window.location.search), c.runEleVRPlayer = !0)
    };
    window.addEventListener("hashchange", function () {
        window.history.pushState("", document.title, window.location.href + window.location.hash), f(window.location.hash)
    }), window.addEventListener("message", function (t) {
        var e = t.data, n = e.data;
        switch (e.type) {
            case"addSource":
                f(n);
                break;
            case"play":
                controls.play();
                break;
            case"pause":
                controls.pause();
                break;
            case"deviceOrientation":
                webGL.getPhoneVR().updateOrientation(n), controls.checkPortrailLock();
                break;
            case"screenOrientation":
                webGL.getPhoneVR().updateScreenOrientation(n);
                break;
            case"takeSnapshot":
                controls.snapShot(n);
                break;
            default:
                return
        }
    }), e.initPlayer = p
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var a = n(62), o = r(a), i = n(29);
    window.timing = {
        showTiming: !1,
        frameTime: 0,
        prevFrameTime: 0,
        canvasResized: 0,
        textureLoaded: 0,
        textureTime: 0,
        start: 0,
        end: 0,
        framesSinceIssue: 0
    }, window.positionsBuffer = null, window.verticesIndexBuffer = null, window.texture = null, window.vrHMD = void 0, window.vrSensor = void 0, window.totalRotation = null, window.rotation = null, window.manualRotation = i.quat.create(), window.projection = 0, window.hfov = 360, window.vfov = 180;
    var u = {
        gl: null, initWebGL: function () {
            u.gl = null;
            try {
                u.gl = canvas.getContext("webgl", {preserveDrawingBuffer: !0}) || canvas.getContext("experimental-webgl", {preserveDrawingBuffer: !0})
            } catch (t) {
                throw new Error("webgl not support")
            }
        }, getPhoneVR: function () {
            return u.phoneVR || (u.phoneVR = new o.default), u.phoneVR
        }, initBuffers: function () {
            positionsBuffer = u.gl.createBuffer(), u.gl.bindBuffer(u.gl.ARRAY_BUFFER, positionsBuffer);
            var t = [-1, -1, 1, -1, 1, 1, -1, 1];
            u.gl.bufferData(u.gl.ARRAY_BUFFER, new Float32Array(t), u.gl.STATIC_DRAW), verticesIndexBuffer = u.gl.createBuffer(), u.gl.bindBuffer(u.gl.ELEMENT_ARRAY_BUFFER, verticesIndexBuffer);
            var e = [0, 1, 2, 0, 2, 3];
            u.gl.bufferData(u.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(e), u.gl.STATIC_DRAW)
        }, initTextures: function () {
            texture = u.gl.createTexture(), u.gl.bindTexture(u.gl.TEXTURE_2D, texture), u.gl.texParameteri(u.gl.TEXTURE_2D, u.gl.TEXTURE_MAG_FILTER, u.gl.LINEAR), u.gl.texParameteri(u.gl.TEXTURE_2D, u.gl.TEXTURE_MIN_FILTER, u.gl.LINEAR), u.gl.texParameteri(u.gl.TEXTURE_2D, u.gl.TEXTURE_WRAP_S, u.gl.CLAMP_TO_EDGE), u.gl.texParameteri(u.gl.TEXTURE_2D, u.gl.TEXTURE_WRAP_T, u.gl.CLAMP_TO_EDGE), u.gl.bindTexture(u.gl.TEXTURE_2D, null), timing.textureTime = void 0
        }, updateTexture: function () {
            u.gl.bindTexture(u.gl.TEXTURE_2D, texture), u.gl.pixelStorei(u.gl.UNPACK_FLIP_Y_WEBGL, !0), u.gl.texImage2D(u.gl.TEXTURE_2D, 0, u.gl.RGB, u.gl.RGB, u.gl.UNSIGNED_BYTE, video), u.gl.bindTexture(u.gl.TEXTURE_2D, null), timing.textureTime = video.currentTime
        }, Shader: function (t) {
            if (this.params = t, this.fragmentShader = u.getShaderByName(this.params.fragmentShaderName), this.vertexShader = u.getShaderByName(this.params.vertexShaderName), this.program = u.gl.createProgram(), u.gl.attachShader(this.program, this.vertexShader), u.gl.attachShader(this.program, this.fragmentShader), u.gl.linkProgram(this.program), !u.gl.getProgramParameter(this.program, u.gl.LINK_STATUS)) {
                var e = u.gl.getProgramInfoLog(this.program);
                throw new Error("Unable to initialize the shader program: " + e)
            }
            u.gl.useProgram(this.program), this.attributes = {};
            for (var n = 0; n < this.params.attributes.length; n++) {
                var r = this.params.attributes[n];
                this.attributes[r] = u.gl.getAttribLocation(this.program, r), u.gl.enableVertexAttribArray(this.attributes[r])
            }
            this.uniforms = {};
            for (var a = 0; a < this.params.uniforms.length; a++) {
                var o = this.params.uniforms[a];
                this.uniforms[o] = u.gl.getUniformLocation(this.program, o), u.gl.enableVertexAttribArray(this.attributes[o])
            }
        }, getShaderByName: function (t) {
            var e = document.getElementById(t);
            if (!e)return null;
            for (var n = "", r = e.firstChild; r;)3 === r.nodeType && (n += r.textContent), r = r.nextSibling;
            var a = void 0;
            if ("x-shader/x-fragment" === e.type) a = u.gl.createShader(u.gl.FRAGMENT_SHADER); else {
                if ("x-shader/x-vertex" !== e.type)return null;
                a = u.gl.createShader(u.gl.VERTEX_SHADER)
            }
            if (u.gl.shaderSource(a, n), u.gl.compileShader(a), !u.gl.getShaderParameter(a, u.gl.COMPILE_STATUS)) {
                var o = u.gl.getShaderInfoLog(a);
                throw new Error("An error occurred compiling the shaders: " + o)
            }
            return a
        }, drawOneEye: function (t, e) {
            if (u.justifyManualRotation(), u.gl.useProgram(shader.program), u.gl.bindBuffer(u.gl.ARRAY_BUFFER, positionsBuffer), u.gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, u.gl.FLOAT, !1, 0, 0), u.gl.activeTexture(u.gl.TEXTURE0), u.gl.bindTexture(u.gl.TEXTURE_2D, texture), u.gl.uniform1i(shader.uniforms.uSampler, 0), u.gl.uniform1f(shader.uniforms.eye, t), u.gl.uniform1f(shader.uniforms.projection, projection), u.gl.uniform1f(shader.uniforms.hfov, parseFloat(hfov)), u.gl.uniform1f(shader.uniforms.vfov, parseFloat(vfov)), rotation = i.mat4.create(), totalRotation = i.quat.create(), "undefined" != typeof vrSensor) {
                var n = vrSensor.getState();
                if (null !== n && null !== n.orientation && "undefined" != typeof n.orientation && 0 !== n.orientation.x && 0 !== n.orientation.y && 0 !== n.orientation.z && 0 !== n.orientation.w) {
                    var r = new Float32Array([n.orientation.x, n.orientation.y, n.orientation.z, n.orientation.w]);
                    i.quat.multiply(totalRotation, manualRotation, r)
                } else totalRotation = manualRotation;
                i.mat4.fromQuat(rotation, totalRotation)
            } else i.quat.multiply(totalRotation, manualRotation, u.getPhoneVR().rotationQuat()), i.mat4.fromQuat(rotation, totalRotation);
            var a = i.mat4.create();
            i.mat4.invert(a, e);
            var o = i.mat4.create();
            i.mat4.multiply(o, rotation, a), u.gl.uniformMatrix4fv(shader.uniforms.proj_inv, !1, o);
            var s = util.isPortrait();
            s ? (u.gl.uniform1i(shader.uniforms.rotateFlag, 1), 0 === t ? u.gl.viewport(0, canvas.height / 2, canvas.width, canvas.height / 2) : u.gl.viewport(0, 0, canvas.width, canvas.height / 2)) : (u.gl.uniform1i(shader.uniforms.rotateFlag, 0), 0 === t ? u.gl.viewport(0, 0, canvas.width / 2, canvas.height) : u.gl.viewport(canvas.width / 2, 0, canvas.width / 2, canvas.height)), u.gl.bindBuffer(u.gl.ELEMENT_ARRAY_BUFFER, verticesIndexBuffer), u.gl.drawElements(u.gl.TRIANGLES, 6, u.gl.UNSIGNED_SHORT, 0)
        }, drawPreview: function (t) {
            if (u.justifyManualRotation(), u.gl.uniform1i(shader.uniforms.rotateFlag, 0), u.gl.useProgram(shader.program), u.gl.bindBuffer(u.gl.ARRAY_BUFFER, positionsBuffer), u.gl.vertexAttribPointer(shader.attributes.aVertexPosition, 2, u.gl.FLOAT, !1, 0, 0), u.gl.activeTexture(u.gl.TEXTURE0), u.gl.bindTexture(u.gl.TEXTURE_2D, texture), u.gl.uniform1i(shader.uniforms.uSampler, 0), u.gl.uniform1f(shader.uniforms.projection, projection), u.gl.uniform1f(shader.uniforms.hfov, parseFloat(hfov)), u.gl.uniform1f(shader.uniforms.vfov, parseFloat(vfov)), rotation = i.mat4.create(), totalRotation = i.quat.create(), "undefined" != typeof vrSensor) {
                var e = vrSensor.getState();
                if (null !== e && null !== e.orientation && "undefined" != typeof e.orientation && 0 !== e.orientation.x && 0 !== e.orientation.y && 0 !== e.orientation.z && 0 !== e.orientation.w) {
                    var n = new Float32Array([e.orientation.x, e.orientation.y, e.orientation.z, e.orientation.w]);
                    i.quat.multiply(totalRotation, manualRotation, n)
                } else totalRotation = manualRotation;
                i.mat4.fromQuat(rotation, totalRotation)
            } else i.quat.multiply(totalRotation, manualRotation, u.getPhoneVR().rotationQuat()), i.mat4.fromQuat(rotation, totalRotation);
            var r = i.mat4.create();
            i.mat4.invert(r, t);
            var a = i.mat4.create();
            i.mat4.multiply(a, rotation, r), u.gl.uniformMatrix4fv(shader.uniforms.proj_inv, !1, a), u.gl.viewport(0, 0, canvas.width, canvas.height), u.gl.bindBuffer(u.gl.ELEMENT_ARRAY_BUFFER, verticesIndexBuffer), u.gl.drawElements(u.gl.TRIANGLES, 6, u.gl.UNSIGNED_SHORT, 0)
        }, drawScene: function (t) {
            timing.frameTime = t, timing.showTiming && (timing.start = performance.now()), util.setCanvasSize(), timing.showTiming && (timing.canvasResized = performance.now()), u.updateTexture(), timing.showTiming && (timing.textureLoaded = performance.now());
            var e = i.mat4.create();
            if (vrMode)if ("undefined" != typeof vrHMD) {
                var n = vrHMD.getEyeParameters("left"), r = vrHMD.getEyeParameters("right");
                e = util.mat4PerspectiveFromVRFieldOfView(n.recommendedFieldOfView, .1, 10), u.drawOneEye(0, e), e = util.mat4PerspectiveFromVRFieldOfView(r.recommendedFieldOfView, .1, 10), u.drawOneEye(1, e)
            } else {
                var a = canvas.width / 2 / canvas.height;
                util.isPortrait() && (a = canvas.height / 2 / canvas.width), i.mat4.perspective(e, Math.PI / 2, a, .1, 10), u.drawOneEye(0, e), u.drawOneEye(1, e)
            } else {
                var o = canvas.width / canvas.height;
                i.mat4.perspective(e, Math.PI / 2, o, .1, 10), u.drawPreview(e)
            }
            timing.showTiming && (u.gl.finish(), timing.end = performance.now(), timing.end - timing.frameTime > 20 ? timing.framesSinceIssue = 0 : timing.framesSinceIssue++), reqAnimFrameID = requestAnimationFrame(u.drawScene), timing.prevFrameTime = timing.frameTime
        }, justifyManualRotation: function () {
            totalRotation || (totalRotation = i.quat.create()), rotation || (rotation = i.mat4.create());
            var t = i.mat4.create();
            i.mat4.fromQuat(t, u.getPhoneVR().rotationQuat());
            var e = i.vec4.fromValues(1, 0, 0, 1), n = i.vec4.fromValues(0, 1, 0, 1), r = i.vec4.fromValues(0, 0, 1, 1),
                a = i.vec4.create(), o = i.vec4.create(), s = i.vec4.create();
            if (i.vec4.transformMat4(a, e, t), i.vec4.transformMat4(o, n, t), i.vec4.transformMat4(s, r, t), timing.prevFrameTime) {
                var l = .001 * (timing.frameTime - timing.prevFrameTime);
                controls.offsetY += controls.manualRotateRate[0] * l, controls.offsetX += controls.manualRotateRate[1] * l
            }
            var c = n[0] * Math.sin(controls.offsetX / 2), d = n[1] * Math.sin(controls.offsetX / 2),
                f = n[2] * Math.sin(controls.offsetX / 2), h = Math.cos(controls.offsetX / 2),
                p = i.quat.fromValues(c, d, f, h);
            c = a[0] * Math.sin(controls.offsetY / 2), d = a[1] * Math.sin(controls.offsetY / 2), f = a[2] * Math.sin(controls.offsetY / 2), h = Math.cos(controls.offsetY / 2);
            var m = i.quat.fromValues(c, d, f, h);
            i.quat.multiply(manualRotation, p, m)
        }
    };
    window.webGL = u
}, function (t, e) {
    "use strict";
    var n = {
        initWebVR: function () {
            navigator.getVRDevices && navigator.getVRDevices().then(n.vrDeviceCallback)
        }, vrDeviceCallback: function (t) {
            for (var e = 0; e < t.length; ++e)if (t[e] instanceof HMDVRDevice) {
                vrHMD = t[e];
                break
            }
            if (vrHMD) {
                for (var n = 0; n < t.length; ++n)if (t[n] instanceof PositionSensorVRDevice && t[n].hardwareUnitId === vrHMD.hardwareUnitId) {
                    vrSensor = t[n];
                    break
                }
                vrSensor || console.error("Found an HMD, but didn't find its orientation sensor?")
            }
        }
    };
    window.webVR = n
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var a = n(68), o = r(a), i = n(73), u = r(i), s = n(30), l = r(s), c = {
        getScreenOrientation: function () {
            var t = window.screen.orientation || window.screen.mozOrientation;
            switch (t) {
                case"landscape-primary":
                    return 90;
                case"landscape-secondary":
                    return -90;
                case"portrait-secondary":
                    return 180;
                case"portrait-primary":
                    return 0
            }
            return window.orientation ? window.orientation : 0
        }, isPortrait: function () {
            if (!l.default.any)return !1;
            var t = c.getScreenOrientation();
            return 90 !== Math.abs(t)
        }, mat4PerspectiveFromVRFieldOfView: function (t, e, n) {
            var r = Math.tan(t.upDegrees * Math.PI / 180), a = Math.tan(t.downDegrees * Math.PI / 180),
                o = Math.tan(t.leftDegrees * Math.PI / 180), i = Math.tan(t.rightDegrees * Math.PI / 180),
                u = 2 / (o + i), s = 2 / (r + a), l = new Float32Array(16);
            return l[0] = u, l[4] = 0, l[8] = -((o - i) * u * .5), l[12] = 0, l[1] = 0, l[5] = s, l[9] = (r - a) * s * .5, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = n / (e - n), l[14] = n * e / (e - n), l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, l
        }, isFullscreen: function () {
            return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.webkitCurrentFullScreenElement
        }, setCanvasSize: function () {
            var t = window.innerWidth || window.screen.availWidth, e = window.innerHeight || window.screen.availHeight;
            if ("undefined" != typeof vrHMD && "undefined" != typeof c.isFullscreen() && c.isFullscreen()) {
                var n = vrHMD.getEyeParameters("right").renderRect;
                canvas.width = 2 * n.width, canvas.height = n.height, canvas.style.width = t + "px", canvas.style.height = e + "px"
            } else canvas.width = t, canvas.height = e, canvas.style.width = t + "px", canvas.style.height = e + "px", controls.canvasSizeX = screen.width, controls.canvasSizeY = screen.height
        }, getExtension: function (t) {
            return t.substr(t.lastIndexOf(".") + 1)
        }, getBaseFilename: function (t) {
            return t.substr(t.lastIndexOf("/") + 1)
        }, hasVideoExtension: function (t) {
            var e = c.getExtension(t);
            return "mp4" === e || "ogg" === e || "webm" === e
        }, getVideoTitle: function (t) {
            return c.hasVideoExtension(t) ? c.getBaseFilename(t) : t
        }, getCustomProjection: function (t) {
            switch (t.toLowerCase()) {
                case"mono":
                case"2d":
                case"0":
                case"equirectangular":
                    return 0;
                case"left_right":
                    return 2;
                default:
                    return 1
            }
        }, getURLSearchParams: function (t) {
            return "string" != typeof t ? {} : (t = t.trim().replace(/^(\?|#)/, ""), t ? t.trim().split("&").reduce(function (t, e) {
                var n = e.replace(/\+/g, " ").split("="), r = n[0], a = n[1];
                return r = decodeURIComponent(r), a = void 0 === a ? null : decodeURIComponent(a), {}.hasOwnProperty.call(t, r) ? Array.isArray(t[r]) ? t[r].push(a) : t[r] = [t[r], a] : t[r] = a, t
            }, {}) : {})
        }, getJSONSearchParams: function (t) {
            if ("object" === ("undefined" == typeof t ? "undefined" : (0, u.default)(t)))return t;
            t = decodeURIComponent(t).trim().replace(/^(\?|#)/, "");
            try {
                return JSON.parse(t)
            } catch (t) {
                return null
            }
        }, getTruthyURLSearchParams: function (t, e) {
            e || (e = {}), window.innerWidth <= 767 && (e.isMobile = !0);
            var n = void 0;
            "object" === ("undefined" == typeof t ? "undefined" : (0, u.default)(t)) ? n = t : (n = c.getJSONSearchParams(t), n || (n = c.getURLSearchParams(t)));
            var r = {}, a = void 0;
            return (0, o.default)(e).forEach(function (t) {
                r[t] = e[t]
            }), (0, o.default)(n).forEach(function (t) {
                if ("string" == typeof e[t])return void(r[t] = n[t]);
                if ("number" == typeof e[t])return void(r[t] = parseFloat(n[t]));
                if (null === n[t])return void(r[t] = !0);
                switch (a = String(n[t]).toLowerCase()) {
                    case"0":
                    case"false":
                    case"no":
                    case"off":
                    case"undefined":
                    case"null":
                        r[t] = !1;
                        break;
                    case"1":
                    case"true":
                    case"yes":
                    case"on":
                        r[t] = !0;
                        break;
                    default:
                        r[t] = n[t]
                }
            }), r
        }
    };
    window.util = c
}, function (t, e, n) {
    t.exports = {default: n(74), __esModule: !0}
}, function (t, e, n) {
    t.exports = {default: n(75), __esModule: !0}
}, function (t, e, n) {
    t.exports = {default: n(76), __esModule: !0}
}, function (t, e, n) {
    t.exports = {default: n(77), __esModule: !0}
}, function (t, e) {
    "use strict";
    e.__esModule = !0, e.default = function (t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    e.__esModule = !0;
    var a = n(67), o = r(a);
    e.default = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }()
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    e.__esModule = !0;
    var a = n(70), o = r(a), i = n(69), u = r(i),
        s = "function" == typeof u.default && "symbol" == typeof o.default ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof u.default && t.constructor === u.default && t !== u.default.prototype ? "symbol" : typeof t
        };
    e.default = "function" == typeof u.default && "symbol" === s(o.default) ? function (t) {
        return "undefined" == typeof t ? "undefined" : s(t)
    } : function (t) {
        return t && "function" == typeof u.default && t.constructor === u.default && t !== u.default.prototype ? "symbol" : "undefined" == typeof t ? "undefined" : s(t)
    }
}, function (t, e, n) {
    n(99);
    var r = n(7).Object;
    t.exports = function (t, e, n) {
        return r.defineProperty(t, e, n)
    }
}, function (t, e, n) {
    n(100), t.exports = n(7).Object.keys
}, function (t, e, n) {
    n(103), n(101), n(104), n(105), t.exports = n(7).Symbol
}, function (t, e, n) {
    n(102), n(106), t.exports = n(28).f("iterator")
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t)throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e) {
    t.exports = function () {
    }
}, function (t, e, n) {
    var r = n(6), a = n(97), o = n(96);
    t.exports = function (t) {
        return function (e, n, i) {
            var u, s = r(e), l = a(s.length), c = o(i, l);
            if (t && n != n) {
                for (; l > c;)if (u = s[c++], u != u)return !0
            } else for (; l > c; c++)if ((t || c in s) && s[c] === n)return t || c || 0;
            return !t && -1
        }
    }
}, function (t, e, n) {
    var r = n(78);
    t.exports = function (t, e, n) {
        if (r(t), void 0 === e)return t;
        switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function (n, r, a) {
                    return t.call(e, n, r, a)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e, n) {
    var r = n(11), a = n(42), o = n(21);
    t.exports = function (t) {
        var e = r(t), n = a.f;
        if (n)for (var i, u = n(t), s = o.f, l = 0; u.length > l;)s.call(t, i = u[l++]) && e.push(i);
        return e
    }
}, function (t, e, n) {
    t.exports = n(2).document && document.documentElement
}, function (t, e, n) {
    var r = n(36);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function (t, e, n) {
    var r = n(36);
    t.exports = Array.isArray || function (t) {
            return "Array" == r(t)
        }
}, function (t, e, n) {
    "use strict";
    var r = n(40), a = n(15), o = n(22), i = {};
    n(8)(i, n(9)("iterator"), function () {
        return this
    }), t.exports = function (t, e, n) {
        t.prototype = r(i, {next: a(1, n)}), o(t, e + " Iterator")
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {value: e, done: !!t}
    }
}, function (t, e, n) {
    var r = n(11), a = n(6);
    t.exports = function (t, e) {
        for (var n, o = a(t), i = r(o), u = i.length, s = 0; u > s;)if (o[n = i[s++]] === e)return n
    }
}, function (t, e, n) {
    var r = n(16)("meta"), a = n(14), o = n(4), i = n(5).f, u = 0, s = Object.isExtensible || function () {
            return !0
        }, l = !n(10)(function () {
        return s(Object.preventExtensions({}))
    }), c = function (t) {
        i(t, r, {value: {i: "O" + ++u, w: {}}})
    }, d = function (t, e) {
        if (!a(t))return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!o(t, r)) {
            if (!s(t))return "F";
            if (!e)return "E";
            c(t)
        }
        return t[r].i
    }, f = function (t, e) {
        if (!o(t, r)) {
            if (!s(t))return !0;
            if (!e)return !1;
            c(t)
        }
        return t[r].w
    }, h = function (t) {
        return l && p.NEED && s(t) && !o(t, r) && c(t), t
    }, p = t.exports = {KEY: r, NEED: !1, fastKey: d, getWeak: f, onFreeze: h}
}, function (t, e, n) {
    var r = n(5), a = n(12), o = n(11);
    t.exports = n(3) ? Object.defineProperties : function (t, e) {
        a(t);
        for (var n, i = o(e), u = i.length, s = 0; u > s;)r.f(t, n = i[s++], e[n]);
        return t
    }
}, function (t, e, n) {
    var r = n(21), a = n(15), o = n(6), i = n(26), u = n(4), s = n(38), l = Object.getOwnPropertyDescriptor;
    e.f = n(3) ? l : function (t, e) {
        if (t = o(t), e = i(e, !0), s)try {
            return l(t, e)
        } catch (t) {
        }
        if (u(t, e))return a(!r.f.call(t, e), t[e])
    }
}, function (t, e, n) {
    var r = n(6), a = n(41).f, o = {}.toString,
        i = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        u = function (t) {
            try {
                return a(t)
            } catch (t) {
                return i.slice()
            }
        };
    t.exports.f = function (t) {
        return i && "[object Window]" == o.call(t) ? u(t) : a(r(t))
    }
}, function (t, e, n) {
    var r = n(4), a = n(45), o = n(23)("IE_PROTO"), i = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
            return t = a(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? i : null
        }
}, function (t, e, n) {
    var r = n(13), a = n(7), o = n(10);
    t.exports = function (t, e) {
        var n = (a.Object || {})[t] || Object[t], i = {};
        i[t] = e(n), r(r.S + r.F * o(function () {
                n(1)
            }), "Object", i)
    }
}, function (t, e, n) {
    var r = n(25), a = n(17);
    t.exports = function (t) {
        return function (e, n) {
            var o, i, u = String(a(e)), s = r(n), l = u.length;
            return s < 0 || s >= l ? t ? "" : void 0 : (o = u.charCodeAt(s), o < 55296 || o > 56319 || s + 1 === l || (i = u.charCodeAt(s + 1)) < 56320 || i > 57343 ? t ? u.charAt(s) : o : t ? u.slice(s, s + 2) : (o - 55296 << 10) + (i - 56320) + 65536)
        }
    }
}, function (t, e, n) {
    var r = n(25), a = Math.max, o = Math.min;
    t.exports = function (t, e) {
        return t = r(t), t < 0 ? a(t + e, 0) : o(t, e)
    }
}, function (t, e, n) {
    var r = n(25), a = Math.min;
    t.exports = function (t) {
        return t > 0 ? a(r(t), 9007199254740991) : 0
    }
}, function (t, e, n) {
    "use strict";
    var r = n(79), a = n(87), o = n(19), i = n(6);
    t.exports = n(39)(Array, "Array", function (t, e) {
        this._t = i(t), this._i = 0, this._k = e
    }, function () {
        var t = this._t, e = this._k, n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, a(1)) : "keys" == e ? a(0, n) : "values" == e ? a(0, t[n]) : a(0, [n, t[n]])
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function (t, e, n) {
    var r = n(13);
    r(r.S + r.F * !n(3), "Object", {defineProperty: n(5).f})
}, function (t, e, n) {
    var r = n(45), a = n(11);
    n(94)("keys", function () {
        return function (t) {
            return a(r(t))
        }
    })
}, function (t, e) {
}, function (t, e, n) {
    "use strict";
    var r = n(95)(!0);
    n(39)(String, "String", function (t) {
        this._t = String(t), this._i = 0
    }, function () {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {value: void 0, done: !0} : (t = r(e, n), this._i += t.length, {value: t, done: !1})
    })
}, function (t, e, n) {
    "use strict";
    var r = n(2), a = n(4), o = n(3), i = n(13), u = n(44), s = n(89).KEY, l = n(10), c = n(24), d = n(22), f = n(16),
        h = n(9), p = n(28), m = n(27), v = n(88), b = n(82), y = n(85), M = n(12), g = n(6), w = n(26), x = n(15),
        _ = n(40), S = n(92), I = n(91), D = n(5), F = n(11), E = I.f, P = D.f, T = S.f, O = r.Symbol, k = r.JSON,
        A = k && k.stringify, R = "prototype", j = h("_hidden"), L = h("toPrimitive"), N = {}.propertyIsEnumerable,
        C = c("symbol-registry"), B = c("symbols"), z = c("op-symbols"), q = Object[R], V = "function" == typeof O,
        U = r.QObject, H = !U || !U[R] || !U[R].findChild, W = o && l(function () {
            return 7 != _(P({}, "a", {
                    get: function () {
                        return P(this, "a", {value: 7}).a
                    }
                })).a
        }) ? function (t, e, n) {
            var r = E(q, e);
            r && delete q[e], P(t, e, n), r && t !== q && P(q, e, r)
        } : P, Y = function (t) {
            var e = B[t] = _(O[R]);
            return e._k = t, e
        }, G = V && "symbol" == typeof O.iterator ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            return t instanceof O
        }, X = function (t, e, n) {
            return t === q && X(z, e, n), M(t), e = w(e, !0), M(n), a(B, e) ? (n.enumerable ? (a(t, j) && t[j][e] && (t[j][e] = !1), n = _(n, {enumerable: x(0, !1)})) : (a(t, j) || P(t, j, x(1, {})), t[j][e] = !0), W(t, e, n)) : P(t, e, n)
        }, K = function (t, e) {
            M(t);
            for (var n, r = b(e = g(e)), a = 0, o = r.length; o > a;)X(t, n = r[a++], e[n]);
            return t
        }, $ = function (t, e) {
            return void 0 === e ? _(t) : K(_(t), e)
        }, J = function (t) {
            var e = N.call(this, t = w(t, !0));
            return !(this === q && a(B, t) && !a(z, t)) && (!(e || !a(this, t) || !a(B, t) || a(this, j) && this[j][t]) || e)
        }, Q = function (t, e) {
            if (t = g(t), e = w(e, !0), t !== q || !a(B, e) || a(z, e)) {
                var n = E(t, e);
                return !n || !a(B, e) || a(t, j) && t[j][e] || (n.enumerable = !0), n
            }
        }, Z = function (t) {
            for (var e, n = T(g(t)), r = [], o = 0; n.length > o;)a(B, e = n[o++]) || e == j || e == s || r.push(e);
            return r
        }, tt = function (t) {
            for (var e, n = t === q, r = T(n ? z : g(t)), o = [], i = 0; r.length > i;)!a(B, e = r[i++]) || n && !a(q, e) || o.push(B[e]);
            return o
        };
    V || (O = function () {
        if (this instanceof O)throw TypeError("Symbol is not a constructor!");
        var t = f(arguments.length > 0 ? arguments[0] : void 0), e = function (n) {
            this === q && e.call(z, n), a(this, j) && a(this[j], t) && (this[j][t] = !1), W(this, t, x(1, n))
        };
        return o && H && W(q, t, {configurable: !0, set: e}), Y(t)
    }, u(O[R], "toString", function () {
        return this._k
    }), I.f = Q, D.f = X, n(41).f = S.f = Z, n(21).f = J, n(42).f = tt, o && !n(20) && u(q, "propertyIsEnumerable", J, !0), p.f = function (t) {
        return Y(h(t))
    }), i(i.G + i.W + i.F * !V, {Symbol: O});
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;)h(et[nt++]);
    for (var et = F(h.store), nt = 0; et.length > nt;)m(et[nt++]);
    i(i.S + i.F * !V, "Symbol", {
        for: function (t) {
            return a(C, t += "") ? C[t] : C[t] = O(t)
        }, keyFor: function (t) {
            if (G(t))return v(C, t);
            throw TypeError(t + " is not a symbol!")
        }, useSetter: function () {
            H = !0
        }, useSimple: function () {
            H = !1
        }
    }), i(i.S + i.F * !V, "Object", {
        create: $,
        defineProperty: X,
        defineProperties: K,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: tt
    }), k && i(i.S + i.F * (!V || l(function () {
            var t = O();
            return "[null]" != A([t]) || "{}" != A({a: t}) || "{}" != A(Object(t))
        })), "JSON", {
        stringify: function (t) {
            if (void 0 !== t && !G(t)) {
                for (var e, n, r = [t], a = 1; arguments.length > a;)r.push(arguments[a++]);
                return e = r[1], "function" == typeof e && (n = e), !n && y(e) || (e = function (t, e) {
                    if (n && (e = n.call(this, t, e)), !G(e))return e
                }), r[1] = e, A.apply(k, r)
            }
        }
    }), O[R][L] || n(8)(O[R], L, O[R].valueOf), d(O, "Symbol"), d(Math, "Math", !0), d(r.JSON, "JSON", !0)
}, function (t, e, n) {
    n(27)("asyncIterator")
}, function (t, e, n) {
    n(27)("observable")
}, function (t, e, n) {
    n(98);
    for (var r = n(2), a = n(8), o = n(19), i = n(9)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], s = 0; s < 5; s++) {
        var l = u[s], c = r[l], d = c && c.prototype;
        d && !d[i] && a(d, i, l), o[l] = o.Array
    }
}, function (t, e) {
}, function (t, e, n) {
    var r = n(1), a = {};
    a.create = function () {
        var t = new r.ARRAY_TYPE(4);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
    }, a.clone = function (t) {
        var e = new r.ARRAY_TYPE(4);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }, a.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }, a.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
    }, a.fromValues = function (t, e, n, a) {
        var o = new r.ARRAY_TYPE(4);
        return o[0] = t, o[1] = e, o[2] = n, o[3] = a, o
    }, a.set = function (t, e, n, r, a) {
        return t[0] = e, t[1] = n, t[2] = r, t[3] = a, t
    }, a.transpose = function (t, e) {
        if (t === e) {
            var n = e[1];
            t[1] = e[2], t[2] = n
        } else t[0] = e[0], t[1] = e[2], t[2] = e[1], t[3] = e[3];
        return t
    }, a.invert = function (t, e) {
        var n = e[0], r = e[1], a = e[2], o = e[3], i = n * o - a * r;
        return i ? (i = 1 / i, t[0] = o * i, t[1] = -r * i,
            t[2] = -a * i, t[3] = n * i, t) : null
    }, a.adjoint = function (t, e) {
        var n = e[0];
        return t[0] = e[3], t[1] = -e[1], t[2] = -e[2], t[3] = n, t
    }, a.determinant = function (t) {
        return t[0] * t[3] - t[2] * t[1]
    }, a.multiply = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = e[3], u = n[0], s = n[1], l = n[2], c = n[3];
        return t[0] = r * u + o * s, t[1] = a * u + i * s, t[2] = r * l + o * c, t[3] = a * l + i * c, t
    }, a.mul = a.multiply, a.rotate = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = e[3], u = Math.sin(n), s = Math.cos(n);
        return t[0] = r * s + o * u, t[1] = a * s + i * u, t[2] = r * -u + o * s, t[3] = a * -u + i * s, t
    }, a.scale = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = e[3], u = n[0], s = n[1];
        return t[0] = r * u, t[1] = a * u, t[2] = o * s, t[3] = i * s, t
    }, a.fromRotation = function (t, e) {
        var n = Math.sin(e), r = Math.cos(e);
        return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t
    }, a.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t
    }, a.str = function (t) {
        return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
    }, a.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2))
    }, a.LDU = function (t, e, n, r) {
        return t[2] = r[2] / r[0], n[0] = r[0], n[1] = r[1], n[3] = r[3] - t[2] * n[1], [t, e, n]
    }, a.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t
    }, a.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t
    }, a.sub = a.subtract, a.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
    }, a.equals = function (t, e) {
        var n = t[0], a = t[1], o = t[2], i = t[3], u = e[0], s = e[1], l = e[2], c = e[3];
        return Math.abs(n - u) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(u)) && Math.abs(a - s) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(s)) && Math.abs(o - l) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(i - c) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(c))
    }, a.multiplyScalar = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t
    }, a.multiplyScalarAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t
    }, t.exports = a
}, function (t, e, n) {
    var r = n(1), a = {};
    a.create = function () {
        var t = new r.ARRAY_TYPE(6);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
    }, a.clone = function (t) {
        var e = new r.ARRAY_TYPE(6);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
    }, a.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
    }, a.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
    }, a.fromValues = function (t, e, n, a, o, i) {
        var u = new r.ARRAY_TYPE(6);
        return u[0] = t, u[1] = e, u[2] = n, u[3] = a, u[4] = o, u[5] = i, u
    }, a.set = function (t, e, n, r, a, o, i) {
        return t[0] = e, t[1] = n, t[2] = r, t[3] = a, t[4] = o, t[5] = i, t
    }, a.invert = function (t, e) {
        var n = e[0], r = e[1], a = e[2], o = e[3], i = e[4], u = e[5], s = n * o - r * a;
        return s ? (s = 1 / s, t[0] = o * s, t[1] = -r * s, t[2] = -a * s, t[3] = n * s, t[4] = (a * u - o * i) * s, t[5] = (r * i - n * u) * s, t) : null
    }, a.determinant = function (t) {
        return t[0] * t[3] - t[1] * t[2]
    }, a.multiply = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = e[3], u = e[4], s = e[5], l = n[0], c = n[1], d = n[2], f = n[3],
            h = n[4], p = n[5];
        return t[0] = r * l + o * c, t[1] = a * l + i * c, t[2] = r * d + o * f, t[3] = a * d + i * f, t[4] = r * h + o * p + u, t[5] = a * h + i * p + s, t
    }, a.mul = a.multiply, a.rotate = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = e[3], u = e[4], s = e[5], l = Math.sin(n), c = Math.cos(n);
        return t[0] = r * c + o * l, t[1] = a * c + i * l, t[2] = r * -l + o * c, t[3] = a * -l + i * c, t[4] = u, t[5] = s, t
    }, a.scale = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = e[3], u = e[4], s = e[5], l = n[0], c = n[1];
        return t[0] = r * l, t[1] = a * l, t[2] = o * c, t[3] = i * c, t[4] = u, t[5] = s, t
    }, a.translate = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = e[3], u = e[4], s = e[5], l = n[0], c = n[1];
        return t[0] = r, t[1] = a, t[2] = o, t[3] = i, t[4] = r * l + o * c + u, t[5] = a * l + i * c + s, t
    }, a.fromRotation = function (t, e) {
        var n = Math.sin(e), r = Math.cos(e);
        return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t[4] = 0, t[5] = 0, t
    }, a.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t[4] = 0, t[5] = 0, t
    }, a.fromTranslation = function (t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = e[0], t[5] = e[1], t
    }, a.str = function (t) {
        return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
    }, a.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1)
    }, a.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t
    }, a.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t
    }, a.sub = a.subtract, a.multiplyScalar = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t
    }, a.multiplyScalarAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t
    }, a.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5]
    }, a.equals = function (t, e) {
        var n = t[0], a = t[1], o = t[2], i = t[3], u = t[4], s = t[5], l = e[0], c = e[1], d = e[2], f = e[3],
            h = e[4], p = e[5];
        return Math.abs(n - l) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(a - c) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(c)) && Math.abs(o - d) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(i - f) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(f)) && Math.abs(u - h) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(h)) && Math.abs(s - p) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(p))
    }, t.exports = a
}, function (t, e, n) {
    var r = n(1), a = {scalar: {}, SIMD: {}};
    a.create = function () {
        var t = new r.ARRAY_TYPE(16);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, a.clone = function (t) {
        var e = new r.ARRAY_TYPE(16);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }, a.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }, a.fromValues = function (t, e, n, a, o, i, u, s, l, c, d, f, h, p, m, v) {
        var b = new r.ARRAY_TYPE(16);
        return b[0] = t, b[1] = e, b[2] = n, b[3] = a, b[4] = o, b[5] = i, b[6] = u, b[7] = s, b[8] = l, b[9] = c, b[10] = d, b[11] = f, b[12] = h, b[13] = p, b[14] = m, b[15] = v, b
    }, a.set = function (t, e, n, r, a, o, i, u, s, l, c, d, f, h, p, m, v) {
        return t[0] = e, t[1] = n, t[2] = r, t[3] = a, t[4] = o, t[5] = i, t[6] = u, t[7] = s, t[8] = l, t[9] = c, t[10] = d, t[11] = f, t[12] = h, t[13] = p, t[14] = m, t[15] = v, t
    }, a.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, a.scalar.transpose = function (t, e) {
        if (t === e) {
            var n = e[1], r = e[2], a = e[3], o = e[6], i = e[7], u = e[11];
            t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = n, t[6] = e[9], t[7] = e[13], t[8] = r, t[9] = o, t[11] = e[14], t[12] = a, t[13] = i, t[14] = u
        } else t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15];
        return t
    }, a.SIMD.transpose = function (t, e) {
        var n, r, a, o, i, u, s, l, c, d;
        return n = SIMD.Float32x4.load(e, 0), r = SIMD.Float32x4.load(e, 4), a = SIMD.Float32x4.load(e, 8), o = SIMD.Float32x4.load(e, 12), i = SIMD.Float32x4.shuffle(n, r, 0, 1, 4, 5), u = SIMD.Float32x4.shuffle(a, o, 0, 1, 4, 5), s = SIMD.Float32x4.shuffle(i, u, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(i, u, 1, 3, 5, 7), SIMD.Float32x4.store(t, 0, s), SIMD.Float32x4.store(t, 4, l), i = SIMD.Float32x4.shuffle(n, r, 2, 3, 6, 7), u = SIMD.Float32x4.shuffle(a, o, 2, 3, 6, 7), c = SIMD.Float32x4.shuffle(i, u, 0, 2, 4, 6), d = SIMD.Float32x4.shuffle(i, u, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, c), SIMD.Float32x4.store(t, 12, d), t
    }, a.transpose = r.USE_SIMD ? a.SIMD.transpose : a.scalar.transpose, a.scalar.invert = function (t, e) {
        var n = e[0], r = e[1], a = e[2], o = e[3], i = e[4], u = e[5], s = e[6], l = e[7], c = e[8], d = e[9],
            f = e[10], h = e[11], p = e[12], m = e[13], v = e[14], b = e[15], y = n * u - r * i, M = n * s - a * i,
            g = n * l - o * i, w = r * s - a * u, x = r * l - o * u, _ = a * l - o * s, S = c * m - d * p,
            I = c * v - f * p, D = c * b - h * p, F = d * v - f * m, E = d * b - h * m, P = f * b - h * v,
            T = y * P - M * E + g * F + w * D - x * I + _ * S;
        return T ? (T = 1 / T, t[0] = (u * P - s * E + l * F) * T, t[1] = (a * E - r * P - o * F) * T, t[2] = (m * _ - v * x + b * w) * T, t[3] = (f * x - d * _ - h * w) * T, t[4] = (s * D - i * P - l * I) * T, t[5] = (n * P - a * D + o * I) * T, t[6] = (v * g - p * _ - b * M) * T, t[7] = (c * _ - f * g + h * M) * T, t[8] = (i * E - u * D + l * S) * T, t[9] = (r * D - n * E - o * S) * T, t[10] = (p * x - m * g + b * y) * T, t[11] = (d * g - c * x - h * y) * T, t[12] = (u * I - i * F - s * S) * T, t[13] = (n * F - r * I + a * S) * T, t[14] = (m * M - p * w - v * y) * T, t[15] = (c * w - d * M + f * y) * T, t) : null
    }, a.SIMD.invert = function (t, e) {
        var n, r, a, o, i, u, s, l, c, d, f = SIMD.Float32x4.load(e, 0), h = SIMD.Float32x4.load(e, 4),
            p = SIMD.Float32x4.load(e, 8), m = SIMD.Float32x4.load(e, 12);
        return i = SIMD.Float32x4.shuffle(f, h, 0, 1, 4, 5), r = SIMD.Float32x4.shuffle(p, m, 0, 1, 4, 5), n = SIMD.Float32x4.shuffle(i, r, 0, 2, 4, 6), r = SIMD.Float32x4.shuffle(r, i, 1, 3, 5, 7), i = SIMD.Float32x4.shuffle(f, h, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(p, m, 2, 3, 6, 7), a = SIMD.Float32x4.shuffle(i, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, i, 1, 3, 5, 7), i = SIMD.Float32x4.mul(a, o), i = SIMD.Float32x4.swizzle(i, 1, 0, 3, 2), u = SIMD.Float32x4.mul(r, i), s = SIMD.Float32x4.mul(n, i), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, i), u), s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, i), s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), i = SIMD.Float32x4.mul(r, a), i = SIMD.Float32x4.swizzle(i, 1, 0, 3, 2), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, i), u), c = SIMD.Float32x4.mul(n, i), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(o, i)), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, i), c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), i = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(r, 2, 3, 0, 1), o), i = SIMD.Float32x4.swizzle(i, 1, 0, 3, 2), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, i), u), l = SIMD.Float32x4.mul(n, i), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(a, i)), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, i), l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), i = SIMD.Float32x4.mul(n, r), i = SIMD.Float32x4.swizzle(i, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, i), l), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, i), c), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, i), l), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(a, i)), i = SIMD.Float32x4.mul(n, o), i = SIMD.Float32x4.swizzle(i, 1, 0, 3, 2), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(a, i)), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, i), l), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, i), s), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(r, i)), i = SIMD.Float32x4.mul(n, a), i = SIMD.Float32x4.swizzle(i, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, i), s), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(r, i)), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(o, i)), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, i), c), d = SIMD.Float32x4.mul(n, u), d = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(d, 2, 3, 0, 1), d), d = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(d, 1, 0, 3, 2), d), i = SIMD.Float32x4.reciprocalApproximation(d), d = SIMD.Float32x4.sub(SIMD.Float32x4.add(i, i), SIMD.Float32x4.mul(d, SIMD.Float32x4.mul(i, i))), (d = SIMD.Float32x4.swizzle(d, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(d, u)), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(d, s)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(d, l)), SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(d, c)), t) : null
    }, a.invert = r.USE_SIMD ? a.SIMD.invert : a.scalar.invert, a.scalar.adjoint = function (t, e) {
        var n = e[0], r = e[1], a = e[2], o = e[3], i = e[4], u = e[5], s = e[6], l = e[7], c = e[8], d = e[9],
            f = e[10], h = e[11], p = e[12], m = e[13], v = e[14], b = e[15];
        return t[0] = u * (f * b - h * v) - d * (s * b - l * v) + m * (s * h - l * f), t[1] = -(r * (f * b - h * v) - d * (a * b - o * v) + m * (a * h - o * f)), t[2] = r * (s * b - l * v) - u * (a * b - o * v) + m * (a * l - o * s), t[3] = -(r * (s * h - l * f) - u * (a * h - o * f) + d * (a * l - o * s)), t[4] = -(i * (f * b - h * v) - c * (s * b - l * v) + p * (s * h - l * f)), t[5] = n * (f * b - h * v) - c * (a * b - o * v) + p * (a * h - o * f), t[6] = -(n * (s * b - l * v) - i * (a * b - o * v) + p * (a * l - o * s)), t[7] = n * (s * h - l * f) - i * (a * h - o * f) + c * (a * l - o * s), t[8] = i * (d * b - h * m) - c * (u * b - l * m) + p * (u * h - l * d), t[9] = -(n * (d * b - h * m) - c * (r * b - o * m) + p * (r * h - o * d)), t[10] = n * (u * b - l * m) - i * (r * b - o * m) + p * (r * l - o * u), t[11] = -(n * (u * h - l * d) - i * (r * h - o * d) + c * (r * l - o * u)), t[12] = -(i * (d * v - f * m) - c * (u * v - s * m) + p * (u * f - s * d)), t[13] = n * (d * v - f * m) - c * (r * v - a * m) + p * (r * f - a * d), t[14] = -(n * (u * v - s * m) - i * (r * v - a * m) + p * (r * s - a * u)), t[15] = n * (u * f - s * d) - i * (r * f - a * d) + c * (r * s - a * u), t
    }, a.SIMD.adjoint = function (t, e) {
        var n, r, a, o, i, u, s, l, c, d, f, h, p, n = SIMD.Float32x4.load(e, 0), r = SIMD.Float32x4.load(e, 4),
            a = SIMD.Float32x4.load(e, 8), o = SIMD.Float32x4.load(e, 12);
        return c = SIMD.Float32x4.shuffle(n, r, 0, 1, 4, 5), u = SIMD.Float32x4.shuffle(a, o, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(c, u, 0, 2, 4, 6), u = SIMD.Float32x4.shuffle(u, c, 1, 3, 5, 7), c = SIMD.Float32x4.shuffle(n, r, 2, 3, 6, 7), l = SIMD.Float32x4.shuffle(a, o, 2, 3, 6, 7), s = SIMD.Float32x4.shuffle(c, l, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(l, c, 1, 3, 5, 7), c = SIMD.Float32x4.mul(s, l), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), d = SIMD.Float32x4.mul(u, c), f = SIMD.Float32x4.mul(i, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, c), d), f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, c), f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), c = SIMD.Float32x4.mul(u, s), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), d), p = SIMD.Float32x4.mul(i, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(l, c)), p = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, c), p), p = SIMD.Float32x4.swizzle(p, 2, 3, 0, 1), c = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), l), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, c), d), h = SIMD.Float32x4.mul(i, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(s, c)), h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, c), h), h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), c = SIMD.Float32x4.mul(i, u), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), h), p = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, c), p), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, c), h), p = SIMD.Float32x4.sub(p, SIMD.Float32x4.mul(s, c)), c = SIMD.Float32x4.mul(i, l), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(s, c)), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(u, c), h), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, c), f), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(u, c)), c = SIMD.Float32x4.mul(i, s), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), f), p = SIMD.Float32x4.sub(p, SIMD.Float32x4.mul(u, c)), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(l, c)), p = SIMD.Float32x4.add(SIMD.Float32x4.mul(u, c), p), SIMD.Float32x4.store(t, 0, d), SIMD.Float32x4.store(t, 4, f), SIMD.Float32x4.store(t, 8, h), SIMD.Float32x4.store(t, 12, p), t
    }, a.adjoint = r.USE_SIMD ? a.SIMD.adjoint : a.scalar.adjoint, a.determinant = function (t) {
        var e = t[0], n = t[1], r = t[2], a = t[3], o = t[4], i = t[5], u = t[6], s = t[7], l = t[8], c = t[9],
            d = t[10], f = t[11], h = t[12], p = t[13], m = t[14], v = t[15], b = e * i - n * o, y = e * u - r * o,
            M = e * s - a * o, g = n * u - r * i, w = n * s - a * i, x = r * s - a * u, _ = l * p - c * h,
            S = l * m - d * h, I = l * v - f * h, D = c * m - d * p, F = c * v - f * p, E = d * v - f * m;
        return b * E - y * F + M * D + g * I - w * S + x * _
    }, a.SIMD.multiply = function (t, e, n) {
        var r = SIMD.Float32x4.load(e, 0), a = SIMD.Float32x4.load(e, 4), o = SIMD.Float32x4.load(e, 8),
            i = SIMD.Float32x4.load(e, 12), u = SIMD.Float32x4.load(n, 0),
            s = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 1, 1, 1, 1), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 3, 3, 3, 3), i))));
        SIMD.Float32x4.store(t, 0, s);
        var l = SIMD.Float32x4.load(n, 4),
            c = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 1, 1, 1, 1), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 3, 3, 3, 3), i))));
        SIMD.Float32x4.store(t, 4, c);
        var d = SIMD.Float32x4.load(n, 8),
            f = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 1, 1, 1, 1), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 3, 3, 3, 3), i))));
        SIMD.Float32x4.store(t, 8, f);
        var h = SIMD.Float32x4.load(n, 12),
            p = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), a), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), i))));
        return SIMD.Float32x4.store(t, 12, p), t
    }, a.scalar.multiply = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = e[3], u = e[4], s = e[5], l = e[6], c = e[7], d = e[8], f = e[9],
            h = e[10], p = e[11], m = e[12], v = e[13], b = e[14], y = e[15], M = n[0], g = n[1], w = n[2], x = n[3];
        return t[0] = M * r + g * u + w * d + x * m, t[1] = M * a + g * s + w * f + x * v, t[2] = M * o + g * l + w * h + x * b, t[3] = M * i + g * c + w * p + x * y, M = n[4], g = n[5], w = n[6], x = n[7], t[4] = M * r + g * u + w * d + x * m, t[5] = M * a + g * s + w * f + x * v, t[6] = M * o + g * l + w * h + x * b, t[7] = M * i + g * c + w * p + x * y, M = n[8], g = n[9], w = n[10], x = n[11], t[8] = M * r + g * u + w * d + x * m, t[9] = M * a + g * s + w * f + x * v, t[10] = M * o + g * l + w * h + x * b, t[11] = M * i + g * c + w * p + x * y, M = n[12], g = n[13], w = n[14], x = n[15], t[12] = M * r + g * u + w * d + x * m, t[13] = M * a + g * s + w * f + x * v, t[14] = M * o + g * l + w * h + x * b, t[15] = M * i + g * c + w * p + x * y, t
    }, a.multiply = r.USE_SIMD ? a.SIMD.multiply : a.scalar.multiply, a.mul = a.multiply, a.scalar.translate = function (t, e, n) {
        var r, a, o, i, u, s, l, c, d, f, h, p, m = n[0], v = n[1], b = n[2];
        return e === t ? (t[12] = e[0] * m + e[4] * v + e[8] * b + e[12], t[13] = e[1] * m + e[5] * v + e[9] * b + e[13], t[14] = e[2] * m + e[6] * v + e[10] * b + e[14], t[15] = e[3] * m + e[7] * v + e[11] * b + e[15]) : (r = e[0], a = e[1], o = e[2], i = e[3], u = e[4], s = e[5], l = e[6], c = e[7], d = e[8], f = e[9], h = e[10], p = e[11], t[0] = r, t[1] = a, t[2] = o, t[3] = i, t[4] = u, t[5] = s, t[6] = l, t[7] = c, t[8] = d, t[9] = f, t[10] = h, t[11] = p, t[12] = r * m + u * v + d * b + e[12], t[13] = a * m + s * v + f * b + e[13], t[14] = o * m + l * v + h * b + e[14], t[15] = i * m + c * v + p * b + e[15]), t
    }, a.SIMD.translate = function (t, e, n) {
        var r = SIMD.Float32x4.load(e, 0), a = SIMD.Float32x4.load(e, 4), o = SIMD.Float32x4.load(e, 8),
            i = SIMD.Float32x4.load(e, 12), u = SIMD.Float32x4(n[0], n[1], n[2], 0);
        e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11]), r = SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(u, 0, 0, 0, 0)), a = SIMD.Float32x4.mul(a, SIMD.Float32x4.swizzle(u, 1, 1, 1, 1)), o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(u, 2, 2, 2, 2));
        var s = SIMD.Float32x4.add(r, SIMD.Float32x4.add(a, SIMD.Float32x4.add(o, i)));
        return SIMD.Float32x4.store(t, 12, s), t
    }, a.translate = r.USE_SIMD ? a.SIMD.translate : a.scalar.translate, a.scalar.scale = function (t, e, n) {
        var r = n[0], a = n[1], o = n[2];
        return t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t[4] = e[4] * a, t[5] = e[5] * a, t[6] = e[6] * a, t[7] = e[7] * a, t[8] = e[8] * o, t[9] = e[9] * o, t[10] = e[10] * o, t[11] = e[11] * o, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }, a.SIMD.scale = function (t, e, n) {
        var r, a, o, i = SIMD.Float32x4(n[0], n[1], n[2], 0);
        return r = SIMD.Float32x4.load(e, 0), SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(i, 0, 0, 0, 0))), a = SIMD.Float32x4.load(e, 4), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(a, SIMD.Float32x4.swizzle(i, 1, 1, 1, 1))), o = SIMD.Float32x4.load(e, 8), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(i, 2, 2, 2, 2))), t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }, a.scale = r.USE_SIMD ? a.SIMD.scale : a.scalar.scale, a.rotate = function (t, e, n, a) {
        var o, i, u, s, l, c, d, f, h, p, m, v, b, y, M, g, w, x, _, S, I, D, F, E, P = a[0], T = a[1], O = a[2],
            k = Math.sqrt(P * P + T * T + O * O);
        return Math.abs(k) < r.EPSILON ? null : (k = 1 / k, P *= k, T *= k, O *= k, o = Math.sin(n), i = Math.cos(n), u = 1 - i, s = e[0], l = e[1], c = e[2], d = e[3], f = e[4], h = e[5], p = e[6], m = e[7], v = e[8], b = e[9], y = e[10], M = e[11], g = P * P * u + i, w = T * P * u + O * o, x = O * P * u - T * o, _ = P * T * u - O * o, S = T * T * u + i, I = O * T * u + P * o, D = P * O * u + T * o, F = T * O * u - P * o, E = O * O * u + i, t[0] = s * g + f * w + v * x, t[1] = l * g + h * w + b * x, t[2] = c * g + p * w + y * x, t[3] = d * g + m * w + M * x, t[4] = s * _ + f * S + v * I, t[5] = l * _ + h * S + b * I, t[6] = c * _ + p * S + y * I, t[7] = d * _ + m * S + M * I, t[8] = s * D + f * F + v * E, t[9] = l * D + h * F + b * E, t[10] = c * D + p * F + y * E, t[11] = d * D + m * F + M * E, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t)
    }, a.scalar.rotateX = function (t, e, n) {
        var r = Math.sin(n), a = Math.cos(n), o = e[4], i = e[5], u = e[6], s = e[7], l = e[8], c = e[9], d = e[10],
            f = e[11];
        return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = o * a + l * r, t[5] = i * a + c * r, t[6] = u * a + d * r, t[7] = s * a + f * r, t[8] = l * a - o * r, t[9] = c * a - i * r, t[10] = d * a - u * r, t[11] = f * a - s * r, t
    }, a.SIMD.rotateX = function (t, e, n) {
        var r = SIMD.Float32x4.splat(Math.sin(n)), a = SIMD.Float32x4.splat(Math.cos(n));
        e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
        var o = SIMD.Float32x4.load(e, 4), i = SIMD.Float32x4.load(e, 8);
        return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), SIMD.Float32x4.mul(i, r))), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, a), SIMD.Float32x4.mul(o, r))), t
    }, a.rotateX = r.USE_SIMD ? a.SIMD.rotateX : a.scalar.rotateX, a.scalar.rotateY = function (t, e, n) {
        var r = Math.sin(n), a = Math.cos(n), o = e[0], i = e[1], u = e[2], s = e[3], l = e[8], c = e[9], d = e[10],
            f = e[11];
        return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * a - l * r, t[1] = i * a - c * r, t[2] = u * a - d * r, t[3] = s * a - f * r, t[8] = o * r + l * a, t[9] = i * r + c * a, t[10] = u * r + d * a, t[11] = s * r + f * a, t
    }, a.SIMD.rotateY = function (t, e, n) {
        var r = SIMD.Float32x4.splat(Math.sin(n)), a = SIMD.Float32x4.splat(Math.cos(n));
        e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
        var o = SIMD.Float32x4.load(e, 0), i = SIMD.Float32x4.load(e, 8);
        return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, a), SIMD.Float32x4.mul(i, r))), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(i, a))), t
    }, a.rotateY = r.USE_SIMD ? a.SIMD.rotateY : a.scalar.rotateY, a.scalar.rotateZ = function (t, e, n) {
        var r = Math.sin(n), a = Math.cos(n), o = e[0], i = e[1], u = e[2], s = e[3], l = e[4], c = e[5], d = e[6],
            f = e[7];
        return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * a + l * r, t[1] = i * a + c * r, t[2] = u * a + d * r, t[3] = s * a + f * r, t[4] = l * a - o * r, t[5] = c * a - i * r, t[6] = d * a - u * r, t[7] = f * a - s * r, t
    }, a.SIMD.rotateZ = function (t, e, n) {
        var r = SIMD.Float32x4.splat(Math.sin(n)), a = SIMD.Float32x4.splat(Math.cos(n));
        e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
        var o = SIMD.Float32x4.load(e, 0), i = SIMD.Float32x4.load(e, 4);
        return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), SIMD.Float32x4.mul(i, r))), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, a), SIMD.Float32x4.mul(o, r))), t
    }, a.rotateZ = r.USE_SIMD ? a.SIMD.rotateZ : a.scalar.rotateZ, a.fromTranslation = function (t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t
    }, a.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, a.fromRotation = function (t, e, n) {
        var a, o, i, u = n[0], s = n[1], l = n[2], c = Math.sqrt(u * u + s * s + l * l);
        return Math.abs(c) < r.EPSILON ? null : (c = 1 / c, u *= c, s *= c, l *= c, a = Math.sin(e), o = Math.cos(e), i = 1 - o, t[0] = u * u * i + o, t[1] = s * u * i + l * a, t[2] = l * u * i - s * a, t[3] = 0, t[4] = u * s * i - l * a, t[5] = s * s * i + o, t[6] = l * s * i + u * a, t[7] = 0, t[8] = u * l * i + s * a, t[9] = s * l * i - u * a, t[10] = l * l * i + o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
    }, a.fromXRotation = function (t, e) {
        var n = Math.sin(e), r = Math.cos(e);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r, t[6] = n, t[7] = 0, t[8] = 0, t[9] = -n, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, a.fromYRotation = function (t, e) {
        var n = Math.sin(e), r = Math.cos(e);
        return t[0] = r, t[1] = 0, t[2] = -n, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = n, t[9] = 0, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, a.fromZRotation = function (t, e) {
        var n = Math.sin(e), r = Math.cos(e);
        return t[0] = r, t[1] = n, t[2] = 0, t[3] = 0, t[4] = -n, t[5] = r, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, a.fromRotationTranslation = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = e[3], u = r + r, s = a + a, l = o + o, c = r * u, d = r * s, f = r * l,
            h = a * s, p = a * l, m = o * l, v = i * u, b = i * s, y = i * l;
        return t[0] = 1 - (h + m), t[1] = d + y, t[2] = f - b, t[3] = 0, t[4] = d - y, t[5] = 1 - (c + m), t[6] = p + v, t[7] = 0, t[8] = f + b, t[9] = p - v, t[10] = 1 - (c + h), t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
    }, a.getTranslation = function (t, e) {
        return t[0] = e[12], t[1] = e[13], t[2] = e[14], t
    }, a.getRotation = function (t, e) {
        var n = e[0] + e[5] + e[10], r = 0;
        return n > 0 ? (r = 2 * Math.sqrt(n + 1), t[3] = .25 * r, t[0] = (e[6] - e[9]) / r, t[1] = (e[8] - e[2]) / r, t[2] = (e[1] - e[4]) / r) : e[0] > e[5] & e[0] > e[10] ? (r = 2 * Math.sqrt(1 + e[0] - e[5] - e[10]), t[3] = (e[6] - e[9]) / r, t[0] = .25 * r, t[1] = (e[1] + e[4]) / r, t[2] = (e[8] + e[2]) / r) : e[5] > e[10] ? (r = 2 * Math.sqrt(1 + e[5] - e[0] - e[10]), t[3] = (e[8] - e[2]) / r, t[0] = (e[1] + e[4]) / r, t[1] = .25 * r, t[2] = (e[6] + e[9]) / r) : (r = 2 * Math.sqrt(1 + e[10] - e[0] - e[5]), t[3] = (e[1] - e[4]) / r, t[0] = (e[8] + e[2]) / r, t[1] = (e[6] + e[9]) / r, t[2] = .25 * r), t
    }, a.fromRotationTranslationScale = function (t, e, n, r) {
        var a = e[0], o = e[1], i = e[2], u = e[3], s = a + a, l = o + o, c = i + i, d = a * s, f = a * l, h = a * c,
            p = o * l, m = o * c, v = i * c, b = u * s, y = u * l, M = u * c, g = r[0], w = r[1], x = r[2];
        return t[0] = (1 - (p + v)) * g, t[1] = (f + M) * g, t[2] = (h - y) * g, t[3] = 0, t[4] = (f - M) * w, t[5] = (1 - (d + v)) * w, t[6] = (m + b) * w, t[7] = 0, t[8] = (h + y) * x, t[9] = (m - b) * x, t[10] = (1 - (d + p)) * x, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
    }, a.fromRotationTranslationScaleOrigin = function (t, e, n, r, a) {
        var o = e[0], i = e[1], u = e[2], s = e[3], l = o + o, c = i + i, d = u + u, f = o * l, h = o * c, p = o * d,
            m = i * c, v = i * d, b = u * d, y = s * l, M = s * c, g = s * d, w = r[0], x = r[1], _ = r[2], S = a[0],
            I = a[1], D = a[2];
        return t[0] = (1 - (m + b)) * w, t[1] = (h + g) * w, t[2] = (p - M) * w, t[3] = 0, t[4] = (h - g) * x, t[5] = (1 - (f + b)) * x, t[6] = (v + y) * x, t[7] = 0, t[8] = (p + M) * _, t[9] = (v - y) * _, t[10] = (1 - (f + m)) * _, t[11] = 0, t[12] = n[0] + S - (t[0] * S + t[4] * I + t[8] * D), t[13] = n[1] + I - (t[1] * S + t[5] * I + t[9] * D), t[14] = n[2] + D - (t[2] * S + t[6] * I + t[10] * D), t[15] = 1, t
    }, a.fromQuat = function (t, e) {
        var n = e[0], r = e[1], a = e[2], o = e[3], i = n + n, u = r + r, s = a + a, l = n * i, c = r * i, d = r * u,
            f = a * i, h = a * u, p = a * s, m = o * i, v = o * u, b = o * s;
        return t[0] = 1 - d - p, t[1] = c + b, t[2] = f - v, t[3] = 0, t[4] = c - b, t[5] = 1 - l - p, t[6] = h + m, t[7] = 0, t[8] = f + v, t[9] = h - m, t[10] = 1 - l - d, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, a.frustum = function (t, e, n, r, a, o, i) {
        var u = 1 / (n - e), s = 1 / (a - r), l = 1 / (o - i);
        return t[0] = 2 * o * u, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * s, t[6] = 0, t[7] = 0, t[8] = (n + e) * u, t[9] = (a + r) * s, t[10] = (i + o) * l, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = i * o * 2 * l, t[15] = 0, t
    }, a.perspective = function (t, e, n, r, a) {
        var o = 1 / Math.tan(e / 2), i = 1 / (r - a);
        return t[0] = o / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (a + r) * i, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * a * r * i, t[15] = 0, t
    }, a.perspectiveFromFieldOfView = function (t, e, n, r) {
        var a = Math.tan(e.upDegrees * Math.PI / 180), o = Math.tan(e.downDegrees * Math.PI / 180),
            i = Math.tan(e.leftDegrees * Math.PI / 180), u = Math.tan(e.rightDegrees * Math.PI / 180), s = 2 / (i + u),
            l = 2 / (a + o);
        return t[0] = s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = l, t[6] = 0, t[7] = 0, t[8] = -((i - u) * s * .5), t[9] = (a - o) * l * .5, t[10] = r / (n - r), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = r * n / (n - r), t[15] = 0, t
    }, a.ortho = function (t, e, n, r, a, o, i) {
        var u = 1 / (e - n), s = 1 / (r - a), l = 1 / (o - i);
        return t[0] = -2 * u, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * s, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * l, t[11] = 0, t[12] = (e + n) * u, t[13] = (a + r) * s, t[14] = (i + o) * l, t[15] = 1, t
    }, a.lookAt = function (t, e, n, o) {
        var i, u, s, l, c, d, f, h, p, m, v = e[0], b = e[1], y = e[2], M = o[0], g = o[1], w = o[2], x = n[0],
            _ = n[1], S = n[2];
        return Math.abs(v - x) < r.EPSILON && Math.abs(b - _) < r.EPSILON && Math.abs(y - S) < r.EPSILON ? a.identity(t) : (f = v - x, h = b - _, p = y - S, m = 1 / Math.sqrt(f * f + h * h + p * p), f *= m, h *= m, p *= m, i = g * p - w * h, u = w * f - M * p, s = M * h - g * f, m = Math.sqrt(i * i + u * u + s * s), m ? (m = 1 / m, i *= m, u *= m, s *= m) : (i = 0, u = 0, s = 0), l = h * s - p * u, c = p * i - f * s, d = f * u - h * i, m = Math.sqrt(l * l + c * c + d * d), m ? (m = 1 / m, l *= m, c *= m, d *= m) : (l = 0, c = 0, d = 0), t[0] = i, t[1] = l, t[2] = f, t[3] = 0, t[4] = u, t[5] = c, t[6] = h, t[7] = 0, t[8] = s, t[9] = d, t[10] = p, t[11] = 0, t[12] = -(i * v + u * b + s * y), t[13] = -(l * v + c * b + d * y), t[14] = -(f * v + h * b + p * y), t[15] = 1, t)
    }, a.str = function (t) {
        return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
    }, a.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2))
    }, a.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t[6] = e[6] + n[6], t[7] = e[7] + n[7], t[8] = e[8] + n[8], t[9] = e[9] + n[9], t[10] = e[10] + n[10], t[11] = e[11] + n[11], t[12] = e[12] + n[12], t[13] = e[13] + n[13], t[14] = e[14] + n[14], t[15] = e[15] + n[15], t
    }, a.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t[6] = e[6] - n[6], t[7] = e[7] - n[7], t[8] = e[8] - n[8], t[9] = e[9] - n[9], t[10] = e[10] - n[10], t[11] = e[11] - n[11], t[12] = e[12] - n[12], t[13] = e[13] - n[13], t[14] = e[14] - n[14], t[15] = e[15] - n[15], t
    }, a.sub = a.subtract, a.multiplyScalar = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * n, t[9] = e[9] * n, t[10] = e[10] * n, t[11] = e[11] * n, t[12] = e[12] * n, t[13] = e[13] * n, t[14] = e[14] * n, t[15] = e[15] * n, t
    }, a.multiplyScalarAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t[6] = e[6] + n[6] * r, t[7] = e[7] + n[7] * r, t[8] = e[8] + n[8] * r, t[9] = e[9] + n[9] * r, t[10] = e[10] + n[10] * r, t[11] = e[11] + n[11] * r, t[12] = e[12] + n[12] * r, t[13] = e[13] + n[13] * r, t[14] = e[14] + n[14] * r, t[15] = e[15] + n[15] * r, t
    }, a.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
    }, a.equals = function (t, e) {
        var n = t[0], a = t[1], o = t[2], i = t[3], u = t[4], s = t[5], l = t[6], c = t[7], d = t[8], f = t[9],
            h = t[10], p = t[11], m = t[12], v = t[13], b = t[14], y = t[15], M = e[0], g = e[1], w = e[2], x = e[3],
            _ = e[4], S = e[5], I = e[6], D = e[7], F = e[8], E = e[9], P = e[10], T = e[11], O = e[12], k = e[13],
            A = e[14], R = e[15];
        return Math.abs(n - M) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(M)) && Math.abs(a - g) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(g)) && Math.abs(o - w) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(w)) && Math.abs(i - x) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(x)) && Math.abs(u - _) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(_)) && Math.abs(s - S) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(S)) && Math.abs(l - I) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(I)) && Math.abs(c - D) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(D)) && Math.abs(d - F) <= r.EPSILON * Math.max(1, Math.abs(d), Math.abs(F)) && Math.abs(f - E) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(E)) && Math.abs(h - P) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(P)) && Math.abs(p - T) <= r.EPSILON * Math.max(1, Math.abs(p), Math.abs(T)) && Math.abs(m - O) <= r.EPSILON * Math.max(1, Math.abs(m), Math.abs(O)) && Math.abs(v - k) <= r.EPSILON * Math.max(1, Math.abs(v), Math.abs(k)) && Math.abs(b - A) <= r.EPSILON * Math.max(1, Math.abs(b), Math.abs(A)) && Math.abs(y - R) <= r.EPSILON * Math.max(1, Math.abs(y), Math.abs(R))
    }, t.exports = a
}, function (t, e, n) {
    var r = n(1), a = n(46), o = n(47), i = n(48), u = {};
    u.create = function () {
        var t = new r.ARRAY_TYPE(4);
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
    }, u.rotationTo = function () {
        var t = o.create(), e = o.fromValues(1, 0, 0), n = o.fromValues(0, 1, 0);
        return function (r, a, i) {
            var s = o.dot(a, i);
            return s < -.999999 ? (o.cross(t, e, a), o.length(t) < 1e-6 && o.cross(t, n, a), o.normalize(t, t), u.setAxisAngle(r, t, Math.PI), r) : s > .999999 ? (r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 1, r) : (o.cross(t, a, i), r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = 1 + s, u.normalize(r, r))
        }
    }(), u.setAxes = function () {
        var t = a.create();
        return function (e, n, r, a) {
            return t[0] = r[0], t[3] = r[1], t[6] = r[2], t[1] = a[0], t[4] = a[1], t[7] = a[2], t[2] = -n[0], t[5] = -n[1], t[8] = -n[2], u.normalize(e, u.fromMat3(e, t))
        }
    }(), u.clone = i.clone, u.fromValues = i.fromValues, u.copy = i.copy, u.set = i.set, u.identity = function (t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
    }, u.setAxisAngle = function (t, e, n) {
        n *= .5;
        var r = Math.sin(n);
        return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = Math.cos(n), t
    }, u.getAxisAngle = function (t, e) {
        var n = 2 * Math.acos(e[3]), r = Math.sin(n / 2);
        return 0 != r ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 1, t[1] = 0, t[2] = 0), n
    }, u.add = i.add, u.multiply = function (t, e, n) {
        var r = e[0], a = e[1], o = e[2], i = e[3], u = n[0], s = n[1], l = n[2], c = n[3];
        return t[0] = r * c + i * u + a * l - o * s, t[1] = a * c + i * s + o * u - r * l, t[2] = o * c + i * l + r * s - a * u, t[3] = i * c - r * u - a * s - o * l, t
    }, u.mul = u.multiply, u.scale = i.scale, u.rotateX = function (t, e, n) {
        n *= .5;
        var r = e[0], a = e[1], o = e[2], i = e[3], u = Math.sin(n), s = Math.cos(n);
        return t[0] = r * s + i * u, t[1] = a * s + o * u, t[2] = o * s - a * u, t[3] = i * s - r * u, t
    }, u.rotateY = function (t, e, n) {
        n *= .5;
        var r = e[0], a = e[1], o = e[2], i = e[3], u = Math.sin(n), s = Math.cos(n);
        return t[0] = r * s - o * u, t[1] = a * s + i * u, t[2] = o * s + r * u, t[3] = i * s - a * u, t
    }, u.rotateZ = function (t, e, n) {
        n *= .5;
        var r = e[0], a = e[1], o = e[2], i = e[3], u = Math.sin(n), s = Math.cos(n);
        return t[0] = r * s + a * u, t[1] = a * s - r * u, t[2] = o * s + i * u, t[3] = i * s - o * u, t
    }, u.calculateW = function (t, e) {
        var n = e[0], r = e[1], a = e[2];
        return t[0] = n, t[1] = r, t[2] = a, t[3] = Math.sqrt(Math.abs(1 - n * n - r * r - a * a)), t
    }, u.dot = i.dot, u.lerp = i.lerp,
        u.slerp = function (t, e, n, r) {
            var a, o, i, u, s, l = e[0], c = e[1], d = e[2], f = e[3], h = n[0], p = n[1], m = n[2], v = n[3];
            return o = l * h + c * p + d * m + f * v, o < 0 && (o = -o, h = -h, p = -p, m = -m, v = -v), 1 - o > 1e-6 ? (a = Math.acos(o), i = Math.sin(a), u = Math.sin((1 - r) * a) / i, s = Math.sin(r * a) / i) : (u = 1 - r, s = r), t[0] = u * l + s * h, t[1] = u * c + s * p, t[2] = u * d + s * m, t[3] = u * f + s * v, t
        }, u.sqlerp = function () {
        var t = u.create(), e = u.create();
        return function (n, r, a, o, i, s) {
            return u.slerp(t, r, i, s), u.slerp(e, a, o, s), u.slerp(n, t, e, 2 * s * (1 - s)), n
        }
    }(), u.invert = function (t, e) {
        var n = e[0], r = e[1], a = e[2], o = e[3], i = n * n + r * r + a * a + o * o, u = i ? 1 / i : 0;
        return t[0] = -n * u, t[1] = -r * u, t[2] = -a * u, t[3] = o * u, t
    }, u.conjugate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = e[3], t
    }, u.length = i.length, u.len = u.length, u.squaredLength = i.squaredLength, u.sqrLen = u.squaredLength, u.normalize = i.normalize, u.fromMat3 = function (t, e) {
        var n, r = e[0] + e[4] + e[8];
        if (r > 0) n = Math.sqrt(r + 1), t[3] = .5 * n, n = .5 / n, t[0] = (e[5] - e[7]) * n, t[1] = (e[6] - e[2]) * n, t[2] = (e[1] - e[3]) * n; else {
            var a = 0;
            e[4] > e[0] && (a = 1), e[8] > e[3 * a + a] && (a = 2);
            var o = (a + 1) % 3, i = (a + 2) % 3;
            n = Math.sqrt(e[3 * a + a] - e[3 * o + o] - e[3 * i + i] + 1), t[a] = .5 * n, n = .5 / n, t[3] = (e[3 * o + i] - e[3 * i + o]) * n, t[o] = (e[3 * o + a] + e[3 * a + o]) * n, t[i] = (e[3 * i + a] + e[3 * a + i]) * n
        }
        return t
    }, u.str = function (t) {
        return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
    }, u.exactEquals = i.exactEquals, u.equals = i.equals, t.exports = u
}, function (t, e, n) {
    var r = n(1), a = {};
    a.create = function () {
        var t = new r.ARRAY_TYPE(2);
        return t[0] = 0, t[1] = 0, t
    }, a.clone = function (t) {
        var e = new r.ARRAY_TYPE(2);
        return e[0] = t[0], e[1] = t[1], e
    }, a.fromValues = function (t, e) {
        var n = new r.ARRAY_TYPE(2);
        return n[0] = t, n[1] = e, n
    }, a.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t
    }, a.set = function (t, e, n) {
        return t[0] = e, t[1] = n, t
    }, a.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
    }, a.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
    }, a.sub = a.subtract, a.multiply = function (t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
    }, a.mul = a.multiply, a.divide = function (t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
    }, a.div = a.divide, a.ceil = function (t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t
    }, a.floor = function (t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t
    }, a.min = function (t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
    }, a.max = function (t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
    }, a.round = function (t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t
    }, a.scale = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t
    }, a.scaleAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t
    }, a.distance = function (t, e) {
        var n = e[0] - t[0], r = e[1] - t[1];
        return Math.sqrt(n * n + r * r)
    }, a.dist = a.distance, a.squaredDistance = function (t, e) {
        var n = e[0] - t[0], r = e[1] - t[1];
        return n * n + r * r
    }, a.sqrDist = a.squaredDistance, a.length = function (t) {
        var e = t[0], n = t[1];
        return Math.sqrt(e * e + n * n)
    }, a.len = a.length, a.squaredLength = function (t) {
        var e = t[0], n = t[1];
        return e * e + n * n
    }, a.sqrLen = a.squaredLength, a.negate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t
    }, a.inverse = function (t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t
    }, a.normalize = function (t, e) {
        var n = e[0], r = e[1], a = n * n + r * r;
        return a > 0 && (a = 1 / Math.sqrt(a), t[0] = e[0] * a, t[1] = e[1] * a), t
    }, a.dot = function (t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }, a.cross = function (t, e, n) {
        var r = e[0] * n[1] - e[1] * n[0];
        return t[0] = t[1] = 0, t[2] = r, t
    }, a.lerp = function (t, e, n, r) {
        var a = e[0], o = e[1];
        return t[0] = a + r * (n[0] - a), t[1] = o + r * (n[1] - o), t
    }, a.random = function (t, e) {
        e = e || 1;
        var n = 2 * r.RANDOM() * Math.PI;
        return t[0] = Math.cos(n) * e, t[1] = Math.sin(n) * e, t
    }, a.transformMat2 = function (t, e, n) {
        var r = e[0], a = e[1];
        return t[0] = n[0] * r + n[2] * a, t[1] = n[1] * r + n[3] * a, t
    }, a.transformMat2d = function (t, e, n) {
        var r = e[0], a = e[1];
        return t[0] = n[0] * r + n[2] * a + n[4], t[1] = n[1] * r + n[3] * a + n[5], t
    }, a.transformMat3 = function (t, e, n) {
        var r = e[0], a = e[1];
        return t[0] = n[0] * r + n[3] * a + n[6], t[1] = n[1] * r + n[4] * a + n[7], t
    }, a.transformMat4 = function (t, e, n) {
        var r = e[0], a = e[1];
        return t[0] = n[0] * r + n[4] * a + n[12], t[1] = n[1] * r + n[5] * a + n[13], t
    }, a.forEach = function () {
        var t = a.create();
        return function (e, n, r, a, o, i) {
            var u, s;
            for (n || (n = 2), r || (r = 0), s = a ? Math.min(a * n + r, e.length) : e.length, u = r; u < s; u += n)t[0] = e[u], t[1] = e[u + 1], o(t, t, i), e[u] = t[0], e[u + 1] = t[1];
            return e
        }
    }(), a.str = function (t) {
        return "vec2(" + t[0] + ", " + t[1] + ")"
    }, a.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1]
    }, a.equals = function (t, e) {
        var n = t[0], a = t[1], o = e[0], i = e[1];
        return Math.abs(n - o) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(a - i) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(i))
    }, t.exports = a
}, function (t, e) {
    "use strict";
    function n(t, e, n, r) {
        function a(n) {
            o = e(a, r), t(n - (i || n)), i = n
        }

        var o, i;
        return {
            start: function () {
                o || a(0)
            }, stop: function () {
                n(o), o = null, i = 0
            }
        }
    }

    function r(t) {
        return n(t, requestAnimationFrame, cancelAnimationFrame)
    }

    function a(t, e) {
        return n(t, setTimeout, clearTimeout, e)
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.intervalometer = n, e.frameIntervalometer = r, e.timerIntervalometer = a
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && "object" == typeof t && "default" in t ? t.default : t
    }

    function a(t, e, n, r) {
        function a(e) {
            Boolean(t[n]) === Boolean(r) && e.stopImmediatePropagation(), delete t[n]
        }

        return t.addEventListener(e, a, !1), a
    }

    function o(t, e, n, r) {
        function a() {
            return n[e]
        }

        function o(t) {
            n[e] = t
        }

        r && o(t[e]), Object.defineProperty(t, e, {get: a, set: o})
    }

    function i(t, e, n) {
        n.addEventListener(e, function () {
            return t.dispatchEvent(new Event(e))
        })
    }

    function u(t, e) {
        Promise.resolve().then(function () {
            t.dispatchEvent(new Event(e))
        })
    }

    function s(t) {
        var e = new Audio;
        return i(t, "play", e), i(t, "playing", e), i(t, "pause", e), e.crossOrigin = t.crossOrigin, e.src = t.src || t.currentSrc || "data:", e
    }

    function l(t, e, n) {
        (b || 0) + 200 < Date.now() && (t[x] = !0, b = Date.now()), n || (t.currentTime = e), I[++D % 3] = 100 * e | 0
    }

    function c(t) {
        return t.driver.currentTime >= t.video.duration
    }

    function d(t) {
        var e = this;
        e.video.readyState >= e.video.HAVE_FUTURE_DATA ? (e.hasAudio || (e.driver.currentTime = e.video.currentTime + t * e.video.playbackRate / 1e3, e.video.loop && c(e) && (e.driver.currentTime = 0)), l(e.video, e.driver.currentTime)) : e.video.networkState !== e.video.NETWORK_IDLE || e.video.buffered.length || e.video.load(), e.video.ended && (delete e.video[x], e.video.pause(!0))
    }

    function f() {
        var t = this, e = t[w];
        return t.webkitDisplayingFullscreen ? void t[_]() : ("data:" !== e.driver.src && e.driver.src !== t.src && (l(t, 0, !0), e.driver.src = t.src), void(t.paused && (e.paused = !1, t.buffered.length || t.load(), e.driver.play(), e.updater.start(), e.hasAudio || (u(t, "play"), e.video.readyState >= e.video.HAVE_ENOUGH_DATA && u(t, "playing")))))
    }

    function h(t) {
        var e = this, n = e[w];
        n.driver.pause(), n.updater.stop(), e.webkitDisplayingFullscreen && e[S](), n.paused && !t || (n.paused = !0, n.hasAudio || u(e, "pause"), e.ended && (e[x] = !0, u(e, "ended")))
    }

    function p(t, e) {
        var n = t[w] = {};
        n.paused = !0, n.hasAudio = e, n.video = t, n.updater = M.frameIntervalometer(d.bind(n)), e ? n.driver = s(t) : (t.addEventListener("canplay", function () {
            t.paused || u(t, "playing")
        }), n.driver = {
            src: t.src || t.currentSrc || "data:", muted: !0, paused: !0, pause: function () {
                n.driver.paused = !0
            }, play: function () {
                n.driver.paused = !1, c(n) && l(t, 0)
            }, get ended() {
                return c(n)
            }
        }), t.addEventListener("emptied", function () {
            var e = !n.driver.src || "data:" === n.driver.src;
            n.driver.src && n.driver.src !== t.src && (l(t, 0, !0), n.driver.src = t.src, e ? n.driver.play() : n.updater.stop())
        }, !1), t.addEventListener("webkitbeginfullscreen", function () {
            t.paused ? e && !n.driver.buffered.length && n.driver.load() : (t.pause(), t[_]())
        }), e && (t.addEventListener("webkitendfullscreen", function () {
            n.driver.currentTime = t.currentTime
        }), t.addEventListener("seeking", function () {
            I.indexOf(100 * t.currentTime | 0) < 0 && (n.driver.currentTime = t.currentTime)
        }))
    }

    function m(t) {
        var e = t[w];
        t[_] = t.play, t[S] = t.pause, t.play = f, t.pause = h, o(t, "paused", e.driver), o(t, "muted", e.driver, !0), o(t, "playbackRate", e.driver, !0), o(t, "ended", e.driver), o(t, "loop", e.driver, !0), a(t, "seeking"), a(t, "seeked"), a(t, "timeupdate", x, !1), a(t, "ended", x, !1)
    }

    function v(t, e, n) {
        void 0 === e && (e = !0), void 0 === n && (n = !0), n && !g || t[w] || (p(t, e), m(t), t.classList.add("IIV"), !e && t.autoplay && t.play(), /iPhone|iPod|iPad/.test(navigator.platform) || console.warn("iphone-inline-video is not guaranteed to work in emulated environments"))
    }

    var b, y = r(n(150)), M = n(113),
        g = /iPhone|iPod/i.test(navigator.userAgent) && !matchMedia("(-webkit-video-playable-inline)").matches, w = y(),
        x = y(), _ = y("nativeplay"), S = y("nativepause"), I = [], D = 0;
    v.isWhitelisted = g, t.exports = v
}, function (t, e) {
    function n(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }

    t.exports = n
}, function (t, e, n) {
    function r(t, e) {
        var n = i(t), r = !n && o(t), c = !n && !r && u(t), f = !n && !r && !c && l(t), h = n || r || c || f,
            p = h ? a(t.length, String) : [], m = p.length;
        for (var v in t)!e && !d.call(t, v) || h && ("length" == v || c && ("offset" == v || "parent" == v) || f && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || s(v, m)) || p.push(v);
        return p
    }

    var a = n(123), o = n(143), i = n(144), u = n(145), s = n(54), l = n(146), c = Object.prototype,
        d = c.hasOwnProperty;
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return o(t) && a(t) == i
    }

    var a = n(31), o = n(35), i = "[object Arguments]";
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        if (!i(t) || o(t))return !1;
        var e = a(t) ? p : l;
        return e.test(u(t))
    }

    var a = n(58), o = n(132), i = n(34), u = n(140), s = /[\\^$.*+?()[\]{}|]/g, l = /^\[object .+?Constructor\]$/,
        c = Function.prototype, d = Object.prototype, f = c.toString, h = d.hasOwnProperty,
        p = RegExp("^" + f.call(h).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return i(t) && o(t.length) && !!O[a(t)]
    }

    var a = n(31), o = n(59), i = n(35), u = "[object Arguments]", s = "[object Array]", l = "[object Boolean]",
        c = "[object Date]", d = "[object Error]", f = "[object Function]", h = "[object Map]", p = "[object Number]",
        m = "[object Object]", v = "[object RegExp]", b = "[object Set]", y = "[object String]", M = "[object WeakMap]",
        g = "[object ArrayBuffer]", w = "[object DataView]", x = "[object Float32Array]", _ = "[object Float64Array]",
        S = "[object Int8Array]", I = "[object Int16Array]", D = "[object Int32Array]", F = "[object Uint8Array]",
        E = "[object Uint8ClampedArray]", P = "[object Uint16Array]", T = "[object Uint32Array]", O = {};
    O[x] = O[_] = O[S] = O[I] = O[D] = O[F] = O[E] = O[P] = O[T] = !0, O[u] = O[s] = O[g] = O[l] = O[w] = O[c] = O[d] = O[f] = O[h] = O[p] = O[m] = O[v] = O[b] = O[y] = O[M] = !1, t.exports = r
}, function (t, e, n) {
    function r(t) {
        if (!a(t))return o(t);
        var e = [];
        for (var n in Object(t))u.call(t, n) && "constructor" != n && e.push(n);
        return e
    }

    var a = n(55), o = n(133), i = Object.prototype, u = i.hasOwnProperty;
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        return i(o(t, e, a), t + "")
    }

    var a = n(57), o = n(137), i = n(138);
    t.exports = r
}, function (t, e, n) {
    var r = n(142), a = n(52), o = n(57), i = a ? function (t, e) {
        return a(t, "toString", {configurable: !0, enumerable: !1, value: r(e), writable: !0})
    } : o;
    t.exports = i
}, function (t, e) {
    function n(t, e) {
        for (var n = -1, r = Array(t); ++n < t;)r[n] = e(n);
        return r
    }

    t.exports = n
}, function (t, e) {
    function n(t) {
        return function (e) {
            return t(e)
        }
    }

    t.exports = n
}, function (t, e, n) {
    function r(t, e, n, r) {
        var i = !n;
        n || (n = {});
        for (var u = -1, s = e.length; ++u < s;) {
            var l = e[u], c = r ? r(n[l], t[l], l, n, t) : void 0;
            void 0 === c && (c = t[l]), i ? o(n, l, c) : a(n, l, c)
        }
        return n
    }

    var a = n(50), o = n(51);
    t.exports = r
}, function (t, e, n) {
    var r = n(32), a = r["__core-js_shared__"];
    t.exports = a
}, function (t, e, n) {
    function r(t) {
        return a(function (e, n) {
            var r = -1, a = n.length, i = a > 1 ? n[a - 1] : void 0, u = a > 2 ? n[2] : void 0;
            for (i = t.length > 3 && "function" == typeof i ? (a--, i) : void 0, u && o(n[0], n[1], u) && (i = a < 3 ? void 0 : i, a = 1), e = Object(e); ++r < a;) {
                var s = n[r];
                s && t(e, s, r, i)
            }
            return e
        })
    }

    var a = n(121), o = n(131);
    t.exports = r
}, function (t, e, n) {
    function r(t, e) {
        var n = o(t, e);
        return a(n) ? n : void 0
    }

    var a = n(118), o = n(130);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        var e = i.call(t, s), n = t[s];
        try {
            t[s] = void 0;
            var r = !0
        } catch (t) {
        }
        var a = u.call(t);
        return r && (e ? t[s] = n : delete t[s]), a
    }

    var a = n(49), o = Object.prototype, i = o.hasOwnProperty, u = o.toString, s = a ? a.toStringTag : void 0;
    t.exports = r
}, function (t, e) {
    function n(t, e) {
        return null == t ? void 0 : t[e]
    }

    t.exports = n
}, function (t, e, n) {
    function r(t, e, n) {
        if (!u(n))return !1;
        var r = typeof e;
        return !!("number" == r ? o(n) && i(e, n.length) : "string" == r && e in n) && a(n[e], t)
    }

    var a = n(56), o = n(33), i = n(54), u = n(34);
    t.exports = r
}, function (t, e, n) {
    function r(t) {
        return !!o && o in t
    }

    var a = n(126), o = function () {
        var t = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();
    t.exports = r
}, function (t, e, n) {
    var r = n(136), a = r(Object.keys, Object);
    t.exports = a
}, function (t, e, n) {
    (function (t) {
        var r = n(53), a = "object" == typeof e && e && !e.nodeType && e,
            o = a && "object" == typeof t && t && !t.nodeType && t, i = o && o.exports === a, u = i && r.process,
            s = function () {
                try {
                    return u && u.binding && u.binding("util")
                } catch (t) {
                }
            }();
        t.exports = s
    }).call(e, n(60)(t))
}, function (t, e) {
    function n(t) {
        return a.call(t)
    }

    var r = Object.prototype, a = r.toString;
    t.exports = n
}, function (t, e) {
    function n(t, e) {
        return function (n) {
            return t(e(n))
        }
    }

    t.exports = n
}, function (t, e, n) {
    function r(t, e, n) {
        return e = o(void 0 === e ? t.length - 1 : e, 0), function () {
            for (var r = arguments, i = -1, u = o(r.length - e, 0), s = Array(u); ++i < u;)s[i] = r[e + i];
            i = -1;
            for (var l = Array(e + 1); ++i < e;)l[i] = r[i];
            return l[e] = n(s), a(t, this, l)
        }
    }

    var a = n(115), o = Math.max;
    t.exports = r
}, function (t, e, n) {
    var r = n(122), a = n(139), o = a(r);
    t.exports = o
}, function (t, e) {
    function n(t) {
        var e = 0, n = 0;
        return function () {
            var i = o(), u = a - (i - n);
            if (n = i, u > 0) {
                if (++e >= r)return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }

    var r = 800, a = 16, o = Date.now;
    t.exports = n
}, function (t, e) {
    function n(t) {
        if (null != t) {
            try {
                return a.call(t)
            } catch (t) {
            }
            try {
                return t + ""
            } catch (t) {
            }
        }
        return ""
    }

    var r = Function.prototype, a = r.toString;
    t.exports = n
}, function (t, e, n) {
    var r = n(50), a = n(125), o = n(127), i = n(33), u = n(55), s = n(147), l = Object.prototype, c = l.hasOwnProperty,
        d = o(function (t, e) {
            if (u(e) || i(e))return void a(e, s(e), t);
            for (var n in e)c.call(e, n) && r(t, n, e[n])
        });
    t.exports = d
}, function (t, e) {
    function n(t) {
        return function () {
            return t
        }
    }

    t.exports = n
}, function (t, e, n) {
    var r = n(117), a = n(35), o = Object.prototype, i = o.hasOwnProperty, u = o.propertyIsEnumerable,
        s = r(function () {
            return arguments
        }()) ? r : function (t) {
            return a(t) && i.call(t, "callee") && !u.call(t, "callee")
        };
    t.exports = s
}, function (t, e) {
    var n = Array.isArray;
    t.exports = n
}, function (t, e, n) {
    (function (t) {
        var r = n(32), a = n(148), o = "object" == typeof e && e && !e.nodeType && e,
            i = o && "object" == typeof t && t && !t.nodeType && t, u = i && i.exports === o, s = u ? r.Buffer : void 0,
            l = s ? s.isBuffer : void 0, c = l || a;
        t.exports = c
    }).call(e, n(60)(t))
}, function (t, e, n) {
    var r = n(119), a = n(124), o = n(134), i = o && o.isTypedArray, u = i ? a(i) : r;
    t.exports = u
}, function (t, e, n) {
    function r(t) {
        return i(t) ? a(t) : o(t)
    }

    var a = n(116), o = n(120), i = n(33);
    t.exports = r
}, function (t, e) {
    function n() {
        return !1
    }

    t.exports = n
}, function (t, e, n) {
    var r, r;
    (function (e) {
        !function () {
            !function (e) {
                t.exports = e()
            }(function () {
                var t;
                return function t(e, n, a) {
                    function o(u, s) {
                        if (!n[u]) {
                            if (!e[u]) {
                                var l = "function" == typeof r && r;
                                if (!s && l)return r(u, !0);
                                if (i)return i(u, !0);
                                var c = new Error("Cannot find module '" + u + "'");
                                throw c.code = "MODULE_NOT_FOUND", c
                            }
                            var d = n[u] = {exports: {}};
                            e[u][0].call(d.exports, function (t) {
                                var n = e[u][1][t];
                                return o(n ? n : t)
                            }, d, d.exports, t, e, n, a)
                        }
                        return n[u].exports
                    }

                    for (var i = "function" == typeof r && r, u = 0; u < a.length; u++)o(a[u]);
                    return o
                }({
                    1: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        function a(t) {
                            var e = {};
                            for (var n in t)t.hasOwnProperty(n) && (e[t[n]] = n);
                            return e
                        }

                        function o(t) {
                            var e = {};
                            return Object.keys(t).forEach(function (n) {
                                if (t.hasOwnProperty(n) && void 0 !== t[n]) {
                                    var r = n.split("_"), a = r[0], o = l[a];
                                    o || (u.default.debug("Data key word `" + r[0] + "` not expected in " + n), o = a + "_"), r.splice(1).forEach(function (t) {
                                        d[t] ? o += d[t] : (u.default.debug("Data key word `" + t + "` not expected in " + n), o += "_" + t + "_")
                                    }), e[o] = t[n]
                                }
                            }), e
                        }

                        Object.defineProperty(n, "__esModule", {value: !0}), n.default = o;
                        var i = t("./utils/log.js"), u = r(i), s = {
                            a: "property",
                            d: "ad",
                            e: "event",
                            f: "experiment",
                            m: "mux",
                            p: "player",
                            s: "session",
                            t: "timestamp",
                            u: "viewer",
                            v: "video",
                            w: "page",
                            x: "view"
                        }, l = a(s), c = {
                            ad: "ad",
                            ag: "aggregate",
                            ap: "api",
                            al: "application",
                            ar: "architecture",
                            au: "autoplay",
                            br: "break",
                            cd: "code",
                            cg: "category",
                            cn: "config",
                            co: "count",
                            cp: "complete",
                            ct: "content",
                            cu: "current",
                            dg: "downscaling",
                            dm: "domain",
                            dn: "cdn",
                            do: "downscale",
                            du: "duration",
                            dv: "device",
                            ec: "encoding",
                            en: "end",
                            eg: "engine",
                            em: "embed",
                            er: "error",
                            ev: "events",
                            ex: "expires",
                            fi: "first",
                            fm: "family",
                            ft: "format",
                            fq: "frequency",
                            fr: "frame",
                            fs: "fullscreen",
                            ho: "host",
                            hn: "hostname",
                            ht: "height",
                            id: "id",
                            ii: "init",
                            in: "instance",
                            ip: "ip",
                            is: "is",
                            ke: "key",
                            la: "language",
                            li: "live",
                            lo: "load",
                            ma: "max",
                            me: "message",
                            mi: "mime",
                            ml: "midroll",
                            mn: "manufacturer",
                            mx: "mux",
                            nm: "name",
                            no: "number",
                            on: "on",
                            os: "os",
                            pa: "paused",
                            pb: "playback",
                            pd: "producer",
                            pe: "percentage",
                            ph: "playhead",
                            pi: "plugin",
                            pl: "preroll",
                            po: "poster",
                            pr: "preload",
                            ra: "rate",
                            re: "rebuffer",
                            ro: "ratio",
                            sa: "sample",
                            se: "session",
                            sk: "seek",
                            sm: "stream",
                            sq: "sequence",
                            sr: "series",
                            st: "start",
                            so: "source",
                            su: "startup",
                            sw: "software",
                            tc: "tech",
                            ti: "time",
                            tl: "total",
                            to: "to",
                            tt: "title",
                            ty: "type",
                            ug: "upscaling",
                            up: "upscale",
                            ur: "url",
                            us: "user",
                            va: "variant",
                            vd: "viewed",
                            vi: "video",
                            ve: "version",
                            vw: "view",
                            vr: "viewer",
                            wd: "width",
                            wa: "watch",
                            wt: "waiting"
                        }, d = a(c)
                    }, {"./utils/log.js": 21}], 2: [function (t, e, n) {
                        "use strict";
                        function r() {
                            this.isAdBreak = !1, this.on("adbreakstart", function () {
                                this.isAdBreak = !0
                            }), this.on("play", function () {
                                this.isAdBreak = !1
                            }), this.on("playing", function () {
                                this.isAdBreak = !1
                            }), this.on("seeking", function () {
                                this.isAdBreak = !1
                            }), this.on("viewend", function () {
                                this.isAdBreak = !1
                            })
                        }

                        Object.defineProperty(n, "__esModule", {value: !0}), n.default = r
                    }, {}], 3: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        function a() {
                            var t = this;
                            this.one("playbackheartbeat", u), this.on("playbackheartbeatend", function () {
                                t.off("before*", s), t.one("playbackheartbeat", u)
                            })
                        }

                        Object.defineProperty(n, "__esModule", {value: !0}), n.default = a;
                        var o = t("lodash.assign"), i = r(o), u = function () {
                            this.lastWallClockTime = Date.now(), this.on("before*", s)
                        }, s = function (t) {
                            var e = Date.now(), n = this.lastWallClockTime;
                            this.lastWallClockTime = e, e - n > 3e4 && (this.emit("devicesleep", {viewer_time: n}), (0, i.default)(this.data, {viewer_time: n}), this.send("devicesleep"), this.emit("devicewake", {viewer_time: e}), (0, i.default)(this.data, {viewer_time: e}), this.send("devicewake"))
                        }
                    }, {"lodash.assign": 33}], 4: [function (t, e, n) {
                        "use strict";
                        function r() {
                            var t = this;
                            this.on("viewinit", function () {
                                t.viewErrored = !1
                            }), this.on("error", function () {
                                t.viewErrored = !0
                            })
                        }

                        Object.defineProperty(n, "__esModule", {value: !0}), n.default = r
                    }, {}], 5: [function (t, e, n) {
                        "use strict";
                        Object.defineProperty(n, "__esModule", {value: !0});
                        var r = function () {
                        }, a = 0;
                        r.prototype.on = function (t, e, n) {
                            return e._eventEmitterGuid = e._eventEmitterGuid || ++a, this._listeners = this._listeners || {}, this._listeners[t] = this._listeners[t] || [], n && (e = e.bind(n)), this._listeners[t].push(e), e
                        }, r.prototype.off = function (t, e) {
                            var n = this._listeners && this._listeners[t];
                            n && n.forEach(function (t, r) {
                                t._eventEmitterGuid === e._eventEmitterGuid && n.splice(r, 1)
                            })
                        }, r.prototype.one = function (t, e, n) {
                            var r = this;
                            e._eventEmitterGuid = e._eventEmitterGuid || ++a;
                            var o = function a() {
                                r.off(t, a), e.apply(n || this, arguments)
                            };
                            o._eventEmitterGuid = e._eventEmitterGuid, this.on(t, o)
                        }, r.prototype.emit = function (t, e) {
                            var n = this;
                            if (this._listeners) {
                                e = e || {};
                                var r = this._listeners["before*"] || [], a = this._listeners[t] || [],
                                    o = this._listeners["after" + t] || [], i = function (e, r) {
                                        e = e.slice(), e.forEach(function (e) {
                                            e.call(n, {type: t}, r)
                                        })
                                    };
                                i(r, e), i(a, e), i(o, e)
                            }
                        }, n.default = r
                    }, {}], 6: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        Object.defineProperty(n, "__esModule", {value: !0});
                        var a = t("global/window"), o = r(a), i = function () {
                            this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = !1, this.on("playing", function () {
                                this._playheadShouldBeProgressing = !0
                            }), this.on("play", this._startPlaybackHeartbeatInterval), this.on("adbreakstart", this._startPlaybackHeartbeatInterval), this.on("adplay", this._startPlaybackHeartbeatInterval), this.on("seeking", this._startPlaybackHeartbeatInterval), this.on("devicewake", this._startPlaybackHeartbeatInterval), this.on("pause", this._stopPlaybackHeartbeatInterval), this.on("ended", this._stopPlaybackHeartbeatInterval), this.on("viewend", this._stopPlaybackHeartbeatInterval), this.on("error", this._stopPlaybackHeartbeatInterval), this.on("adpause", this._stopPlaybackHeartbeatInterval), this.on("adbreakend", this._stopPlaybackHeartbeatInterval), this.on("seeked", function () {
                                this.data.player_is_paused && this._stopPlaybackHeartbeatInterval()
                            }), this.on("timeupdate", function () {
                                null !== this._playbackHeartbeatInterval && this.emit("playbackheartbeat", {viewer_time: Date.now()})
                            }), this.on("devicesleep", function (t, e) {
                                null !== this._playbackHeartbeatInterval && (o.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend", {viewer_time: e.viewer_time}), this._playbackHeartbeatInterval = null)
                            })
                        };
                        i.prototype._startPlaybackHeartbeatInterval = function () {
                            var t = this;
                            null === this._playbackHeartbeatInterval && (this.emit("playbackheartbeat", {viewer_time: Date.now()}), this._playbackHeartbeatInterval = o.default.setInterval(function () {
                                t.emit("playbackheartbeat", {viewer_time: Date.now()})
                            }, this.playbackHeartbeatTime))
                        }, i.prototype._stopPlaybackHeartbeatInterval = function () {
                            this._playheadShouldBeProgressing = !1, null !== this._playbackHeartbeatInterval && (o.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend", {viewer_time: Date.now()}), this._playbackHeartbeatInterval = null)
                        }, n.default = i
                    }, {"global/window": 32}], 7: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        Object.defineProperty(n, "__esModule", {value: !0});
                        var a = t("../utils/safe-increment.js"), o = r(a), i = function () {
                            this._playbackTimeTrackerLastPlayheadPosition = -1, this.on("playbackheartbeat", this._updatePlaybackTime), this.on("playbackheartbeatend", this._clearPlaybackTimeState), this.on("seeking", this._clearPlaybackTimeState)
                        };
                        i.prototype._updatePlaybackTime = function () {
                            var t = this.data.player_playhead_time;
                            if (this._playbackTimeTrackerLastPlayheadPosition >= 0 && t > this._playbackTimeTrackerLastPlayheadPosition) {
                                var e = t - this._playbackTimeTrackerLastPlayheadPosition;
                                e <= 1e3 && (0, o.default)(this.data, "view_content_playback_time", e)
                            }
                            this._playbackTimeTrackerLastPlayheadPosition = t
                        }, i.prototype._clearPlaybackTimeState = function () {
                            this._updatePlaybackTime(), this._playbackTimeTrackerLastPlayheadPosition = -1
                        }, n.default = i
                    }, {"../utils/safe-increment.js": 23}], 8: [function (t, e, n) {
                        "use strict";
                        Object.defineProperty(n, "__esModule", {value: !0});
                        var r = function () {
                            this.on("playbackheartbeat", this._updatePlayheadTime), this.on("playbackheartbeatend", this._updatePlayheadTime), this.on("timeupdate", this._updatePlayheadTime), this.on("destroy", function () {
                                this.off("timeupdate", this._updatePlayheadTime)
                            })
                        };
                        r.prototype._updatePlayheadTime = function (t, e) {
                            e.player_playhead_time ? this.data.player_playhead_time = e.player_playhead_time : this.getPlayheadTime && (this.data.player_playhead_time = this.getPlayheadTime())
                        }, n.default = r
                    }, {}], 9: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        Object.defineProperty(n, "__esModule", {value: !0});
                        var a = t("../utils/safe-increment.js"), o = r(a), i = function () {
                            this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, this.on("playbackheartbeat", this._checkIfRebuffering), this.on("playbackheartbeatend", this._cleanupRebufferTracker), this.on("seeking", function () {
                                this._cleanupRebufferTracker(null, {viewer_time: Date.now()})
                            })
                        };
                        i.prototype._checkIfRebuffering = function (t, e) {
                            if (this.isSeeking || this.isAdBreak || !this._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(t, e);
                            if (null === this._lastCheckedTime)return this._prepareRebufferTrackerState(e.viewer_time), void this._updateRebufferMetrics();
                            if (this._lastPlayheadTime !== this.data.player_playhead_time)return void this._cleanupRebufferTracker(t, e, !0);
                            var n = e.viewer_time - this._lastPlayheadTimeUpdatedTime;
                            n >= this.sustainedRebufferThreshold && (this._rebuffering ? this._updateRebufferMetrics(e.viewer_time - this._lastCheckedTime) : (this._rebuffering = !0, (0, o.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(n), this.emit("rebufferstart"))), this._lastCheckedTime = e.viewer_time
                        }, i.prototype._clearRebufferTrackerState = function () {
                            this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null
                        }, i.prototype._prepareRebufferTrackerState = function (t) {
                            this._lastCheckedTime = t, this._lastPlayheadTime = this.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = t
                        }, i.prototype._cleanupRebufferTracker = function (t, e) {
                            var n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2];
                            if (this._rebuffering) this._rebuffering = !1, this._updateRebufferMetrics(e.viewer_time - this._lastCheckedTime), this.emit("rebufferend", {viewer_time: e.viewer_time}); else {
                                if (null === this._lastCheckedTime)return void this._updateRebufferMetrics();
                                var r = this.data.player_playhead_time - this._lastPlayheadTime,
                                    a = e.viewer_time - this._lastPlayheadTimeUpdatedTime;
                                r > 0 && a - r > this.minimumRebufferDuration ? ((0, o.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(a - r), this.emit("rebufferstart", {viewer_time: this._lastPlayheadTimeUpdatedTime}), this.emit("rebufferend", {viewer_time: this._lastPlayheadTimeUpdatedTime + a - r})) : this._updateRebufferMetrics()
                            }
                            n ? this._prepareRebufferTrackerState(e.viewer_time) : this._clearRebufferTrackerState()
                        }, i.prototype._updateRebufferMetrics = function (t) {
                            t > 0 && (0, o.default)(this.data, "view_rebuffer_duration", t), this.data.view_watch_time >= 0 && this.data.view_rebuffer_count > 0 && (this.data.view_rebuffer_frequency = this.data.view_rebuffer_count / this.data.view_watch_time, this.data.view_rebuffer_percentage = this.data.view_rebuffer_duration / this.data.view_watch_time)
                        }, n.default = i
                    }, {"../utils/safe-increment.js": 23}], 10: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        function a() {
                            var t = this;
                            this.on("viewinit", function () {
                                this._lastPlayheadPosition = -1
                            });
                            var e = ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb"],
                                n = ["playing", "hb"];
                            e.forEach(function (e) {
                                t.on(e, function () {
                                    if (this._lastPlayheadPosition >= 0 && this.data.player_playhead_time >= 0 && this._lastPlayerWidth >= 0 && this._lastSourceWidth > 0 && this._lastPlayerHeight >= 0 && this._lastSourceHeight > 0) {
                                        var t = this.data.player_playhead_time - this._lastPlayheadPosition;
                                        if (t < 0)return void(this._lastPlayheadPosition = -1);
                                        var e = Math.min(this._lastPlayerWidth / this._lastSourceWidth, this._lastPlayerHeight / this._lastSourceHeight),
                                            n = Math.max(0, e - 1), r = Math.max(0, 1 - e);
                                        this.data.view_max_upscale_percentage = Math.max(this.data.view_max_upscale_percentage || 0, n), this.data.view_max_downscale_percentage = Math.max(this.data.view_max_downscale_percentage || 0, r), (0, i.default)(this.data, "view_total_content_playback_time", t), (0, i.default)(this.data, "view_total_upscaling", n * t), (0, i.default)(this.data, "view_total_downscaling", r * t)
                                    }
                                    this._lastPlayheadPosition = -1
                                })
                            }), n.forEach(function (e) {
                                t.on(e, function () {
                                    this._lastPlayheadPosition = this.data.player_playhead_time, this._lastPlayerWidth = this.data.player_width, this._lastPlayerHeight = this.data.player_height, this._lastSourceWidth = this.data.video_source_width, this._lastSourceHeight = this.data.video_source_height
                                })
                            })
                        }

                        Object.defineProperty(n, "__esModule", {value: !0}), n.default = a;
                        var o = t("../utils/safe-increment.js"), i = r(o)
                    }, {"../utils/safe-increment.js": 23}], 11: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        function a() {
                            this.isSeeking = !1, this.on("seeking", function (t, e) {
                                (0, s.default)(this.data, {viewer_time: Date.now()}, e), this._lastSeekingTime = Date.now(), this.isSeeking === !1 && (this.isSeeking = !0, this.send("seeking"))
                            }), this.on("seeked", function () {
                                this.isSeeking = !1;
                                var t = this._lastSeekingTime || Date.now(), e = Date.now() - t;
                                (0, i.default)(this.data, "view_seek_count", 1), (0, i.default)(this.data, "view_seek_duration", e);
                                var n = this.data.view_max_seek_time || 0;
                                this.data.view_max_seek_time = Math.max(n, e)
                            }), this.on("viewend", function () {
                                this.isSeeking = !1
                            })
                        }

                        Object.defineProperty(n, "__esModule", {value: !0}), n.default = a;
                        var o = t("../utils/safe-increment.js"), i = r(o), u = t("lodash.assign"), s = r(u)
                    }, {"../utils/safe-increment.js": 23, "lodash.assign": 33}], 12: [function (t, e, n) {
                        "use strict";
                        Object.defineProperty(n, "__esModule", {value: !0});
                        var r = function () {
                            this.on("viewinit", function () {
                                var t = this.data, e = t.view_id, n = function (t, n) {
                                    var r = n.viewer_time;
                                    "playing" === t.type && "undefined" == typeof this.data.view_time_to_first_frame ? this.calculateTimeToFirstFrame(r || Date.now(), e) : "adplaying" === t.type && ("undefined" == typeof this.data.view_time_to_first_frame || "undefined" == typeof this.data.view_content_playback_time || this.data.view_content_playback_time <= 1e3) && this.calculateTimeToFirstFrame(r || Date.now(), e)
                                };
                                this.one("playing", n), this.one("adplaying", n), this.one("viewend", function () {
                                    this.off("playing", n), this.off("adplaying", n)
                                })
                            })
                        };
                        r.prototype.calculateTimeToFirstFrame = function (t, e) {
                            e === this.data.view_id && (this.data.view_time_to_first_frame = t - this.data.view_start, (this.data.player_autoplay_on || this.data.video_is_autoplay) && this.NAVIGATION_START && (this.data.view_aggregate_startup_time = t - this.NAVIGATION_START))
                        }, n.default = r
                    }, {}], 13: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        function a() {
                            var t = this, e = void 0, n = void 0, r = function () {
                                (0, i.default)(t.data, "view_waiting_rebuffer_count", 1), e = Date.now(), n = window.setInterval(function () {
                                    if (e) {
                                        var n = Date.now();
                                        (0, i.default)(t.data, "view_waiting_rebuffer_duration", n - e), e = n
                                    }
                                }, 250)
                            }, a = function () {
                                e && ((0, i.default)(t.data, "view_waiting_rebuffer_duration", Date.now() - e), e = !1, window.clearInterval(n))
                            }, o = !1, u = function () {
                                o = !0
                            }, s = function () {
                                o = !1, a()
                            };
                            this.on("waiting", function () {
                                o && r()
                            }), this.on("playing", function () {
                                a(), u()
                            }), this.on("pause", s), this.on("seeking", s)
                        }

                        Object.defineProperty(n, "__esModule", {value: !0}), n.default = a;
                        var o = t("../utils/safe-increment.js"), i = r(o)
                    }, {"../utils/safe-increment.js": 23}], 14: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        Object.defineProperty(n, "__esModule", {value: !0});
                        var a = t("../utils/safe-increment.js"), o = r(a), i = function () {
                            this._watchTimeTrackerLastCheckedTime = null, this.on("playbackheartbeat", this._updateWatchTime), this.on("playbackheartbeatend", this._clearWatchTimeState)
                        };
                        i.prototype._updateWatchTime = function (t, e) {
                            var n = e.viewer_time;
                            null === this._watchTimeTrackerLastCheckedTime && (this._watchTimeTrackerLastCheckedTime = n), (0, o.default)(this.data, "view_watch_time", n - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = n
                        }, i.prototype._clearWatchTimeState = function (t, e) {
                            this._updateWatchTime(t, e), this._watchTimeTrackerLastCheckedTime = null
                        }, n.default = i
                    }, {"../utils/safe-increment.js": 23}], 15: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                                return typeof t
                            } : function (t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                            }, o = function () {
                                function t(t, e) {
                                    var n = [], r = !0, a = !1, o = void 0;
                                    try {
                                        for (var i, u = t[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); r = !0);
                                    } catch (t) {
                                        a = !0, o = t
                                    } finally {
                                        try {
                                            !r && u.return && u.return()
                                        } finally {
                                            if (a)throw o
                                        }
                                    }
                                    return n
                                }

                                return function (e, n) {
                                    if (Array.isArray(e))return e;
                                    if (Symbol.iterator in Object(e))return t(e, n);
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                }
                            }(), i = t("global/window"), u = r(i), s = t("platform"), l = r(s), c = t("qs"), d = r(c),
                            f = t("./vendor/js-cookie.js"), h = r(f), p = t("./minify-keys.js"), m = r(p),
                            v = t("./utils/image-beacon.js"), b = r(v), y = t("./utils/beacon-url.js"), M = r(y),
                            g = t("./utils/element-helpers.js"), w = t("lodash.assign"), x = r(w),
                            _ = t("./utils/log.js"), S = r(_), I = t("./utils/uuid.js"), D = t("./player-monitor.js"),
                            F = r(D), E = t("./video-el-monitor.js"), P = r(E), T = t("./utils/utils-public.js"),
                            O = r(T), k = "2.0.46", A = "2.0", R = {}, j = {};
                        e.exports = function () {
                            function t() {
                                var t = void 0;
                                try {
                                    t = d.default.parse(h.default.get("muxData") || "")
                                } catch (t) {
                                }
                                return t || {}
                            }

                            function e() {
                                var e = t();
                                return e.mux_viewer_id = e.mux_viewer_id || (0, I.generateUUID)(), e.msn = e.msn || Math.random(), h.default.set("muxData", d.default.stringify(e), {expires: 7300}), {
                                    mux_viewer_id: e.mux_viewer_id,
                                    mux_sample_number: e.msn
                                }
                            }

                            function n() {
                                var e = t(), n = Date.now();
                                e.session_start && (e.sst = e.session_start, delete e.session_start), e.session_id && (e.sid = e.session_id, delete e.session_id), e.session_expires && (e.sex = e.session_expires, delete e.session_expires), (!e.sex || e.sex < n) && (e.sid = (0, I.generateUUID)(), e.sst = n), e.sex = n + 15e5, h.default.set("muxData", d.default.stringify(e), {expires: 7300});
                                var r = {session_id: e.sid, session_start: e.sst, session_expires: e.sex};
                                return r
                            }

                            function r(t, e) {
                                t = Array.prototype.slice.apply(t),
                                    e = e || Date.now();
                                var n = t[t.length - 1], r = void 0;
                                return "object" !== ("undefined" == typeof n ? "undefined" : a(n)) ? (t.push({viewer_time: e}), t) : (n.viewer_time || (r = (0, x.default)({}, n), r.viewer_time = e, t[t.length - 1] = r), t)
                            }

                            var i = function t(e) {
                                var n = arguments, a = Date.now();
                                "string" == typeof e ? t.hasOwnProperty(e) ? u.default.setTimeout(function () {
                                    n = Array.prototype.splice.call(n, 1), n = r(n, a), t[e].apply(null, n)
                                }, 0) : S.default.warn("`" + e + "` is an unknown task") : "function" == typeof e ? u.default.setTimeout(function () {
                                    e(t)
                                }, 0) : S.default.warn("`" + e + "` is invalid.")
                            };
                            i.loaded = Date.now(), i.VERSION = k, i.API_VERSION = A, i.PLAYER_TRACKED = !1, i.monitor = function (t, e) {
                                return (0, P.default)(i, t, e)
                            }, i.destroyMonitor = function (t) {
                                var e = (0, g.findMediaElement)(t), n = o(e, 1), r = n[0];
                                r && r.mux && "function" == typeof r.mux.destroy ? r.mux.destroy() : S.default.error("A video element monitor for `" + t + "` has not been initialized via `mux.monitor`.")
                            }, i.init = function (t, e) {
                                var n = (0, g.getMuxPlayerId)(t);
                                R[n] = new F.default(i, n, e)
                            }, i.emit = function (t, e, n) {
                                var r = (0, g.getMuxPlayerId)(t);
                                R[r] ? (R[r].emit(e, n), "destroy" === e && delete R[r]) : S.default.error("A monitor for `" + r + "` has not been initialized.")
                            };
                            var s = {
                                mux_api_version: A,
                                mux_embed_version: k,
                                page_url: u.default.location.href,
                                viewer_application_name: l.default.name,
                                viewer_application_version: l.default.version,
                                viewer_application_engine: l.default.layout,
                                viewer_device_name: l.default.product,
                                viewer_device_category: "",
                                viewer_device_manufacturer: l.default.manufacturer,
                                viewer_os_family: l.default.os && l.default.os.family,
                                viewer_os_architecture: l.default.os && l.default.os.architecture,
                                viewer_os_version: l.default.os && l.default.os.version
                            }, c = e();
                            return i.send = function (t, e) {
                                if (!t || i.checkDoNotTrack())return void S.default.debug("Not sending `" + t + "` because Do Not Track is enabled in your browser");
                                var r = n() || {}, o = {};
                                if (!e || "object" !== ("undefined" == typeof e ? "undefined" : a(e)))return S.default.error("A data object was expected in send() but was not provided");
                                "pageloadstart" === t && (s.page_load_start = e.viewer_time), (0, x.default)(o, s), (0, x.default)(o, e), (0, x.default)(o, r), (0, x.default)(o, c), o.event = t, o.user_id && (o.viewer_user_id = o.user_id, delete o.user_id);
                                var u = "undefined" == typeof o.mux_sample_rate ? 1 : o.mux_sample_rate,
                                    l = o.mux_sample_number < u, d = (0, m.default)(o);
                                l ? (S.default.debug("Sending event: ", t, o, d), e.property_key && (j[e.property_key] = j[e.property_key] || (0, M.default)(e.property_key), b.default.send(j[e.property_key], t, d))) : S.default.debug("Not sending event due to sample rate restriction: ", t, o, d)
                            }, i.checkDoNotTrack = function () {
                                var t = u.default.navigator, e = u.default.doNotTrack || t.doNotTrack || t.msDoNotTrack;
                                return "1" === e
                            }, i.checkDoNotTrack() && S.default.debug("The browser's Do Not Track flag is enabled - Mux beaconing is disabled."), i.log = S.default, i.utils = O.default, i
                        }()
                    }, {
                        "./minify-keys.js": 1,
                        "./player-monitor.js": 16,
                        "./utils/beacon-url.js": 17,
                        "./utils/element-helpers.js": 18,
                        "./utils/image-beacon.js": 20,
                        "./utils/log.js": 21,
                        "./utils/utils-public.js": 25,
                        "./utils/uuid.js": 26,
                        "./vendor/js-cookie.js": 28,
                        "./video-el-monitor.js": 29,
                        "global/window": 32,
                        "lodash.assign": 33,
                        platform: 35,
                        qs: 36
                    }], 16: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        Object.defineProperty(n, "__esModule", {value: !0});
                        var a = t("./utils/log.js"), o = r(a), i = t("lodash.assign"), u = r(i),
                            s = t("./utils/uuid.js"), l = t("global/document"), c = r(l), d = t("global/window"),
                            f = r(d), h = t("./mixins/event-emitter.js"), p = r(h),
                            m = t("./mixins/playback-heartbeat.js"), v = r(m), b = t("./utils/safe-increment.js"),
                            y = r(b), M = t("./utils/video-id-from-src.js"), g = r(M),
                            w = t("./mixins/error-tracker.js"), x = r(w), _ = t("./mixins/watch-time-tracker.js"),
                            S = r(_), I = t("./mixins/playback-time-tracker.js"), D = r(I),
                            F = t("./mixins/playhead-time-tracker.js"), E = r(F), P = t("./mixins/rebuffer-tracker.js"),
                            T = r(P), O = t("./mixins/time-to-first-frame-tracker.js"), k = r(O),
                            A = t("./mixins/scaling-tracker.js"), R = r(A), j = t("./mixins/seeking-tracker.js"),
                            L = r(j), N = t("./mixins/ad-tracker.js"), C = r(N),
                            B = t("./mixins/waiting-rebuffer-tracker.js"), z = r(B),
                            q = t("./mixins/device-sleep-tracker.js"), V = r(q),
                            U = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "stalled", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "rebufferstart", "rebufferend", "seeked", "error", "hb"],
                            H = function (t, e, n) {
                                var r = this;
                                this.DOM_CONTENT_LOADED_EVENT_END = f.default.performance && f.default.performance.timing.domContentLoadedEventEnd, this.NAVIGATION_START = f.default.performance && f.default.performance.timing.navigationStart;
                                var a = {
                                    debug: !1,
                                    minimumRebufferDuration: 100,
                                    sustainedRebufferThreshold: 1e3,
                                    playbackHeartbeatTime: 25,
                                    sampleRate: 1
                                };
                                this.mux = t, this.id = e, n = (0, u.default)(a, n), o.default.setLevel(n.debug ? "debug" : "warn"), this.getPlayheadTime = n.getPlayheadTime, this.getStateData = n.getStateData || function () {
                                    }, this.minimumRebufferDuration = n.minimumRebufferDuration, this.sustainedRebufferThreshold = n.sustainedRebufferThreshold, this.playbackHeartbeatTime = n.playbackHeartbeatTime, this.data = {
                                    player_instance_id: (0, s.generateShortID)(),
                                    mux_sample_rate: n.sampleRate
                                }, this.data.view_sequence_number = 1, this.data.player_sequence_number = 1, this.on("viewinit", function (t, e) {
                                    this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this.updateStateData(), (0, u.default)(this.data, e), this._initializeViewData();
                                    var n = function () {
                                        "undefined" == typeof this.data.view_start && (this.data.view_start = Date.now(), this.emit("viewstart"))
                                    }.bind(this);
                                    this.one("play", n), this.one("adbreakstart", n)
                                }), this.on("videochange", function (t, e) {
                                    this.emit("viewend"), this.send("viewend"), this.emit("viewinit", e)
                                }), this.on("destroy", function (t, e) {
                                    "undefined" != typeof this.data.view_start && (this.emit("viewend"), this.send("viewend")), f.default.clearTimeout(this._heartBeatTimeout)
                                }), this.on("playerready", function (t, e) {
                                    (0, u.default)(this.data, e)
                                }), U.forEach(function (t) {
                                    r.on(t, function (e, n) {
                                        0 !== t.indexOf("ad") && this.updateStateData(), (0, u.default)(this.data, {viewer_time: Date.now()}, n), this._sanitizeData()
                                    }), r.on("after" + t, function () {
                                        this.send(t)
                                    })
                                });
                                var i = function (t) {
                                    var e = Date.now();
                                    this.data.player_init_time && (this.data.player_startup_time = e - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = !0, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time
                                };
                                this.one("playerready", i), x.default.apply(this), V.default.apply(this), L.default.apply(this), C.default.apply(this), E.default.apply(this), v.default.apply(this), R.default.apply(this), S.default.apply(this), D.default.apply(this), T.default.apply(this), k.default.apply(this), z.default.apply(this), this.emit("viewinit", n.data)
                            };
                        (0, u.default)(H.prototype, E.default.prototype), (0, u.default)(H.prototype, p.default.prototype), (0, u.default)(H.prototype, L.default.prototype), (0, u.default)(H.prototype, C.default.prototype), (0, u.default)(H.prototype, v.default.prototype), (0, u.default)(H.prototype, S.default.prototype), (0, u.default)(H.prototype, D.default.prototype), (0, u.default)(H.prototype, T.default.prototype), (0, u.default)(H.prototype, k.default.prototype), H.prototype.updateStateData = function () {
                            (0, u.default)(this.data, this.getStateData()), this.getPlayheadTime && (this.data.player_playhead_time = this.getPlayheadTime()), this._sanitizeData()
                        }, H.prototype.send = function (t) {
                            var e = (0, u.default)({}, this.data);
                            if (1 === e.player_error_code && (delete e.player_error_code, delete e.player_error_message), e.player_source_duration === 1 / 0 || e.video_source_duration === 1 / 0 ? e.video_source_is_live = !0 : (e.player_source_duration > 0 || e.video_source_duration > 0) && (e.video_source_is_live = !1), e.video_source_url = e.video_source_url || e.player_source_url, e.video_source_url) {
                                var n = c.default.createElement("a");
                                n.href = e.video_source_url;
                                var r = n.hostname, a = r.match(/[^\.]+\.[^\.]+$/);
                                a && a.length && (e.video_source_domain = a[0]), e.video_source_hostname = r
                            }
                            delete e.ad_request_id, this.mux.send(t, e), this.data.view_sequence_number++, this.data.player_sequence_number++, this._restartHeartBeat()
                        }, H.prototype._sanitizeData = function () {
                            var t = this,
                                e = ["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time"];
                            e.forEach(function (e) {
                                var n = parseInt(t.data[e], 10);
                                t.data[e] = isNaN(n) ? void 0 : n
                            })
                        }, H.prototype._resetVideoData = function (t, e) {
                            var n = this;
                            Object.keys(this.data).forEach(function (t) {
                                0 === t.indexOf("video_") && delete n.data[t]
                            })
                        }, H.prototype._resetViewData = function () {
                            var t = this;
                            Object.keys(this.data).forEach(function (e) {
                                0 === e.indexOf("view_") && delete t.data[e]
                            }), this.data.view_sequence_number = 1
                        }, H.prototype._resetErrorData = function (t, e) {
                            delete this.data.player_error_code, delete this.data.player_error_message
                        }, H.prototype._initializeViewData = function () {
                            var t = this, e = this.data.view_id = (0, s.generateUUID)();
                            this.data.video_id || (this.data.video_id = (0, g.default)(this.data.player_source_url));
                            var n = function () {
                                e === t.data.view_id && (0, y.default)(t.data, "player_view_count", 1)
                            };
                            this.data.player_is_paused ? this.one("play", n) : n()
                        }, H.prototype._restartHeartBeat = function () {
                            var t = this;
                            f.default.clearTimeout(this._heartBeatTimeout), this.viewErrored || (this._heartBeatTimeout = f.default.setTimeout(function () {
                                t.data.player_is_paused || t.emit("hb")
                            }, 1e4))
                        }, n.default = H
                    }, {
                        "./mixins/ad-tracker.js": 2,
                        "./mixins/device-sleep-tracker.js": 3,
                        "./mixins/error-tracker.js": 4,
                        "./mixins/event-emitter.js": 5,
                        "./mixins/playback-heartbeat.js": 6,
                        "./mixins/playback-time-tracker.js": 7,
                        "./mixins/playhead-time-tracker.js": 8,
                        "./mixins/rebuffer-tracker.js": 9,
                        "./mixins/scaling-tracker.js": 10,
                        "./mixins/seeking-tracker.js": 11,
                        "./mixins/time-to-first-frame-tracker.js": 12,
                        "./mixins/waiting-rebuffer-tracker.js": 13,
                        "./mixins/watch-time-tracker.js": 14,
                        "./utils/log.js": 21,
                        "./utils/safe-increment.js": 23,
                        "./utils/uuid.js": 26,
                        "./utils/video-id-from-src.js": 27,
                        "global/document": 31,
                        "global/window": 32,
                        "lodash.assign": 33
                    }], 17: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t = t || "", t.match(/^[a-z0-9]+$/) ? "https://" + t + ".litix.io" : "https://img.litix.io/a.gif"
                        }

                        Object.defineProperty(n, "__esModule", {value: !0}), n.default = r
                    }, {}], 18: [function (t, e, n) {
                        "use strict";
                        Object.defineProperty(n, "__esModule", {value: !0}), n.findMediaElement = n.getMuxPlayerId = void 0;
                        var r = t("./uuid.js"), a = function (t) {
                            return t && "undefined" != typeof t.nodeName ? (t.muxId || (t.muxId = t.id || (0, r.generateShortID)()), t.muxId) : t
                        }, o = function (t) {
                            var e = void 0;
                            e = t && "undefined" != typeof t.nodeName ? t : document.querySelector(t), t = a(e);
                            var n = e && e.nodeName ? e.nodeName.toLowerCase() : "";
                            return [e, t, n]
                        };
                        n.getMuxPlayerId = a, n.findMediaElement = o
                    }, {"./uuid.js": 26}], 19: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        function a(t, e) {
                            if (i.default.defaultView && i.default.defaultView.getComputedStyle)return i.default.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                        }

                        Object.defineProperty(n, "__esModule", {value: !0}), n.default = a;
                        var o = t("global/document"), i = r(o)
                    }, {"global/document": 31}], 20: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        Object.defineProperty(n, "__esModule", {value: !0});
                        var a = t("qs"), o = r(a), i = {};
                        i.send = function (t, e, n) {
                            var r = new Image;
                            return r.src = t + "?e=" + e + "&" + o.default.stringify(n), r
                        }, n.default = i
                    }, {qs: 36}], 21: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        Object.defineProperty(n, "__esModule", {value: !0});
                        var a = t("loglevel"), o = r(a), i = o.default.methodFactory;
                        o.default.methodFactory = function (t, e, n) {
                            var r = i(t, e, n);
                            return function () {
                                for (var t = ["[mux]"], e = 0; e < arguments.length; e++)t.push(arguments[e]);
                                r.apply(void 0, t)
                            }
                        }, o.default.setLevel(o.default.getLevel()), n.default = o.default
                    }, {loglevel: 34}], 22: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        function a(t, e, n, r) {
                            var a = r;
                            if (t && "function" == typeof t[e])try {
                                a = t[e].apply(t, n)
                            } catch (t) {
                                i.default.debug("safeCall error", t)
                            }
                            return a
                        }

                        Object.defineProperty(n, "__esModule", {value: !0}), n.default = a;
                        var o = t("./log.js"), i = r(o)
                    }, {"./log.js": 21}], 23: [function (t, e, n) {
                        "use strict";
                        function r(t, e, n) {
                            n = void 0 === n ? 1 : n, t[e] = t[e] || 0, t[e] += n
                        }

                        Object.defineProperty(n, "__esModule", {value: !0}), n.default = r
                    }, {}], 24: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return Math.floor(1e3 * t)
                        }

                        Object.defineProperty(n, "__esModule", {value: !0}), n.default = r
                    }, {}], 25: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        Object.defineProperty(n, "__esModule", {value: !0});
                        var a = t("./safe-call.js"), o = r(a), i = t("./safe-increment.js"), u = r(i),
                            s = t("./get-computed-style.js"), l = r(s), c = t("./seconds-to-ms.js"), d = r(c), f = {};
                        f.safeCall = o.default, f.safeIncrement = u.default, f.getComputedStyle = l.default, f.secondsToMs = d.default, n.default = f
                    }, {
                        "./get-computed-style.js": 19,
                        "./safe-call.js": 22,
                        "./safe-increment.js": 23,
                        "./seconds-to-ms.js": 24
                    }], 26: [function (t, e, n) {
                        "use strict";
                        Object.defineProperty(n, "__esModule", {value: !0});
                        var r = function () {
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                                var e = 16 * Math.random() | 0, n = "x" === t ? e : 3 & e | 8;
                                return n.toString(16)
                            })
                        }, a = function () {
                            return ("000000" + (Math.random() * Math.pow(36, 6) << 0).toString(36)).slice(-6)
                        };
                        n.generateUUID = r, n.generateShortID = a
                    }, {}], 27: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        function a(t) {
                            var e = i.default.createElement("a");
                            e.href = t;
                            var n = e.pathname.replace(/\.[^\/.]+$/, "");
                            return s.default.btoa(e.host + n).split("=")[0]
                        }

                        Object.defineProperty(n, "__esModule", {value: !0}), n.default = a;
                        var o = t("global/document"), i = r(o), u = t("global/window"), s = r(u)
                    }, {"global/document": 31, "global/window": 32}], 28: [function (e, n, r) {
                        "use strict";
                        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                        };
                        !function (e) {
                            var o = !1;
                            if ("function" == typeof t && t.amd && (t(e), o = !0), "object" === ("undefined" == typeof r ? "undefined" : a(r)) && (n.exports = e(), o = !0), !o) {
                                var i = window.Cookies, u = window.Cookies = e();
                                u.noConflict = function () {
                                    return window.Cookies = i, u
                                }
                            }
                        }(function () {
                            function t(n) {
                                function r(t, a, o) {
                                    var i;
                                    if ("undefined" != typeof document) {
                                        if (arguments.length > 1) {
                                            if (o = e({path: "/"}, r.defaults, o), "number" == typeof o.expires) {
                                                var u = new Date;
                                                u.setMilliseconds(u.getMilliseconds() + 864e5 * o.expires), o.expires = u
                                            }
                                            try {
                                                i = JSON.stringify(a), /^[\{\[]/.test(i) && (a = i)
                                            } catch (t) {
                                            }
                                            return a = n.write ? n.write(a, t) : encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", a, o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
                                        }
                                        t || (i = {});
                                        for (var s = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, c = 0; c < s.length; c++) {
                                            var d = s[c].split("="), f = d.slice(1).join("=");
                                            '"' === f.charAt(0) && (f = f.slice(1, -1));
                                            try {
                                                var h = d[0].replace(l, decodeURIComponent);
                                                if (f = n.read ? n.read(f, h) : n(f, h) || f.replace(l, decodeURIComponent), this.json)try {
                                                    f = JSON.parse(f)
                                                } catch (t) {
                                                }
                                                if (t === h) {
                                                    i = f;
                                                    break
                                                }
                                                t || (i[h] = f)
                                            } catch (t) {
                                            }
                                        }
                                        return i
                                    }
                                }

                                return r.set = r, r.get = function (t) {
                                    return r.call(r, t)
                                }, r.getJSON = function () {
                                    return r.apply({json: !0}, [].slice.call(arguments))
                                }, r.defaults = {}, r.remove = function (t, n) {
                                    r(t, "", e(n, {expires: -1}))
                                }, r.withConverter = t, r
                            }

                            var e = function () {
                                for (var t = 0, e = {}; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n)e[r] = n[r]
                                }
                                return e
                            };
                            return t(function () {
                            })
                        })
                    }, {}], 29: [function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return t && t.__esModule ? t : {default: t}
                        }

                        function a(t, e, n) {
                            var r = (0, s.findMediaElement)(e), a = o(r, 3), i = a[0], d = a[1], f = a[2], h = t.log,
                                p = t.utils.getComputedStyle, m = t.utils.secondsToMs;
                            return i ? "video" !== f && "audio" !== f ? h.error("The element of `" + d + "` was not a media element.") : (n = n || {}, n.data = (0, u.default)({
                                player_software: "HTML5 Video Element",
                                player_mux_plugin_name: "VideoElementMonitor",
                                player_mux_plugin_version: "2.0.46"
                            }, n.data), n.getPlayheadTime = function () {
                                return m(i.currentTime)
                            }, n.getStateData = function () {
                                return {
                                    player_is_paused: i.paused,
                                    player_playhead_time: m(i.currentTime),
                                    player_width: parseInt(p(i, "width")),
                                    player_height: parseInt(p(i, "height")),
                                    player_autoplay_on: i.autoplay,
                                    player_preload_on: i.preload,
                                    video_poster_url: i.poster,
                                    video_source_url: i.currentSrc,
                                    video_source_duration: m(i.duration),
                                    video_source_height: i.videoHeight,
                                    video_source_width: i.videoWidth
                                }
                            }, i.mux = i.mux || {}, i.mux.destroy = function () {
                                Object.keys(i.mux.listeners).forEach(function (t) {
                                    i.removeEventListener(t, i.mux.listeners[t], !1)
                                }), delete i.mux.listeners, t.emit(d, "destroy")
                            }, i.mux.swapElement = function (e) {
                                var n = (0, s.findMediaElement)(e), r = o(n, 3), a = r[0], l = r[1], c = r[2];
                                return a ? "video" !== c && "audio" !== c ? t.log.error("The element of `" + l + "` was not a media element.") : (a.muxId = i.muxId, delete i.muxId, a.mux = a.mux || {}, a.mux.listeners = (0, u.default)({}, i.mux.listeners), delete i.mux.listeners, Object.keys(a.mux.listeners).forEach(function (t) {
                                    i.removeEventListener(t, a.mux.listeners[t], !1), a.addEventListener(t, a.mux.listeners[t], !1)
                                }), a.mux.swapElement = i.mux.swapElement, a.mux.destroy = i.mux.destroy, delete i.mux, void(i = a)) : t.log.error("No element was found with the `" + l + "` query selector.")
                            }, t.init(d, n), t.emit(d, "playerready"), i.paused || (t.emit(d, "play"), i.readyState > 2 && t.emit(d, "playing")), i.mux.listeners = {}, void l.forEach(function (e) {
                                i.mux.listeners[e] = function () {
                                    var n = {};
                                    "error" === e && (n.player_error_code = i.error && i.error.code, n.player_error_message = i.error && c[i.error.code]), t.emit(d, e, n)
                                }, i.addEventListener(e, i.mux.listeners[e], !1)
                            })) : h.error("No element was found with the `" + d + "` query selector.")
                        }

                        Object.defineProperty(n, "__esModule", {value: !0});
                        var o = function () {
                            function t(t, e) {
                                var n = [], r = !0, a = !1, o = void 0;
                                try {
                                    for (var i, u = t[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !e || n.length !== e); r = !0);
                                } catch (t) {
                                    a = !0, o = t
                                } finally {
                                    try {
                                        !r && u.return && u.return()
                                    } finally {
                                        if (a)throw o
                                    }
                                }
                                return n
                            }

                            return function (e, n) {
                                if (Array.isArray(e))return e;
                                if (Symbol.iterator in Object(e))return t(e, n);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }();
                        n.default = a;
                        var i = t("lodash.assign"), u = r(i), s = t("./utils/element-helpers.js"),
                            l = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"],
                            c = {
                                1: "MEDIA_ERR_ABORTED",
                                2: "MEDIA_ERR_NETWORK",
                                3: "MEDIA_ERR_DECODE",
                                4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
                            }
                    }, {"./utils/element-helpers.js": 18, "lodash.assign": 33}], 30: [function (t, e, n) {
                    }, {}], 31: [function (t, n, r) {
                        (function (e) {
                            var r = "undefined" != typeof e ? e : "undefined" != typeof window ? window : {},
                                a = t("min-document");
                            if ("undefined" != typeof document) n.exports = document; else {
                                var o = r["__GLOBAL_DOCUMENT_CACHE@4"];
                                o || (o = r["__GLOBAL_DOCUMENT_CACHE@4"] = a), n.exports = o
                            }
                        }).call(this, "undefined" != typeof e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {"min-document": 30}], 32: [function (t, n, r) {
                        (function (t) {
                            "undefined" != typeof window ? n.exports = window : "undefined" != typeof t ? n.exports = t : "undefined" != typeof self ? n.exports = self : n.exports = {}
                        }).call(this, "undefined" != typeof e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}], 33: [function (t, e, n) {
                        function r(t, e, n) {
                            switch (n.length) {
                                case 0:
                                    return t.call(e);
                                case 1:
                                    return t.call(e, n[0]);
                                case 2:
                                    return t.call(e, n[0], n[1]);
                                case 3:
                                    return t.call(e, n[0], n[1], n[2])
                            }
                            return t.apply(e, n)
                        }

                        function a(t) {
                            return function (e) {
                                return null == e ? void 0 : e[t]
                            }
                        }

                        function o(t, e) {
                            for (var n = -1, r = Array(t); ++n < t;)r[n] = e(n);
                            return r
                        }

                        function i(t, e) {
                            return function (n) {
                                return t(e(n))
                            }
                        }

                        function u(t, e, n) {
                            var r = t[e];
                            A.call(t, e) && v(r, n) && (void 0 !== n || e in t) || (t[e] = n)
                        }

                        function s(t, e) {
                            return null != t && (A.call(t, e) || "object" == typeof t && e in t && null === V(t))
                        }

                        function l(t, e) {
                            return e = C(void 0 === e ? t.length - 1 : e, 0), function () {
                                for (var n = arguments, a = -1, o = C(n.length - e, 0), i = Array(o); ++a < o;)i[a] = n[e + a];
                                a = -1;
                                for (var u = Array(e + 1); ++a < e;)u[a] = n[a];
                                return u[e] = i, r(t, this, u)
                            }
                        }

                        function c(t, e, n, r) {
                            n || (n = {});
                            for (var a = -1, o = e.length; ++a < o;) {
                                var i = e[a], s = r ? r(n[i], t[i], i, n, t) : void 0;
                                u(n, i, void 0 === s ? t[i] : s)
                            }
                            return n
                        }

                        function d(t) {
                            return l(function (e, n) {
                                var r = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, i = a > 2 ? n[2] : void 0;
                                for (o = t.length > 3 && "function" == typeof o ? (a--, o) : void 0, i && p(n[0], n[1], i) && (o = a < 3 ? void 0 : o, a = 1), e = Object(e); ++r < a;) {
                                    var u = n[r];
                                    u && t(e, u, r, o)
                                }
                                return e
                            })
                        }

                        function f(t) {
                            var e = t ? t.length : void 0;
                            return w(e) && (U(t) || S(t) || b(t)) ? o(e, String) : null
                        }

                        function h(t, e) {
                            return e = null == e ? D : e, !!e && ("number" == typeof t || O.test(t)) && t > -1 && t % 1 == 0 && t < e
                        }

                        function p(t, e, n) {
                            if (!x(n))return !1;
                            var r = typeof e;
                            return !!("number" == r ? y(n) && h(e, n.length) : "string" == r && e in n) && v(n[e], t)
                        }

                        function m(t) {
                            var e = t && t.constructor, n = "function" == typeof e && e.prototype || k;
                            return t === n
                        }

                        function v(t, e) {
                            return t === e || t !== t && e !== e
                        }

                        function b(t) {
                            return M(t) && A.call(t, "callee") && (!j.call(t, "callee") || R.call(t) == F)
                        }

                        function y(t) {
                            return null != t && w(q(t)) && !g(t)
                        }

                        function M(t) {
                            return _(t) && y(t)
                        }

                        function g(t) {
                            var e = x(t) ? R.call(t) : "";
                            return e == E || e == P
                        }

                        function w(t) {
                            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= D
                        }

                        function x(t) {
                            var e = typeof t;
                            return !!t && ("object" == e || "function" == e)
                        }

                        function _(t) {
                            return !!t && "object" == typeof t
                        }

                        function S(t) {
                            return "string" == typeof t || !U(t) && _(t) && R.call(t) == T
                        }

                        function I(t) {
                            var e = m(t);
                            if (!e && !y(t))return z(t);
                            var n = f(t), r = !!n, a = n || [], o = a.length;
                            for (var i in t)!s(t, i) || r && ("length" == i || h(i, o)) || e && "constructor" == i || a.push(i);
                            return a
                        }

                        var D = 9007199254740991, F = "[object Arguments]", E = "[object Function]",
                            P = "[object GeneratorFunction]", T = "[object String]", O = /^(?:0|[1-9]\d*)$/,
                            k = Object.prototype, A = k.hasOwnProperty, R = k.toString, j = k.propertyIsEnumerable,
                            L = Object.getPrototypeOf, N = Object.keys, C = Math.max,
                            B = !j.call({valueOf: 1}, "valueOf"), z = i(N, Object), q = a("length"), V = i(L, Object),
                            U = Array.isArray, H = d(function (t, e) {
                                if (B || m(e) || y(e))return void c(e, I(e), t);
                                for (var n in e)A.call(e, n) && u(t, n, e[n])
                            });
                        e.exports = H
                    }, {}], 34: [function (e, n, r) {
                        !function (e, r) {
                            "use strict";
                            "function" == typeof t && t.amd ? t(r) : "object" == typeof n && n.exports ? n.exports = r() : e.log = r()
                        }(this, function () {
                            "use strict";
                            function t(t) {
                                return typeof console !== u && (void 0 !== console[t] ? e(console, t) : void 0 !== console.log ? e(console, "log") : i)
                            }

                            function e(t, e) {
                                var n = t[e];
                                if ("function" == typeof n.bind)return n.bind(t);
                                try {
                                    return Function.prototype.bind.call(n, t)
                                } catch (e) {
                                    return function () {
                                        return Function.prototype.apply.apply(n, [t, arguments])
                                    }
                                }
                            }

                            function n(t, e, n) {
                                return function () {
                                    typeof console !== u && (r.call(this, e, n), this[t].apply(this, arguments))
                                }
                            }

                            function r(t, e) {
                                for (var n = 0; n < s.length; n++) {
                                    var r = s[n];
                                    this[r] = n < t ? i : this.methodFactory(r, t, e)
                                }
                            }

                            function a(e, r, a) {
                                return t(e) || n.apply(this, arguments)
                            }

                            function o(t, e, n) {
                                function o(t) {
                                    var e = (s[t] || "silent").toUpperCase();
                                    try {
                                        return void(window.localStorage[d] = e)
                                    } catch (t) {
                                    }
                                    try {
                                        window.document.cookie = encodeURIComponent(d) + "=" + e + ";"
                                    } catch (t) {
                                    }
                                }

                                function i() {
                                    var t;
                                    try {
                                        t = window.localStorage[d]
                                    } catch (t) {
                                    }
                                    if (typeof t === u)try {
                                        var e = window.document.cookie, n = e.indexOf(encodeURIComponent(d) + "=");
                                        n && (t = /^([^;]+)/.exec(e.slice(n))[1])
                                    } catch (t) {
                                    }
                                    return void 0 === c.levels[t] && (t = void 0), t
                                }

                                var l, c = this, d = "loglevel";
                                t && (d += ":" + t), c.levels = {
                                    TRACE: 0,
                                    DEBUG: 1,
                                    INFO: 2,
                                    WARN: 3,
                                    ERROR: 4,
                                    SILENT: 5
                                }, c.methodFactory = n || a, c.getLevel = function () {
                                    return l
                                }, c.setLevel = function (e, n) {
                                    if ("string" == typeof e && void 0 !== c.levels[e.toUpperCase()] && (e = c.levels[e.toUpperCase()]), !("number" == typeof e && e >= 0 && e <= c.levels.SILENT))throw"log.setLevel() called with invalid level: " + e;
                                    if (l = e, n !== !1 && o(e), r.call(c, e, t), typeof console === u && e < c.levels.SILENT)return "No console available for logging"
                                }, c.setDefaultLevel = function (t) {
                                    i() || c.setLevel(t, !1)
                                }, c.enableAll = function (t) {
                                    c.setLevel(c.levels.TRACE, t)
                                }, c.disableAll = function (t) {
                                    c.setLevel(c.levels.SILENT, t)
                                };
                                var f = i();
                                null == f && (f = null == e ? "WARN" : e), c.setLevel(f, !1)
                            }

                            var i = function () {
                            }, u = "undefined", s = ["trace", "debug", "info", "warn", "error"], l = new o, c = {};
                            l.getLogger = function (t) {
                                if ("string" != typeof t || "" === t)throw new TypeError("You must supply a name when creating a logger.");
                                var e = c[t];
                                return e || (e = c[t] = new o(t, l.getLevel(), l.methodFactory)), e
                            };
                            var d = typeof window !== u ? window.log : void 0;
                            return l.noConflict = function () {
                                return typeof window !== u && window.log === l && (window.log = d), l
                            }, l
                        })
                    }, {}], 35: [function (n, r, a) {
                        (function (e) {
                            (function () {
                                "use strict";
                                function n(t) {
                                    return t = String(t), t.charAt(0).toUpperCase() + t.slice(1)
                                }

                                function o(t, e, n) {
                                    var r = {
                                        "10.0": "10",
                                        6.4: "10 Technical Preview",
                                        6.3: "8.1",
                                        6.2: "8",
                                        6.1: "7 / Server 2008 R2",
                                        "6.0": "Vista / Server 2008",
                                        5.2: "XP 64-bit / Server 2003",
                                        5.1: "XP",
                                        5.01: "2000 SP1",
                                        "5.0": "2000",
                                        "4.0": "NT",
                                        "4.90": "ME"
                                    };
                                    return e && n && /^Win/i.test(t) && !/^Windows Phone /i.test(t) && (r = r[/[\d.]+$/.exec(t)]) && (t = "Windows " + r), t = String(t), e && n && (t = t.replace(RegExp(e, "i"), n)), t = u(t.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                                }

                                function i(t, e) {
                                    var n = -1, r = t ? t.length : 0;
                                    if ("number" == typeof r && r > -1 && r <= w)for (; ++n < r;)e(t[n], n, t); else s(t, e)
                                }

                                function u(t) {
                                    return t = h(t), /^(?:webOS|i(?:OS|P))/.test(t) ? t : n(t)
                                }

                                function s(t, e) {
                                    for (var n in t)I.call(t, n) && e(t[n], n, t)
                                }

                                function l(t) {
                                    return null == t ? n(t) : D.call(t).slice(8, -1)
                                }

                                function c(t, e) {
                                    var n = null != t ? typeof t[e] : "number";
                                    return !(/^(?:boolean|number|string|undefined)$/.test(n) || "object" == n && !t[e])
                                }

                                function d(t) {
                                    return String(t).replace(/([ -])(?!$)/g, "$1?")
                                }

                                function f(t, e) {
                                    var n = null;
                                    return i(t, function (r, a) {
                                        n = e(n, r, a, t)
                                    }), n
                                }

                                function h(t) {
                                    return String(t).replace(/^ +| +$/g, "")
                                }

                                function p(t) {
                                    function e(e) {
                                        return f(e, function (e, n) {
                                            return e || RegExp("\\b" + (n.pattern || d(n)) + "\\b", "i").exec(t) && (n.label || n)
                                        })
                                    }

                                    function n(e) {
                                        return f(e, function (e, n, r) {
                                            return e || (n[K] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(K)] || RegExp("\\b" + d(r) + "(?:\\b|\\w*\\d)", "i").exec(t)) && r
                                        })
                                    }

                                    function r(e) {
                                        return f(e, function (e, n) {
                                            return e || RegExp("\\b" + (n.pattern || d(n)) + "\\b", "i").exec(t) && (n.label || n)
                                        })
                                    }

                                    function a(e) {
                                        return f(e, function (e, n) {
                                            var r = n.pattern || d(n);
                                            return !e && (e = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t)) && (e = o(e, r, n.label || n)), e
                                        })
                                    }

                                    function i(e) {
                                        return f(e, function (e, n) {
                                            var r = n.pattern || d(n);
                                            return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), n = n.label || n, e = u(e[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
                                        })
                                    }

                                    function m(e) {
                                        return f(e, function (e, n) {
                                            return e || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
                                        })
                                    }

                                    function y() {
                                        return this.description || ""
                                    }

                                    var M = v, g = t && "object" == typeof t && "String" != l(t);
                                    g && (M = t, t = null);
                                    var w = M.navigator || {}, S = w.userAgent || "";
                                    t || (t = S);
                                    var I, F, E = g || _ == b,
                                        P = g ? !!w.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(D.toString()),
                                        T = "Object", O = g ? T : "ScriptBridgingProxyObject",
                                        k = g ? T : "Environment", A = g && M.java ? "JavaPackage" : l(M.java),
                                        R = g ? T : "RuntimeObject", j = /\bJava/.test(A) && M.java,
                                        L = j && l(M.environment) == k, N = j ? "a" : "α", C = j ? "b" : "β",
                                        B = M.document || {}, z = M.operamini || M.opera,
                                        q = x.test(q = g && z ? z["[[Class]]"] : l(z)) ? q : z = null, V = t, U = [],
                                        H = null, W = t == S,
                                        Y = W && z && "function" == typeof z.version && z.version(),
                                        G = e([{label: "EdgeHTML", pattern: "Edge"}, "Trident", {
                                            label: "WebKit",
                                            pattern: "AppleWebKit"
                                        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                                        X = r(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                                            label: "Microsoft Edge",
                                            pattern: "Edge"
                                        }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", "SeaMonkey", {
                                            label: "Silk",
                                            pattern: "(?:Cloud9|Silk-Accelerated)"
                                        }, "Sleipnir", "SlimBrowser", {
                                            label: "SRWare Iron",
                                            pattern: "Iron"
                                        }, "Sunrise", "Swiftfox", "WebPositive", "Opera Mini", {
                                            label: "Opera Mini",
                                            pattern: "OPiOS"
                                        }, "Opera", {label: "Opera", pattern: "OPR"}, "Chrome", {
                                            label: "Chrome Mobile",
                                            pattern: "(?:CriOS|CrMo)"
                                        }, {
                                            label: "Firefox",
                                            pattern: "(?:Firefox|Minefield)"
                                        }, {label: "Firefox for iOS", pattern: "FxiOS"}, {
                                            label: "IE",
                                            pattern: "IEMobile"
                                        }, {label: "IE", pattern: "MSIE"}, "Safari"]),
                                        K = i([{label: "BlackBerry", pattern: "BB10"}, "BlackBerry", {
                                            label: "Galaxy S",
                                            pattern: "GT-I9000"
                                        }, {label: "Galaxy S2", pattern: "GT-I9100"}, {
                                            label: "Galaxy S3",
                                            pattern: "GT-I9300"
                                        }, {
                                            label: "Galaxy S4",
                                            pattern: "GT-I9500"
                                        }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                                            label: "Kindle Fire",
                                            pattern: "(?:Cloud9|Silk-Accelerated)"
                                        }, "Nexus", "Nook", "PlayBook", "PlayStation 3", "PlayStation 4", "PlayStation Vita", "TouchPad", "Transformer", {
                                            label: "Wii U",
                                            pattern: "WiiU"
                                        }, "Wii", "Xbox One", {label: "Xbox 360", pattern: "Xbox"}, "Xoom"]), $ = n({
                                            Apple: {iPad: 1, iPhone: 1, iPod: 1},
                                            Archos: {},
                                            Amazon: {Kindle: 1, "Kindle Fire": 1},
                                            Asus: {Transformer: 1},
                                            "Barnes & Noble": {Nook: 1},
                                            BlackBerry: {PlayBook: 1},
                                            Google: {"Google TV": 1, Nexus: 1},
                                            HP: {TouchPad: 1},
                                            HTC: {},
                                            LG: {},
                                            Microsoft: {Xbox: 1, "Xbox One": 1},
                                            Motorola: {Xoom: 1},
                                            Nintendo: {"Wii U": 1, Wii: 1},
                                            Nokia: {Lumia: 1},
                                            Samsung: {"Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1},
                                            Sony: {"PlayStation 4": 1, "PlayStation 3": 1, "PlayStation Vita": 1}
                                        }), J = a(["Windows Phone", "Android", "CentOS", {
                                            label: "Chrome OS",
                                            pattern: "CrOS"
                                        }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
                                    if (G && (G = [G]), $ && !K && (K = i([$])), (I = /\bGoogle TV\b/.exec(K)) && (K = I[0]), /\bSimulator\b/i.test(t) && (K = (K ? K + " " : "") + "Simulator"), "Opera Mini" == X && /\bOPiOS\b/.test(t) && U.push("running in Turbo/Uncompressed mode"), "IE" == X && /\blike iPhone OS\b/.test(t) ? (I = p(t.replace(/like iPhone OS/, "")), $ = I.manufacturer, K = I.product) : /^iP/.test(K) ? (X || (X = "Safari"), J = "iOS" + ((I = / OS ([\d_]+)/i.exec(t)) ? " " + I[1].replace(/_/g, ".") : "")) : "Konqueror" != X || /buntu/i.test(J) ? $ && "Google" != $ && (/Chrome/.test(X) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(K)) || /\bAndroid\b/.test(J) && /^Chrome/.test(X) && /\bVersion\//i.test(t) ? (X = "Android Browser", J = /\bAndroid\b/.test(J) ? J : "Android") : "Silk" == X ? (/\bMobi/i.test(t) || (J = "Android", U.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && U.unshift("accelerated")) : "PaleMoon" == X && (I = /\bFirefox\/([\d.]+)\b/.exec(t)) ? U.push("identifying as Firefox " + I[1]) : "Firefox" == X && (I = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (J || (J = "Firefox OS"), K || (K = I[1])) : X && !(I = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(X)) || (X && !K && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(I + "/") + 8)) && (X = null), (I = K || $ || J) && (K || $ || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(J)) && (X = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(J) ? J : I) + " Browser")) : J = "Kubuntu", Y || (Y = m(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))", "Version", d(X), "(?:Firefox|Minefield|NetFront)"])), (I = "iCab" == G && parseFloat(Y) > 3 && "WebKit" || /\bOpera\b/.test(X) && (/\bOPR\b/.test(t) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(G) && "WebKit" || !G && /\bMSIE\b/i.test(t) && ("Mac OS" == J ? "Tasman" : "Trident") || "WebKit" == G && /\bPlayStation\b(?! Vita\b)/i.test(X) && "NetFront") && (G = [I]), "IE" == X && (I = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (X += " Mobile", J = "Windows Phone " + (/\+$/.test(I) ? I : I + ".x"), U.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (X = "IE Mobile", J = "Windows Phone 8.x", U.unshift("desktop mode"), Y || (Y = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != X && "Trident" == G && (I = /\brv:([\d.]+)/.exec(t)) && (X && U.push("identifying as " + X + (Y ? " " + Y : "")), X = "IE", Y = I[1]), W) {
                                        if (c(M, "global"))if (j && (I = j.lang.System, V = I.getProperty("os.arch"), J = J || I.getProperty("os.name") + " " + I.getProperty("os.version")), E && c(M, "system") && (I = [M.system])[0]) {
                                            J || (J = I[0].os || null);
                                            try {
                                                I[1] = M.require("ringo/engine").version, Y = I[1].join("."), X = "RingoJS"
                                            } catch (t) {
                                                I[0].global.system == M.system && (X = "Narwhal")
                                            }
                                        } else"object" == typeof M.process && !M.process.browser && (I = M.process) ? (X = "Node.js",
                                            V = I.arch, J = I.platform, Y = /[\d.]+/.exec(I.version)[0]) : L && (X = "Rhino"); else l(I = M.runtime) == O ? (X = "Adobe AIR", J = I.flash.system.Capabilities.os) : l(I = M.phantom) == R ? (X = "PhantomJS", Y = (I = I.version || null) && I.major + "." + I.minor + "." + I.patch) : "number" == typeof B.documentMode && (I = /\bTrident\/(\d+)/i.exec(t)) && (Y = [Y, B.documentMode], (I = +I[1] + 4) != Y[1] && (U.push("IE " + Y[1] + " mode"), G && (G[1] = ""), Y[1] = I), Y = "IE" == X ? String(Y[1].toFixed(1)) : Y[0]);
                                        J = J && u(J)
                                    }
                                    Y && (I = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(Y) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (W && w.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (H = /b/i.test(I) ? "beta" : "alpha", Y = Y.replace(RegExp(I + "\\+?$"), "") + ("beta" == H ? C : N) + (/\d+\+?/.exec(I) || "")), "Fennec" == X || "Firefox" == X && /\b(?:Android|Firefox OS)\b/.test(J) ? X = "Firefox Mobile" : "Maxthon" == X && Y ? Y = Y.replace(/\.[\d.]+/, ".x") : /\bXbox\b/i.test(K) ? (J = null, "Xbox 360" == K && /\bIEMobile\b/.test(t) && U.unshift("mobile mode")) : !/^(?:Chrome|IE|Opera)$/.test(X) && (!X || K || /Browser|Mobi/.test(X)) || "Windows CE" != J && !/Mobi/i.test(t) ? "IE" == X && W && null === M.external ? U.unshift("platform preview") : (/\bBlackBerry\b/.test(K) || /\bBB10\b/.test(t)) && (I = (RegExp(K.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || Y) ? (I = [I, /BB10/.test(t)], J = (I[1] ? (K = null, $ = "BlackBerry") : "Device Software") + " " + I[0], Y = null) : this != s && "Wii" != K && (W && z || /Opera/.test(X) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == X && /\bOS X (?:\d+\.){2,}/.test(J) || "IE" == X && (J && !/^Win/.test(J) && Y > 5.5 || /\bWindows XP\b/.test(J) && Y > 8 || 8 == Y && !/\bTrident\b/.test(t))) && !x.test(I = p.call(s, t.replace(x, "") + ";")) && I.name && (I = "ing as " + I.name + ((I = I.version) ? " " + I : ""), x.test(X) ? (/\bIE\b/.test(I) && "Mac OS" == J && (J = null), I = "identify" + I) : (I = "mask" + I, X = q ? u(q.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(I) && (J = null), W || (Y = null)), G = ["Presto"], U.push(I)) : X += " Mobile", (I = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (I = [parseFloat(I.replace(/\.(\d)$/, ".0$1")), I], "Safari" == X && "+" == I[1].slice(-1) ? (X = "WebKit Nightly", H = "alpha", Y = I[1].slice(0, -1)) : Y != I[1] && Y != (I[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1]) || (Y = null), I[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == I[0] && 537.36 == I[2] && parseFloat(I[1]) >= 28 && "WebKit" == G && (G = ["Blink"]), W && (P || I[1]) ? (G && (G[1] = "like Chrome"), I = I[1] || (I = I[0], I < 530 ? 1 : I < 532 ? 2 : I < 532.05 ? 3 : I < 533 ? 4 : I < 534.03 ? 5 : I < 534.07 ? 6 : I < 534.1 ? 7 : I < 534.13 ? 8 : I < 534.16 ? 9 : I < 534.24 ? 10 : I < 534.3 ? 11 : I < 535.01 ? 12 : I < 535.02 ? "13+" : I < 535.07 ? 15 : I < 535.11 ? 16 : I < 535.19 ? 17 : I < 536.05 ? 18 : I < 536.1 ? 19 : I < 537.01 ? 20 : I < 537.11 ? "21+" : I < 537.13 ? 23 : I < 537.18 ? 24 : I < 537.24 ? 25 : I < 537.36 ? 26 : "Blink" != G ? "27" : "28")) : (G && (G[1] = "like Safari"), I = I[0], I = I < 400 ? 1 : I < 500 ? 2 : I < 526 ? 3 : I < 533 ? 4 : I < 534 ? "4+" : I < 535 ? 5 : I < 537 ? 6 : I < 538 ? 7 : I < 601 ? 8 : "8"), G && (G[1] += " " + (I += "number" == typeof I ? ".x" : /[.+]/.test(I) ? "" : "+")), "Safari" == X && (!Y || parseInt(Y) > 45) && (Y = I)), "Opera" == X && (I = /\bzbov|zvav$/.exec(J)) ? (X += " ", U.unshift("desktop mode"), "zvav" == I ? (X += "Mini", Y = null) : X += "Mobile", J = J.replace(RegExp(" *" + I + "$"), "")) : "Safari" == X && /\bChrome\b/.exec(G && G[1]) && (U.unshift("desktop mode"), X = "Chrome Mobile", Y = null, /\bOS X\b/.test(J) ? ($ = "Apple", J = "iOS 4.3+") : J = null), Y && 0 == Y.indexOf(I = /[\d.]+$/.exec(J)) && t.indexOf("/" + I + "-") > -1 && (J = h(J.replace(I, ""))), G && !/\b(?:Avant|Nook)\b/.test(X) && (/Browser|Lunascape|Maxthon/.test(X) || "Safari" != X && /^iOS/.test(J) && /\bSafari\b/.test(G[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(X) && G[1]) && (I = G[G.length - 1]) && U.push(I), U.length && (U = ["(" + U.join("; ") + ")"]), $ && K && K.indexOf($) < 0 && U.push("on " + $), K && U.push((/^on /.test(U[U.length - 1]) ? "" : "on ") + K), J && (I = / ([\d.+]+)$/.exec(J) || (F = /^[a-z]+ ([\d.+]+) \//i.exec(J)), J = {
                                        architecture: 32,
                                        family: I && !F ? J.replace(I[0], "") : J,
                                        version: I ? I[1] : null,
                                        toString: function () {
                                            var t = this.version;
                                            return this.family + (t && !F ? " " + t : "") + (64 == this.architecture ? " 64-bit" : "")
                                        }
                                    }), (I = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(V)) && !/\bi686\b/i.test(V) ? (J && (J.architecture = 64, J.family = J.family.replace(RegExp(" *" + I), "")), X && (/\bWOW64\b/i.test(t) || W && /\w(?:86|32)$/.test(w.cpuClass || w.platform) && !/\bWin64; x64\b/i.test(t)) && U.unshift("32-bit")) : J && /^OS X/.test(J.family) && "Chrome" == X && parseFloat(Y) >= 39 && (J.architecture = 64), t || (t = null);
                                    var Q = {};
                                    return Q.description = t, Q.layout = G && G[0], Q.manufacturer = $, Q.name = X, Q.prerelease = H, Q.product = K, Q.ua = t, Q.version = X && Y, Q.os = J || {
                                            architecture: null,
                                            family: null,
                                            version: null,
                                            toString: function () {
                                                return "null"
                                            }
                                        }, Q.parse = p, Q.toString = y, Q.version && U.unshift(Y), Q.name && U.unshift(X), J && X && (J != String(J).split(" ")[0] || J != X.split(" ")[0] && !K) && U.push(K ? "(" + J + ")" : "on " + J), U.length && (Q.description = U.join(" ")), Q
                                }

                                var m = {function: !0, object: !0}, v = m[typeof window] && window || this, b = v,
                                    y = m[typeof a] && a, M = m[typeof r] && r && !r.nodeType && r,
                                    g = y && M && "object" == typeof e && e;
                                !g || g.global !== g && g.window !== g && g.self !== g || (v = g);
                                var w = Math.pow(2, 53) - 1, x = /\bOpera/, _ = this, S = Object.prototype,
                                    I = S.hasOwnProperty, D = S.toString, F = p();
                                "function" == typeof t && "object" == typeof t.amd && t.amd ? (v.platform = F, t(function () {
                                    return F
                                })) : y && M ? s(F, function (t, e) {
                                    y[e] = t
                                }) : v.platform = F
                            }).call(this)
                        }).call(this, "undefined" != typeof e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}], 36: [function (t, e, n) {
                        "use strict";
                        var r = t("./stringify"), a = t("./parse");
                        e.exports = {stringify: r, parse: a}
                    }, {"./parse": 37, "./stringify": 38}], 37: [function (t, e, n) {
                        "use strict";
                        var r = t("./utils"), a = Object.prototype.hasOwnProperty, o = {
                            delimiter: "&",
                            depth: 5,
                            arrayLimit: 20,
                            parameterLimit: 1e3,
                            strictNullHandling: !1,
                            plainObjects: !1,
                            allowPrototypes: !1,
                            allowDots: !1,
                            decoder: r.decode
                        }, i = function (t, e) {
                            for (var n = {}, r = t.split(e.delimiter, e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit), o = 0; o < r.length; ++o) {
                                var i, u, s = r[o], l = s.indexOf("]=") === -1 ? s.indexOf("=") : s.indexOf("]=") + 1;
                                l === -1 ? (i = e.decoder(s), u = e.strictNullHandling ? null : "") : (i = e.decoder(s.slice(0, l)), u = e.decoder(s.slice(l + 1))), a.call(n, i) ? n[i] = [].concat(n[i]).concat(u) : n[i] = u
                            }
                            return n
                        }, u = function t(e, n, r) {
                            if (!e.length)return n;
                            var a, o = e.shift();
                            if ("[]" === o) a = [], a = a.concat(t(e, n, r)); else {
                                a = r.plainObjects ? Object.create(null) : {};
                                var i = "[" === o[0] && "]" === o[o.length - 1] ? o.slice(1, o.length - 1) : o,
                                    u = parseInt(i, 10);
                                !isNaN(u) && o !== i && String(u) === i && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (a = [], a[u] = t(e, n, r)) : a[i] = t(e, n, r)
                            }
                            return a
                        }, s = function (t, e, n) {
                            if (t) {
                                var r = n.allowDots ? t.replace(/\.([^\.\[]+)/g, "[$1]") : t, o = /^([^\[\]]*)/,
                                    i = /(\[[^\[\]]*\])/g, s = o.exec(r), l = [];
                                if (s[1]) {
                                    if (!n.plainObjects && a.call(Object.prototype, s[1]) && !n.allowPrototypes)return;
                                    l.push(s[1])
                                }
                                for (var c = 0; null !== (s = i.exec(r)) && c < n.depth;)c += 1, (n.plainObjects || !a.call(Object.prototype, s[1].replace(/\[|\]/g, "")) || n.allowPrototypes) && l.push(s[1]);
                                return s && l.push("[" + r.slice(s.index) + "]"), u(l, e, n)
                            }
                        };
                        e.exports = function (t, e) {
                            var n = e || {};
                            if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder)throw new TypeError("Decoder has to be a function.");
                            if (n.delimiter = "string" == typeof n.delimiter || r.isRegExp(n.delimiter) ? n.delimiter : o.delimiter, n.depth = "number" == typeof n.depth ? n.depth : o.depth, n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : o.arrayLimit, n.parseArrays = n.parseArrays !== !1, n.decoder = "function" == typeof n.decoder ? n.decoder : o.decoder, n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : o.allowDots, n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : o.plainObjects, n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : o.allowPrototypes, n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : o.parameterLimit, n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : o.strictNullHandling, "" === t || null === t || "undefined" == typeof t)return n.plainObjects ? Object.create(null) : {};
                            for (var a = "string" == typeof t ? i(t, n) : t, u = n.plainObjects ? Object.create(null) : {}, l = Object.keys(a), c = 0; c < l.length; ++c) {
                                var d = l[c], f = s(d, a[d], n);
                                u = r.merge(u, f, n)
                            }
                            return r.compact(u)
                        }
                    }, {"./utils": 39}], 38: [function (t, e, n) {
                        "use strict";
                        var r = t("./utils"), a = {
                                brackets: function (t) {
                                    return t + "[]"
                                }, indices: function (t, e) {
                                    return t + "[" + e + "]"
                                }, repeat: function (t) {
                                    return t
                                }
                            }, o = {delimiter: "&", strictNullHandling: !1, skipNulls: !1, encode: !0, encoder: r.encode},
                            i = function t(e, n, a, o, i, u, s, l, c) {
                                var d = e;
                                if ("function" == typeof s) d = s(n, d); else if (d instanceof Date) d = d.toISOString(); else if (null === d) {
                                    if (o)return u ? u(n) : n;
                                    d = ""
                                }
                                if ("string" == typeof d || "number" == typeof d || "boolean" == typeof d || r.isBuffer(d))return u ? [u(n) + "=" + u(d)] : [n + "=" + String(d)];
                                var f = [];
                                if ("undefined" == typeof d)return f;
                                var h;
                                if (Array.isArray(s)) h = s; else {
                                    var p = Object.keys(d);
                                    h = l ? p.sort(l) : p
                                }
                                for (var m = 0; m < h.length; ++m) {
                                    var v = h[m];
                                    i && null === d[v] || (f = Array.isArray(d) ? f.concat(t(d[v], a(n, v), a, o, i, u, s, l, c)) : f.concat(t(d[v], n + (c ? "." + v : "[" + v + "]"), a, o, i, u, s, l, c)))
                                }
                                return f
                            };
                        e.exports = function (t, e) {
                            var n, r, u = t, s = e || {},
                                l = "undefined" == typeof s.delimiter ? o.delimiter : s.delimiter,
                                c = "boolean" == typeof s.strictNullHandling ? s.strictNullHandling : o.strictNullHandling,
                                d = "boolean" == typeof s.skipNulls ? s.skipNulls : o.skipNulls,
                                f = "boolean" == typeof s.encode ? s.encode : o.encode,
                                h = f ? "function" == typeof s.encoder ? s.encoder : o.encoder : null,
                                p = "function" == typeof s.sort ? s.sort : null,
                                m = "undefined" != typeof s.allowDots && s.allowDots;
                            if (null !== s.encoder && void 0 !== s.encoder && "function" != typeof s.encoder)throw new TypeError("Encoder has to be a function.");
                            "function" == typeof s.filter ? (r = s.filter, u = r("", u)) : Array.isArray(s.filter) && (n = r = s.filter);
                            var v = [];
                            if ("object" != typeof u || null === u)return "";
                            var b;
                            b = s.arrayFormat in a ? s.arrayFormat : "indices" in s ? s.indices ? "indices" : "repeat" : "indices";
                            var y = a[b];
                            n || (n = Object.keys(u)), p && n.sort(p);
                            for (var M = 0; M < n.length; ++M) {
                                var g = n[M];
                                d && null === u[g] || (v = v.concat(i(u[g], g, y, c, d, h, r, p, m)))
                            }
                            return v.join(l)
                        }
                    }, {"./utils": 39}], 39: [function (t, e, n) {
                        "use strict";
                        var r = function () {
                            for (var t = new Array(256), e = 0; e < 256; ++e)t[e] = "%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase();
                            return t
                        }();
                        n.arrayToObject = function (t, e) {
                            for (var n = e.plainObjects ? Object.create(null) : {}, r = 0; r < t.length; ++r)"undefined" != typeof t[r] && (n[r] = t[r]);
                            return n
                        }, n.merge = function (t, e, r) {
                            if (!e)return t;
                            if ("object" != typeof e) {
                                if (Array.isArray(t)) t.push(e); else {
                                    if ("object" != typeof t)return [t, e];
                                    t[e] = !0
                                }
                                return t
                            }
                            if ("object" != typeof t)return [t].concat(e);
                            var a = t;
                            return Array.isArray(t) && !Array.isArray(e) && (a = n.arrayToObject(t, r)), Object.keys(e).reduce(function (t, a) {
                                var o = e[a];
                                return Object.prototype.hasOwnProperty.call(t, a) ? t[a] = n.merge(t[a], o, r) : t[a] = o, t
                            }, a)
                        }, n.decode = function (t) {
                            try {
                                return decodeURIComponent(t.replace(/\+/g, " "))
                            } catch (e) {
                                return t
                            }
                        }, n.encode = function (t) {
                            if (0 === t.length)return t;
                            for (var e = "string" == typeof t ? t : String(t), n = "", a = 0; a < e.length; ++a) {
                                var o = e.charCodeAt(a);
                                45 === o || 46 === o || 95 === o || 126 === o || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 ? n += e.charAt(a) : o < 128 ? n += r[o] : o < 2048 ? n += r[192 | o >> 6] + r[128 | 63 & o] : o < 55296 || o >= 57344 ? n += r[224 | o >> 12] + r[128 | o >> 6 & 63] + r[128 | 63 & o] : (a += 1, o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(a)), n += r[240 | o >> 18] + r[128 | o >> 12 & 63] + r[128 | o >> 6 & 63] + r[128 | 63 & o])
                            }
                            return n
                        }, n.compact = function (t, e) {
                            if ("object" != typeof t || null === t)return t;
                            var r = e || [], a = r.indexOf(t);
                            if (a !== -1)return r[a];
                            if (r.push(t), Array.isArray(t)) {
                                for (var o = [], i = 0; i < t.length; ++i)t[i] && "object" == typeof t[i] ? o.push(n.compact(t[i], r)) : "undefined" != typeof t[i] && o.push(t[i]);
                                return o
                            }
                            for (var u = Object.keys(t), s = 0; s < u.length; ++s) {
                                var l = u[s];
                                t[l] = n.compact(t[l], r)
                            }
                            return t
                        }, n.isRegExp = function (t) {
                            return "[object RegExp]" === Object.prototype.toString.call(t)
                        }, n.isBuffer = function (t) {
                            return null !== t && "undefined" != typeof t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
                        }
                    }, {}]
                }, {}, [15])(15)
            })
        }()
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    "use strict";
    var n = "undefined" == typeof Symbol ? function (t) {
        return "@" + (t || "@") + Math.random()
    } : Symbol;
    t.exports = n
}]);