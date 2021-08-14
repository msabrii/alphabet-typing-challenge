let finalString = "abcdefghijklmnopqrstuvwxyz";
let finish = false;
let start = false;
let howToText = document.getElementById("howToText");

function main() {
  let userString = document.getElementById("userString");
  let userValue = userString.value.toLowerCase();
  let len = userValue.length;

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
    }
  }
}

function startTimer() {
  let timer = document.getElementById("timer");
  timer.hidden = false;
  var now = new Date().getTime();
  console.log(timer);
  let x = setInterval(() => {
    let newTime = new Date().getTime();
    let elapsedTime = (newTime - now) / 1000;
    timer.innerText = elapsedTime;
    if (finish) {
      clearInterval(x);
      timer.innerText = "You finished in " + elapsedTime + "s";
    }
  }, 90);
}
