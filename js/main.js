$(function(){
    $(".sub").slideUp() //서브 메뉴 css에서 안보이게 말고 하는 법

    $(".gnb, .header_b").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".header_b").stop().animate({"height": "400px"},500)
    })
    
    $(".header_b").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".header_b").stop().animate({"height": "103px"},500)
    })


    $(".move").slick({
        autoplay: true,
        autoplaySpeed:3000,
        dots:true,
        arrows:true
    });

    $(".s4_left_move").slick({
        autoplay: true,
        autoplaySpeed:3000,
        dots:true,
        arrows:false,
        slidesToScroll:2,
    });

    $(".section5 .section5_inner ul li").click(function(e){
        e.preventDefault();
        $(".section5 .section5_inner ul li").toggleClass("on")
    })


    //팝업
    $(".pop").slideDown("fast");

    $(".pop_inner button").click(function(){
        $(".pop").slideUp();
    })

    $(".top").click(function(){
        $("html, body").animate({"scrollTop" : "0"},500)
    })

    $("a").click(function(e){
        var attr = $(this).attr("href")
        if(attr == '#' || attr ==""){
            e.preventDefault();
        }
    })



})