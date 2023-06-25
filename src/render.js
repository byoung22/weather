import sunny from './photos/weather/ClearD.png';
import clear from './photos/weather/ClearN.png';
import partlyD from './photos/weather/PartlyD.png';
import partlyN from './photos/weather/PartlyN.png';
import overcast from './photos/weather/Overcast.png';
import fog from './photos/weather/Fog.png';
import drizzleD from './photos/weather/DrizzleD.png';
import drizzleN from './photos/weather/DrizzleN.png';
import heavyD from './photos/weather/HeavyD.png';
import heavyN from './photos/weather/HeavyN.png';
import thunderD from './photos/weather/ThunderD.png';
import thunderN from './photos/weather/ThunderN.png';
import snowD from './photos/weather/SnowD.png';
import snowN from './photos/weather/SnowN.png';
import blizzard from './photos/weather/Blizzard.png';
import sunrise from './photos/weather/sunrise.png';
import sunset from './photos/weather/sunset.png';

// Left Container cache
const city = document.querySelector('.left-container .city');
const temp = document.querySelector('.left-container .temp');
const condition = document.querySelector('.left-container .condition');
const min = document.querySelector('.left-container .minmax .mintemp');
const max = document.querySelector('.left-container .minmax .maxtemp');

// Right Container top info
const feels = document.querySelector('.right-container .info .feels .text');
const epa = document.querySelector('.right-container .info .epa .text');
const humidity = document.querySelector('.right-container .info .humidity .text');
const uv = document.querySelector('.right-container .info .uv .text');

// Right Container hours
const hoursContainer = document.querySelector('.right-container .hours');

let sunriseTime;                            // Outputs hour of sunrise
let sunsetTime;                             // Outputs hour of sunset

function getSunsetSunrise(data) {
    sunriseTime = parseInt(data.today.sunrise.split(':')[0]);
    sunsetTime = parseInt(data.today.sunset.split(':')[0]) + 12;
}

