const jwt = require('jsonwebtoken');

function tokenVerifier (request, response, next) {

    const authHeader = request.headers.authorization;
    //console.log(request.headers)
    if(!authHeader){
        return response.status(401).send({ error: 'No token provided' });
    }

    const parts = authHeader.split(' ');

    if(parts.length !== 2){
        return response.status(401).send({ error: 'Token error' });
    }

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return response.status(401).send({ error: 'Token malformatted' });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err){
            //console.log(err)
            return response.status(401).send({ error: 'Token invalid' });

        } else {

            //request.userId = decoded.id;

            return next();

        }
    });
}

module.exports = tokenVerifier;