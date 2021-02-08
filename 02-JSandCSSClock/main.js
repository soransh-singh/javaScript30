function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = now.getMinutes();
  const minuteDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

window.addEventListener('DOMContentLoaded', () =>{
  secondHand = document.querySelector(".second-hand");
  minuteHand = document.querySelector(".min-hand");
  hourHand = document.querySelector(".hour-hand");
  setInterval(setDate,1000);
})
