jQuery(document).ready(function($) {
    //PAGE TRANSITIONS
    $(".internal").on("click", function(event) {
            //console.log('clicked')

            event.preventDefault()

            const href = $(this).attr("href")
                //console.log(href)

            window.history.pushState(null, null, href)

            $(".internal").removeClass("selected")
                //if clicked name in upper left to go home also 
            if (href == "index.html") {
                $(".home").addClass("selected")
            }
            //if clicked a different internal link
            //styling only changes for nav bar because css for selected only set for nav .selected
            else {
                $(this).addClass("selected")
            }


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
        //DARK MODE TOGGLE

})