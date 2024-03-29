let btn1 = document.getElementById("myButton");
let btn2 = document.querySelector("#myButton2")
let copycode = document.querySelector('.copyCode')
let copybtn = document.querySelector(".copybtn")
let click = document.querySelectorAll('.bton')

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
    btn1.addEventListener("mousedown",()=>{
        btn1.style.scale = 0.9
    })
    btn1.addEventListener("mouseup",()=>{
        btn1.style.scale = 1
    })
    rgb1 = getHex();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`
    btn1.innerHTML = rgb1;
    copycode.innerHTML = `background-image:linear-gradient(to right, ${rgb1}, ${rgb2})`
}

const handleButton2 = () => {
    btn2.addEventListener("mousedown",()=>{
        btn2.style.scale = 0.9
    })
    btn2.addEventListener("mouseup",()=>{
        btn2.style.scale = 1
    })
    rgb2 = getHex();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`
    btn2.innerHTML = rgb2;
    copycode.innerHTML = `linear-gradient(to right, ${rgb1},${rgb2})`
}

const copyCode = () => {
    navigator.clipboard.writeText(copycode.innerHTML);
    copybtn.addEventListener("mousedown",()=>{
        copybtn.style.scale = 0.9
    })
    copybtn.addEventListener("mouseup",()=>{
        copybtn.style.scale = 1
    })
    copycode.addEventListener("mousedown",()=>{
        copycode.style.scale = 0.9
    })
    copycode.addEventListener("mouseup",()=>{
        copycode.style.scale = 1
    })

    const copyText = copycode.innerHTML;
    
    // Attempt to write text to clipboard
    navigator.clipboard.writeText(copyText)
        .then(() => {
            console.log('Text copied to clipboard successfully');
            // Handle visual feedback for successful copy
            copycode.style.transform = "scale(0.9)";
            setTimeout(() => {
                copycode.style.transform = "scale(1)";
            }, 200);
        })
        .catch((error) => {
            console.error('Unable to copy text: ', error);
            // Handle errors, maybe show a message to the user
        });
};

// Touch events for button feedback
copybtn.addEventListener("touchstart", () => {
    copybtn.style.transform = "scale(0.9)";
});
copybtn.addEventListener("touchend", () => {
    copybtn.style.transform = "scale(1)";
});
copycode.addEventListener("touchstart", () => {
    copycode.style.transform = "scale(0.9)";
});
copycode.addEventListener("touchend", () => {
    copycode.style.transform = "scale(1)";
});




}


btn1.addEventListener("click", handlebutton1);
btn2.addEventListener("click", handleButton2);
copybtn.addEventListener("click", copyCode)
copycode.addEventListener("click", copyCode)

