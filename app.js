let count = 0

$('.hamburger').click(() => {
    if (count === 0){
        $('.menu').css('transform', 'translate(0)')
        $('.main').css('filter', 'blur(4px)')
        count++
    } else {
        $('.menu').css('transform', 'translate(-100%)')
        $('.main').css('filter', 'blur(0px)')
        count--
    }
})

$('.menu .fas').click(() => {
    $('.menu').css('transform', 'translate(-100%)')
        $('.main').css('filter', 'blur(0px)')
        count = 0
})

$('.menu-container a').click(() => {
    $('.menu').css('transform', 'translate(-100%)')
    $('.main').css('filter', 'blur(0px)')
        count = 0;
})

$(window).scroll(() => {
    if($(document).scrollTop() > 1){
        $('.menu').css('transform', 'translate(-100%)')
        $('.main').css('filter', 'blur(0px)')
        count = 0; 
    }
})