const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordLength = 12;

function random() {
    let j = Math.floor(Math.random() * characters.length);
    return characters[j];
}

function generatePasswords() {
    let password1 = "";
    let password2 = "";

    for (let i = 0; i < passwordLength; i++) {
        password1 += random();
        password2 += random();
    }

    let password1Element = document.getElementById("password1");
    password1Element.textContent = password1;
    password1Element.classList.add("green-password");

    let password2Element = document.getElementById("password2");
    password2Element.textContent = password2;
    password2Element.classList.add("green-password");
}
