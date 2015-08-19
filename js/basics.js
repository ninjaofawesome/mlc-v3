$(document).ready(function(){
  console.log('the basics have loaded');

    function faqButton(){
      var answer = $('.answer');
      var buttonUp = $('.button-slide-up');

      answer.hide();
      buttonUp.hide();

      $('.questionBox').click(function(){
        var myBox = $(this);
        myBox.children('.answer').slideToggle(function(){
          if('.answer:visible' == true) {
            console.log('yay');
            buttonUp.hide();
          } else {
            console.log('boo');
            buttonUp.show();
          }
        });
      });



    }

    faqButton();
});


