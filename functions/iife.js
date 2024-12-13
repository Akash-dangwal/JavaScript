(function test1(){
    //named iife
    console.log("test01 passed");
})();   //semi must pe apllied to end the function


((name)=>{
    console.log(`${name} welcome`)
}

)("akash");