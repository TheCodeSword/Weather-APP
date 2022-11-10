//make express run the server
const express = require('express');
//to start the app
const app = express();

//server port
const port = 3000;
//setting up the server
const server = app.listen(port, feedback)
//call back function
function feedback(){
    console.log(`server running on port: ${port}`);
}

//setting the location of the main folder
app.use(express.static('public'));

//object to store
const projectData = {}; //if a constant is object or array its properties or items can be updated.




//dependencies
const bodyParser = require('body-parser');
const cors = require('cors');
const { default: test } = require('node:test');

//now make express use bodyParser as a middle ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Cors for cross origin allowance
app.use(cors());




//GET requests
app.get('/getData', (req, res) => {
    res.send(projectData)
})

//POST requests
app.post('/saveData', (req, res) => {
    Data = {
        zipCode: req.body.zipCode,
        date: req.body.date,
        Temperature: req.body.Temperature,
        feeling: req.body.feeling
    }

    projectData.push(Data)
    res.send(projectData)
    res.end()
})

