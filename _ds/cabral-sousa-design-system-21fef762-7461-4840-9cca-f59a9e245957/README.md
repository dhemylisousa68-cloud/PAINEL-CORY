# Cabral & Sousa — Design System

> Visual + interaction system extracted from the internal **Faturamento** (billing/revenue) dashboard for Cabral & Sousa, a Brazilian wholesale distribution company.

---

## Product Context

**Cabral & Sousa (C&S)** is a Brazilian atacadista/distribuidor (wholesaler / distributor) operating across multiple regions of Bahia and the Brazilian Northeast. The data this system was built to visualize covers **seven diretorias** (business divisions):

- **DISTRIBUIÇÃO** (Distribution) — #1565C0 blue
- **MASTER** — #2E7D32 green
- **MONDELEZ** (exclusive Mondelez operation) — #7B1FA2 purple
- **BAHIA FORT** — #E65100 orange
- **CMA** — #00838F teal
- **ATACADO ESPECIALIZADO** (Specialized Wholesale) — #C62828 red
- **SUPORTE** (Support) — #795548 brown

The hierarchy is: **Diretoria → Gerência → Supervisor → RCA** (sales rep). Data flows from **WinThor Rotina 111 / FUNC_RESUMOFATURAMENTO**, an ERP used in Brazilian distribution.

### The product
A single-page, **dense analytical dashboard** that summarizes monthly billing (faturamento) performance across the company. It is an internal operational tool, used by leadership and supervisors to monitor:

- Gross & net revenue (Faturamento Bruto / Líquido)
- CMV (cost of goods sold) and gross profit
- Margin % (with green/yellow/red semantic thresholds at 10% / 5%)
- Meta (target) vs actual, with % attainment
- Pending orders ("carteira"), bonifications, pricing discounts
- Operational metrics: NFs (fiscal notes), positivados (active clients), average payment term

The UI is **information-dense** — 20-column tables, drill-down from diretoria all the way to individual RCA, KPI grids stacked tight. The aesthetic is **corporate-clean, not playful**: lots of data, clear hierarchy through red accent borders, minimal decoration.

---

## Sources

- `uploads/Dashboard_Faturamento_2026.html` — the primary source. A self-contained HTML dashboard with baked-in CSS tokens, a Nunito/Poppins font stack, Chart.js integration, a multi-level expandable table, KPI cards, directorate filter pills, and a month selector. All data, color tokens, and component patterns in this system are extracted from it. Internal reference: *Rotina 111*, doc dated 2026-03-20.

No Figma or codebase was provided — all components here are reconstructed from the source HTML.

---

## Index

- [`README.md`](README.md) — this file
- [`SKILL.md`](SKILL.md) — skill manifest (Agent Skills compatible)
- [`colors_and_type.css`](colors_and_type.css) — design tokens: colors, typography, spacing, shadows, radii
- [`fonts/`](fonts/) — (none — fonts loaded from Google Fonts CDN: Nunito + Poppins)
- [`assets/`](assets/) — logos & imagery (placeholder C&S wordmark SVG — see Iconography)
- [`preview/`](preview/) — design-system cards shown in the Design System tab
- [`ui_kits/dashboard/`](ui_kits/dashboard/) — interactive UI kit recreating the billing dashboard

---

## Content Fundamentals

The product speaks **Brazilian Portuguese** throughout. Copy is **terse, operational, and professional** — this is an internal finance/ops tool, not a consumer app.

### Tone & voice
- **Third-person / impersonal.** No "você" or "nós" — the UI describes data, it doesn't address the user. Labels like "Fat. Bruto", "Lucro / VL", "Ocultar sem faturamento".
- **Factual, no marketing.** Numbers speak. No persuasive copy, no emoji, no exclamation marks.
- **Abbreviation-heavy.** Screen real estate is scarce. "Fat." for Faturamento, "VL" for Valor Líquido, "VB" for Valor Bruto, "MM" for milhões, "Dev." for Devolução, "CMV" for Custo de Mercadoria Vendida, "NFs" for Notas Fiscais, "Pos." for Positivados.
- **Technical jargon is expected.** Users are domain-literate — "Rotina 111", "Bonificação", "P_BONIFICACAO=1", "POSICAO NOT IN('F','C')". The footer lists SQL-flavored parameters without translation.

