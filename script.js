// Assignment Code
let userRequest;
let upperKeyChoice = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerKeyChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let allNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let shftCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '|', ':', ';', '`', '"', '~', '<', ',', '>', '.', '/', '?'];
let pwdGenerated = []

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();

  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  let passwordLength = parseInt(prompt ("Enter Password Length"));
   if (passwordLength < 8 || passwordLength > 128  ){
    
    return "Please enter your request"
   };
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
