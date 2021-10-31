abc = new Date();
if (abc.getDate() % 2 == 0) {
  document.getElementById("demo").innerHTML = "Good even day!";
} else {
  document.getElementById("demo").innerHTML = "Good odd day!";
}
alert(abc.getDate());
