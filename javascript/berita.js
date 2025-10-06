const berita= [
  { title: "Hari Batik Nasional", img: "berita/WhatsApp Image 2025-10-06 at 12.56.58 (1).jpeg", text: "Berdasarkan Keputusan Presiden Republik Indonesia Nomor 33 Tahun 2009, tanggal 2 Oktober resmi ditetapkan sebagai Hari Batik Nasional, setelah batik diakui oleh UNESCO sebagai Warisan Budaya Takbenda Kemanusiaan" },
  { title: "Hari Kesaktian Pancasila", img: "berita/WhatsApp Image 2025-10-06 at 12.56.58.jpeg", text: "Hari Kesaktian Pancasila lahir dari pengalaman sejarah bangsa Indonesia menghadapi tragedi G30S/PKI tahun 1965. Pancasila terbukti mampu mengatasi rongrongan ideologi lain dan tetap menjadi dasar negara" },
  { title: "Hari Kemerdekaan Republik Indonesia", img: "berita/WhatsApp Image 2025-10-06 at 12.57.04.jpeg", text: "Sejarah Hari Kemerdekaan Indonesia berawal dari pembacaan Teks Proklamasi oleh Soekarno pada 17 Agustus 1945, menandai lahirnya bangsa yang merdeka setelah melalui perjuangan melawan penjajahan Belanda dan Jepang. Peristiwa ini didahului oleh kekalahan Jepang dalam Perang Dunia II, yang mendorong para pemuda mendesak Soekarno dan Hatta untuk memproklamasikan kemerdekaan. Tanggal 17 Agustus kemudian ditetapkan sebagai hari libur nasional untuk memperingati momen bersejarah ini. Sejarah Hari Kemerdekaan Indonesia berawal dari pembacaan Teks Proklamasi oleh Soekarno pada 17 Agustus 1945, menandai lahirnya bangsa yang merdeka setelah melalui perjuangan melawan penjajahan Belanda dan Jepang. Peristiwa ini didahului oleh kekalahan Jepang dalam Perang Dunia II, yang mendorong para pemuda mendesak Soekarno dan Hatta untuk memproklamasikan kemerdekaan. Tanggal 17 Agustus kemudian ditetapkan sebagai hari libur nasional untuk memperingati momen bersejarah ini. " },
];

const container = document.getElementById("berita-container");

berita.forEach((item) => {
  const marginClass = item.marginY ? "my-5" : "";

  const cardHTML = `
  <div class="row align-items-center my-5 ${marginClass}">
        <div class="col-md-6 text-center mb-3">
          <img src="${item.img}" alt="${item.title}" class="rounded img-fluid" style="max-width: 500px"/>
        </div>
        <div class="col-md-6 text-center">
          <h1>${item.title}</h1>
          <p>${item.text}</p>
        </div>
      </div>
    `;

  container.insertAdjacentHTML("beforeend", cardHTML);
});
