const {ArticleRecources} = require('../models/models');

class ArticleRecourcesControllers {
    async getAllArticleRecources(req, res){
        const Art = await ArticleRecources.findAll();
        
        return res.send(Art)
    }
}

module.exports = new ArticleRecourcesControllers();