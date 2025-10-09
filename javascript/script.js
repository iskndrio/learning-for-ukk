document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.count');
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});

function showBerita() {
Swal.fire("Selamat Datang di Berita SMKN 4 Tasikmalaya!").then(() => {
  window.location.href = "../berita.html";
});
};
function showGaleri() {
Swal.fire("Selamat Datang di Galeri SMKN 4 Tasikmalaya!").then(() => {
  window.location.href = "../galery.html";
});
};

