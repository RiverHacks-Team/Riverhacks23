const db = require('../models');
const router = require('express').Router()

// check if logged in
router.use(require('../functions/isLoggedIn'))

router.post('/create', (req, res) => {
  const title = req.body.title, catagory = req.body.catagory, points = parseInt(req.body.points), userId = req.session.userId;

  if (!title || !catagory || !points || (points < 1 || points > 3)) {return res.json({ error: true, message: "Parameter missing or invalid" })}

  db.tasks.create({ title: title, catagory: catagory, points: points, userId: userId }).then((task) => {return res.json({ task: task })});
});

router.get('/tasks', async (req, res) => {
  const userId = req.session.userId;
  const limit = req.query.limit < 50 ? parseInt(req.query.limit) : 50, offset = req.query.offset ? parseInt(req.query.offset) : 0;

  db.tasks.findAll({ where: { userId }, order: [ ['createdAt', 'DESC' ], ['id', 'DESC'] ], limit: limit, offset: offset }).then( (tasks) => {
    return res.json({ tasks })
  })
})

module.exports = router;