const ekstrakulikuler = [
  { name: "Paskibra", img: "ekstra/paskibra.png"},
  { name: "Pramuka", img: "ekstra/pramuka.png"},
  { name: "PMR", img: "ekstra/pmr.png"},
  { name: "PKS", img: "ekstra/pks.png"},
  { name: "PLH", img: "ekstra/plh.png"},
  { name: "Perisai Diri", img: "ekstra/pd.jpg"},
  { name: "IT Club", img: "ekstra/itclub.png"},
  { name: "English Club", img: "ekstra/englishclub.png"},
  { name: "Cinematography", img: "ekstra/cinematography.png"},
  { name: "Lakar Pustaka", img: "ekstra/laskarpustaka.png"},
  { name: "Irma", img: "ekstra/irma.png", marginY: false },
  { name: "Bulu Tangkis", img: "ekstra/bulutangkis.png"},
  { name: "Futsal", img: "ekstra/futsal.CyJOdm1z.png"},
  { name: "Basket", img: "ekstra/basket.png"},
  { name: "Voli", img: "ekstra/volly.jpeg"},
  { name: "Sepak Bola", img: "ekstra/sepakbola.jpeg"},
  { name: "Seni", img: "ekstra/osis.png"},
];

const container = document.getElementById("ekstra-container");

ekstrakulikuler.forEach((item) => {
  const marginClass = item.marginY ? "my-5" : "";

  const cardHTML = `
     <div class="col-lg-4 ${marginClass}">
        <div class="card shadow">
          <div class="card-header text-center">
            <img src="${item.img}" alt="${item.name}" style="width: 200px;">
          </div>
          <div class="card-body text-center">
            <h3>${item.name}</h3>
          </div>
        </div>
    </div>
    `;

  container.insertAdjacentHTML("beforeend", cardHTML);
});
