window.addEventListener("scroll", () => {
  const articles = document.querySelectorAll("#company article");
  const windowHeight = window.innerHeight;

  articles.forEach((article) => {
    const articleRect = article.getBoundingClientRect();

    if (articleRect.top < windowHeight && articleRect.bottom > 0) {
      if (
        article.classList.contains("first_page") ||
        article.classList.contains("third_page")
      ) {
        article.style.transform = `translateX(${Math.min(
          0,
          50 - articleRect.top / 5
        )}%)`;
      } else {
        article.style.transform = `translateX(${Math.max(
          0,
          articleRect.top / 5 - 50
        )}%)`;
      }
    }
  });
});
