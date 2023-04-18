// initialize the count as 0 
let count = 0;

// change the count in HTML to reflect new count

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")

// increment the count variable by 1 on click

function increment() {
  count += 1
  countEl.innerText = count
}

// save the incremented count 
// HTML reflects the count and resets to 0

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr 
  count = 0
  countEl.innerText = 0
 
}

// ** added feature not included in tutorial **
// reset the count to 0 for next batch of passengers or mistake

function reset() {
  countEl.textContent = 0
  count = 0
}

/* potential feature upgrades if app were real 
  1. add decrement button
  2. train station background changes with seasons 
  3. note section to add any unusual observations re: # of passengers i.e. more passengers than normal even though the weather is adverse OR drop-down menu to note normal, more than normal, less than normal passenger count */
