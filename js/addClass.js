
$('.show').click(function(){
    $('.box').addClass('active');
});

$('.hide').click(function(){
    $('.box').removeClass('active');
});
$('.toggle').click(function(){
    $('.box').toggleClass('active');
});