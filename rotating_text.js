// 9 April 2020, Kemnay, UK
// (c)2020, GEAR web development. All rights reserved.

// *************

// setup and start
let mainContainers = document.getElementsByClassName("rotating_text");
let containerCount = mainContainers.length;

if (containerCount != 0) {
  for (let i = 0; i < containerCount; i++) {
    mainContainers[i].style.position = "relative";
    containerDeploying(i);
  }
}

// text spliting and rotating to position in all available container (class="rotating_text")
function containerDeploying(x) {
  let text = mainContainers[x].innerText;
  let width = mainContainers[x].offsetWidth;
  let textArray = text.split("");
  let len = text.length;
  let rot = 0;
  let rotInc = 300 / len; // 360 - 60 so there is 60deg gap
  let content = "";

  // check for the letter orientation
  let rotLetters = 0;
  let isInside = mainContainers[x].classList.contains("inside");
  if (isInside === true) {
    textArray.reverse();
    rotLetters = 180;
  }

  // making all letters in a letter_holder
  for (let i = 0; i < len; i++) {
    let letter = textArray[i];

    content += "<div class='letter_holder' style='";
    content += "height: " + width / 2 + "px;";
    content += "display: inline-block;";
    content += "position: absolute;";
    content += "transform-origin: 50% 100%;";
    content += "bottom: 50%; left: 47%;";
    content += "transform: rotate(" + Math.round(rot) + "deg);";
    content += "'>";
    content += "<p class='letter' style='";
    content += "transform: rotate(" + rotLetters + "deg);";
    content += "font-family: monospace;"; // font-family
    content += "'>" + letter + "</p>";
    content += "</div>";
    rot += rotInc;
  }

  mainContainers[x].innerHTML = content;
}

// rotate all letters
let speed = 50; // time between rotation steps in millisecond

setInterval(function () {
  let allLetterHolders = document.getElementsByClassName("letter_holder");
  let len = allLetterHolders.length;
  let rotate = 0;
  let rotateInc = 0.5; // step incremet of rotation (positive number)

  for (let i = 0; i < len; i++) {
    let rotBefore = parseFloat(
      allLetterHolders[i].style.transform.slice(7, -4)
    );

    // check for the direction of rotation
    let isCw = allLetterHolders[i].parentElement.classList.contains("cw");
    if (isCw === true) {
      rotate = rotBefore += rotateInc;
    } else if (isCw === false) {
      rotate = rotBefore -= rotateInc;
    }

    allLetterHolders[i].style.transform = "rotate(" + rotate + "deg)";
  }
}, speed);
