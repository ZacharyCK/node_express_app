import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the current file's directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from 'express';
const app = express();
const port = process.env.PORT || 4000;

import dotenv from 'dotenv';
dotenv.config();

// Static Files
app.use(express.static('public'));
// Specific folder example
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))



// Static files
app.use(express.static("public"));

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { city_api_key: process.env.CITIES_API_KEY, weather_api_key: process.env.WEATHER_API_KEY})
})

// Listen on port 3000
app.listen(port, () => console.info(`App listening on port ${port}`));