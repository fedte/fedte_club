!
function(t) {
    function o(a) {
        if (e[a]) return e[a].exports;
        var l = e[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return t[a].call(l.exports, l, l.exports, o),
        l.loaded = !0,
        l.exports
    }
    var e = {};
    return o.m = t,
    o.c = e,
    o.p = "http://cdn.alloyteam.com/assets/",
    o(0)
} ([function(t, o, e) {
    t.exports = e(6)
},
function(t, o) {},
, ,
function(t, o, e) {
    "use strict";
    function a() {
        m.info("%c小样，你打开Console是想窃取情报吗？那就如你所愿 @!@", "color: #3498DB;font-weight: 600;"),
        setTimeout(function() {
            m.log("%cF%ce%cd %cT%ce%ca%cm", "font-size:90px;color:#3498DB;font-family: verdana;text-shadow:0px 1px 0px #3498DB,0px 2px 0px #3498DB,0px 3px 0px #3498DB,0px 4px 0px #3498DB, 0px 5px 0px  #3498DB,0px 6px 0px #3498DB, 0px 7px 0px #3498DB,0px 8px 7px #3498DB", "font-size:90px;color:#7f8ea0;font-family: verdana;text-shadow:0px 1px 0px #7f8ea0,0px 2px 0px #7f8ea0,0px 3px 0px #7f8ea0,0px 4px 0px #7f8ea0, 0px 5px 0px  #7f8ea0,0px 6px 0px #7f8ea0, 0px 7px 0px #7f8ea0,0px 8px 7px #7f8ea0", "font-size:120px;color:#89d04f;font-family: arial;text-shadow:0px 1px 0px #89d04f,0px 2px 0px #89d04f,0px 3px 0px #89d04f,0px 4px 0px #89d04f, 0px 5px 0px  #89d04f,0px 6px 0px #89d04f, 0px 7px 0px #89d04f,0px 8px 7px #89d04f",  "font-size:90px;color:#3498DB;font-family: verdana;text-shadow:0px 1px 0px #3498DB,0px 2px 0px #3498DB,0px 3px 0px #3498DB,0px 4px 0px #3498DB, 0px 5px 0px  #3498DB,0px 6px 0px #3498DB, 0px 7px 0px #3498DB,0px 8px 7px #3498DB", "font-size:90px;color:#89d04f;font-family: verdana;text-shadow:0px 1px 0px #89d04f,0px 2px 0px #89d04f,0px 3px 0px #89d04f,0px 4px 0px #89d04f, 0px 5px 0px  #89d04f,0px 6px 0px #89d04f, 0px 7px 0px #89d04f,0px 8px 7px #89d04f", "font-size:90px;color:#95A5A6;font-family: verdana;text-shadow:0px 1px 0px #95A5A6,0px 2px 0px #95A5A6,0px 3px 0px #95A5A6,0px 4px 0px #95A5A6, 0px 5px 0px  #95A5A6,0px 6px 0px #95A5A6, 0px 7px 0px #95A5A6,0px 8px 7px #95A5A6", "font-size:90px;color:#fd6a7f;font-family: helveltica;text-shadow:0px 1px 0px #fd6a7f,0px 2px 0px #fd6a7f,0px 3px 0px #fd6a7f,0px 4px 0px #fd6a7f, 0px 5px 0px  #fd6a7f,0px 6px 0px #fd6a7f, 0px 7px 0px #fd6a7f,0px 8px 7px #fd6a7f")
        },
        1e3),
        setTimeout(function() {
            m.log("我们是前端技术人-%cFedTeam", "font-weight: bold;color:#fd6a7f")
        },
        1500),
        setTimeout(function() {
            m.log("我们的愿景是：%c成为地球卓越的Web团队", "font-weight: bold;color:#fd6a7f")
        },
        2e3),
        window._start
    }
    function l() {
        var t = 0;
        c("yes",
        function() {
            return m.log("年轻人，眼光不错哟！这里我就偷偷给你几个秘密锦囊，打开有惊喜哦✉"),
            m.log("%c我要福利%c我要学习%c,输入以上密码即可打开锦囊", "background-color:#3498DB;color:#fff;padding: 5px 10px;margin-right: 10px;line-height:30px;border-radius: 4px;", "background-color:#fd6a7f;color:#fff;padding: 5px 10px;margin-right: 10px;line-height:30px;border-radius: 4px;", ""),
            "↓↓请输入密码↓↓"
        }),
        c("no",
        function() {
            return m.log("年纪轻轻就撒谎，这不对呀，记得要改！不管怎样，还是给你几个秘密锦囊，打开有惊喜哦✉"),
            m.log("%c我要福利%c我要学习%c,输入以上密码即可打开锦囊", "background-color:#3498DB;color:#fff;padding: 5px 10px;margin-right: 10px;line-height:30px;border-radius: 4px;", "background-color:#fd6a7f;color:#fff;padding: 5px 10px;margin-right: 10px;line-height:30px;border-radius: 4px;", ""),
            "↓↓请输入密码↓↓"
        }),
        c("我要福利",
        function() {
            var o = null;
            return o = t < 2 ? n[t] : n[2],
            m.log("%c", "padding:113px 75px;line-height:240px;background:url('" + o + "') no-repeat;background-size:100% 100%;"),
            t < 2 ? m.log("从白天到深夜，一直都可以都陪着你撸%c代码%c的美女程序员%c㊣", "color: #95A5A6;", "", "color:#3498DB") : (copy && copy("Fedte.org"), m.log("太贪心,不给你看了！想要看更多，就快来我们团队让校花手把手教你写前端吧\n", "color: #95A5A6")),
            m.log("%c如果看不到福利，请升级的chrome", "color:#95A5A6"),
            t++,
            "♥♥♥♥♥"
        }),
        c("我要学习",
        function() {
            return m.log("%c优秀的技术文章，卖力的撕逼大神在等着你", "color:#3498DB"),
            m.log("%c%c", "padding:80px;line-height:160px;background:url('https://fedte.org/public/images/wexin.jpg') no-repeat center center;background-size:140px 140px;", "padding:80px;line-height:160px;background:url('https://fedte.org/public/images/qq.png') no-repeat center center;background-size:140px 140px;"),
            m.log("     ↑↑↑微信公众号↑↑↑", "        ↑↑↑QQ群485811457↑↑↑"),
            "赶紧拿起手机扫一扫！等你飞起！✈✈✈✈"
        }),
        c("_start",
        function() {
            return setTimeout(function() {
                m.log("那么，请以%c★代码的名义★%c告诉我，你愿意加入这个帅气逼人的FedTeam团队吗(%cyes or no)%c?", "color:#fd6a7f;font-weight:bold;", "", "color:#fd6a7f", "")
            },
            2500),
            ""
        })
    }
    function c(t, o) {
        Object.defineProperty(window, t, {
            get: o
        })
    }
    function p() {
        var t = new Image;
        Object.defineProperty(t, "id", {
            get: function() {
                l(),
                a()
            }
        }),
        m.log("%c", t)
    }
    var n = [e(10), e(11), e(9)],
    m = window.console || {
        log: function() {},
        info: function() {}
    };
    p()
},
function(t, o) {
    "use strict";
    t.exports = {}
},
function(t, o, e) {
    "use strict";
    function a(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }

    e(1),
    e(4);
    var n = e(5),
    m = a(n);
},
, ,
function(t, o, e) {
    t.exports = e.p + "img/ruhua-c2cfe3.jpg"
},
function(t, o, e) {
    t.exports = e.p + "img/yanagao00-f5f991.jpg"
},
function(t, o, e) {
    t.exports = e.p + "img/yanagao02-2a5c14.jpg"
}]);