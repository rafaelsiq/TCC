const Profiles = require("./profiles/Profiles")


module.exports = class Authentication {
    constructor() {

    }

    static isAuthenticated({request, profile }) {
        return true
    }
}