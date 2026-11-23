/* @ds-bundle: {"format":4,"namespace":"CabralSousaDesignSystem_21fef7","components":[],"sourceHashes":{"hub/data.js":"c7a17235b5fe","hub/hub.js":"934349a3c433","portal/data.js":"e826c984eef6","portal/portal.js":"74f1e6cfed5a","tweaks-panel.jsx":"ea982af775f0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CabralSousaDesignSystem_21fef7 = window.CabralSousaDesignSystem_21fef7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// hub/data.js
try { (() => {
// Catálogo Hub — painéis disponíveis na central
window.HUB_PANELS = [{
  id: 'fat-resumo',
  name: 'Resumo do Faturamento',
  desc: 'Bruto, líquido, CMV e margem por diretoria — drill-down até o RCA.',
  area: 'Faturamento',
  diretoria: 'Todas',
  owner: 'Controladoria',
  updated: '20/04/2026 17:10',
  status: 'ativo',
  file: '../portal/paineis/fat-resumo.html'
}, {
  id: 'fat-meta',
  name: 'Meta vs. Realizado',
  desc: 'Atingimento mensal por supervisor e RCA. Semáforo de performance.',
  area: 'Faturamento',
  diretoria: 'Distribuição',
  owner: 'Comercial',
  updated: '20/04/2026 14:32',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}, {
  id: 'fat-margem',
  name: 'Análise de Margem',
  desc: 'Margem por linha, fornecedor e cliente. Devoluções inclusas.',
  area: 'Faturamento',
  diretoria: 'Todas',
  owner: 'Controladoria',
  updated: '19/04/2026 22:05',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}, {
  id: 'fat-bonif',
  name: 'Bonificações',
  desc: 'P_BONIFICACAO=1. Relatório informativo de bonificações concedidas.',
  area: 'Faturamento',
  diretoria: 'Mondelez',
  owner: 'Comercial',
  updated: '18/04/2026 09:15',
  status: 'beta',
  file: '../portal/paineis/_template.html'
}, {
  id: 'est-posicao',
  name: 'Posição de Estoque',
  desc: 'Saldo por filial, curva ABC e cobertura em dias.',
  area: 'Estoque',
  diretoria: 'Todas',
  owner: 'Logística',
  updated: '20/04/2026 06:00',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}, {
  id: 'est-rupturas',
  name: 'Rupturas e Faltas',
  desc: 'Itens em ruptura com sugestão automática de reposição.',
  area: 'Estoque',
  diretoria: 'Bahia Fort',
  owner: 'Logística',
  updated: '20/04/2026 06:00',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}, {
  id: 'est-validade',
  name: 'Controle de Validade',
  desc: 'Produtos com vencimento em até 90 dias, por filial.',
  area: 'Estoque',
  diretoria: 'Todas',
  owner: 'Logística',
  updated: '19/04/2026 18:40',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}, {
  id: 'com-carteira',
  name: 'Carteira de Pedidos',
  desc: 'Pedidos previstos no mês corrente. POSICAO NOT IN F,C.',
  area: 'Comercial',
  diretoria: 'Todas',
  owner: 'Comercial',
  updated: '20/04/2026 16:55',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}, {
  id: 'com-positivacao',
  name: 'Positivação de Clientes',
  desc: 'Clientes ativos no mês contra base total. Análise por RCA.',
  area: 'Comercial',
  diretoria: 'Master',
  owner: 'Comercial',
  updated: '20/04/2026 12:00',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}, {
  id: 'com-mix',
  name: 'Mix de Produtos por RCA',
  desc: 'Diversidade de SKUs vendidos por representante.',
  area: 'Comercial',
  diretoria: 'Atacado Esp.',
  owner: 'Comercial',
  updated: '17/04/2026 09:00',
  status: 'beta',
  file: '../portal/paineis/_template.html'
}, {
  id: 'log-roteiros',
  name: 'Roteirização',
  desc: 'Eficiência de rotas, entregas no prazo, km por entrega.',
  area: 'Logística',
  diretoria: 'Distribuição',
  owner: 'Logística',
  updated: '19/04/2026 23:50',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}, {
  id: 'log-devolucoes',
  name: 'Devoluções',
  desc: 'Volume e motivo por filial e RCA.',
  area: 'Logística',
  diretoria: 'Todas',
  owner: 'Logística',
  updated: '19/04/2026 20:10',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}, {
  id: 'fin-recebiveis',
  name: 'Contas a Receber',
  desc: 'Aging, inadimplência por cliente e prazo médio.',
  area: 'Financeiro',
  diretoria: 'Todas',
  owner: 'Financeiro',
  updated: '20/04/2026 08:00',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}, {
  id: 'fin-fluxo',
  name: 'Fluxo de Caixa',
  desc: 'Projeção de caixa 30 / 60 / 90 dias com cenários.',
  area: 'Financeiro',
  diretoria: 'Todas',
  owner: 'Financeiro',
  updated: '19/04/2026 19:45',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}, {
  id: 'fin-impostos',
  name: 'Impostos e Tributos',
  desc: 'PIS / COFINS / ICMS por operação. Apuração mensal.',
  area: 'Financeiro',
  diretoria: 'Todas',
  owner: 'Fiscal',
  updated: '15/04/2026 11:20',
  status: 'descontinuado',
  file: '../portal/paineis/_template.html'
}, {
  id: 'rh-headcount',
  name: 'Headcount e Turnover',
  desc: 'Quadro por diretoria. Admissões e desligamentos.',
  area: 'RH',
  diretoria: 'Todas',
  owner: 'Recursos Humanos',
  updated: '15/04/2026 09:00',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}, {
  id: 'rh-comissoes',
  name: 'Comissões da Força de Vendas',
  desc: 'Comissões por RCA com base em meta e mix.',
  area: 'RH',
  diretoria: 'Todas',
  owner: 'Recursos Humanos',
  updated: '20/04/2026 07:30',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}, {
  id: 'comp-precos',
  name: 'Preço de Venda',
  desc: 'Política de preço por linha e cliente. Descontos concedidos.',
  area: 'Compras & Preços',
  diretoria: 'Todas',
  owner: 'Comercial',
  updated: '18/04/2026 14:00',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}, {
  id: 'comp-fornec',
  name: 'Performance de Fornecedores',
  desc: 'OTIF, lead time e qualidade por fornecedor.',
  area: 'Compras & Preços',
  diretoria: 'CMA',
  owner: 'Compras',
  updated: '17/04/2026 16:25',
  status: 'beta',
  file: '../portal/paineis/_template.html'
}, {
  id: 'dir-suporte',
  name: 'Operação Suporte',
  desc: 'Indicadores da diretoria Suporte. KPIs de back-office.',
  area: 'Diretorias',
  diretoria: 'Suporte',
  owner: 'Diretoria Suporte',
  updated: '14/04/2026 18:00',
  status: 'ativo',
  file: '../portal/paineis/_template.html'
}];
window.HUB_AREAS = ['Faturamento', 'Estoque', 'Comercial', 'Logística', 'Financeiro', 'RH', 'Compras & Preços', 'Diretorias'];
window.HUB_DIRETORIAS = [{
  name: 'Distribuição',
  color: 'var(--hub-dir-distribuicao)'
}, {
  name: 'Master',
  color: 'var(--hub-dir-master)'
}, {
  name: 'Mondelez',
  color: 'var(--hub-dir-mondelez)'
}, {
  name: 'Bahia Fort',
  color: 'var(--hub-dir-bahia-fort)'
}, {
  name: 'CMA',
  color: 'var(--hub-dir-cma)'
}, {
  name: 'Atacado Esp.',
  color: 'var(--hub-dir-atacado-esp)'
}, {
  name: 'Suporte',
  color: 'var(--hub-dir-suporte)'
}, {
  name: 'Todas',
  color: 'var(--hub-dir-sem)'
}];

// Resolved hex (used where CSS vars don't work, e.g. inline SVG fills)
window.HUB_DIR_HEX = {
  'Distribuição': '#5B9BFF',
  'Master': '#4ED793',
  'Mondelez': '#C77DFF',
  'Bahia Fort': '#FF9D5C',
  'CMA': '#4DD6E0',
  'Atacado Esp.': '#FF7B7B',
  'Suporte': '#B89B7C',
  'Todas': '#8A95AB'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "hub/data.js", error: String((e && e.message) || e) }); }

// hub/hub.js
try { (() => {
/* ====================================================================
   Hub — Portal de Painéis
   Filtros, busca, favoritos, recentes, views
   ==================================================================== */

