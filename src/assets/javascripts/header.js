const iconMobile = document.querySelector(".header-menu-icon");
const headerMenu = document.querySelector(".header-menu");
let isMenuOpen = false;
let mobileMobileDOM;

const closeMenu = () => {
  mobileMobileDOM.classList.remove("open");
};

const createMobileMenu = () => {
  mobileMobileDOM = document.createElement("div");
  mobileMobileDOM.classList.add("mobile-menu");
  mobileMobileDOM.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  mobileMobileDOM.append(headerMenu.querySelector("ul").cloneNode(true));
  headerMenu.append(mobileMobileDOM);
};

const openMenu = () => {
  if (mobileMobileDOM) {
  } else {
    createMobileMenu();
  }
  mobileMobileDOM.classList.add("open");
};

const toggleMobileMenu = () => {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
  isMenuOpen = !isMenuOpen;
};

iconMobile.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMobileMenu();
});

window.addEventListener("click", (event) => {
  if (isMenuOpen) {
    toggleMobileMenu();
  }
});

window.addEventListener("resize", (event) => {
  if (window.innerWidth > 480 && isMenuOpen) {
    toggleMobileMenu();
  }
});
