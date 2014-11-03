$(document).ready(function(){

  $(".myh1").click(function(){
    $("h2").hide(function(){
    	console.log(this);
    });
  });


  $(".my1a").click(function(){
  	$("#myul").hide();
  	$("h2").addClass("animate");
  });

});

