// Left Container cache
const city = document.querySelector('.left-container .city');
const temp = document.querySelector('.left-container .temp');
const condition = document.querySelector('.left-container .condition');
const min = document.querySelector('.left-container .minmax .mintemp');
const max = document.querySelector('.left-container .minmax .maxtemp');


function rernderLeftContainer(data) {
    city.textContent = data.today.location;
}

function reset() {
    city.textContent = '';
    temp.textContent = '';
    condition.textContent = '';
    min.textContent = '';
    max.textContent = '';    
}

export function renderUI(data) {
    reset();
    rernderLeftContainer(data);
}