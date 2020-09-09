const axios = require('axios')

const getLugarLatLng= async(dir) => {
    const encodedUlr = encodeURI(dir);
    
    const instance = axios.create({
        baseURL : 'https://api.mapbox.com/geocoding/v5/mapbox.places/badajoz.json',
        params: {'access_token': 'pk.eyJ1Ijoib3Ryb211bmRpc3RhIiwiYSI6ImNrZXN2cWg0ZDJiMzQyd284aGZwbmhhMDUifQ.ahaoTLBBU4tXQzBGSvbPgg'}
    });
    
    const resp = await instance.get();

    if(resp.data.features.length === 0){
        throw new Error( `No hay resultados para ${dir}`);
    }

    const data = resp.data.features[0];
    const longitud = data.geometry.coordinates[0]
    const latitud = data.geometry.coordinates[1]
    const direccion = data.place_name
            

            return {
                longitud,
                latitud,
                direccion
            }
}

module.exports = {
    getLugarLatLng
}

