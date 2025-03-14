$("#buldak-desc-frame").hide()
$("#honey-desc-frame").hide()
$("#pancit-desc-frame").hide()
$("#rice-desc-frame").hide()
$("#shrimp-desc-frame").hide()
$("#spam-desc-frame").hide()

$("#buldak-present").hide()
$("#shrimp-present").hide()
$("#spam-present").hide()
$("#rice-present").hide()
$("#honey-present").hide()
$("#pancit-present").hide()

$("#buldak").mouseover(function(){
    $("#buldak-desc-frame").fadeIn();
    $("#buldak-present").fadeIn();
    $("#basket-desc-frame").hide();
    $("#basket").hide();
    $("#instructions").hide();
});

$("#buldak").mouseleave(function(){
     $("#buldak-desc-frame").hide();
     $("#basket-desc-frame").fadeIn();
     $("#buldak-present").hide();
     $("#instructions").fadeIn();
     $("#basket").fadeIn();
 });

 $("#honey").mouseover(function(){
    $("#honey-desc-frame").fadeIn();
    $("#honey-present").fadeIn();
    $("#basket-desc-frame").hide();
    $("#basket").hide();
    $("#instructions").hide();
});

$("#honey").mouseleave(function(){
    $("#honey-desc-frame").hide();
    $("#basket-desc-frame").fadeIn();
    $("#honey-present").hide();
    $("#instructions").fadeIn();
    $("#basket").fadeIn();
});

$("#pancit").mouseover(function(){
    $("#pancit-desc-frame").fadeIn();
    $("#pancit-present").fadeIn();
    $("#basket-desc-frame").hide();
    $("#basket").hide();
    $("#instructions").hide();
});

$("#pancit").mouseleave(function(){
    $("#pancit-desc-frame").hide();
    $("#basket-desc-frame").fadeIn();
    $("#pancit-present").hide();
    $("#instructions").fadeIn();
    $("#basket").fadeIn();
});

$("#rice").mouseover(function(){
    $("#rice-desc-frame").fadeIn();
    $("#rice-present").fadeIn();
    $("#basket-desc-frame").hide();
    $("#basket").hide();
    $("#instructions").hide();
});

$("#rice").mouseleave(function(){
    $("#rice-desc-frame").hide();
    $("#basket-desc-frame").fadeIn();
    $("#rice-present").hide();
    $("#instructions").fadeIn();
    $("#basket").fadeIn();
});

$("#shrimp").mouseover(function(){
    $("#shrimp-desc-frame").fadeIn();
    $("#shrimp-present").fadeIn();
    $("#basket-desc-frame").hide();
    $("#basket").hide();
    $("#instructions").hide();
});

$("#shrimp").mouseleave(function(){
    $("#shrimp-desc-frame").hide();
    $("#basket-desc-frame").fadeIn();
    $("#shrimp-present").hide();
    $("#instructions").fadeIn();
    $("#basket").fadeIn();
});

$("#spam").mouseover(function(){
    $("#spam-desc-frame").fadeIn();
    $("#spam-present").fadeIn();
    $("#basket-desc-frame").hide();
    $("#basket").hide();
    $("#instructions").hide();
});

$("#spam").mouseleave(function(){
    $("#spam-desc-frame").hide();
    $("#basket-desc-frame").fadeIn();
    $("#spam-present").hide();
    $("#instructions").fadeIn();
    $("#basket").fadeIn();
});