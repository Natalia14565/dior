const swiper = new Swiper('.swiper', {

    loop: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const swiperDiscover = new Swiper(".discover__slider", {
    slidesPerView: 2.6,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
    },
});

document.querySelectorAll('.accordeon__triger').forEach((item) => {
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('accordeon__item--active')
    })
});