### Casing
- **UPPERCASE for category labels** with letter-spacing: `FATURAMENTO`, `RESULTADO`, `META DO PERÍODO`, `PEDIDOS DO MÊS`.
- **Title Case for action/button text** in directorate pills: `Distribuição`, `Master`, `Mondelez`, `Bahia Fort`.
- **ALLCAPS for table column headers** with small letter-spacing: `SUPERVISOR`, `META`, `% ATING.`.
- **Sentence case for inline help text** and timestamps: `Última atualização: 20/04/2026 17:10`.
- **UPPERCASE for diretoria names in data**: `DIREÇÃO DISTRIBUIÇÃO`, `DIREÇÃO MONDELEZ`.

### Example copy
- Header subtitle: *"Por Supervisor · Filial: Todas · Fev/2026 faturado · Carteira: Pedidos previstos Mar/2026 · Bonificação: informativo"*
- KPI sub-labels: *"VB − Devoluções"*, *"Lucro / VL"*, *"Fat. Líq. / Meta"*, *"Ponderado por VL"*
- Warning footer: *"⚠ ATENÇÃO: Fat. Líquido (VL) = faturamento comercial líquido de devoluções. NÃO deduz PIS/COFINS/ICMS — não equivale a receita líquida contábil."*
- Empty state: *"Sem dados de RCA para este período"*

### Punctuation tics
- **Middle dot (·)** separates metadata: `Rotina 111 · FUNC_RESUMOFATURAMENTO · Jan–Abr/2026`
- **Em-dash (—)** for definitions: `Fat. Líquido (VL) = faturamento comercial líquido de devoluções`
- **Slash (/)** for ratios and labels: `Lucro / VL`, `Fat. Líq. / Meta`, `Jan/26`
- **Star (★)** to mark partial/provisional periods: `Abr/26 ★ parcial (até 20/04)`

### Emoji
- **None** in UI copy. Only UTF symbols as functional glyphs: `⇅` (sort), `⛶` (fullscreen), `▾` (dropdown), `✓` (confirmation), `↓ ↑` (sort direction), `▶` (expand), `⚠` (warning).

---

## Visual Foundations

### Overall vibe
**Dense, corporate-red, all-business.** This is a power-user tool. It prioritizes information density and scannability over whitespace and delight. The red accent is strong and declarative — it saturates the header, borders KPIs, and pops through the interface — but the body is calm: whites, light grays, and small type.

### Color system
- **Primary red:** `#FF0000` (C&S signature) — used for the main header bar, active states, accent borders on key KPIs, primary buttons.
- **Darker red variant:** `#CC0000` — paired with primary for gradients, hovers, and shadows (`rgba(217,48,37,.4)` matches this tone).
- **Neutral foundation:** background `#F4F5F7`, cards `#FFFFFF`, borders `#E0E4EA`, text `#1A1A2E`, muted text `#6B7280`.
- **Semantic (margin pills):** green `#1B7F3E` (≥10%), yellow `#C87A00` (5-10%), red `#C0392B` (<5%).
- **Semantic accent colors on KPIs:** meta/target `#059669`, carteira cyan `#06b6d4`, vendido orange `#d97706`, aberto amber `#fbbf24`, prazo blue `#0077b6`, bonificação purple `#7c3aed`.
- **Diretoria palette** (7 colors, each a deep, saturated Material-700-ish tone): Distribuição `#1565C0`, Mondelez `#7B1FA2`, Bahia Fort `#E65100`, Master `#2E7D32`, CMA `#00838F`, Atacado Esp. `#C62828`, Suporte `#795548`. Used in directorate pills, drill-down table rows, and card left-borders.

