$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3,
            navText: ['<i class="fa-regular fa-circle-left fa-2x"></i>', '<i class="fa-regular fa-circle-right fa-2x"></i>']
        }
    }
})