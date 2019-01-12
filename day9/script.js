var a = 10;
var x = setInterval(function(){
  document.getElementById("timer").innerHTML = "" + a + " seconds";
  a--;
  if(a < 0){
    clearInterval(x);
  }
}, 1000);
