// 서브 탭메뉴-company
const subName = document.querySelectorAll(".content-bottom > ul > li");
const subContents = document.querySelectorAll(
  "#company-contents> .wrap > article"
);

subName.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    for (let el of subName) {
      el.classList.remove("on");
    }
    subName[index].classList.add("on");

    for (let el of subContents) el.classList.remove("on");
    subContents[index].classList.add("on");
  });
});

// 서브 탭메뉴-product
const productContents = document.querySelectorAll(
  "#product-contents> .wrap > article"
);

subName.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    for (let el of subName) {
      el.classList.remove("on");
    }
    subName[index].classList.add("on");

    for (let el of productContents) el.classList.remove("on");
    productContents[index].classList.add("on");
  });
});

// 서브 탭메뉴-customer
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
function active(subContents, index) {
  for (let el of subName) {
    el.classList.remove("on");
  }
  subName[index].classList.add("on");

  for (let el of subContents) el.classList.remove("on");
  subContents[index].classList.add("on");
}
