var express = require( 'express' );
var request = require('superagent');
var fs = require('fs');

var router = express.Router();

// For Cross Origin
router.all( '/*', function ( req, res, next ) {
    res.contentType('json');
    res.header( 'Access-Control-Allow-Origin', '*' );
    res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
    next();
} );

// GET find
router.get( '/:query', function ( req, res ) {
  res.send(JSON.parse("{\"json\": \"test\"}"));
});

module.exports = router;
