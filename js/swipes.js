new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    speed: 600,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    initialSlide: 0,
    preloadImages: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    //scrollbar: {
    //el: '.swiper-scrollbar',
    //},
})
