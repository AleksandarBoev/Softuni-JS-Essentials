function functionalCalculator(num1, num2, operatorSign) {
    const sum = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;
    const multiply = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num1 / num2;
    const divideModule = (num1, num2) => num1 % num2;
    const power = (num, powerTo) => num ** powerTo;

    const operationsFunctions = {
        '+' : sum,
        '-' : subtract,
        '*' : multiply,
        '/' : divide,
        '%' : divideModule,
        '**' : power
    };

    console.log(operationsFunctions[operatorSign](num1, num2));
}

// functionalCalculator(3, 5, '**');