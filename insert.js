function clickFunction() {
var points=0;
  var choice1= document.querySelector('input[name="q1"]:checked').value;
  if(choice1 == "n") {
    points +=1;
  }
  else if (choice1 == "n-1"){
    points +=2;
  }
  else if(choice1 == "n+1"){
    points +=3;
}
if(points ==1){
  document.getElementById("demo").innerHTML = "Incorrect, try again";
}
if(points ==2){
  document.getElementById("demo").innerHTML = "Correct! Just like selection sorts";
}
if(points ==3){
  document.getElementById("demo").innerHTML = "Wrong, try again";
}

}
function clickFunction2() {
  var points=0;
    var choice1= document.querySelector('input[name="q2"]:checked').value;
    if(choice1 == "k") {
      points +=1;
    }
    else if (choice1 == "k-1"){
      points +=2;
    }
    else if(choice1 == "k+1"){
      points +=3;
  }
  if(points ==1){
    document.getElementById("answ2").innerHTML = "Correct!";
  }
  if(points ==2){
    document.getElementById("answ2").innerHTML = "Nope";
  }
  if(points ==3){
    document.getElementById("answ2").innerHTML = "Wrong, try again";
  }
  }

  function myFunction() {
      document.getElementById("t1").innerHTML = "12, 33, 65, 45, 46";
  }

  function myFunction2() {
      document.getElementById("t2").innerHTML = "12, 33, 65, 45, 46";
  }

  function myFunction3() {
      document.getElementById("t3").innerHTML = "12, 33, 45, 65, 46";
  }



  function myFunction4() {
      document.getElementById("t4").innerHTML = "Just one :)";
  }
