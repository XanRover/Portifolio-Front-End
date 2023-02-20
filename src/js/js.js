const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            link.classList.add('active');
        }
    });
});

window.addEventListener('scroll', () => {
    const currentPos = window.pageYOffset;

    navLinks.forEach(link => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                const targetTop = rect.top + currentPos;
                const targetBottom = rect.bottom + currentPos;

                if (currentPos >= targetTop && currentPos < targetBottom) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        }
    });
});


menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
});


const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})


const item = document.querySelectorAll("[data-anime");

const animeScroll = () => {
    const windowTop = window.pageYOffset + innerHeight * 0.85;
    item.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
};

animeScroll();
window.addEventListener("scroll", () => {
    animeScroll();
})



