$(document).ready(function () {

  var $block = $("#tab2Container");
  if (!$block.length) return false;
  
  $block.find(".optional-services-header").click(serviceHeaderClickEventFn);
  
  $block.find(".more-information-link").click(moreInformationLinkClickEventFn);
  
  function serviceHeaderClickEventFn() {    
    var $elem = $(this),
      isOpened = $elem.hasClass("opened"),
      $servicesContainer = $elem.closest(".optional-services").find(".optional-service");
    
    if(isOpened) {
      $elem.removeClass("opened");
      $servicesContainer.fadeOut();
    } else {
      $elem.addClass("opened");
      $servicesContainer.fadeIn();
    }
    
  }
  
  function moreInformationLinkClickEventFn() {
    
    var $elem = $(this),
      isOpened = $elem.hasClass("opened"),
      $infoContainer = $elem.closest(".optional-service").find(".more-information-container");
    
    if(isOpened) {
      $elem.removeClass("opened");
      $infoContainer.fadeOut();
    } else {
      $elem.addClass("opened");
      $infoContainer.fadeIn();
    }
    
  }

});