const lodashId = require('lodash-id')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('data/db.json')
const db = low(adapter)

db._.mixin(lodashId)

// Set some defaults (required if your JSON file is empty)
db
  .defaults({ users: [], computers: [], domainInfo: {
      domainName: null,
      NetBios_Name: null
  } }).write()

// Add a post

module.exports.getUser = (user) => db.get('users').find({ id: user }).value()
module.exports.addUser = (user) => db.get('users').insert(user).write().id;
module.exports.getUsers = () => db.get('users').value()
module.exports.updateUser = (id, newuser) => db.get('users').find({ id }).assign(newuser).write()
module.exports.deleteUser = (id) => db.get('users').remove({ id }).write()

module.exports.getDN = () => db.get('domainInfo').value()
module.exports.setDNDN = (DN) => db.set('domainInfo.domainName', DN).write()
module.exports.setDNNBN = (NBN) => db.set('domainInfo.NetBios_Name', NBN).write()

module.exports.addComputer = (computer) => db.get('computers').insert(computer).write().id;
module.exports.getComputers = () => db.get('computers').value()
module.exports.getComputer = (id) => db.get('computers').find({ id }).value()
module.exports.updateComputer = (id, newcomputer) => db.get('computers').find({ id }).assign(newcomputer).write()


// Set a user using Lodash shorthand syntax
/*db.set('user.name', 'typicode')
  .write()
  
// Increment count
db.update('count', n => n + 1)
  .write()
*/