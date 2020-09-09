const axios = require('axios')


const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e4eb639ed93ae167b2d89157ffc4a93d&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}