// Declearing variables
let bill = document.getElementById("bill");
let persentsDiv = document.querySelectorAll(".inputs .select-tip .div"); 
let persentsP = document.querySelectorAll(".inputs .select-tip .div p"); 
let custom = document.getElementById("custom");
let people = document.getElementById("people");
let tipAmount = document.querySelector(".tip-amount span h1");
let total = document.querySelector(".total span h1");
let resetBtn = document.querySelector(".rest-btn input");


let tip = 0;
persentsDiv.forEach((p) => {
    p.addEventListener("click", activeBtn);

})
function activeBtn() {
    persentsDiv.forEach((p) => {
        p.classList.remove("clicked");
        this.classList.add("clicked");
        tip = this.firstChild.dataset.v;
    })
}

// Programming the button reset
resetBtn.onclick = () => {

    if (people.value > 0) {
    people.parentElement.classList.remove("error");
    typeof parseInt((custom.value)) == "number" && parseInt(custom.value) > 0 ? tip = parseInt(custom.value) / 100 : "";
    total.innerHTML =
        Math.round(((bill.value / people.value) + ((bill.value / people.value) * tip)) * 100) / 100;
    tipAmount.innerHTML =
            Math.round(((bill.value / people.value) * tip) * 100) / 100;
    }
    else if (people.value == 0) {
    people.parentElement.classList.add("error");
    }
    console.log(people.value)
}

