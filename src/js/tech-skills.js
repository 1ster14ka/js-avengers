const bars = document.querySelectorAll(
  '.skills-text-top, .skills-point-top, .skills-text-bottom, .skills-point-bottom'
);

bars.forEach(bar => {
  let scrollAmount = 1;

  function scrollSkills() {
    scrollAmount += 1;
    bar.style.transform = `translateX(${scrollAmount}px)`;

    if (Math.abs(scrollAmount) >= bar.scrollWidth) {
      scrollAmount = 2;
    }
  }
  setInterval(scrollSkills, 15);
});
