function forLoop(array) {
  for (var i = 0; i < 25; i++) {
      array = `"I am ${array[i]} strange loop${array[i] === 0 ? '' : 's'}."`;
  }
  return array;
}
