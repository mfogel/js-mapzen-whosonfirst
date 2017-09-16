// testing just the nodifying of the library

var assert = require('assert')
var {mapzen} = require('./index.js')

// check all the libs made it in
var wof = mapzen.whosonfirst
assert(wof.api)
assert(wof.brands)
assert(wof.chrome)
assert(wof.cookies)
assert(wof.data)
assert(wof.enmapify)
assert(wof.footnotes)
assert(wof.geojson)
assert(wof.leaflet)
assert(wof.log)
assert(wof.namify)
assert(wof.net)
assert(wof.php)
assert(wof.placetypes)
assert(wof.uri)
