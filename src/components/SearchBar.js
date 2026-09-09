import React from 'react'

const SearchBar = ({ city, onChange, onSearch, loading }) => {
	const handleSubmit = e => {
		e.preventDefault()
		onSearch()
	}

	return (
		<form className='search-bar' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Enter city name'
				className='city-input'
				value={city}
				onChange={e => onChange(e.target.value)}
				aria-label='City name'
			/>
			<button className='get-weather-btn' type='submit' disabled={loading}>
				{loading ? 'Loading...' : 'Get Weather'}
			</button>
		</form>
	)
}

export default SearchBar