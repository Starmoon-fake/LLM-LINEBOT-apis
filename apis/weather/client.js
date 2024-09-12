const axios = require('axios')
const config = require('../../config')
class WeatherClient {
    constructor(){
        this.GetBaseWeather = async () => {
            const respone = await axios.get(config.BaseWeatherURL)
            if(!respone) return {status:'failed',message:'Notthing Found'}
            return respone;
        }
    }
    
}

module.exports = WeatherClient