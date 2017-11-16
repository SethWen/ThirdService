const request = require('request');

let jsonData = {
    name: 'shawn',
    age: 9,
};
let options = {
    uri: 'http://localhost:7878/test',
    json: jsonData,
};
request.post(options, function (error, response, body) {
    console.log(body);
});