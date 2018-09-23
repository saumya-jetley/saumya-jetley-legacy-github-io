$(document).ready(function() {
  var sections = document.getElementsByClassName('sidemenu-link');
  
  var x = $(window).scrollTop();
  console.log(x)
  var currentSection = $(sections[0]);
  $(sections).each(function(){ 
    var divPosition = $(this).offset().top;
    //the -1 is so that it includes the div 1px before the div leave the top of the window.
    if( divPosition - 1 < x ){
      currentSection = $(this);
    }
            
  });
  var id = currentSection.attr('id');
  $('a.sidemenu').removeClass('onView');
  document.getElementById(id+'-side').classList.add('onView');
  
  $(window).scroll(function(){
    

    var currentScroll = $(this).scrollTop();
    var currentSection = $(sections[0]);
    
    $(sections).each(function(){ 
      var divPosition = $(this).offset().top;
      //the -1 is so that it includes the div 1px before the div leave the top of the window.
      if( divPosition - 1 < currentScroll ){
        currentSection = $(this);
      }
            
    })
    var id = currentSection.attr('id');
   	$('a.sidemenu').removeClass('onView');
   	document.getElementById(id+'-side').classList.add('onView');

  });
});
