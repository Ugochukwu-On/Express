const fs = require('fs');

const createUser = (res, req)=>{
    const userData = fs.readFileSync('./user/user.json');
    const userDb = JSON.parse(userData);
    const user = req.body;
    userDb.push(user);

    fs.writeFileSync('./user/user.json' ,JSON.stringify(userDb, null, 4), (err)=>{
        if (err){
            res.status(500).send('500 server error')
        }else{
            res.staus(201).send('User created')
        }
    })
    res.status(201).send('User created')
}

module.exports = {
    createUser
}