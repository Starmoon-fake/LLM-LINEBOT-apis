require('dotenv').config();
module.exports = {
    "BaseWeatherURL":`https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=${process.env.weather_api_key}&format=JSON&StationId=C0H960`

}