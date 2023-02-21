//EXPRESS EXCELSHEET TO MONGODB
 var mongoose= require("mongoose")
 mongoose.connect("mongodb+srv://abhisek:9zP8YswW4WhNcmbe@cluster0.0jgm4lu.mongodb.net/Store")

 const express =require("express")
 const app=express();
  var userRoutes=require('./routes/userRoutes')

 app.use('/',userRoutes);

 app.listen(3000,function(){
   console.log('app is running');
 })























// const Hapi = require('@hapi/hapi');
// const MongoClient=require('mongodb').MongoClient;


// const server=Hapi.server({
//   port:3000,
//   host:'localhost'
// })

// async function connectionToDb(){
//   const client=await MongoClient.connect('mongodb+srv://abhisek:9zP8YswW4WhNcmbe@cluster0.0jgm4lu.mongodb.net/Store',
//   { useNewUrlParser: true ,

// }
// );
// return client.db('store');
// }
// server.app.db= connectionToDb();




// const Hapi = require('@hapi/hapi');
// const Inert = require('@hapi/inert');
// const fs = require('fs');
// const csv = require('csv-parser');
// const mongoose = require('mongoose');
// const User = require('./models/user');

// mongoose.connect('mongodb+srv://abhisek:9zP8YswW4WhNcmbe@cluster0.0jgm4lu.mongodb.net/Store', { useNewUrlParser: true });

// const init = async () => {
//   const server = Hapi.server({
//     port: 3000,
//     host: 'localhost'
//   });

//   // Register the inert plugin to handle static file serving
//   await server.register(Inert);

//   // Serve the static files from the 'public' directory
//   server.route({
//     method: 'GET',
//     path: '/public',
//     handler: {
//       directory: {
//         path: './public'
//       }
//     }
//   });

//   // Import users from a CSV file
//   server.route({
//     method: 'POST',
//     path: '/import-users',
//     options: {
//       payload: {
//         output: 'stream',
//         parse: true,
//         allow: 'multipart/form-data'
//       }
//     },
//     handler: async (request, h) => {
//       try {
//         const file = request.payload.file;
//         const data = file._data.toString('utf8');

//         const users = await new Promise((resolve, reject) => {
//           const results = [];

//           csv({ headers: true })
//             .on('data', (data) => {
//               results.push(data);
//             })
//             .on('end', () => {
//               resolve(results);
//             })
//             .on('error', (err) => {
//               reject(err);
//             })
//             .write(data);
//         });

//         await User.insertMany(users);

//         return h.response({
//           success: true,
//           data: users
//         });
//       } catch (err) {
//         console.error(err);

//         return h.response({
//           success: false,
//           msg: "An error occurred while importing the users"
//         }).code(500);
//       }
//     }
//   });

//   await server.start();
//   console.log('Server running on %s', server.info.uri);
// };

// process.on('unhandledRejection', (err) => {
//   console.log(err);
//   process.exit(1);
// });

// init();




// var mongoose=require('mongoose');

// mongoose.connect('mongodb://localhost:27017/test');
// const Hapi = require('@hapi/hapi');

// var userRoutes=require('./routes/userRoutes');
// const routes=Hapi.server({
//     path:'/',
    
// })
// const server=Hapi.server({
//     host:'localhost',
//     port:8000
// });






