(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[185], {
    88924: function() {},
    55024: function() {},
    2122: function(t, e, n) {
        Promise.resolve().then(n.t.bind(n, 80475, 23)),
        Promise.resolve().then(n.t.bind(n, 84080, 23)),
        Promise.resolve().then(n.t.bind(n, 49247, 23)),
        Promise.resolve().then(n.t.bind(n, 69074, 23)),
        Promise.resolve().then(n.bind(n, 93528)),
        Promise.resolve().then(n.bind(n, 74663))
    },
    49336: function(t, e, n) {
        "use strict";
        n.d(e, {
            S: function() {
                return o
            }
        });
        var r = n(57437)
          , s = n(2265);
        class o extends s.Component {
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
        o.getDerivedStateFromError = t=>({
            error: t
        })
    },
    93372: function(t, e, n) {
        "use strict";
        n.d(e, {
            m: function() {
                return o
            }
        });
        var r = n(57437)
          , s = n(2265);
        function o(t) {
            let {error: e, reset: n} = t;
            return (0,
            s.useEffect)(()=>{
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
    93528: function(t, e, n) {
        "use strict";
        n.d(e, {
            Root: function() {
                return h
            }
        });
        var r = n(57437);
        n(23951);
        var s = n(2265)
          , o = n(49336)
          , i = n(93372)
          , a = n(33628)
          , u = n(72137)
          , c = n(22312)
          , l = n(9137);
        function d(t) {
            let e = (0,
            u.e)()
              , n = (0,
            u.kD)()
              , o = (0,
            u.iP)()
              , i = (0,
            u.Sj)();
            return (0,
            s.useEffect)(()=>(0,
            u.AT)(n, o), [n, o]),
            (0,
            s.useEffect)(()=>(0,
            u.UX)(o), [o]),
            (0,
            s.useEffect)(()=>i && (0,
            u.Wl)(i), [i]),
            (0,
            r.jsx)(c.h7, {
                appearance: n.isDark ? "dark" : "light",
                platform: ["macos", "ios"].includes(e.platform) ? "ios" : "base",
                children: t.children
            })
        }
        function f(t) {
            let {children: e} = t
              , o = "debug" === (0,
            u.e)().startParam;
            return (0,
            s.useEffect)(()=>{
                o && Promise.all([n.e(22), n.e(300)]).then(n.t.bind(n, 10973, 23)).then(t=>t.default.init())
            }
            , [o]),
            (0,
            r.jsx)(l.LD, {
                uiPreferences: {
                    theme: l.C6.DARK
                },
                language: "en",
                manifestUrl: "".concat(a.e.websiteUrl, "/tonconnect-manifest.json"),
                children: (0,
                r.jsx)(u.u3, {
                    acceptCustomStyles: !0,
                    debug: o,
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
                s.useState)(!1);
                return (0,
                s.useEffect)(()=>{
                    e(!0)
                }
                , []),
                t
            }() ? (0,
            r.jsx)("div", {
                className: "root__loading bg-black text-white"
            }) : (0,
            r.jsx)(o.S, {
                fallback: i.m,
                children: (0,
                r.jsx)(f, {
                    ...t
                })
            })
        }
    },
    33628: function(t, e, n) {
        "use strict";
        var r;
        n.d(e, {
            e: function() {
                return s
            }
        });
        let s = {
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
    90020: function(t, e, n) {
        "use strict";
        n.d(e, {
            E: function() {
                return i
            },
            Z: function() {
                return a
            }
        });
        var r = n(57437)
          , s = n(8699)
          , o = n(93191);
        let i = new s.S;
        function a(t) {
            let {children: e} = t;
            return (0,
            r.jsx)(o.aH, {
                client: i,
                children: e
            })
        }
    },
    54438: function(t, e, n) {
        "use strict";
        n.d(e, {
            AV: function() {
                return d
            },
            Jd: function() {
                return f
            },
            SV: function() {
                return a
            },
            Sq: function() {
                return c
            },
            fn: function() {
                return i
            },
            go: function() {
                return h
            },
            kQ: function() {
                return l
            },
            m4: function() {
                return b
            },
            sX: function() {
                return p
            },
            zx: function() {
                return u
            }
        });
        var r = n(33628)
          , s = n(84580)
          , o = n(50591);
        let i = async()=>{
            try {
                return (await o.b.get("/users/me")).data
            } catch (t) {
                return s.Z.getState().setUser(null),
                null
            }
        }
          , a = async t=>(await o.P.post("/auth/login", {}, {
            headers: {
                rawData: t
            }
        })).data
          , u = async()=>(await o.b.get("".concat(r.e.publicUrlV2, "/users/holders"))).data
          , c = async()=>(await o.b.get("".concat(r.e.publicUrlV2, "/users/games"))).data
          , l = async t=>(await o.b.get("".concat(r.e.publicUrlV2, "/users/friends"), {
            params: t
        })).data
          , d = async t=>(await o.b.put("/users/update-wallet", {
            address: t
        })).data
          , f = async()=>(await o.b.get("".concat(r.e.publicUrlV7, "/missions/user"))).data
          , h = async t=>(await o.b.post("/missions/action/".concat(t))).data
          , b = async()=>{
            var t;
            return null === (t = (await o.P.get("".concat(r.e.publicUrlV4, "/flips"))).data) || void 0 === t ? void 0 : t.filter(t=>!0 === t.status)
        }
          , p = async(t,e)=>(await o.b.post("".concat(r.e.publicUrlV4, "/flips/action"), {
            head_tail: t,
            bet_amount: e
        })).data
    },
    10079: function(t, e, n) {
        "use strict";
        n.d(e, {
            f: function() {
                return o
            }
        });
        var r = n(12916)
          , s = n.n(r);
        let o = (t,e)=>s()(t, e)
    },
    54868: function(t, e, n) {
        "use strict";
        let r = (0,
        n(64408).F)(t=>({
            count: 0,
            incrementCount: ()=>t(t=>({
                count: t.count + 1
            })),
            openAds: !0,
            onCloseAds: ()=>t(t=>({
                openAds: !1
            }))
        }), Object.is);
        e.Z = r
    },
    84580: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return a
            }
        });
        var r, s = n(89291), o = n(64408);
        (r || (r = {})).USER = "user-storage-goatsbot";
        var i = n(10079)
          , a = (0,
        o.F)()((0,
        s.tJ)(t=>({
            user: null,
            setUser: e=>t({
                user: e
            }),
            updateUserInfo: e=>t(t=>({
                user: t.user ? {
                    ...t.user,
                    user: e
                } : null
            })),
            welcome: !0,
            setWelcome: e=>t({
                welcome: e
            })
        }), {
            name: r.USER
        }), i.f)
    },
    50591: function(t, e, n) {
        "use strict";
        n.d(e, {
            P: function() {
                return l
            },
            b: function() {
                return d
            }
        });
        var r = n(38472)
          , s = n(33628)
          , o = n(54868)
          , i = n(84580);
        let a = s.e.publicUrl
          , u = {
            "Content-Type": "application/json"
        }
          , c = null
          , l = r.default.create({
            baseURL: a,
            headers: u
        })
          , d = r.default.create({
            baseURL: a,
            headers: u
        })
          , f = ()=>{
            var t, e;
            return null === (e = i.Z.getState()) || void 0 === e ? void 0 : null === (t = e.user) || void 0 === t ? void 0 : t.tokens
        }
          , h = t=>i.Z.getState().setUser(t)
          , b = ()=>{
            i.Z.getState().setUser(null)
        }
          , p = t=>new Date(t).getTime() < Date.now()
          , g = async t=>{
            let e = await l.post("/auth/refresh-tokens", {
                refreshToken: t
            });
            if (![200, 201].includes(null == e ? void 0 : e.status))
                throw e;
            return e.data
        }
          , m = async t=>{
            try {
                if (!t && !(t = f()))
                    throw Error("token not found");
                if (p(t.refresh.expires))
                    throw Error("refresh token expired");
                c = null != c ? c : g(t.refresh.token);
                let e = await c;
                return c = null,
                await h(e),
                e.tokens.access.token
            } catch (t) {
                return console.error(t),
                await b(),
                null
            }
        }
        ;
        async function v() {
            try {
                let t = f();
                if (!t)
                    return null;
                if (p(t.access.expires))
                    return m(t);
                return null == t ? void 0 : t.access.token
            } catch (t) {
                return null
            }
        }
        d.interceptors.request.use(async t=>{
            let e = await v();
            return e && (t.headers.Authorization = "Bearer ".concat(e)),
            t
        }
        , t=>Promise.reject(t)),
        d.interceptors.response.use(t=>("post" === t.config.method && o.Z.getState().incrementCount(),
        t), async function(t) {
            var e;
            let n = t.config;
            if ([401, 403].includes(null == t ? void 0 : null === (e = t.response) || void 0 === e ? void 0 : e.status) && !n._retry) {
                n._retry = !0;
                let t = await m();
                return r.default.defaults.headers.common.Authorization = "Bearer ".concat(t),
                (0,
                r.default)(n)
            }
            return Promise.reject(t)
        })
    },
    25735: function(t, e, n) {
        "use strict";
        n.d(e, {
            $: function() {
                return s
            }
        });
        var r = n(29506);
        (0,
        r.iv)({
            "&::-webkit-scrollbar": {
                width: "6px",
                height: "6px"
            },
            "&::-webkit-scrollbar-thumb": {
                background: "white"
            }
        });
        let s = (0,
        r.iv)({
            "&::-webkit-scrollbar": {
                display: "none"
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none"
        })
    },
    74663: function(t, e, n) {
        "use strict";
        n.d(e, {
            Wrapper: function() {
                return z
            },
            default: function() {
                return A
            }
        });
        var r = n(57437)
          , s = n(2265)
          , o = n(44465)
          , i = n.n(o)
          , a = n(74262)
          , u = n(31162);
        i().variable;
        let c = i().style.fontFamily
          , l = {
            theme: (0,
            a.B1)({
                fonts: {
                    body: "'Roboto', sans-serif",
                    heading: "'Roboto', sans-serif",
                    roboto: "'Roboto', sans-serif",
                    righteous: c
                },
                colors: {
                    blue: "rgba(10, 132, 255, 1)",
                    makeColor: "linear-gradient(92.69deg, #648BF4 0%, #D2597A 100%)",
                    dark: "rgba(255, 255, 255, 0.6)",
                    bgDark: "rgba(255, 255, 255, 0.1)",
                    green: "rgba(48, 209, 88, 1)",
                    yellow: "rgba(255, 214, 10, 1)",
                    red: "rgba(255, 59, 48, 1)",
                    red2: "rgba(255, 69, 58, 1)",
                    bgBlack: "rgba(21, 21, 21, 1)"
                }
            }),
            toastOptions: {
                defaultOptions: {
                    position: "top-right"
                }
            }
        };
        function d(t) {
            let {children: e} = t;
            return (0,
            r.jsx)(u.x, {
                ...l,
                children: e
            })
        }
        var f = n(90020);
        function h(t) {
            let {children: e, cookies: n} = t;
            return (0,
            r.jsx)(f.Z, {
                children: (0,
                r.jsx)(d, {
                    cookies: n,
                    children: e
                })
            })
        }
        var b = n(54438)
          , p = n(84580)
          , g = n(25735)
          , m = n(48646);
        n(44193);
        var v = n(66648)
          , x = n(23580)
          , y = {
            src: "/_next/static/media/x_mark.15d109d7.svg",
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0
        };
        function w() {
            let t = (0,
            m._)(["\n  .Toastify__progress-bar--wrp {\n    height: 0;\n  }\n\n  .Toastify__toast-icon {\n    width: 1rem;\n    margin-top: 2px;\n    margin-right: 0.5rem;\n  }\n\n  .Toastify__toast {\n    min-height: fit-content;\n    /* border-radius: 8px; */\n    border-radius: 0;\n    padding: 12px;\n    .Toastify__toast-body {\n      padding: 0;\n      margin: 0;\n      align-items: start;\n      font-size: 14px;\n      line-height: 20px;\n    }\n  }\n  .Toastify__close-button {\n    color: #e2e8ff;\n    opacity: 1;\n  }\n  .Toastify__toast--error {\n    color: white;\n    background: red;\n  }\n\n  .Toastify__toast--success {\n    color: white;\n    background: green;\n  }\n"]);
            return w = function() {
                return t
            }
            ,
            t
        }
        let k = (0,
        n(78493).Z)(x.Ix)(w());
        function j() {
            return (0,
            r.jsx)(k, {
                stacked: !0,
                hideProgressBar: !0,
                style: {
                    right: 0,
                    top: 0
                },
                toastClassName: "toast-class-name",
                bodyClassName: "toast-body-class-name",
                closeButton: t=>{
                    let {closeToast: e} = t;
                    return (0,
                    r.jsx)("button", {
                        type: "button",
                        onClick: e,
                        className: "w-[14px] h-[14px] absolute right-2.5 top-2.5",
                        children: (0,
                        r.jsx)(v.default, {
                            src: y,
                            alt: "",
                            width: 14,
                            height: 14
                        })
                    })
                }
                ,
                icon: !1
            })
        }
        var _ = n(49972)
          , U = n.n(_)
          , E = n(10079)
          , S = n(54868)
          , P = n(55355);
        function C() {
            return !function() {
                let t = (0,
                p.Z)(t=>t.updateUserInfo)
                  , e = (0,
                S.Z)(t=>t.count)
                  , n = (0,
                p.Z)(t=>t.user, E.f)
                  , r = (0,
                s.useMemo)(()=>null == n ? void 0 : n.tokens.access.token, [null == n ? void 0 : n.tokens.access.token])
                  , {data: o} = (0,
                P.a)({
                    queryKey: ["accountInfo", e, r],
                    queryFn: ()=>(0,
                    b.fn)(),
                    refetchInterval: !1,
                    enabled: !!r
                });
                (0,
                s.useEffect)(()=>{
                    U()(o) || t(o)
                }
                , [o, t])
            }(),
            null
        }
        function Z() {
            return (0,
            r.jsx)(r.Fragment, {})
        }
        function T() {
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(C, {}), (0,
                r.jsx)(Z, {}), (0,
                r.jsx)(j, {})]
            })
        }
        var V = n(99240)
          , D = n(72137);
        function z(t) {
            let {children: e, cookies: n} = t;
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsxs)(h, {
                    cookies: n,
                    children: [(0,
                    r.jsx)(T, {}), e]
                })
            })
        }
        function A(t) {
            let {children: e} = t
              , [n,o] = (0,
            s.useState)(!1)
              , i = (0,
            p.Z)(t=>t.user)
              , a = (0,
            p.Z)(t=>t.setUser)
              , {initDataRaw: u} = (0,
            D.e)();
            return ((0,
            s.useEffect)(()=>{
                let t = t=>{
                    t.touches.length > 1 && t.preventDefault()
                }
                ;
                return document.addEventListener("touchstart", t, {
                    passive: !1
                }),
                document.addEventListener("touchmove", t, {
                    passive: !1
                }),
                ()=>{
                    document.removeEventListener("touchstart", t),
                    document.removeEventListener("touchmove", t)
                }
            }
            , []),
            (0,
            s.useEffect)(()=>{
                (async()=>{
                    o(!0);
                    try {
                        if (!(null == i ? void 0 : i.tokens) && u) {
                            let t = await (0,
                            b.SV)(u);
                            a(t)
                        }
                    } catch (t) {
                        a(null)
                    } finally {
                        o(!1)
                    }
                }
                )()
            }
            , [u, a, null == i ? void 0 : i.tokens]),
            !n && (null == i ? void 0 : i.tokens)) ? (0,
            r.jsx)(V.k, {
                as: "main",
                flexDir: "column",
                bg: "black",
                color: "white",
                h: "100vh",
                overflow: "auto",
                css: g.$,
                fontSize: 16,
                lineHeight: 1.5,
                children: (0,
                r.jsx)(V.k, {
                    flexDir: "column",
                    flex: 1,
                    children: e
                })
            }) : (0,
            r.jsx)("div", {
                className: "w-full h-screen flex items-center justify-center bg-black text-white",
                children: n ? "Loading" : "login fail!"
            })
        }
    },
    23951: function() {},
    69074: function() {}
}, function(t) {
    t.O(0, [947, 415, 896, 832, 915, 434, 300, 489, 21, 971, 23, 744], function() {
        return t(t.s = 2122)
    }),
    _N_E = t.O()
}
]);
