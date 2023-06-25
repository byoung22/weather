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

function rernderLeftContainer(dataToday) {
    city.textContent = dataToday.location;
    temp.textContent = dataToday.temp + '°';
    condition.textContent = dataToday.condition;
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
                    '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];

    hours.forEach(hour => {
        const card = document.createElement('div');
        card.classList.add('card');
        const cardTime = document.createElement('div');
        card.appendChild(cardTime);
        const cardCondition = document.createElement('div');
        card.appendChild(cardCondition);
        const cardTemp = document.createElement('div');
        card.appendChild(cardTemp);

        if (!Array.isArray(hour)) {
            cardTime.textContent = `${time[hour.hour]}`;
            cardCondition.textContent = `${hour.condition}`;
            cardTemp.textContent = `${hour.temp}°`;
        } else {
            cardTime.textContent = hour[0];
            cardCondition.textContent = hour[1];
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
    rernderLeftContainer(data.today);
    renderInfo(data.today);
    renderHours(data.hours);
    hourScroll();
}