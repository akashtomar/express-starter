const router = require('express').Router();
const axios = require('axios');


router.get('/sample', (req, res)=>{
    /**
     * Sample route for getting some data
     */
    //TODO:remove hardcoded url
    axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then((response)=>{
        //console.log(response.data);
        res.json({sucess: true, data: response.data});
    })
    .catch((error)=>{
        console.log(error);
        res.json({sucess: false});
    });
});




module.exports = router;