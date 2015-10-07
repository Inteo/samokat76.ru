$(function(){
	$(".header__ham").click(function(){
    $(".main").toggleClass("main_active");
  })
});
$(document).ready(function(){
  $(".modal-inline").fancybox({
    type: 'inline',
    fixed:false,
    title: '',
    width: '100%',
    height: 'auto',
    padding: 0,
    autoResize: false,
    autoSize: false,
    maxWidth: 620,
    autoCenter: false,
    fitToView: false,
    minWidth: 280,
    scrolling   : 'no',
    helpers: {
      overlay: {
        fixed: false
      }
    }
  });
});