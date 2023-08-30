const inventoryPath= require('./db/item_db');
const fs = require('fs').promises;
const path = require('path');

const inventoryPath2 = path.join(__dirname, './db/item_db.js');

const saveToDb = (inventoryPath)=>{
    const newContent =`module.exports = ${JSON.stringify(inventoryPath, null, 4)}; \n`;
    fs.writeFileSync(inventoryPath2, newContent, 'utf8');
}

//get all items
const getAllItems = (req, res) =>{
    res.json(inventoryPath.inventory);
}

//get item by id
const getItemById = (req,res)=>{
    const id = parseInt (req.params.id);
    const item = inventoryPath.inventory.find(item =>item.id ===id);
    if (item){
        res.json(item);
    } else {
        res.status(404).send('Item not found')
    }
}

//add item
const addItem=(req,res)=>{
    const item = req.body;
    item.id = inventoryPath.inventory.length + 1;
    inventoryPath.inventory.push(item);
    saveToDb(inventoryPath);

    res.status(201).send('Item added');
}

//update item
const updateItem = (req,res)=>{
    const itemId = parentInt(req.params.id);
    const itemUpdate = req.body;
    const itemIndex = inventoryPath.inventory.findIndex(item => item.id === itemId);
    
    if (!itemIndex){
        inventoryPath.inventory [itemIndex] = itemUpdate;
        itemUpdate.id = itemId;
        saveToDb(inventoryPath);
        res.status(200).send('Item Updated');
    } else {
        res.status(404).send('404 Item not found');
    }
}
//delete item
const deleteItem= (req,res)=>{
    const itemId = parseInt(req.params.id);
    const itemIndex = inventoryPath.inventory.findIndex(item=>item.id ===itemId);
    if (!itemIndex){
        inventoryPath.inventory.splice(itemIndex, 1);

        saveToDb(inventoryPath);
        res.status(200).send('Item deleted');
    } else {
        res.status(400).send('Item not found');
    }
}
module.export ={
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem
}