jQuery(document).ready(function($) {
    $(".internal").on("click", function(event) {
        //console.log('clicked')

        event.preventDefault()

        const href = $(this).attr("href")
            //console.log(href)

        window.history.pushState(null, null, href)

        $(".internal").removeClass("selected")
        $(this).addClass("selected")

        $.ajax({
            url: href,
            success: function(data) {
                $(".main-content").fadeOut(250, function() {
                    const newPage = $(data).filter(".main-content").html()

                    $(".main-content").html(newPage)

                    $(".main-content").fadeIn(250)
                })
            }
        })

    })
})