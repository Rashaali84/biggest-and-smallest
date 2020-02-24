function saveNumberHandler() {
  debugger;
  // read new number from user input
  numbers.current = document.getElementById("input").value;
  numbers.all.push(numbers.current);
  // read from state the data you will need for the next step
  // find the new biggest and smallest values
  const smallest_number = Math.min(...numbers.all);
  const largest_number = Math.max(...numbers.all);
  // update state: new biggest, new smallest, new current & save the last current
  numbers.biggest = largest_number;
  numbers.smallest = smallest_number;
  // re-render the user interface with values stored in state
  document.getElementById("biggest").innerText = largest_number;
  document.getElementById("smallest").innerText = smallest_number;
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save number',
    newInput: numbers.current,
    numbers: JSON.parse(JSON.stringify(numbers))
  })
}
