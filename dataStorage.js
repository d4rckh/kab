const lodashId = require('lodash-id')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('data/db.json')
const db = low(adapter)

db._.mixin(lodashId)

// Set some defaults (required if your JSON file is empty)
db
  .defaults({ users: [], computers: [] }).write()

// Add a post

module.exports.addUser = (user) => db.get('users')
                                    .insert(user)
                                    .write().id;

module.exports.getUsers = () => db.get('users')
                                    .value()


module.exports.addComputer = (computer) => db.get('computers')
                                    .insert(computer)
                                    .write().id;

module.exports.getComputers = () => db.get('computers')
                                    .value()


// Set a user using Lodash shorthand syntax
/*db.set('user.name', 'typicode')
  .write()
  
// Increment count
db.update('count', n => n + 1)
  .write()
*/