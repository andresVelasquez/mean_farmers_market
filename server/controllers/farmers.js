var allData = require("./markets.json");
var filteredMarkets = [];

module.exports = {
  index: function(req, res){
    res.render("index");
  },
  filter: function(req, res){
    for(var i = 0; i < allData.length; i++) {
        for(var j = 0; j < req.body.markets.length; j++) {
            if(allData[i]["FMID"] == req.body.markets[j]) {
                filteredMarkets.push(allData[i]);
            }
        }
    }
    res.json(filteredMarkets);
  },
  show: function(req, res){
    function checkMarkets(market){
      return market.FMID == req.params.id;
    }
    res.render("show", {market: filteredMarkets.find(checkMarkets)});
  }
}
