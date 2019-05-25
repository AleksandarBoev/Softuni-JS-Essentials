function solve() {
    const step = Number.parseInt(arguments[0][arguments[0].length - 1]);
    for (let i = 0; i < arguments[0].length - 1; i += step)
        console.log(arguments[0][i]);
}