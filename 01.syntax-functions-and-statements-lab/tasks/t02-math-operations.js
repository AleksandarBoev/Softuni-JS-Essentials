function mathOperations(num1, num2, operatorSign) {
    switch (operatorSign) {
        case '+':
            console.log(num1 + num2);
            break;

        case '-':
            console.log(num1 - num2);
            break;

        case '*':
            console.log(num1 * num2);
            break;

        case '/':
            console.log(num1 / num2);
            break;

        case '**':
            console.log(num1 ** num2);
            break;

        case '%':
            console.log(num1 % num2);
            break;

        default:
            console.log('Unknown operator sign');
            break;
    }
}

// mathOperations(5, 6, '+');