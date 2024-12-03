$('.box').hide();

// slide
$('.show').click(function(){
    $('.box').slideDown();
});

$('.hide').click(function(){
    $('.box').slideUp();
});

$('.toggle').click(function(){
    $('.box').slideToggle();
});

// fade
// $('.show').click(function(){
//     $('.box').fadeIn();
// });

// $('.hide').click(function(){
//     $('.box').fadeOut();
// });

// $('.toggle').click(function(){
//     $('.box').fadeToggle();
// });