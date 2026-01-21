// prime number
for (let i=2; i<=100; i++) {
    let count=0
    if(i%2==0){
        continue

    }
    for(let j=2;j<i;j++)
        if(i%j==0){
            count++
        }
        if (count==0){
            console.log(i+"is a prime number");
        }
} 
