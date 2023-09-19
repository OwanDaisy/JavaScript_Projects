const passwordBox = document.getElementById("password");
const length  = 16;
const lowerCase = "ABCDEFHIJKLMNOPQRSTUVWXYZ";
const upperCase = "abcdefhijklmnopqrstuvwxyz";
const numbers = "1234567890";
const allChars = upperCase + lowerCase + numbers;

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += upperCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * numbers.length)];


    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

