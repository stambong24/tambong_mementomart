$("#rabbit-desc-frame").hide()
$("#panda-desc-frame").hide()
$("#pocky-desc-frame").hide()
$("#yakult-desc-frame").hide()
$("#ramune-desc-frame").hide()
$("#sachima-desc-frame").hide()

$("#rabbit-present").hide()
$("#ramune-present").hide()
$("#sachima-present").hide()
$("#yakult-present").hide()
$("#panda-present").hide()
$("#pocky-present").hide()

$("#rabbit").mouseover(function(){
    $("#rabbit-desc-frame").fadeIn();
    $("#rabbit-present").fadeIn();
    $("#basket-desc-frame").hide();
    $("#basket").hide();
    $("#instructions").hide();
});

$("#rabbit").mouseleave(function(){
     $("#rabbit-desc-frame").hide();
     $("#basket-desc-frame").fadeIn();
     $("#rabbit-present").hide();
     $("#instructions").fadeIn();
     $("#basket").fadeIn();
 });

 $("#panda").mouseover(function(){
    $("#panda-desc-frame").fadeIn();
    $("#panda-present").fadeIn();
    $("#basket-desc-frame").hide();
    $("#basket").hide();
    $("#instructions").hide();
});

$("#panda").mouseleave(function(){
    $("#panda-desc-frame").hide();
    $("#basket-desc-frame").fadeIn();
    $("#panda-present").hide();
    $("#instructions").fadeIn();
    $("#basket").fadeIn();
});

$("#pocky").mouseover(function(){
    $("#pocky-desc-frame").fadeIn();
    $("#pocky-present").fadeIn();
    $("#basket-desc-frame").hide();
    $("#basket").hide();
    $("#instructions").hide();
});

$("#pocky").mouseleave(function(){
    $("#pocky-desc-frame").hide();
    $("#basket-desc-frame").fadeIn();
    $("#pocky-present").hide();
    $("#instructions").fadeIn();
    $("#basket").fadeIn();
});

$("#yakult").mouseover(function(){
    $("#yakult-desc-frame").fadeIn();
    $("#yakult-present").fadeIn();
    $("#basket-desc-frame").hide();
    $("#basket").hide();
    $("#instructions").hide();
});

$("#yakult").mouseleave(function(){
    $("#yakult-desc-frame").hide();
    $("#basket-desc-frame").fadeIn();
    $("#yakult-present").hide();
    $("#instructions").fadeIn();
    $("#basket").fadeIn();
});

$("#ramune").mouseover(function(){
    $("#ramune-desc-frame").fadeIn();
    $("#ramune-present").fadeIn();
    $("#basket-desc-frame").hide();
    $("#basket").hide();
    $("#instructions").hide();
});

$("#ramune").mouseleave(function(){
    $("#ramune-desc-frame").hide();
    $("#basket-desc-frame").fadeIn();
    $("#ramune-present").hide();
    $("#instructions").fadeIn();
    $("#basket").fadeIn();
});

$("#sachima").mouseover(function(){
    $("#sachima-desc-frame").fadeIn();
    $("#sachima-present").fadeIn();
    $("#basket-desc-frame").hide();
    $("#basket").hide();
    $("#instructions").hide();
});

$("#sachima").mouseleave(function(){
    $("#sachima-desc-frame").hide();
    $("#basket-desc-frame").fadeIn();
    $("#sachima-present").hide();
    $("#instructions").fadeIn();
    $("#basket").fadeIn();
});