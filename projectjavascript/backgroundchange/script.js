let btn1 = document.getElementById("myButton");
let btn2 = document.querySelector("#myButton2")
let copycode = document.querySelector('.copyCode')
let copybtn = document.querySelector(".copybtn")
let rgb1 = "#239df7"
let rgb2 = "#35719a"


const getHex = () => {
    let myHexaValues = '0123456789abcdef';
    let hex = "#"
    for (let i = 0; i < 6; i++) {
        let rand = Math.floor((Math.random() * 15) + 1)
        hex += myHexaValues[rand]
    }
    return hex;
}



const handlebutton1 = () => {
    rgb1 = getHex();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`
    btn1.innerHTML = rgb1;
    copycode.innerHTML = `background-image:linear-gradient(to right, ${rgb1}, ${rgb2})`
}

const handleButton2 = () => {
    rgb2 = getHex();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`
    btn2.innerHTML = rgb2;
    copycode.innerHTML = `linear-gradient(to right, ${rgb1},${rgb2})`
}

const copyCode = () => {
    navigator.clipboard.writeText(copycode.innerHTML);
    alert("code has copied successfully !")
}


btn1.addEventListener("click", handlebutton1);
btn2.addEventListener("click", handleButton2);
copybtn.addEventListener("click", copyCode)
copycode.addEventListener("click", copyCode)