const PANELS = window.HUB_PANELS || [];
const AREAS = window.HUB_AREAS || [];
const DIRS = window.HUB_DIRETORIAS || [];
const DIR_HEX = window.HUB_DIR_HEX || {};
const LS_FAVS = 'hub_favs';
const LS_REC = 'hub_recent';
const LS_VIEW = 'hub_view';
const LS_SESS = 'hub_session';

// ---- Sessão ----
function getSession() {
  try {
    return JSON.parse(localStorage.getItem(LS_SESS) || 'null');
  } catch {
    return null;
  }
}
function requireSession() {
  const s = getSession();
  if (!s || !s.user) {
    // Auto-login para demo
    const demo = {
      user: 'jc.cabral',
      name: 'Júlio Cabral'
    };
    localStorage.setItem(LS_SESS, JSON.stringify(demo));
    return demo;
  }
  return s;
}
const session = requireSession();
if (session) {
  const av = document.getElementById('avatar');
  const initials = (session.name || session.user || 'JC').split(/\s+/).map(s => s[0]).slice(0, 2).join('').toUpperCase();
  av.textContent = initials;
  av.title = session.name || session.user;
  document.getElementById('user-name').textContent = (session.name || session.user).split(' ')[0];
}
document.getElementById('logout').addEventListener('click', e => {
  e.preventDefault();
  if (confirm('Encerrar sessão?')) {
    localStorage.removeItem(LS_SESS);
    location.href = 'login.html';
  }
});

// ---- Estado ----
const state = {
  search: '',
  view: 'todos',
  layout: localStorage.getItem(LS_VIEW) || 'grid',
  sort: 'updated',
  areas: new Set(),
  dirs: new Set(),
  status: new Set(['ativo', 'beta']),
  favs: new Set(JSON.parse(localStorage.getItem(LS_FAVS) || '[]')),
  recent: JSON.parse(localStorage.getItem(LS_REC) || '[]')
};
function persistFavs() {
  localStorage.setItem(LS_FAVS, JSON.stringify([...state.favs]));
}
function persistRecent() {
  localStorage.setItem(LS_REC, JSON.stringify(state.recent.slice(0, 12)));
}
function persistView() {
  localStorage.setItem(LS_VIEW, state.layout);
}

// ---- Helpers ----
function dirHex(name) {
  return DIR_HEX[name] || '#8A95AB';
}
function parseUpdated(s) {
  const m = s.match(/(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2}))?/);
  if (!m) return new Date(0);
  return new Date(+m[3], +m[2] - 1, +m[1], +(m[4] || 0), +(m[5] || 0));
}
function relTime(s) {
  const d = parseUpdated(s);
  const diff = (Date.now() - d.getTime()) / 1000;
  if (diff < 3600) return `há ${Math.max(1, Math.floor(diff / 60))} min`;
  if (diff < 86400) return `há ${Math.floor(diff / 3600)} h`;
  return `há ${Math.floor(diff / 86400)} d`;
}

