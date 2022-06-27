const {Learn} = require('../models/models');

class LearnController {
    async getAllLearn(req, res){
        const Lea = await Learn.findAll();
        return res.send(Lea)
    }
}

module.exports = new LearnController();