var db = require("../models"); 

// router.post("/api/transaction/bulk", ({body}, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

// module.exports = router;

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });

  app.get("/api/transaction", function(req, res) {
    db.Transaction.find({}).then(function(dbTransaction) {
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
    })
  })

};