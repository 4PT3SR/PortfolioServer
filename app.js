const http = require('http');
const fs = require('fs');



const server = http.createServer((req,res) => {
    // console.log(req.url);
    switch (req.url) {
        case '/':
            // res.end(home)
            fs.readFile(__dirname + '/public/index.html', 'utf-8', (err,data) => {
                res.end(data);
            })
            break;
            case '/home':
                // res.end('this is the home page')
                fs.readFile(__dirname + '/public/index.html', 'utf-8', (err,data) => {
                    res.end(data);
                })
               break;
        case '/about':
            //    res.end('this is the about page')
            fs.readFile(__dirname + '/public/about.html', 'utf-8', (err,data) => {
                res.end(data);
            })
               break;
        case '/contact':
            //    res.end('this is the contact me page')
            fs.readFile(__dirname + '/public/contact.html', 'utf-8', (err,data) => {
                res.end(data);
            })
               break;        
        default:
        //    res.end('404');
        fs.readFile(__dirname + '/public/page404.html', 'utf-8', (err,data) => {
            res.end(data);
        })
   }
   
});

server.listen(8000, console.log('Listening on port 8000'));