// ---- Sidebar ----
function renderSidebar() {
  const aList = document.getElementById('area-list');
  aList.innerHTML = AREAS.map(a => {
    const ct = PANELS.filter(p => p.area === a).length;
    const active = state.areas.has(a) ? 'active' : '';
    return `<div class="side-item ${active}" data-area="${a}">
      <span class="name">${a}</span><span class="count">${ct}</span>
    </div>`;
  }).join('');
  aList.querySelectorAll('.side-item').forEach(el => {
    el.addEventListener('click', () => {
      const a = el.dataset.area;
      if (state.areas.has(a)) state.areas.delete(a);else state.areas.add(a);
      render();
    });
  });
  const dList = document.getElementById('dir-list');
  dList.innerHTML = DIRS.map(d => {
    const ct = PANELS.filter(p => p.diretoria === d.name).length;
    const active = state.dirs.has(d.name) ? 'active' : '';
    return `<div class="side-item dir-item ${active}" data-dir="${d.name}">
      <span class="dot" style="background:${dirHex(d.name)}"></span>
      <span class="name">${d.name}</span><span class="count">${ct}</span>
    </div>`;
  }).join('');
  dList.querySelectorAll('.side-item').forEach(el => {
    el.addEventListener('click', () => {
      const d = el.dataset.dir;
      if (state.dirs.has(d)) state.dirs.delete(d);else state.dirs.add(d);
      render();
    });
  });
  document.querySelectorAll('.status-cb').forEach(cb => {
    cb.checked = state.status.has(cb.value);
    cb.addEventListener('change', () => {
      if (cb.checked) state.status.add(cb.value);else state.status.delete(cb.value);
      render();
    });
  });
  document.querySelectorAll('.side-section .side-item[data-view]').forEach(el => {
    el.classList.toggle('active', el.dataset.view === state.view);
    el.addEventListener('click', () => {
      state.view = el.dataset.view;
      render();
    });
  });
  document.getElementById('ct-all').textContent = PANELS.length;
  document.getElementById('ct-fav').textContent = state.favs.size;
  document.getElementById('ct-rec').textContent = state.recent.length;
}

// ---- Filtro ----
function filterPanels() {
  let list = PANELS.slice();
  if (state.view === 'favoritos') list = list.filter(p => state.favs.has(p.id));
  if (state.view === 'recentes') {
    const recIds = state.recent;
    list = list.filter(p => recIds.includes(p.id));
    list.sort((a, b) => recIds.indexOf(a.id) - recIds.indexOf(b.id));
  }
  if (state.areas.size > 0) list = list.filter(p => state.areas.has(p.area));
  if (state.dirs.size > 0) list = list.filter(p => state.dirs.has(p.diretoria));
  if (state.status.size > 0) list = list.filter(p => state.status.has(p.status));
  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.area.toLowerCase().includes(q) || p.diretoria.toLowerCase().includes(q) || (p.owner || '').toLowerCase().includes(q));
  }
  if (state.view !== 'recentes') {
    const sortFns = {
      updated: (a, b) => parseUpdated(b.updated) - parseUpdated(a.updated),
      name: (a, b) => a.name.localeCompare(b.name, 'pt-BR'),
      area: (a, b) => a.area.localeCompare(b.area, 'pt-BR') || a.name.localeCompare(b.name, 'pt-BR'),
      diretoria: (a, b) => a.diretoria.localeCompare(b.diretoria, 'pt-BR') || a.name.localeCompare(b.name, 'pt-BR')
    };
    list.sort(sortFns[state.sort] || sortFns.updated);
  }
  return list;
}
function panelHref(p) {
  const u = new URL(p.file, location.href);
  u.searchParams.set('name', p.name);
  u.searchParams.set('area', p.area);
  u.searchParams.set('desc', p.desc);
  u.searchParams.set('updated', p.updated);
  return u.pathname + '?' + u.searchParams.toString();
}
function recordOpen(id) {
  state.recent = [id, ...state.recent.filter(x => x !== id)].slice(0, 12);
  persistRecent();
  document.getElementById('ct-rec').textContent = state.recent.length;
}

// ---- Iconografia inline (linear, traço 1.5) ----
const ICONS = {
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>',
  starFill: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>',
  extLink: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  pulse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2-5 4 10 2-5h6"/></svg>'
};

// ---- Card / row ----
function cardHTML(p) {
  const fav = state.favs.has(p.id);
  const accent = dirHex(p.diretoria);
  return `
    <a class="card" style="--card-accent:${accent}" href="${panelHref(p)}" data-id="${p.id}">
      <div class="card-top">
        <span class="card-area-tag">${p.area}</span>
        <div class="card-actions" onclick="event.stopPropagation()">
          <button class="icon-btn fav ${fav ? 'on' : ''}" data-fav="${p.id}" title="${fav ? 'Remover favorito' : 'Favoritar'}" aria-label="Favoritar">
            ${fav ? ICONS.starFill : ICONS.star}
          </button>
          <button class="icon-btn" data-newtab="${p.id}" title="Abrir em nova aba" aria-label="Abrir em nova aba">
            ${ICONS.extLink}
          </button>
        </div>
      </div>
      <h4 class="card-name">${p.name}</h4>
      <p class="card-desc">${p.desc}</p>
      <div class="card-foot">
        <span class="dir-tag"><span class="dot" style="background:${accent}"></span>${p.diretoria}</span>
        <span class="stat-pill ${p.status}"><span class="stat-dot"></span>${statusLabel(p.status)}</span>
        <span class="upd hub-mono">${relTime(p.updated)}</span>
      </div>
    </a>
  `;
}
function statusLabel(s) {
  return {
    ativo: 'no ar',
    beta: 'beta',
    descontinuado: 'descontinuado'
  }[s] || s;
}
function listRowHTML(p) {
  const fav = state.favs.has(p.id);
  const accent = dirHex(p.diretoria);
  return `
    <tr data-id="${p.id}" data-href="${panelHref(p)}">
      <td>
        <span class="row-bar" style="background:${accent}"></span>
        <div class="row-text">
          <span class="nm">${p.name}</span>
          <div class="ds">${p.desc}</div>
        </div>
      </td>
      <td class="hub-muted">${p.area}</td>
      <td>
        <span class="dir-tag"><span class="dot" style="background:${accent}"></span>${p.diretoria}</span>
      </td>
      <td><span class="stat-pill ${p.status}"><span class="stat-dot"></span>${statusLabel(p.status)}</span></td>
      <td class="hub-mono hub-muted">${p.updated}</td>
      <td class="row-actions" onclick="event.stopPropagation()">
        <button class="icon-btn fav ${fav ? 'on' : ''}" data-fav="${p.id}">${fav ? ICONS.starFill : ICONS.star}</button>
        <button class="icon-btn" data-newtab="${p.id}">${ICONS.extLink}</button>
      </td>
    </tr>
  `;
}

