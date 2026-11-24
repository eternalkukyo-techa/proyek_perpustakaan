/* Koriko Library - versi statis. Data disimpan di localStorage browser. */
(function () {
  var DB_KEY = 'koriko_db_v1', SES_KEY = 'koriko_session_v1';
  var SEED = {"admin": [{"id_admin": 1, "username": "admin", "password": "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918", "nama_lengkap": "Administrator Perpus", "role": "admin"}, {"id_admin": 2, "username": "user", "password": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3", "nama_lengkap": "", "role": "user"}], "anggota": [{"id_anggota": 1, "nomor_anggota": "AG-0001", "nama": "Afrian Bedari", "jenis_kelamin": "L", "alamat": "Meteseh", "no_hp": "", "tanggal_daftar": "2026-11-13", "username": "afrian", "password": "70d78ddb91a075f8c1f21d9d0f0ca4a3a3c168e97272a2fb3ad3a419e78b7cdc", "status": "Aktif"}, {"id_anggota": 3, "nomor_anggota": "AG-0002", "nama": "Hizkia Barakh", "jenis_kelamin": "L", "alamat": "", "no_hp": "08", "tanggal_daftar": "2026-11-20", "username": "hizkia", "password": "d32bc151f367d24222ba99a89ee5357e9cd7831fdd6bd9fc469571cdbc76be76", "status": "Aktif"}, {"id_anggota": 4, "nomor_anggota": "AG-0003", "nama": "Dyna Hawa Oktavia", "jenis_kelamin": "P", "alamat": "", "no_hp": "08", "tanggal_daftar": "2026-11-20", "username": "ag-0003", "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92", "status": "Aktif"}, {"id_anggota": 5, "nomor_anggota": "AG-0004", "nama": "Elsa Nugroho", "jenis_kelamin": "P", "alamat": "Ngaliyan", "no_hp": "08754", "tanggal_daftar": "2026-11-20", "username": "elsa", "password": "5cd38f85f66bc64702320d8cb9cb702914e210fc4756e158660976cc9df664c0", "status": "Aktif"}, {"id_anggota": 6, "nomor_anggota": "Ag-0005", "nama": "Nabella Khanza", "jenis_kelamin": "P", "alamat": "Kalipancur", "no_hp": "0812", "tanggal_daftar": "2026-11-20", "username": "bella", "password": "e75a6cd43a16c2f31d1a3c17700af64d3658a380c49d65b20cc75b1f7c0e001b", "status": "Aktif"}, {"id_anggota": 7, "nomor_anggota": "AG-0006", "nama": "Kikis", "jenis_kelamin": "P", "alamat": "Ghibli ", "no_hp": "0812345", "tanggal_daftar": "2026-11-23", "username": "kikis", "password": "d8b7f37fa6af8ed2d73ca986da7a8c34197b1e0c8241f8f88c20b235687ce912", "status": "Aktif"}, {"id_anggota": 8, "nomor_anggota": "AG-0007", "nama": "Qian", "jenis_kelamin": "L", "alamat": "Soul Land", "no_hp": "00000", "tanggal_daftar": "2026-11-23", "username": "qian", "password": "340b1ff7372469e7502bd59abb5edaed3d5af96770d79de01cefded797de75a6", "status": "Aktif"}, {"id_anggota": 9, "nomor_anggota": "AG-0008", "nama": "Tombo", "jenis_kelamin": "L", "alamat": "Ghibli", "no_hp": "89898989", "tanggal_daftar": "2026-11-23", "username": "tombo", "password": "ff1fbc0f2777d427cb4ed881edb223e77c625d2cec2c62be979964085edf7a87", "status": "Aktif"}], "bibliografi": [{"id_buku": 5, "kode_buku": "BK-001", "judul": "Laut Bercerita", "pengarang": "Leila S. Chudori", "kategori": "Fiksi", "penerbit": "Gramedia", "tahun_terbit": null, "isbn": null, "nomor_panggil": null, "stok": 3, "file_pdf": "1795154188_ebook.pdf", "cover_buku": "1795154188_cover.jpg"}, {"id_buku": 6, "kode_buku": "BK-002", "judul": "Apa yang Kita Pikirkan Ketika Kita Sendirian", "pengarang": "Desi Anwar", "kategori": "Fiksi", "penerbit": "Gramedia", "tahun_terbit": null, "isbn": null, "nomor_panggil": null, "stok": 3, "file_pdf": "1795157660_ebook.pdf", "cover_buku": "1795157660_cover.jpg"}, {"id_buku": 7, "kode_buku": "BK-003", "judul": "Herb Garden Guide", "pengarang": "countryside", "kategori": "Referensi", "penerbit": "Gramedia", "tahun_terbit": null, "isbn": null, "nomor_panggil": null, "stok": 3, "file_pdf": "1795158263_ebook.pdf", "cover_buku": "1795158263_cover.png"}, {"id_buku": 8, "kode_buku": "BK-004", "judul": "Jokowi Undercover", "pengarang": "Bambang Tri", "kategori": "Fiksi", "penerbit": "Gramedia", "tahun_terbit": null, "isbn": null, "nomor_panggil": null, "stok": 3, "file_pdf": null, "cover_buku": "1795158639_cover.png"}, {"id_buku": 9, "kode_buku": "BK-005", "judul": "Master Gardener Manual", "pengarang": "Oklahoma State University Extension", "kategori": "Referensi", "penerbit": "Gramedia", "tahun_terbit": null, "isbn": null, "nomor_panggil": null, "stok": 3, "file_pdf": "1795159058_ebook.pdf", "cover_buku": "1795159058_cover.png"}, {"id_buku": 10, "kode_buku": "BK-006", "judul": "Merayakan Kehilangan ", "pengarang": "Brian Khrisna", "kategori": "Fiksi", "penerbit": "Gramedia", "tahun_terbit": null, "isbn": null, "nomor_panggil": null, "stok": 3, "file_pdf": "1795159263_ebook.pdf", "cover_buku": "1795159238_cover.jpg"}, {"id_buku": 11, "kode_buku": "BK-007", "judul": "Seporsi Mie Ayam Sebelum Mati ", "pengarang": "Brian Khrisna", "kategori": "Fiksi", "penerbit": "Gramedia", "tahun_terbit": null, "isbn": null, "nomor_panggil": null, "stok": 3, "file_pdf": "1795159552_ebook.pdf", "cover_buku": "1795159552_cover.png"}, {"id_buku": 12, "kode_buku": "BK-008", "judul": "Seed to Supper: A Beginner's Guide to Gardening", "pengarang": "Oregon State University (OSU) & Oregon Food Bank ", "kategori": "Referensi", "penerbit": "Gramedia", "tahun_terbit": null, "isbn": null, "nomor_panggil": null, "stok": 3, "file_pdf": "1795159864_ebook.pdf", "cover_buku": "1795159864_cover.jpg"}, {"id_buku": 14, "kode_buku": "BK-010", "judul": "Vegetables, Fruits & Herbs Book A Guide to Growing Time & Taste", "pengarang": "Utah State University", "kategori": "Referensi", "penerbit": "Gramedia", "tahun_terbit": null, "isbn": null, "nomor_panggil": null, "stok": 3, "file_pdf": "1795160539_ebook.pdf", "cover_buku": "1795160539_cover.png"}, {"id_buku": 15, "kode_buku": "BK-011", "judul": "Nanti Juga Sembuh Sendiri", "pengarang": "Helobagas", "kategori": "Fiksi", "penerbit": "Gradien Mediatama", "tahun_terbit": null, "isbn": null, "nomor_panggil": null, "stok": 5, "file_pdf": "1795407171_ebook.pdf", "cover_buku": "1795407171_cover.jpeg"}, {"id_buku": 16, "kode_buku": "BK-012", "judul": "Menghitung", "pengarang": "Gay Galsworthy", "kategori": "Anak-Anak", "penerbit": "Bookbot", "tahun_terbit": null, "isbn": null, "nomor_panggil": null, "stok": 4, "file_pdf": "1795411481_ebook.pdf", "cover_buku": "1795411481_cover.png"}, {"id_buku": 17, "kode_buku": "BK-013", "judul": "Di Mana Gogo?", "pengarang": "Soumya Menion", "kategori": "Anak-Anak", "penerbit": "Bookbot", "tahun_terbit": null, "isbn": null, "nomor_panggil": null, "stok": 6, "file_pdf": "1795412228_ebook.pdf", "cover_buku": "1795412228_cover.png"}, {"id_buku": 18, "kode_buku": "BK-014", "judul": "Peter and Wendy", "pengarang": "J. M. Barrie", "kategori": "Fantasi", "penerbit": "Hodder & Stoughton", "tahun_terbit": null, "isbn": null, "nomor_panggil": null, "stok": 5, "file_pdf": "1795412616_ebook.pdf", "cover_buku": "1795412616_cover.png"}, {"id_buku": 19, "kode_buku": "BK-015", "judul": "The Merry Adventures of Robin Hood", "pengarang": "Howard Pyle", "kategori": "Fantasi", "penerbit": "Planet E-Book", "tahun_terbit": null, "isbn": null, "nomor_panggil": null, "stok": 7, "file_pdf": "1795412821_ebook.pdf", "cover_buku": "1795412821_cover.png"}], "sirkulasi": [{"id_sirkulasi": 4, "id_anggota": 3, "id_buku": 5, "tanggal_pinjam": "2026-11-20", "tanggal_kembali_seharusnya": "2026-11-27", "tanggal_dikembalikan": "2026-11-20", "status": "Kembali", "denda": 0, "alasan_tolak": null}, {"id_sirkulasi": 5, "id_anggota": 3, "id_buku": 5, "tanggal_pinjam": "2026-11-20", "tanggal_kembali_seharusnya": "2026-11-27", "tanggal_dikembalikan": "2026-11-20", "status": "Kembali", "denda": 0, "alasan_tolak": null}, {"id_sirkulasi": 6, "id_anggota": 8, "id_buku": 5, "tanggal_pinjam": "2026-11-23", "tanggal_kembali_seharusnya": "2026-11-30", "tanggal_dikembalikan": "2026-11-23", "status": "Kembali", "denda": 0, "alasan_tolak": null}, {"id_sirkulasi": 8, "id_anggota": 8, "id_buku": 7, "tanggal_pinjam": "2026-11-23", "tanggal_kembali_seharusnya": "2026-11-30", "tanggal_dikembalikan": "2026-11-23", "status": "Kembali", "denda": 0, "alasan_tolak": null}, {"id_sirkulasi": 10, "id_anggota": 8, "id_buku": 7, "tanggal_pinjam": "2026-11-23", "tanggal_kembali_seharusnya": "2026-11-30", "tanggal_dikembalikan": "2026-11-23", "status": "Kembali", "denda": 0, "alasan_tolak": null}, {"id_sirkulasi": 11, "id_anggota": 8, "id_buku": 8, "tanggal_pinjam": "2026-11-23", "tanggal_kembali_seharusnya": "2026-11-30", "tanggal_dikembalikan": "2026-11-23", "status": "Kembali", "denda": 0, "alasan_tolak": null}, {"id_sirkulasi": 14, "id_anggota": 8, "id_buku": 5, "tanggal_pinjam": "2026-11-23", "tanggal_kembali_seharusnya": "2026-11-30", "tanggal_dikembalikan": null, "status": "Ditolak", "denda": 0, "alasan_tolak": "limit peminjaman harian"}, {"id_sirkulasi": 15, "id_anggota": 7, "id_buku": 7, "tanggal_pinjam": "2026-11-23", "tanggal_kembali_seharusnya": "2026-11-30", "tanggal_dikembalikan": "2026-11-23", "status": "Kembali", "denda": 0, "alasan_tolak": null}, {"id_sirkulasi": 16, "id_anggota": 7, "id_buku": 9, "tanggal_pinjam": "2026-11-23", "tanggal_kembali_seharusnya": "2026-11-30", "tanggal_dikembalikan": "2026-11-23", "status": "Kembali", "denda": 0, "alasan_tolak": null}, {"id_sirkulasi": 17, "id_anggota": 7, "id_buku": 12, "tanggal_pinjam": "2026-11-23", "tanggal_kembali_seharusnya": "2026-11-30", "tanggal_dikembalikan": null, "status": "Ditolak", "denda": 0, "alasan_tolak": "Limit harian telah tercapai"}], "ai": {"admin": 3, "anggota": 10, "bibliografi": 20, "sirkulasi": 18}};
  var BULAN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var db = null;

  function sha256(str) {
    var ascii = unescape(encodeURIComponent(str));
    function rr(v, a) { return (v >>> a) | (v << (32 - a)); }
    var mp = Math.pow, maxWord = mp(2, 32), i, j, result = '';
    var words = [], bitLen = ascii.length * 8;
    var hash = sha256.h = sha256.h || [], k = sha256.k = sha256.k || [], pc = k.length, comp = {};
    for (var c = 2; pc < 64; c++) {
      if (!comp[c]) {
        for (i = 0; i < 313; i += c) comp[i] = c;
        hash[pc] = (mp(c, .5) * maxWord) | 0;
        k[pc++] = (mp(c, 1 / 3) * maxWord) | 0;
      }
    }
    ascii += '\x80';
    while (ascii.length % 64 - 56) ascii += '\x00';
    for (i = 0; i < ascii.length; i++) { j = ascii.charCodeAt(i); words[i >> 2] |= j << ((3 - i) % 4) * 8; }
    words[words.length] = (bitLen / maxWord) | 0;
    words[words.length] = bitLen;
    for (j = 0; j < words.length;) {
      var w = words.slice(j, j += 16), old = hash;
      hash = hash.slice(0, 8);
      for (i = 0; i < 64; i++) {
        var w15 = w[i - 15], w2 = w[i - 2], a = hash[0], e = hash[4];
        var t1 = hash[7] + (rr(e, 6) ^ rr(e, 11) ^ rr(e, 25)) + ((e & hash[5]) ^ ((~e) & hash[6])) + k[i] +
          (w[i] = (i < 16) ? w[i] : (w[i - 16] + (rr(w15, 7) ^ rr(w15, 18) ^ (w15 >>> 3)) + w[i - 7] + (rr(w2, 17) ^ rr(w2, 19) ^ (w2 >>> 10))) | 0);
        var t2 = (rr(a, 2) ^ rr(a, 13) ^ rr(a, 22)) + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
        hash = [(t1 + t2) | 0].concat(hash);
        hash[4] = (hash[4] + t1) | 0;
      }
      for (i = 0; i < 8; i++) hash[i] = (hash[i] + old[i]) | 0;
    }
    for (i = 0; i < 8; i++) for (j = 3; j + 1; j--) { var b = (hash[i] >> (j * 8)) & 255; result += ((b < 16) ? 0 : '') + b.toString(16); }
    return result;
  }

  function load() {
    if (db) return db;
    try { db = JSON.parse(localStorage.getItem(DB_KEY)); } catch (e) { db = null; }
    if (!db || !db.bibliografi) { db = JSON.parse(JSON.stringify(SEED)); save(); }
    return db;
  }
  function save() {
    try { localStorage.setItem(DB_KEY, JSON.stringify(db)); }
    catch (e) { alert('Penyimpanan browser penuh atau dinonaktifkan. Perubahan tidak tersimpan.'); }
  }
  function reset() { try { localStorage.removeItem(DB_KEY); localStorage.removeItem(SES_KEY); } catch (e) {} db = null; }
  function nextId(table) { var d = load(); var id = d.ai[table]; d.ai[table] = id + 1; return id; }

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function today() { var d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function addDays(s, n) { var p = s.split('-'); var d = new Date(+p[0], +p[1] - 1, +p[2] + n); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function dayDiff(a, b) { var x = a.split('-'), y = b.split('-'); return Math.floor((Date.UTC(+y[0], +y[1] - 1, +y[2]) - Date.UTC(+x[0], +x[1] - 1, +x[2])) / 86400000); }
  function fmtD(s) { if (!s) return ''; var p = s.split('-'); return p[2] + ' ' + BULAN[+p[1] - 1] + ' ' + p[0]; }
  function rp(n) { return Number(n || 0).toLocaleString('id-ID'); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c]; }); }
  function param(n) { return new URLSearchParams(location.search).get(n); }

  function placeholder(w, h) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '"><rect width="100%" height="100%" fill="#E2E8F0"/><text x="50%" y="50%" fill="#64748B" font-family="sans-serif" font-size="18" text-anchor="middle" dominant-baseline="middle">No Cover</text></svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }
  function coverSrc(b) {
    if (!b || !b.cover_buku) return null;
    return b.cover_buku.indexOf('data:') === 0 ? b.cover_buku : 'covers/' + encodeURI(b.cover_buku);
  }
  function readImage(file, maxW) {
    return new Promise(function (res, rej) {
      var fr = new FileReader();
      fr.onerror = rej;
      fr.onload = function () {
        var img = new Image();
        img.onerror = rej;
        img.onload = function () {
          var r = Math.min(1, (maxW || 400) / img.width), c = document.createElement('canvas');
          c.width = Math.round(img.width * r); c.height = Math.round(img.height * r);
          c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
          res(c.toDataURL('image/jpeg', 0.8));
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    });
  }

  function getSession() { try { return JSON.parse(localStorage.getItem(SES_KEY)); } catch (e) { return null; } }
  function setSession(s) { try { localStorage.setItem(SES_KEY, JSON.stringify(s)); } catch (e) {} }
  function clearSession() { try { localStorage.removeItem(SES_KEY); } catch (e) {} }
  function requireRole(role) {
    var s = getSession();
    if (!s || !s.login || (role && s.role !== role)) { location.replace('index.html'); throw new Error('redirect'); }
    return s;
  }
  function find(table, pred) { return load()[table].filter(pred); }
  function one(table, pred) { return find(table, pred)[0] || null; }
  function byId(table, field, id) { return one(table, function (r) { return r[field] == id; }); }
  function cmpText(a, b) { return String(a || '').localeCompare(String(b || ''), 'id', { sensitivity: 'base' }); }

  window.K = {
    sha256: sha256, load: load, save: save, reset: reset, nextId: nextId,
    today: today, addDays: addDays, dayDiff: dayDiff, fmtD: fmtD, rp: rp, esc: esc, param: param,
    placeholder: placeholder, coverSrc: coverSrc, readImage: readImage,
    getSession: getSession, setSession: setSession, clearSession: clearSession, requireRole: requireRole,
    find: find, one: one, byId: byId, cmpText: cmpText
  };
})();
