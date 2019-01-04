function processForm(){
  var x = document.getElementById('password').value;
  if (x != "12345678") {
    alert("Wrong password!");
    document.getElementById('para').innerHTML = "Enter form";
  }
  if (x == "12345678") {
    document.getElementById('para').innerHTML = "Password correct!";
  }
  return false;
}
