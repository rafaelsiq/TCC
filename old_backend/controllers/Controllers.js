const GetAllElementsInDataBase = require('../endpoints/GetAllElementsInDataBase');
const GetElementByIdInDataBase = require('../endpoints/GetElementByIdInDataBase');
const DeleteElementByIdInDataBase = require('../endpoints/DeleteElementByNameInDatabase');
const UpdateElementByIdInDataBase = require('../endpoints/UpdateElementByIdInDataBase');
const InsertElementInDataBase = require("../endpoints/InsertElementInDataBase");
const GetUsernameInDataBase = require('../endpoints/GetUsernameInDatabase');

module.exports = DataBase = { 
    GetAllElementsInDataBase, 
    GetElementByIdInDataBase, 
    DeleteElementByIdInDataBase, 
    UpdateElementByIdInDataBase,
    InsertElementInDataBase,
    GetUsernameInDataBase
}