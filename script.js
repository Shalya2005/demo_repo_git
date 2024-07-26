let displayValue=' ';
function appendNumber(number) {
  displayValue+=number;
  document.getElementById('display').value=displayValue;
}
function appendoperator(operator) {
  displayValue += operator;
  document.getElementById('display').value=displayValue;
}
function appendDecimal(decimal) {
  displayValue += decimal;
  document.getElementById('display').value=displayValue;
}
function calculateResult() {
 const result =eval(displayValue);
 displayValue=result;
 document.getElementById('display').value=displayValue;
}
 function clearDisplay() {
displayValue=' ';
document.getElementById('display').value=displayValue;
}
