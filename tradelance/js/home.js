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
  
  
  // Cache selectors
  var lastId,
      topMenu = $("#fullslide-nav"),
      topMenuHeight = topMenu.outerHeight()+50,
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

  // Bind to scroll
  $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+topMenuHeight;

     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";

     if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
           .parent().removeClass("active")
           .end().filter("[href=#"+id+"]").parent().addClass("active");
     }                   
  });
  
});