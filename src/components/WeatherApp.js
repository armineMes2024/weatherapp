import React, { useState } from 'react'
import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard'
import Spinner from './Spinner'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const STORAGE_KEY = 'weatherapp_last_city'

const WeatherApp = () => {
	const [city, setCity] = useState(
		() => localStorage.getItem(STORAGE_KEY) || ''
	)
	const [weather, setWeather] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const fetchWeather = async (searchCity = city) => {
		const query = (searchCity || city || '').trim()
		if (!query) {
			setError('Please enter a city name.')
			return
		}

		if (!API_KEY) {
			setError(
				'API key is missing. Please add REACT_APP_WEATHER_API_KEY to your .env file.'
			)
			return
		}

		setLoading(true)
		setError(null)
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
					query
				)}&units=metric&appid=${API_KEY}`
			)
			const data = await response.json()
			if (data.cod === 200) {
				setWeather(data)
				setCity(data.name)
				localStorage.setItem(STORAGE_KEY, data.name)
			} else {
				setWeather(null)
				setError(
					data.message
						? `City not found: ${data.message}.`
						: 'City not found. Please try again.'
				)
			}
		} catch (err) {
			setWeather(null)
			setError('Network error. Please check your connection and try again.')
			console.error('Error fetching weather data:', err)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='weather-container'>
			<h1 className='header'>Weather App</h1>
			<p className='subtitle'>Check the current weather in any city</p>
			<SearchBar
				city={city}
				onChange={setCity}
				onSearch={fetchWeather}
				loading={loading}
			/>
			{error && <p className='error-message'>{error}</p>}
			{loading && <Spinner />}
			{!loading && weather && <WeatherCard weather={weather} />}
		</div>
	)
}

export default WeatherApp