/*Get user inputs */
const num1 = parseInt(prompt("Enter your first number: "));
const num2 = parseInt(prompt("Enter second number: "));
const opera = prompt("Pick an opertatio -\n * to multiply \n / for  division \n + to add \n - to subtract: ");

function userInputs() {
        
    let result;
    if(opera == "*") {
        result = num1 * num2;
        alert(`The answer is: ${result}`);
    } else if(opera == "/") {
        result = num1 / num2;
        alert(`The answer is: ${result}`);
    } else if(opera == "+") {
        result = num1 + num2;
        alert(`The answer is: ${result}`);
    } else if(opera == "-") {
        result = num1 - num2;
        alert(`The answer is: ${result}`);
    } else {
        result = "Invalid operation. Try again.";
        alert(result);
    }
}
userInputs();
/*Calculate 
function calculator() {
    userInputs();
    alert(result)
}*/