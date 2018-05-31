function clickFunction() {
var points=0;
  var choice1= document.querySelector('input[name="q1"]:checked').value;
  if(choice1 == "1only") {
    points +=1;
  }
  else if (choice1 == "1and3"){
    points +=2;
  }
  else if(choice1 == "1and2"){
    points +=3;
}

else if(choice1 == "2and3"){
  points +=4;
}

if(points ==1){
  document.getElementById("demo").innerHTML = "Incorrect, try again";
}
if(points ==2){
  document.getElementById("demo").innerHTML = "Nope";
}
if(points ==3){
  document.getElementById("demo").innerHTML = "Correct!";
}
if(points ==4){
  document.getElementById("demo").innerHTML = "Wrong, try again";
}
}


function clickFunction2() {
var points=0;
  var choice1= document.querySelector('input[name="q2"]:checked').value;
  if(choice1 == "in") {
    points +=1;
  }
  else if (choice1 == "me"){
    points +=2;
  }
  else if(choice1 == "qu"){
    points +=3;
}

else if(choice1 == "se"){
  points +=4;
}

if(points ==1){
  document.getElementById("answ2").innerHTML = "Incorrect, try again";
}
if(points ==2){
  document.getElementById("answ2").innerHTML = "Nope";
}
if(points ==3){
  document.getElementById("answ2").innerHTML = "Wrong";
}
if(points ==4){
  document.getElementById("answ2").innerHTML = "Correct!";
}
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function myFunction() {
    document.getElementById("t1").innerHTML = "5, 7, 9, 1";
}

function myFunction2() {
    document.getElementById("t2").innerHTML = "quick sort!";
}
function myFunction2() {
    document.getElementById("t3").innerHTML = "merge sort!";
}
