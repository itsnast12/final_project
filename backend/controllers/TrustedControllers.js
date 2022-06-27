const {Trusted} = require('../models/models');

class TrustedControllers {
    async getAllTrusted(req, res){
        const Tr = await Trusted.findAll();
        return res.send(Tr)
    }
}

module.exports = new TrustedControllers();