function resetHandler() {
  debugger;
  // reset state to initial values
  numbers.current = 0;
  numbers.biggest = -Infinity;
  numbers.smallest = Infinity;
  numbers.all = [];
  // re-render UI with values saved in state
  document.getElementById("input").value = "";
  document.getElementById("biggest").innerText = Infinity;
  document.getElementById("smallest").innerText = -Infinity;
  // log interaction: handler name, new state
  log.push({
    handler: 'reset',
    numbers: JSON.parse(JSON.stringify(numbers))
  })

}
