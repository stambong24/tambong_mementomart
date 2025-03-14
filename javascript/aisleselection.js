$("#sweet-food").hide();
$("#salty-food").hide();
$("#red-doodle").hide();
$("#blue-doodle").hide();
$("#red-label").hide();
$("#blue-label").hide();

$("#basket-red").mouseover(function(){

    $("#sweet-food").fadeIn(300);
    $("#red-doodle").fadeIn(600);
    $("#red-label").fadeIn(400);
    $("#red-doodle").addClass("red-doodle-active");
    $("#sweet-food").addClass("sweet-food-active");
    $("#which").hide();
})

$("#basket-red").mouseleave(function(){
    $("#sweet-food").fadeOut(400);
    $("#red-doodle").fadeOut(100);
    $("#red-label").fadeOut(400);
    $("#which").fadeIn(400);

})

$("#blue-basket").mouseover(function(){

    $("#salty-food").fadeIn(300);
    $("#blue-doodle").addClass("blue-doodle-active");
    $("#salty-food").addClass("salty-food-active");
    $("#blue-label").fadeIn(400);
    $("#which").hide();
    $("#blue-doodle").fadeIn(600);
})

$("#blue-basket").mouseleave(function(){
    $("#salty-food").fadeOut(400);
    $("#which").fadeIn(400);
    $("#blue-doodle").fadeOut(100);
    $("#blue-label").fadeOut(400);

})




