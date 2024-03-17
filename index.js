const express =require ('express');
const app = express();
const courseRoutes =require("./routes/courseRoutes");
require( 'dotenv').config();
require("./model/dbConnect");

app.use(express.json());
app.use(express.urlencoded( { extended: true })); // middleware
app.use('/api/course', courseRoutes);
app.listen(process.env.port || 4000 , function (){
    console.log('Now listening for requests on:http://localhost:4000');
});

