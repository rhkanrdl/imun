$(function () {



    var windowh = $(window).height();
    var windowW = $(window).width();


    $(window).on("resize", function(){
        
        windowh = $(window).height();
        windowW = $(window).width();
        

    });




    $("button.main-menu").on("click", function () {


        if (windowW < 1200) {
            $("nav#main-menu").toggleClass("on");
        } else {
            $("nav#main-menu div.menus>ul").removeClass("list");
            $("nav#main-menu div.menus>ul").addClass("allMenu")
        }


    });

    $("nav#main-menu button.close").on("click", function () {
        $("nav#main-menu").toggleClass("on");
    });

    $("nav#main-menu h3 a").on("click", function (e) {
        
        $("nav#main-menu h3").removeClass("on");



        if (windowW < 1200 && $(this).parent().parent().find("ul").length) {

            $(this).parent().addClass("on");
            e.preventDefault();

        }
        else {

            $("nav#main-menu h3 a").unbind();

        }
    });



    $("nav#main-menu h3 a").on("mouseenter", function(){
        $("nav#main-menu h3").removeClass("on");
        $(this).parent().addClass("on");
    });

    $("nav#main-menu ul.list li ul").on("mouseleave", function(){
        $("nav#main-menu h3").removeClass("on");
    });

        $(document).on("mousemove", function(e){

            if (windowW > 1200 && e.pageY > 300) {
                $("nav#main-menu").removeClass("on");
                $("nav#main-menu h3").removeClass("on");
                $("nav#main-menu div.menus>ul").addClass("list");
                $("nav#main-menu div.menus>ul").removeClass("allMenu");
            }
        });

    
        $("div.find-form").last().hide();

        var radioContent = $("div.find-form");
    
    
        $("div.find-type input[type='radio']").click(function() {
    
            radioContent.hide();
            radioContent.eq($("input[type='radio']").index(this)).show();
    
    
        });




});
