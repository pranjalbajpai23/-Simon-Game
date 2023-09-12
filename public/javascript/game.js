var buttonColours = ["red","blue","green","red"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var firstTime=false;
let analysis=document.querySelector("#analysis");
function playSound(name){
  var audio = new Audio("/sounds/"+name+".mp3");
  audio.play();
}
function animatePress(currentColour){
  var delayInMilliseconds = 200
  $("#"+currentColour).addClass("pressed")
  setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
  }, delayInMilliseconds);
}
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;

}
function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title2").text("Game Over, Press Any Key to Restart");

    if(level>5){
              analysis.innerHTML=` 
                    <div class="usr">
                        <h1>Hi, user</h1>
                        <div>You Got to level ${level}, you have a sharp memory</div>

                    </div>`
    }
    else{
      analysis.innerHTML=` 
      <div class="usr">
          <h1>Hi, user</h1>
          <div>You Got to level ${level} which is a bit low, Keep Practicing !!</div>
      </div>`
    }

    setTimeout(function () {
    
      $("body").removeClass("game-over");
    }, 200);
    
    startOver();
  }
}
function nextSequence(){
  userClickedPattern = [];
  ++level;
  $("#level-title2").text("Level " + level);
  var randomColorChoosen=buttonColours[Math.floor(Math.random()*4)];
  gamePattern.push(randomColorChoosen);
  $("#" + randomColorChoosen).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomColorChoosen);
  animatePress(randomColorChoosen);
}


$(".btn").click(function (){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
})



$(document).keypress(function() {
  if (!firstTime) {
    $("#level-title1").fadeOut(100);
    nextSequence();
    started = true;
  }
});
