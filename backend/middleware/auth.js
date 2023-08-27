const jwt = require('jsonwebtoken')

const auth = (req,res,next)=>{
   const Header = req.headers.authorization
    if(Header)
    {
         const token = Header.split(' ')[1]
         jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err)
            {
                return res.status(403)
            }
            req.user = user
            next()
         })
    } 
    else 
    return res.status(401)
}

module.exports = auth