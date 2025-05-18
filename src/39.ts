function solution({ numbers }) {
  return Object.entries(numbers).reduce((acc, [key]) => {
    acc[key] = key;
    return acc;
  }, {});
}
