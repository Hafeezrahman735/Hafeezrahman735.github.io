window.onload = function() {

    
    function fetchWeather(city) {
        fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" 
        + city
        + "?unitGroup=us&include=days%2Ccurrent&key=TXDAB7W85J7NNKQ4GL2MND34P&contentType=json", {
            "method": "GET",
            "headers": {
        }
        })
        .then((resp) => {
            if (!resp.ok) {
              alert("No weather found.");
              throw new Error("No weather found.");
            }
            return resp.json();
        })
        .then((data) => { 
            //console.log(data)
            displayWeather(data);
            displaydays(data);
        })
        .catch(err => {
        console.error(err);
    });

}



/*
let weather = {
    
    fetchWeather: function (city) {
      fetch(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" 
        + city
        + "?unitGroup=us&include=days%2Ccurrent&key=TXDAB7W85J7NNKQ4GL2MND34P&contentType=json"
      )
        .then((response) => response.json())
        .then((data) => {
            this.displayWeather(data);
            this.displaydays(data);
        });
    },

    displayWeather: function (data) {
        const { address } = data;
        const { datetimeEpoch, temp, cloudcover, feelslike, humidity, windgust, windspeed, winddir, visibility, conditions, icon, sunriseEpoch, sunsetEpoch} = data.currentConditions;
        //console.log(datetimeEpoch, address, temp, feelslike, humidity, visibility, conditions, icon, sunriseEpoch, sunsetEpoch);
        let newicon = icon.split("-").join("_");
        
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".feels").innerText = "Feels Like: " + feelslike  + "°F";
        document.querySelector(".desc").innerText = conditions;
        document.querySelector(".wind").innerText = "wind speed: " + windspeed + " mph at " + getDirection(winddir);
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".visibility").innerText = "visibility: " + visibility + "mi";
        document.querySelector(".clouds").innerText = "clouds: " + cloudcover +  "%";
        document.querySelector(".icon").src = "./drawable/" + newicon + ".png";

        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(datetimeEpoch * 1000);
        const day = intToDay(date.getDay());
        const dayMonth = date.getDate();
        const month = intToMonth(date.getMonth());
        console.log(date.toLocaleDateString("en-US", options));

        console.log(month,day)
    },

    displaydays: function (data) {
        for (let i = 1; i <= 5; i++){
            const {datetime, temp, tempmin, tempmax, humidity, visibility, windspeed, icon, conditions} = data.days[i];


            let newicon = icon.split("-").join("_");
            console.log(icon, newicon);
            //document.getElementById("date" + i ).innerText = day;
            document.getElementById("temp" + i ).innerText = temp + " °F";
            document.getElementById("desc" + i ).innerText = conditions;
            document.getElementById("hum" + i ).innerText = "Humidity: " + humidity + "%";
            document.getElementById("wind" + i ).innerText = "wind: " + windspeed + " mph";
            document.querySelector(".icon"+ i).src =  "./drawable/" + newicon + ".png";
        }
    }
};
*/

const displayWeather = data => {
    const { resolvedAddress } = data;
    const { datetimeEpoch, temp, cloudcover, feelslike, humidity, windgust, windspeed, winddir, visibility, conditions, icon, precipprob, sunriseEpoch, sunsetEpoch} = data.currentConditions;
    //console.log(datetimeEpoch, address, temp, feelslike, humidity, visibility, conditions, icon, sunriseEpoch, sunsetEpoch);

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(datetimeEpoch * 1000);
    const rise = new Date(sunriseEpoch * 1000);
    const set = new Date(sunsetEpoch * 1000);
    //console.log(date.toLocaleDateString("en-US", options));

    let newicon = icon.split("-").join("_");
    document.getElementById("currentdate").innerText = date.toLocaleDateString("en-US", options);
    document.querySelector(".city").innerText = "Weather in " + resolvedAddress;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".feels").innerText = "Feels Like: " + feelslike  + "°F";
    document.querySelector(".desc").innerText = conditions;
    document.querySelector(".wind").innerText = "wind speed: " + windspeed + " mph at " + getDirection(winddir);
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".rain").innerText = "Chance of Rain: " + precipprob + "%";
    document.querySelector(".visibility").innerText = "visibility: " + visibility + "mi";
    document.querySelector(".clouds").innerText = "clouds: " + cloudcover +  "%";
    document.querySelector(".sunrise").innerText = "Sunrise: " + rise.toLocaleTimeString();
    document.querySelector(".sunset").innerText = "Sunset: " + set.toLocaleTimeString();
    document.querySelector(".icon").src = "./drawable/" + newicon + ".png";

    //console.log(month,day);
}

