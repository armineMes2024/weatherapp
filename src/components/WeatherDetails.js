import React from 'react'

const WeatherDetails = ({ weather }) => {
	const details = [
		{ label: 'Humidity', value: `${weather.main.humidity}%`, icon: '💧' },
		{ label: 'Wind Speed', value: `${weather.wind.speed} m/s`, icon: '💨' },
		{ label: 'Pressure', value: `${weather.main.pressure} hPa`, icon: '🌡️' },
		{ label: 'Cloudiness', value: `${weather.clouds.all}%`, icon: '☁️' },
		{
			label: 'Feels Like',
			value: `${Math.round(weather.main.feels_like)}°C`,
			icon: '🌤️',
		},
		{
			label: 'Sunrise',
			value: new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
			}),
			icon: '🌅',
		},
		{
			label: 'Sunset',
			value: new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
			}),
			icon: '🌇',
		},
	]

	return (
		<div className='weather-details'>
			{details.map(detail => (
				<div className='detail-item' key={detail.label}>
					<span className='detail-icon'>{detail.icon}</span>
					<div className='detail-text'>
						<span className='detail-label'>{detail.label}</span>
						<span className='detail-value'>{detail.value}</span>
					</div>
				</div>
			))}
		</div>
	)
}

export default WeatherDetails