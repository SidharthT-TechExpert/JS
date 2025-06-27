function countDown(n){
  if(n===0) return ; 
  console.log(n--);
  countDown(n) 
} 

countDown(9);  