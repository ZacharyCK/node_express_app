const express = require("express");
const app = express();
const port = 3000;

require('dotenv').config();

// Listen on port 3000
app.listen(port, () => console.info(`App listening on port ${port}`));

// Static files
app.use(express.static("public"));

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { city_api_key: process.env.CITIES_API_KEY, weather_api_key: process.env.WEATHER_API_KEY })
})