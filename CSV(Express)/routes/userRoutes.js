const express = require("express")
const user = express();
const multer = require('multer');
const path = require('path')
const bodyparser = require('body-parser')


user.use(bodyparser.urlencoded({ extended: false }));

// console.log(__dirname)
 user.use(express.static(path.resolve(__dirname, 'public')));

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
console.log(storage)
var uploads = multer({ storage: storage });
const userController = require("../controller/userController")
user.post('/importuser', uploads.single('file'), userController.importuser);


module.exports = user


















// const controller=require('./controller');
// server.route({
//   method:'GET',
//   path:'csv-to-mongodb',
//   handler:controller.readcsvFileAndInsertDataToDb
// })


// const Joi = require('joi');
// const multer = require('multer');
// const userController = require('../controllers/userController');

// const upload = multer({ dest: '/public' });

// module.exports = [
//   {
//     method: 'POST',
//     path: '/users',
//     options: {
//       payload: {
//         output: 'file',
//         parse: true,
//         multipart: true
//       },
//       validate: {
//         payload: Joi.object({
//           file: Joi.any()
//             .meta({ swaggerType: 'file' })
//             .description('CSV file')
//         })
//       },
//       handler: userController.importUsers
//     }
//   }
// ];




// const Hapi = require('@hapi/hapi');
// const multer=require('multer');
// const path=require('path');
// const bodyParser=require('body-parser');

// const fs = require('fs');
// const server=Hapi.server({
//     host:'localhost',
//     port:8000
// });

// const user=server.route({
//     method: 'GET',
//     path: '/users',
//     handler: {                                     // [3]
//       directory: {                                 // [3]
//         path: path.join(__dirname, 'public'),      // [3]
//         listing: true                              // [3]
//       }                                            // [3]
//     }                                              // [3]
//   });




// const usercontroller=require('../controller/userController');
// var upload=multer({storage:storage});
// user.route({
// method:"POST",
// path:'/importuser',
// options:{
//     payload:{
//         output:'file',
//         parse:true,
//         allow:'multipart/form-data'
//     }
// },
// handler:usercontroller.importUser




// })

// module.exports=user;
