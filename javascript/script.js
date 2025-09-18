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
