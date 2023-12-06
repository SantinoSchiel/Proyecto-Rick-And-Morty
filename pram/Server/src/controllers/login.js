const users = require('../utils/users')

function login(req,res){
    let {email, password} = req.query;

    let verificationUser = users.filter((user) => 
        user.email === email && user.password === password
    )

    if(verificationUser.length){
        res.status(200).json({access: true})
    } else {
        res.status(400).json({access: false})
    }
};

module.exports = login;