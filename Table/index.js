function multiply() {
    // Get the user input from the input field
    const numberInput = document.getElementById("number");
    const number = parseInt(numberInput.value);
  
    // Get the result element for displaying the multiplication table
    const resultElement = document.getElementById("result");
  
    // Check if the entered value is a valid number
    if (!isNaN(number)) {
      // Generate the multiplication table
      let table = "";
      for (let i = 1; i <= 10; i++) {
        const result = number * i;
        table += `${number} x ${i} = ${result}<br>`;
      }
  
      // Display the multiplication table
      resultElement.innerHTML = table;
    } else {
      resultElement.innerHTML = "Invalid input. Please enter a valid number.";
    }
  }
  