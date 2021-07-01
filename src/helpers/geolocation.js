const getCoordenate = () => (
    new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject))
)

const getCurrentPosition = async () => {
    try {
        const { coords: {latitude, longitude}} = await getCoordenate()
        const coordenate = `${latitude},${longitude}`
        return { coordenate, isGeolocator: true }

    } catch (error) {
        return { coordenate: null, isGeolocator: false }
    }
}

export {
    getCurrentPosition
}