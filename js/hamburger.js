document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.querySelector(".navbar .mobile-menu-toggle");
    const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

    toggleMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
});
