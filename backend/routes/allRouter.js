
const router = new require('express')();
const {getAllArticleRecources} = require('../controllers/ArticleRecourcesControllers');
const {getAllAutorsBoock} = require('../controllers/AutorsBoockControllers');
const {getAllLearn} = require('../controllers/LearnControllers');
const {getAllTrusted} = require('../controllers/TrustedControllers');

router.get('/article', getAllArticleRecources);
router.get('/autors', getAllAutorsBoock);
router.get('/learn', getAllLearn);
router.get('/trusted', getAllTrusted);


module.exports = router;