### Typography
- **Primary:** Nunito (400, 500, 600, 700, 800, 900) — used for nearly everything. It's rounded, friendly-but-professional.
- **Secondary:** Poppins (400, 500, 600, 700, 900) — used as a fallback and for some display treatments.
- **Body size is small:** base is `13px`, KPI values `19px`, table cells `11px`, labels `9–10px`. This is a DESKTOP-ONLY, DATA-DENSE app — do NOT scale up text when using this system.
- **Heavy weight contrast:** labels are 600–700, numbers are 700, category labels are 700 uppercase with 1px letter-spacing.

### Spacing
- Base unit: **4px**. Common values: 4, 6, 8, 10, 12, 14, 16, 20, 24, 28.
- Page horizontal padding: **28px** (generous for a dense app, but consistent).
- Card padding: **10–16px** (tight).
- Gaps between KPIs: **8px**. Gaps between KPI groups: **24px**.
- Table row padding: **6–9px vertical**, **8–10px horizontal**.

### Backgrounds
- **Solid flat colors only.** No gradients (except two subtle ones: the directorate pill active state has a soft box-shadow tint, and a sticky red header has `rgba(217,48,37,.4)` shadow).
- **No hand-drawn illustrations, patterns, textures, or imagery.** This is a numerical dashboard — backgrounds exist only to separate content regions. Page bg `#F4F5F7`, card bg `#FFFFFF`, table header strip `#F8F9FB`, hover `#FEFAFA` (a barely-pink tint).
- **No full-bleed hero images.**

### Borders & radii
- **Border color:** `#E0E4EA` (cool-tinted light gray). All cards, inputs, table dividers use this.
- **Inner dividers in tables:** `#F0F2F5` / `#F3F4F6` (even lighter).
- **Radii:** buttons/inputs `5–6px`, pills `20px` (fully rounded), cards `10–12px`, small badges `3–10px`, mini progress bars `2px`.
- **Accent left-borders:** `4px solid var(--r)` on KPIs marked `.accent`. Directorate cards have a `4px solid [dir-color]` left border. This is the product's main decorative device.

### Shadows
- **Soft, short shadows only.** Never dramatic.
- Card shadow: `0 1px 3px rgba(0,0,0,.05)` or `0 1px 5px rgba(0,0,0,.07)` or `0 1px 4px rgba(0,0,0,.06)`.
- Header shadow (more prominent): `0 2px 8px rgba(217,48,37,.4)` — red-tinted since the header is red.
- Active pill shadow: `0 2px 6px rgba([dir-color],.25-.3)` — colored shadow matching the pill's own fill.
- Dropdown shadow (deeper, for popovers): `0 6px 20px rgba(0,0,0,.15)`.

### Transparency & blur
- **No backdrop blur anywhere.** No frosted glass, no translucent nav.
- **Transparency is used as tint** on directorate row backgrounds: `${color}1A` (10% alpha) for gerência rows, `${color}0D` (5% alpha) for supervisor rows. This builds a subtle hierarchy through color-bleeding.

### Animation
- **Minimal and functional.** No bouncy easing, no fancy parallax.
- Hover transitions: `.15s` and `.1s` — fast, utilitarian. Applied to pills, buttons, ms-drop labels, filter btn groups.
- Expand/collapse arrow: `transform: rotate(90deg)` with `.15s transition`.
- No fade-ins, no stagger. No Framer Motion. No Lottie.

### Hover / press states
- **Primary pattern:** background → primary red, text → white (`.btn:hover`, `.tbl-ctrl-btn:hover`).
- **Pills (inactive):** border + text turn to the pill's color family (e.g., red for month pills, blue for diretoria pills).
- **Sort headers:** color → red.
- **Table rows (supervisor):** `filter: brightness(0.94)` — subtle dimming.
- **Multi-select labels:** `background: #FEF2F2` (very pale red tint).
- **Press state:** none explicitly — hover & active share the same intensified red look.

