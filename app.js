const express = require('express');
const path  = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const fileRoutes = require('./routes/fileUploadRoutes')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

//database initializtion
require('./database')();


app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/api', fileRoutes.routes);


app.listen(port, function(){
    console.log("app listening to http://localhost:"+port + " follow link cmd + click");
    console.log(`Server is running on http://localhost:${port} follow link cmd + click`);
});


