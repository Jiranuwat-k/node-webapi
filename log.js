const moment = require('moment');
const log = (req,res,next)=>{
    console.log(`date : ${moment()}`);
    console.log(`protocol : ${req.protocol}`);
    console.log(`hostting : ${req.get('host')}`);
    console.log(`path : ${req.originalUrl}`);
    console.log(`originalUrl : ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
module.exports = log;