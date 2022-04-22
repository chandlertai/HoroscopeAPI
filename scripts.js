let containerbox = document.querySelector(".containerbox");

let button = document.getElementById("aries");

let baseURL = `https://cors-anywhere.herokuapp.com/https://ohmanda.com/api/horoscope/aries`;

scopeCall();

aries.addEventListener('click', scopeCall);

function scopeCall() {
    fetch(baseURL)
        .then((response) => {return response.json(); 
        })
        .then((json) => {
            console.log(json);
        })
        .catch((err) => 
            console.log(err)
        );
}

    function displayScope(data)
    console.log(data);