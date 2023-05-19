const db = require('../models');
const router = require('express').Router()

// check if logged in
router.use(require('../functions/isLoggedIn'))

router.post('/create', (req, res) => {
  const title = req.body.title, photo = req.body.catagory, userId = req.session.userId;

  if (!title || !photo || (photo < 1 || photo > 10)) {return res.json({ error: true, message: "Parameter missing or invalid" })}

  db.tasks.create({ title: title, photo: photo, userId: userId }).then((post) => {return res.json({ post: post })});
});

router.get('/posts', async (req, res) => {
  const limit = req.query.limit < 50 ? parseInt(req.query.limit) : 50, offset = req.query.offset ? parseInt(req.query.offset) : 0;

  db.tasks.findAll({ order: [ ['createdAt', 'DESC' ], ['id', 'DESC'] ], limit: limit, offset: offset }).then( (posts) => {
    return res.json({ posts })
  })
})

module.exports = router;