//= require jquery
//= require jquery_ujs
//= require_tree .

var questionCount = 1;
var answers = [];

var getNextQuestion = function(){
  if (questionCount > 4) {
    proceedToScoring();
  } else {

    var url = '/questions/' + questionCount;
    appendQuestionNumber();

    $.ajax({
      url: url,
      method: 'GET',
      success: function (data) {
        appendQuestion(data);
        appendNextButton();
        questionCount++;
        attachClickEvents();
      }
    })
  }
};

var appendQuestion = function(data){
  var answerDiv = $('.answers');
  $('.question').append(data.description);

  for (var i = 0; i < 4; i++) {
    answerDiv.append(button(data.possible_answers[i]))
  }
};