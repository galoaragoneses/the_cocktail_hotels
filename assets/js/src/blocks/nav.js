$(document).ready(function () {

  var $block = $("nav");
  if (!$block.length) return false;
  
  var sections = [
	{
		id: "tab1",
		default: true
	},
	{
		id: "tab2"
	}
  ];
  
  //Set Events region
  $(window).on('hashchange', _navigationEventFn);
  $("nav#menu a").click(_tabOnClick);
  
  //First Navigate
  _navigationEventFn();
  
  function _getDefaultTabName() {
	  var defaultTabHash = $(sections).filter(function(i, section){ return section.default; })[0];
	  if(typeof defaultTabHash === "undefined") {
		  throw "Navigation conf error. There is no tab configured by default";
	  }
	  return defaultTabHash.id;
  }
  
  function _isCorrectTab(tabName) {
	  var existingTab = $(sections).filter(function(i, section){ return section.id == $.trim(tabName); })[0];
	  return typeof existingTab !== "undefined";
  }
  
  function _navigateTo(tabName) {
	if(_isCorrectTab(tabName)) {
		window.location.hash = $.trim(tabName);
	} else {
		_navigateTo(_getDefaultTabName());
	}
  }
	
  function _navigationEventFn() {
	var tabName = window.location.hash.substring(1);
	if(_isCorrectTab(tabName)) {
		$("section.page-section").hide();
		$("section.page-section#" + tabName + "Container").fadeIn();
		_activateCurrentTab(tabName);
	} else {
		_navigateTo();
	}
  }
  
  function _tabOnClick() {
    var tabName = $(this).attr("href").substring(1);
	window.location.hash = $.trim(tabName);	
  }
  
  function _activateCurrentTab() {
	$("nav#menu a").removeClass('active');
	$("nav#menu a").filter(function(i,aTab){ return $(aTab).attr('href') == window.location.hash}).addClass('active');
  }

});