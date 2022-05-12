const axios = require('axios');

module.exports = class {
  getData(req, res) {

    axios.get("http://localhost:1001/")
      .then(response => {
        return res.send(response.data);
      })
      .catch(err => console.log(err));

  }

  getMember(req, res) {
    const member = req.params.member;

    axios.get(`http://localhost:1001/${member}`)
      .then(response => {
        res.json(response.data)
      })
      .catch(err => console.log(err));
  }

}