$('.owl-carousel').owlCarousel({
    loop:true,
    center:true,
    dots: false,
    nav: false,
    autoplay: true,
    margin:15,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            loop:true
        },
        600:{
            items:3,
            loop:true
        },
        1000:{
            items:5,
            loop:true
        }
    }
})