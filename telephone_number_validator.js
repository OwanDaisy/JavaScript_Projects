function telephoneCheck(str) {
  //store valid phone numbers with regex

  let two = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  let one = /^[1]{1}[- ]?\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  let three = /\d{3}\)-\d{3}-\d{4}/i
  let four = /\(\d{3}-\d{3}-\d{4}/i
  let five = /1 \d{3}\)[- ]?\d{3}-\d{4}/i
 
  
  if((two.test(str)===true || one.test(str)===true) && three.test(str)==false && four.test(str)==false && five.test(str)==false){
    return true;
  }
  else{
    return false;
  }

  
}

telephoneCheck("555-555-5555");
