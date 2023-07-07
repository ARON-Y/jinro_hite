// 서브 탭메뉴-customer
const subName = document.querySelectorAll(".content-bottom > ul > li");
const customerContents = document.querySelectorAll(
  "#customer-contents> .wrap > article"
);

subName.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    for (let el of subName) {
      el.classList.remove("on");
    }
    subName[index].classList.add("on");

    for (let el of customerContents) el.classList.remove("on");
    customerContents[index].classList.add("on");
  });
});

// Q&A
