function rot13(str) {

  let x = str.toUpperCase().split("");
  let Alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  //console.log(x);

  let store = [];
  for (let i=0; i < x.length; i++){
    let y = Alphabet.indexOf(x[i]);
    let RegFunc = /[A-Z]/g;
    
    if (y-13 < 0 && (RegFunc.test(x[i])==true)){
      store.push(Alphabet[y+13]);
    }
    else if(y-13 >= 0 && (RegFunc.test(x[i])==true)){
      store.push(Alphabet[y-13]);
    
    }
    else if((RegFunc.test(x[i])==false)){
      store.push(x[i])
    }
  }
    store = store.join("")
    return store;
  }

rot13("SERR PBQR PNZC");
