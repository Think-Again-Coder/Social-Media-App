const router = require('express').router();
const API = require('./api');
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');

router.use('/api', API);
router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);
router.use((req, res) => {
    res.status(404).send('Wrong Route')
});

module.exports = router;