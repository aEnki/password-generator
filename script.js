// Assignment code here

//references to elements
var lengthNum = document.querySelector("#password-length");
var lower = document.querySelector("#lower");
var upper = document.querySelector("#upper");
var numeric = document.querySelector("#numeric");
var special = document.querySelector("#special");

//charsets
var lowerSet = "abcdefghijklmnopqrstuvwxyz",
    upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numericSet = "0123456789",
    specialSet = ` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

function generatePassword() {
  //instantiate the password
  var password = "";
  //instantiate charsets
  var charset = "";
  //if the checkbox is checked, add that charset to var charset
  if (lower.checked == true) charset += lowerSet;
  if (upper.checked == true) charset += upperSet;
  if (numeric.checked == true) charset += numericSet;
  if (special.checked == true) charset += specialSet;
  //get the password length
  var length = lengthNum.value; 

  if (charset.length == 0) 
  {
    alert("You must select at least one character type!")
    return;
  }
  
  //add a random character from the charset
  while (password.length < length)
  {
    password += charset.charAt(getRandomInt(charset.length));
  }

  //check and see if all requirements are met
  var valid = true;
  if (lower.checked == true)
  {
    var pass = false;
    for (let i = 0; i < lowerSet.length; i++) {
    if (password.includes(lowerSet.charAt(i))) {pass = true}
    }
    if (pass == false) {valid = false} 
  }
  if (upper.checked == true)
  {
    var pass = false;
    for (let i = 0; i < upperSet.length; i++) {
    if (password.includes(upperSet.charAt(i))) {pass = true}
    }
    if (pass == false) {valid = false} 
  }
  if (numeric.checked == true)
  {
    var pass = false;
    for (let i = 0; i < numericSet.length; i++) {
    if (password.includes(numericSet.charAt(i))) {pass = true}
    }
    if (pass == false) {valid = false} 
  }
  if (special.checked == true)
  {
    var pass = false;
    for (let i = 0; i < specialSet.length; i++) {
    if (password.includes(specialSet.charAt(i))) {pass = true}
    }
    if (pass == false) {valid = false} 
  }

  //check validity
  if (valid == false)
  {
    password = generatePassword(); //generate the password again
  }
  
  return password;
  //return "new password"+lengthNum.value+charset;
}

//get a random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
