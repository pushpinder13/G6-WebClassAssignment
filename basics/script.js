// // var a=200;
// // console.log(a);

// // function abc(){
// //   console.log("this is function abc");

// //   function def(){
// //     console.log("this is function def");
// //      function ghj(){
// //       console.log("this is function def");
// //       }


// //       ghj();

// //   }

// //   def();

// // }

// // abc();

// ///closures

// // function xyz(){
// //     var a = 100;
// //     var b = 200;
// //     var c = 300;
// //     console.log("this is helllo");

// //     function xyz(){
// //         var x = 1000;
// //         function abc(){
// //             console.log(a);
// //             console.log(b);
// //             console.log(c);
// //             console.log(x);
// //         }
// //         abc();
// //     }
// //     xyz();
// // }

// // xyz();


// // for(let i=0;i <=5;i++){//use var output is 6 6 6 6 6 and let gives 0-5
// //     setTimeout(()=>{

// //         console.log(i);
        

// //     },2000)
// // }

// //closures hold the memory, until the whole code is executed i.e over consumption of memory


// // var a= 0239;
// // console.log(a);


// // var b =0237;
// // console.log(b);

// // hof

// // function sumOftwo(a,b){
// //     return a+b;
// // }
// // function subOftwo(a,b){
// //     return a-b;
// // }

// // function calc(logic,a,b){
// //     return logic(a,b);
// // }

// // var answeofsub= calc(subOftwo,10,4);
// // console.log(answeofsub);

// // let user=[


// //     {
// //         firstName:"punal",
// //         age:20
// //     },
    
// //     {
// //         firstName:"prachi",
// //         age:88
// //     },
    
// //     {
// //         firstName:"parag",
// //         age:24
// //     },
    
// //     {
// //         firstName:"deepak",
// //         age:22
// //     },
    
// //     {
// //         firstName:"raman",
// //         age:27
// //     }
// // ]

// // let names = user.filter(person => person.age >= 20).map(person => person.firstName);

// // console.log(names);


// const myPromise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve
//         ("prmoise 1 successful");
//     }, 3000); 
// });


// const myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("prmoise 2 successful");
//     }, 2000); 
// });


// const myPromise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("prmoise 3 resolve");
//     }, 1000); 
// });


// const myPromise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("prmoise 4 successful");
//     }, 6000); 
// });


// // Promise.all([myPromise1,myPromise2,myPromise3,myPromise4]).then((data)=> console.log(data)).catch((err)=> console.log(err));

// // Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4]).then((data)=> console.log(data)).catch((err)=> console.log(err));


// Promise.race([myPromise1,myPromise2,myPromise3,myPromise4]).then((data)=> console.log(data)).catch((err)=> console.log(err));


// // Promise.any([myPromise1,myPromise2,myPromise3,myPromise4]).then((data)=> console.log(data)).catch((err)=> console.log(err));


//EVENT LISTNERS

// document.getElementById("blue").addEventListener("click",  ()=> {
//   console.log("Blue is ON");
// },true);

// document.getElementById("red").addEventListener("click",  ()=> {
//   console.log("red is ON");
// },true);

// document.getElementById("green").addEventListener("click",  ()=> {
//   console.log("green is ON");
// },true);

//FS AND HTTP MODULUES
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const TIMEOUT = 10 * 1000; // 10 seconds

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain', 'Connection': 'close' });
                res.end('Server Error');
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html',
                'Connection': 'keep-alive', // Enable keep-alive
                'Keep-Alive': 'timeout=5, max=100' // Optional Keep-Alive settings
            });
            res.end(data);
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain', 'Connection': 'close' });
        res.end('404 Not Found');
    }
});

// Set timeout for idle sockets (server-wide)
server.setTimeout(TIMEOUT, (socket) => {
    console.log('Connection timed out.');
    socket.destroy();
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});