// ---- Render principal ----
function render() {
  document.querySelectorAll('.side-section .side-item[data-view]').forEach(el => {
    el.classList.toggle('active', el.dataset.view === state.view);
  });
  document.querySelectorAll('#area-list .side-item').forEach(el => {
    el.classList.toggle('active', state.areas.has(el.dataset.area));
  });
  document.querySelectorAll('#dir-list .side-item').forEach(el => {
    el.classList.toggle('active', state.dirs.has(el.dataset.dir));
  });
  document.getElementById('ct-fav').textContent = state.favs.size;
  document.getElementById('ct-rec').textContent = state.recent.length;
  const titles = {
    todos: 'Painéis',
    favoritos: 'Favoritos',
    recentes: 'Acessados recentemente'
  };
  const subtitles = {
    todos: 'Tudo em um lugar. Nada fora do lugar.',
    favoritos: 'Os painéis que você marcou.',
    recentes: 'O que você abriu nos últimos dias.'
  };
  const list = filterPanels();
  document.getElementById('page-title').textContent = titles[state.view] || 'Painéis';
  document.getElementById('page-sub').textContent = subtitles[state.view] || '';
  document.getElementById('result-count').textContent = list.length;
  document.querySelectorAll('#view-seg button').forEach(b => {
    b.classList.toggle('active', b.dataset.view === state.layout);
  });
  renderChips();

  // Favorites strip
  const favStrip = document.getElementById('fav-strip');
  const favRow = document.getElementById('fav-row');
  if (state.view === 'todos' && state.favs.size > 0 && !state.search && state.areas.size === 0 && state.dirs.size === 0) {
    favStrip.style.display = '';
    const favs = PANELS.filter(p => state.favs.has(p.id)).slice(0, 8);
    favRow.innerHTML = favs.map(p => {
      const accent = dirHex(p.diretoria);
      return `
        <a class="fav-pill" href="${panelHref(p)}" data-id="${p.id}" style="--card-accent:${accent}">
          <span class="fav-pill-bar"></span>
          <div class="fav-pill-body">
            <div class="fav-pill-name">${p.name}</div>
            <div class="fav-pill-meta hub-mono">${p.area} · ${relTime(p.updated)}</div>
          </div>
          <span class="fav-pill-icon">${ICONS.starFill}</span>
        </a>
      `;
    }).join('');
  } else {
    favStrip.style.display = 'none';
  }
  const results = document.getElementById('results');
  if (list.length === 0) {
    results.innerHTML = `
      <div class="empty-state">
        <div class="empty-glyph">${ICONS.pulse}</div>
        <b>Nada por aqui.</b>
        <div class="small">Ajuste os filtros ou limpe a busca.</div>
      </div>
    `;
    return;
  }
  if (state.layout === 'list') {
    results.innerHTML = `
      <div class="list-card">
        <table class="list">
          <thead>
            <tr>
              <th>Painel</th>
              <th>Área</th>
              <th>Diretoria</th>
              <th>Status</th>
              <th>Atualização</th>
              <th></th>
            </tr>
          </thead>
          <tbody>${list.map(listRowHTML).join('')}</tbody>
        </table>
      </div>
    `;
    results.querySelectorAll('tbody tr').forEach(tr => {
      tr.addEventListener('click', () => {
        recordOpen(tr.dataset.id);
        location.href = tr.dataset.href;
      });
    });
  } else {
    const grouped = state.view === 'todos' && state.areas.size === 0 && !state.search && state.dirs.size === 0;
    if (grouped) {
      const buckets = {};
      list.forEach(p => {
        (buckets[p.area] = buckets[p.area] || []).push(p);
      });
      const orderedAreas = AREAS.filter(a => buckets[a]);
      results.innerHTML = orderedAreas.map(a => `
        <section class="area-block">
          <header class="area-head">
            <span class="area-label">${a}</span>
            <span class="area-bar"></span>
            <span class="area-count hub-mono">${String(buckets[a].length).padStart(2, '0')}</span>
          </header>
          <div class="grid ${state.layout === 'large' ? 'large' : 'medium'}">
            ${buckets[a].map(cardHTML).join('')}
          </div>
        </section>
      `).join('');
    } else {
      results.innerHTML = `
        <div class="grid ${state.layout === 'large' ? 'large' : 'medium'}">
          ${list.map(cardHTML).join('')}
        </div>
      `;
    }
    results.querySelectorAll('.card').forEach(c => {
      c.addEventListener('click', e => {
        if (e.target.closest('button')) return;
        recordOpen(c.dataset.id);
      });
    });
  }
  results.querySelectorAll('[data-fav]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.dataset.fav;
      if (state.favs.has(id)) state.favs.delete(id);else state.favs.add(id);
      persistFavs();
      render();
    });
  });
  results.querySelectorAll('[data-newtab]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.dataset.newtab;
      const p = PANELS.find(x => x.id === id);
      if (p) {
        recordOpen(id);
        window.open(panelHref(p), '_blank', 'noopener');
      }
    });
  });
}
function renderChips() {
  const chips = [];
  if (state.search) chips.push({
    key: 'search',
    label: `"${state.search}"`
  });
  state.areas.forEach(a => chips.push({
    key: 'area:' + a,
    label: 'Área · ' + a
  }));
  state.dirs.forEach(d => chips.push({
    key: 'dir:' + d,
    label: 'Diretoria · ' + d
  }));
  const c = document.getElementById('chips');
  c.innerHTML = chips.map(x => `<span class="chip">${x.label}<span class="x" data-chip="${x.key}">×</span></span>`).join('');
  c.querySelectorAll('.x').forEach(x => {
    x.addEventListener('click', () => {
      const k = x.dataset.chip;
      if (k === 'search') {
        state.search = '';
        document.getElementById('search').value = '';
      } else if (k.startsWith('area:')) state.areas.delete(k.slice(5));else if (k.startsWith('dir:')) state.dirs.delete(k.slice(4));
      render();
    });
  });
}

// ---- Eventos ----
document.getElementById('search').addEventListener('input', e => {
  state.search = e.target.value;
  render();
});
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    document.getElementById('search').focus();
  }
  if (e.key === 'Escape' && document.activeElement.id === 'search') {
    state.search = '';
    document.getElementById('search').value = '';
    document.getElementById('search').blur();
    render();
  }
});
document.getElementById('sort').addEventListener('change', e => {
  state.sort = e.target.value;
  render();
});
document.querySelectorAll('#view-seg button').forEach(b => {
  b.addEventListener('click', () => {
    state.layout = b.dataset.view;
    persistView();
    render();
  });
});
document.getElementById('clear').addEventListener('click', () => {
  state.search = '';
  state.areas.clear();
  state.dirs.clear();
  state.status = new Set(['ativo', 'beta']);
  state.view = 'todos';
  document.getElementById('search').value = '';
  renderSidebar();
  render();
});

