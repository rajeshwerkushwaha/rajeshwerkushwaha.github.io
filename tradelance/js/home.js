/**
* Created with rajeshwerkushwaha.github.io.
* User: rajeshwerkushwaha
* Date: 2015-06-23
* Time: 12:51 PM
* To change this template use Tools | Templates.
*/
$(document).ready(function(){
  
  $('.fullslide-dot a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 600);
    $('#fullslide-nav .fullslide-dot').removeClass('active');
    $(this).parent().addClass('active');
  });
  
});