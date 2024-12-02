// 클릭하기 전 로드되자마자 p태그 감춰짐
$('p').css({"display":"none"});

// show(보이기) 버튼 클릭하면 실행되는 코드
$('.show').click(function(){
    // $('p').css({"display":"block"});
    $('p').show()
});

// hide(감추기) 버튼 클릭하면 실행되는 코드
$(".hide").click(function(){
    // $("p").css({"display":"none"});
    $('p').hide()
});