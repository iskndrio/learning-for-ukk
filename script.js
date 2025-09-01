function animateCounter(el, target, duration = 1000) {
  let start = 0;
  const stepTime = Math.abs(Math.floor(duration / target));
  const timer = setInterval(() => {
    start += 1;
    el.textContent = start;
    if (start >= target) {
      clearInterval(timer);
      el.textContent = target;
    }
  }, stepTime);
}

window.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.count');
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-count'));
    animateCounter(counter, target);
  });
});
