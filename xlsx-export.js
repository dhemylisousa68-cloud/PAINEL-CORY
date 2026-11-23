// Gerador de .xlsx (zip sem compressão) com formatação: cabeçalho, linha de total, formatos numéricos, filtro e painéis congelados.
(function () {
  var TAB = (function () {
    var t = new Uint32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
      t[n] = c >>> 0;
    }
    return t;
  })();
  function crc32(buf) {
    var c = 0xFFFFFFFF;
    for (var i = 0; i < buf.length; i++) c = TAB[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }
  function enc(s) { return new TextEncoder().encode(s); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function col(i) {
    var s = "";
    i++;
    while (i > 0) { var r = (i - 1) % 26; s = String.fromCharCode(65 + r) + s; i = (i - r - 1) / 26; }
    return s;
  }

  function zip(files) {
    var parts = [], central = [], off = 0;
    files.forEach(function (f) {
      var name = enc(f.name), data = f.data, c = crc32(data);
      var lh = new Uint8Array(30 + name.length), dv = new DataView(lh.buffer);
      dv.setUint32(0, 0x04034b50, true); dv.setUint16(4, 20, true); dv.setUint16(6, 0, true);
      dv.setUint16(8, 0, true); dv.setUint16(10, 0, true); dv.setUint16(12, 0, true);
      dv.setUint32(14, c, true); dv.setUint32(18, data.length, true); dv.setUint32(22, data.length, true);
      dv.setUint16(26, name.length, true); dv.setUint16(28, 0, true);
      lh.set(name, 30);
      parts.push(lh, data);
      var ch = new Uint8Array(46 + name.length), cv = new DataView(ch.buffer);
      cv.setUint32(0, 0x02014b50, true); cv.setUint16(4, 20, true); cv.setUint16(6, 20, true);
      cv.setUint32(16, c, true); cv.setUint32(20, data.length, true); cv.setUint32(24, data.length, true);
      cv.setUint16(28, name.length, true); cv.setUint32(42, off, true);
      ch.set(name, 46);
      central.push(ch);
      off += lh.length + data.length;
    });
    var cdSize = central.reduce(function (a, b) { return a + b.length; }, 0);
    var eo = new Uint8Array(22), ev = new DataView(eo.buffer);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(8, files.length, true); ev.setUint16(10, files.length, true);
    ev.setUint32(12, cdSize, true); ev.setUint32(16, off, true);
    return new Blob(parts.concat(central, [eo]), { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  }

  var STYLES = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    + '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
    + '<numFmts count="1"><numFmt numFmtId="166" formatCode="0.0%"/></numFmts>'
    + '<fonts count="4">'
    + '<font><sz val="10"/><name val="Calibri"/></font>'
    + '<font><b/><sz val="10"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font>'
    + '<font><b/><sz val="10"/><name val="Calibri"/></font>'
    + '<font><b/><sz val="12"/><name val="Calibri"/></font>'
    + '</fonts>'
    + '<fills count="4"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill>'
    + '<fill><patternFill patternType="solid"><fgColor rgb="FFD93025"/><bgColor indexed="64"/></patternFill></fill>'
    + '<fill><patternFill patternType="solid"><fgColor rgb="FFF1F3F6"/><bgColor indexed="64"/></patternFill></fill></fills>'
    + '<borders count="2"><border/><border><bottom style="thin"><color rgb="FFD0D5DD"/></bottom></border></borders>'
    + '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'
    + '<cellXfs count="11">'
    + '<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>'
    + '<xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>'
    + '<xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1"/>'
    + '<xf numFmtId="3" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyNumberFormat="1"/>'
    + '<xf numFmtId="4" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyNumberFormat="1"/>'
    + '<xf numFmtId="166" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyNumberFormat="1"/>'
    + '<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>'
    + '<xf numFmtId="3" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>'
    + '<xf numFmtId="4" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>'
    + '<xf numFmtId="166" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>'
    + '<xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>'
    + '</cellXfs></styleSheet>';

  var XF = { txt: 6, int: 7, dec: 8, pct: 9 };
  var XF_TOTAL = { txt: 2, int: 3, dec: 4, pct: 5 };

  function cell(ref, valor, tipo, style) {
    if (valor === null || valor === undefined || valor === "") return '<c r="' + ref + '" s="' + style + '"/>';
    if (tipo === "txt") return '<c r="' + ref + '" s="' + style + '" t="inlineStr"><is><t xml:space="preserve">' + esc(valor) + '</t></is></c>';
    var num = typeof valor === "number" ? valor : parseFloat(String(valor).replace(/\./g, "").replace(",", "."));
    if (!isFinite(num)) return '<c r="' + ref + '" s="' + XF.txt + '" t="inlineStr"><is><t>' + esc(valor) + '</t></is></c>';
    return '<c r="' + ref + '" s="' + style + '"><v>' + num + '</v></c>';
  }

  // spec = { nome, aba, titulo, colunas:[{t,w,tipo}], linhas:[[...]], total:[...] }
  function baixar(spec) {
    var cols = spec.colunas, nc = cols.length;
    var linhas = [], r = 1;
    if (spec.titulo) {
      linhas.push('<row r="' + r + '" ht="18" customHeight="1"><c r="A' + r + '" s="10" t="inlineStr"><is><t xml:space="preserve">' + esc(spec.titulo) + '</t></is></c></row>');
      r++;
    }
    var linhaTotal = r;
    if (spec.total) {
      var tc = cols.map(function (c, i) {
        var v = spec.total[i];
        return cell(col(i) + linhaTotal, v, typeof v === "number" ? c.tipo : "txt", typeof v === "number" ? XF_TOTAL[c.tipo] || XF_TOTAL.int : XF_TOTAL.txt);
      }).join("");
      linhas.push('<row r="' + linhaTotal + '" ht="17" customHeight="1">' + tc + '</row>');
      r++;
    }
    var linhaCab = r;
    linhas.push('<row r="' + linhaCab + '" ht="30" customHeight="1">' + cols.map(function (c, i) {
      return cell(col(i) + linhaCab, c.t, "txt", 1);
    }).join("") + '</row>');
    r++;
    spec.linhas.forEach(function (l) {
      linhas.push('<row r="' + r + '">' + cols.map(function (c, i) {
        var v = l[i];
        var tipo = (v === null || v === undefined || v === "" || typeof v === "string" && !/^-?[\d.,]+$/.test(v)) ? "txt" : c.tipo;
        return cell(col(i) + r, v, tipo, XF[tipo] || XF.txt);
      }).join("") + '</row>');
      r++;
    });
    var ultima = r - 1;
    var ref = "A" + linhaCab + ":" + col(nc - 1) + ultima;

    var sheet = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      + '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
      + '<sheetPr><pageSetUpPr fitToPage="1"/></sheetPr>'
      + '<sheetViews><sheetView showGridLines="0" tabSelected="1" workbookViewId="0">'
      + '<pane ySplit="' + linhaCab + '" topLeftCell="A' + (linhaCab + 1) + '" activePane="bottomLeft" state="frozen"/>'
      + '</sheetView></sheetViews>'
      + '<sheetFormatPr defaultRowHeight="14.5"/>'
      + '<cols>' + cols.map(function (c, i) {
        return '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + (c.w || 14) + '" customWidth="1"/>';
      }).join("") + '</cols>'
      + '<sheetData>' + linhas.join("") + '</sheetData>'
      + '<autoFilter ref="' + ref + '"/>'
      + '<pageMargins left="0.4" right="0.4" top="0.5" bottom="0.5" header="0.3" footer="0.3"/>'
      + '<pageSetup orientation="landscape" fitToWidth="1" fitToHeight="0" paperSize="9"/>'
      + '</worksheet>';

    var files = [
      { name: "[Content_Types].xml", data: enc('<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>') },
      { name: "_rels/.rels", data: enc('<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>') },
      { name: "xl/workbook.xml", data: enc('<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="' + esc((spec.aba || "Dados").slice(0, 31)) + '" sheetId="1" r:id="rId1"/></sheets></workbook>') },
      { name: "xl/_rels/workbook.xml.rels", data: enc('<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>') },
      { name: "xl/styles.xml", data: enc(STYLES) },
      { name: "xl/worksheets/sheet1.xml", data: enc(sheet) }
    ];

    var url = URL.createObjectURL(zip(files));
    var a = document.createElement("a");
    a.href = url; a.download = spec.nome; a.style.display = "none";
    document.body.appendChild(a); a.click();
    setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 1500);
  }

  window.CORY_XLSX = { baixar: baixar };
})();
