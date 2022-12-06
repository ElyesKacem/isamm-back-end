const express = require('express');
const app = express();
const cors = require('cors');
const config = require("./config/config");
const mongoose = require('mongoose');

app.use(express.json()); //or use body-parser middleware to parse the JSON




// Connect to DB
const db = config.DB_HOST;
mongoose.connect(db,{
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

const userRoute = require('./routes/user');
const studentRoute = require('./routes/student');
const teacherRoute = require('./routes/teacher');


// Route Middlewares
app.use('/test', testRoute);

app.use('/user', userRoute);
app.use('/student', studentRoute);
app.use('/teacher', teacherRoute);

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));


const port = 3000;

app.listen(port, function(){
    console.log("Servers running on localhost:" + port);
});