const HelloTesting=artifacts.require("HelloTesting");
 contract("HelloTesting",()=>{
    it("should return hello testing",async()=>{
     const helloTesting=await HelloTesting.deployed();
     const result= await helloTesting.print();
     //await is to  say function to wait for some while
    console.log(result);
    });
 }); 