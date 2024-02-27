const express = require("express");
const app = express();
const port = 3000;

// Listen on port 3000
app.listen(port, () => console.info(`App listening on port ${port}`));

// Static files
app.use(express.static("public"));

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');