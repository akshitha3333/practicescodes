// let str1="Akshitha"
// let str2="how are yiu dooing today"
// //str1.split('')
// console.log(str1.split(' '));
// console.log(str2.split(' '));
// let str3="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
// console.log(str3.split("'"));
// let Arr1= ["kiran","sai kiran","venu gudluri","raju katuri"]
// const output = [];
// let ar=Arr1.forEach((name)=>{
//     const temp = name.split(' ')
//     const temp3 = [];
//     let br=temp.forEach((lett)=>{
//         const temp2=lett.split('')
//         let a=temp2[0].toUpperCase()
//         temp2[0]=a
//         let m=temp2.join("")
//         temp3.push(m)
//     })
//     let p=temp3.join(' ')
//     output.push(p)
// // })
// console.log(output);   

// let Arr1= ["kiran","sai kiran","venu gudluri","raju katuri"]
// function caps(arr){
//     const output=[];
//     arr.forEach((name)=> {
//         output.push(name.split(' ').map(word=>word[0].toUpperCase()+word.slice(1)).join(' ')
//     );
//     });
//     return output;
// }
// let m=caps(Arr1)
// console.log(m);



// let Arr1= ["kiran","sai kiran","venu gudluri","raju katuri"]
// let Arr2=[{
//     id:1,
//     name:'raju',
//     emp:20025
// },
// {
//     id:2,
//     name:'venu',
//     emp:20026
// },
// {
//     id:3,
//     name:'kumar',
  
//     emp:20073
// }]
// let namesarr2=Arr2.map(obj=>obj.name);
// let splitnames=Arr1.flatMap(name=>name.split(' '));
// let result=splitnames.filter(name=>namesarr2.includes(name));
// console.log(result);
// map: goes through each object arr2
// split:splits the words
// flatmap:combines all split arrys into single array
// filter: loops through splitnames
// includes: check weather name exist or not
// let namesarr2=Arr2.map(obj=>obj.name);
// let splitnames=Arr1.flatMap(name=>name.split(' '));
// let result=splitnames.filter(name=>namesarr2.includes(name))
// console.log(result);


// let str="Hey Akshitha! Welcome to my story"
// console.log(str.replace("Akshitha","Harshitha"));

// let str2="Have a great day"
// let st=str2.split(" ").reverse().map(word=>word[0].toUpperCase()+word.slice(1)).join(" ")
// //let st1=st[0].toUpperCase()
// console.log(st);

// arr=["Jan","Feb","April","Mar"]
// arr=arr.map(month=>month.toLowerCase().slice(0,3));
// let ap=arr.splice(2,1);
// let a=ap.toString()
// arr.push(a)
// console.log(arr);




const data=[{
    id:820,
    vehicles:["volvo","Benz","hino","tata","scania"],
    vdata:[{
        id:1,
        vnumber:"7274L",
        volume:75
    },
    {
        id:2,
        vnumber:"3630D",
        volume:320
    },
    {
        id:3,
        vnumber:" ",
        volume:560
    },
    {
        id:4,
        vnumber:"5890",
        volume:86
    },
    {
        id:5,
        vnumber:"9637D ",
        volume:320
    }
    ]
}]

const vehicleNames = [];

const vehicles = data[0].vehicles;
const vdata = data[0].vdata;

for (let i = 0; i < vdata.length; i++) {

  if (
    vdata[i].id !== null &&
    vdata[i].id !== undefined &&

    vdata[i].vnumber !== null &&
    vdata[i].vnumber !== undefined &&
    vdata[i].vnumber.trim() !== "" &&

    vdata[i].volume !== null &&
    vdata[i].volume !== undefined &&
    vdata[i].volume > 100
  ) {
    vehicleNames.push(vehicles[i]);
  }
}

console.log(vehicleNames);




















