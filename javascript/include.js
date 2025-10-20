function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");

  elements.forEach(el => {
    const file = el.getAttribute("data-include");
    if (file) {
      fetch(file)
        .then(response => {
          if (!response.ok) throw new Error("Gagal memuat " + file);
          return response.text();
        })
        .then(data => {
          el.innerHTML = data;
          el.removeAttribute("data-include");
        })
        .catch(err => {
          el.innerHTML = "Error: " + err.message;
        });
    }
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);