// ---- Live clock ----
function tickClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  el.textContent = `${hh}:${mm}`;
}
tickClock();
setInterval(tickClock, 30000);
renderSidebar();
render();
})(); } catch (e) { __ds_ns.__errors.push({ path: "hub/hub.js", error: String((e && e.message) || e) }); }

// portal/data.js
try { (() => {
// Catálogo de painéis do portal C&S
// Para adicionar um novo painel: copie um item, ajuste id/name/file/area.
window.CS_PANELS = [{
  id: 'fat-resumo',
  name: 'Resumo do Faturamento',
  desc: 'Faturamento bruto, líquido, CMV e margem por diretoria. Drill-down até RCA.',
  area: 'Faturamento',
  diretoria: 'Todas',
  owner: 'Controladoria',
  updated: '20/04/2026 17:10',
  status: 'ativo',
  file: 'paineis/fat-resumo.html'
}, {
  id: 'fat-meta',
  name: 'Meta vs. Realizado',
  desc: 'Atingimento de meta mensal por supervisor e RCA, com semáforo de performance.',
  area: 'Faturamento',
  diretoria: 'Distribuição',
  owner: 'Comercial',
  updated: '20/04/2026 14:32',
  status: 'ativo',
  file: 'paineis/_template.html'
}, {
  id: 'fat-margem',
  name: 'Análise de Margem',
  desc: 'Margem por linha de produto, fornecedor e cliente. Inclui devoluções.',
  area: 'Faturamento',
  diretoria: 'Todas',
  owner: 'Controladoria',
  updated: '19/04/2026 22:05',
  status: 'ativo',
  file: 'paineis/_template.html'
}, {
  id: 'fat-bonif',
  name: 'Bonificações',
  desc: 'P_BONIFICACAO=1 — relatório informativo de bonificações concedidas.',
  area: 'Faturamento',
  diretoria: 'Mondelez',
  owner: 'Comercial',
  updated: '18/04/2026 09:15',
  status: 'beta',
  file: 'paineis/_template.html'
}, {
  id: 'est-posicao',
  name: 'Posição de Estoque',
  desc: 'Saldo atual por filial, curva ABC e cobertura em dias.',
  area: 'Estoque',
  diretoria: 'Todas',
  owner: 'Logística',
  updated: '20/04/2026 06:00',
  status: 'ativo',
  file: 'paineis/_template.html'
}, {
  id: 'est-rupturas',
  name: 'Rupturas e Faltas',
  desc: 'Itens em ruptura por diretoria com sugestão de reposição.',
  area: 'Estoque',
  diretoria: 'Bahia Fort',
  owner: 'Logística',
  updated: '20/04/2026 06:00',
  status: 'ativo',
  file: 'paineis/_template.html'
}, {
  id: 'est-validade',
  name: 'Controle de Validade',
  desc: 'Produtos com vencimento em até 90 dias por filial.',
  area: 'Estoque',
  diretoria: 'Todas',
  owner: 'Logística',
  updated: '19/04/2026 18:40',
  status: 'ativo',
  file: 'paineis/_template.html'
}, {
  id: 'com-carteira',
  name: 'Carteira de Pedidos',
  desc: 'Pedidos previstos no mês corrente (POSICAO NOT IN F,C).',
  area: 'Comercial',
  diretoria: 'Todas',
  owner: 'Comercial',
  updated: '20/04/2026 16:55',
  status: 'ativo',
  file: 'paineis/_template.html'
}, {
  id: 'com-positivacao',
  name: 'Positivação de Clientes',
  desc: 'Clientes ativos no mês vs. base total. Análise por RCA.',
  area: 'Comercial',
  diretoria: 'Master',
  owner: 'Comercial',
  updated: '20/04/2026 12:00',
  status: 'ativo',
  file: 'paineis/_template.html'
}, {
  id: 'com-mix',
  name: 'Mix de Produtos por RCA',
  desc: 'Diversidade de SKUs vendidos por representante.',
  area: 'Comercial',
  diretoria: 'Atacado Esp.',
  owner: 'Comercial',
  updated: '17/04/2026 09:00',
  status: 'beta',
  file: 'paineis/_template.html'
}, {
  id: 'log-roteiros',
  name: 'Roteirização',
  desc: 'Eficiência de rotas, entregas no prazo e km/entrega.',
  area: 'Logística',
  diretoria: 'Distribuição',
  owner: 'Logística',
  updated: '19/04/2026 23:50',
  status: 'ativo',
  file: 'paineis/_template.html'
}, {
  id: 'log-devolucoes',
  name: 'Devoluções',
  desc: 'Volume e motivo de devoluções por filial e RCA.',
  area: 'Logística',
  diretoria: 'Todas',
  owner: 'Logística',
  updated: '19/04/2026 20:10',
  status: 'ativo',
  file: 'paineis/_template.html'
}, {
  id: 'fin-recebiveis',
  name: 'Contas a Receber',
  desc: 'Aging de recebíveis, inadimplência por cliente e prazo médio.',
  area: 'Financeiro',
  diretoria: 'Todas',
  owner: 'Financeiro',
  updated: '20/04/2026 08:00',
  status: 'ativo',
  file: 'paineis/_template.html'
}, {
  id: 'fin-fluxo',
  name: 'Fluxo de Caixa',
  desc: 'Projeção de caixa 30/60/90 dias com cenários.',
  area: 'Financeiro',
  diretoria: 'Todas',
  owner: 'Financeiro',
  updated: '19/04/2026 19:45',
  status: 'ativo',
  file: 'paineis/_template.html'
}, {
  id: 'fin-impostos',
  name: 'Impostos & Tributos',
  desc: 'PIS/COFINS, ICMS por operação. Controle de apuração mensal.',
  area: 'Financeiro',
  diretoria: 'Todas',
  owner: 'Fiscal',
  updated: '15/04/2026 11:20',
  status: 'descontinuado',
  file: 'paineis/_template.html'
}, {
  id: 'rh-headcount',
  name: 'Headcount & Turnover',
  desc: 'Quadro de funcionários por diretoria, admissões e desligamentos.',
  area: 'RH',
  diretoria: 'Todas',
  owner: 'Recursos Humanos',
  updated: '15/04/2026 09:00',
  status: 'ativo',
  file: 'paineis/_template.html'
}, {
  id: 'rh-comissoes',
  name: 'Comissões da Força de Vendas',
  desc: 'Comissões por RCA com base em meta e mix.',
  area: 'RH',
  diretoria: 'Todas',
  owner: 'Recursos Humanos',
  updated: '20/04/2026 07:30',
  status: 'ativo',
  file: 'paineis/_template.html'
}, {
  id: 'comp-precos',
  name: 'Preço de Venda',
  desc: 'Política de preço por linha e cliente. Descontos concedidos.',
  area: 'Compras & Preços',
  diretoria: 'Todas',
  owner: 'Comercial',
  updated: '18/04/2026 14:00',
  status: 'ativo',
  file: 'paineis/_template.html'
}, {
  id: 'comp-fornec',
  name: 'Performance de Fornecedores',
  desc: 'OTIF, lead time e qualidade por fornecedor.',
  area: 'Compras & Preços',
  diretoria: 'CMA',
  owner: 'Compras',
  updated: '17/04/2026 16:25',
  status: 'beta',
  file: 'paineis/_template.html'
}, {
  id: 'dir-suporte',
  name: 'Operação Suporte',
  desc: 'Indicadores da diretoria Suporte. KPIs de back-office.',
  area: 'Diretorias',
  diretoria: 'Suporte',
  owner: 'Diretoria Suporte',
  updated: '14/04/2026 18:00',
  status: 'ativo',
  file: 'paineis/_template.html'
}];
window.CS_AREAS = ['Faturamento', 'Estoque', 'Comercial', 'Logística', 'Financeiro', 'RH', 'Compras & Preços', 'Diretorias'];
window.CS_DIRETORIAS = [{
  name: 'Distribuição',
  color: '#1565C0'
}, {
  name: 'Master',
  color: '#2E7D32'
}, {
  name: 'Mondelez',
  color: '#7B1FA2'
}, {
  name: 'Bahia Fort',
  color: '#E65100'
}, {
  name: 'CMA',
  color: '#00838F'
}, {
  name: 'Atacado Esp.',
  color: '#C62828'
}, {
  name: 'Suporte',
  color: '#795548'
}, {
  name: 'Todas',
  color: '#546E7A'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "portal/data.js", error: String((e && e.message) || e) }); }

// portal/portal.js
try { (() => {
/* ====================================================================
   Portal de Painéis — Cabral & Sousa
   Lógica de filtros, busca, favoritos, recentes, troca de view
   ==================================================================== */

const PANELS = window.CS_PANELS || [];
const AREAS = window.CS_AREAS || [];
const DIRS = window.CS_DIRETORIAS || [];
const LS_FAVS = 'cs_favs';
const LS_REC = 'cs_recent';
const LS_VIEW = 'cs_view';
const LS_SESS = 'cs_session';

// ---- Sessão ----
function getSession() {
  try {
    return JSON.parse(localStorage.getItem(LS_SESS) || 'null');
  } catch {
    return null;
  }
}
function requireSession() {
  const s = getSession();
  if (!s || !s.user) {
    location.href = 'login.html';
    return null;
  }
  return s;
}
const session = requireSession();
if (session) {
  const av = document.getElementById('avatar');
  const initials = (session.user || 'JC').slice(0, 2).toUpperCase();
  av.textContent = initials;
  av.title = 'Logado: ' + session.user;
}
document.getElementById('logout').addEventListener('click', e => {
  e.preventDefault();
  if (confirm('Sair da sua sessão?')) {
    localStorage.removeItem(LS_SESS);
    location.href = 'login.html';
  }
});

// ---- Estado ----
const state = {
  search: '',
  view: 'todos',
  // todos | favoritos | recentes
  layout: localStorage.getItem(LS_VIEW) || 'grid',
  // grid | large | list
  sort: 'updated',
  areas: new Set(),
  // empty = todas
  dirs: new Set(),
  status: new Set(['ativo', 'beta']),
  favs: new Set(JSON.parse(localStorage.getItem(LS_FAVS) || '[]')),
  recent: JSON.parse(localStorage.getItem(LS_REC) || '[]')
};
function persistFavs() {
  localStorage.setItem(LS_FAVS, JSON.stringify([...state.favs]));
}
function persistRecent() {
  localStorage.setItem(LS_REC, JSON.stringify(state.recent.slice(0, 12)));
}
function persistView() {
  localStorage.setItem(LS_VIEW, state.layout);
}

// ---- Helpers ----
function dirColor(name) {
  const d = DIRS.find(x => x.name === name);
  return d ? d.color : '#546E7A';
}
function parseUpdated(s) {
  // "20/04/2026 17:10" -> Date
  const m = s.match(/(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2}))?/);
  if (!m) return new Date(0);
  return new Date(+m[3], +m[2] - 1, +m[1], +(m[4] || 0), +(m[5] || 0));
}

// ---- Sidebar render ----
function renderSidebar() {
  // Áreas
  const aList = document.getElementById('area-list');
  aList.innerHTML = AREAS.map(a => {
    const ct = PANELS.filter(p => p.area === a).length;
    const active = state.areas.has(a) ? 'active' : '';
    return `<div class="side-item ${active}" data-area="${a}">
      <span class="name">${a}</span><span class="count">${ct}</span>
    </div>`;
  }).join('');
  aList.querySelectorAll('.side-item').forEach(el => {
    el.addEventListener('click', () => {
      const a = el.dataset.area;
      if (state.areas.has(a)) state.areas.delete(a);else state.areas.add(a);
      render();
    });
  });

  // Diretorias
  const dList = document.getElementById('dir-list');
  dList.innerHTML = DIRS.map(d => {
    const ct = PANELS.filter(p => p.diretoria === d.name).length;
    const active = state.dirs.has(d.name) ? 'active' : '';
    return `<div class="side-item dir-item ${active}" data-dir="${d.name}">
      <span class="swatch" style="background:${d.color}"></span>
      <span class="name">${d.name}</span><span class="count">${ct}</span>
    </div>`;
  }).join('');
  dList.querySelectorAll('.side-item').forEach(el => {
    el.addEventListener('click', () => {
      const d = el.dataset.dir;
      if (state.dirs.has(d)) state.dirs.delete(d);else state.dirs.add(d);
      render();
    });
  });

  // Status
  document.querySelectorAll('.status-cb').forEach(cb => {
    cb.checked = state.status.has(cb.value);
    cb.addEventListener('change', () => {
      if (cb.checked) state.status.add(cb.value);else state.status.delete(cb.value);
      render();
    });
  });

  // Visão
  document.querySelectorAll('.side-section .side-item[data-view]').forEach(el => {
    el.classList.toggle('active', el.dataset.view === state.view);
    el.addEventListener('click', () => {
      state.view = el.dataset.view;
      render();
    });
  });
  document.getElementById('ct-all').textContent = PANELS.length;
  document.getElementById('ct-fav').textContent = state.favs.size;
  document.getElementById('ct-rec').textContent = state.recent.length;
}

// ---- Filtragem ----
function filterPanels() {
  let list = PANELS.slice();
  if (state.view === 'favoritos') list = list.filter(p => state.favs.has(p.id));
  if (state.view === 'recentes') {
    const recIds = state.recent;
    list = list.filter(p => recIds.includes(p.id));
    list.sort((a, b) => recIds.indexOf(a.id) - recIds.indexOf(b.id));
  }
  if (state.areas.size > 0) list = list.filter(p => state.areas.has(p.area));
  if (state.dirs.size > 0) list = list.filter(p => state.dirs.has(p.diretoria));
  if (state.status.size > 0) list = list.filter(p => state.status.has(p.status));
  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.area.toLowerCase().includes(q) || p.diretoria.toLowerCase().includes(q) || (p.owner || '').toLowerCase().includes(q));
  }
  if (state.view !== 'recentes') {
    const sortFns = {
      updated: (a, b) => parseUpdated(b.updated) - parseUpdated(a.updated),
      name: (a, b) => a.name.localeCompare(b.name, 'pt-BR'),
      area: (a, b) => a.area.localeCompare(b.area, 'pt-BR') || a.name.localeCompare(b.name, 'pt-BR'),
      diretoria: (a, b) => a.diretoria.localeCompare(b.diretoria, 'pt-BR') || a.name.localeCompare(b.name, 'pt-BR')
    };
    list.sort(sortFns[state.sort] || sortFns.updated);
  }
  return list;
}

// ---- Card / row builder ----
function panelHref(p) {
  const u = new URL(p.file, location.href);
  u.searchParams.set('name', p.name);
  u.searchParams.set('area', p.area);
  u.searchParams.set('desc', p.desc);
  u.searchParams.set('updated', p.updated);
  return u.pathname.replace(/^.*\/portal\//, '') + '?' + u.searchParams.toString();
}
function recordOpen(id) {
  state.recent = [id, ...state.recent.filter(x => x !== id)].slice(0, 12);
  persistRecent();
  document.getElementById('ct-rec').textContent = state.recent.length;
}
function cardHTML(p) {
  const fav = state.favs.has(p.id);
  const accent = dirColor(p.diretoria);
  return `
    <a class="card" style="--card-accent:${accent}" href="${panelHref(p)}" data-id="${p.id}">
      <div class="card-top">
        <div class="card-area-tag">${p.area}</div>
        <div class="card-actions">
          <button class="icon-btn fav ${fav ? 'on' : ''}" data-fav="${p.id}" title="Favoritar" aria-label="Favoritar">
            <svg viewBox="0 0 24 24" fill="${fav ? 'currentColor' : 'none'}" stroke="currentColor"><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>
          </button>
          <button class="icon-btn" data-newtab="${p.id}" title="Abrir em nova aba" aria-label="Abrir em nova aba">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 14v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></svg>
          </button>
        </div>
      </div>
      <h4 class="card-name">${p.name}</h4>
      <p class="card-desc">${p.desc}</p>
      <div class="card-foot">
        <span class="dir-tag"><span class="swatch" style="background:${accent}"></span>${p.diretoria}</span>
        <span class="stat-pill ${p.status}">${p.status}</span>
        <span class="upd">⌚ ${p.updated}</span>
      </div>
    </a>
  `;
}
function listRowHTML(p) {
  const fav = state.favs.has(p.id);
  const accent = dirColor(p.diretoria);
  return `
    <tr data-id="${p.id}" data-href="${panelHref(p)}">
      <td>
        <span class="accent-bar" style="--card-accent:${accent}"></span>
        <span class="nm">${p.name}</span>
        <div class="ds">${p.desc}</div>
      </td>
      <td style="font-weight:700;color:${accent}">${p.area}</td>
      <td><span class="dir-tag" style="display:inline-flex;gap:5px;align-items:center;font-weight:600;">
        <span style="width:8px;height:8px;border-radius:2px;background:${accent}"></span>${p.diretoria}
      </span></td>
      <td><span class="stat-pill ${p.status}">${p.status}</span></td>
      <td style="font-variant-numeric:tabular-nums;color:var(--cs-fg-muted);">${p.updated}</td>
      <td class="row-actions" onclick="event.stopPropagation()">
        <button class="icon-btn fav ${fav ? 'on' : ''}" data-fav="${p.id}" title="Favoritar">
          <svg viewBox="0 0 24 24" fill="${fav ? 'currentColor' : 'none'}" stroke="currentColor"><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>
        </button>
        <button class="icon-btn" data-newtab="${p.id}" title="Nova aba">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 14v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></svg>
        </button>
      </td>
    </tr>
  `;
}

// ---- Render ----
function render() {
  // Sidebar active states
  document.querySelectorAll('.side-section .side-item[data-view]').forEach(el => {
    el.classList.toggle('active', el.dataset.view === state.view);
  });
  document.querySelectorAll('#area-list .side-item').forEach(el => {
    el.classList.toggle('active', state.areas.has(el.dataset.area));
  });
  document.querySelectorAll('#dir-list .side-item').forEach(el => {
    el.classList.toggle('active', state.dirs.has(el.dataset.dir));
  });
  document.getElementById('ct-fav').textContent = state.favs.size;
  document.getElementById('ct-rec').textContent = state.recent.length;

  // Title
  const titles = {
    todos: 'Todos os painéis',
    favoritos: 'Favoritos',
    recentes: 'Recentes'
  };
  const list = filterPanels();
  document.querySelector('.toolbar h2').firstChild.textContent = titles[state.view] || 'Painéis';
  document.getElementById('result-count').textContent = `(${list.length})`;

  // View seg
  document.querySelectorAll('#view-seg button').forEach(b => {
    b.classList.toggle('active', b.dataset.view === state.layout);
  });

  // Chips
  renderChips();

  // Favorites strip — só na visão "todos"
  const favStrip = document.getElementById('fav-strip');
  const favRow = document.getElementById('fav-row');
  if (state.view === 'todos' && state.favs.size > 0) {
    favStrip.style.display = '';
    const favs = PANELS.filter(p => state.favs.has(p.id)).slice(0, 8);
    favRow.innerHTML = favs.map(p => `
      <a class="fav-pill" href="${panelHref(p)}" data-id="${p.id}">
        <span class="star">★</span>
        <div style="flex:1;min-width:0;">
          <div class="name" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${p.name}</div>
          <div class="area">${p.area}</div>
        </div>
        <span style="width:8px;height:8px;border-radius:2px;background:${dirColor(p.diretoria)};"></span>
      </a>
    `).join('');
  } else {
    favStrip.style.display = 'none';
  }

  // Results
  const results = document.getElementById('results');
  if (list.length === 0) {
    results.innerHTML = `
      <div class="empty-state">
        <b>Nenhum painel encontrado</b>
        <div class="small">Ajuste os filtros laterais ou limpe a busca para ver mais resultados.</div>
      </div>
    `;
    return;
  }
  if (state.layout === 'list') {
    results.innerHTML = `
      <div class="list-card">
        <table class="list">
          <thead>
            <tr>
              <th>Painel</th>
              <th>Área</th>
              <th>Diretoria</th>
              <th>Status</th>
              <th>Atualização</th>
              <th></th>
            </tr>
          </thead>
          <tbody>${list.map(listRowHTML).join('')}</tbody>
        </table>
      </div>
    `;
    results.querySelectorAll('tbody tr').forEach(tr => {
      tr.addEventListener('click', () => {
        recordOpen(tr.dataset.id);
        location.href = tr.dataset.href;
      });
    });
  } else {
    // Group by area when view = todos AND there are no chip filters
    const grouped = state.view === 'todos' && state.areas.size === 0 && !state.search && state.dirs.size === 0;
    if (grouped) {
      // Group by area
      const buckets = {};
      list.forEach(p => {
        (buckets[p.area] = buckets[p.area] || []).push(p);
      });
      const orderedAreas = AREAS.filter(a => buckets[a]);
      results.innerHTML = orderedAreas.map(a => `
        <div class="area-block">
          <div class="area-head">
            <span class="label">${a}</span>
            <span class="bar"></span>
            <span class="ct">${buckets[a].length} ${buckets[a].length === 1 ? 'painel' : 'painéis'}</span>
          </div>
          <div class="grid ${state.layout === 'large' ? 'large' : 'medium'}">
            ${buckets[a].map(cardHTML).join('')}
          </div>
        </div>
      `).join('');
    } else {
      results.innerHTML = `
        <div class="grid ${state.layout === 'large' ? 'large' : 'medium'}">
          ${list.map(cardHTML).join('')}
        </div>
      `;
    }
    // Card click → record + navigate (default link works, but we record)
    results.querySelectorAll('.card').forEach(c => {
      c.addEventListener('click', e => {
        // Allow buttons to handle their own clicks
        if (e.target.closest('button')) return;
        recordOpen(c.dataset.id);
      });
    });
  }

  // Hook up icon buttons (delegate-style for both grid & list)
  results.querySelectorAll('[data-fav]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.dataset.fav;
      if (state.favs.has(id)) state.favs.delete(id);else state.favs.add(id);
      persistFavs();
      render();
    });
  });
  results.querySelectorAll('[data-newtab]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.dataset.newtab;
      const p = PANELS.find(x => x.id === id);
      if (p) {
        recordOpen(id);
        window.open(panelHref(p), '_blank', 'noopener');
      }
    });
  });
}
function renderChips() {
  const chips = [];
  if (state.search) chips.push({
    key: 'search',
    label: `"${state.search}"`
  });
  state.areas.forEach(a => chips.push({
    key: 'area:' + a,
    label: 'Área: ' + a
  }));
  state.dirs.forEach(d => chips.push({
    key: 'dir:' + d,
    label: 'Diretoria: ' + d
  }));
  const c = document.getElementById('chips');
  c.innerHTML = chips.map(x => `<span class="chip">${x.label}<span class="x" data-chip="${x.key}">×</span></span>`).join('');
  c.querySelectorAll('.x').forEach(x => {
    x.addEventListener('click', () => {
      const k = x.dataset.chip;
      if (k === 'search') {
        state.search = '';
        document.getElementById('search').value = '';
      } else if (k.startsWith('area:')) state.areas.delete(k.slice(5));else if (k.startsWith('dir:')) state.dirs.delete(k.slice(4));
      render();
    });
  });
}

