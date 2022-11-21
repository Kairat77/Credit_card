const form = document.querySelector("#credit-card");
const cardNumber = document.querySelector("#card-number");
const cardHolder = document.querySelector("#name-text");
const cardExpiration = document.querySelector("#valid-thru-text");
const cardCVV = document.querySelector("#cvv-text");

const cardNumberText = document.querySelector(".number-vl");
const cardHolderText = document.querySelector(".name-vl");
const cardExpirationText = document.querySelector(".expiration-vl");
const cardCVVText = document.querySelector(".cvv-vl")

cardNumber.addEventListener("keyup", (e) => {
    if (!e.target.value){
        cardNumberText.innerText = "1234 5678 9101 1121";
    }else{
        const valueOfInput = e.target.value.replaceAll(" ","");
        if (e.target.value.length > 14) {
            e.target.value = valueOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumberText.innerHTML = valueOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        }else if (e.target.value.length > 9){
            e.target.value = valueOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumberText.innerHTML = valueOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        }else if (e.target.value.length > 4){
            e.target.value = valueOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumberText.innerHTML = valueOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        }else{
            cardNumberText.innerHTML = valueOfInput
        }
    }
});

cardHolder.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardHolderText.innerHTML = "NOAN JACOB";
    }else{
        cardHolderText.innerHTML = e.target.value.toUpperCase();
    }
});


cardExpiration.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardExpirationText.innerHTML = "02/40";
    }else{
        const valueOfInput = e.target.value.replace("/","");
        if(e.target.value.length > 2){
            e.target.value = valueOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
        }else{
            cardExpirationText.innerHTML = valueOfInput;
        }
    }
})

cardCVV.addEventListener("keyup", (e) =>{
    if (!e.target.value){
        cardCVVText.innerHTML = "123";
    }else{
        cardCVVText.innerHTML = e.target.value; 
    }
})

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    alert("Credit Card Added!");
})