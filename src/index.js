import "./styles.css";
import { Data } from "./data";
import { renderUI } from "./render";

const search = document.querySelector(".search");
const searchButton = document.querySelector(".search-button");

const city = new Data();

// Initial data
await city.fillObject("LA");
renderUI(city);

searchButton.addEventListener("click", async () => {
  // Reset and fetch data
  city.reset();
  await city.fillObject(search.value);

  // Load UI after data is fetched
  renderUI(city);
});
