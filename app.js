const soap = require('soap');
const fs = require('fs');

let host = 'localhost';

let url = `http://${host}:8080/service`

let idscript = fs.readFileSync('idscripts/helloworld.js','utf8')
let args = {
  runScriptParameters: {
  scriptText: idscript,
  scriptLanguage: 'javascript'
  }
};

let options = {
  endpoint: url
};
soap.createClient(`${url}?wsdl`, options, function(err,client) {
  client.RunScript(args, function(err,result) {
    console.log('[ERROR]: ', err)
    console.log(result)
  });
});
