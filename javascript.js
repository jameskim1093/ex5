$(document).ready(function(){
 
//STICKY NAVIGATION
        var stickyNavTop = $('.navigation').offset().top;
        var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyNavTop) { 
            $('.navigation').addClass('sticky');
            } else {
            $('.navigation').removeClass('sticky'); 
            }
            };
 
        stickyNav();
        $(window).scroll(function() {
        stickyNav();
        });
    
//RIGHT SIDEBAR
        $('.right-sidebar li').mouseover(function() {
            $(this).stop();
            $(this).animate({
            right: 20
            });
        });

        $('.right-sidebar li').mouseout(function() {
            $(this).stop().animate({
            right: 0
            });
        });  
});