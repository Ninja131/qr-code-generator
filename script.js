const input_txt = document.querySelector(".input_txt");
const image = document.querySelector(".image");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error");

let URLL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

async function Display_QR() {

    let url = input_txt.value;

    if(input_txt.value === ""){
        error.innerText = "Enter a URL";
        return;
    }
    else if (!url.match(/^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,6}([\/\w\-\.~:@?#[\]!$&'()*+,;=]*)*\/?$/i)){
       error.innerText = "Please try with another URL";
       return;
    }
 
    image.src = URLL+input_txt.value;
    image.classList.remove("hide");
    input_txt.value = "";
    error.innerText = "";
}

