let time = 8;
let currentWord;
let interID;
let wordIdx;
let score = 0;
let reward = 5;

// 게임 끝
function terminateGame(){
  clearInterval(interID);
  $(".game_input").attr("disabled", "true");
  $(".game_terminated span").text(score);
  $(".game_terminated").css("visibility", "visible");
}

function decreTime(){
  time -= 1;
  const timerText = time < 10 ? `0${time}` : `${time}`;
  
  $(".timer_game").text(timerText)

  if(time == 0){
    terminateGame()
  }
}

function refreshWord(){
  wordIdx = parseInt(Math.random() * words.length);
  currentWord = words[wordIdx]
  $(".game_word").text(words[wordIdx])
}

function compareWord(){
  const typedWord = $(".game_input").val();

  if(currentWord == typedWord){ // 정답!
    time += reward;
    score++;
    $(".game_input").val("");
    $(".game_score span").text(score);
    refreshWord()
    
    if(score % 2 == 0 && reward > 1){
      reward -= 1;
    }
    
  }
}

function init(){
  $(".game_terminated").css("visibility", "hidden");
  interID = setInterval(decreTime, 1000);
  refreshWord()
}

$(document).ready(function(){
  init();
  $(".game_input").keyup(function(e){
    compareWord();
  })
});

