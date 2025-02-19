$(document).ready(function () {
    let $images = $(".img-parallax");
    let targetSection = $images.parent(); // Adjust this if needed
    let sectionOffset = targetSection.offset().top;
    let sectionHeight = targetSection.outerHeight();
    let windowHeight = $(window).height();

    function updateParallax() {
        let scrollTop = $(window).scrollTop();
        let progress = (scrollTop - sectionOffset + windowHeight) / (sectionHeight);

        // Ensure smooth transition and full reset at target section
        progress = Math.min(Math.max(progress, 0), 1);

        $images.each(function () {
            let initialTop = parseFloat($(this).attr("data-initial-top")) || 0;
            let newTop = initialTop * (1 - progress);

            $(this).css("top", `${newTop}px`);
        });

        requestAnimationFrame(updateParallax);
    }

    // Store initial top positions
    $images.each(function () {
        let initialTop = parseFloat($(this).css("top")) || 0;
        $(this).attr("data-initial-top", initialTop);
    });

    // Start the animation loop
    requestAnimationFrame(updateParallax);
});
