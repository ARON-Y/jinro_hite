const frameItem = document.querySelectorAll(".frame > li");
frameItem.forEach((el, index) => {
  if (index !== 0) {
    el.style.display = "none";
  }
});

let slideIndex = 0;

setInterval(() => {
  if (slideIndex < 4) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }

  frameItem.forEach((el, index) => {
    if (index === slideIndex) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
}, 7000);
