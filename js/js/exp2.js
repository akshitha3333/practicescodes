str="hii how are you"
let rev=str.split(" ").reverse().join(" ");
console.log(rev);
let out="";
//let brr=str.split(" ")
for(let i=str.length-1;i>=0;i--){
    out+=str[i];
}
console.log(out);
let output=str.split(" ").map(word=>word.split("").reverse().join(""))
.join(" ");
console.log(output);
let words=str.split(" ");
words[1]=words[1].split("").reverse().join("");
console.log(words.join(" "));
let palin=str===str.split(" ").reverse().join("");
console.log();
