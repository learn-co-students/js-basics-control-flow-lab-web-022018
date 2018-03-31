// Write your code in this file!
function scuberGreetingForFeet(feet){
  switch (true) {
    case feet <= 400:
      return 'This one is on me!';
    case feet > 2000 && feet < 2500:
      return 'I will gladly take your thirty bucks.';
    default:
      return 'No can do.';
  }
}

function ternaryCheckCity(city){
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(generosity){
  switch (generosity) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
