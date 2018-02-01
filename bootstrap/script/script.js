$(document).ready(function () {

    $("#aboutMe1").css("display", "none");
    $("#education1").css("display", "none");
    $("#hobbyImg1").css("display", "none");
    $("#projects1").css("display", "none");
    $("#contact1").css("display", "none");




    $("#aboutMe1").fadeIn(2500, function () {
        $(this).css("display", "normal");

    });
    $("#education1").fadeIn(3000, function () {
        $(this).css("display", "normal");

    });
    $("#hobbyImg1").fadeIn(3500, function () {
        $(this).css("display", "normal");

    });
    $("#projects1").fadeIn(4000, function () {
        $(this).css("display", "normal");

    });
    $("#contact1").fadeIn(4500, function () {
        $(this).css("display", "normal");

    });
    $(window).scroll(function () {
        $(".section").fadeIn(3000);



    });

});