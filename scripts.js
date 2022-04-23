let containerbox = document.querySelector(".containerbox");

let aries = document.getElementById("aries");

let ariesURL = `https://cors-anywhere.herokuapp.com/https://ohmanda.com/api/horoscope/aries`;
let horoscopeResults = document.querySelector('.results');

aries.addEventListener('click', ariesCall);

function ariesCall() {
    fetch(ariesURL)
        .then((response) => {
            return response.json(); 
        })
        .then((json) => {
            //console.log(json);
            displayScope(json);
        })
        .catch((err) => 
            console.log(err)
        );
}

let pisces = document.getElementById("aries");

let piscesURL = `https://cors-anywhere.herokuapp.com/https://ohmanda.com/api/horoscope/pisces`;
let horoscopeResults1 = document.querySelector('.results');

pisces.addEventListener('click', piscesCall);

function piscesCall() {
    fetch(piscesURL)
        .then((response) => {
            return response.json(); 
        })
        .then((json) => {
            //console.log(json);
            displayScope(json);
        })
        .catch((err) => 
            console.log(err)
        );
}


let aquarius = document.getElementById("aquarius");

let aquariusURL = `https://cors-anywhere.herokuapp.com/https://ohmanda.com/api/horoscope/aquarius`;
let horoscopeResults2 = document.querySelector('.results');

aquarius.addEventListener('click', aquariusCall);

function aquariusCall() {
    fetch(aquariusURL)
        .then((response) => {
            return response.json(); 
        })
        .then((json) => {
            //console.log(json);
            displayScope(json);
        })
        .catch((err) => 
            console.log(err)
        );
}


let capricorn = document.getElementById("capricorn");

let capricornURL = `https://cors-anywhere.herokuapp.com/https://ohmanda.com/api/horoscope/capricorn`;
let horoscopeResults3 = document.querySelector('.results');

capricorn.addEventListener('click', capricornCall);

function capricornCall() {
    fetch(capricornURL)
        .then((response) => {
            return response.json(); 
        })
        .then((json) => {
            //console.log(json);
            displayScope(json);
        })
        .catch((err) => 
            console.log(err)
        );
}


let sagittarius = document.getElementById("sagittarius");

let sagittariusURL = `https://cors-anywhere.herokuapp.com/https://ohmanda.com/api/horoscope/sagittarius`;
let horoscopeResults4 = document.querySelector('.results');

sagittarius.addEventListener('click', sagittariusCall);

function sagittariusCall() {
    fetch(sagittariusURL)
        .then((response) => {
            return response.json(); 
        })
        .then((json) => {
            //console.log(json);
            displayScope(json);
        })
        .catch((err) => 
            console.log(err)
        );
}


let scorpio = document.getElementById("scorpio");

let scorpioURL = `https://cors-anywhere.herokuapp.com/https://ohmanda.com/api/horoscope/scorpio`;
let horoscopeResults5 = document.querySelector('.results');

scorpio.addEventListener('click', scorpioCall);

function scorpioCall() {
    fetch(scorpioURL)
        .then((response) => {
            return response.json(); 
        })
        .then((json) => {
            //console.log(json);
            displayScope(json);
        })
        .catch((err) => 
            console.log(err)
        );
}


let libra = document.getElementById("libra");

let libraURL = `https://cors-anywhere.herokuapp.com/https://ohmanda.com/api/horoscope/libra`;
let horoscopeResults6 = document.querySelector('.results');

libra.addEventListener('click', libraCall);

function libraCall() {
    fetch(libraURL)
        .then((response) => {
            return response.json(); 
        })
        .then((json) => {
            //console.log(json);
            displayScope(json);
        })
        .catch((err) => 
            console.log(err)
        );
}


let virgo = document.getElementById("virgo");

let virgoURL = `https://cors-anywhere.herokuapp.com/https://ohmanda.com/api/horoscope/virgo`;
let horoscopeResults7 = document.querySelector('.results');

virgo.addEventListener('click', virgoCall);

function virgoCall() {
    fetch(virgoURL)
        .then((response) => {
            return response.json(); 
        })
        .then((json) => {
            //console.log(json);
            displayScope(json);
        })
        .catch((err) => 
            console.log(err)
        );
}


let leo = document.getElementById("leo");

let leoURL = `https://cors-anywhere.herokuapp.com/https://ohmanda.com/api/horoscope/leo`;
let horoscopeResults8 = document.querySelector('.results');

leo.addEventListener('click', leoCall);

function leoCall() {
    fetch(leoURL)
        .then((response) => {
            return response.json(); 
        })
        .then((json) => {
            //console.log(json);
            displayScope(json);
        })
        .catch((err) => 
            console.log(err)
        );
}


let cancer = document.getElementById("cancer");

let cancerURL = `https://cors-anywhere.herokuapp.com/https://ohmanda.com/api/horoscope/cancer`;
let horoscopeResults9 = document.querySelector('.results');

cancer.addEventListener('click', cancerCall);

function cancerCall() {
    fetch(cancerURL)
        .then((response) => {
            return response.json(); 
        })
        .then((json) => {
            //console.log(json);
            displayScope(json);
        })
        .catch((err) => 
            console.log(err)
        );
}


let gemini = document.getElementById("gemini");

let geminiURL = `https://cors-anywhere.herokuapp.com/https://ohmanda.com/api/horoscope/gemini`;
let horoscopeResults10 = document.querySelector('.results');

gemini.addEventListener('click', geminiCall);

function geminiCall() {
    fetch(geminiURL)
        .then((response) => {
            return response.json(); 
        })
        .then((json) => {
            //console.log(json);
            displayScope(json);
        })
        .catch((err) => 
            console.log(err)
        );
}


let taurus = document.getElementById("taurus");

let taurusURL = `https://cors-anywhere.herokuapp.com/https://ohmanda.com/api/horoscope/taurus`;
let horoscopeResults11 = document.querySelector('.results');

taurus.addEventListener('click', taurusCall);

function taurusCall() {
    fetch(taurusURL)
        .then((response) => {
            return response.json(); 
        })
        .then((json) => {
            //console.log(json);
            displayScope(json);
        })
        .catch((err) => 
            console.log(err)
        );
}

function displayScope(data) {
    console.log(data);
    let horoscopetext = document.createElement("p");
    horoscopetext.innerText = data.horoscope;
    horoscopetext.style.color = "rgb(113, 22, 94)";
    horoscopetext.style.fontFamily = "lobster";
    horoscopeResults.appendChild(horoscopetext);
}
    