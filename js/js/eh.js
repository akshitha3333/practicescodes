class MinorError extends Error{
    constructor(message,errorcode,suggesions){
        super(message)
        this.name="minorError"
        this.errorcode=errorcode
        this.suggesions=suggesions
    }
}
let age =12
try{
    console.log('i am 1km');
    console.log('i am 2km');
    if(age>18){
        throw new MinorError("age is below 18",401,"ride after 18")
    }
    console.log('i am 3km');
    let newAge=a +age
    console.log('i am 4km');
    console.log('i am 5km');  
    
}catch(err){
    if(err instanceof MinorError){
        console.log(err.message);
        console.log(err.name);
        console.log(err.errorcode);
        console.log(err.suggesions);
    }else if(err instanceof ReferenceError){
        console.log(err.message);
        console.log(err.name);  
    }
    
}
finally{
    console.log("they reached to there distination");
    
}
console.log("this is the code outside of road or try block");
