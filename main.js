// js check
// alert('test');
// jquery check
// $( document ).ready(function(){
//   $('h1').css('background-color', 'orange');
// });

$( document ).ready(function(){
var player1 = '<div id="player1"><img src="images/marioCart.png" alt="Kevin" /></div>';
var player2 = '<div id="player2"><img src="images/sonicCar2.png" alt="sonic car" /></div>';
var background = '<div id="background"><img src="images/MarioBackGround.jpg" alt="MarioBackGround" /></div>'
var background2 = '<div id="background"><img src="images/SonicBackGround.png" alt="SonicBackGround" /></div>'

$('.gameBoxTop').append(player1);
$('.gameBoxTop').append(background);
$('.gameBoxBottom').append(player2);
$('.gameBoxBottom').append(background2);


$( document ).keydown(function(e) {
  // alert(e.keyCode);
  //Q keyCode = 81
  //} keyCode = 221
var position = $('#player1').position();
var position2 = $('#player2').position();

if (e.keyCode === 81) {
  $('#player1 img').css('left', '+=10px');
}

if (e.keyCode === 221) {
  $('#player2 img').css('left', '+=10px');
}




});















});
