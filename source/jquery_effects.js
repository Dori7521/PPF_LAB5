$(document).ready(function(){
    $("#btn_1").click(function(){
        $(".square").fadeOut("fast");
    })

    $("#btn_2").click(function(){
        $(".triangle").fadeOut("slow");
    })

    $("#btn_3").click(function(){
        $(".circle").fadeOut(800);
    })
    
    $("#btn_4").click(function(){
        $(".square").fadeToggle();
    })

    $("#btn_5").click(function(){
        $("p").slideDown();
    })

    $("#btn_6").click(function(){
        $("p").slideUp();
    })

    $("#btn_7").click(function(){
        $("p").slideToggle();
    })

    $("#btn_8").click(function(){
        var item = $(".redSquare");
        item.animate({top: '170px'}, "slow");
        item.animate({right: '0'}, "slow");
        
    })


})