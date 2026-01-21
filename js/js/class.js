// class Demo{
//     a=45
//     constructor(){
//         this.b=34
//         let b=47
//         console.log(b);
//         console.log("i am Akshu");
//         console.log(this);
        
//     }

// }
// let d=new Demo()
// //console.log(d);


// class Demo{
//     a=45
//     name='mahi'
//     constructor(){
//         console.log('i am mahi');
//     }
//     Akshu(){
//         let a =56
//         console.log('i am akshu');
//         console.log(this.a);
//         console.log(a);
//         console.log(arguments);
        
//     }
//     su(){
//         console.log('i am supu');
        
//     }
// }
// let d=new Demo();
// console.log(d);
// let d2=new Demo();
// console.log(d2);

// console.log(d.a);
// console.log(d.name);
// d.Akshu(23,53,55,'kichu')
// console.log(d2.a);
// console.log(d2.name);
// d2.Akshu(55,true)
// d.su()

// class Demo{
//     a=45
//     name='mahi'
//     constructor(){
//         console.log('i am mahi');
//         console.log(this.a);
//         console.log(this.name);
//         this.Akshu()
//         this.su()
//     }
//     Akshu(){ 
//         console.log('i am akshu');
//          return 'hello'
//     }
//     su(){
//         console.log('i am supu');
        
//     }
// }

// let d=new Demo()
//let mssg=d.Akshu()
// class Demo{
//     a=45
//     name='mahi'
//     static b= 34
//     constructor(){
//         console.log('i am mahi');
//     }
//     Akshu(){
//         let a =56
//         console.log('i am akshu')
//     }
//     su(){
//         console.log('i am supu');
//     }
//     static su(){
//         console.log('im su');
        
//     }
//     static sai(){
//         console.log('i am sai');  
//     }

// }
// let d=new Demo()
// d.b=45
// console.log(d.b);

// console.log(Demo.b);
// Demo.su()
// d.su()

class Demo{
    a=45
    name='mahi'
    constructor(){
        console.log('i am mahi');
    }
    akshu(){
        console.log('i am akshitha');
        
    }
}
class Test extends Demo{
    b=46
    a=11
    constructor(){
        super()
        console.log('i am raj');
        
    }
    sai(){
        console.log('i am sai');
        
    }

}
let t=new Test()
console.log(t.a);
console.log(t.name);
t.akshu()
console.log(t.b);
console.log(t.name);




      
