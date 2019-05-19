function dayOfWeek(dayName) {
    const associativeArrayDayOfWeek = {
        'Monday' : 1,
        'Tuesday' : 2,
        'Wednesday' : 3,
        'Thursday' : 4,
        'Friday' : 5,
        'Saturday' : 6,
        'Sunday' : 7
    };

    const result = associativeArrayDayOfWeek[dayName];
    if (result === undefined) {
        console.log('error');
    } else {
        console.log(result);
    }
}

// dayOfWeek('blabla');