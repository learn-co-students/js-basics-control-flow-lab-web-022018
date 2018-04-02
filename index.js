// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let output = ""
  if (feet <= 400) {
    return output = "This one is on me!"
  } else if (feet > 2000 && feet < 2500) {
    return output = "I will gladly take your thirty bucks."
  } else if (feet > 2500) {
    return output = "No can do."
  }
}

function ternaryCheckCity(city) {
  let output = ""
  city === "NYC" ? output = "Ok, sounds good." : output = "No go."
  return output
}

function switchOnCharmFromTip(tip) {
  let output = ""
  if (tip === "generous") {
    return "Thank you so much."
  } else if (tip === "not as generous") {
    return "Thank you."
  } else {
    return "Bye."
  }

}
