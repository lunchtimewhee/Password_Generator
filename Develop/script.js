var generateBtn = document.querySelector("#generate"); //create variable to refer to the "Generate Password" button
const specChar = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)]/; //list of special characters
const lowerChar = "abcdefghijklmnopqrstuvwxyz"; //list of lower case characters
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //list of upper case characters
const numChar = "0123456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}

function generatePassword(){
  //Prompt user for minimum and maximum length of desired password
  var minLength = parseInt(prompt("Confirm length of password.\n\nPlease enter the minimum length of password (min 1, max 128): "));
  while (minLength < 1 || minLength > 128){ //if minLength < 0, keep prompting user for a value > 0
    minLength = parseInt(prompt("Please enter an amount greater than zero (min 1, max 128): "))
  }

  var maxLength = parseInt(prompt(`Confirm length of password.\n\nMinimum length: ${minLength}\n\nPlease enter the maximum length of password (min ${minLength}, max 128): `));
  while (maxLength > 128 || maxLength < minLength){ //if maxLength > 128, keep prompting user for a value < 128
    console.log(`min length ${minLength} max length${maxLength}`);
    maxLength = parseInt(prompt(`Please enter an amount less than 128, and equal to or greater than ${minLength}: `))
  }
  alert(`Minimum length of password: ${minLength}\n\nMaximum length of password: ${maxLength}`);

  //Prompt user for types of characters to include in password
  var includeLower = confirm("Include lowercase characters?");
  var includeUpper = confirm("Include uppercase characters?");
  var includeNum = confirm("Include numbers?");
  var includeSpec = confirm(`Include special characters?\List of special characters: (${specChar})`)
  alert(`Include lowercase characters: ${includeLower}\nInclude uppercase characters: ${includeUpper}\nInclude numbers: ${includeNum}\nInclude special characters: ${includeSpec}`)
  
  while(!includeLower && !includeUpper && !includeNum && !includeSpec){ //if no characters are included, prompt user to make sure one is selected at least
    includeLower = confirm("Please ensure one type of character is included.\n\nInclude lowercase characters?");
    includeUpper = confirm("Include uppercase characters?");
    includeNum = confirm("Include numbers?");
    includeSpec = confirm(`Include special characters?\List of special characters: (${specChar})`)
    alert(`Include lowercase characters: ${includeLower}\nInclude uppercase characters: ${includeUpper}\nInclude numbers: ${includeNum}\nInclude special characters: ${includeSpec}`)
  }
  
  var combinedChar = ""; //string that holds all characters included in the password. this will later be split into an array
  if(includeLower){ //if includeLower is true, add lower case characters to the string
    combinedChar += lowerChar;
  }
  if(includeUpper){ //if includeUpper is true, add upper case characters to the string
    combinedChar += upperChar;
  }
  if(includeNum){ //if includeNum is true, add number characters to the string
    combinedChar += numChar;
  }
  if(includeSpec){ //if includeSpec is true, add special characters to the string
    combinedChar += specChar;
  }

  const listOfCombinedChar = combinedChar.split(""); //turn the password character list into an array to make it easier to generate random characters
  var passLen = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength) //generate password length based on min and maxLength
  var finalPass = ""; //create variable for the final password

  for(var i = 0; i < passLen; i++){//for loop based on the generated password length. Uses random characters from the array of eligible characters
    finalPass = finalPass + listOfCombinedChar[Math.floor(Math.random() * (listOfCombinedChar.length - 2))];
  }

  return finalPass;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
