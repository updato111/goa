(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[583], {
    88924: function() {},
    55024: function() {},
    52962: function(t, e, n) {
        "use strict";
        n.d(e, {
            r: function() {
                return u
            }
        });
        var r = n(57437);
        n(42556);
        var o = n(25715)
          , i = n(93259)
          , l = n(72137)
          , a = n(22312);
        let u = t=>{
            let {header: e, rows: n} = t;
            return (0,
            r.jsx)(a.$0, {
                header: e,
                children: n.map((t,e)=>{
                    let n;
                    return n = void 0 === t.value ? (0,
                    r.jsx)("i", {
                        children: "empty"
                    }) : "type"in t ? (0,
                    r.jsx)(o.r, {
                        href: t.value,
                        children: "Open"
                    }) : "string" == typeof t.value ? (0,
                    l.jQ)(t.value) ? (0,
                    r.jsx)(i.e, {
                        color: t.value
                    }) : t.value : "boolean" == typeof t.value ? (0,
                    r.jsx)(a.XZ, {
                        checked: t.value,
                        disabled: !0
                    }) : t.value,
                    (0,
                    r.jsx)(a.bL, {
                        className: "display-data__line",
                        subhead: t.title,
                        readOnly: !0,
                        multiline: !0,
                        children: (0,
                        r.jsx)("span", {
                            className: "display-data__line-value",
                            children: n
                        })
                    }, e)
                }
                )
            })
        }
    },
    49336: function(t, e, n) {
        "use strict";
        n.d(e, {
            S: function() {
                return i
            }
        });
        var r = n(57437)
          , o = n(2265);
        class i extends o.Component {
            componentDidCatch(t) {
                this.setState({
                    error: t
                })
            }
            render() {
                let {state: {error: t}, props: {fallback: e, children: n}} = this;
                return t ? (0,
                r.jsx)(e, {
                    error: t
                }) : n
            }
            constructor(...t) {
                super(...t),
                this.state = {}
            }
        }
        i.getDerivedStateFromError = t=>({
            error: t
        })
    },
    93372: function(t, e, n) {
        "use strict";
        n.d(e, {
            m: function() {
                return i
            }
        });
        var r = n(57437)
          , o = n(2265);
        function i(t) {
            let {error: e, reset: n} = t;
            return (0,
            o.useEffect)(()=>{
                console.error(e)
            }
            , [e]),
            (0,
            r.jsxs)("div", {
                children: [(0,
                r.jsx)("h2", {
                    children: "An unhandled error occurred!"
                }), (0,
                r.jsx)("blockquote", {
                    children: (0,
                    r.jsx)("code", {
                        children: e.message
                    })
                }), n && (0,
                r.jsx)("button", {
                    onClick: ()=>n(),
                    children: "Try again"
                })]
            })
        }
    },
    25715: function(t, e, n) {
        "use strict";
        n.d(e, {
            r: function() {
                return a
            }
        });
        var r = n(57437);
        n(19363);
        var o = n(87138)
          , i = n(2265)
          , l = n(72137);
        let a = t=>{
            let {className: e, onClick: n, href: a, ...u} = t
              , s = (0,
            l.nB)()
              , c = (0,
            i.useCallback)(t=>{
                let e;
                if (null == n || n(t),
                "string" == typeof a)
                    e = a;
                else {
                    let {search: t="", pathname: n="", hash: r=""} = a;
                    e = "".concat(n, "?").concat(t, "#").concat(r)
                }
                let r = new URL(e,window.location.toString())
                  , o = new URL(window.location.toString());
                (r.protocol !== o.protocol || r.host !== o.host) && (t.preventDefault(),
                s && s.openLink(r.toString()))
            }
            , [a, n, s]);
            return (0,
            r.jsx)(o.default, {
                ...u,
                href: a,
                onClick: c,
                className: (0,
                l.AK)(e, "link")
            })
        }
    },
    93259: function(t, e, n) {
        "use strict";
        n.d(e, {
            e: function() {
                return i
            }
        });
        var r = n(57437);
        n(81848);
        var o = n(72137);
        let i = t=>{
            let {color: e, className: n, ...i} = t;
            return (0,
            r.jsxs)("span", {
                ...i,
                className: (0,
                o.AK)("rgb", n),
                children: [(0,
                r.jsx)("i", {
                    className: "rgb__icon",
                    style: {
                        backgroundColor: e
                    }
                }), e]
            })
        }
    },
    93528: function(t, e, n) {
        "use strict";
        n.d(e, {
            Root: function() {
                return h
            }
        });
        var r = n(57437);
        n(23951);
        var o = n(2265)
          , i = n(49336)
          , l = n(93372)
          , a = n(33628)
          , u = n(72137)
          , s = n(22312)
          , c = n(9137);
        function d(t) {
            let e = (0,
            u.e)()
              , n = (0,
            u.kD)()
              , i = (0,
            u.iP)()
              , l = (0,
            u.Sj)();
            return (0,
            o.useEffect)(()=>(0,
            u.AT)(n, i), [n, i]),
            (0,
            o.useEffect)(()=>(0,
            u.UX)(i), [i]),
            (0,
            o.useEffect)(()=>l && (0,
            u.Wl)(l), [l]),
            (0,
            r.jsx)(s.h7, {
                appearance: n.isDark ? "dark" : "light",
                platform: ["macos", "ios"].includes(e.platform) ? "ios" : "base",
                children: t.children
            })
        }
        function f(t) {
            let {children: e} = t
              , i = "debug" === (0,
            u.e)().startParam;
            return (0,
            o.useEffect)(()=>{
                i && Promise.all([n.e(22), n.e(300)]).then(n.t.bind(n, 10973, 23)).then(t=>t.default.init())
            }
            , [i]),
            (0,
            r.jsx)(c.LD, {
                uiPreferences: {
                    theme: c.C6.DARK
                },
                language: "en",
                manifestUrl: "".concat(a.e.websiteUrl, "/tonconnect-manifest.json"),
                children: (0,
                r.jsx)(u.u3, {
                    acceptCustomStyles: !0,
                    debug: i,
                    children: (0,
                    r.jsx)(d, {
                        children: e
                    })
                })
            })
        }
        function h(t) {
            return !function() {
                let[t,e] = (0,
                o.useState)(!1);
                return (0,
                o.useEffect)(()=>{
                    e(!0)
                }
                , []),
                t
            }() ? (0,
            r.jsx)("div", {
                className: "root__loading bg-black text-white"
            }) : (0,
            r.jsx)(i.S, {
                fallback: l.m,
                children: (0,
                r.jsx)(f, {
                    ...t
                })
            })
        }
    },
    56017: function(t, e, n) {
        "use strict";
        n.d(e, {
            e2: function() {
                return l
            },
            zx: function() {
                return s
            },
            jD: function() {
                return d
            },
            F: function() {
                return v
            },
            Ht: function() {
                return j
            },
            Yr: function() {
                return k
            },
            w_: function() {
                return N
            },
            x1: function() {
                return U
            },
            m_: function() {
                return L
            },
            wo: function() {
                return R
            },
            Rn: function() {
                return W
            },
            y$: function() {
                return B
            },
            UY: function() {
                return D
            }
        });
        var r = n(57437)
          , o = n(15151)
          , i = n(74340);
        let l = (0,
        o.G)((t,e)=>(0,
        r.jsx)(i.xu, {
            ref: e,
            pos: "absolute",
            top: 0,
            left: 0,
            w: "full",
            h: "full",
            ...t
        }));
        var a = n(76348)
          , u = n(16829);
        let s = (0,
        o.G)((t,e)=>{
            let {isLoading: n, disabled: o, children: i, ...l} = t;
            return (0,
            r.jsx)(a.m.button, {
                ref: e,
                transition: "all .3s linear",
                _hover: {
                    opacity: .9
                },
                _disabled: {
                    opacity: .8,
                    cursor: "not-allowed"
                },
                _active: {
                    opacity: .8
                },
                ...l,
                disabled: n || o,
                children: n ? (0,
                r.jsx)(u.$, {
                    size: "sm"
                }) : i
            })
        }
        );
        var c = n(22312);
        let d = t=>{
            let {style: e, children: n, fontSize: o, fontWeight: l, color: a, fontFamily: u, textProps: s, ...d} = t;
            return (0,
            r.jsx)(c.zx, {
                style: {
                    width: "100%",
                    fontWeight: 500,
                    height: 56,
                    background: "var(--chakra-colors-blue)",
                    borderRadius: 16,
                    ...e
                },
                ...d,
                children: (0,
                r.jsx)(i.xu, {
                    fontFamily: null != u ? u : "righteous",
                    fontSize: null != o ? o : 14,
                    fontWeight: null != l ? l : 400,
                    color: a,
                    ...s,
                    children: n
                })
            })
        }
        ;
        var f = n(19449)
          , h = n(49972)
          , p = n.n(h)
          , x = n(99087);
        let g = t=>{
            let {value: e, isWei: n, rounded: r, decimal: o=3, decimalNumber: i, isPositive: l, roundingMode: a=f.Z.ROUND_FLOOR, isKmb: u, prefix: s, suffix: c} = t
              , d = "---"
              , h = "---"
              , x = !1;
            try {
                if (!p()(e)) {
                    let t = e instanceof f.Z ? e.toFixed() : e.toString()
                      , s = n ? 18 : i
                      , c = void 0 !== s ? (0,
                    f.Z)(t).dividedBy(Math.pow(10, s)) : t
                      , p = (0,
                    f.Z)(c);
                    if (p.isNaN())
                        throw Error();
                    l && p.isNegative() && (p = (0,
                    f.Z)(0));
                    let g = p.toFixed(o, a);
                    d = (0,
                    f.Z)(g).toFormat(),
                    h = p.toFormat(),
                    x = d !== h,
                    u ? p.gte(1e9) ? d = p.dividedBy(1e9).toFixed(2) + "B" : p.gte(1e6) ? d = p.dividedBy(1e6).toFixed(2) + "M" : p.gte(1e3) && (d = p.dividedBy(1e3).toFixed(2) + "K") : r && p.gt(1e3) ? (d = "> 1,000",
                    x = !0) : r && p.lt(.001) && (d = "< 0.001",
                    x = !0)
                }
            } catch (t) {
                d = "---",
                h = "---",
                x = !1
            }
            return {
                value: "".concat(null != s ? s : "").concat(d).concat(null != c ? c : ""),
                fullValue: "".concat(null != s ? s : "").concat(h).concat(null != c ? c : ""),
                isRounded: x
            }
        }
          , v = t=>{
            let {value: e, isRounded: n, fullValue: o} = g(t);
            return n && t.rounded ? (0,
            r.jsx)(x.u, {
                label: o,
                children: e
            }) : (0,
            r.jsx)(r.Fragment, {
                children: e
            })
        }
        ;
        n(52962);
        var b = n(99240);
        let j = (0,
        o.G)((t,e)=>(0,
        r.jsx)(b.k, {
            ref: e,
            direction: "column",
            ...t
        }));
        var m = n(2265)
          , y = n(762)
          , w = n(92663);
        let _ = t=>{
            let {src: e, width: n, quality: r} = t;
            return "".concat(e, "?w=").concat(n, "&q=").concat(r || 75)
        }
          , k = (0,
        o.G)((t,e)=>{
            let {src: n, ...o} = t
              , [i,l] = (0,
            m.useState)(!1);
            return (0,
            r.jsx)(w.E, {
                ref: e,
                src: i ? "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" : (0,
                y.Vh)(n),
                onError: ()=>l(!0),
                loader: _,
                ...o
            })
        }
        );
        var S = n(66648)
          , F = n(46946)
          , z = n(47840);
        let E = t=>{
            let {src: e, width: n, quality: r} = t;
            return "".concat(e, "?w=").concat(n, "&q=").concat(r || 75)
        }
          , G = t=>{
            let {ratio: e, borderRadius: n, children: o} = t;
            return void 0 === e ? o : (0,
            r.jsx)(F.o, {
                w: "full",
                ratio: e,
                position: "relative",
                overflow: "hidden",
                borderRadius: n,
                children: o
            })
        }
          , N = t=>{
            let {src: e, alt: n, fallbackSrc: o="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png", bgGradient: l, priority: a, quality: u, ratio: s, disableLoading: c, ...d} = t
              , [f,h] = (0,
            m.useState)(!0)
              , [p,x] = (0,
            m.useState)(!1);
            return (0,
            r.jsx)(i.xu, {
                ...d,
                children: (0,
                r.jsx)(G, {
                    ratio: s,
                    borderRadius: t.borderRadius,
                    children: (0,
                    r.jsxs)(z.O, {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        isLoaded: c || f,
                        children: [(0,
                        r.jsx)(S.default, {
                            src: p ? o : (0,
                            y.Vh)(e),
                            loader: E,
                            alt: n,
                            fill: !0,
                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                            style: {
                                objectFit: "cover"
                            },
                            onLoad: t=>{
                                0 === t.currentTarget.naturalWidth ? x(!0) : h(!0)
                            }
                            ,
                            onError: ()=>x(!0),
                            priority: a,
                            quality: u
                        }), (0,
                        r.jsx)(i.xu, {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            bgGradient: l
                        })]
                    })
                })
            })
        }
          , U = (0,
        o.G)((t,e)=>{
            let {children: n, ...o} = t;
            return (0,
            r.jsx)(i.xu, {
                ref: e,
                w: "full",
                borderBottom: "1px solid",
                borderColor: "rgba(255, 255, 255, 0.15)",
                ...o
            })
        }
        );
        n(25715);
        var C = n(3427);
        (0,
        o.G)((t,e)=>{
            let {_hover: n, ...o} = t;
            return (0,
            r.jsx)(C.r, {
                ref: e,
                _hover: {
                    textDecoration: "none",
                    ...n
                },
                ...o
            })
        }
        ),
        n(93259),
        n(93528);
        let D = (0,
        o.G)((t,e)=>{
            let {righteous: n, defaultFontWeight: o, ...l} = t;
            return (0,
            r.jsx)(i.xu, {
                ref: e,
                fontWeight: n ? 400 : o,
                fontFamily: n ? "righteous" : void 0,
                ...l
            })
        }
        )
          , R = (0,
        o.G)((t,e)=>(0,
        r.jsx)(D, {
            ref: e,
            fontSize: 32,
            lineHeight: 1.25,
            defaultFontWeight: 600,
            ...t
        }))
          , W = (0,
        o.G)((t,e)=>(0,
        r.jsx)(D, {
            ref: e,
            fontSize: 22,
            lineHeight: 7,
            ...t
        }))
          , B = (0,
        o.G)((t,e)=>(0,
        r.jsx)(D, {
            ref: e,
            fontSize: 17,
            defaultFontWeight: 500,
            lineHeight: "22px",
            ...t
        }));
        (0,
        o.G)((t,e)=>(0,
        r.jsx)(D, {
            ref: e,
            fontSize: 11,
            defaultFontWeight: 500,
            lineHeight: 4,
            ...t
        }));
        let L = (0,
        o.G)((t,e)=>(0,
        r.jsx)(D, {
            ref: e,
            fontSize: 14,
            defaultFontWeight: 500,
            lineHeight: 5,
            ...t
        }));
        n(49336),
        n(93372)
    },
    33628: function(t, e, n) {
        "use strict";
        var r;
        n.d(e, {
            e: function() {
                return o
            }
        });
        let o = {
            basePath: null !== (r = n(20357).env.NEXT_PUBLIC_BASE_PATH) && void 0 !== r ? r : "",
            publicUrl: "https://api.allorigins.win/get?url=https://dev-api.goatsbot.xyz",
            publicUrlV2: "https://api.allorigins.win/get?url=https://dev-api-v2.goatsbot.xyz",
            publicUrlV4: "https://api.allorigins.win/get?url=https://dev-api-v4.goatsbot.xyz",
            publicUrlV5: "https://api.allorigins.win/get?url=https://api-daily.goatsbot.xyz",
            publicUrlV6: "https://api.allorigins.win/get?url=https://api-catching.goatsbot.xyz",
            publicUrlV7: "https://api.allorigins.win/get?url=https://api-mission.goatsbot.xyz",
            gtagId: "GTM-WZNLGNG3",
            websiteUrl: "https://api.allorigins.win/get?url=https://dev.goatsbot.xyz",
            isTonMainnet: JSON.parse("true")
        }
    },
    762: function(t, e, n) {
        "use strict";
        n.d(e, {
            Vh: function() {
                return o
            },
            _v: function() {
                return i
            },
            mr: function() {
                return l
            }
        });
        var r = n(33628);
        function o(t) {
            return r.e.basePath ? "string" != typeof t || t.startsWith("http") ? t : r.e.basePath + t : t
        }
        function i(t) {
            return new Promise(e=>setTimeout(e, t))
        }
        function l() {
            for (var t = "#", e = 0; e < 6; e++)
                t += "0123456789ABCDEF"[Math.floor(16 * Math.random())];
            return t
        }
    },
    42556: function() {},
    19363: function() {},
    81848: function() {},
    23951: function() {}
}]);
