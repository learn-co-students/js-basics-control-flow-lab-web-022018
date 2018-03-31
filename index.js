// Write your code in this file!
let greeting = "";


function scuberGreetingForFeet(arg) {
  if (arg <= 400) {
    return greeting = "This one is on me!"
  }
  else if (arg >= 2000 && arg <= 2500){
    return greeting = "I will gladly take your thirty bucks."
  }
  else {
    return greeting = "No can do."
  }
}

function ternaryCheckCity(city){
  city === "NYC" ? greeting = "Ok, sounds good." : greeting = "No go.";
  return greeting;
}

function switchOnCharmFromTip (tip){
  switch(tip){
    case "generous":
      return greeting = "Thank you so much.";
      break;
    case "not as generous":
      return greeting = "Thank you.";
      break;
    default:
      return greeting = "Bye.";
  }
}
