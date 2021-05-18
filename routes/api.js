var db = require("../models"); 

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });

  app.get("/api/transaction", function(req, res) {
    db.Transaction.find({}).sort({date: -1}).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });

  app.post('/api/transaction', function({body}, res) {
    db.Transaction.create(body).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });

  app.post("/api/transaction/bulk", function({body}, res) {
    db.Transaction.insertMany(body).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });

};