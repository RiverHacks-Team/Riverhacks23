module.exports = (app) => {

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  app.use('/api/auth', require('./auth'));
  app.use('/api/tasks', require('./tasks'))
  app.use('/api/users', require('./users'))


}