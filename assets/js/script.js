document.querySelector("button").addEventListener("click", passGen);

function passGen () {
  var len = prompt("How long would you like your password to be (from 8-128)?");  

  if (len < 8 || len > 128){
    alert("Please enter a length between 8-128.");
    return passGen();
  };

  var temp = "";
  var password = "";

  var num = confirm("Do you want your password to contain numbers?");
  if(num) temp+="0123456789";

  var low = confirm("Do you want your password to contain lower case letters?");
  if(low) temp+="abcdefghijklmnopqrstuvwxyz";

  var upper = confirm("Do you want your password to contain upper case letters?");
  if(upper) temp+="abcdefghijklmnopqrstuvwxyz".toUpperCase();

  var special = confirm("Do you want your password to contain special characters?");
  if(special) temp+="~!@#$%^&*()_+=<>?/";

  if (temp === ""){
    alert("Your password must contain at least one of the following: numbers, lower case letters, upper case letters and/or special characters. Please try again.");
    return passGen();
  };

  for (var i = 0; i < len; i++) {
    password+= temp[Math.floor(Math.random()*temp.length)];
  };

  document.getElementById("password").textContent=password;

  // console.log(temp);
};
