function timeToWalk(stepsNeeded, stepLength, walkingSpeedKmPerHour) {
    const distanceToSchoolInMeters = stepsNeeded * stepLength;
    const additionalMinutesNeededDueToBrakes = Math.floor(distanceToSchoolInMeters / 500);

    //searching google for "kilometer per hour to meter per second"
    const walkingSpeedMeterPerSecond = walkingSpeedKmPerHour / 3.6;

    const totalSecondsNeeded = Math.round(distanceToSchoolInMeters / walkingSpeedMeterPerSecond)
        + 60 * additionalMinutesNeededDueToBrakes;

    const hoursNeeded = Math.floor(totalSecondsNeeded / 3600);
    const minutesNeeded = Math.floor(totalSecondsNeeded / 60);
    const secondsNeeded = Math.floor(totalSecondsNeeded % 60);

    const formatHoursNeeded = String(hoursNeeded).padStart(2, '0');
    const formatMinutesNeeded = String(minutesNeeded).padStart(2, '0');
    const formatSecondsNeeded = String(secondsNeeded).padStart(2, '0');

    console.log(`${formatHoursNeeded}:${formatMinutesNeeded}:${formatSecondsNeeded}`);
}

// timeToWalk(2564, 0.70, 5.5);
