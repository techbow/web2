$(document).ready(function(){

  $(".myh1").click(function(){
    $("h2").hide(function(){
    	console.log(this);
    });
  });


  $(".my1a").click(function(){
  	$(".my1p").removeClass("my1p").addClass("my2p");
  });

});

