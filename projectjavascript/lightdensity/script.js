// let char = ""
// for(let i = 65 ; i <= 90 ; i++){  
//     let chara = (String.fromCharCode([i]))
//     char += chara;
// }
// console.log(char);


// Q vowel count 
// const vowel = "aeiouAEIOU"
// function vowelCount(str){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         for(let j = 0; j < vowel.length;j++){
//             if(str[i] == vowel[j]){
//                 count++
//             }
//         }
//     }
//     return count
// }

// let myStr = " hellow guys chai pillow we are gonna find count of vowel"
// const count = vowelCount(myStr)
// console.log(count);


// Q 3 all vowel present or not 
// let vowel = "aeiou"
// const vowe = "aeiou"
// function vowelAvailOrNot(str){
//     str = str.toLowerCase()
//     let avail =""
//     for(let i = 0; i < str.length;i++){
//         for(let j = 0; j < vowel.length;j++){
//             if(str[i] == vowel[j]){
//                 avail += vowel[j];
//                 vowel = vowel.replace(vowel[j],"");
//             }
//         }
//     }
//     avail = avail.split("").sort().join("")
//     if( avail == vowe ){
//         console.log(` all vowels are available into the string `);
//     }else{
//         console.log(`all vowels aren't available into the string`);
//     }
// }
// let myStr = " hellow guys chai pillow we are gonna find count of vowel"
// const count = vowelAvailOrNot(myStr)

// best approach >>>>.


// const checkVowelPresentOrNot = (str) => {
//     const vowels = 'aeiou';
//     for( let char of vowels){
//         if(!str.includes(char)){
//             return false;
//         }
//     }
//     return true
// }
//  let mystr = 'this is our string friends chair pilow friends OOOOOh';

//  let result = checkVowelPresentOrNot(mystr);
// console.log(result);

// let alpha = function(){
//     let totalAlpha = "";
//     for (let char = 97; char <= 122; char++) {
//         totalAlpha += String.fromCharCode(char);
//     }
//     return totalAlpha;
// }()
// pangramcheck = (str) =>{
//     for (const char of alpha) {
//         if(!str.includes(char)){
//             return false
//         }
//         return true;
//     }
// }
// let mystr = ' this is my string'
// let mystr = " this is my string check whthere it's contains the all alphabets or not if not then return false and if contains return true"
// let result = pangramcheck(mystr)
// console.log(result);
let btn = document.querySelector(".btn")
let inputElem = document.querySelector("#task")
let todoListElem = document.querySelector('.todoListElem')

const addTodo = () =>{
    let p = document.createElement('p')
    p.textContent = inputElem.value;
    todoListElem.append(p)
    inputElem.value = ""
}

btn.addEventListener("click",()=>{
    addTodo()
})
todoListElem.addEventListener("click",(event)=>{
    let currentElem = event.target
    currentElem.remove()
})






