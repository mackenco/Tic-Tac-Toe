$(document).ready(function() {
  $('#game').css({
    'width':'350px'
  });

  $('.cell').css({
    'float':'left',
    'background-color':'white',
    'height':'100px',
    'width':'100px',
    'border':'2px solid'
  });

  $('.cell').on('click', function() {
    if(game.move(eval(this.id))) {
      if(game.player == "x"){
        $(this).css({
          'background-color': 'blue'
        });
      } else {
        $(this).css({
          'background-color': 'red'
        });
      }
    }

    if (game.winner()) {
      $('.cell').off('click');
      alert(game.player + ' wins!');
    }
  });
});