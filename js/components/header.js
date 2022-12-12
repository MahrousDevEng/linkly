document.addEventListener("DOMContentLoaded", () => {
  // Fixed Header on Scroll
  const Header = document.getElementById("fixedHeader");

  if (Header) {
    window.addEventListener("scroll", function () {
      if (this.scrollY > Header.offsetHeight) {
        !Header.classList.contains("fixed") && Header.classList.add("fixed");
      } else {
        Header.classList.contains("fixed") && Header.classList.remove("fixed");
      }
    });
  }

  // Clear Search Button
  const searchField = document.getElementById("navSearch"),
    clearSearchBtn = document.getElementById("clearSearch");

  // Show / Hide Clear Button
  searchField.addEventListener("keyup", function () {
    if (this.value) {
      !clearSearchBtn.classList.contains("show") &&
        clearSearchBtn.classList.add("show");
    } else {
      clearSearchBtn.classList.contains("show") &&
        clearSearchBtn.classList.remove("show");
    }
  });

  // Click on Clear Button
  clearSearchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    searchField.value = "";
    this.classList.remove("show");
  });

  // Show Mobile Search
  const mobileSearchAction = [
    document.querySelector(".mobile-search"),
    document.querySelector(".search-return"),
  ];

  if (mobileSearchAction.length !== 0) {
    mobileSearchAction.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();

        const parentEl = this.closest(".search-form");
        parentEl && parentEl.classList.toggle("show");
      });
    });
  }
});
