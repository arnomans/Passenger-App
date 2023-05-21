/*let count = 0;

let countEL = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEL.textContent = count;
};

function save() {
    let countDash = count + " - ";
    saveEl.textContent += countDash;
    countEl = 0;
    count = 0;
}*/

let message = document.getElementById("error");

function errorMsg() {
    message.textContent = "Something went wrong, please try again";
}