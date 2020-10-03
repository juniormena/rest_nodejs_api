let express = require('express');
let app = express();
let path =  require('path');
let bodyParser = require('body-parser');
let personRoute = require('./routes/person');
let customerRoute = require('./routes/customer');

app.use(bodyParser.json());
app.use((req,res,next)=>{
    console.log(`${new Date().toString()}=>${req.originalUrl}`,req.body);
    next()
})
app.use(express.static('public'));
app.use(personRoute);
app.use(customerRoute);

//handler for 404 -Resource not found
app.use((req,res,next)=>{
    res.status(404).send('We think your lost');
})
//handler for 500 -Resource not found
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.sendFile(path.join(__dirname,'../public/500.html'));
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.info(`the served has started in the port ${PORT}`);
})