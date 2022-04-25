const Profiles = require("./profiles/Profiles")


module.exports = class Authorization {
    constructor() {
    }
    static isAuthorized({isAuthenticated, request, profile}) {
        if(!isAuthenticated)
                return false
        if(request.body.profile === undefined)
            request.body.profile = 'anonymous'            

        if (Profiles.Profiles[request.body.profile][profile[0]] === undefined)
            return false
        if (Profiles.Profiles[request.body.profile][profile[0]][profile[1]] === undefined)
            return false
        if (Profiles.Profiles[request.body.profile][profile[0]][profile[1]][profile[2]] === undefined)
            return false

        return Profiles.Profiles[request.body.profile][profile[0]][profile[1]][profile[2]]  
    }
}