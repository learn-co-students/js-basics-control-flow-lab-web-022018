// Write your code in this file!
function scuberGreetingForFeet(n){
  if( n <= 400) {
    return 'This one is on me!';
  } else if (n >= 2500) {
    return 'No can do.';
  } else if (n >= 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(str) {
  if (str === 'generous') {
    return 'Thank you so much.';
  } else if (str === 'thanks for everything') {
    return 'Bye.';
  } else {
    return 'Thank you.';
  }
}
