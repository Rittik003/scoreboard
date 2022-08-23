let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called


function save() {
    let x= (count+" - ")
    saveEl.textContent+=x
    countEl.textContent = 0
    count=0
}

// let welcomeEl=document.getElementById("welcome-el")

// let name="Rittik"
// let gretings="Welcome Back per"

// welcomeEl.innerText=gretings+" "+name