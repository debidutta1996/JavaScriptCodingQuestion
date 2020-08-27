function isPrime(n){
    var flag=true;
    for(let i=2;i<=n-1;i++){
      if(n%i===0){
        flag=false;
      }
    }
  console.log(flag);
  }



//output---
  //isPrime(5);
//true
