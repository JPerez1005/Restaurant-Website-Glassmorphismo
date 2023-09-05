// Initialize Swiper
var swiper = new Swiper('.cardSwiper',{
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween:30,
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        800: {
            slidesPerView:2,
            spaceBetween:20,
        },
        1200:{
            slidesPerview:2,
            spaceBetween:20,
        },
        2000:{
            slidesPerview:2,
            spaceBetween:20,
        },
    },
});