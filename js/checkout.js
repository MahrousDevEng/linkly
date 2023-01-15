document.addEventListener("DOMContentLoaded", () => {

  const wz_class = ".wizard";

  let args = {
    wz_class: wz_class,
    wz_nav_style: "progress",
    wz_button_style: ".btn",
    wz_ori: "horizontal",
    buttons: true,
    prev: "السابق",
    next: "التالى",
    finish: "اتمام الطلب",
  };

  const wizard = new Wizard(args);

  wizard.init();

  const $wz_doc = document.querySelector(wz_class);

  // Submit
  $wz_doc.addEventListener("submitWizard", function (e) {
    location.href = "thank-you.html";
  });
});
