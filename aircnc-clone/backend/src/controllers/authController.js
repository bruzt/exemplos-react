const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('../models/mongodb/userModel');

module.exports = {

    async authenticate(req, res) {
        
        const { email, password } = req.body;
    
        const user = await userModel.findOne({ email });
    
        if(!user){
             return res.status(400).json({ errors: ['e-mail ou senha invalidos!'] });
        }
    
        if(! await bcrypt.compare(password, user.password)){
            return res.status(400).json({ errors: ['e-mail ou senha invalidos!'] });
        } 
    
        const token = await jwt.sign({ user }, process.env.SECRET,  { expiresIn: 43200 }) // expira em 12 horas
        
        const login = {
            name: user.name,
            email: user.email,
            level: user.level,
            token
        }
    
        return res.json(login);
    },

    async validateToken(req, res, next) {
    
        const token = req.body.token || '';
    
        try {
    
            const decoded = await jwt.verify(token, process.env.SECRET);
            
            return res.json(true)
    
        } catch (error) {
            
            res.json(false);
        }
    }
}

