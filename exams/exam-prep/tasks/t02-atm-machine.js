//tried doing the task with a big object. Probably not the best way of doing it.
function atmMachine(arrayOfArrays) {
    const atmMachineObject = () => {
        const moneyBills = {};
        let moneyBillsKeys = [];

        const getTotalAmount = () => {
            let result = 0;
            for (const currentBill in moneyBills) {
                result += moneyBills[currentBill] * Number.parseInt(currentBill);
            }

            return result;
        };

        const updateMoneyBillKeys = () => moneyBillsKeys = Object.keys(moneyBills).reverse();

        return {
            insertMoney: arrayOfMoneyBills => {
                let needsUpdate = false;
                for (const moneyBill of arrayOfMoneyBills) {
                    if (moneyBills[moneyBill] === undefined) {
                        moneyBills[moneyBill] = 0;
                        needsUpdate = true;
                    }

                    moneyBills[moneyBill] += 1;
                }

                if (needsUpdate) {
                    updateMoneyBillKeys();
                }

                console.log(`Service Report: ${arrayOfMoneyBills.reduce((a, c) => a + c, 0)}$ inserted. ` +
                    `Current balance: ${getTotalAmount()}$.`);
            },
            drawMoney: array => {
                const balance = array[0];
                let amount = array[1];

                if (balance < amount) {
                    console.log(`Not enough money in your account. Account balance: ${balance}$.`);
                    return;
                }

                if (amount > getTotalAmount()) {
                    console.log('ATM machine is out of order!');
                    return;
                }

                let drawnMoney = 0;
                for (let currentMoneyBill of moneyBillsKeys) {
                    const currentMoneyBillValue = Number.parseInt(currentMoneyBill);

                    while (amount >= currentMoneyBillValue && moneyBills[currentMoneyBill] > 0) {
                        amount -= currentMoneyBillValue;
                        moneyBills[currentMoneyBill] -= 1;
                    }
                }

                console.log(`You get ${array[1]}$. Account balance: ${balance - array[1]}$. Thank you!`)
            },

            report: array => {
                const moneyBill = array[0];
                console.log(`Service Report: Banknotes from ${moneyBill}$: ${moneyBills[String(moneyBill)]}.`);
            }
        }
    };

    const atmMachineObj = atmMachineObject();

    for (const currentArray of arrayOfArrays) {
        if (currentArray.length > 2) {
            atmMachineObj.insertMoney(currentArray);
        } else if (currentArray.length === 2) {
            atmMachineObj.drawMoney(currentArray);
        } else {
            atmMachineObj.report(currentArray);
        }
    }
}

// atmMachine([[20, 5, 100, 20, 1],
//         [457, 25],
//         [1],
//         [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
//         [20, 85],
//         [5000, 4500],
//     ]
// );



