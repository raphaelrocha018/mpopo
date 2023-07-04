export default function initLanguageChange() {
    const portuguese = document.querySelectorAll(".portugues");
    const english = document.querySelectorAll(".ingles");

    const btnPort = document.getElementById("portuguese");
    const btnEngl = document.getElementById("english");

    if (btnPort.hasAttribute("checked")) {
        english.forEach((item) => {
            item.classList.add("desativar-lingua");
        });
    }

    function mudarParaIngles(event) {
        portuguese.forEach((item) => {
            item.classList.add("desativar-lingua");
        });
        english.forEach((item) => {
            item.classList.remove("desativar-lingua");
        });
    }

    function mudarParaPortugues(event) {
        english.forEach((item) => {
            item.classList.add("desativar-lingua");
        });
        portuguese.forEach((item) => {
            item.classList.remove("desativar-lingua");
        });
    }

    btnEngl.addEventListener("change", mudarParaIngles);
    btnPort.addEventListener("change", mudarParaPortugues);
}
