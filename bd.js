app.get('/users', function (req, res, next) {
  pg.connect(conString, function (err, client, done) {
    if (err) {
      // pass the error to the express error handler
      return next(err)
    }
    client.query('SELECT name, age FROM users;', [], function (err, result) {
      done()

      if (err) {
        // pass the error to the express error handler
        return next(err)
      }

      res.json(result.rows)
    })
  })
})