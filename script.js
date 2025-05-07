

const menuList = document.getElementById("menuList");
const menuIcon = document.getElementById("menuIcon");
const menuToggle = document.getElementById("menuToggle"); 

// Ensure menu is hidden initially
menuList.style.maxHeight = "0px";

menuToggle.addEventListener("click", () => {
  const isOpen = menuList.style.maxHeight !== "0px";

  if (isOpen) {
    menuList.style.maxHeight = "0px";
    menuIcon.classList.remove("ri-close-line");
    menuIcon.classList.add("ri-menu-3-line");
  } else {
    menuList.style.maxHeight = menuList.scrollHeight + "px";
    menuIcon.classList.remove("ri-menu-3-line");
    menuIcon.classList.add("ri-close-line");
  }
});

