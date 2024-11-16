$(document).ready(function(){
    topslide();
    gnbminislide();
    titlemomoslide();
    languageslide();
    threslide();
    helloslide();
    clinicslide();
    accodian();
    gnbControl();
    menubtn();
})

function topslide(){
    $(".topmainslide").bxSlider({
        wrapperClass: "topsub",
        minSlides: 1,
        maxSlides: 3,
        ticker: true,
        tickerHover: true,
        speed: 50000,
        slideMargin: 5,
        slideWidth: 1500

    });
}

function gnbminislide(){
    $(".gnb_slide").bxSlider({
        wrapperClass: "gnbsub",
        auto: true,
        controls: true,
        page: false
    })
}

function titlemomoslide(){
    $(".mainslide").bxSlider({
        mode: "fade",
        wrapperClass: "mainsub",
        auto: true,
        controls: true,
        page: false
    })
}

function languageslide(){
    $(".lang_slide").bxSlider({
        wrapperClass: "langsub",
        auto: true,
        controls: true,
        page: false,
        maxSlides: 6,
        minSlides: 1,
        slideWidth: 390,
        slideMargin: 55,
        moveSlides : 1

    })
}

function threslide(){
    $(".therapyslide").bxSlider({
        wrapperClass: "therapysub",
        auto: true,
        controls: true,
        page: false,
        // maxSlides: 6,
        // minSlides: 1,
        // slideWidth: 500,
        // slideMargin: 50,
        // moveSlides : 1
        maxSlides: 6,
        minSlides: 1,
        slideWidth: 295,
        slideMargin: 20,
        moveSlides: 1,
        responsive: true

    })
}

function helloslide(){
    $(".fd_hi").bxSlider({
        mode: "fade",
        wrapperClass: "hellosub",
        auto: true,
        controls: true,
        page: false
    })
}


$(function () {
    //탭메뉴01
    var tab_Btn = $(".tab_btn > ul > li");
    var tab_Cont = $(".tab_con > ul");
    tab_Cont.hide().eq(0).show();
    tab_Btn.click(function (e) {
         e.preventDefault();
         var target = $(this);
         var index = target.index();
         tab_Btn.removeClass("active");
         target.addClass("active");
         tab_Cont.hide();
         tab_Cont.eq(index).show();
    });
});

$(function () {
    //탭메뉴02
    var tab_Btn = $(".tab_bt > ul > li");
    var tab_Cont = $(".tab_cont > ul");
    tab_Cont.hide().eq(0).show();
    tab_Btn.click(function (e) {
         e.preventDefault();
         var target = $(this);
         var index = target.index();
         tab_Btn.removeClass("active");
         target.addClass("active");
         tab_Cont.hide();
         tab_Cont.eq(index).show();
    });
});

function clinicslide(){
    $(".clinic_sli").bxSlider({
        wrapperClass: "clinicsub",
        auto: true,
        controls: true,
        page: false
    });
}

function accodian(){
    $('.inforsubgo li strong').click(function(){
        $(this).toggleClass("active");
    });
}

function gnbControl(){
    $("button").click(function(){
        $(".h_right").toggleClass("active");
    });
}


function menubtn(){
    var menuBar = $("button");
    $('.mui').click(function(){
        $(this).toggleClass('close');
         $(menuBar).toggleClass('active');
    });
    $('nav ul').click(function(e){
        e.stopPropagation();
    });
    $('header .h_left ul li button').click(function(){
        if($('.h_right > div').hasClass('active')){
            $('.h_right').removeClass('active');
            $('.h_right > div').removeClass('active');
        }else{
            $(this).addClass('active');
            $(this).next('ul').addClass('active');
        }
    });
}

