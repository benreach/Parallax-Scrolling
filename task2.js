const layers = document.querySelectorAll(".parallax-layer");

function parallaxEffect() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  layers.forEach((layer) => {
    const section = layer.closest(".hero");
    const rect = section.getBoundingClientRect();
    const offsetTop = rect.top + scrollY;
    const speed = parseFloat(layer.dataset.speed);

    // Only move if visible on screen
    if (
      scrollY + windowHeight > offsetTop &&
      scrollY < offsetTop + section.offsetHeight
    ) {
      const relativeY = scrollY - offsetTop;
      layer.style.transform = `translateY(${relativeY * speed}px)`;
    }
  });

  requestAnimationFrame(parallaxEffect);
}

requestAnimationFrame(parallaxEffect);
