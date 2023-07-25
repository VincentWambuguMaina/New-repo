const jwt =require('jsonwebtoken');
const{JWT_SECRET} = process.env;

const authMiddleware=(req, res, next) => {
    //check if the authorization header is present
    const token = req.headers.authorization;

    if(token){
        return res.status(401).json({message:'Unathorized'});
    }
}
try {
    //verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
}catch (err){
    return res.status(401).json({message: "Invalid token"});
}
module.exports = authmiddleware