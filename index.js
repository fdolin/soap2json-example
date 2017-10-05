var soap2json = require("express-soap2json")

var app = require("express")()

var SOAP_SERVER = "http://www.ekan-tremblaye1.fr/logistique/wsdl/GetStockArtByEcom.wsdl"
var JSON_PREFIX = "api"

app.use(soap2json(SOAP_SERVER, JSON_PREFIX))

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
  console.log("listening on http://0.0.0.0:" + PORT)
})
