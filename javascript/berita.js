const ekstrakulikuler = [
  { name: "Jalan Santai", img: "foto/jalansantai.JPG", text: "Pada hari Sabtu, SMKN 4 Tasikmalaya mengadakan kegiatan jalan santai yang diikuti oleh seluruh siswa, guru, dan staf sekolah. Kegiatan ini bertujuan untuk meningkatkan kebersamaan serta menjaga kesehatan jasmani. Rute jalan santai dimulai dari halaman sekolah dan mengelilingi area sekitar lingkungan sekolah. Suasana berlangsung meriah dengan semangat dan antusiasme peserta. Setelah kegiatan, panitia juga menyediakan hiburan serta pembagian doorprize yang menambah semarak acara" },
  { name: "Makan Bergizi Gratis", img: "foto/mbg.JPG", text: "SMKN 4 Tasikmalaya mengadakan program Makan Bergizi Gratis untuk seluruh siswa. Program ini bertujuan meningkatkan kesadaran pentingnya pola makan sehat dan gizi seimbang demi menunjang kesehatan dan semangat belajar. Makanan yang disediakan terdiri dari berbagai bahan bergizi seperti sayur, protein, dan buah-buahan, sehingga siswa dapat menikmati hidangan sehat tanpa biaya. Kegiatan ini mendapat sambutan positif dan diharapkan dapat terus berlanjut sebagai bagian dari upaya mendukung kesejahteraan siswa." },
];

const container = document.getElementById("berita-container");

ekstrakulikuler.forEach((item) => {
  const marginClass = item.marginY ? "my-5" : "";

  const cardHTML = `
  <div class="row align-items-center my-5 ${marginClass}">
        <div class="col-md-6 text-center mb-3">
          <img src="${item.img}" alt="${item.name}" class="rounded img-fluid" style="max-width: 500px"/>
        </div>
        <div class="col-md-6 text-center">
          <h1>${item.name}</h1>
          <p>${item.text}</p>
        </div>
      </div>
    `;

  container.insertAdjacentHTML("beforeend", cardHTML);
});
