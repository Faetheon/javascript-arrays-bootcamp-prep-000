var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  element = [element]
  const diffArray = [array.unshift(...element)];
  console.log(diffArray);
}