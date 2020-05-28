$(document).ready(function () {
    var videobackground = new $.backgroundVideo($('body'), {
        "align": "centerXY",
        "width": 1280,
        "height": 720,
        "path": "libs/HTML5-Background-Video-master/video/",
        "filename": "video-bg",
        "types": ["mp4", "ogg", "webm"],
        "preload": true,
        "autoplay": true,
        "loop": true
    });
});
//carousel
$(".owl-carousel").owlCarousel({
    loop:true,
    items: 1,
    margin:130,
    stagePadding:30,
    onTranslated: animateImgFunc,
    onChanged: animateImgClear
});


function animateImgFunc() {
    $(".owl-carousel .active .inner-testimonial img").addClass("animated bounceIn full-opacity");
}


function animateImgClear() {
    $(".owl-carousel .active .inner-testimonial img").removeClass("animated bounceIn full-opacity");
}



//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//knopka vverh
$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="Вверх"><span class="material-icons-keyboard_arrow_up"></span></a>');
});

$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

$(function() {
    $("#go-top").scrollToTop();
});


$.fn.extend({

    lightBox: function(){

        $(this).each(function(){

            $(this).on('click', $.proxy(function(e) {

                e.preventDefault();

                var link = this;

                var obLightBox, prev, next, title, gallery;

                if(!!$(this).data('lightbox'))

                    gallery = $('[data-lightbox="'+$(this).data('lightbox')+'"]');

                var setNavActivity = function(index) {

                    if(index==0)

                        prev.addClass('lightbox-inactive');

                    else

                        prev.removeClass('lightbox-inactive');

                    if(index==(gallery.length-1))

                        next.addClass('lightbox-inactive');

                    else

                        next.removeClass('lightbox-inactive');

                }

                var navigate = function(e) {

                    e.preventDefault();

                    var cur_index = $(gallery).index(link);

                    cur_index=$(this).data('nav')=='prev'?cur_index-1:cur_index+1;

                    if(cur_index<0 || cur_index>=gallery.length)

                        return;

                    var img = obLightBox.find('img');

                    link = gallery[cur_index];

                    img.prop('src',link.href);

                    title.html(link.hasAttribute('title')?link.getAttribute('title'):'');

                    setNavActivity(cur_index);

                };

                obLightBox = $('<div/>')

                    .addClass('lightbox')

                    .append(

                        $('<img>')

                            .attr('src',link.href)

                            .attr('alt',''))

                    .append(

                        title = $('<div/>')

                            .addClass('lightbox-title')

                            .html(link.hasAttribute('title')?link.getAttribute('title'):''))

                    .append(

                        $('<a/>')

                            .addClass('lightbox-close')

                            .attr('title',"Close")

                            .attr('href',"#")

                            .on('click',function(e){

                                e.preventDefault();

                                obLightBox.remove();

                            }))

                    .append(

                        prev = $('<a/>')

                            .addClass('lightbox-prev')

                            .addClass('lightbox-inactive')

                            .attr('title',"Previous")

                            .attr('href',"#")

                            .data('nav','prev')

                            .on('click',navigate))

                    .append(

                        next = $('<a/>')

                            .addClass('lightbox-next')

                            .addClass('lightbox-inactive')

                            .attr('title',"Next")

                            .attr('href',"#")

                            .data('nav','next')

                            .on('click',navigate));

                if(!!gallery && gallery.length>1) {

                    setNavActivity($(gallery).index(link));

                } else {

                    prev.remove();

                    next.remove();

                }

                $(document.body).append(obLightBox);

            }, this));

        });

    }

});



$('[data-lightbox]').lightBox();