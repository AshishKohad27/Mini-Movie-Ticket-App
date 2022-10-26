// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

// /display amount
let amount_total = JSON.parse(localStorage.getItem("amount"));
console.log("amount_total:", amount_total);
let wallet = document.getElementById("wallet");
wallet.innerText = amount_total;

document.getElementById("confirm").addEventListener("click", myBookTicket);
let getMovies = JSON.parse(localStorage.getItem("movie"));
// console.log('getMovies:', getMovies);

let movie = document.getElementById("movie");
displayMovies(getMovies);
function displayMovies(getMovies) {
    // console.log('getMovies:', getMovies)
    getMovies.forEach(({ Title, Poster }) => {
        // console.log('Poster:', Poster)
        // console.log('Title:', Title)
        let divMovie = document.createElement("div");
        divMovie.setAttribute("class", "movie_tab");
        let imgMovie = document.createElement("img");
        imgMovie.src = Poster;
        let pMovie = document.createElement("p");
        pMovie.innerText = Title;

        divMovie.append(pMovie, imgMovie);
        movie.append(divMovie);
    });
}

// booking Tickets
let flag = 0;
var eachSeats = 100;
function myBookTicket(event) {
    console.log("booking....................");
    let user_name = document.getElementById("user_name").value;
    let number_of_seats = document.getElementById("number_of_seats").value;
    // console.log('number_of_seats:', number_of_seats);

    totalSeatAmount = eachSeats * number_of_seats;
    console.log("totalSeatAmount:", totalSeatAmount);
    if (totalSeatAmount <= amount_total && flag === 0) {
        amount_total = amount_total - totalSeatAmount;
        localStorage.setItem("amount", JSON.stringify(amount_total));
        let wallet = document.getElementById("wallet");
        wallet.innerText = amount_total;
        flag = 1;
        alert("Booking successful!");
    } else {
        alert("Insufficient Balance!");
    }
    document.getElementById("user_name").value="";
    document.getElementById("number_of_seats").value="";
}
