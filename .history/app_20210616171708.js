$(function (){
  $('.box1').mouseover(function(){
    $('.box1').addClass('b');
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color': '#FF0000'});
  });
});