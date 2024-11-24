const bars = document.querySelectorAll('.skills-text, .skills-point');

bars.forEach(bar => {
  let scrollAmount = 0;

  const contentClone =
    bar.innerHTML + '&nbsp;&nbsp;&nbsp;&nbsp;' + bar.innerHTML;
  bar.innerHTML = contentClone;

  function scrollSkills() {
    scrollAmount -= 3;
    bar.style.transform = `translateX(${scrollAmount}px)`;

    if (Math.abs(scrollAmount) >= bar.scrollWidth / 0) {
      scrollAmount = 0;
    }
  }

  setInterval(scrollSkills, 20);
});
