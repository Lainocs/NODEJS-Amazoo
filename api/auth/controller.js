import database from '../../database.js'
import bcrypt from 'bcrypt'

const register = (req, res) => {
  const user = req.body

  database.query('SELECT * FROM users WHERE email = ?', user.email, (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      res.send("User already exists")
    } else {
      bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) throw err
        user.password = hash
        database.query('INSERT INTO users SET ?', user, (err, result) => {
          if (err) throw err
          res.send(result)
        })
      })
    }
  })
}

const login = (req, res) => {
  const user = req.body

  database.query('SELECT * FROM users WHERE email = ?', user.email, (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      bcrypt.compare(user.password, result[0].password, (err, response) => {
        if (err) throw err
        if (response) {
          res.send("Login successful")
        } else {
          res.send("Wrong password")
        }
      })
    } else {
      res.send("User does not exist")
    }
  })
}

export default {
  register,
  login
}
