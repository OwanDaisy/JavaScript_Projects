function factorialize(num) {
  let n = num;
  let m = 1;
  while(n>0){
    m = m * n;
    n--;
  }
  return(m);
}

factorialize(5);
