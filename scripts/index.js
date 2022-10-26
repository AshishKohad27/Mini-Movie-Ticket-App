// Store the wallet amount to your local storage with key "amount"

// moving to MOvies.html page
document
    .getElementById("book_movies")
    .addEventListener("click", function (event) {
        window.location.href = "movies.html";
    });

// taking amount
// let amountArr =
// console.log('amountArr:', amountArr)
let amount_total = JSON.parse(localStorage.getItem("amount"));
document
    .getElementById("add_to_wallet")
    .addEventListener("click", myadd_to_wallet);
function myadd_to_wallet(event) {
    // console.log("add_to_wallet")
    let amount = document.getElementById("amount").value;
    // console.log('amount:', amount);
    amount_total += +amount;
    // console.log('amount_total:', amount_total)
    localStorage.setItem("amount", JSON.stringify(amount_total));

    // /display amount
    let wallet = document.getElementById("wallet");
    wallet.innerText = amount_total;
    document.getElementById("amount").value = "";
}

// /display amount
let wallet = document.getElementById("wallet");
wallet.innerText = amount_total;