// ---- Eventos globais ----
document.getElementById('search').addEventListener('input', e => {
  state.search = e.target.value;
  render();
});
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    document.getElementById('search').focus();
  }
  if (e.key === 'Escape' && document.activeElement.id === 'search') {
    state.search = '';
    document.getElementById('search').value = '';
    document.getElementById('search').blur();
    render();
  }
});
document.getElementById('sort').addEventListener('change', e => {
  state.sort = e.target.value;
  render();
});
document.querySelectorAll('#view-seg button').forEach(b => {
  b.addEventListener('click', () => {
    state.layout = b.dataset.view;
    persistView();
    render();
  });
});
document.getElementById('clear').addEventListener('click', () => {
  state.search = '';
  state.areas.clear();
  state.dirs.clear();
  state.status = new Set(['ativo', 'beta']);
  state.view = 'todos';
  document.getElementById('search').value = '';
  renderSidebar();
  render();
});

// ---- Init ----
renderSidebar();
render();
})(); } catch (e) { __ds_ns.__errors.push({ path: "portal/portal.js", error: String((e && e.message) || e) }); }

// tweaks-panel.jsx
try { (() => {
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;

  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}
function TweakColor({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
    type: "color",
    className: "twk-swatch",
    value: value,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "tweaks-panel.jsx", error: String((e && e.message) || e) }); }

})();
