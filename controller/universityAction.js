const universities = require('../model/university');  

exports.get = async (req, res) => {
    try {
        const university = await universities.find(); 
        res.json(university); 
    } catch (err) {
        console.log('Error fetching university:', err);
        res.status(500).send(`Error fetching university`);  
    }
};

exports.getUniversity = async (req, res) => {
    const { id } = req.params;
    try {
        const university = await universities.findById(id);  
        if (university) {
            res.json(university);  
        } else {
            res.status(404).send('university not found');  
        }
    } catch (err) {
        res.status(500).send(err);  
    }
};

exports.createUniversity = async (req, res) => {
    try {
      const University = await universities.insertMany(req.body); // body should be an array
      res.status(201).json(University);
      console.log(`${University.length} universities inserted`);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


exports.deleteUniversity = async (req, res) => {
    const { id } = req.params;
    try {
        const university = await universities.findByIdAndDelete(id);  
        if (university) {
            res.status(204).json(university);  
        } else {
            res.status(404).send('university not found');  
        }
    } catch (err) {
        res.status(500).send(err);  
    }
};


// exports.updateUniversity = async (req, res) => {
//     const { id } = req.params;
//     const newuniversity = req.body;

//     try {
//         const university = await universities.findOneAndReplace({_id:id} , newuniversity , {new:true});
//         if (university) {
//             await university.save(); 
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
//         const user = await universities.findById(id);  
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
