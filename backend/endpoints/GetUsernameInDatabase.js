const jwt = require('jsonwebtoken')
const login = require('../constants/loginConstants')

module.exports = class GetUserNameInDataBase {
  accessControl(element, req, res, err) {
    element.find({}, function (err, element) {
      const token = jwt.sign({ payload: element.userid }, login.SECRET, { expiresIn: 3000 })
      let returned = false;
      if (!element)
        return res.status(401).send("wrong username or password");
      if (err)
        return res.status(500).send("There was a problem to search");
      element.forEach(item => {
        if (req.body.userid === item.userid) {
          if (req.body.password === item.password) {
            if (!returned) {
              returned = true
              return res.status(200).send({
                id: item.id,
                userid: item.userid,
                token,
                auth: true
              });
            }
          }
        }
      });
      if (!returned)
        return res.status(401).send("wrong username or password")
    });
  }
}