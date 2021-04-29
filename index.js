function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!'
  } else if (feet > 2000 && feet < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  if (city !== 'NYC') {
    return 'No go.'
  } else {
    return 'Ok, sounds good.'
  }
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
      break
  }
}