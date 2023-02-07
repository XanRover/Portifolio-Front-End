const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
});

/*fechar menu quando click*/
const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})

/*animar os itens na tela que tenham o atributo data-anime */
const item = document.querySelectorAll("[data-anime");

const animeScroll = () => {
    const windowTop = window.pageYOffset + innerHeight * 0.85;
    item.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        }else{
            element.classList.remove("animate");
        }
    });
};

animeScroll();
window.addEventListener("scroll", ()=>{
    animeScroll();
})