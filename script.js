const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");

let good = document.getElementById("good");
let wrong = document.getElementById("wrong");

let goodPoints = 1;
let wrongPoints = 1;

let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

let colors = ["red", "orange", "yellow", "green", "blue", "purple", "brown", "magenta", "tan", "cyan", "olive", "maroon", "navy", "aquamarine", "turquiose", "silver", "lime",
 "teal", "indigo", "violet", "pink", "black"];
let mySum;
let sound = new Audio();

let soundAll = new Audio("img/happy.wav");
soundAll.volume = 0.3;
soundAll.loop = true;
soundAll.play();

function makeSum() {
 var a = Math.floor(Math.random() * 9 + 1);
 var b = Math.floor(Math.random() * 9 + 1);
 mySum = a + " * " + b;
 c1.innerHTML = a;
 c2.innerHTML = " * ";
 c3.innerHTML = b;

 c1.style.color = colors[Math.floor(Math.random() * colors.length)];
 c2.style.color = colors[Math.floor(Math.random() * colors.length)];
 c2.innerHTML = " x ";
 c3.style.color = colors[Math.floor(Math.random() * colors.length)];
 //myAssignment.innerHTML = mySum;
 myAnswer.focus();
}

function scrollSum() {
  let i = 0;
  setInterval(function(){
    if (i < 5) {
      makeSum();
      i++;
    } else {
      clearInterval(this);
    }
  }, 170);

}

function keyPressed(evt) {
  if (evt.keyCode == 13) {
    if (eval(mySum) == myAnswer.value) {
      feedback.src = "img/goed.png";
      sound.src = "img/right.wav";
      sound.play();
      good.innerHTML = goodPoints ++;
      myAnswer.style.backgroundColor = "green";
    } else {
      feedback.src = "img/fout.png";
      sound.src = "img/wrong.wav";
      sound.play();
      myAnswer.style.backgroundColor = "red";
      wrong.innerHTML = wrongPoints ++;

    }
    window.setTimeout(waiting, 2000);
  }
}

function waiting() {
  feedback.src = "img/feedback.png";
  myAnswer.value = "";
  makeSum();
  scrollSum();
  myAnswer.style.backgroundColor = "white";
}

makeSum();
scrollSum();
myAnswer.addEventListener("keydown", keyPressed, false);
