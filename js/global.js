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
  if (searchField) {
    searchField.addEventListener("keyup", function () {
      if (this.value) {
        !clearSearchBtn.classList.contains("show") &&
          clearSearchBtn.classList.add("show");
      } else {
        clearSearchBtn.classList.contains("show") &&
          clearSearchBtn.classList.remove("show");
      }
    });
  }

  // Click on Clear Button
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      searchField.value = "";
      this.classList.remove("show");
    });
  }

  // Show Mobile Search
  const mobileSearchAction = [
    document.querySelector(".mobile-search"),
    document.querySelector(".search-return"),
  ];

  if (mobileSearchAction[0]) {
    mobileSearchAction.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();

        const parentEl = this.closest(".search-form");
        parentEl && parentEl.classList.toggle("show");
      });
    });
  }

  // Trigger Lazy Load
  const lazyImages = document.querySelectorAll(".lazy");
  if (lazyImages.length !== 0) {
    const lazyLoadInstance = new LazyLoad();
  }

  // Scroll To Top
  let requestAnimationFrame = window.requestAnimationFrame;
  const scrollTopBtn = document.getElementById("goTop");

  if (scrollTopBtn) {
    const windowViewPortHeight = window.innerHeight;
    let isRequestingAnimationFrame = false;

    scrollTopBtn.addEventListener("click", (e) => {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    window.addEventListener("scroll", function () {
      if (!isRequestingAnimationFrame) {
        requestAnimationFrame(filterGoTopButtonVisibility);
        isRequestingAnimationFrame = true;
      }
    });

    function filterGoTopButtonVisibility(timestamp) {
      let windowPageYOffset =
        window.pageYOffset || document.documentElement.scrollTop;
      if (windowPageYOffset > windowViewPortHeight) {
        scrollTopBtn.classList.add("show");
        isRequestingAnimationFrame = false;
      } else {
        scrollTopBtn.classList.remove("show");
        requestAnimationFrame(filterGoTopButtonVisibility);
      }
    }
  }

  // Floating Action Social Button
  const triggerSocialDial = document.querySelector(".social-contacts .trigger");

  if (triggerSocialDial) {
    triggerSocialDial.addEventListener("click", (e) => {
      e.preventDefault();
      e.currentTarget?.closest(".social-contacts")?.classList.toggle("show");
    });
  }
});
