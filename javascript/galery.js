const imageList = ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "eng1.JPG", "eng2.JPG", "eng3.JPG", "eng4.JPG", "job1.JPG", "job2.JPG", "job3.JPG", "job4.JPG", "spm1.jpg", "spm2.jpg", "spm3.jpg", "spm4.jpg"]; // Tambahkan lebih banyak jika perlu
const gallery = document.getElementById("gallery");

imageList.forEach((imageName) => {

  const col = document.createElement("div");
  col.className = "col-lg-3 mb-4";

  const card = document.createElement("div");
  card.className = "card rounded";

  const img = document.createElement("img");
  img.src = `foto/${imageName}`;
  img.alt = imageName;
  img.className = "img-fluid";

  card.appendChild(img);
  col.appendChild(card);
  gallery.appendChild(col);
});
