const password = 'Dogs are better than cats123';

console.log(`${password} ${password.length}`);
 
    if (password.length <= 10) {
   console.log ("Error, 10 characters minimum")
  }  else {
    console.log ("The passwords length is good")
  }
  
function containsNumber(str) {   //does it contain any numbers
  return /[0-9]/.test(str);
}
function containsAnyLetters(str) {   //does it contain any letters
    return /[a-zA-Z]/.test(str);
} 
if (password (containsAnyLetters = true)) {
    console.log ("password contains enough letters.") //logging successful and unsuccessful messages for letters 
}   else {
        console.log ("Error, password must contain a minimum of one letter")
    } 
if (password (containsNumber = true)) {
     console.log ("password contains atleast one number") 
}   else { 
    console.log ("Error, password must contain atleast one number.")
} 
let maxNumberOfChars = 30
if(password.length > maxNumberOfChars){
    console.log ("password is to long") // checks to see if password is to long and if it is they get an error message telling them so. If its correct is tells them its good
}else {
    console.log ("the passwords length is acceptable")
}
function containsSpecialChars(password) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; // checks to see if password contains special characters
    return specialChars.test(password)
} if (containsSpecialChars = true){
    console.log ("Password contains enough special characters")
} else {
    console.log ("Password must contain atleast one special character")
}

                                                                                                                 