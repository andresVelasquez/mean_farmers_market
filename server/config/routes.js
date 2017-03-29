var farmers = require("./../controllers/farmers.js");

module.exports = function(app){
  app.get("/", function(req, res){
    farmers.index(req, res);
  });
  app.post("/filtermarkets", function(req, res){
    farmers.filter(req, res);
  });
  app.get("/markets/:id", function(req, res){
    farmers.show(req, res);
  })
}
