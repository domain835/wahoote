$(function(){

});

$(function(){
  $('.scroll__title').click(function(){
      $(this).parents('.scroll').toggleClass('active').siblings().removeClass('active');
  });
});