const http = require('http');




http.createServer(router).listen(3002);

function router(request, response) {
    console.log('new request', request.url);

    response.writeHead(201, {'Content-type': 'text/plain'});
    
    
    switch (request.url) {
        case '/hello':
            response.write('how its going?');
            response.end();
            break;

        default:
            response.write('404');
            response.end();
            break;
    }
   
}


console.log('listen on port: 3002')