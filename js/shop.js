document.addEventListener("DOMContentLoaded", () => {
  // Sub Category Slider
  if (document.getElementById("subCategorySlider")) {
    new Swiper("#subCategorySlider", {
      slidesPerView: "auto",
      spaceBetween: 16,
    });
  }

  // Trigger Price Range Slider
  const priceRangeSliders = document.querySelectorAll(".price_range");

  if (priceRangeSliders.length !== 0) {
    priceRangeSliders.forEach((el) => {
      let self = el;

      const minValue = +self.getAttribute("data-min") || 100,
        maxValue = +self.getAttribute("data-max") || 500,
        valuesForSlider = [minValue, maxValue];

      let fromValue = +self.getAttribute("data-from") || minValue,
        toValue = +self.getAttribute("data-to") || maxValue;

      if (fromValue < minValue || fromValue > maxValue) {
        fromValue = minValue;
      }
      if (toValue < minValue || toValue > maxValue) {
        toValue = maxValue;
      }

      let format = {
        to: function (value) {
          return parseInt(value);
        },
        from: function (value) {
          return parseInt(value);
        },
      };
      // Set Min Value Text
      self
        .closest(".filter_by_price")
        .querySelector(".filter-price-range.min").textContent = `أقل سعر ${
        valuesForSlider[0]
      } ${self.getAttribute("data-currency") || ""}`;
      // // Set Max Value Text
      self
        .closest(".filter_by_price")
        .querySelector(".filter-price-range.max").textContent = `أعلى سعر ${
        valuesForSlider[1]
      } ${self.getAttribute("data-currency") || ""}`;

      const slider = noUiSlider.create(self, {
        start: [fromValue, toValue],
        connect: true,
        step: 1,
        tooltips: true,
        range: {
          min: valuesForSlider[0],
          max: valuesForSlider[1],
        },
        format: format,
        direction: document.querySelector("html").dir,
      });

      // Submit Filter
      const applyPriceFilter = document.getElementById("btnFilterPriceRange");
      if (applyPriceFilter) {
        applyPriceFilter.addEventListener("click", (e) => {
          e.preventDefault();

          const minValue = slider.get()[0];
          const maxValue = slider.get()[1];

          console.log("Min Price Filter Value ", minValue);
          console.log("Max Price Filter Value ", maxValue);
        });
      }
    });
  }
});
