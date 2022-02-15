$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 100) {
    	$('.content img').addClass('rotatecamera');

	
		
    }
    else {
        $('.content img').removeClass('rotatecamera');

    }
  });
  
  });


  window.addEventListener("scroll",function(){

  
    var nav=document.querySelector(".navbar");
    
    
    var scroll= window.pageYOffset;
    
    if(scroll>200 && scroll<800 ){
      

    nav.classList.add("fixed");	
    nav.classList.remove("fixeddown");	
    
    }
    else if(scroll>800){
    
      nav.classList.remove("fixed");
      nav.classList.add("fixeddown");	
   
        
      }
        
    
    
    else{
    

    nav.classList.remove("fixed");	

      
    }
      
      
    })	


    var scrolltop=document.getElementById("scrolltotop");	
$(window).scroll(function() {
  	if($(document).scrollTop() < 600) {
        scrolltop.style.opacity=0;

		
    }else{

        scrolltop.style.opacity=1;

    }

  });



  var burger=document.querySelector(".burgermenu");
var header=document.querySelector(".navbar");

burger.addEventListener("click",function(){

    header.classList.toggle("openheader");

})
