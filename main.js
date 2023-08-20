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

  //search

  const searchContainer = document.querySelector(".search-container");
  const searchIcon = searchContainer.querySelector(".search-icon");
  const searchInput = searchContainer.querySelector(".search-input");
  const navbar = document.querySelector(".navbar");
  const menuList = document.querySelector(".menu-list");

  searchIcon.addEventListener("click", () => {
    searchIcon.style.display = "none";
    menuList.style.display = "none";
  });

  searchInput.addEventListener("blur", () => {
    searchIcon.style.display = "block";
  });
});
