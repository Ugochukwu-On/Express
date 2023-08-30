const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 3000;

//serve static files from 'public directory

app.use(express.static('public'));
const foundPage = path.join(__dirname, 'public', 'index.html');
const notFoundPage = path.join(__dirname, 'public', '404.html');
//Define a route for "/index.html"
app.get('/index.html', async (req,res )=>{
    
    
        //read HTML file
        const file = await fs.readFile(foundPage,'utf8');
        res.status(200).sendFile(file);
    
});

app.get('/index.html', foundPage);

app.get('*', async (req, res)=>{
    try{
        const file = await fs.readFile(notFoundPage,'utf8');
        res.status(404).send(file);
    } catch(err){
        console.log('error')
    }
});

app.listen(port, ()=>{
   console.log( `Server is running on ${port}`);
});