function findMinMax(arr) {
    if (!arr || arr.length === 0) {
      return [undefined, undefined];
    }
    const minimum = Math.min(...arr);
    const maximum = Math.max(...arr);
    return [minimum, maximum];
  }