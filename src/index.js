import './styles.css';
import { Data } from './data';


const search = document.querySelector('.search');
const searchButton = document.querySelector('.search-button');

const city = new Data();

searchButton.addEventListener('click', () => {
    // Reset and fetch data
    city.reset();
    city.fillObject(search.value);

    // Load UI
    console.log(city)
});
