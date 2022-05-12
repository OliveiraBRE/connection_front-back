const familia = {
  pai: {nome: 'José', idade: 56},
  mae: {nome: 'Maria', idade: 49},
  filho: {nome: 'Ryan', idade: 26}
}

module.exports = class {

  sendData(req, res) {
    res.json(familia);
  }

  sendMember(req, res) {
    const member = familia[req.params.member];
    res.json(member);
  }

}