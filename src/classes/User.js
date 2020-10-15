const { strict } = require("assert")
const { kStringMaxLength } = require("buffer")
const { stringify } = require("querystring")

module.exports = class User {
    constructor(uo) {
        
        if (!uo.username) throw new Error("USERNAME IS REQUIRED!")
        if (!uo.password) throw new Error("PASSWORD IS REQUIRED!")
    
        this.username = String(uo.username) 
        
        this.password = String(uo.password) 
    
        this.id = String(uo.id)
    
        this.isDA = Boolean(uo.isDA) || false
        this.isService = Boolean(uo.isService) || false
        this.SPNs = []
        if (typeof uo.SPNs == "string") {
            this.SPNs = uo.SPNs.split(",")
        } else {
            this.SPNs = uo.SPNs || []
        }
    }

    toJson() {
        return {
            username: this.username,
            password: this.password
        }
    }
}