function rernderLeftContainer(dataToday) {
    city.textContent = dataToday.location;
    temp.textContent = dataToday.temp + '°';
    renderImage(new Date().getHours(), dataToday.condition, condition);
    min.textContent = `L: ${dataToday.mintemp}°`;
    max.textContent = `H: ${dataToday.maxtemp}°`;
}
function renderInfo(dataToday) {
    feels.textContent = `${dataToday.feelslike}°`;
    epa.textContent = dataToday.epa;
    humidity.textContent = dataToday.humidity;
    uv.textContent = dataToday.uv;
}
function renderHours(hours) {
    const time =    ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM',
                    '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
                    '12PM', '1PM', '2PM', '3PM', '4PM', '5PM',
                    '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', 'NOW'];
    hours[0].hour = 24;

    hours.forEach(hour => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardTime = document.createElement('div');
        cardTime.classList.add('hour-card-row');
        card.appendChild(cardTime);

        const cardCondition = document.createElement('div');
        cardCondition.classList.add('hour-card-row');
        card.appendChild(cardCondition);

        const cardTemp = document.createElement('div');
        cardTemp.classList.add('hour-card-row');
        card.appendChild(cardTemp);

        if (!Array.isArray(hour)) {
            cardTime.textContent = `${time[hour.hour]}`;
            renderImage(hour.hour, hour.condition, cardCondition);
            cardTemp.textContent = `${hour.temp}°`;
        } else {
            cardTime.textContent = hour[0];
            cardTime.classList.add('sunset-sunrise-time');
            renderImage(hour.hour, hour[1], cardCondition);
            cardTemp.textContent = hour[1];
        }
        hoursContainer.appendChild(card);
    });
    console.log(hours)
}
function hourScroll() {
    let startX, scrollLeft;
    let isDown = false;
    hoursContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX;
        scrollLeft = hoursContainer.scrollLeft;
    });

    hoursContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });

    hoursContainer.addEventListener('mouseup', () => {
        isDown = false;
    });

    hoursContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX) * 3; //scroll-fast
        hoursContainer.scrollLeft = scrollLeft - walk;
    });
}
function renderImage(hour, condition, parent) {
    const icon = new Image();
    icon.classList.add('icon');
    if (condition === 'Sunrise') icon.src = sunrise;
    if (condition === 'Sunset') icon.src = sunset;
    if (condition === 'Sunny') icon.src = sunny;
    if (condition === 'Clear') icon.src = clear;
    if (condition === 'Cloudy' || condition === 'Overcast') icon.src = overcast;
    if (condition === 'Mist' || condition === 'Fog' || condition === 'Freezing fog') icon.src = fog;
    if (condition === 'Blizzard' || condition === 'Moderate or heavy sleet' || condition === 'Patchy heavy snow' || condition === 'Heavy snow' || condition === 'Ice pellets' || condition === 'Moderate or heavy snow showers' || condition === 'Moderate or heavy showers of ice pellets') icon.src = blizzard;
    if (hour >= sunsetTime || hour <= sunriseTime) {
        if (condition === 'Partly cloudy') icon.src = partlyN;
        if (condition === 'Patchy rain possible' || condition === 'Patchy light drizzle' || condition === 'Light drizzle' || condition === 'Patchy light rain' || condition === 'Light rain'  || condition === 'Light freezing rain' || condition === 'Light rain shower' || condition === 'Light sleet showers') icon.src = drizzleN;
        if (condition === 'Heavy freezing drizzle' || condition === 'Moderate rain at times' || condition === 'Moderate rain' || condition === 'Heavy rain at times' || condition === 'Heavy rain' || condition === 'Moderate or heavy freezing rain' || condition === 'Moderate or heavy rain shower' || condition === 'Torrential rain shower' || condition === 'Moderate or heavy sleet showers') icon.src = heavyN;
        if (condition === 'Patchy snow possible' || condition === 'Patchy sleet possible' || condition === 'Patchy freezing drizzle possible' || condition === 'Blowing snow' || condition === 'Freezing drizzle' || condition === 'Light sleet' || condition === 'Patchy light snow' || condition === 'Light snow' || condition === 'Patchy moderate snow' || condition === 'Moderate snow' || condition === 'Light snow showers' || condition === 'Light showers of ice pellets') icon.src = snowN;
        if (condition === 'Thundery outbreaks possible' || condition === 'Patchy light rain with thunder' || condition === 'Moderate or heavy rain with thunder' || condition === 'Patchy light snow with thunder' || condition === 'Moderate or heavy snow with thunder') icon.src = thunderN;
    } else {
        if (condition === 'Partly cloudy') icon.src = partlyD;
        if (condition === 'Patchy rain possible' || condition === 'Patchy light drizzle' || condition === 'Light drizzle' || condition === 'Patchy light rain' || condition === 'Light rain'  || condition === 'Light freezing rain' || condition === 'Light rain shower' || condition === 'Light sleet showers') icon.src = drizzleD;
        if (condition === 'Heavy freezing drizzle' || condition === 'Moderate rain at times' || condition === 'Moderate rain' || condition === 'Heavy rain at times' || condition === 'Heavy rain' || condition === 'Moderate or heavy freezing rain' || condition === 'Moderate or heavy rain shower' || condition === 'Torrential rain shower' || condition === 'Moderate or heavy sleet showers') icon.src = heavyD;
        if (condition === 'Patchy snow possible' || condition === 'Patchy sleet possible' || condition === 'Patchy freezing drizzle possible' || condition === 'Blowing snow' || condition === 'Freezing drizzle' || condition === 'Light sleet' || condition === 'Patchy light snow' || condition === 'Light snow' || condition === 'Patchy moderate snow' || condition === 'Moderate snow' || condition === 'Light snow showers' || condition === 'Light showers of ice pellets') icon.src = snowD;
        if (condition === 'Thundery outbreaks possible' || condition === 'Patchy light rain with thunder' || condition === 'Moderate or heavy rain with thunder' || condition === 'Patchy light snow with thunder' || condition === 'Moderate or heavy snow with thunder') icon.src = thunderD;
    }
    parent.appendChild(icon);
}

function reset() {
    city.textContent = '';
    temp.textContent = '';
    condition.textContent = '';
    min.textContent = '';
    max.textContent = '';
    feels.textContent = '';
    epa.textContent = '';
    humidity.textContent = '';
    uv.textContent = '';
}

export function renderUI(data) {
    reset();
    getSunsetSunrise(data);
    rernderLeftContainer(data.today);
    renderInfo(data.today);
    renderHours(data.hours);
    hourScroll();
}