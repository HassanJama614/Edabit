function marathonDistance(portions) {
    const totalMiles = portions.reduce((sum, portion) => sum + Math.abs(portion), 0);
    return totalMiles;
  }
  
