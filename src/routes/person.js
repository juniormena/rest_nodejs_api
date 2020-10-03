let express = require('express');
let router = express.Router();
//Querystring is a request object on the request object
router.get('/person',(request,response)=>{
    if(request.query.name){
        response.send(`you has requested person ${request.query.name}`)
    }
    else{
        response.send('you has requested person')
    }
    
})
//params object in the request
router.get('/person/:name',(request,response)=>{
    response.send(`you has requested person ${request.params.name}`)
})

router.get('/error',(req,res)=>{
    throw new Error('ERROR')
})

module.exports = router;