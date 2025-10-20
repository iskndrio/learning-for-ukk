const berita = [
  { title: "Hari Batik Nasional", img: "berita/batik.jpeg", text: "Berdasarkan Keputusan Presiden Republik Indonesia Nomor 33 Tahun 2009, tanggal 2 Oktober resmi ditetapkan sebagai Hari Batik Nasional, setelah batik diakui oleh UNESCO sebagai Warisan Budaya Takbenda Kemanusiaan" },
  { title: "Hari Kesaktian Pancasila", img: "berita/pancasila.jpeg", text: "Hari Kesaktian Pancasila lahir dari pengalaman sejarah bangsa Indonesia menghadapi tragedi G30S/PKI tahun 1965. Pancasila terbukti mampu mengatasi rongrongan ideologi lain dan tetap menjadi dasar negara" },
  { title: "Hari Kemerdekaan Republik Indonesia", img: "berita/merdeka.jpeg", text: "Hari Kemerdekaan Indonesia diproklamasikan Soekarno pada 17 Agustus 1945, setelah Jepang kalah dalam Perang Dunia II. Tanggal ini jadi hari libur nasional untuk memperingati kemerdekaan.  " },
];

const container = document.getElementById("berita-container");

if (!container) {
  console.error('Element dengan id "berita-container" not found.');
} else {
  berita.forEach((item, index) => {
    const marginClass = item.marginY ? "my-5" : "";

    const cardHTML = `
    <div class="card" style="width: 18rem; cursor: pointer;" onclick="detailBerita(${index})">
      <img src="${item.img}" class="card-img-top" alt="${item.title}">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text" style="text-align: justify;">${item.text}</p>
      </div>
    </div>
    `;

    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

function detailBerita(index) {

  if (typeof index !== 'number' || Number.isNaN(index)) {
    console.warn('index tidak valid:', index);
    return;
  };

  const pages = [
    'batik.html',
    'pancasila.html',
    'merdeka.html'
  ];

  const target = pages[index] || 'berita.html';
  window.location.href = target;
};