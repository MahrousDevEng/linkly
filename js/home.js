document.addEventListener("DOMContentLoaded", () => {
  // Trigger Lazy Load
  const lazyLoadInstance = new LazyLoad();

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

  // Trigger Products Slider
  const commomProps = {
    slidesPerView: 1.25,
    speed: 700,
    spaceBetween: 12,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    lazy: {
      enabled: true,
      loadPrevNext: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 1.75,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3.25,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4.25,
        spaceBetween: 20,
      },
    },
  };

  // Best Seller
  if (document.querySelector(".product_slider_1")) {
    new Swiper(".product_slider_1", {
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        reverseDirection: true,
      },
      ...commomProps,
    });
  }

  // Offers
  if (document.querySelector(".product_slider_2")) {
    new Swiper(".product_slider_2", {
      autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        reverseDirection: true,
      },
      ...commomProps,
    });
  }
});
