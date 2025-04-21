function squareDigits(num) {
    const strNum = String(num);
    let squaredDigits = '';
    for (let i = 0; i < strNum.length; i++) {
      const digit = parseInt(strNum[i]);
      squaredDigits += String(digit * digit);
    }
    return parseInt(squaredDigits);
  }
  
