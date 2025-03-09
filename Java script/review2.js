function greetingAndDay() {
    const now = new Date();
    const hours = now.getHours();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    let greetingMessage;
    if (hours < 12) {
        greetingMessage = "Good Morning";
    } else if (hours < 18) {
        greetingMessage = "Good Evening";
    } else {
        greetingMessage = "Good Night";
    }

    let dayName;
    switch (day) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Unknown Day";
            break;
    }

    return `${greetingMessage}, Today is ${dayName}.`;
}

console.log(greetingAndDay());
