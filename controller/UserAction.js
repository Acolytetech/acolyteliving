const users = require('../model/User');  

exports.get = async (req, res) => {
    try {
        const user = await users.find(); 
        res.json(user); 
    } catch (err) {
        console.log('Error fetching users:', err);
        res.status(500).send(`Error fetching users`);  
    }
};

exports.getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await users.findById(id);  
        if (user) {
            res.json(user);  
        } else {
            res.status(404).send('User not found');  
        }
    } catch (err) {
        res.status(500).send(err);  
    }
};


exports.createUser = async (req, res) => {
    const {name,username,email,role,mobile_no} = req.body;
    try {
        const user = new users({name,username,email,role,mobile_no});  
        await user.save();  
        res.status(201).json(user);  
        console.log(user);  
    } catch (err) {
        res.status(500).send(err);  
    }
};


exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await users.findByIdAndDelete(id);  
        if (user) {
            res.status(204).json(user);  
        } else {
            res.status(404).send('User not found');  
        }
    } catch (err) {
        res.status(500).send(err);  
    }
};


exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const newuserdata = req.body;

    try {
        const user = await users.findOneAndReplace({_id:id} , newuserdata , {new:true});
        if (user) {
            await user.save(); 
            res.json(user); 
        } else {
            res.status(404).json({message: 'User not.found'});  
        }
        
        res.status(200).json({message: 'data updated'})
    } catch (err) {``
        console.log(err)
        res.status(500).json({error: err.message});  
    }
};

exports.editUser = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const user = await users.findById(id);  
        if (user) {
            user.set(updatedData);  
            await user.save(); 
            res.json(user); 
        } else {
            res.status(404).send('User not found');  
        }
    } catch (err) {
        res.status(500).send(err);  
    }
};
