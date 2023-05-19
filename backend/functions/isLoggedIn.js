module.exports = function(req, res, next) {
  if(req.session.userId) {
    next();
  } else {
    return res.json({error: true, message: "Not authenticated"});
  }
}