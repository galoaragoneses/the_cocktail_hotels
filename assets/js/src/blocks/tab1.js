$(document).ready(function () {

  var $block = $("#tab1Container");
  if (!$block.length) return false;
  
  $block.find(".room-type-item").click(function() {
	  
	  if($(this).hasClass("active")) {
		  return;
	  }
	  
	  $(".room-type-item").removeClass("active");
	  
	  $(this).addClass("active");
	  $(this).find("input[type=radio]").prop("checked", true);
	  
  });

});