### Layout rules
- **Sticky red header** at top, z-index 300, 60px tall, horizontal padding 28px.
- **Section padding:** `16px 28px` (top), `0 28px` (middle), `0 28px 28px` (bottom).
- **Full-width tables** inside the main content column; no side margins except the 28px page padding.
- **Filter bars** span full width with tight horizontal padding.
- **No max-width wrapper** — dashboard fills viewport.
- **Flex-wrap on KPI groups** so they collapse responsively, but the design is **desktop-first**. Min-widths on KPI cards (82px) keep them from squishing.

### Cards
- White background, 1px border, 10–12px radius, soft shadow. No fancy layering — just clean content boxes.
- **Directorate cards** have a `4px` colored left border that IDs the diretoria.
- **KPI cards** use a `4px` colored left border to flag importance (`--r` for primary, green for meta, cyan for carteira, etc.).
- **Internal structure**: a small uppercase `.kpi-label` (9px muted), big `.kpi-value` (19px bold tx), small `.kpi-sub` (9px muted). Consistent everywhere.

### Use of scale
- **One big number, surrounded by small labels.** The core visual device. KPI values are 19px among 9px labels — ~2× size ratio does the heavy lifting.

---

## Iconography

Cabral & Sousa's dashboard uses **almost no iconography**. The source HTML contains:

- **UTF-8 symbol glyphs** used as functional indicators:
  - `⇅` sort toggle in table headers
  - `⛶` fullscreen toggle
  - `▾` dropdown chevron (via CSS `::after`)
  - `▶` expand/collapse arrow (rotates 90° when open)
  - `✓` checkmark in the "última atualização" bar
  - `↓` `↑` sort direction (prefixed to buttons)
  - `⚠` warning marker in the footer
  - `★` "partial month" indicator next to month pills
  - `—` used as a null-value placeholder throughout tables

- **No SVG icons, no icon font, no emoji.** This is by design — the product is data-forward and treats icons as noise.

- **No raster icons** (no PNG/JPG iconography). The one embedded base64 image in the source HTML is a logo-like asset in the header area.

### When extending this system
- **Keep it sparse.** If you absolutely need an icon, use a Unicode symbol first.
- If a real icon is required (e.g., for a new feature), use **Lucide** (`https://unpkg.com/lucide@latest`) at **14–16px, stroke 1.5–2**. It's the closest in weight/feel to the clean utilitarian vibe. Flag any Lucide usage as a **substitution** — the original product doesn't use it.
- **Never use emoji** in C&S surfaces.
- **Never draw custom illustrations** for this brand.

### Logo
No proper C&S logo file was shipped with the source (the header contained a base64-encoded image that would need OCR/extraction). `assets/logo-placeholder.svg` contains a minimal wordmark treatment in the brand red, serving as a stand-in. **FLAG: request official logo from user.**

---

## CAVEATS & SUBSTITUTIONS

- **Fonts (Nunito + Poppins)** are loaded from Google Fonts CDN — no local TTF/WOFF files shipped. This matches the source. Flag: if an offline build is needed, download and include in `fonts/`.
- **Logo:** no official logo was in the source (only a decorative header bar). `assets/logo-placeholder.svg` is a minimal red wordmark placeholder. **Please provide the official C&S logo.**
- **No Figma/codebase** was attached — all tokens and components were reverse-engineered from a single HTML file. Minor pixel details may drift from the canonical product.
- **Iconography** is intentionally minimal (UTF glyphs only). If a real icon library is needed in the future, Lucide is recommended as the nearest substitute.
- **Portuguese-only copy** — all labels, help text, and sample UI content are in Brazilian Portuguese to match the source.
