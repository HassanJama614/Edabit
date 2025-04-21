function isSpecialArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0 && arr[i] % 2 !== 0) { // Even index, odd number
        return false;
      }
      if (i % 2 !== 0 && arr[i] % 2 === 0) { // Odd index, even number
        return false;
      }
    }
    return true;
  }
  
