const router = require('express').router();
const API = require('./api');

router.use('/api', API);
router.use((req, res) => {
    res.status(404).send('Wrong Route')
});

module.exports = router;