/* - This function shows the rider how much to pay according to the distance:
   - Maximum distance is 2500 feet (if more than 2500 -> "No can do")
   - distance is less than or equal to 400 feet -> "This one is on me"
   - distance between 400 and 2000 feet -> "20$"
   - distance more than 2000 feet -> "$30"
*/
function scuberGreetingForFeet(distance){
  if (distance > 2500) {
    return "No can do.";
  } else {
    if (distance <= 400) {
      return "This one is on me!";
    } else if (distance > 400 && distance < 2000) {
      return "That will be twenty bucks.";
    } else if (distance > 2000) {
      return "I will gladly take your thirty bucks.";
    }
  }
}

// This function limits the rider's city to NYC only. If the rider was elsewhere, it returns "No go."
function ternaryCheckCity(city){
  if (city === "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go."
  }
}

// This function returns a greeting according to the amount of the tip.
function switchOnCharmFromTip(tip){
  if (tip === "generous") {
    return "Thank you so much.";
  } else if (tip === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}