$('li').mouseenter(function(){
    $(this).children('.sub-menus').stop().slideDown();
});

$('li').mouseleave(function(){
    $(this).children('.sub-menus').stop().slideUp();
});


$('.btn span').click(function(){
    // $('span').toggleClass('active');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});