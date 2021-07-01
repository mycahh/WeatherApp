
export const formatter = data => {


    const { title, consolidated_weather } = data

    const {
        weather_state_name,
        the_temp,
        wind_speed,
        wind_direction_compass,
        humidity,
        visibility,
        air_pressure,
        applicable_date
    } = consolidated_weather[0]

    const options = { weekday: 'short'};

    const Forecast = consolidated_weather.slice(1).map((forecast, index) => {

        const { min_temp, max_temp, weather_state_name, applicable_date } = forecast

        let formatDate

        if(index === 0) {
            formatDate = 'Tomorrow'
        } else {
            // eslint-disable-next-line
            const newDate = new Date(applicable_date.replace(/-/g, '\/'))
            const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(newDate)
            const monthOfYear = newDate.toLocaleString('default', { month: 'short' })
            formatDate = `${dayOfWeek}, ${newDate.getDate()} ${monthOfYear}`
        }

        return {
            date: formatDate,
            min_temp: Math.floor(min_temp),
            max_temp: Math.floor(max_temp),
            weather: weather_state_name
        }
    })

    // eslint-disable-next-line
    const TodayDate = new Date(applicable_date.replace(/-/g, '\/'))
    const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(TodayDate);
    const monthOfYear = TodayDate.toLocaleString('default', { month: 'short' })
    const TodayFormat = `${dayOfWeek}, ${TodayDate.getDate()} ${monthOfYear}`

    return {
        Location: title,
        CurrentWeather: weather_state_name,
        Temperature: Math.floor(the_temp),
        TodayFormat,
        WeatherStatusInfo: {
            windSpeed: Math.floor(wind_speed),
            windDirection: wind_direction_compass,
            humidity,
            visibility: visibility.toFixed(1),
            airPressure: air_pressure
        },
        Forecast
    }
}