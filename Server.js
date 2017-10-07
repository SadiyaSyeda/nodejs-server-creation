var http=require('http');
var fs=require('fs');
function sendResponse(response){
response.writeHead(404,{"Content-Type":"text/plain"});
response.write("404 response : cannot find the file specified");
response.end();
}
function onRequest(request,response){
    if(request.method=='GET'&& request.url=='/'|| request.url== './Index.html') {
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.readFile('./index.html', function (err, html) {
            response.write(html);
            
            response.end();
        });
        
    }
    else
    {
        sendResponse(response);
    }
}
http.createServer(onRequest).listen(1356);
console.log("Server is running...");