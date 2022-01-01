const Users = require('./Users');
const Advertisements = require("./Advertisements")

module.exports = Sponsors = () => {
    return {
        cpf: String,
        cnpj: String,
        availableAds: Advertisements(),
        ...Users()
    }
}