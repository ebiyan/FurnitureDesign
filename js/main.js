'use strict';

$(function(){
  $('.menubtn').click(function(){    

    if($('.menubtn').hasClass('active')){
      $('.menubtn').removeClass('active');
      $('.menu-modal-wrapper').fadeOut();
    }else{
      $('.menubtn').addClass('active');
      $('.menu-modal-wrapper').fadeIn();
    }
    
    
  })


});