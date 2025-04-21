function filterOutStrings(arr) {
    return arr.filter(item => typeof item === 'number' && !isNaN(item));
  }
