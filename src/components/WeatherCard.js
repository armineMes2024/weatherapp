import React from 'react'
import WeatherDetails from './WeatherDetails'

const getBackgroundClass = condition => {
	switch (condition) {
		case 'Clear':
			return 'weather-clear'
		case 'Rain':
		case 'Drizzle':
			return 'weather-rain'
		case 'Snow':
			return 'weather-snow'
		case 'Thunderstorm':
			return 'weather-storm'
		case 'Clouds':
		case 'Mist':
		case 'Fog':
		case 'Haze':
			return 'weather-clouds'
		default:
			return 'weather-default'
	}
}

const WeatherCard = ({ weather }) => {
	const condition = weather.weather[0].main
	const description =
		weather.weather[0].description.charAt(0).toUpperCase() +
		weather.weather[0].description.slice(1)
	const date = new Date().toLocaleDateString([], {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
	const time = new Date().toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	})

	return (
		<div className={`weather-card ${getBackgroundClass(condition)}`}>
			<div className='weather-date'>
				{date} · {time}
			</div>
			<h2 className='city-name'>{weather.name}</h2>
			<div className='weather-main'>
				<img
					src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
					alt={description}
					className='weather-icon'
				/>
				<div className='temperature'>
					{Math.round(weather.main.temp)}
					<span className='degree'>°C</span>
				</div>
			</div>
			<p className='weather-description'>{description}</p>
			<p className='weather-metrics'>Feels like {Math.round(weather.main.feels_like)}°C</p>
			<WeatherDetails weather={weather} />
		</div>
	)
}

export default WeatherCard