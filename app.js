var header = $('.flex-wrapper'),
headerH = header.height();

$(document).scroll(function() {
if ($(this).scrollTop() <= headerH / 2) {
    header.css({
        height: -($(this).scrollTop() - headerH) 
    });
    $('.rainbow-banner').fadeOut();
} else {
    header.css({
        height: headerH / 2
    });
    $('.rainbow-banner').fadeIn();
}
}).scroll(); 

