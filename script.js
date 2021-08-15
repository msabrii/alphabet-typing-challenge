let finalString = "abcdefghijklmnopqrstuvwxyz";
let finish = false;
let start = false;
let reset = false;

let howToText = document.getElementById("howToText");
let timer = document.getElementById("timer");
let resetBtn = document.getElementById("reset");

function main() {
  if (reset) {
    resetValues();
  }

  let userString = document.getElementById("userString");
  let userValue = userString.value.toLowerCase();
  let len = userValue.length;

  console.log("main", finish, userString.value, userValue, start, len);

  if (!finish) {
    console.log(start);
    if ((len == 1) & (userValue == "a") & (start == false)) {
      startTimer();
      start = true;
      howToText.hidden = true;
      console.log("start timer");
    }

    if (finalString.slice(0, len) != userValue) {
      console.log("wrong");
      userString.style.boxShadow = "rgb(230, 57, 70) 0px 0 0 3px";
      userString.value = userValue.slice(0, len - 1);
    } else {
      userString.style.boxShadow = "rgba(69, 123, 157) 0px 0 0 3px";
    }

    if (finalString == userValue) {
      finish = true;
      userString.style.boxShadow = "#4bb543 0px 0 0 3px";
    }
  }
}

function startTimer() {
  timer.hidden = false;
  resetBtn.hidden = false;
  var now = new Date().getTime();

  let x = setInterval(() => {
    let newTime = new Date().getTime();
    let elapsedTime = (newTime - now) / 1000;
    timer.innerText = elapsedTime;
    if (finish) {
      clearInterval(x);
      timer.innerHTML = "You finished in " + elapsedTime + "<span>s</span>";
    }
    if (reset) {
      clearInterval(x);
      resetValues();
    }
  }, 90);
}

function resetGame() {
  reset = true;
  console.log("reset");

  if (finish) {
    finish = false;
    main();
  }
}

function resetValues() {
  console.log("reset values");
  timer.innerText = "Game Reset";
  let userString = document.getElementById("userString");
  userString.value = "";
  reset = false;
  start = false;
}
