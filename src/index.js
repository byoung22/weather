import './styles.css';
import { Data } from './data';
import { renderUI } from './render';


const search = document.querySelector('.search');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', async () => {
    const city = new Data();
    // Reset and fetch data
    city.reset();
    await city.fillObject(search.value);

    // Load UI
    renderUI(city)
    console.log(city)
});
