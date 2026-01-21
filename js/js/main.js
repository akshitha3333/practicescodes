for(i=1;i<=5;i++){
    abc: for(j=1;j<=5;j++){
        for(k=1;k<=5;k++){
            console.log("i is"+i+"j is"+j+"k is"+k);
            if(i==3 && j==2 && k==2){
            break abc
            }
        // console.log("i is"+i+"j is"+j+"k is"+k);
            
        }
    }  
}