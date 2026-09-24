function irPara(secao) {
    document.getElementById(secao).scrollIntoView({
        behavior: "smooth"
    });
}

function pagina(pagina){
    window.location.href = pagina;
}

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});