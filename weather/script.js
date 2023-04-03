window.onload = function() {
/*
let weather = {
    apikey: "b0b9bfcce8cefea491af31c9fdb1e7ec",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apikey)
        .then((resp) => {
            if (!resp.ok) {
              alert("No weather found.");
              throw new Error("No weather found.");
            }
            return resp.json();
          })
        .then((data) => { 
            displayToday(data.list[0]);
            display5(data.list)
            cityInfo(data.city)
        });

    } /* ,
    displaydaily: function (data) {

    },
    display5: function (data) {

    }
};
*/



    const apikey= "b0b9bfcce8cefea491af31c9fdb1e7ec";
    function fetchWeather(city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apikey)
        .then((resp) => {
            if (!resp.ok) {
              alert("No weather found.");
              throw new Error("No weather found.");
            }
            return resp.json();
          })
        .then((data) => { 
            displayToday(data.list[0]);
            display5(data.list);
            cityInfo(data.city);
        });

    } /*,
    displaydaily: function (data) {

    },
    display5: function (data) {

    }*/


const displayToday = todayData => {
    const dt = todayData.dt;
    const {temp, feels_like, temp_min, temp_max, humidity} = todayData.main;
    const {description, icon} = todayData.weather[0];
    const {all} = todayData.clouds;
    const {speed, deg, gust} = todayData.wind;
    const visibility = todayData.visibility;

    const date = new Date(dt * 1000);
    const day = intToDay(date.getDay());
    const dayMonth = date.getDate();
    const month = intToMonth(date.getMonth());

    console.log(day,month,dayMonth)
    console.log(all);
    
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".min-temp").innerText = "Low: " + temp_min + "°F";
    document.querySelector(".max-temp").innerText = "High: " + temp_max  + "°F";
    document.querySelector(".feels").innerText = "Feels Like: " + feels_like  + "°F";
    document.querySelector(".desc").innerText = description;
    document.querySelector(".wind").innerText = "wind speed: " + speed + " mph at " + getDirection(deg);
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".visibility").innerText = "visibility: " + (Math.round(getMiles(visibility) * 10) / 10) + "mi";
    document.querySelector(".clouds").innerText = "clouds: " + all +  "%";
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";

}

const display5 = daysData => {
    for (let i = 0; i <= 40; i+=8){
        const dt = daysData[i].dt;
        const {temp, humidity} = daysData[i].main;
        const {description, icon} = daysData[i].weather[0];
        const visibility = daysData[i].weather[0];
        const {speed, deg, gust} = daysData[i].wind;

        console.log("date is" + dt, "number " + i, speed, description, visibility, temp,humidity,icon);

        //const currentDiv = $(`div[days="${i}"]`)[0];

        //$(currentDiv).children(".date")[0].innerText = "Date is  "+ ${dt};
        //$(currentDiv).children(".temp")[0].textContent = `Temp ${temp}`;
        const date = new Date(dt * 1000);
        const day = intToDay(date.getDay());
        const dayMonth = date.getDate();
        const month = intToMonth(date.getMonth());
        
        document.getElementById("date" + i ).innerText = day;
        document.getElementById("temp" + i ).innerText = temp + " °F";
        document.getElementById("desc" + i ).innerText = description;
        document.getElementById("hum" + i ).innerText = "Humidity: " + humidity + "%";
        document.getElementById("wind" + i ).innerText = "wind: " + speed + " mph";
        document.querySelector(".icon"+ i).src =  "https://openweathermap.org/img/wn/" + icon + ".png";
    }
}

const cityInfo = location => {
    const name = location;
    console.log("print this");
    console.log("This is date" +name);
    document.querySelector(".city").innerText = "Weather in " + name;
}


document.querySelector(".search button").addEventListener("click", function () {
    fetchWeather(document.querySelector(".search-bar").value);
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        fetchWeather(document.querySelector(".search-bar").value);
        document.querySelector(".city").innerText = "Weather in " + document.querySelector(".search-bar").value;
    }
  });


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


fetchWeather("Chicago");



}