// example of controller
import database from '../../database.js'

const getUsers = (req, res) => {
  database.query('SELECT * FROM users', (err, result) => {
    if (err) throw err
    res.send(result)
  })
}

const getUser = (req, res) => {
  const id = req.params.id
  database.query(`SELECT * FROM users WHERE id = ${id}`, (err, result) => {
    if (err) throw err
    res.send(result)
  })
}

const updateUser = (req, res) => {
  const id = req.params.id
  const user = req.body

  database.query('UPDATE users SET ? WHERE id = ?', [user, id], (err, result) => {
    if (err) throw err
    res.send(result)
  })
}

const deleteUser = (req, res) => {
  const id = req.params.id

  database.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
    if (err) throw err
    res.send(result)
  })
}

export default {
  getUsers,
  getUser,
  updateUser,
  deleteUser
}