function isSymmetrical(num) {
    const strNum = String(num);
    const reversedStrNum = strNum.split('').reverse().join('');
    return strNum === reversedStrNum;
  }
  
