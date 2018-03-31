// Write your code in this file!
// function scuberGreetingForFeet(ride){
function scuberGreetingForFeet(ride){
  if (ride <= 400)
    {return 'This one is on me!'}
  // else if (ride > 2000) {
  //   return 'I will gladly take your thirty bucks.'
  // }
  else if (ride > 2500) {
    return "No can do."
  }
  else {
    return 'I will gladly take your thirty bucks.'
  }
} //end function

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
    break;
  }//switch

}//function


// scuberGreetingForFeet() — Use if and else if statements to return the correct greeting based on the distance
//  the passenger desires to travel.
// ternaryCheckCity() — Use a ternary operator to return the correct response based on the desired destination of the passenger.
// switchOnCharmFromTip() — Use a switch statement to return a different response based on the generosity of the passenger's tip.
