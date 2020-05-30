const server = require('./src/app');



//TODO: change hardcoded port number for config param
server.listen(3000, ()=>{
    console.log("server running @", 3000);
});
