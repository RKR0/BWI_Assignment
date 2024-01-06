


const authToken = async (req, res, next) => {
    const  authorization  = req.headers['authorization']
        
    if (authorization && authorization.startsWith('Bearer')) {
      try {
        // Get Token from header
        let token = authorization.split(' ')[1];
        if (!token) {
            res.status(401).send({ "status": "failed", "message": "Unauthorized User, No Token" })
          }
        req.token = token;
        next()
      } catch (error) {
        console.log(error)
        res.status(401).send({ "status": "failed", "message": "Unauthorized User" })
      }
    }
    else{
        res.status(401).send({ "status": "failed", "message": "Unauthorized User, No Token" })
    }

  }
  export default authToken