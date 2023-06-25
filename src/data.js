export class Data {
    constructor() {
        this.today = {};
        this.forecast = [{}, {}, {}];
        this.hours = [];
        this.temp = 'F'
    }

    async addData(city) {
        try {
            // Fetch data from API
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a91fd93998594df68e9202550232006&q=${city}&days=3&aqi=yes`);
            const data = await response.json();
            
            // Store fetched data in today
            if(this.temp === 'F') {
                this.today.temp = data.current.temp_f;
                this.today.feelslike = data.current.feelslike_f;
                this.today.maxtemp = data.forecast.forecastday[0].day.maxtemp_f;
                this.today.mintemp = data.forecast.forecastday[0].day.mintemp_f;
            }
            if(this.temp === 'C') {
                this.today.temp = data.current.temp_c;
                this.today.feelslike = data.current.feelslike_c;
                this.today.maxtemp = data.forecast.forecastday[0].day.maxtemp_c;
                this.today.mintemp = data.forecast.forecastday[0].day.mintemp_c;
            }
            this.today.condition = data.current.condition.text;
            this.today.humidity = data.current.humidity;
            this.today.location = data.location.name + ', ' + data.location.region;
            this.today.uv = data.current.uv;
            this.today.sunrise = data.forecast.forecastday[0].astro.sunrise;
            this.today.sunset = data.forecast.forecastday[0].astro.sunset;
            this.today.epa = data.current.air_quality['us-epa-index'];

            // Store fetched data in forecast
            for(let i = 0; i < 3; i++) {
                this.forecast[i].condition = data.forecast.forecastday[i].day.condition.text;
                if(this.temp === 'F') {
                    this.forecast[i].maxtemp = data.forecast.forecastday[i].day.maxtemp_f;
                    this.forecast[i].mintemp = data.forecast.forecastday[i].day.mintemp_f;
                    this.forecast[i].avgtemp = data.forecast.forecastday[i].day.avgtemp_f;
                }
                if(this.temp === 'C') {
                    this.forecast[i].maxtemp = data.forecast.forecastday[i].day.maxtemp_c;
                    this.forecast[i].mintemp = data.forecast.forecastday[i].day.mintemp_c;
                    this.forecast[i].avgtemp = data.forecast.forecastday[i].day.avgtemp_f;
                }
            }

            // Store 24 hour period and sunrise and sunset
            let currentTime = new Date().getHours();    // Initialize time
            let sunriseTime = parseInt(data.forecast.forecastday[0].astro.sunrise.split(':')[0]);       // Outputs hour of sunrise
            let sunsetTime = parseInt(data.forecast.forecastday[0].astro.sunset.split(':')[0]) + 12;    // Outputs hour of sunset
            // If time passed, use tomorrow's sunset and sunrise
            if (currentTime > sunriseTime) sunriseTime = parseInt(data.forecast.forecastday[1].astro.sunrise.split(':')[0]);
            if (currentTime > sunsetTime) sunsetTime = parseInt(data.forecast.forecastday[1].astro.sunset.split(':')[0]) + 12;

            for(let i = 0; i < 27; i++) {
                if(currentTime < 24) {                  // Store remaining hours of the day
                    this.hours[i] = {};
                    this.hours[i].hour = new Date(data.forecast.forecastday[0].hour[currentTime].time).getHours();
                    this.hours[i].condition = data.forecast.forecastday[0].hour[currentTime].condition.text;
                    if(this.temp === 'F') this.hours[i].temp = data.forecast.forecastday[0].hour[currentTime].temp_f;
                    if(this.temp === 'C') this.hours[i].temp = data.forecast.forecastday[0].hour[currentTime].temp_c;
                } else {                                // Store the rest of 24 hour period
                    this.hours[i] = {};
                    this.hours[i].hour = new Date(data.forecast.forecastday[1].hour[currentTime - 24].time).getHours();
                    this.hours[i].condition = data.forecast.forecastday[1].hour[currentTime - 24].condition.text;
                    if(this.temp === 'F') this.hours[i].temp = data.forecast.forecastday[1].hour[currentTime - 24].temp_f;
                    if(this.temp === 'C') this.hours[i].temp = data.forecast.forecastday[1].hour[currentTime - 24].temp_c;
                }
                // Add sunset and sunrise time if the time arrives
                if (currentTime === sunriseTime || currentTime - 24 === sunriseTime) {
                    this.hours[i + 1] = [];
                    this.hours[i + 1][0] = data.forecast.forecastday[0].astro.sunrise;
                    this.hours[i + 1][1] = 'Sunrise';
                    i++;
                }
                if (currentTime === sunsetTime || currentTime - 24 === sunsetTime) {
                    this.hours[i + 1] = [];
                    this.hours[i + 1][0] = data.forecast.forecastday[0].astro.sunset;
                    this.hours[i + 1][1] = 'Sunset';
                    i++;
                }
                currentTime++;                          // Increment hour
            }
        } catch(err) {
            throw Error(err)
        }
    }
    addDay() {
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date();
        this.today.day = weekday[d.getDay()];
        this.forecast[0].day = 'Today';
        this.forecast[1].day = weekday[(d.getDay() + 1 > 6) ? (d.getDay() - 6) : (d.getDay() + 1)];
        this.forecast[2].day = weekday[(d.getDay() + 2 > 6) ? (d.getDay() - 5) : (d.getDay() + 2)];
    }

    async fillObject(city) {
        await this.addData(city);
        this.addDay();
    }
    reset() {
        this.today = {};
        this.forecast = [{}, {}, {}];
        this.hours = [];
    }
}