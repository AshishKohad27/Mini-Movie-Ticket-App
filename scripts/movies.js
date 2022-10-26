// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let movieArr = JSON.parse(localStorage.getItem("movie")) || [];
let id;
let movies = document.getElementById("movies");

// /display amount
let amount_total = JSON.parse(localStorage.getItem("amount"));
let wallet = document.getElementById("wallet");
wallet.innerText = amount_total;


//Fetch data
let key = "7c5bb109";
async function main() {
    try {
        let search = document.getElementById("search").value;
        console.log('search:', search);

        let res = await fetch(`https://www.omdbapi.com/?apikey=${key}&s=${search}`);
        // console.log('res:', res);
        let data = await res.json();
        if (data.Search !== undefined) {
            appendMovies(data.Search);
        }
        // console.log('data:', data)
    }
    catch (error) {
        console.log('error:', error)
    }
}

function appendMovies(data) {
    // console.log('data:', data)
    movies.innerHTML = null;
    data.forEach((ele, index) => {
        //    console.log('Title:', Title);
        //    console.log('Poster:', Poster);

        let divMovie = document.createElement("div");
        divMovie.setAttribute("class", "movie_tab");
        let imgMovie = document.createElement("img");
        imgMovie.src = ele.Poster;
        let pMovie = document.createElement("p");
        pMovie.innerText = ele.Title;
        let btnMovie = document.createElement("button");
        btnMovie.innerText = "Book Now";
        btnMovie.setAttribute("class", "book_now");
        btnMovie.addEventListener("click", function (event) {
            // console.log("hi from Book NOW")
            bookMovie(ele, index);
        })

        divMovie.append(imgMovie, pMovie, btnMovie);
        movies.append(divMovie);
    })

}

// Debouncing
function debounce(func, delay) {
    if (id) {
        clearInterval(id);
    }
    id = setTimeout(() => {
        func();
    }, delay)
}

// bookMovies
function bookMovie(ele, index) {
    movieArr.pop();
    // console.log('ele:', ele)
    movieArr.push(ele);
    // console.log('movieArr:', movieArr)
    localStorage.setItem("movie", JSON.stringify(movieArr));
    window.location.href = "checkout.html"
}