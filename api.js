const express = require('express');
const itemRoute = require('./routes/item_route.js');

const port = 3000;

const app = express();
app.use(express.json());
app.get('/item', itemRoute)

app.get('*', (res,req)=>{
    res.status(404).send('Item not found')
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})