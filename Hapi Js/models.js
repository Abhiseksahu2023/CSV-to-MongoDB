const mongoose = require('mongoose');

const { Schema  } = mongoose;


const UsersModel = new Schema({
    name : {
        type: String,
    },
    email :{
        type: String,
    },
    phoneNumber: {
        type: String,
    }
}
// {
//     timestamps: true
// }
);

module.exports = mongoose.model('Abhi', UsersModel);
