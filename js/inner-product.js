document.addEventListener("DOMContentLoaded", () => {
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
