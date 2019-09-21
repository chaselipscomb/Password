var password="";
var userAnswer;
characterType(userAnswer); 
var pwLength;
passwordLength(pwLength);
alert("Your password will contain numbers. And be "+pwLength+" characters in length.");
// Computes users input for desired password

switch (userAnswer) {
    //password for special characters
    case 's':
        randomSpecialChar(pwLength);
    break; 

    //password for numeric characters
    case 'n':
        var randomNumberBetween0and9;
        for (var i=0;i<pwLength-1;i++) {
            randomNumberBetween0and9 = Math.floor(Math.random() * 10);
            password ="" + password + randomNumberBetween0and9;
        }
        alert("Your password is: "+password);
        break; 

    //password for uppercase characters
    case 'u':
         alert(upperCasePassword(pwLength));
         break;

    //password for lowercase characters
    case 'l':
            alert(lowerCasePassword(pwLength));
        break;
        default:
        alert("One of the answers given did not meet the requirements!");
}

///////////FUNCTIONS
//Determines which character type user wants
function characterType() {
    userAnswer = prompt("For your password, enter the letter for the criteria you would like. For Special Characters, press 'S'. For Numeric, press 'N'. For Lowercase, press 'L'. For Uppercase, press 'U'");
    userAnswer=userAnswer.toLowerCase();
    return userAnswer;
}
//Determines password length user wants
function passwordLength() {
    pwLength = prompt('Please enter your desired password length, 8-128 characters.');
    
    while (pwLength<8 || pwLength>128) {
        pwLength = prompt('Password must be 8-128 characters in length!');   
    }
    return pwLength;
        }
function upperCasePassword(){
            var password = '';
            var random_ascii;
            var ascii_low = 65;
            var ascii_high = 90
            for (var i = 0; i < pwLength; i++) {
                random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
                password += String.fromCharCode(random_ascii)
            }
            return password
        }

function lowerCasePassword(){
    var random_ascii;
    for(var i = 0; i < pwLength; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        password += String.fromCharCode(random_ascii)
    }
    return password
}

function randomSpecialChar() {
    // example set of special chars as a string in no particular order
    var s = "!\§$%&/()=?\@^_-+~`,./{}";

    // generating a random index into the string and extracting the character at that position
    for (var i=0; i<pwLength;i++) {
        password+=s.substr(Math.floor(s.length*Math.random()), 1)
    }
   alert("Your password is :"+password);
} 
        