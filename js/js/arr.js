const names=['akshu','kichu','harsha','vyshu']
const ages=[22,85,75,95,75,45]
// const names1=new Array('akshu','kichu','harsha','vyshu')
// const ages1=new Array(22,24,16,25)
console.log(names);
// console.log(ages);
// console.log(names1);
// console.log(ages1);
// names[0]=("akshitha")//-------->replace
// console.log(names);
//---->index values
//console.log(names[3]+" "+ages[3]);
// names.push('mahi') //-------->push
// console.log(names);
// names.pop()  //--------->pop
// console.log(names);
//------->delete
// delete names[2]
// console.log(names);
// for (let name in names){ //------>index values
//     console.log(name);
//  }
// for (let name of names){  //-------->only names
//     console.log(name);
// }

// for (let[index,name] of names.entries()){//-------->index with names
//     console.log(name+" "+index);
    
// }

// function myname(names,index){  //-------->index with names with foreach in names function
//     console.log(names+" "+ages[index]);
// }
// names.forEach(myname)
// let myname2=function(name,index,array){//anonumus function
//     console.log(name+" "+index+" "+array);   
// }
// // names.forEach(myname2)
// let myname3=(name,index,array)=>(//lambda function
//     console.log(name+" "+index+" "+array)
// )
// names.forEach(myname3)
//  names.forEach((name,index,array)=>{////// -----> we can write direct function in bracess
//     console.log(name+" "+index+" "+array);
//  })
//---------->maps
// let names2=names.map((name)=>{
//     return name+=" gvs"
// })
// console.log(names2);
// let mynames3=names.map((name)=>{
//     return name+=" ppv "
// })
// console.log(mynames3);
// let names4=ages.map((age)=>{
//     if(age>=18){
//         return 'majors'
//     }else{
//         return 'minor'
//     }
// })
//  console.log(names4);
// const phone=[78963254,41259,78963214,753695214]
// let mynum=phone.map((num)=>{
//     return num+= " phone"
// })
// console.log(mynum);
//----->filter
// let myage=ages.filter((age)=>{
//     if(age>=18){
//         return age
//     }
// })
// console.log(myage);
// let ag=ages.some((ags)=>{/////////some
//     return ags<18
// })
// console.log(ag);/
// let ag=ages.every((ags)=>{/////////every
//     return ags>18
// })
// console.log(ag);



//------->search
// const names=['akshu','kichu','harsha','vyshu','harsha']
// const ages=[22,85,75,95,75,45]
// // let name=names.indexOf('harsha')
// console.log(name);
// let name1=names.lastIndexOf('harsha')
// console.log(name1);
// let isavaliable=names.includes('mahi')
// console.log(isavaliable);
// let vol=names.filter((name)=>{
//     if(name[1]==='k'){
//         return names[1]
//     }
// })
// console.log(vol);
// let result=names.findIndex((name)=>{
//     if(name[1]==='k'){
//         return names[1]
//     }
// })
// console.log(result);
// for (i=0;i<names.length;i++){
//     console.log(names[i]+" "+ages[i]);
// }
