// Assignment code here

//references to elements
var lengthNum = document.querySelector("#password-length");


function generatePassword() {
  //instantiate the password
  var password = "";
  //get the password length
  var length = lengthNum.value; 

  while (password.length < length)
  {
    
  }


  return "new password"+lengthNum.value;
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
