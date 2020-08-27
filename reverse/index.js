function reverse(str){
  var arr=str.split(' ')
  var result =[];
  for(let i=0;i<=arr.length-1;i++){
    result.unshift(arr[i]);
  }
  console.log(result.join(' '));
}

reverse('I am a boy');
