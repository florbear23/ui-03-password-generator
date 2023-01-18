const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let displayEl1 = document.querySelector('#display01'),
    displayEl2 = document.querySelector('#display02'),
    btnFuntion = document.querySelector('#btn'),
    charLeght = 15,
    btnEl = document.querySelector('#btn')

let randomChart=()=>{
    let chartRandom = Math.floor(Math.random()*characters.length);
    return characters[chartRandom];
}

let displayIndex1=()=>{
    let randomPass = '';
    for(let i = 0; i < charLeght; i++){
        randomPass += randomChart()
    }return  randomPass
}

let displayIndex2=()=>{
    let randomPass2 = '';
    for(let i = 0; i < charLeght; i++){
        randomPass2 += randomChart()
    }return randomPass2
}

btnEl.addEventListener('click',function(){
    displayEl1.innerHTML = displayIndex1();
    displayEl2.innerHTML = displayIndex2();
})