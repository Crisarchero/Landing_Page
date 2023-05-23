

$(document).ready(() => {
    $("*").animate({opacity:'1'}, "slow")
    $('.transparent-bg').animate({opacity:'0.5'})
    
    
    $("#nav-button").click(() => {
       
        $("#nav-items").animate({height:'toggle'})
    })
    
    //Some jquery for practice.
    $("#intro-header a").hover(function () {
        $(this).css("background-color", "#78cf53ac");
        $(this).css("color", "#ffffff");

    }, function () { $(this).css("background-color", ""); $(this).css("color", "black") }
    )
}
)

