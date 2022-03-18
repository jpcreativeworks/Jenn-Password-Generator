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

   let userRequestUpper = confirm("Do you linke Uppercase letters in your password?")
   let userRequestSpecial = confirm("Do you want special characters?");
   let userRequestNumbers = confirm("do you want some numbers, too?")
   let userRequestLower = confirm ("How about lowercase letters?")

   if(!userRequestLower && !userRequestUpper && !userRequestNumbers && !userRequestSpecial){
     return "Must choose one, please"
   };

   let validCharacters = []
     if (userRequestLower ){
       validCharacters = validCharacters.concat(lowerKeyChoice)
     }
     if (userRequestUpper ){
      validCharacters = validCharacters.concat(upperKeyChoice)
    }
    if (userRequestNumbers ){
      validCharacters = validCharacters.concat(allNumbers)
      
    }
    if (userRequestSpecial ){
      validCharacters = validCharacters.concat(shftCharacters)
    }
console.log(validCharacters)
var password = ""
for(let i=1;i<=passwordLength;i++){
  var randomNumber = Math.floor(Math.random() * validCharacters.length);
  password += validCharacters[randomNumber]
}
return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
