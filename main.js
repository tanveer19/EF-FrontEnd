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
  const searchInput = document.getElementById("searchInput");
  const menuList = document.querySelector(".menu-list");

  searchIcon.addEventListener("click", () => {
    menuList.style.display = "none";
    searchIcon.style.display = "none";
    searchInput.style.display = "block";
    searchInput.focus();
  });

  searchInput.addEventListener("blur", () => {
    searchIcon.style.display = "block";
    searchInput.style.display = "none";
    menuList.style.display = "flex";
  });
});
