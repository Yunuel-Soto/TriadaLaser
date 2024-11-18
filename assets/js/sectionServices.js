const bars = document.querySelectorAll(".header");
const sections = document.querySelectorAll(".sect-body");

// New intersectionObserver se usa para detectar cuando la seccion esta fuera del viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      const bar = entry.target.previousElementSibling;
      console.log(bar);

      if (!entry.isIntersecting) {
        bar.classList.add("shrink");
        bar.classList.remove("expand");
      } else {
        bar.classList.remove("shrink");
        bar.classList.add("expand");
      }
    },
    { threshold: 0.5 }
  );
});

sections.forEach((section) => observer.observe(section));
