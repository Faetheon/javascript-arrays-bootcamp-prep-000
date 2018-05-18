var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  element = ['foo']
  const diffArray = [array.unshift(...element)];
  return diffArray.forEach();
}