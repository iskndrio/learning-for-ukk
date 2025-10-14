const berita = [
  { title: "Hari Batik Nasional", img: "berita/WhatsApp Image 2025-10-06 at 12.56.58 (1).jpeg", text: "Berdasarkan Keputusan Presiden Republik Indonesia Nomor 33 Tahun 2009, tanggal 2 Oktober resmi ditetapkan sebagai Hari Batik Nasional, setelah batik diakui oleh UNESCO sebagai Warisan Budaya Takbenda Kemanusiaan" },
  { title: "Hari Kesaktian Pancasila", img: "berita/WhatsApp Image 2025-10-06 at 12.56.58.jpeg", text: "Hari Kesaktian Pancasila lahir dari pengalaman sejarah bangsa Indonesia menghadapi tragedi G30S/PKI tahun 1965. Pancasila terbukti mampu mengatasi rongrongan ideologi lain dan tetap menjadi dasar negara" },
  { title: "Hari Kemerdekaan Republik Indonesia", img: "berita/WhatsApp Image 2025-10-06 at 12.57.04.jpeg", text: "Hari Kemerdekaan Indonesia diproklamasikan Soekarno pada 17 Agustus 1945, setelah Jepang kalah dalam Perang Dunia II. Tanggal ini jadi hari libur nasional untuk memperingati kemerdekaan.  " },
];

const container = document.getElementById("berita-container");

berita.forEach((item) => {
  const marginClass = item.marginY ? "my-5" : "";

  const cardHTML = `
  <div class="card" style="width: 18rem;">
  <img src="${item.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.text}</p>
  </div>
</div>
    `;

  container.insertAdjacentHTML("beforeend", cardHTML);
});
