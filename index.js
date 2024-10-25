// Write your solution here!


let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
  }
  
  // 2. Prepend a cat to the beginning of the array destructively
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  // 3. Remove the last cat from the array destructively
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  // 4. Remove the first cat from the array destructively
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  
  // 5. Append a cat to the cats array and return a new array (non-destructive)
  function appendCat(name) {
    return [...cats, name];
  }
  
  // 6. Prepend a cat to the cats array and return a new array (non-destructive)
  function prependCat(name) {
    return [name, ...cats];
  }
  
  // 7. Remove the last cat in the cats array and return a new array (non-destructive)
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  
  // 8. Remove the first cat from the cats array and return a new array (non-destructive)
  function removeFirstCat() {
    return cats.slice(1);}