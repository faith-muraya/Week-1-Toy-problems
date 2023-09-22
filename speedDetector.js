const speed = Number(prompt("Enter your speed:"));

const speedLimit = 70;
const demeritPointsThreshold = 12;

const speedDifference = speed - speedLimit;

if (speed < speedLimit) {
  alert("Ok");
} else {
 
  const demeritPoints = Math.floor(speedDifference / 5);

  alert("Points: " + demeritPoints);

  if (demeritPoints > demeritPointsThreshold) {
    alert("License suspended");
  }
}