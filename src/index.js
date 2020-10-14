module.exports = function check(str, bracketsConfig) {
   if (str.length % 2 ===1) return false;
  while (str.length > 0) {
    let ind1 = -1;
    for (let i in bracketsConfig)
    {
      if (str[0] === bracketsConfig[i][0] && ind1 === -1) {
        ind1 = i;
      }
    }
    if (ind1 === -1) return false;
    let ind2 = -1;
    for (i in str) {
      if (str[i] === bracketsConfig[ind1][1] && ind2 === -1) 
      {
        ind2 = i;
      }
    }
    if(ind2 === -1) return false;
    if(ind2%2 === 0)
    return false;
    str = str.slice(1, ind2) + str.slice(ind2+1);
  }
  return true;
}
