var blockTop = document.getElementById("block-top");
var blockBottom = document.getElementById("block-bottom");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var score = document.querySelector(".score-text");
var jumping = 0;
var counter = 0;


blockTop.addEventListener("animationiteration", () => {
  score.innerText = counter;
  var random = Math.random() * 400;
  blockTop.style.height = random + "px";
  blockBottom.style.height = 400 - random + "px";
  counter++;
});

setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );

  if (jumping == 0) {
    character.style.animation = '';
    character.style.top = (characterTop + 3) + "px";
  }

  var blockTopPosition = parseInt(
    window.getComputedStyle(blockTop).getPropertyValue("height")
  );
  var blockBottomPosition = parseInt(
    window.getComputedStyle(blockBottom).getPropertyValue("height")
  );
  var blockTopLeftPosition = parseInt(
    window.getComputedStyle(blockTop).getPropertyValue("left")
  );
  var blockBottomLeftPosition = parseInt(
    window.getComputedStyle(blockBottom).getPropertyValue("left")
  );




  if ( characterTop < -35 || characterTop > 655 || ( characterTop < blockTopPosition + 45 && blockBottomLeftPosition < 30 ) || (  600 - characterTop < blockBottomPosition - 20 && blockBottomLeftPosition < 30 )){
    character.style.top = 350 + "px"
    counter = 0;
    return window.location.assign('/end.html')
  }
}, 10);

function jump() {
  
   character.style.animation = "rotate .5s";
  
  jumping = 1;
  let jumpCount = 0;
  var jumpInterval = setInterval(function () {
    var characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    if (characterTop > 6 && jumpCount < 15) {
      character.style.top = characterTop - 6 + "px";
    }

    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  }, 10);
}
