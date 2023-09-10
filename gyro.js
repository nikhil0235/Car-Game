/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/gyronorm@2.0.6/lib/gyronorm.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(function () {
        return (e.GyroNorm = t());
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e.GyroNorm = t())
    : (e.GyroNorm = t());
})(this, function () {
  function e(e) {
    return Math.round(e * Math.pow(10, p)) / Math.pow(10, p);
  }
  function t(e) {
    m && ("string" == typeof e && (e = { message: e, code: 0 }), m(e));
  }
  var n = "game",
    a = null,
    o = 0,
    r = 0,
    i = !1,
    l = !1,
    c = null,
    u = null,
    d = 50,
    g = !0,
    s = n,
    p = 2,
    m = null,
    y = !1,
    f = function (e) {};
  return (
    (f.GAME = n),
    (f.WORLD = "world"),
    (f.DEVICE_ORIENTATION = "deviceorientation"),
    (f.ACCELERATION = "acceleration"),
    (f.ACCELERATION_INCLUDING_GRAVITY = "accelerationinludinggravity"),
    (f.ROTATION_RATE = "rotationrate"),
    (f.prototype.init = function (e) {
      e && e.frequency && (d = e.frequency),
        e && e.gravityNormalized && (g = e.gravityNormalized),
        e && e.orientationBase && (s = e.orientationBase),
        e && e.decimalCount && (p = e.decimalCount),
        e && e.logger && (m = e.logger),
        e && e.screenAdjusted && (y = e.screenAdjusted);
      var t = new FULLTILT.getDeviceOrientation({ type: s }).then(function (e) {
          c = e;
        }),
        n = new FULLTILT.getDeviceMotion().then(function (e) {
          r =
            (u = e).getScreenAdjustedAccelerationIncludingGravity().z > 0
              ? -1
              : 1;
        });
      return Promise.all([t, n]).then(function () {
        l = !0;
      });
    }),
    (f.prototype.end = function () {
      try {
        (l = !1), this.stop(), u.stop(), c.stop();
      } catch (e) {
        t(e);
      }
    }),
    (f.prototype.start = function (p) {
      l
        ? ((a = setInterval(function () {
            p(
              (function () {
                var t = {};
                t = y ? c.getScreenAdjustedEuler() : c.getFixedFrameEuler();
                var a = u.getScreenAdjustedAcceleration(),
                  i = u.getScreenAdjustedAccelerationIncludingGravity(),
                  l = u.getScreenAdjustedRotationRate(),
                  d = 0,
                  p = {
                    do: {
                      alpha: e(
                        (d =
                          s === n
                            ? (d = t.alpha - o) < 0
                              ? 360 - Math.abs(d)
                              : d
                            : t.alpha)
                      ),
                      beta: e(t.beta),
                      gamma: e(t.gamma),
                      absolute: c.isAbsolute(),
                    },
                    dm: {
                      x: e(a.x),
                      y: e(a.y),
                      z: e(a.z),
                      gx: e(i.x),
                      gy: e(i.y),
                      gz: e(i.z),
                      alpha: e(l.alpha),
                      beta: e(l.beta),
                      gamma: e(l.gamma),
                    },
                  };
                return g && ((p.dm.gx *= r), (p.dm.gy *= r), (p.dm.gz *= r)), p;
              })()
            );
          }, d)),
          (i = !0))
        : t({
            message:
              'GyroNorm is not initialized yet. First call the "init()" function.',
            code: 1,
          });
    }),
    (f.prototype.stop = function () {
      a && (clearInterval(a), (i = !1));
    }),
    (f.prototype.normalizeGravity = function (e) {
      g = !!e;
    }),
    (f.prototype.setHeadDirection = function () {
      return !y && "world" !== s && ((o = c.getFixedFrameEuler().alpha), !0);
    }),
    (f.prototype.startLogging = function (e) {
      e && (m = e);
    }),
    (f.prototype.stopLogging = function () {
      m = null;
    }),
    (f.prototype.isAvailable = function (e) {
      var t = c.getScreenAdjustedEuler(),
        n = u.getScreenAdjustedAcceleration(),
        a = u.getScreenAdjustedAccelerationIncludingGravity(),
        o = u.getScreenAdjustedRotationRate();
      switch (e) {
        case "deviceorientation":
          return (
            t.alpha &&
            null !== t.alpha &&
            t.beta &&
            null !== t.beta &&
            t.gamma &&
            null !== t.gamma
          );
        case "acceleration":
          return n && n.x && n.y && n.z;
        case "accelerationinludinggravity":
          return a && a.x && a.y && a.z;
        case "rotationrate":
          return o && o.alpha && o.beta && o.gamma;
        default:
          return {
            deviceOrientationAvailable:
              t.alpha &&
              null !== t.alpha &&
              t.beta &&
              null !== t.beta &&
              t.gamma &&
              null !== t.gamma,
            accelerationAvailable: n && n.x && n.y && n.z,
            accelerationIncludingGravityAvailable: a && a.x && a.y && a.z,
            rotationRateAvailable: o && o.alpha && o.beta && o.gamma,
          };
      }
    }),
    (f.prototype.isRunning = function () {
      return i;
    }),
    f
  );
});
//# sourceMappingURL=/sm/f23aa7de0210ed9c018f4b304ef605bc08a581222749e49edad0614da205ee3a.map