const displaydays = data => {
    for (let i = 1; i <= 5; i++){
        const {datetimeEpoch, temp, tempmin, tempmax, humidity, visibility, windspeed, icon, conditions} = data.days[i];

        const date = new Date(datetimeEpoch * 1000);
        const day = intToDay(date.getDay());
        const dayMonth = date.getDate();
        const month = intToMonth(date.getMonth());

        let newicon = icon.split("-").join("_");
        //console.log(icon, newicon);
        document.getElementById("date" + i ).innerText = day;
        document.getElementById("temp" + i ).innerText = temp + " °F";
        document.getElementById("desc" + i ).innerText = conditions;
        document.getElementById("hum" + i ).innerText = "Humidity: " + humidity + "%";
        document.getElementById("wind" + i ).innerText = "wind: " + windspeed + " mph";
        document.querySelector(".icon"+ i).src =  "./drawable/" + newicon + ".png";
    }
}

const getDirection = degrees => {
    if (degrees >= 337.5 || degrees < 22.5)
        return "N";
    if (degrees >= 22.5 || degrees < 67.5)
        return "NE";
    if (degrees >= 67.5 || degrees < 112.5)
        return "E";
    if (degrees >= 112.5 || degrees < 157.5)
        return "SE";
    if (degrees >= 157.5 || degrees < 202.5)
        return "S";
    if (degrees >= 202.5 || degrees < 247.5)
        return "SW";
    if (degrees >= 247.5 || degrees < 292.5)
        return "W";
    if (degrees >= 292.5 || degrees < 337.5)
        return "NW";
}

// returns string reprenting the month from interger
const intToMonth = monthAsInt => {
    let month = "";
    switch(monthAsInt){
        case 0:
            month  = "January";
            break;
        case 1:
            month  = "Febuary";
            break;
        case 2:
            month  = "March";
            break;
        case 3:
            month  = "April";
            break;
        case 4:
            month  = "May";
            break;
        case 5:
            month  = "June";
            break;
        case 6:
            month  = "July";
            break;
        case 7:
            month  = "August";
            break;
        case 8:
            month  = "September";
            break;
        case 9:
            month  = "October";
            break;
        case 10:
            month  = "Novemeber";
            break;
        case 11:
            month  = "December";
    }
    return month ;
}
// returns string reprenting the day from interger
const intToDay = dayAsInt => {
    let day = "Weather";
    switch(dayAsInt){
        case 0:
            day = "Sunday";
            break;
          case 1:
            day = "Monday";
            break;
          case 2:
            day = "Tuesday";
            break;
          case 3:
            day = "Wednesday";
            break;
          case 4:
            day = "Thursday";
            break;
          case 5:
            day = "Friday";
            break;
          case 6:
            day = "Saturday";
    }
    return day;
}

function getMiles(meters) {
    return meters*0.000621371192;
}

function backgroundChange(weather) {
    if (weather === 'Rain') {
    document.body.style.backgroundImage = "url('https://sukhbinder.files.wordpress.com/2012/10/wpid-rain.jpg')";
    } else if (weather === 'Clouds') {
    document.body.style.backgroundImage = "url(cloud.gif)";
    } else if (weather === 'Clear') {
    document.body.style.backgroundImage = "url('https://i...')";
    }else if (weather === 'Haze') {
      document.body.style.backgroundImage = "url('https://live.staticflickr.com/7192/6814624698_2a45c14996_n.jpg')";
    } else {
    document.body.style.backgroundImage= "url(background.gif)";
    }
}

document.querySelector(".search button").addEventListener("click", function () {
    fetchWeather(document.querySelector(".search-bar").value);
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        var search = document.querySelector(".search-bar").value;
        if (search == ""){
            fetchWeather("Chicago");
        }
        else {
            fetchWeather(search);
        }
    }
});

function refreshTime() {
    document.getElementById("currenttime").innerText = new Date().toLocaleTimeString() + " CST";
}

fetchWeather("Chicago");
refreshTime();
setInterval(refreshTime, 1000);
//setInterval(, 1000);
}