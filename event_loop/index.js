var a=200;
setTimeout(()=>{
    console.log("this is settimeout");
    
},0);
console.log(a);

setTimeout(()=>{
    console.log("this is settimeout2");
    
});

setImmediate(()=>{
    console.log("this is setimmediate");
    
});





process.nextTick(()=>{
    console.log("this is next Tick");
    
})



