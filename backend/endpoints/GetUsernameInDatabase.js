const jwt = require('jsonwebtoken')
const login = require('../constants/loginConstants')

module.exports = class GetUserNameInDataBase {
    getUserName(element, req, res, err) {
      element.find({}, function (err, element) {
        if (!element) return res.status(401).send("wrong username or password");
        if (err) return res.status(500).send("There was a problem to search");
        element.forEach(item => {
          if(req.body.username == element.username)
            if(req.body.password != item.password) return res.status(401).send("wrong username or password")
              const token = jwt.sign({payload: element.userid},login.SECRET, {expiresIn: 3000})    
              res.status(200).send({element, token, auth: true});
        });
      });
    }
  }