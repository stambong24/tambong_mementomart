$(".slide-1").hide()
$(".slide-2").hide()
$("#menu-screen").hide()
$("#return").hide()
$("#recipe-1").hide()
$("#recipe-2").hide()


$(".intro-screen").click(function(){
    $(".intro-screen").toggleClass("active");
    $(".intro-screen").fadeOut(1500);
    $("#menu-screen").fadeIn(5000);
    $("#return").fadeIn(5000);

});

/*----MENU BUTTONS-----*/

$("#rabbit-7-big").click(function(){

    $("#menu-screen").hide();
    $(".slide-2").fadeIn()
  

})

$("#rabbit-6-big").click(function(){

    $("#menu-screen").hide();
    $(".slide-1").fadeIn()
  

})

$(".return-menu").click(function(){

    $("#menu-screen").fadeIn();
    $(".slide-2").hide();
    $(".slide-1").hide();
   

  

})



/*----SPECIALITY BUTTONS-----*/

$("#specialty-1").click(function(){


    $("#instructions").hide();
    $("#recipe-2").hide();
    $("#recipe-1").fadeIn(300);


})

$("#specialty-2").click(function(){


    $("#instructions").hide();
    $("#recipe-1").hide();
    $("#recipe-2").fadeIn(300);

    

})