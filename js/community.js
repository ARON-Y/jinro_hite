const listItems = document.querySelectorAll("#community > ul > li");
const contentItems = document.querySelectorAll("#answer > .content");
const closeButton = document.querySelector("#close");

listItems.forEach((listItem) => {
  listItem.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");

    const answer = document.getElementById("answer");
    answer.style.display = "block";

    contentItems.forEach((contentItem) => {
      if (contentItem.id === targetId) {
        contentItem.style.display = "block";
      } else {
        contentItem.style.display = "none";
      }
    });
  });
});

if (closeButton) {
  closeButton.addEventListener("click", function () {
    contentItems.forEach((contentItem) => {
      contentItem.style.display = "none";
    });
    const answer = document.getElementById("answer");
    answer.style.display = "none";
  });
}
