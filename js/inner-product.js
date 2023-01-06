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

  // Product Big Images Slider

  if (
    document.getElementById("productBigImage") &&
    document.getElementById("productThumbImage")
  ) {
    const thumbSwiper = new Swiper("#productThumbImage", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      speed: 700,
      lazy: {
        enabled: true,
        loadPrevNext: true,
      },
    });

    new Swiper("#productBigImage", {
      loop: true,
      spaceBetween: 10,
      zoom: true,
      speed: 700,
      thumbs: {
        swiper: thumbSwiper,
      },
      lazy: {
        enabled: true,
        loadPrevNext: true,
      },
      autoplay: {
        pauseOnMouseEnter: true,
        reverseDirection: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Best Seller
  if (document.getElementById("relatedProducts")) {
    new Swiper("#relatedProducts", {
      slidesPerView: 1.25,
      speed: 700,
      spaceBetween: 12,
      lazy: {
        enabled: true,
        loadPrevNext: true,
      },
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        reverseDirection: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 2.25,
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
    });
  }
});
