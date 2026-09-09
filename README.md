# 🌤️ Weather App

A modern, responsive **weather application** built with **React**. It shows the current weather conditions for any city in the world using the [OpenWeatherMap API](https://openweathermap.org/api).

![React](https://img.shields.io/badge/React-19-blue) ![Status](https://img.shields.io/badge/status-ready-green)

---

## ✨ Features

- 🔍 **City search** — search for any city with a button click or pressing **Enter**
- 🌡️ **Live weather data** — temperature, humidity, wind, pressure, cloudiness, sunrise & sunset
- ⏳ **Loading spinner** — clear loading state while fetching data
- ❌ **Error handling** — friendly messages for unknown cities and network errors
- 💾 **Last city memory** — your last searched city is saved in `localStorage` and loaded automatically
- 🕐 **Date & time** — current date and time displayed on the weather card
- 🎨 **Dynamic card theme** — the card style adapts to the weather condition (clear, rain, snow, storm, clouds)
- 📱 **Fully responsive** — works smoothly on mobile, tablet and desktop
- 🔒 **Secure API key handling** — the key is stored in a `.env` file, never hardcoded

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| **React 19** | UI library |
| **Create React App** | Build tooling |
| **OpenWeatherMap API** | Weather data provider |
| **localStorage** | Persisting the last searched city |
| **CSS** | Styling & responsive layout |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your API key

Create a `.env` file in the root of the project and add your key:

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

> Get a free API key at [https://openweathermap.org/api](https://openweathermap.org/api). An `env.example` file is included as a template.

### 3. Run the app

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 4. Build for production

```bash
npm run build
```

The production-ready files are output to the `build` folder.

---

## 📁 Project Structure

```
weatherapp/
├── public/                 # Static assets (index.html, manifest, icons)
├── src/
│   ├── components/
│   │   ├── SearchBar.js        # Search input + submit button
│   │   ├── Spinner.js          # Loading spinner
│   │   ├── WeatherApp.js       # Main app logic & state
│   │   ├── WeatherCard.js      # Main weather display card
│   │   └── WeatherDetails.js   # Grid of additional metrics
│   ├── App.js                  # Root component
│   ├── index.js                # Entry point
│   └── style.css               # All styles (responsive)
├── .env.example                # Environment variable template
└── package.json
```

---

## 📸 Screenshots

> Add your screenshots to the `screenshots/` folder and reference them here, e.g.:
>
> ![Weather App](screenshots/weather-app.png)

---

## ⚙️ How It Works

1. The user types a city name and submits the form.
2. `WeatherApp` calls the OpenWeatherMap `current weather` endpoint with `units=metric`.
3. On success, the weather data is stored in state and rendered in `WeatherCard`.
4. The searched city is saved to `localStorage` so it is restored on the next visit.
5. Errors (unknown city, blocked network, missing API key) are shown as friendly messages.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to use it for learning and portfolio purposes.