// gnb
const gnb_lis = document.querySelectorAll(".gnb > ul > li");

gnb_lis.forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    const sub = e.currentTarget.querySelector(".sub");
    let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
    sub.style.height = "0";
    if (isBlock == "none") {
      sub.style.display = "block";
      let subHeight = sub.scrollHeight;
      sub.style.height = subHeight + "px";
    }
  });
});

gnb_lis.forEach((el) => {
  el.addEventListener("mouseleave", (e) => {
    const sub = e.currentTarget.querySelector(".sub");
    let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
    sub.style.height = "0";
    if (isBlock == "block") {
      sub.style.height = "0";
      sub.addEventListener("transitionend", function end() {
        sub.removeEventListener("transitionend", end);
        sub.style.display = "none";
      });
    }
  });
});

// 태블릿버전
const gnbBtn = document.querySelector(".gnb_btn");
const gnbNav = document.querySelector(".gnb");
const gnbBg = document.querySelector(".gnbBg");

function toggleNav() {
  gnbNav.classList.toggle("active");
  gnbBg.classList.toggle("active");
}

gnbBtn.addEventListener("click", toggleNav);
gnbBg.addEventListener("click", toggleNav);
