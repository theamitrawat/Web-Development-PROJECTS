
function appendToDisplay(value) {
    document.getElementById("calc-display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("calc-display").value = "";
  }
  
  function calculate() {
    try {
      const expression = document.getElementById("calc-display").value;
      const result = eval(expression);
      document.getElementById("calc-display").value = result;
    } catch (error) {
      document.getElementById("calc-display").value = "Error";
    }
  }
  