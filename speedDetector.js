function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const demeritPoint = 5;

    if (speed < speedLimit) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / demeritPoint);
        
        if (demeritPoints <= 12) {
            return `Points: ${demeritPoints}`;
        } else {
            return "License suspended";
        }
    }
}

const carSpeed = parseInt(prompt("Enter the car's speed (in km/h)"));

if (!isNaN(carSpeed)) {
    const result = calculateDemeritPoints(carSpeed);
    alert(result);
} else {
    alert("Invalid input. Please enter a valid number for car speed.");
}

