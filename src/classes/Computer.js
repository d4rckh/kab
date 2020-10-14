const { setFlagsFromString } = require("v8")

module.exports = class Computer {
    constructor(uo) {
        
        if (!uo.hostname) throw new Error("HOSTNAME IS REQUIRED!")
        
        this.hostname = String(uo.hostname)
        
    
        this.id = String(uo.id)
    
        this.isServer = Boolean(uo.isServer) || false
        this.isDC =  Boolean(uo.isDC) || false
        this.isDB =  Boolean(uo.isDB) || false
        this.isSP =  Boolean(uo.isSP) || false
        this.isEx =  Boolean(uo.isEx) || false
        this.isVM =  Boolean(uo.isVM) || false
        this.isGC =  Boolean(uo.isGC) || false
        this.isRODC =  Boolean(uo.isRODC) || false

    }

    toJson() {
        return {
            hostname: this.hostname,
            isServer: this.isServer
        }
    }
}