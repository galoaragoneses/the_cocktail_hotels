$(document).ready(function () {

  var $block = $("nav");
  if (!$block.length) return false;

  $("nav#menu a").click(function() {
    var tabName = $(this).attr("href").substring(1);
    
    $("section.page-section").hide();
    $("section.page-section#" + tabName + "Container").fadeIn();
	
	$("nav#menu a").removeClass('active');
	$(this).addClass('active');
  });

});