$("#main-content").hide()

$("#splash-screen").click(function(){

    $("#splash-screen").fadeOut(1500);
    $("#splash-screen").addClass("active")
    $("#main-content").fadeIn(6000);
    $("#receipt").addClass("active-2")
    $("#about-button").addClass("button-fade")
    $("#browse-button").addClass("button-fade")
    $("#red-doodle").fadeIn(6000);

})

