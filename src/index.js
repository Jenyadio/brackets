module.exports = function check(str, bracketsConfig) {
  let brackets = {};
  for(let i in bracketsConfig) {
    brackets[bracketsConfig[i][1]] = bracketsConfig[i].join('');
  }

  let str2 = str;
  for(let i = 0; i < str.length; i++) {
    if(brackets[str[i]] !== undefined) {
      str2 = str2.replace(brackets[str[i]], '');
    }
  }

  return str2.length !== 0 ? false : true;
}
