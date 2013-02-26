/*
 * Module Dependancies
 */
var buildSoap = require('./build-soap')
	, sendSoap = require('./send-soap')
	, parseSoap = require('./parse-soap');
	
/*
 * 
 */
module.exports = function (soapPath, soapAction, soapRequest, index, cookies, fn) {

	// create the soap request
	buildSoap(soapPath, soapAction, soapRequest, function(req, options) {

		//  add cookies to send soap
		options.headers.Cookie = cookies;
	
		// send the soap request
		sendSoap(req, options, function(response) {
		
			// parse the soap response and return an object of key/value pairs
			parseSoap(response, soapAction, index, function(data) {
				
				// return the data
				return fn(data);
			});
		});
	});	
}