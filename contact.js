$(function() {

    var deg = 0;
    var rotate = 1;
    var club_rotate = setInterval(club_rotate, 30);
    $('.circle-item > li').not(".circle-item > *:nth-of-type(8)").mouseenter(function() {
        rotate = 0
    });
    $('.circle-item > li').not(".circle-item > *:nth-of-type(8)").mouseleave(function() {
        rotate = 1
    });
    function club_rotate() {
        if (rotate == 0) {
            return
        }
        deg = get_deg(deg + 1);
        var deg0 = deg;
        var $data = $('.circle-item').children().not(".circle-item > *:nth-of-type(8)");
        var length = 13;
        if ($(window).width() <= 540) {
            length = 9
        }
        $data.each(function() {
            $(this).css("-webkit-transform", "rotate(" + deg0 + "deg) translate(" + length + "em) rotate(-" + deg0 + "deg)").css("transform", "rotate(" + deg0 + "deg) translate(" + length + "em) rotate(-" + deg0 + "deg)");
            deg0 = get_deg(deg0 + 51)
        })
    }

    function get_deg(deg0) {
        if (deg0 > 360)
            return (deg0 - 360);
        else return deg0
    }
});
    
