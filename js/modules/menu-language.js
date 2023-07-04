import outsideClick from "./outside-click.js";

export default function initMenuLanguage() {
    const menuButton = document.querySelector('[data-menu="button-lang"]');
    const menuList = document.querySelector('[data-menu="lang"]');

    function openMenu(event) {
        menuList.classList.toggle("active");
        menuButton.classList.toggle("active");
        outsideClick(menuList, ["click"], () => {
            menuList.classList.remove("active");
            menuButton.classList.remove("active");
        });
    }

    menuButton.addEventListener("click", openMenu);
}
