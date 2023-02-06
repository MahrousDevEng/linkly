document.addEventListener("DOMContentLoaded", () => {
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
