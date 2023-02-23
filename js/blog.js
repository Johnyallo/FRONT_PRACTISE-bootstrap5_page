$(document).ready(function () {

    $("#circle1").hover(function () {
        // $("#circle1").animate({ width: '80px', height: '80px' }, 200);
        // $(".who").css({display: "none"});
        // $(".whodouble").css({display: "block"});
        // $(".whodouble").animate({ bottom: "-50px"});

    },
        function () {
            // $("#circle1").animate({ width: '70px', height: '70px' }, 200);
            // $(".icon-book").animate({width: '25px', height: '25px'}, 200);
        });

    $("#circle2").hover(function () {
        // $("#circle2").animate({ width: '80px', height: '80px' }, 200);
    },
        function () {
            // $("#circle2").animate({ width: '70px', height: '70px' }, 200);
            // $(".icon-book").animate({width: '25px', height: '25px'}, 200);
        });

    $("#circle3").hover(function () {
        // $("#circle3").animate({ width: '80px', height: '80px' }, 200);
    },
        function () {
            // $("#circle3").animate({ width: '70px', height: '70px' }, 200);
            // $(".icon-book").animate({width: '25px', height: '25px'}, 200);
        });

    $("#circle4").hover(function () {
        // $("#circle4").animate({ width: '80px', height: '80px' }, 200);
    },
        function () {
            // $("#circle4").animate({ width: '70px', height: '70px' }, 200);
            // $(".icon-book").animate({width: '25px', height: '25px'}, 200);
        });

    $("#circle5").hover(function () {
        // $("#circle5").animate({ width: '80px', height: '80px' }, 200);
    },
        function () {
            // $("#circle5").animate({ width: '70px', height: '70px' }, 200);
            // $(".icon-book").animate({width: '25px', height: '25px'}, 200);
        });

    $("#circle6").hover(function () {
        // $("#circle6").animate({ width: '80px', height: '80px' }, 200);
    },
        function () {
            // $("#circle6").animate({ width: '70px', height: '70px' }, 200);
            // $(".icon-book").animate({width: '25px', height: '25px'}, 200);
        });

        $("#whoreads1").click(function() {
            $("header").animate({opacity: "0.1"});
            $("footer").animate({opacity: "0.1"});
            $(".about").animate({opacity: "0.1"});
            $(".accordion").animate({opacity: "0.1"});
            $(".who").css({display: "none"});
            $(".whodouble").css({display: "block"});
            $("#show1").css({display: "block"});
            $("#show2").css({display: "none"});
        });

        // $("#backwho").click(function() {
        //     $("header").animate({opacity: "1"});
        //     $("footer").animate({opacity: "1"});
        //     $(".about").animate({opacity: "1"});
        //     $(".accordion").animate({opacity: "1"});
        //     $(".who").css({display: "block"});
        //     $(".whodouble").css({display: "none"});
        // });

        $("#whoreads2").click(function() {
            $("header").animate({opacity: "0.1"});
            $("footer").animate({opacity: "0.1"});
            $(".about").animate({opacity: "0.1"});
            $(".accordion").animate({opacity: "0.1"});
            $(".who").css({display: "none"});
            $(".whodouble").css({display: "block"});
            $("#show1").css({display: "none"});
            $("#show2").css({display: "block"});
        });

        $("#whoreads3").click(function() {
            $("header").animate({opacity: "0.1"});
            $("footer").animate({opacity: "0.1"});
            $(".about").animate({opacity: "0.1"});
            $(".accordion").animate({opacity: "0.1"});
            $(".who").css({display: "none"});
            $(".whodouble").css({display: "block"});
            $("#show1").css({display: "none"});
            $("#show2").css({display: "block"});
        });

        $("#whoreads4").click(function() {
            $("header").animate({opacity: "0.1"});
            $("footer").animate({opacity: "0.1"});
            $(".about").animate({opacity: "0.1"});
            $(".accordion").animate({opacity: "0.1"});
            $(".who").css({display: "none"});
            $(".whodouble").css({display: "block"});
            $("#show1").css({display: "none"});
            $("#show2").css({display: "block"});
        });

        $("#backwho").click(function() {
            $("header").animate({opacity: "1"});
            $("footer").animate({opacity: "1"});
            $(".about").animate({opacity: "1"});
            $(".accordion").animate({opacity: "1"});
            $(".who").css({display: "block"});
            $(".whodouble").css({display: "none"});
        });
});