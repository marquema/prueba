var restify = require('restify'); 
var builder = require('botbuilder');  
// Setup Restify Server 
var server = restify.createServer(); 
server.listen(process.env.port || process.env.PORT || 3978, 
function () {    
    console.log('%s escuchando a %s', server.name, server.url);  
});  
// chat connector for communicating with the Bot Framework Service 
var connector = new builder.ChatConnector({     
    appId: 'c912abfb-969c-4f76-bc5d-dc858809e135',     
    appPassword: 'gtpEZD8368[;onmmQWHV1+:'
});
// Listen for messages from users  
server.post('/api/messages', connector.listen());  
// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:') 
var bot = new builder.UniversalBot(connector, function (session) {     
session.send("Tu has dicho de nuevo: %s", session.message.text); 
});





function sendGetSentimentRequest(message) {      
    var options = {        
       method: 'POST',        
       uri:
 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',        
       body: {            
          documents:[{id:'1', language: 'en', text:message}]  
       },        
       json: true, // Automatically stringifies the body to JSON
       headers: header    
    };    
    return rp(options)
 ;}
 function getGiphy(searchString) {    
    var options = {        
       method: 'GET',        
       uri: 'https://api.giphy.com/v1/gifs/translate',        
       qs: {            
          s: searchString,            
          api_key: '9n8AIaWULVu37sA1k8eE38IwnCCjmXP9'        
       }    
    }    


    return rp(options)
 ;}