const fs = require('fs');

const validateData = (res, req, next) =>{
    const userData = fs.readFileSync('./users/user.json');
    const userDb = JSON.parse(userData);
    const existingUser = userDb.find(usser =>userData.username === req.body.username);
    if (!req.body.username || req.body.username.trim()){
        res.status(400).send('Username Required')
    } else if (!req.body.password || req.body.password){
        res.status(400).send('Password Required')
    } else if (existingUser){
        res.status(400).send('Username or Password already exist')
    }else{
        next()
    }
};

mobile.export = {
    validateData
}