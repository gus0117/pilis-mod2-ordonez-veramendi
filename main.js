import {weather} from "./js/weather_section.js"
/*****************************************************Weather****************************************************/
let d = document;
d.addEventListener("DOMContentLoaded", e => {
    weather(".name-city",".temperature",".description-weather");
});

