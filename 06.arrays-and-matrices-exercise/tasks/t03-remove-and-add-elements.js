function solve(arrayOfCommands) {
    const result = [];
    for (let i = 0; i < arrayOfCommands.length; i += 1) {
        if (arrayOfCommands[i] === 'add')
            result.push(i + 1);
        else
            result.pop();
    }

    if (result.length === 0)
        console.log('Empty');
    else
        result.forEach(e => console.log(e));
}

// solve(['remove',
//     'remove',
//     'remove']
// );