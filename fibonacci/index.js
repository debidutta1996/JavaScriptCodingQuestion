function fib(n){
  var result =[0,1];
  for(let i=2;i<=n;i++){
    const a=result[i-1];
    const b=result[i-2];
    result.push(a+b);
  }
  console.log(result);
  console.log(result[result.length-1]);
}


//fib(5);

//output --
//[0,1,1,2,3]
