const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const users =[
    {
        id: 1,
        name: 'jiranuwat',
        email:'a0621479833@gmail.com'
    },
    {
        id: 2,
        name: 'jiranuwat',
        email:'jiranuwat.k@outlook.com'
    },
    {
        id: 3,
        name: 'weem',
        email:'test@gmail.com'
    }
]


router.get('/',(req,res)=>{
    res.json(users);
});

router.get('/:id',(req,res)=>{
    let found = users.some(user => user.id === parseInt(req.params.id));
    if (found){
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({err : `No user with the id of ${req.params.id}`});
    }
});

router.post('/',(req,res)=>{
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }
    if(!newUser.name || !newUser.email){
        return res.status(400).json({ err: 'please inclode a name and email.'})
    }
    users.push(newUser);
    res.json(users);
});

router.put('/:id',(req,res)=>{
    let found = users.some(user => user.id === parseInt(req.params.id));
    if(found){
        const upUser = req.body;
        users.forEach(user =>{
            if(user.id === parseInt(req.params.id)){
                user.name = upUser.name ? upUser.name : user.name;
                user.email = upUser.email ? upUser.email : user.email;
                res.json({ msg: 'User updated', user})
            }
        })
    }else{
        res.status(400).json({err : `No user with the id of ${req.params.id}`})
    }
});
router.delete('/:id',(req,res)=>{
    let found = users.some(user => user.id === parseInt(req.params.id));
    if(found){
       res.json({
        msg : 'user deleted' ,
        users
       })
    }else{
        res.status(400).json({err : `No user with the id of ${req.params.id}`})
    }
});
module.exports = router;