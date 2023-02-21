const UserModel = require('./models');


const jsonConverter = require('csvtojson');




const createUser = async (req) => {
    try {
   
     const jsonFile = await jsonConverter().fromFile('./user2.csv');
     console.log(jsonFile,req.payload);
      return await UserModel.insertMany([...jsonFile,req.payload]);
    } catch (error) {
        console.log(error.message);
    }
};

const getAllUsers = async () => {
  try {
    return await UserModel.find();
  } catch (error) {
    console.log(error.message);
  }
}
module.exports = { createUser, getAllUsers };
