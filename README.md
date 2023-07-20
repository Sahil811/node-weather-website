# Node Weather Website

This is a simple website built with Node.js that displays the current weather and forecast for a given location.

## Features

- Displays current temperature, weather conditions, high/low, etc for a given location
- 5 day / 3 hour forecast
- Responsive design that works on mobile and desktop browsers
- Uses the [OpenWeather API](https://openweathermap.org/api) for weather data

## Usage

1. Sign up for a free API key at [OpenWeather](https://home.openweathermap.org/users/sign_up)
2. Clone this repo
3. Install dependencies  
`npm install`
4. Create a `.env` file in the root of the project and add your OpenWeather API key  
`API_KEY=YOUR_API_KEY_HERE`
5. Run the app  
`npm start`
6. Open your browser to [http://localhost:3000](http://localhost:3000)

## Customizing

The main templates are located in `views/`. They use the [EJS templating engine](https://ejs.co/).

The routes and API logic are located in `app.js`.

The static files (CSS, images, etc) are located in `public/`.

## License

This project is open source and available under the [MIT License](LICENSE).
