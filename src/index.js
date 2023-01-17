const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const express = require('express');
const app = express();
const cors = require('cors');
const config = require("./config/config");
const mongoose = require('mongoose');

app.use(express.json()); //or use body-parser middleware to parse the JSON
const swaggerDefinition = {
    info: {
        title: 'Analytics Project',
        version: '1.0.0',
        description: 'Analytics API swagger documentation'

    }
};
const options = {
    swaggerDefinition,apis: ['./src/routes/*.js'],
};


const swaggerSpec = swaggerJsDoc(options);



// Connect to DB
const db = config.DB_HOST;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err) {
    if (err) {
        console.error('Error! ' + err)
    } else {
        console.log('Connected to mongodb')
    }
});






// Import Routes
const testRoute = require('./routes/test');

const studentRoute = require('./routes/student');
const teacherRoute = require('./routes/teacher');
const pfaRoute = require('./routes/pfa');
const userRoute = require('./routes/user');
const pfeRoute = require('./routes/pfe');
const eventRoute = require('./routes/event');


// Route Middlewares
app.use('/test', testRoute);

app.use('/user', userRoute);
app.use('/student', studentRoute);
app.use('/teacher', teacherRoute);
app.use('/pfa', pfaRoute);

app.use('/pfe', pfeRoute);
app.use('/event', eventRoute);
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));


const port = 3000;
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(port, function () {
    console.log("Servers running on localhost:" + port);
});