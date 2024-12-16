

$(document).ready(function(){
    $(".divs .step").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#next").click(function(){
        if ($(".divs .step:visible").next().length != 0)
            $(".divs .step:visible").next().show().prev().hide();
        else {
            $(".divs .step:visible").hide();
            $(".divs .step:first").show();
        }
        return false;
    });

    $("#prev").click(function(){
        if ($(".divs .step:visible").prev().length != 0)
            $(".divs .step:visible").prev().show().next().hide();
        else {
            $(".divs .step:visible").hide();
            $(".divs .step:last").show();
        }
        return false;
    });
});






