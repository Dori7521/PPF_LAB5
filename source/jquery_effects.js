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
        item.animate({top: '170px'}, "slow")
        item.animate({width: '270px', color: "#EFB14A"}, "slow");
        item.animate({width: '100px', left:'170px',fontSize: "20px"}, "slow");
        item.animate({top:'0px', height: '270px'}, "slow");
        item.animate({height: '100px', backgroundColor: "blue"}, "slow");
        item.animate({width: '270px',left: '0px'}, "slow");
        item.animate({width: '100px', color:"black",backgroundColor:"#E50914",fontSize:"16px"}, "slow");
    })

    $("#btn_9").click(function(){
        $('.redSquare').stop(false);
    })

    $("#btn_10").click(function(){
        $('.redSquare').hide("slow",function(){
            alert('ukryto kwadrat')
        });
    })

    $("#btn_11").click(function(){
        $('.redSquare').css("color","pink")
        .slideUp(300)
        .slideDown(300);
    })
})