const Users = require("./Users")
const Advertisements = require("./Advertisements")

module.exports = Sponsors = {
    cpf : String,
    cnpj : String,
    availableAds : Advertisements,
    ...Users
}