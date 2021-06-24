// * Get the children of the element with id `wrapper` and print them to the console as a list.
// * Iterate over them and print their children to the console, as well as how many they are.
// Note: We do not want to do this operation recursively, we just do it for the children of wrapper and its children.
// Note: There are 2 ways to print the number of children - give them both a try.

const childrenWrapper = document.querySelector("#wrapper");
console.log(childrenWrapper.children);
console.log(childrenWrapper.getElementsByTagName("section"));
console.log(childrenWrapper.children.length);
// console.log(typeof childrenWrapper);

// childrenWrapper.forEach((child) => {
//   console.log(child.children);
// });

// const wrapper = document.querySelector("#wrapper");
// console.log(wrapper.children);

const wrapper = document.getElementById("wrapper");
console.log(wrapper.children);
console.log(wrapper.children.length);
// console.log(wrapper.nextSibling);

// const wrapperChildren = wrapper.children;
// wrapperChildren.forEach((child) => {
//   console.log(child);
// });
// for (let child of wrapper.children) {
//   console.log(child);
//   console.log(child.classList);
//   console.log(child.classList.length);
// }

// * Next, we need to find which from the children of the element with id `wrapper` has the highest number of classes.
//     For example, if one element has 2 classes and another has 3 classes - the one with 3 classes has the highest number of classes.
//     Let's write a function that returns an object that contains the element with the most classes and the total number of classes.
function mostClasses(element) {
  let largest = 0;
  let largestElement = null;
  for (let child of element.children) {
    if (child.classList.length > largest) {
      largest = child.classList.length;
      largestElement = child;
    }
    // console.log(child);
    // console.log(child.classList);
    // console.log(child.classList.length);
  }
  return {
    "Largest element": largestElement,
    Length: largest,
  };
}
console.log(mostClasses(wrapper));
