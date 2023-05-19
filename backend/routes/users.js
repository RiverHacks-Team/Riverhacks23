const db = require('../models');
const router = require('express').Router()

// check if logged in
router.use(require('../functions/isLoggedIn'))

router.get('/score', (req, res) => {
  const userId = req.session.userId;

  db.tasks.findAll({ where: { userId: userId } }).then((tasks) => {
    var accu = 0; 
    tasks.map( (task) => accu += task.points )
    console.log(accu)
    return res.json({ score: accu});
  })
});

module.exports = router;