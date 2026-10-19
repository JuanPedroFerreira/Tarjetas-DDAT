/* Tarjetas DDANT: estudio con tarjetas de pregunta y respuesta.
   Todo el estado vive en localStorage (por navegador). Exportar e importar permite moverlo. */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };

  /* ---------- Iconos (trazos de 24 x 24) ---------- */
  var IC = {
    prev: '<path d="M15 18l-6-6 6-6"/>',
    next: '<path d="M9 18l6-6-6-6"/>',
    flip: '<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    doubt: '<circle cx="12" cy="12" r="9.5"/><path d="M9.2 9.3a2.9 2.9 0 0 1 5.6 1c0 1.9-2.8 2.5-2.8 2.5"/><path d="M12 17h.01"/>',
    edit: '<path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    filter: '<path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/>',
    more: '<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>',
    close: '<path d="M18 6L6 18M6 6l12 12"/>',
    shuffle: '<path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
    upload: '<path d="M12 21V9M7 14l5-5 5 5M4 3h16"/>',
    keyboard: '<rect x="2.5" y="5.5" width="19" height="13" rx="2"/><path d="M6 9.5h.01M10 9.5h.01M14 9.5h.01M18 9.5h.01M7 14.5h10"/>',
    info: '<circle cx="12" cy="12" r="9.5"/><path d="M12 11v6M12 7.5h.01"/>',
    monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    eraser: '<path d="M7 20h13"/><path d="M4.6 15.4l9.9-9.9a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 1 0 2.8L12 18H8.2z"/>',
    quad: '<circle cx="6" cy="6" r="3.2"/><circle cx="18" cy="6" r="3.2"/><circle cx="6" cy="18" r="3.2"/><circle cx="18" cy="18" r="3.2"/><path d="M8.3 8.3l7.4 7.4M15.7 8.3l-7.4 7.4"/><rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1"/>'
  };
  function icon(n, cls) {
    return '<svg class="ic' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (IC[n] || '') + '</svg>';
  }

  /* ---------- Catálogos ---------- */
  var TOPICS = [
    { id: 'hist', name: 'Historia y aplicaciones' },
    { id: 'norm', name: 'Normativa y ética' },
    { id: 'comp', name: 'Componentes' },
    { id: 'elec', name: 'Electricidad' },
    { id: 'bat', name: 'Baterías y energía' },
    { id: 'sens', name: 'Sensores y protocolos' },
    { id: 'dis', name: 'Elección de componentes' },
    { id: 'vuelo', name: 'Pilotaje y operación' },
    { id: 'aero', name: 'Aerodinámica' },
    { id: 'ctrl', name: 'Control y firmware' }
  ];
  var SOURCES = [
    { id: '01', name: 'Clase 1', title: 'Introducción, historia y normativa' },
    { id: '02', name: 'Clase 2', title: 'Componentes de drones' },
    { id: '03', name: 'Clase 3', title: 'Aerodinámica y física' },
    { id: '04', name: 'Clase 4', title: 'Electricidad y electrónica' },
    { id: '05', name: 'Clase 5', title: 'Montaje del dron' },
    { id: '06', name: 'Clase 6', title: 'Configuración del sistema de potencia' },
    { id: 'gen', name: 'Sin diapositivas', title: 'Preguntas sin material de clase: respuesta general' },
    { id: 'mine', name: 'Mis tarjetas', title: 'Tarjetas que creaste o importaste' }
  ];
  var STATUS = [
    { id: 'pending', name: 'Por estudiar' },
    { id: 'doubt', name: 'Dudosas' },
    { id: 'new', name: 'Sin marcar' },
    { id: 'known', name: 'Sabidas' },
    { id: 'all', name: 'Todas' }
  ];
  var ORDERS = [
    { id: 'num', name: 'En orden' },
    { id: 'random', name: 'Mezcladas' },
    { id: 'doubt', name: 'Dudosas primero' }
  ];
  var SESSIONS = [
    { id: 0, name: 'Todas' },
    { id: 10, name: '10' },
    { id: 20, name: '20' },
    { id: 30, name: '30' }
  ];

  var KEY = 'ddant_tarjetas_v1';
  var APP_ID = 'tarjetas_ddant';
  var RAW = window.DDANT_CARDS || [];
  var DIAG = window.DDANT_DIAGRAMS || {};
  var BUILTIN_MAX = RAW.reduce(function (m, c) { return Math.max(m, c.n); }, 1);

  /* ---------- Estado ---------- */
  function rnd() { return Math.floor(Math.random() * 1e9); }
  function rid(prefix) { return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

  function freshState() {
    return {
      v: 1, marks: {}, custom: [], overrides: {}, customTopics: [],
      filters: null, seed: rnd(), sessionSeed: rnd(), currentId: null, view: 'study', theme: 'system',
      sessionIds: null, sessionKey: null, seenTip: false
    };
  }
  var S = freshState();

  function maxN() {
    var m = BUILTIN_MAX;
    (S.custom || []).forEach(function (c) { if (c.n > m) m = c.n; });
    return m;
  }
  function defaultFilters() {
    return { topics: [], from: 1, to: maxN(), status: 'pending', sources: [], order: 'num', session: 0, query: '' };
  }
  function validCustom(c) {
    return c && typeof c.id === 'string' && typeof c.q === 'string' && typeof c.a === 'string';
  }
  function loadState() {
    var st = freshState();
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var o = JSON.parse(raw);
        if (o && typeof o === 'object') {
          if (o.marks && typeof o.marks === 'object') st.marks = o.marks;
          if (o.overrides && typeof o.overrides === 'object') st.overrides = o.overrides;
          if (Array.isArray(o.custom)) st.custom = o.custom.filter(validCustom);
          if (Array.isArray(o.customTopics)) st.customTopics = o.customTopics.filter(function (t) { return t && t.id && t.name; });
          ['seed', 'sessionSeed', 'currentId', 'view', 'theme', 'sessionIds', 'sessionKey', 'seenTip'].forEach(function (k) {
            if (o[k] !== undefined) st[k] = o[k];
          });
          if (o.filters && typeof o.filters === 'object') st.filters = o.filters;
        }
      }
    } catch (e) { /* almacenamiento no disponible: se usa el estado inicial */ }
    return st;
  }
  function sanitizeFilters() {
    var d = defaultFilters(), f = S.filters || {};
    var out = {
      topics: Array.isArray(f.topics) ? f.topics.filter(function (t) { return typeof t === 'string'; }) : [],
      from: Number.isFinite(f.from) ? f.from : d.from,
      to: Number.isFinite(f.to) ? f.to : d.to,
      status: STATUS.some(function (s) { return s.id === f.status; }) ? f.status : d.status,
      sources: Array.isArray(f.sources) ? f.sources.filter(function (t) { return typeof t === 'string'; }) : [],
      order: ORDERS.some(function (o) { return o.id === f.order; }) ? f.order : d.order,
      session: SESSIONS.some(function (o) { return o.id === f.session; }) ? f.session : 0,
      query: typeof f.query === 'string' ? f.query : ''
    };
    var mx = maxN();
    out.from = Math.max(1, Math.min(mx, Math.round(out.from)));
    out.to = Math.max(out.from, Math.min(mx, Math.round(out.to)));
    S.filters = out;
  }

  var saveTimer = null;
  function saveNow() {
    clearTimeout(saveTimer);
    try {
      localStorage.setItem(KEY, JSON.stringify({
        v: 1, marks: S.marks, custom: S.custom, overrides: S.overrides, customTopics: S.customTopics,
        filters: S.filters, seed: S.seed, sessionSeed: S.sessionSeed, currentId: S.currentId, view: S.view,
        theme: S.theme, sessionIds: S.sessionIds, sessionKey: S.sessionKey, seenTip: S.seenTip
      }));
    } catch (e) { /* sin almacenamiento */ }
  }
  function save() { clearTimeout(saveTimer); saveTimer = setTimeout(saveNow, 150); }

  /* ---------- Texto y markdown liviano ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }
  function inline(s) {
    var codes = [];
    s = String(s || '').replace(/⟦([^⟧]+)⟧|`([^`]+)`/g, function (m, a, b) {
      codes.push(a !== undefined ? a : b);
      return '\u0001' + (codes.length - 1) + '\u0002';
    });
    s = esc(s);
    s = s.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[\s(])\*([^*\s][^*]*?)\*(?=[\s).,;:!?]|$)/g, '$1<em>$2</em>');
    s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    s = s.replace(/\u0001(\d+)\u0002/g, function (m, i) { return '<code class="f">' + esc(codes[+i]) + '</code>'; });
    return s;
  }
  var RE_BULLET = /^(\s*)[•\-*]\s+(.*)$/;
  var RE_ORD = /^(\s*)(\d+)[.)]\s+(.*)$/;
  var RE_DIAG = /^\s*\[\[([a-z]+:\w+)\]\]\s*$/;
  var RE_FORMULA = /^\s*(?:⟦[^⟧]+⟧|`[^`]+`)\s*$/;
  var RE_HEAD = /^\s*#{2,4}\s+(.*)$/;
  function isBlockStart(l) {
    return RE_DIAG.test(l) || /^\s*```/.test(l) || RE_HEAD.test(l) || /^\s*\|/.test(l) || RE_BULLET.test(l) || RE_ORD.test(l) || RE_FORMULA.test(l);
  }
  function fblock(l) { return '<div class="fblock">' + inline(l.trim()) + '</div>'; }
  function cells(row) {
    var r = row.trim();
    if (r.charAt(0) === '|') r = r.slice(1);
    if (r.charAt(r.length - 1) === '|') r = r.slice(0, -1);
    return r.split('|').map(function (c) { return c.trim(); });
  }
  function table(rows) {
    var head = cells(rows[0]), body = rows.slice(1);
    if (body.length && /^[\s|:\-]+$/.test(body[0])) body = body.slice(1);
    var rowHead = !head[0];
    var h = '<div class="tbl"><table class="cols-' + Math.min(head.length, 6) + '"><thead><tr>' +
      head.map(function (c) { return '<th scope="col">' + inline(c) + '</th>'; }).join('') + '</tr></thead><tbody>';
    body.forEach(function (r) {
      var cs = cells(r);
      h += '<tr>' + cs.map(function (c, k) {
        return (k === 0 && rowHead) ? '<th scope="row">' + inline(c) + '</th>' : '<td>' + inline(c) + '</td>';
      }).join('') + '</tr>';
    });
    return h + '</tbody></table></div>';
  }
  function joinLines(arr) {
    var h = '';
    arr.forEach(function (x, k) {
      var isBlock = x.indexOf('<div class="fblock">') === 0;
      var prevBlock = k > 0 && arr[k - 1].indexOf('<div class="fblock">') === 0;
      h += (k && !isBlock && !prevBlock ? '<br>' : '') + x;
    });
    return h;
  }
  function list(lines, start) {
    var i = start, items = [], cur = null;
    var firstOrd = lines[i].match(RE_ORD);
    var type = firstOrd ? 'ol' : 'ul';
    var startNum = firstOrd ? parseInt(firstOrd[2], 10) : 1;
    while (i < lines.length) {
      var ln = lines[i];
      if (!ln.trim()) break;
      var mb = ln.match(RE_BULLET), mo = mb ? null : ln.match(RE_ORD);
      if (mb || mo) {
        var indent = (mb ? mb[1] : mo[1]).replace(/\t/g, '  ').length;
        var content = mb ? mb[2] : mo[3];
        var t = mb ? 'ul' : 'ol';
        if (indent >= 2 && cur) {
          if (!cur.sub) cur.sub = { type: t, items: [] };
          cur.sub.items.push([inline(content)]);
        } else {
          if (t !== type && items.length) break;
          cur = { lines: [inline(content)], sub: null };
          items.push(cur);
        }
        i++;
        continue;
      }
      if (isBlockStart(ln) && !RE_FORMULA.test(ln)) break;
      if (!cur) break;
      var target = (cur.sub && cur.sub.items.length) ? cur.sub.items[cur.sub.items.length - 1] : cur.lines;
      target.push(RE_FORMULA.test(ln) ? fblock(ln) : inline(ln.trim()));
      i++;
    }
    var open = '<' + type + (type === 'ol' && startNum !== 1 ? ' start="' + startNum + '"' : '') + '>';
    var html = open + items.map(function (it) {
      var sub = it.sub ? '<' + it.sub.type + '>' + it.sub.items.map(function (s) { return '<li>' + joinLines(s) + '</li>'; }).join('') + '</' + it.sub.type + '>' : '';
      return '<li>' + joinLines(it.lines) + sub + '</li>';
    }).join('') + '</' + type + '>';
    return { html: html, next: i };
  }
  function md(src) {
    var lines = String(src || '').replace(/\r\n?/g, '\n').split('\n');
    var out = [], i = 0, m;
    while (i < lines.length) {
      var ln = lines[i];
      if (!ln.trim()) { i++; continue; }
      if ((m = ln.match(RE_DIAG))) {
        var fn = DIAG[m[1]];
        if (fn) out.push('<figure class="diag">' + fn() + '</figure>');
        i++; continue;
      }
      if (/^\s*```/.test(ln)) {
        var code = []; i++;
        while (i < lines.length && !/^\s*```/.test(lines[i])) { code.push(lines[i]); i++; }
        i++;
        out.push('<pre><code>' + esc(code.join('\n')) + '</code></pre>');
        continue;
      }
      if ((m = ln.match(RE_HEAD))) { out.push('<h4>' + inline(m[1]) + '</h4>'); i++; continue; }
      if (/^\s*\|/.test(ln)) {
        var rows = [];
        while (i < lines.length && /^\s*\|/.test(lines[i])) { rows.push(lines[i]); i++; }
        out.push(table(rows));
        continue;
      }
      if (RE_BULLET.test(ln) || RE_ORD.test(ln)) { var res = list(lines, i); out.push(res.html); i = res.next; continue; }
      if (RE_FORMULA.test(ln)) { out.push(fblock(ln)); i++; continue; }
      var para = [];
      while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i])) { para.push(inline(lines[i].trim())); i++; }
      out.push('<p>' + para.join('<br>') + '</p>');
    }
    return out.join('');
  }
  function plainText(s) {
    return String(s || '').replace(/\[\[[^\]]+\]\]/g, ' ').replace(/[⟦⟧`*#|•]/g, '').replace(/\s+/g, ' ').trim();
  }
  function norm(s) { return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }
  function joinY(a) { return a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' y ' + a[a.length - 1]; }

  /* ---------- Tarjetas ---------- */
  var ALL = [], BYID = {};
  function topics() { return TOPICS.concat(S.customTopics); }
  function topicName(id) {
    var t = topics().filter(function (x) { return x.id === id; })[0];
    return t ? t.name : 'Sin tema';
  }
  function rebuild() {
    ALL = RAW.map(function (c) {
      var id = 'q' + c.n, o = S.overrides[id];
      var card = { id: id, n: c.n, t: c.t, src: c.src || [], g: !!c.g, q: c.q, k: c.k || '', a: c.a || '', builtin: true, edited: false };
      if (o) {
        ['q', 'k', 'a', 't'].forEach(function (f) { if (typeof o[f] === 'string') card[f] = o[f]; });
        card.edited = true;
      }
      return card;
    });
    S.custom.forEach(function (c) {
      ALL.push({ id: c.id, n: c.n > 0 ? c.n : null, t: c.t, src: [], g: false, q: c.q, k: c.k || '', a: c.a || '', builtin: false, edited: false, created: c.created || 0 });
    });
    BYID = {};
    ALL.forEach(function (c) {
      c._s = norm([c.n || '', c.q, c.k, plainText(c.a), topicName(c.t)].join(' '));
      BYID[c.id] = c;
    });
  }
  function original(id) { var n = parseInt(String(id).slice(1), 10); return RAW.filter(function (c) { return c.n === n; })[0]; }
  function cardSources(c) { if (!c.builtin) return ['mine']; return c.src.length ? c.src : ['gen']; }
  function sourceLabel(c) {
    if (!c.builtin) return 'Mi tarjeta';
    if (!c.src.length) return 'General';
    var nums = c.src.map(function (s) { return String(parseInt(s, 10)); });
    return (nums.length === 1 ? 'Clase ' : 'Clases ') + joinY(nums);
  }

  /* ---------- Filtros y mazo ---------- */
  var orderMarks = {};
  function snapshotOrder() { orderMarks = Object.assign({}, S.marks); }
  function queryTerms() { return norm(S.filters.query).split(/\s+/).filter(Boolean); }
  function baseMatch(c, f, terms) {
    if (f.topics.length && f.topics.indexOf(c.t) < 0) return false;
    if (c.n != null && (c.n < f.from || c.n > f.to)) return false;
    if (f.sources.length) {
      var cs = cardSources(c), ok = false;
      for (var i = 0; i < cs.length; i++) if (f.sources.indexOf(cs[i]) >= 0) { ok = true; break; }
      if (!ok) return false;
    }
    for (var j = 0; j < terms.length; j++) if (c._s.indexOf(terms[j]) < 0) return false;
    return true;
  }
  function statusMatch(c, st) {
    var m = S.marks[c.id];
    switch (st) {
      case 'pending': return m !== 'known';
      case 'doubt': return m === 'doubt';
      case 'new': return !m;
      case 'known': return m === 'known';
      default: return true;
    }
  }
  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function byNum(a, b) {
    var an = a.n == null ? 1e9 : a.n, bn = b.n == null ? 1e9 : b.n;
    return (an - bn) || ((a.created || 0) - (b.created || 0));
  }
  function sortList(list) {
    var o = S.filters.order;
    if (o === 'random') {
      var seed = String(S.seed);
      return list.slice().sort(function (a, b) { return hash(a.id + seed) - hash(b.id + seed); });
    }
    if (o === 'doubt') {
      var rank = function (c) { var m = orderMarks[c.id]; return m === 'doubt' ? 0 : (m ? 2 : 1); };
      return list.slice().sort(function (a, b) { return (rank(a) - rank(b)) || byNum(a, b); });
    }
    return list.slice().sort(byNum);
  }
  function sessionKey() {
    var f = S.filters;
    return JSON.stringify([f.topics, f.from, f.to, f.status, f.sources, f.query, f.session, S.sessionSeed]);
  }

  var scope = [], deck = [], idx = 0, atEnd = false, flipped = false, shownId = null;

  function computeDeck() {
    var f = S.filters, terms = queryTerms();
    scope = ALL.filter(function (c) { return baseMatch(c, f, terms); });
    var list = scope.filter(function (c) { return statusMatch(c, f.status); });
    if (f.session > 0) {
      var key = sessionKey();
      if (!Array.isArray(S.sessionIds) || S.sessionKey !== key) {
        var sseed = String(S.sessionSeed);
        S.sessionIds = list.slice().sort(function (a, b) { return hash(a.id + sseed) - hash(b.id + sseed); })
          .slice(0, f.session).map(function (c) { return c.id; });
        S.sessionKey = key;
        save();
      }
      var inSession = {};
      S.sessionIds.forEach(function (id) { inSession[id] = true; });
      list = list.filter(function (c) { return inSession[c.id]; });
    } else if (S.sessionIds) {
      S.sessionIds = null; S.sessionKey = null;
    }
    deck = sortList(list);
  }
  function locate(prefId, resetIfMissing) {
    var j = -1;
    if (prefId) for (var i = 0; i < deck.length; i++) if (deck[i].id === prefId) { j = i; break; }
    if (j >= 0) idx = j;
    else if (resetIfMissing) idx = 0;
    else idx = Math.max(0, Math.min(idx, deck.length - 1));
    if (!deck.length) idx = 0;
  }
  function refresh(prefId, resetIfMissing) {
    computeDeck();
    locate(prefId === undefined ? S.currentId : prefId, resetIfMissing);
  }

  function setFilter(patch, restart) {
    Object.assign(S.filters, patch);
    snapshotOrder();
    atEnd = false;
    save();
    refresh(restart ? null : S.currentId, true);
    renderAll(restart ? 1 : 0);
  }
  function activeFilterCount() {
    var f = S.filters, n = 0;
    if (f.topics.length) n++;
    if (f.from > 1 || f.to < maxN()) n++;
    if (f.status !== 'pending') n++;
    if (f.sources.length) n++;
    if (f.query.trim()) n++;
    if (f.order !== 'num') n++;
    if (f.session > 0) n++;
    return n;
  }

  /* ---------- Render: filtros y avance ---------- */
  function chip(id, label, pressed, count, title) {
    return '<button type="button" class="chip" data-id="' + esc(id) + '" aria-pressed="' + (pressed ? 'true' : 'false') + '"' +
      (title ? ' title="' + esc(title) + '"' : '') + '>' + esc(label) + (count != null ? '<small>' + count + '</small>' : '') + '</button>';
  }
  function renderFilters() {
    var f = S.filters;
    var counts = {};
    STATUS.forEach(function (s) { counts[s.id] = scope.filter(function (c) { return statusMatch(c, s.id); }).length; });
    $('#fStatus').innerHTML = STATUS.map(function (s) { return chip(s.id, s.name, f.status === s.id, counts[s.id]); }).join('');

    var tcount = {};
    ALL.forEach(function (c) { tcount[c.t] = (tcount[c.t] || 0) + 1; });
    $('#fTopics').innerHTML = topics().filter(function (t) { return tcount[t.id]; })
      .map(function (t) { return chip(t.id, t.name, f.topics.indexOf(t.id) >= 0, tcount[t.id]); }).join('');

    var scount = {};
    ALL.forEach(function (c) { cardSources(c).forEach(function (s) { scount[s] = (scount[s] || 0) + 1; }); });
    $('#fSources').innerHTML = SOURCES.filter(function (s) { return scount[s.id]; })
      .map(function (s) { return chip(s.id, s.name, f.sources.indexOf(s.id) >= 0, scount[s.id], s.title); }).join('');

    $('#fOrder').innerHTML = ORDERS.map(function (o) { return chip(o.id, o.name, f.order === o.id); }).join('');
    $('#fSession').innerHTML = SESSIONS.map(function (o) { return chip(String(o.id), o.name, f.session === o.id); }).join('');
    $('#btnReshuffle').hidden = f.order !== 'random';
    $('#btnNewSession').hidden = !(f.session > 0);

    var mx = maxN();
    ['#rFrom', '#rTo', '#nFrom', '#nTo'].forEach(function (s) { $(s).max = mx; });
    $('#rFrom').value = f.from; $('#rTo').value = f.to;
    if (document.activeElement !== $('#nFrom')) $('#nFrom').value = f.from;
    if (document.activeElement !== $('#nTo')) $('#nTo').value = f.to;
    paintRange();
    if (document.activeElement !== $('#fQuery')) $('#fQuery').value = f.query;
    $('#qClear').hidden = !f.query;

    var n = activeFilterCount();
    ['#filterCount', '#filterCount2'].forEach(function (s) { var el = $(s); el.textContent = n ? String(n) : ''; el.hidden = !n; });
    $('#btnClear').disabled = !n;
    var shown = S.view === 'study' ? deck.length : listItems().length;
    $('#btnShowResults').textContent = shown ? 'Ver ' + plural(shown, 'tarjeta', 'tarjetas') : 'No hay tarjetas con estos filtros';
  }
  function paintRange() {
    var mx = maxN(), a = +$('#rFrom').value, b = +$('#rTo').value;
    var pa = (a - 1) / Math.max(1, mx - 1) * 100, pb = (b - 1) / Math.max(1, mx - 1) * 100;
    var fill = $('#rangeFill');
    fill.style.left = pa + '%';
    fill.style.width = Math.max(0, pb - pa) + '%';
    $('#rFrom').style.zIndex = a > mx - 3 ? 5 : 3;
    $('#rangeLabel').textContent = (a === 1 && b === mx) ? 'Todas (1 a ' + mx + ')' : 'De la ' + a + ' a la ' + b;
  }
  function renderProgress() {
    var k = 0, d = 0;
    scope.forEach(function (c) { var m = S.marks[c.id]; if (m === 'known') k++; else if (m === 'doubt') d++; });
    var total = scope.length, n = total - k - d;
    $('#pbar').innerHTML = total
      ? '<i class="pb-k" style="width:' + (k / total * 100) + '%"></i><i class="pb-d" style="width:' + (d / total * 100) + '%"></i>'
      : '';
    $('#pbar').setAttribute('aria-label', 'De ' + plural(total, 'tarjeta', 'tarjetas') + ', ' + k + ' sabidas y ' + d + ' dudosas');
    $('#pLegend').innerHTML = '<span class="lg-k">' + plural(k, 'sabida', 'sabidas') + '</span>' +
      '<span class="lg-d">' + plural(d, 'dudosa', 'dudosas') + '</span>' +
      '<span class="lg-n">' + n + ' sin marcar</span>';
    var gk = ALL.filter(function (c) { return S.marks[c.id] === 'known'; }).length;
    $('#pTotal').textContent = 'En todo el curso: ' + gk + ' de ' + ALL.length + ' sabidas.';
  }

  /* ---------- Render: estudio ---------- */
  function statusCell(c) {
    var m = S.marks[c.id];
    if (m === 'known') return '<span class="st st-known">Sabida</span>';
    if (m === 'doubt') return '<span class="st st-doubt">Dudosa</span>';
    return '<span class="st">Sin marcar</span>';
  }
  function cell(area, label, value) {
    return '<div class="tb tb-' + area + '"><b>' + label + '</b><span>' + value + '</span></div>';
  }
  function titleBlock(c, sheet) {
    return cell('n', 'Pregunta', c.n != null ? String(c.n) : 'Propia') +
      cell('t', 'Tema', esc(topicName(c.t))) +
      cell('s', 'Fuente', esc(sourceLabel(c))) +
      cell('e', 'Estado', statusCell(c)) +
      cell('h', 'Hoja', sheet + ' de 2');
  }
  function notesFor(c) {
    var out = [];
    if (c.builtin && c.g && !c.src.length) out.push(['warn', 'Respuesta general: esta pregunta no tenía diapositivas en el curso.']);
    else if (c.builtin && c.g) out.push(['soft', 'Incluye información que complementa las diapositivas.']);
    if (c.edited) out.push(['soft', 'Editaste esta tarjeta. Podés volver al texto original desde Editar.']);
    return out.map(function (n) { return '<p class="note-card ' + n[0] + '">' + esc(n[1]) + '</p>'; }).join('');
  }
  function fillCard(c) {
    $('#qText').innerHTML = inline(c.q);
    $('#qEcho').innerHTML = inline(c.q);
    var key = $('#keyText');
    key.innerHTML = c.k ? inline(c.k) : '';
    key.hidden = !c.k;
    $('#cardNotes').innerHTML = notesFor(c);
    $('#answer').innerHTML = c.a ? md(c.a) : '<p class="muted">Esta tarjeta todavía no tiene respuesta.</p>';
    $('#tbFront').innerHTML = titleBlock(c, 1);
    $('#tbBack').innerHTML = titleBlock(c, 2);
    $('#backBody').scrollTop = 0;
  }
  function setFaces() {
    var front = $('#front'), back = $('#back');
    front.setAttribute('aria-hidden', flipped ? 'true' : 'false');
    back.setAttribute('aria-hidden', flipped ? 'false' : 'true');
    front.inert = flipped;
    back.inert = !flipped;
    $('#btnFlip').setAttribute('aria-pressed', flipped ? 'true' : 'false');
    $('#btnFlipLabel').textContent = flipped ? 'Ver pregunta' : 'Ver respuesta';
  }
  function resetFlip() {
    if (!flipped) return;
    var sheet = $('#sheet');
    sheet.classList.add('noanim');
    sheet.classList.remove('flipped');
    void sheet.offsetWidth;
    sheet.classList.remove('noanim');
    flipped = false;
  }
  function animateEnter(dir) {
    var w = $('#sheetWrap');
    w.classList.remove('enter-r', 'enter-l');
    void w.offsetWidth;
    w.classList.add(dir > 0 ? 'enter-r' : 'enter-l');
  }
  function panelHTML(title, text, actions) {
    return '<div class="panel-in">' + icon('quad', 'panel-ic') + '<h2>' + esc(title) + '</h2>' + (text ? '<p>' + esc(text) + '</p>' : '') +
      '<div class="panel-actions">' + actions.map(function (a) {
        return '<button type="button" class="btn' + (a[2] ? ' btn-primary' : '') + '" data-act="' + a[0] + '">' + esc(a[1]) + '</button>';
      }).join('') + '</div></div>';
  }
  function emptyHTML() {
    var f = S.filters;
    if (!scope.length) {
      return panelHTML('No hay tarjetas con estos filtros', 'Ampliá el rango de preguntas, sumá temas o clases, o borrá la búsqueda.', [['clearFilters', 'Limpiar filtros', true]]);
    }
    var allKnown = scope.every(function (c) { return S.marks[c.id] === 'known'; });
    if ((f.status === 'pending' || f.status === 'new') && allKnown) {
      return panelHTML('Ya sabés todas las de esta selección', 'Marcaste como sabidas las ' + scope.length + ' tarjetas. Podés repasarlas o elegir otros temas.', [['showKnown', 'Repasar sabidas', true], ['clearFilters', 'Limpiar filtros']]);
    }
    if (f.status === 'doubt') {
      return panelHTML('No tenés dudosas en esta selección', 'Cuando una respuesta no te salga del todo, marcala como dudosa y la vas a encontrar acá.', [['showPending', 'Ver las que faltan', true]]);
    }
    if (f.status === 'new') {
      return panelHTML('Ya marcaste todas las de esta selección', 'Todas tienen una marca. Mirá las dudosas para repasar.', [['showDoubt', 'Ver dudosas', true], ['showAll', 'Ver todas']]);
    }
    if (f.status === 'known') {
      return panelHTML('Todavía no marcaste sabidas en esta selección', 'Cuando una tarjeta te salga de memoria, tocá Ya la sé y sale del mazo de estudio.', [['showPending', 'Ver las que faltan', true]]);
    }
    return panelHTML('No hay tarjetas con estos filtros', '', [['clearFilters', 'Limpiar filtros', true]]);
  }
  function summaryHTML() {
    var k = 0, d = 0;
    scope.forEach(function (c) { var m = S.marks[c.id]; if (m === 'known') k++; else if (m === 'doubt') d++; });
    var n = scope.length - k - d;
    var acts = [];
    if (d) acts.push(['reviewDoubts', 'Repasar dudosas', true]);
    acts.push(['restart', 'Volver a empezar', !d]);
    acts.push(['shuffleRestart', 'Mezclar y empezar']);
    return panelHTML('Terminaste esta vuelta',
      'En esta selección llevás ' + plural(k, 'sabida', 'sabidas') + ', ' + plural(d, 'dudosa', 'dudosas') + ' y ' + n + ' sin marcar.', acts);
  }
  function setControls(mode) {
    var has = mode === true;
    $('#btnPrev').disabled = !(atEnd ? deck.length : (has && idx > 0));
    $('#btnNext').disabled = !deck.length;
    $('#btnFlip').disabled = !has;
    $('#btnKnown').disabled = !has;
    $('#btnDoubt').disabled = !has;
    var c = has ? deck[idx] : null, m = c ? S.marks[c.id] : null;
    $('#btnKnown').setAttribute('aria-pressed', m === 'known' ? 'true' : 'false');
    $('#btnDoubt').setAttribute('aria-pressed', m === 'doubt' ? 'true' : 'false');
  }
  function renderCount() {
    var el = $('#count');
    if (!deck.length) el.textContent = 'Sin tarjetas';
    else if (atEnd) el.textContent = 'Fin de la vuelta';
    else el.innerHTML = '<b>' + (idx + 1) + '</b> de ' + deck.length;
  }
  function renderStrip() {
    var el = $('#strip');
    if (!deck.length) { el.innerHTML = ''; return; }
    var h = '';
    for (var i = 0; i < deck.length; i++) {
      var m = S.marks[deck[i].id];
      h += '<i class="tick' + (m === 'known' ? ' k' : (m === 'doubt' ? ' d' : '')) + (i === idx && !atEnd ? ' cur' : '') + '"></i>';
    }
    el.innerHTML = h;
    fitStrip();
  }
  function fitStrip() {
    var el = $('#strip');
    if (!deck.length || !el.clientWidth) return;
    var per = el.clientWidth / deck.length;
    el.style.gap = per >= 5 ? '2px' : (per >= 3 ? '1px' : '0px');
  }
  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fitStrip, 120);
  });
  function renderStudy(dir) {
    renderCount();
    renderStrip();
    var wrap = $('#sheetWrap'), panel = $('#panel');
    if (!deck.length || atEnd) {
      resetFlip();
      wrap.hidden = true;
      panel.hidden = false;
      panel.innerHTML = deck.length ? summaryHTML() : emptyHTML();
      shownId = null;
      setControls(atEnd && deck.length ? 'end' : false);
      return;
    }
    wrap.hidden = false;
    panel.hidden = true;
    var c = deck[idx];
    S.currentId = c.id;
    save();
    if (c.id !== shownId) {
      resetFlip();
      fillCard(c);
      shownId = c.id;
      if (dir) animateEnter(dir);
    } else {
      $('#tbFront').innerHTML = titleBlock(c, 1);
      $('#tbBack').innerHTML = titleBlock(c, 2);
    }
    setFaces();
    setControls(true);
  }

  /* ---------- Render: lista ---------- */
  function listItems() {
    return sortList(scope.filter(function (c) { return statusMatch(c, S.filters.status); }));
  }
  function renderList() {
    var items = listItems();
    $('#listCount').textContent = plural(items.length, 'tarjeta', 'tarjetas');
    $('#bulkKnown').disabled = !items.length;
    $('#bulkClear').disabled = !items.some(function (c) { return S.marks[c.id]; });
    var empty = $('#listEmpty');
    if (!items.length) {
      $('#rows').innerHTML = '';
      empty.hidden = false;
      empty.innerHTML = emptyHTML();
      return;
    }
    empty.hidden = true;
    $('#rows').innerHTML = items.map(function (c) {
      var m = S.marks[c.id];
      var num = c.n != null ? 'la pregunta ' + c.n : 'esta tarjeta';
      return '<li class="row' + (m ? ' is-' + m : '') + '" data-id="' + esc(c.id) + '">' +
        '<button type="button" class="row-open" data-act="open" aria-label="Estudiar ' + esc(num) + '">' +
          '<span class="row-n">' + (c.n != null ? c.n : 'Propia') + '</span>' +
          '<span class="row-q">' + inline(c.q) + '</span>' +
          '<span class="row-meta">' + esc(topicName(c.t)) + ', ' + esc(sourceLabel(c)) + (c.edited ? ', editada' : '') + '</span>' +
        '</button>' +
        '<div class="row-actions">' +
          '<button type="button" class="mini mini-known" data-act="known" aria-pressed="' + (m === 'known') + '" aria-label="Marcar ' + esc(num) + ' como sabida">' + icon('check') + '<span>Sé</span></button>' +
          '<button type="button" class="mini mini-doubt" data-act="doubt" aria-pressed="' + (m === 'doubt') + '" aria-label="Marcar ' + esc(num) + ' como dudosa">' + icon('doubt') + '<span>Dudosa</span></button>' +
          '<button type="button" class="mini mini-icon" data-act="edit" aria-label="Editar ' + esc(num) + '">' + icon('edit') + '</button>' +
        '</div></li>';
    }).join('');
  }

  function renderMain(dir) {
    $('#study').hidden = S.view !== 'study';
    $('#list').hidden = S.view !== 'list';
    $('#vStudy').setAttribute('aria-pressed', S.view === 'study' ? 'true' : 'false');
    $('#vList').setAttribute('aria-pressed', S.view === 'list' ? 'true' : 'false');
    if (S.view === 'study') renderStudy(dir || 0); else renderList();
  }
  function renderAll(dir) {
    renderFilters();
    renderProgress();
    renderMain(dir);
  }

  /* ---------- Acciones de estudio ---------- */
  function flip() {
    if (!deck.length || atEnd || S.view !== 'study') return;
    flipped = !flipped;
    $('#sheet').classList.toggle('flipped', flipped);
    setFaces();
    if (flipped) $('#backBody').scrollTop = 0;
    announce(flipped ? 'Respuesta' : 'Pregunta');
  }
  function go(delta) {
    if (!deck.length || S.view !== 'study') return;
    if (atEnd) {
      atEnd = false;
      idx = delta > 0 ? 0 : deck.length - 1;
      renderStudy(delta);
      announceCard();
      return;
    }
    var n = idx + delta;
    if (n < 0) return;
    if (n >= deck.length) {
      atEnd = true;
      renderStudy(0);
      announce('Terminaste esta vuelta');
      return;
    }
    idx = n;
    renderStudy(delta);
    announceCard();
  }
  function setMark(id, val, silent) {
    var prev = S.marks[id] || null;
    if (val) S.marks[id] = val; else delete S.marks[id];
    save();
    if (silent) return;
    var msg = val === 'known' ? 'La marcaste como sabida.' : (val === 'doubt' ? 'La marcaste como dudosa.' : 'Le quitaste la marca.');
    toast(msg, function () {
      if (prev) S.marks[id] = prev; else delete S.marks[id];
      save();
      atEnd = false;
      refresh(id);
      renderAll();
    });
  }
  function markCurrent(val) {
    if (S.view !== 'study' || atEnd || !deck.length) return;
    var c = deck[idx], cur = S.marks[c.id] || null, next = cur === val ? null : val;
    var oldIdx = idx;
    setMark(c.id, next);
    computeDeck();
    var j = deck.indexOf(c);
    if (j >= 0) {
      idx = j;
      if (next) { if (idx < deck.length - 1) idx++; else atEnd = true; }
    } else {
      idx = oldIdx;
      if (idx >= deck.length) { if (deck.length) atEnd = true; idx = Math.max(0, deck.length - 1); }
    }
    renderFilters();
    renderProgress();
    renderStudy(next ? 1 : 0);
    if (!atEnd && deck.length && deck[idx].id !== c.id) announceCard();
  }
  function announce(s) {
    var l = $('#live');
    l.textContent = '';
    setTimeout(function () { l.textContent = s; }, 40);
  }
  function announceCard() {
    if (atEnd || !deck.length) return;
    var c = deck[idx];
    announce('Tarjeta ' + (idx + 1) + ' de ' + deck.length + '. ' + (c.n != null ? 'Pregunta ' + c.n + '. ' : '') + plainText(c.q));
  }
  function openCard(id) {
    S.view = 'study';
    atEnd = false;
    computeDeck();
    if (!deck.some(function (c) { return c.id === id; })) {
      S.filters.session = 0;
      computeDeck();
    }
    locate(id, true);
    shownId = null;
    save();
    renderAll(0);
    closeFilters();
    $('#btnFlip').focus();
  }

  /* ---------- Aviso con deshacer ---------- */
  var toastTimer = null;
  function hideToast() {
    var t = $('#toast');
    t.classList.remove('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 200);
  }
  function toast(msg, undoFn, opts) {
    opts = opts || {};
    var t = $('#toast'), b = $('#toastAct');
    $('#toastMsg').textContent = msg;
    var fn = undoFn || opts.action;
    if (fn) {
      b.hidden = false;
      b.textContent = opts.label || 'Deshacer';
      b.onclick = function () { hideToast(); fn(); };
    } else {
      b.hidden = true;
      b.onclick = null;
    }
    clearTimeout(toastTimer);
    t.hidden = false;
    t.classList.remove('show');
    void t.offsetWidth;
    t.classList.add('show');
    toastTimer = setTimeout(hideToast, opts.ms || 5500);
  }

  /* ---------- Diálogos ---------- */
  function openDialog(sel) {
    var d = $(sel);
    if (!d.open) d.showModal();
  }
  function closeDialog(d) { if (d && d.open) d.close(); }
  document.addEventListener('click', function (e) {
    var c = e.target.closest('[data-close]');
    if (c) { closeDialog(c.closest('dialog')); }
  });
  Array.prototype.forEach.call(document.querySelectorAll('dialog'), function (d) {
    d.addEventListener('click', function (e) { if (e.target === d) closeDialog(d); });
  });

  var confirmResolve = null;
  function confirmBox(title, text, okLabel, opts) {
    opts = opts || {};
    $('#cfTitle').textContent = title;
    $('#cfText').textContent = text;
    var ok = $('#cfOk'), alt = $('#cfAlt');
    ok.textContent = okLabel;
    ok.className = 'btn ' + (opts.danger ? 'btn-danger' : 'btn-primary');
    alt.hidden = !opts.alt;
    if (opts.alt) alt.textContent = opts.alt;
    $('#cfCancel').textContent = opts.cancel || 'Cancelar';
    openDialog('#confirm');
    return new Promise(function (resolve) { confirmResolve = resolve; });
  }
  function finishConfirm(v) {
    var r = confirmResolve;
    confirmResolve = null;
    closeDialog($('#confirm'));
    if (r) r(v);
  }
  $('#cfOk').addEventListener('click', function () { finishConfirm('ok'); });
  $('#cfAlt').addEventListener('click', function () { finishConfirm('alt'); });
  $('#cfCancel').addEventListener('click', function () { finishConfirm(false); });
  $('#confirm').addEventListener('close', function () { if (confirmResolve) { var r = confirmResolve; confirmResolve = null; r(false); } });

  /* ---------- Editor de tarjetas ---------- */
  var editing = null;
  function fillTopicSelect(selected) {
    var sel = $('#edT');
    sel.innerHTML = topics().map(function (t) {
      return '<option value="' + esc(t.id) + '"' + (t.id === selected ? ' selected' : '') + '>' + esc(t.name) + '</option>';
    }).join('') + '<option value="__new">Tema nuevo…</option>';
    $('#edNewTopicWrap').hidden = sel.value !== '__new';
  }
  function setPreview(on) {
    $('#edPreviewBtn').setAttribute('aria-pressed', on ? 'true' : 'false');
    $('#edPreviewBtn').textContent = on ? 'Editar texto' : 'Vista previa';
    $('#edA').hidden = on;
    var pv = $('#edPreview');
    pv.hidden = !on;
    if (on) pv.innerHTML = $('#edA').value.trim() ? md($('#edA').value) : '<p class="muted">Escribí la respuesta para ver cómo queda.</p>';
  }
  function openEditor(id) {
    var c = id ? BYID[id] : null;
    editing = c ? { id: c.id, builtin: c.builtin } : { id: null, builtin: false };
    $('#edTitle').textContent = c ? 'Editar tarjeta' : 'Nueva tarjeta';
    $('#edSave').textContent = c ? 'Guardar cambios' : 'Guardar tarjeta';
    $('#edQ').value = c ? c.q : '';
    $('#edK').value = c ? c.k : '';
    $('#edA').value = c ? c.a : '';
    $('#edN').value = c && c.n != null ? c.n : '';
    $('#edNField').hidden = !!(c && c.builtin);
    $('#edNewTopic').value = '';
    var defTopic = c ? c.t : (S.filters.topics.length === 1 ? S.filters.topics[0] : 'comp');
    fillTopicSelect(defTopic);
    var note = $('#edNote');
    if (c && c.builtin) {
      note.hidden = false;
      note.textContent = 'Es una tarjeta del curso (pregunta ' + c.n + '). Tus cambios se guardan en este navegador y podés volver al texto original cuando quieras.';
    } else {
      note.hidden = true;
    }
    $('#edRestore').hidden = !(c && c.builtin && c.edited);
    $('#edDelete').hidden = !(c && !c.builtin);
    $('#edErr').hidden = true;
    setPreview(false);
    openDialog('#editor');
    setTimeout(function () { $('#edQ').focus(); }, 30);
  }
  function editorTopic() {
    var v = $('#edT').value;
    if (v !== '__new') return v;
    var name = $('#edNewTopic').value.trim();
    if (!name) return null;
    var existing = topics().filter(function (t) { return norm(t.name) === norm(name); })[0];
    if (existing) return existing.id;
    var t = { id: rid('u'), name: name };
    S.customTopics.push(t);
    return t.id;
  }
  function editorError(msg, focusSel) {
    var e = $('#edErr');
    e.textContent = msg;
    e.hidden = false;
    if (focusSel) $(focusSel).focus();
  }
  $('#edT').addEventListener('change', function () {
    $('#edNewTopicWrap').hidden = $('#edT').value !== '__new';
    if ($('#edT').value === '__new') $('#edNewTopic').focus();
  });
  $('#edPreviewBtn').addEventListener('click', function () {
    setPreview($('#edPreviewBtn').getAttribute('aria-pressed') !== 'true');
  });
  $('#edForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var q = $('#edQ').value.trim(), k = $('#edK').value.trim(), a = $('#edA').value.trim();
    if (!q) { editorError('Escribí la pregunta.', '#edQ'); return; }
    if (!a) { setPreview(false); editorError('Escribí la respuesta.', '#edA'); return; }
    if ($('#edT').value === '__new' && !$('#edNewTopic').value.trim()) { editorError('Poné un nombre para el tema nuevo.', '#edNewTopic'); return; }
    var nRaw = $('#edN').value.trim(), n = nRaw ? parseInt(nRaw, 10) : null;
    if (nRaw && (!Number.isFinite(n) || n < 1 || n > 999)) { editorError('El número de pregunta tiene que estar entre 1 y 999.', '#edN'); return; }
    var t = editorTopic();
    var oldMax = maxN();
    var id;
    if (editing.id && editing.builtin) {
      id = editing.id;
      var orig = original(id);
      var ov = { q: q, k: k, a: a, t: t };
      if (orig && orig.q === q && (orig.k || '') === k && (orig.a || '') === a && orig.t === t) delete S.overrides[id];
      else S.overrides[id] = ov;
    } else if (editing.id) {
      id = editing.id;
      S.custom.forEach(function (c) {
        if (c.id === id) { c.q = q; c.k = k; c.a = a; c.t = t; c.n = n; c.updated = Date.now(); }
      });
    } else {
      id = rid('c');
      S.custom.push({ id: id, n: n, t: t, q: q, k: k, a: a, created: Date.now(), updated: Date.now() });
    }
    var isNew = !editing.id;
    closeDialog($('#editor'));
    if (S.filters.to === oldMax) S.filters.to = maxN();
    sanitizeFilters();
    save();
    rebuild();
    shownId = null;
    computeDeck();
    var visible = deck.some(function (c) { return c.id === id; });
    if (visible) {
      if (S.view === 'study') { atEnd = false; locate(id, true); }
      renderAll();
      toast(isNew ? 'Guardaste la tarjeta.' : 'Guardaste los cambios.');
    } else {
      locate(S.currentId, false);
      renderAll();
      toast(isNew ? 'Guardaste la tarjeta, pero los filtros actuales la ocultan.' : 'Guardaste los cambios.', null, isNew ? {
        label: 'Ver mis tarjetas',
        action: function () {
          S.filters = defaultFilters();
          S.filters.sources = ['mine'];
          S.filters.status = 'all';
          snapshotOrder();
          save();
          openCard(id);
        }
      } : null);
    }
  });
  $('#edRestore').addEventListener('click', function () {
    var id = editing && editing.id;
    if (!id) return;
    var prev = S.overrides[id];
    delete S.overrides[id];
    closeDialog($('#editor'));
    save(); rebuild(); shownId = null; refresh(id); renderAll();
    toast('Volviste al texto original.', function () { S.overrides[id] = prev; save(); rebuild(); shownId = null; refresh(id); renderAll(); });
  });
  $('#edDelete').addEventListener('click', function () {
    var id = editing && editing.id;
    if (!id) return;
    confirmBox('¿Eliminar esta tarjeta?', 'Se borra de este navegador. Podés deshacerlo enseguida desde el aviso.', 'Eliminar', { danger: true }).then(function (r) {
      if (r !== 'ok') return;
      var pos = -1, card = null;
      S.custom.forEach(function (c, i) { if (c.id === id) { pos = i; card = c; } });
      if (pos < 0) return;
      var mark = S.marks[id];
      S.custom.splice(pos, 1);
      delete S.marks[id];
      closeDialog($('#editor'));
      save(); rebuild(); shownId = null; refresh(); renderAll();
      toast('Eliminaste la tarjeta.', function () {
        S.custom.splice(pos, 0, card);
        if (mark) S.marks[id] = mark;
        save(); rebuild(); shownId = null; refresh(id); renderAll();
      });
    });
  });

  /* ---------- Exportar e importar ---------- */
  function stamp() {
    var d = new Date();
    return d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
  }
  function download(name, obj) {
    var blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 800);
  }
  function exportBackup() {
    download('tarjetas_ddant_respaldo_' + stamp() + '.json', {
      app: APP_ID, version: 1, kind: 'backup', exported: new Date().toISOString(),
      cards: S.custom, topics: S.customTopics, marks: S.marks, overrides: S.overrides
    });
    toast('Descargaste el respaldo con tu avance y tus tarjetas.');
  }
  function exportMine() {
    if (!S.custom.length) { toast('Todavía no creaste tarjetas propias.'); return; }
    var used = {};
    S.custom.forEach(function (c) { used[c.t] = true; });
    download('tarjetas_ddant_mias_' + stamp() + '.json', {
      app: APP_ID, version: 1, kind: 'cards', exported: new Date().toISOString(),
      cards: S.custom, topics: S.customTopics.filter(function (t) { return used[t.id]; })
    });
    toast('Descargaste ' + plural(S.custom.length, 'tarjeta propia', 'tarjetas propias') + '. Pasale el archivo a quien quieras.');
  }
  function importData(data) {
    if (!data || data.app !== APP_ID) { toast('Ese archivo no es de Tarjetas DDANT.'); return; }
    var cards = Array.isArray(data.cards) ? data.cards.filter(validCustom) : [];
    var fileTopics = Array.isArray(data.topics) ? data.topics.filter(function (t) { return t && t.id && t.name; }) : [];
    var hasProgress = data.marks && typeof data.marks === 'object' && Object.keys(data.marks).length;
    var hasOverrides = data.overrides && typeof data.overrides === 'object' && Object.keys(data.overrides).length;
    var step = (hasProgress || hasOverrides)
      ? confirmBox('Este respaldo trae avance guardado', 'Podés reemplazar tus marcas y ediciones por las del archivo, o sumar solo las tarjetas propias que trae.', 'Reemplazar mi avance', { alt: 'Solo sumar tarjetas' })
      : Promise.resolve('cards');
    step.then(function (choice) {
      if (!choice) return;
      var before = JSON.stringify({ m: S.marks, o: S.overrides, c: S.custom, t: S.customTopics });
      var oldMax = maxN();
      var topicMap = {};
      fileTopics.forEach(function (t) {
        var same = topics().filter(function (x) { return x.id === t.id || norm(x.name) === norm(t.name); })[0];
        if (same) topicMap[t.id] = same.id;
        else { S.customTopics.push({ id: t.id, name: String(t.name).slice(0, 40) }); topicMap[t.id] = t.id; }
      });
      var known = {};
      topics().forEach(function (t) { known[t.id] = true; });
      var added = 0;
      cards.forEach(function (c) {
        var t = topicMap[c.t] || c.t;
        if (!known[t]) {
          var imp = topics().filter(function (x) { return x.id === 'imp'; })[0];
          if (!imp) { S.customTopics.push({ id: 'imp', name: 'Importadas' }); known.imp = true; }
          t = 'imp';
        }
        var clean = { id: c.id, n: (parseInt(c.n, 10) > 0 ? parseInt(c.n, 10) : null), t: t, q: String(c.q), k: String(c.k || ''), a: String(c.a), created: c.created || Date.now(), updated: Date.now() };
        var pos = -1;
        S.custom.forEach(function (x, i) { if (x.id === clean.id) pos = i; });
        if (pos >= 0) S.custom[pos] = clean; else S.custom.push(clean);
        added++;
      });
      if (choice === 'ok') {
        if (hasProgress) S.marks = data.marks;
        if (hasOverrides) S.overrides = data.overrides;
      }
      if (S.filters.to === oldMax) S.filters.to = maxN();
      sanitizeFilters();
      save(); rebuild(); shownId = null; snapshotOrder(); refresh(); renderAll();
      var msg = choice === 'ok'
        ? 'Importaste tu avance' + (added ? ' y ' + plural(added, 'tarjeta', 'tarjetas') : '') + '.'
        : (added ? 'Importaste ' + plural(added, 'tarjeta', 'tarjetas') + '.' : 'El archivo no traía tarjetas propias.');
      toast(msg, function () {
        var b = JSON.parse(before);
        S.marks = b.m; S.overrides = b.o; S.custom = b.c; S.customTopics = b.t;
        sanitizeFilters(); save(); rebuild(); shownId = null; refresh(); renderAll();
      });
    });
  }
  $('#importFile').addEventListener('change', function (e) {
    var file = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      var data = null;
      try { data = JSON.parse(String(reader.result)); } catch (err) { toast('No se pudo leer el archivo: no es un JSON válido.'); return; }
      importData(data);
    };
    reader.onerror = function () { toast('No se pudo leer el archivo.'); };
    reader.readAsText(file);
  });

  /* ---------- Tema claro y oscuro ---------- */
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  function scheme() { return (S.theme === 'light' || S.theme === 'dark') ? S.theme : (mq.matches ? 'dark' : 'light'); }
  function applyTheme() {
    var root = document.documentElement;
    if (S.theme === 'light' || S.theme === 'dark') root.setAttribute('data-theme', S.theme);
    else root.removeAttribute('data-theme');
    var dark = scheme() === 'dark';
    var b = $('#btnTheme');
    b.innerHTML = icon(dark ? 'sun' : 'moon');
    b.setAttribute('aria-label', dark ? 'Usar tema claro' : 'Usar tema oscuro');
    b.title = dark ? 'Usar tema claro' : 'Usar tema oscuro';
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#111A21' : '#E6EAED');
  }
  if (mq.addEventListener) mq.addEventListener('change', applyTheme); else if (mq.addListener) mq.addListener(applyTheme);
  $('#btnTheme').addEventListener('click', function () {
    S.theme = scheme() === 'dark' ? 'light' : 'dark';
    save();
    applyTheme();
  });

  /* ---------- Menú ---------- */
  function toggleMenu(open) {
    var m = $('#menu'), b = $('#btnMenu');
    var o = open !== undefined ? open : m.hidden;
    m.hidden = !o;
    b.setAttribute('aria-expanded', o ? 'true' : 'false');
    if (o) { var first = m.querySelector('[role="menuitem"]'); if (first) first.focus(); }
  }
  $('#btnMenu').addEventListener('click', function (e) { e.stopPropagation(); toggleMenu(); });
  document.addEventListener('click', function (e) {
    if (!$('#menu').hidden && !e.target.closest('.menu-wrap')) toggleMenu(false);
  });
  $('#menu').addEventListener('keydown', function (e) {
    var items = Array.prototype.slice.call($('#menu').querySelectorAll('[role="menuitem"]'));
    var i = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
    else if (e.key === 'Escape') { e.preventDefault(); toggleMenu(false); $('#btnMenu').focus(); }
    else if (e.key === 'Tab') { toggleMenu(false); }
  });
  var MENU = {
    export: exportBackup,
    exportMine: exportMine,
    import: function () { $('#importFile').click(); },
    shortcuts: function () { openDialog('#shortcuts'); },
    about: function () { openDialog('#about'); },
    systemTheme: function () { S.theme = 'system'; save(); applyTheme(); toast('Ahora se usa el tema de tu sistema.'); },
    resetMarks: function () {
      var count = Object.keys(S.marks).length;
      if (!count) { toast('No tenés marcas para borrar.'); return; }
      confirmBox('¿Borrar todas las marcas?', 'Se quitan las ' + count + ' marcas de sabidas y dudosas. Tus tarjetas propias no se tocan.', 'Borrar marcas', { danger: true }).then(function (r) {
        if (r !== 'ok') return;
        var prev = S.marks;
        S.marks = {};
        save(); snapshotOrder(); atEnd = false; refresh(); renderAll();
        toast('Borraste todas las marcas.', function () { S.marks = prev; save(); refresh(); renderAll(); });
      });
    }
  };
  $('#menu').addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]');
    if (!b) return;
    toggleMenu(false);
    var fn = MENU[b.getAttribute('data-act')];
    if (fn) fn();
  });

  /* ---------- Panel de filtros en el celular ---------- */
  var mqMobile = window.matchMedia('(max-width: 860px)');
  var lastFocus = null;
  function filtersOpen() { return document.body.classList.contains('filters-open'); }
  function syncSidebar() {
    var sb = $('#filters');
    var mobile = mqMobile.matches;
    sb.inert = mobile && !filtersOpen();
    if (mobile && filtersOpen()) { sb.setAttribute('role', 'dialog'); sb.setAttribute('aria-modal', 'true'); }
    else { sb.removeAttribute('role'); sb.removeAttribute('aria-modal'); }
    if (!mobile && filtersOpen()) { document.body.classList.remove('filters-open'); $('#scrim').hidden = true; sb.inert = false; }
  }
  function openFilters(focusSearch) {
    if (!mqMobile.matches) { if (focusSearch) $('#fQuery').focus(); return; }
    lastFocus = document.activeElement;
    document.body.classList.add('filters-open');
    $('#scrim').hidden = false;
    syncSidebar();
    setTimeout(function () { (focusSearch ? $('#fQuery') : $('#btnCloseFilters')).focus(); }, 60);
  }
  function closeFilters() {
    if (!filtersOpen()) return;
    document.body.classList.remove('filters-open');
    $('#scrim').hidden = true;
    syncSidebar();
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  }
  if (mqMobile.addEventListener) mqMobile.addEventListener('change', syncSidebar); else if (mqMobile.addListener) mqMobile.addListener(syncSidebar);
  $('#btnFilters').addEventListener('click', function () { openFilters(false); });
  $('#btnFilters2').addEventListener('click', function () { openFilters(false); });
  $('#btnCloseFilters').addEventListener('click', closeFilters);
  $('#btnShowResults').addEventListener('click', closeFilters);
  $('#scrim').addEventListener('click', closeFilters);

  /* ---------- Eventos de filtros ---------- */
  function toggleIn(arr, v) { var i = arr.indexOf(v); if (i >= 0) arr.splice(i, 1); else arr.push(v); return arr; }
  $('#fStatus').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    setFilter({ status: b.getAttribute('data-id') });
  });
  $('#fTopics').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    setFilter({ topics: toggleIn(S.filters.topics.slice(), b.getAttribute('data-id')) });
  });
  $('#fSources').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    setFilter({ sources: toggleIn(S.filters.sources.slice(), b.getAttribute('data-id')) });
  });
  $('#fOrder').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    setFilter({ order: b.getAttribute('data-id') }, true);
  });
  $('#fSession').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    setFilter({ session: parseInt(b.getAttribute('data-id'), 10) || 0 }, true);
  });
  $('#btnReshuffle').addEventListener('click', function () {
    S.seed = rnd();
    setFilter({}, true);
    toast('Mezclaste las tarjetas.');
  });
  $('#btnNewSession').addEventListener('click', function () {
    S.sessionSeed = rnd();
    setFilter({}, true);
    toast('Sorteaste otra sesión de ' + S.filters.session + ' tarjetas.');
  });
  $('#btnClear').addEventListener('click', function () {
    var prev = JSON.stringify(S.filters);
    S.filters = defaultFilters();
    setFilter({});
    toast('Limpiaste los filtros.', function () { S.filters = JSON.parse(prev); setFilter({}); });
  });
  var qTimer = null;
  $('#fQuery').addEventListener('input', function () {
    var v = $('#fQuery').value;
    $('#qClear').hidden = !v;
    clearTimeout(qTimer);
    qTimer = setTimeout(function () { setFilter({ query: v }); }, 200);
  });
  $('#fQuery').addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && $('#fQuery').value) { e.preventDefault(); e.stopPropagation(); $('#fQuery').value = ''; setFilter({ query: '' }); }
    if (e.key === 'Enter') { e.preventDefault(); clearTimeout(qTimer); setFilter({ query: $('#fQuery').value }); closeFilters(); }
  });
  $('#qClear').addEventListener('click', function () { $('#fQuery').value = ''; setFilter({ query: '' }); $('#fQuery').focus(); });

  var rTimer = null;
  function onRangeInput(which) {
    var a = +$('#rFrom').value, b = +$('#rTo').value;
    if (a > b) { if (which === 'from') { b = a; $('#rTo').value = b; } else { a = b; $('#rFrom').value = a; } }
    $('#nFrom').value = a; $('#nTo').value = b;
    paintRange();
    clearTimeout(rTimer);
    rTimer = setTimeout(function () { setFilter({ from: a, to: b }); }, 160);
  }
  $('#rFrom').addEventListener('input', function () { onRangeInput('from'); });
  $('#rTo').addEventListener('input', function () { onRangeInput('to'); });
  function onNumChange() {
    var mx = maxN();
    var a = parseInt($('#nFrom').value, 10), b = parseInt($('#nTo').value, 10);
    if (!Number.isFinite(a)) a = 1;
    if (!Number.isFinite(b)) b = mx;
    a = Math.max(1, Math.min(mx, a)); b = Math.max(1, Math.min(mx, b));
    if (a > b) { var t = a; a = b; b = t; }
    setFilter({ from: a, to: b });
  }
  $('#nFrom').addEventListener('change', onNumChange);
  $('#nTo').addEventListener('change', onNumChange);
  ['#nFrom', '#nTo'].forEach(function (s) {
    $(s).addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); onNumChange(); } });
  });

  /* ---------- Eventos de estudio ---------- */
  $('#btnFlip').addEventListener('click', flip);
  $('#btnPrev').addEventListener('click', function () { go(-1); });
  $('#btnNext').addEventListener('click', function () { go(1); });
  $('#btnKnown').addEventListener('click', function () { markCurrent('known'); });
  $('#btnDoubt').addEventListener('click', function () { markCurrent('doubt'); });
  $('#sheet').addEventListener('click', function (e) {
    var b = e.target.closest('[data-act="edit"]');
    if (b && deck[idx]) { e.stopPropagation(); openEditor(deck[idx].id); }
  });
  $('#strip').addEventListener('click', function (e) {
    if (!deck.length) return;
    var r = $('#strip').getBoundingClientRect();
    var i = Math.floor((e.clientX - r.left) / r.width * deck.length);
    i = Math.max(0, Math.min(deck.length - 1, i));
    var dir = atEnd ? -1 : (i > idx ? 1 : (i < idx ? -1 : 0));
    atEnd = false;
    idx = i;
    renderStudy(dir);
    announceCard();
  });
  var PANEL_ACTS = {
    clearFilters: function () { S.filters = defaultFilters(); setFilter({}); },
    showKnown: function () { setFilter({ status: 'known' }); },
    showPending: function () { setFilter({ status: 'pending' }); },
    showDoubt: function () { setFilter({ status: 'doubt' }); },
    showAll: function () { setFilter({ status: 'all' }); },
    reviewDoubts: function () { setFilter({ status: 'doubt' }); },
    restart: function () { atEnd = false; idx = 0; renderStudy(1); announceCard(); },
    shuffleRestart: function () { S.seed = rnd(); S.filters.order = 'random'; atEnd = false; snapshotOrder(); save(); refresh(null, true); idx = 0; renderAll(1); }
  };
  function onPanelClick(e) {
    var b = e.target.closest('[data-act]');
    if (!b) return;
    var fn = PANEL_ACTS[b.getAttribute('data-act')];
    if (fn) fn();
  }
  $('#panel').addEventListener('click', onPanelClick);
  $('#listEmpty').addEventListener('click', onPanelClick);

  // Toque para dar vuelta y deslizamiento para cambiar de tarjeta
  var sw = null;
  var stage = $('#stage');
  stage.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'mouse' && e.button !== 0) { sw = null; return; }
    if (e.target.closest('button, a, input, textarea, select, .tbl, .diag, .panel')) { sw = null; return; }
    sw = { x: e.clientX, y: e.clientY, t: Date.now(), type: e.pointerType };
  });
  stage.addEventListener('pointerup', function (e) {
    if (!sw) return;
    var dx = e.clientX - sw.x, dy = e.clientY - sw.y, dt = Date.now() - sw.t, type = sw.type;
    sw = null;
    if (type !== 'mouse' && Math.abs(dx) > 56 && Math.abs(dx) > Math.abs(dy) * 1.6 && dt < 900) { go(dx < 0 ? 1 : -1); return; }
    if (Math.abs(dx) < 8 && Math.abs(dy) < 8 && dt < 600) {
      var sel = window.getSelection ? String(window.getSelection()) : '';
      if (sel) return;
      flip();
    }
  });
  stage.addEventListener('pointercancel', function () { sw = null; });

  /* ---------- Vista de lista ---------- */
  $('#rows').addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]');
    if (!b) return;
    var row = b.closest('.row');
    var id = row && row.getAttribute('data-id');
    if (!id) return;
    var act = b.getAttribute('data-act');
    if (act === 'open') { openCard(id); return; }
    if (act === 'edit') { openEditor(id); return; }
    var cur = S.marks[id] || null, val = act === 'known' ? 'known' : 'doubt';
    setMark(id, cur === val ? null : val);
    computeDeck();
    locate(S.currentId, false);
    renderFilters();
    renderProgress();
    renderList();
    var again = document.querySelector('.row[data-id="' + id + '"] [data-act="' + act + '"]');
    if (again) again.focus();
  });
  function bulk(val) {
    var items = listItems();
    if (!items.length) return;
    var prev = {};
    items.forEach(function (c) { prev[c.id] = S.marks[c.id] || null; });
    items.forEach(function (c) { if (val) S.marks[c.id] = val; else delete S.marks[c.id]; });
    save(); computeDeck(); locate(S.currentId, false); renderAll();
    toast(val ? 'Marcaste ' + plural(items.length, 'tarjeta', 'tarjetas') + ' como sabidas.' : 'Quitaste las marcas de ' + plural(items.length, 'tarjeta', 'tarjetas') + '.', function () {
      Object.keys(prev).forEach(function (id) { if (prev[id]) S.marks[id] = prev[id]; else delete S.marks[id]; });
      save(); refresh(); renderAll();
    });
  }
  $('#bulkKnown').addEventListener('click', function () { bulk('known'); });
  $('#bulkClear').addEventListener('click', function () { bulk(null); });

  /* ---------- Vista, nueva tarjeta y teclado ---------- */
  function setView(v) {
    if (S.view === v) return;
    S.view = v;
    save();
    if (v === 'study') { computeDeck(); locate(S.currentId, false); shownId = null; }
    renderMain(0);
  }
  $('#vStudy').addEventListener('click', function () { setView('study'); });
  $('#vList').addEventListener('click', function () { setView('list'); });
  $('#btnNew').addEventListener('click', function () { openEditor(null); });

  document.addEventListener('keydown', function (e) {
    if (e.defaultPrevented) return;
    if (document.querySelector('dialog[open]')) return;
    if (e.key === 'Escape') {
      if (!$('#menu').hidden) { toggleMenu(false); $('#btnMenu').focus(); return; }
      if (filtersOpen()) { closeFilters(); return; }
      return;
    }
    var t = e.target, tag = (t.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select' || t.isContentEditable) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (filtersOpen() || !$('#menu').hidden) return;
    var onControl = !!t.closest && !!t.closest('button, a, [role="menuitem"]');
    switch (e.key) {
      case ' ':
      case 'Enter':
        if (onControl || S.view !== 'study') return;
        e.preventDefault(); flip(); break;
      case 'ArrowRight': if (S.view === 'study') { e.preventDefault(); go(1); } break;
      case 'ArrowLeft': if (S.view === 'study') { e.preventDefault(); go(-1); } break;
      case 's': case 'S': markCurrent('known'); break;
      case 'd': case 'D': markCurrent('doubt'); break;
      case 'e': case 'E': if (S.view === 'study' && deck[idx] && !atEnd) { e.preventDefault(); openEditor(deck[idx].id); } break;
      case 'n': case 'N': e.preventDefault(); openEditor(null); break;
      case '/': e.preventDefault(); openFilters(true); break;
      case '?': e.preventDefault(); openDialog('#shortcuts'); break;
      default: break;
    }
  });

  /* ---------- Inicio ---------- */
  S = loadState();
  sanitizeFilters();
  if (S.view !== 'study' && S.view !== 'list') S.view = 'study';
  rebuild();
  snapshotOrder();
  applyTheme();
  ['#btnPrev'].forEach(function (s) { $(s).innerHTML = icon('prev'); });
  $('#btnNext').innerHTML = icon('next');
  $('#btnFlip').insertAdjacentHTML('afterbegin', icon('flip'));
  $('#btnKnown').insertAdjacentHTML('afterbegin', icon('check'));
  $('#btnDoubt').insertAdjacentHTML('afterbegin', icon('doubt'));
  $('#btnNew').insertAdjacentHTML('afterbegin', icon('plus'));
  $('#btnMenu').innerHTML = icon('more');
  $('#btnCloseFilters').innerHTML = icon('close');
  $('#btnFilters').insertAdjacentHTML('afterbegin', icon('filter'));
  $('#btnFilters2').insertAdjacentHTML('afterbegin', icon('filter'));
  $('#searchIc').innerHTML = icon('search');
  $('#qClear').innerHTML = icon('close');
  $('#toastClose').innerHTML = icon('close');
  Array.prototype.forEach.call(document.querySelectorAll('[data-icon]'), function (el) { el.insertAdjacentHTML('afterbegin', icon(el.getAttribute('data-icon'))); });
  Array.prototype.forEach.call(document.querySelectorAll('.face-tools [data-act="edit"]'), function (el) { el.innerHTML = icon('edit'); });
  Array.prototype.forEach.call(document.querySelectorAll('dialog [data-close].btn-icon'), function (el) { el.innerHTML = icon('close'); });
  $('#toastClose').addEventListener('click', hideToast);
  $('#hint').textContent = window.matchMedia('(hover: none)').matches
    ? 'Tocá la hoja para ver la respuesta. Deslizá para cambiar de tarjeta.'
    : 'Hacé clic en la hoja o apretá Espacio para ver la respuesta.';
  $('#aboutCount').textContent = String(RAW.length);
  syncSidebar();
  refresh(S.currentId, false);
  renderAll(0);
  if (!S.seenTip) {
    S.seenTip = true;
    save();
    setTimeout(function () {
      toast('Tocá Ya la sé y la tarjeta sale del mazo. Para volver a verla, elegí Sabidas en Estado o usá la Lista.', null, { label: 'Entendido', action: function () {}, ms: 10000 });
    }, 700);
  }
})();
