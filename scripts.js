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

function displayScope(data) {
    console.log(data);
    let horoscopetext = document.createElement("p");
    horoscopetext.innerText = data.horoscope;
    horoscopetext.style.color = "rgb(113, 22, 94)";
    horoscopetext.style.fontFamily = "lobster";
    horoscopeResults.appendChild(horoscopetext);
}
    
