console.log('Weather APP --> test line or command');


// importing all the required pakages from npm or using the module which node offers

// express is library or module . helps in building the server with less code
const express = require('express');
// creating a app using express or initiating  express before using it
const app = express()
// port -> on which the site will run
const port = 8000
// HBS --> using the hbs so that we can introduce data dinamically to a website 
const hbs = require('hbs');
// path -> path module is used to find or to connect the paths of public , static , src, templates.
const path = require('path');

// we have to connect the static folder in order to access the files present in that folder
let staticFolderPath = path.join(__dirname , '../public') 
// console.log(staticFolderPath);
app.use(express.static(staticFolderPath))

// setting the view engine as hbs 
app.set('view engine', 'hbs')

// setting the path for views directory . coz view engine automatically accesses views folder but we have moved it inside the another folder
let templates = path.join(__dirname , '../templates/views')
app.set('views', templates)

// we are using partials for DRY concept
let partialpath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialpath)

// when user request for home page
app.get('/', (req, res)=>{
    // in response we will render this file
    res.render('index')
})

app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/weather', (req, res)=>{
    res.render('weather')
})

// when user requests anoynumous path we will render this page
app.get('*',(req,res)=>{
    res.render('404')
})

// listening on the port
app.listen(port, ()=>{
    console.log(`listening on a port number ${port}`);
})