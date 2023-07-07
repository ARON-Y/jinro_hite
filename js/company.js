// 서브 탭메뉴-company
const subName = document.querySelectorAll(".content-bottom > ul > li");
const companyContents = document.querySelectorAll(
  "#company-contents> .wrap > article"
);

subName.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    for (let el of subName) {
      el.classList.remove("on");
    }
    subName[index].classList.add("on");

    for (let el of companyContents) el.classList.remove("on");
    companyContents[index].classList.add("on");
  });
});

// 연혁 슬라이드 부분

let history = document.querySelector(".history");
let btns = document.querySelectorAll(".his_btns li");

btns.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    moveHistory(index);

    actClass(index);

    let isOn = e.currentTarget.classList.contains("on");
    if (isOn) return;
  });
});

function moveHistory(idx) {
  history.style.marginLeft = "-100" * idx + "%";
  history.style.transition = "0.5s";
}

function actClass(idx) {
  for (let el of btns) el.classList.remove("on");
  btns[idx].classList.add("on");
}
