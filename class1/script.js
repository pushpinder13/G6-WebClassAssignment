// console.log("hello");
// setTimeout(()=>{
// console.log("timeout");
    
// },2000);
// console.log("end");


// var a=20;
// console.log(a);

// var b=30;
// console.log(b);

// abc()

// function abc(){
//     console.log("inside function");
//     function nested(){
//         console.log("inside nested function");
//     }
//     nested();
// }
// console.log("end of the code");




// console.log("script start");
// var a = 200;
// console.log(a);

// function abc() {
//     console.log("inside fun");

//     function def() {
//         console.log("inside def");

//         function ghj() {
//             console.log("this is ghj");
//         }
//         ghj();
//     }
//     def();
// }
// abc();



// for(var i=0;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },2000);
// }

// function sum(a,b){
//     return a+b;
// }
// function sum(a,b){
//     return a-b;
// }
// function cal(logic,a,b){
//     return logic(a,b);
// }
// console.log(cal(sum,1,1));


// function detail(name ,fees){
//     return {name,fees};
// }
// function emi(fee){
//     return  fee/10;
    
// }
// function wel(detail){
//     console.log("welcome "+detail.name+" your emi is "+detail.emi);

// }
// wel(detail("rahul",500));


// function checkout(cb){
//     console.log("checkout");
//     setTimeout(()=>{
//     },2000);
// }
// function orderplcae(cb){
//     console.log("order placed");
//     setTimeout(()=>{
//     },2000);
// }
// function orderserving(cb){  
//     console.log("order serving");
//     setTimeout(()=>{},2000);
// }
// function eatingfood(cb){
//     console.log("eating food");
//     setTimeout(()=>{},2000);
// }

// function billpay(cb){
//     console.log("bill pay");
//     setTimeout(()=>{},2000);
// }function saufeating(cb){
//     console.log("sauf eating");
//     setTimeout(()=>{},2000);
// }function exithotel(cb){
//     console.log("exit hotel");
//     setTimeout(()=>{},2000);
// }
    

// var cart = ["shoes", "t-shirt", "jeans"];

// function orderPlace(cart, callback) {
//     var itemCount = cart.length;
//     var totalPrice = itemCount * 1000;
//     console.log("Order placed. Items:", itemCount, "Total Price:", totalPrice);
//     callback(itemCount, totalPrice);
// }

// function orderGenerate(itemCount, totalPrice, callback) {
//     var orderId = "ORD" + Math.floor(Math.random() * 100000);
//     console.log("Order ID generated:", orderId);
//     callback(orderId, itemCount, totalPrice);
// }

// function addressDetails(orderId, itemCount, totalPrice, callback) {
//     var name = "John Doe";
//     var address = "123 Main St, City";
//     console.log("Address details collected.");
//     callback(orderId, itemCount, totalPrice, name, address);
// }

// function paymentGateway(orderId, itemCount, totalPrice, name, address, callback) {
//     var paymentStatus = "Success";
//     console.log("Payment successful for Order ID:", orderId);
//     callback(orderId, itemCount, totalPrice, name, address, paymentStatus);
// }

// function orderSummary(orderId, itemCount, totalPrice, name, address, paymentStatus) {
//     console.log("----- Order Summary -----");
//     console.log("Order ID:", orderId);
//     console.log("Name:", name);
//     console.log("Address:", address);
//     console.log("Items:", itemCount);
//     console.log("Total Price:", totalPrice);
//     console.log("Payment Status:", paymentStatus);
//     console.log("------------------------");
// }

// orderPlace(cart, function(itemCount, totalPrice) {
//     orderGenerate(itemCount, totalPrice, function(orderId, itemCount, totalPrice) {
//         addressDetails(orderId, itemCount, totalPrice, function(orderId, itemCount, totalPrice, name, address) {
//             paymentGateway(orderId, itemCount, totalPrice, name, address, function(orderId, itemCount, totalPrice, name, address, paymentStatus) {
//                 orderSummary(orderId, itemCount, totalPrice, name, address, paymentStatus);
//             });
//         });
//     });
// });



// Array.prototype.calculate=function (arr){
//     let output=[];
//     for(let i=0;i<arr.length;i++){
//         output.push(arr[i]*2);
//     }
//     return output
// }

const promise1 = new Promise((resovle,rejevt)=>{
    resovle("RESOLVED")
}) 