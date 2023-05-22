

$(document).ready(() => {
    $("#nav-button").click(() => {
        $("#nav-items").toggle();
    })
    
    //Some jquery for practice.
    $("#intro-header a").hover(function () {
        $(this).css("background-color", "#78cf53ac");
        $(this).css("color", "#ffffff");

    }, function () { $(this).css("background-color", ""); $(this).css("color", "black") }
    )
}
)

