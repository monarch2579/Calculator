
let number1, number2, operator
const display = document.getElementById("display");

function print(input)
{
  display.value+=input;
}


function clearDisplay()
{
  display.value = "";
}


function calculate(){
  
  try
  {
    display.value=eval(display.value)
  }
  
  catch(error)
  {
    display.value="Error";
  }
}