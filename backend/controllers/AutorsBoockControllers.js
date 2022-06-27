const {AutorsBoock} = require('../models/models');

class AutorsBoockControllers {
    async getAllAutorsBoock(req, res){
        const AutBoock = await AutorsBoock.findAll();
        return res.send(AutBoock)
    }
}

module.exports = new AutorsBoockControllers();