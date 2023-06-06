let count = 0;
let countEl = document.getElementById("counter");
let savedCount
let displayEl = document.getElementById("displayCount");

function counting() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    savedCount = count;
    count = 0;
}

function display() {
    let newCount = savedCount + "-";
    displayEl.innerText += newCount;
}