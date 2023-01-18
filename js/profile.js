document.addEventListener("DOMContentLoaded", () => {
  // Trigger Lazy Load
  const lazyLoadInstance = new LazyLoad();

  // Toggle Show Hide Password
  const passToggleTrigger = document.querySelectorAll(".btnTogglePass");

  if (passToggleTrigger.length !== 0) {
    passToggleTrigger.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const inputPass = e.currentTarget
          .closest(".input-password")
          .querySelector("input");
        if (inputPass.getAttribute("type") === "password") {
          e.currentTarget.innerHTML = `<img
            src="images/icons/eye-off.svg"
            width="16"
            height="16"
            alt="toggle show hide password"
          />`;

          inputPass.setAttribute("type", "text");
        } else {
          e.currentTarget.innerHTML = `<img
            src="images/icons/eye.svg"
            width="16"
            height="16"
            alt="toggle show hide password"
          />`;

          inputPass.setAttribute("type", "password");
        }
      });
    });
  }
});
