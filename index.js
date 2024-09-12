const WeatherClient = require('./apis/weather/client');

const client = new WeatherClient()
async function run() {
    const result = await client.GetBaseWeather()
    console.log(result.data)
}
run()
