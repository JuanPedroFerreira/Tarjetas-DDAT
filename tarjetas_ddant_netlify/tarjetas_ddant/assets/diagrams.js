/* Diagramas SVG de las tarjetas. Cada entrada devuelve el HTML de la figura (svg y epígrafe).
   Los colores salen de las variables CSS, así que respetan el tema claro y el oscuro. */
(function () {
  'use strict';

  var uid = 0;
  function r1(n) { return Math.round(n * 10) / 10; }

  function svg(w, h, label, body, minWidth, maxWidth) {
    var css = (minWidth ? 'min-width:' + minWidth + 'px;' : '') + (maxWidth ? 'max-width:' + maxWidth + 'px;' : '');
    var style = css ? ' style="' + css + '"' : '';
    return '<svg class="dg" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + label + '"' + style + '>' +
      '<title>' + label + '</title>' + body + '</svg>';
  }
  function marker(id, cls) {
    return '<marker id="' + id + '" viewBox="0 0 10 10" refX="8.6" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
      '<path d="M0 0L10 5L0 10z" class="' + cls + '"/></marker>';
  }
  function text(x, y, s, cls, anchor) {
    return '<text x="' + r1(x) + '" y="' + r1(y) + '"' + (anchor ? ' text-anchor="' + anchor + '"' : '') + (cls ? ' class="' + cls + '"' : '') + '>' + s + '</text>';
  }
  function line(x1, y1, x2, y2, cls, end) {
    return '<line x1="' + r1(x1) + '" y1="' + r1(y1) + '" x2="' + r1(x2) + '" y2="' + r1(y2) + '" class="' + cls + '"' + (end ? ' marker-end="url(#' + end + ')"' : '') + '/>';
  }
  function poly(pts, cls, end) {
    return '<polyline points="' + pts.map(function (p) { return r1(p[0]) + ',' + r1(p[1]); }).join(' ') + '" class="' + cls + '"' + (end ? ' marker-end="url(#' + end + ')"' : '') + '/>';
  }
  function box(x, y, w, h, label, sub) {
    var cy = y + h / 2;
    var out = '<rect class="dg-box" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="6"/>';
    if (Array.isArray(label)) {
      out += text(x + w / 2, cy - 3, label[0], 'dg-boxt', 'middle') + text(x + w / 2, cy + 13, label[1], 'dg-boxt', 'middle');
    } else if (sub) {
      out += text(x + w / 2, cy - 3, label, 'dg-boxt', 'middle') + text(x + w / 2, cy + 14, sub, 'dg-small', 'middle');
    } else {
      out += text(x + w / 2, cy + 5, label, 'dg-boxt', 'middle');
    }
    return out;
  }
  function figure(svgHtml, caption) {
    return svgHtml + (caption ? '<figcaption>' + caption + '</figcaption>' : '');
  }

  /* ---------- Cuadricóptero visto desde arriba ---------- */
  var QUAD = {
    layout: { d: {}, mov: null,
      cap: 'Vista desde arriba. Los motores en diagonal giran en el mismo sentido (configuración props in de Betaflight), así los pares de reacción se anulan.' },
    throttle: { d: { FL: 1, FR: 1, RL: 1, RR: 1 }, mov: 'up',
      cap: 'Los cuatro aceleran por igual: el empuje supera al peso y el dron sube (⊙ indica movimiento hacia arriba, saliendo de la hoja).' },
    pitch_adelante: { d: { FL: -1, FR: -1, RL: 1, RR: 1 }, mov: 'fwd',
      cap: 'Los traseros aceleran y los delanteros frenan: baja la nariz y el dron avanza.' },
    roll_izquierda: { d: { FL: -1, RL: -1, FR: 1, RR: 1 }, mov: 'left',
      cap: 'Los derechos aceleran y los izquierdos frenan: se inclina y se desplaza hacia la izquierda.' },
    yaw_derecha: { d: { FR: 1, RL: 1, FL: -1, RR: -1 }, mov: 'yaw',
      cap: 'Los CCW aceleran y los CW frenan: el par de reacción neto es horario y gira a la derecha sin cambiar la altura.' }
  };

  function quad(variant) {
    var cfg = QUAD[variant];
    if (!cfg) return '';
    var id = 'dgq' + (++uid);
    var cx = 180, cy = 166;
    var P = { FL: [104, 90], FR: [256, 90], RL: [104, 242], RR: [256, 242] };
    var ROT = { FL: 'cw', FR: 'ccw', RL: 'ccw', RR: 'cw' };
    var b = '<defs>' + marker(id + 'a', 'dg-ah') + marker(id + 'm', 'dg-mov-ah') + '</defs>';
    var k;
    for (k in P) b += line(cx, cy, P[k][0], P[k][1], 'dg-arm');
    for (k in P) {
      var x = P[k][0], y = P[k][1], d = cfg.d[k] || 0;
      b += '<circle class="dg-rotor' + (d > 0 ? ' is-up' : (d < 0 ? ' is-down' : '')) + '" cx="' + x + '" cy="' + y + '" r="40"/>';
      var arm = Math.atan2(cy - y, cx - x) * 180 / Math.PI;
      var R = 49, cw = ROT[k] === 'cw';
      var a0 = (cw ? arm + 62 : arm + 298) * Math.PI / 180;
      var a1 = (cw ? arm + 298 : arm + 62) * Math.PI / 180;
      b += '<path class="dg-rot" d="M' + r1(x + R * Math.cos(a0)) + ' ' + r1(y + R * Math.sin(a0)) +
        ' A' + R + ' ' + R + ' 0 1 ' + (cw ? 1 : 0) + ' ' + r1(x + R * Math.cos(a1)) + ' ' + r1(y + R * Math.sin(a1)) +
        '" marker-end="url(#' + id + 'a)"/>';
      if (d > 0) b += '<path class="dg-up" d="M' + x + ' ' + (y - 18) + 'l13 20h-26z"/>';
      if (d < 0) b += '<path class="dg-down" d="M' + x + ' ' + (y + 6) + 'l13 -20h-26z"/>';
      b += text(x, y + (d ? 25 : 5), cw ? 'CW' : 'CCW', 'dg-small', 'middle');
    }
    b += '<rect class="dg-body" x="' + (cx - 30) + '" y="' + (cy - 30) + '" width="60" height="60" rx="9"/>';
    b += '<path class="dg-nose" d="M' + (cx - 9) + ' ' + (cy - 30) + 'L' + cx + ' ' + (cy - 44) + 'L' + (cx + 9) + ' ' + (cy - 30) + 'z"/>';
    b += text(cx, 24, 'Frente', 'dg-label', 'middle');
    if (cfg.mov === 'up') {
      b += '<circle class="dg-mov" cx="' + cx + '" cy="' + cy + '" r="13"/><circle class="dg-mov-dot" cx="' + cx + '" cy="' + cy + '" r="4.5"/>';
    } else if (cfg.mov === 'fwd') {
      b += line(cx, cy + 18, cx, cy - 15, 'dg-mov', id + 'm');
    } else if (cfg.mov === 'left') {
      b += line(cx + 18, cy, cx - 15, cy, 'dg-mov', id + 'm');
    } else if (cfg.mov === 'yaw') {
      var rr = 19, s = 150 * Math.PI / 180, e = 70 * Math.PI / 180;
      b += '<path class="dg-mov" d="M' + r1(cx + rr * Math.cos(s)) + ' ' + r1(cy + rr * Math.sin(s)) + ' A' + rr + ' ' + rr + ' 0 1 1 ' +
        r1(cx + rr * Math.cos(e)) + ' ' + r1(cy + rr * Math.sin(e)) + '" marker-end="url(#' + id + 'm)"/>';
    }
    var legend = variant === 'layout'
      ? ' <span class="lg">CW: horario. CCW: antihorario.</span>'
      : ' <span class="lg"><span class="lg-up">▲</span> acelera <span class="lg-down">▼</span> frena. CW: horario. CCW: antihorario.</span>';
    return figure(svg(360, 300, 'Cuadricóptero visto desde arriba. ' + cfg.cap, b, 0, 340), cfg.cap + legend);
  }

  /* ---------- Perfil NACA 4412 con sus elementos ---------- */
  function perfil() {
    var m = 0.04, p = 0.4, t = 0.12, N = 96;
    var C = 440, X0 = 105, Y0 = 134;
    function X(x) { return X0 + x * C; }
    function Y(y) { return Y0 - y * C; }
    function naca(x) {
      var yt = 5 * t * (0.2969 * Math.sqrt(x) - 0.1260 * x - 0.3516 * x * x + 0.2843 * x * x * x - 0.1036 * x * x * x * x);
      var yc, dy;
      if (x < p) { yc = m / (p * p) * (2 * p * x - x * x); dy = 2 * m / (p * p) * (p - x); }
      else { yc = m / ((1 - p) * (1 - p)) * (1 - 2 * p + 2 * p * x - x * x); dy = 2 * m / ((1 - p) * (1 - p)) * (p - x); }
      var th = Math.atan(dy);
      return { yc: yc, up: [x - yt * Math.sin(th), yc + yt * Math.cos(th)], lo: [x + yt * Math.sin(th), yc - yt * Math.cos(th)] };
    }
    var up = [], lo = [], cam = [];
    for (var i = 0; i <= N; i++) {
      var x = (1 - Math.cos(Math.PI * i / N)) / 2, s = naca(x);
      up.push(s.up); lo.push(s.lo); cam.push([x, s.yc]);
    }
    function toPath(pts, start) {
      return pts.map(function (q, j) { return ((j || !start) ? 'L' : 'M') + r1(X(q[0])) + ' ' + r1(Y(q[1])); }).join('');
    }
    var outline = toPath(up, true) + toPath(lo.slice().reverse(), false) + 'Z';
    var at30 = naca(0.3), at55 = naca(0.55), at70 = naca(0.7);
    var rle = 1.1019 * t * t * C, ang = Math.atan(2 * m / p);
    var b = '';
    b += line(X(-0.05), Y0, X(1.07), Y0, 'dg-dash');
    b += '<path class="dg-airfoil" d="' + outline + '"/>';
    b += '<path class="dg-dash dg-camber" d="' + toPath(cam, true) + '"/>';
    b += '<circle class="dg-thin-dash" cx="' + r1(X0 + rle * Math.cos(ang)) + '" cy="' + r1(Y0 - rle * Math.sin(ang)) + '" r="' + r1(rle) + '"/>';
    // espesor máximo
    b += line(X(0.3), Y(at30.up[1]), X(0.3), Y(at30.lo[1]), 'dg-mark');
    b += line(X(0.3), Y(at30.lo[1]) + 2, X(0.3), 182, 'dg-lead') + text(X(0.3), 197, 'Espesor máximo', 'dg-t', 'middle');
    // curvatura máxima
    b += line(X(0.4), Y0, X(0.4), Y(0.04), 'dg-mark');
    b += line(X(0.4), Y(0.04) - 2, X(0.4), 40, 'dg-lead') + text(X(0.4), 33, 'Curvatura máxima', 'dg-t', 'middle');
    // extradós e intradós
    b += line(X(0.55), Y(at55.up[1]) - 2, X(0.55), 82, 'dg-lead') + text(X(0.55), 76, 'Extradós', 'dg-t', 'middle');
    b += line(X(0.55), Y(at55.lo[1]) + 2, X(0.55), 160, 'dg-lead') + text(X(0.55), 174, 'Intradós', 'dg-t', 'middle');
    // línea de curvatura media
    b += line(X(0.7), Y(at70.yc) - 1, 446, 54, 'dg-lead') + text(450, 49, 'Línea de curvatura media', 'dg-t');
    // bordes
    b += line(X0, Y0 + 3, X0, 182, 'dg-lead') + text(X0, 197, 'Borde de ataque', 'dg-t', 'middle');
    b += line(X(1), Y0 + 3, X(1), 182, 'dg-lead') + text(X(1), 197, 'Borde de fuga', 'dg-t', 'middle');
    b += line(X0 - 3, Y0 - 7, 72, 58, 'dg-lead') + text(16, 51, 'Radio del borde de ataque', 'dg-t');
    b += text(X(1.07) + 6, Y0 + 5, 'Cuerda', 'dg-t');
    return figure(svg(640, 210, 'Perfil NACA 4412 con borde de ataque, borde de fuga, cuerda, línea de curvatura media, espesor máximo, curvatura máxima, radio del borde de ataque, extradós e intradós', b, 520),
      'Perfil NACA 4412 dibujado con su fórmula: 4% de curvatura máxima al 40% de la cuerda y 12% de espesor.');
  }

  /* ---------- CL en función del ángulo de ataque ---------- */
  function clAlfa() {
    var id = 'dgc' + (++uid);
    function X(a) { return 56 + (a + 4) * 21.83; }
    function Y(cl) { return 24 + (1.6 - cl) * 110; }
    var b = '<defs>' + marker(id + 'a', 'dg-ah') + '</defs>';
    [0.5, 1, 1.5].forEach(function (v) { b += line(X(-4), Y(v), X(20), Y(v), 'dg-grid'); });
    b += line(X(-4), Y(0), X(20.6), Y(0), 'dg-axis', id + 'a');
    b += line(X(-4), Y(-0.4), X(-4), Y(1.66), 'dg-axis', id + 'a');
    b += text(X(20.6) + 6, Y(0) + 4, 'α (°)', 'dg-t');
    b += text(X(-4) + 8, 16, 'CL', 'dg-t');
    [-4, 0, 4, 8, 12, 16, 20].forEach(function (a) {
      b += line(X(a), Y(0) - 3, X(a), Y(0) + 3, 'dg-axis') + text(X(a), 266, (a < 0 ? '−' + Math.abs(a) : String(a)), 'dg-small', 'middle');
    });
    [[0, '0'], [0.5, '0,5'], [1, '1,0'], [1.5, '1,5']].forEach(function (v) { b += text(X(-4) - 6, Y(v[0]) + 4, v[1], 'dg-small', 'end'); });
    var c4412 = 'M' + X(-4) + ' ' + Y(0) + ' L' + X(7) + ' ' + Y(1.1) +
      ' C' + X(8.5) + ' ' + Y(1.25) + ' ' + X(9.8) + ' ' + Y(1.32) + ' ' + X(11) + ' ' + Y(1.32) +
      ' C' + X(12) + ' ' + Y(1.32) + ' ' + X(12.6) + ' ' + Y(1.1) + ' ' + X(13.8) + ' ' + Y(1.02) +
      ' L' + X(18.5) + ' ' + Y(0.92);
    var c0012 = 'M' + X(-4) + ' ' + Y(-0.4) + ' L' + X(6) + ' ' + Y(0.6) +
      ' C' + X(7.5) + ' ' + Y(0.75) + ' ' + X(8.8) + ' ' + Y(0.97) + ' ' + X(9.8) + ' ' + Y(0.98) +
      ' C' + X(10.6) + ' ' + Y(0.99) + ' ' + X(10.9) + ' ' + Y(0.78) + ' ' + X(11.8) + ' ' + Y(0.72) +
      ' L' + X(18.5) + ' ' + Y(0.62);
    b += '<path class="dg-curve" d="' + c4412 + '"/>';
    b += '<path class="dg-curve dg-curve2" d="' + c0012 + '"/>';
    b += line(X(11), Y(1.32), X(11), Y(0), 'dg-thin-dash');
    b += '<circle class="dg-pt" cx="' + r1(X(11)) + '" cy="' + r1(Y(1.32)) + '" r="4"/>';
    b += text(X(11) + 9, Y(1.32) - 9, 'CL máx', 'dg-t');
    b += text(X(11) + 6, Y(0) - 8, 'α crítico', 'dg-small');
    b += text(X(14.2), Y(1.17), 'Pérdida (stall)', 'dg-t');
    b += '<circle class="dg-pt" cx="' + r1(X(0)) + '" cy="' + r1(Y(0.4)) + '" r="3.5"/>';
    b += text(X(0) - 9, Y(0.4) - 6, 'CL₀ > 0', 'dg-small', 'end');
    b += line(X(-3), 42, X(-1), 42, 'dg-curve') + text(X(-1) + 8, 46, 'NACA 4412 (con camber)', 'dg-t');
    b += line(X(-3), 64, X(-1), 64, 'dg-curve dg-curve2') + text(X(-1) + 8, 68, 'NACA 0012 (simétrico)', 'dg-t');
    return figure(svg(640, 276, 'Curva de CL en función del ángulo de ataque para los perfiles NACA 4412 y 0012', b, 500),
      'Forma cualitativa de las curvas vistas en XFLR5: crecen casi lineales hasta el CL máximo y caen al entrar en pérdida.');
  }

  /* ---------- Interconexión de componentes ---------- */
  function interconexion() {
    var id = 'dgi' + (++uid), A = id + 'a';
    var b = '<defs>' + marker(A, 'dg-ah') + '</defs>';
    b += text(20, 22, 'Potencia', 'dg-band') + text(20, 206, 'Control', 'dg-band') + text(20, 302, 'Video', 'dg-band');
    b += box(20, 34, 110, 44, 'Batería') + box(168, 34, 96, 44, 'PDB') + box(302, 34, 116, 44, 'ESC ×4') + box(456, 34, 134, 44, 'Motores ×4');
    b += line(130, 56, 166, 56, 'dg-pow', A) + line(264, 56, 300, 56, 'dg-pow', A) + line(418, 56, 454, 56, 'dg-pow', A);
    b += box(168, 112, 96, 40, 'BEC') + line(216, 78, 216, 110, 'dg-pow', A);
    b += text(216, 172, 'Da 5 V o 12 V a FC, RX,', 'dg-small', 'middle') + text(216, 187, 'cámara y VTX', 'dg-small', 'middle');
    b += box(20, 216, 110, 44, ['Transmisor', 'de radio']) + box(180, 216, 112, 44, 'Receptor RC') + box(320, 216, 80, 44, 'FC');
    b += line(130, 230, 178, 230, 'dg-air', A) + line(180, 247, 132, 247, 'dg-air', A);
    b += text(155, 211, 'comandos', 'dg-small', 'middle') + text(155, 274, 'telemetría', 'dg-small', 'middle');
    b += line(292, 238, 318, 238, 'dg-sig', A);
    b += line(360, 216, 360, 80, 'dg-sig', A) + text(368, 152, 'DShot o PWM', 'dg-small');
    b += box(20, 312, 100, 44, 'Cámara') + box(168, 312, 92, 44, 'OSD') + box(300, 312, 84, 44, 'VTX') + box(436, 312, 170, 44, 'Receptor de video', '(goggles)');
    b += poly([[360, 260], [360, 288], [214, 288], [214, 310]], 'dg-sig', A) + text(288, 282, 'datos del FC', 'dg-small', 'middle');
    b += line(120, 334, 166, 334, 'dg-sig', A) + line(260, 334, 298, 334, 'dg-sig', A) + line(384, 334, 434, 334, 'dg-air', A);
    b += text(410, 326, 'aire', 'dg-small', 'middle');
    return figure(svg(630, 372, 'Diagrama de interconexión de batería, PDB, ESC, motores, BEC, transmisor de radio, receptor, FC, cámara, OSD, VTX y receptor de video', b, 580),
      'Líneas gruesas: potencia. Líneas finas: señal. Punteadas: enlaces por radio.');
  }

  /* ---------- Lazo PID ---------- */
  function pid() {
    var id = 'dgp' + (++uid), A = id + 'a';
    var b = '<defs>' + marker(A, 'dg-ah') + '</defs>';
    b += text(14, 75, 'Consigna', 'dg-t') + line(82, 70, 102, 70, 'dg-sig', A);
    b += '<circle class="dg-box" cx="118" cy="70" r="15"/>' + text(118, 75, 'Σ', 'dg-boxt', 'middle');
    b += text(97, 60, '+', 'dg-small', 'middle') + text(130, 101, '−', 'dg-small', 'middle');
    b += line(133, 70, 168, 70, 'dg-sig', A) + text(151, 60, 'error', 'dg-small', 'middle');
    b += box(170, 46, 98, 48, 'PID', 'Kp, Ki, Kd');
    b += line(268, 70, 302, 70, 'dg-sig', A) + text(285, 60, 'u', 'dg-small', 'middle');
    b += box(304, 46, 150, 48, 'Motores y dron');
    b += line(454, 70, 540, 70, 'dg-sig', A) + text(546, 75, 'actitud', 'dg-t');
    b += poly([[500, 70], [500, 138], [452, 138]], 'dg-sig', A);
    b += box(302, 120, 150, 36, 'IMU (sensores)');
    b += poly([[302, 138], [118, 138], [118, 87]], 'dg-sig', A);
    b += text(210, 132, 'medición', 'dg-small', 'middle');
    return figure(svg(620, 170, 'Lazo de control PID: consigna, comparación con la medición, PID, motores y dron, e IMU como realimentación', b, 520),
      'El PID recibe el error entre la consigna y lo que mide la IMU, y calcula la orden u para los motores.');
  }

  /* ---------- Ciclo del filtro de Kalman ---------- */
  function kalman() {
    var id = 'dgk' + (++uid), A = id + 'a';
    var b = '<defs>' + marker(A, 'dg-ah') + '</defs>';
    b += box(60, 78, 180, 56, 'Predicción', 'modelo e IMU');
    b += box(380, 78, 180, 56, 'Corrección', 'medición z y ganancia K');
    b += '<path class="dg-sig" d="M150 76 C150 36 470 36 470 74" marker-end="url(#' + A + ')"/>';
    b += '<path class="dg-sig" d="M470 136 C470 176 150 176 150 138" marker-end="url(#' + A + ')"/>';
    b += text(310, 24, 'x̂⁻ y P⁻ (lo que espera el modelo)', 'dg-small', 'middle');
    b += text(310, 194, 'x̂ y P corregidos (incertidumbre menor)', 'dg-small', 'middle');
    return figure(svg(620, 204, 'Ciclo del filtro de Kalman entre predicción y corrección', b, 500),
      'La predicción hace crecer la incertidumbre; cada medición la corrige y la achica.');
  }

  window.DDANT_DIAGRAMS = {
    'svg:interconexion': interconexion,
    'svg:perfil': perfil,
    'svg:cl_alfa': clAlfa,
    'svg:pid': pid,
    'svg:kalman': kalman,
    'quad:layout': function () { return quad('layout'); },
    'quad:throttle': function () { return quad('throttle'); },
    'quad:pitch_adelante': function () { return quad('pitch_adelante'); },
    'quad:roll_izquierda': function () { return quad('roll_izquierda'); },
    'quad:yaw_derecha': function () { return quad('yaw_derecha'); }
  };
})();
