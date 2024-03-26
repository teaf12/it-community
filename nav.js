// 
$(function() {
    'use strict';
    $('.info_list li').click(function() {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.content article').hide();
        $('.' + $(this).data('class')).fadeIn();
    });

    $('.icon').click(function(){
        $('.home_list li').toggle("slide");
    });


});