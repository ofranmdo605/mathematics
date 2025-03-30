function getRandomPrime() {
  let prime = true;
  while (prime) {
    const randomNum = Math.floor(Math.random() * 10);
    if (randomNum % 2 === 0) {
      prime = false;
    } else {
      prime = true;
    }
  }
  return randomNum;
}
