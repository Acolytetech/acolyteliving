const properties = require('../model/Properties');  

exports.get = async (req, res) => {
    try {
        const property = await properties.find(); 
        res.json(property); 
    } catch (err) {
        console.log('Error fetching property:', err);
        res.status(500).send(`Error fetching property`);  
    }
};

exports.getProperty = async (req, res) => {
    const { id } = req.params;
    try {
        const property = await properties.findById(id);  
        if (property) {
            res.json(property);  
        } else {
            res.status(404).send('property not found');  
        }
    } catch (err) {
        res.status(500).send(err);  
    }
};


// exports.createProperty = async (req, res) => {
//     const {} = req.body;
//     try {
//         const user = new users({name,username,email,role,mobile_no});  
//         await user.save();  
//         res.status(201).json(user);  
//         console.log(user);  
//     } catch (err) {
//         res.status(500).send(err);  
//     }
// };
exports.createProperty = async (req, res) => {
    try {
      const newProperty = new properties(req.body);
      const savedProperty = await newProperty.save();
      res.status(201).json(savedProperty);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };


exports.deleteProperty = async (req, res) => {
    const { id } = req.params;
    try {
        const property = await properties.findByIdAndDelete(id);  
        if (property) {
            res.status(204).json(property);  
        } else {
            res.status(404).send('property not found');  
        }
    } catch (err) {
        res.status(500).send(err);  
    }
};


// exports.updateUser = async (req, res) => {
//     const { id } = req.params;
//     const newuserdata = req.body;

//     try {
//         const user = await users.findOneAndReplace({_id:id} , newuserdata , {new:true});
//         if (user) {
//             await user.save(); 
//             res.json(user); 
//         } else {
//             res.status(404).json({message: 'User not.found'});  
//         }
        
//         res.status(200).json({message: 'data updated'})
//     } catch (err) {``
//         console.log(err)
//         res.status(500).json({error: err.message});  
//     }
// };

// exports.editUser = async (req, res) => {
//     const { id } = req.params;
//     const updatedData = req.body;

//     try {
//         const user = await users.findById(id);  
//         if (user) {
//             user.set(updatedData);  
//             await user.save(); 
//             res.json(user); 
//         } else {
//             res.status(404).send('User not found');  
//         }
//     } catch (err) {
//         res.status(500).send(err);  
//     }
// };
