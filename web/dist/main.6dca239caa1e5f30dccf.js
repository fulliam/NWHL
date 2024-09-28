(() => {
  var e,
    r = {
      3922: function (e, r, t) {
        var o = t(8772);
        Object.defineProperty(r, '__esModule', { value: !0 }),
          (r.default = void 0),
          o(t(5602));
        var n = o(t(8854)),
          a = o(t(4736)),
          l = t(8074);
        r.default = function () {
          return (0, l.jsx)(n.default, {
            style: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'purple',
            },
            children: (0, l.jsx)(a.default, { children: 'Hello, world!' }),
          });
        };
      },
      2987: (e, r, t) => {
        var o = t(8772),
          n = t(188),
          a = o(t(6817)),
          l = o(t(2648)),
          u = o(t(3922)),
          f = t(3585),
          i = t(8074);
        a.default.registerComponent(f.name, function () {
          return u.default;
        }),
          'web' === l.default.OS &&
            (0, n.createRoot)(document.getElementById('root')).render(
              (0, i.jsx)(u.default, {}),
            );
      },
      3585: (e) => {
        'use strict';
        e.exports = JSON.parse(
          '{"name":"NWHL","displayName":"NWHL"}',
        );
      },
    },
    t = {};
  function o(e) {
    var n = t[e];
    if (void 0 !== n) return n.exports;
    var a = (t[e] = { exports: {} });
    return r[e].call(a.exports, a, a.exports, o), a.exports;
  }
  (o.m = r),
    (e = []),
    (o.O = (r, t, n, a) => {
      if (!t) {
        var l = 1 / 0;
        for (s = 0; s < e.length; s++) {
          for (var [t, n, a] = e[s], u = !0, f = 0; f < t.length; f++)
            (!1 & a || l >= a) && Object.keys(o.O).every((e) => o.O[e](t[f]))
              ? t.splice(f--, 1)
              : ((u = !1), a < l && (l = a));
          if (u) {
            e.splice(s--, 1);
            var i = n();
            void 0 !== i && (r = i);
          }
        }
        return r;
      }
      a = a || 0;
      for (var s = e.length; s > 0 && e[s - 1][2] > a; s--) e[s] = e[s - 1];
      e[s] = [t, n, a];
    }),
    (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (() => {
      var e = { 792: 0 };
      o.O.j = (r) => 0 === e[r];
      var r = (r, t) => {
          var n,
            a,
            [l, u, f] = t,
            i = 0;
          if (l.some((r) => 0 !== e[r])) {
            for (n in u) o.o(u, n) && (o.m[n] = u[n]);
            if (f) var s = f(o);
          }
          for (r && r(t); i < l.length; i++)
            (a = l[i]), o.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return o.O(s);
        },
        t = (self.webpackChunkNWHL = self.webpackChunkNWHL || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
  var n = o.O(void 0, [121], () => o(2987));
  n = o.O(n);
})();
