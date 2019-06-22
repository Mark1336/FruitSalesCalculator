var total =0; //Declares global varible total

//Function for calculating cost of apple, there is the same for oranges and bananas just with different prices for each fruit
function addApple()
{
  var numApples = document.getElementById("apple").value;
  if(numApples < 0 || numApples > 99 || /[A-Z]/.test(numApples) || /[a-z]/.test(numApples) || /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(numApples)) //checks for incorrect input
  {
    alert("Enter a value 0-99");
  }
  else
  {
    var cost = .59;

    total1 = numApples * cost;
  }
}

function addOrange()
{
  var numOranges = document.getElementById("orange").value;
  if(numOranges < 0 || numOranges > 99 || /[A-Z]/.test(numOranges) || /[a-z]/.test(numOranges) || /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(numOranges))
  {
    alert("Enter a value 0-99");
  }
  else
  {
    cost = .49;

    total2 = numOranges * cost;
  }
}

function addBanana()
{
  var numBanana = document.getElementById("banana").value;
  if(numBanana < 0 || numBanana > 99 || /[A-Z]/.test(numBanana) || /[a-z]/.test(numBanana) || /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(numBanana))
  {
    alert("Enter a value 0-99");
  }
  else
  {
    cost = .39;
    //total = total + numBanana * cost;
    total3 = numBanana * cost;
  }
}

//Function for displaying total cost
function submit()
{
  //Added these 3 function calls to call here is onclick only works if you click the box after input, this way if a user does not click the boxes this will run the functions
  addApple();
  addBanana();
  addOrange();
  total = ((total1 + total2 + total3)*.0775) //Sales tax calculation
  total = (total + (total1 + total2 + total3)).toFixed(2); //Total + sales tax and rounding to 2 decimal places
  alert("Total: $" + total);
  return false;
}
