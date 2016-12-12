
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();

  const hoursDegrees = getDegrees(now.getHours(), 'hours');
  const minutesDegrees = getDegrees(now.getMinutes());
  const secondsDegrees = getDegrees(now.getSeconds());
    
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

function getDegrees(time, unit) {
  const unitDegree = unit === 'hours'
    ? 12 : 60;
  return ((time / unitDegree) * 360) + 90;
}

setInterval(setDate, 1000);

setDate();