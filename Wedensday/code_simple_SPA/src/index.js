import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

//const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
//document.getElementById("jokes").innerHTML = allJokes.join("");

document.getElementById("getJokeByID").addEventListener("click", (event) => {
    event.preventDefault();
    let inputResult = document.getElementById('inputfield').value - 1;
    let jokeByInput = jokes.getJokeById(inputResult);
    document.getElementById("jokeByInput").innerHTML = jokeByInput;
});

document.getElementById("addJoke").addEventListener("click", (event) => {
    event.preventDefault();
    let inputResult = document.getElementById('inputfieldadd').value;
    jokes.addJoke(inputResult);
    let success = "Joke has successfully been added";
    document.getElementById("addJokeSuccess").innerHTML = success;
});

// Not working to get data to the page. InnerHTML of null error.
let fetchQuote = (hourlyJoke) => {
fetch('https://studypoints.info/jokes/api/jokes/period/hour')
    .then(data => data.json())
    .then(data => console.log(data.joke))
    //.then(data => {
    //document.getElementById(hourlyJoke).innerHTML = data.joke});
//    .then(data => {
//      document.getElementById(hourlyJoke).innerHTML = data.joke});
        //.catch (error => console.log('Error:' + error));
};

document.getElementById("getQuoteByFetch").addEventListener("click", (event) => {
    event.preventDefault();
    return fetchQuote("quoteOfTheHour");
});