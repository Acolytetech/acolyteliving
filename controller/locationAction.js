const locations = require('../model/location');  

exports.get = async (req, res) => {
    try {
        const location = await locations.find(); 
        res.json(location); 
    } catch (err) {
        console.log('Error fetching locations:', err);
        res.status(500).send(`Error fetching locations`);  
    }
};

exports.getlocation = async (req, res) => {
    const { id } = req.params;
    try {
        const location = await locations.findById(id);  
        if (location) {
            res.json(location);  
        } else {
            res.status(404).send('location not found');  
        }
    } catch (err) {
        res.status(500).send(err);  
    }
};


exports.createLocation = async (req, res) => {
    const locationsArray = req.body; // should be an array of { locationName, _id } objects
  
    try {
      const result = await locations.insertMany(locationsArray);
      res.status(201).json(result);
      console.log(`${result.length} locations inserted.`);
    } catch (err) {
      console.error("Error inserting locations:", err);
      res.status(500).json({ error: err.message });
    }
  };


exports.deleteLocation = async (req, res) => {
    const { id } = req.params;
    try {
        const location = await locations.findByIdAndDelete(id);  
        if (location) {
            res.status(204).json(location);  
        } else {
            res.status(404).send('location not found');  
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
