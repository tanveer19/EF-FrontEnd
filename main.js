import "./styles.scss";

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const submenu = item.querySelector(".submenu");
      if (submenu) {
        submenu.style.display = "grid";
      }
    });

    item.addEventListener("mouseleave", () => {
      const submenu = item.querySelector(".submenu");
      if (submenu) {
        // submenu.style.display = "none";
      }
    });
  });
});
