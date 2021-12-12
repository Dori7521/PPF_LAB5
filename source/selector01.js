$(document).ready(function(){

    $("#button_01").click(function(){
        $("#p_01").hide(500);
        $("#p_02").hide(500);
    })

    $("#button_02").click(function(){
        $("#p_03").hide();
    })

    $("#button_03").click(function(){
        $(".cp_01").hide();
    })

    $("#button_04").click(function(){
        $("p").show();
    })

    $("#button_05").click(function(){
        $("li:even").hide();
    })

    $("#button_06").click(function(){
        $("li:odd").hide();
    })

    $("#button_07").click(function(){
        $("ul li:first-child").hide();
    })

    $("#button_08").click(function(){
        $(".li_04").hide();
    })

    $("#button_09").click(function(){
        $(".li_04").toggle();
    })

})