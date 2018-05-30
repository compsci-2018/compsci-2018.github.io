function clickFunction() {
var points=0;
  var choice1= document.querySelector('input[name="q1"]:checked').value;
  if(choice1 == "Sabine Ulibarrí") {
    points +=1;
  }
  else if (choice1 == "Caillou"){
    points +=2;
  }
  else if(choice1 == "Dora the Explorer"){
    points +=3;
  }
  else if (choice1 == "Curious George"){
  points+=4;
}
if(points ==1){
  document.getElementById("demo").innerHTML = "Correct!";
}
if(points ==2){
  document.getElementById("demo").innerHTML = "incorrect!";
}
if(points ==3){
  document.getElementById("demo").innerHTML = "incorrect!";
}
if(points ==4){
  document.getElementById("demo").innerHTML = "incorrect!";
}
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
}
