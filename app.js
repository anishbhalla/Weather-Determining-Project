const apiKey="559b895f95e948f147ffd65f12023115";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city=document.querySelector(".city");
const temp=document.querySelector(".temp");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(cityInp){
    const response = await fetch(apiUrl + cityInp + `&appid=${apiKey}`);
    var data = await response.json();

    // console.log(data);

    if (response.status == 404){
        document.querySelector(".error").style.visibility = "inherit";
        document.querySelector(".weather").style.display = "none";
    }
    
    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + '°C';
    humidity.innerHTML = data.main.humidity + '%';
    wind.innerHTML = data.wind.speed + 'km/h';


    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "/mist.png";
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "/snow.png";
    }

    document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click",() =>{
    checkWeather(searchBox.value);
    const clearVis = setTimeout(()=>{
        document.querySelector(".error").style.visibility = "hidden";
    },2000)();

})

// searchBtn.addEventListener("keypress",(evt) =>{
//     if (evt.keyCode === 13){
//         checkWeather(searchBox.value);
//     }
// })
