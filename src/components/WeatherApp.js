// src/WeatherApp.js

import React, { useState } from 'react'

const WeatherApp = () => {
	const [city, setCity] = useState('')
	const [weather, setWeather] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const API_KEY = 'f26fe4fb5d2337ccb0310c34528bc29e' 

	const fetchWeather = async () => {
		if (!city) return
		setLoading(true)
		setError(null) // Reset error state
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
			)
			const data = await response.json()
			if (data.cod === 200) {
				setWeather(data)
			} else {
				setWeather(null)
				setError('City not found. Please try again.')
			}
		} catch (error) {
			setError('Error fetching weather data. Please try again later.')
			console.error('Error fetching weather data:', error)
		}
		setLoading(false)
	}


	return (
		<div className='weather-container'>
			<h1 className='header'>Weather App</h1>
			<input
				type='text'
				placeholder='Enter city name'
				className='city-input'
				value={city}
				onChange={e => setCity(e.target.value)}
			/>
			<button
				className='get-weather-btn'
				onClick={fetchWeather}
				disabled={loading}
			>
				{loading ? 'Loading...' : 'Get Weather'}
			</button>

			{error && <p className='error-message'>{error}</p>}

			{weather && !loading && (
				<div className='weather-info'>
					<h2 className='city-name'>{weather.name}</h2>
					<p className='weather-description'>
						{weather.weather[0].description}
					</p>
					<p className='temperature'>{weather.main.temp}°C</p>

					<p className='additional-info'>
						<strong>Humidity:</strong> {weather.main.humidity}%
					</p>
					<p className='additional-info'>
						<strong>Wind Speed:</strong> {weather.wind.speed} m/s
					</p>
					<p className='additional-info'>
						<strong>Pressure:</strong> {weather.main.pressure} hPa
					</p>
					<p className='additional-info'>
						<strong>Cloudiness:</strong> {weather.clouds.all}%
					</p>

					
					<p className='additional-info'>
						<strong>Sunrise:</strong>{' '}
						{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
					</p>
					<p className='additional-info'>
						<strong>Sunset:</strong>{' '}
						{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
					</p>

					
					<img
						src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
						alt='weather icon'
						className='weather-icon'
					/>
				</div>
			)}
		</div>
	)
}

export default WeatherApp
