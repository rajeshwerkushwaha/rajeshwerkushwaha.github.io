/**
* Created with rajeshwerkushwaha.github.io.
* User: rajeshwerkushwaha
* Date: 2015-06-23
* Time: 12:51 PM
* To change this template use Tools | Templates.
*/
$(document).ready(function(){
  
  $('.fullslide-dot a').click(function(){
    //alert($( $.attr(this, 'href') ).offset().top + 50);
    
    $('html, body').animate({
        scrollTop: ($( $.attr(this, 'href') ).offset().top - 100)
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

  // Cache selectors
  var lastId1,
      topMenu1 = $(".fullslide-nav"),
      topMenuHeight1 = topMenu1.outerHeight()+50,
      // All list items
      menuItems1 = topMenu1.find("a"),
      // Anchors corresponding to menu items
      scrollItems1 = menuItems1.map(function(){
        var item1 = $($(this).attr("href"));
        if (item1.length) { return item1; }
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
  
  $("body").on("click", ".category-button button", function(){
    
    $(".category-button button").removeClass("active");
    $(this).addClass("active");
    
    if($(this).attr("for") == "sub_cat_1"){
      $(".sub_cat").removeClass("active");
      $(".sub_cat_1").addClass("active");
    }else if($(this).attr("for") == "sub_cat_2"){
      $(".sub_cat").removeClass("active");
      $(".sub_cat_2").addClass("active");
    }else if($(this).attr("for") == "sub_cat_3"){
      $(".sub_cat").removeClass("active");
      $(".sub_cat_3").addClass("active");
    }else if($(this).attr("for") == "sub_cat_4"){
      $(".sub_cat").removeClass("active");
      $(".sub_cat_4").addClass("active");
    }
  });
  
  function changeBanner(cat,no){
        var src='images/categories/'+cat+'/'+no+'.jpg';
        $("#myCarousel img").attr({'src':src});
      }
  
});