function convertToRoman(num) {
  let ObjectRoman={
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  }

  let value = '';
  let i;
  for (i in ObjectRoman){
    while(num >= ObjectRoman[i]){
      value += i;
      num -= ObjectRoman[i];
    }
  }

  return value;
}

convertToRoman(36);
