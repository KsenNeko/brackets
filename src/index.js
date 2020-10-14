module.exports = function check(str, bracketsConfig) {
   if (str.length % 2 === 1) return false;
  while (str.length > 0) {
    let flag = true;
    for (let i=0; i<str.length; i++)
     {
      for (let j in bracketsConfig) {
        if (str[i] === bracketsConfig[j][0] && flag)
          if (str[i + 1] === bracketsConfig[j][1]) {
            let a = str.slice(0, i);
            let b = str.slice(i+2, str.length);
            str = a + b;
            flag = false;
          }
      }
    }
    if(flag)
       return false;
  }
  return true;
}
