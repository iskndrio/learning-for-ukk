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
const searchInput = document.getElementById("searchInput");

function renderEkstrakulikuler(data) {
  container.innerHTML = "";

  data.forEach((item) => {
  const marginClass = item.marginY === false ? "" : "";

  const cardHTML = `
     <div class="col-lg-3 my-3 ${marginClass}">
        <div class="card shadow">
          <div class="card-header text-center">
            <img src="${item.img}" alt="${item.name}" style="width: 100px;">
          </div>
          <div class="card-body text-center">
            <p>${item.name}</p>
          </div>
        </div>
    </div>
    `;

  container.insertAdjacentHTML("beforeend", cardHTML);
});
}

renderEkstrakulikuler(ekstrakulikuler);

searchInput.addEventListener("input", function() {
  const keyword = this.value.toLowerCase();

  const filltered = ekstrakulikuler.filter(item => 
    item.name.toLowerCase().includes(keyword)
  );

  if (filltered.length === 0) {
      container.innerHTML = `<h4 class="text-center my-3">😪Ekstrakulikuler tidak ada😮‍💨</h4>`;
  }else {
    renderEkstrakulikuler(filltered);
  }s
});

