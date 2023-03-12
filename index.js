const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload')
const cors = require('cors');
const router = require('./routes/route')
const { connectDB } = require('./connection/connection');

app.use(cors());
app.use(fileupload());
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(router);

connectDB();

app.get('/',(req,res)=>{
   res.send("hi react");
})


app.listen(port,()=>{
    console.log("listening at port "+port);
})
