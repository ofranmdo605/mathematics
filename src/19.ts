function squareRoot(a: number): number {
  if (a >= 0) {
    return Math.sqrt(a);
  } else {
    throw new Error("The value of a should be non-negative.");
  }
}
