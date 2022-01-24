

    //sequencia de fibonacci
function fibonacci(x) {
    let sequenciaFibonacci = [0, 1];

    //condição de parada
    if (x < 0) {
        return 'O número deve ser maior que zero';
    }

    //condição de parada
    if (x === 0) {
        return [];
    }

    //condição de parada
    if (x === 1) {
        return [0];
    }

    //condição de parada
    if (x === 2) {
        return [0, 1];
    }

    //loop
    for (i = 2; i <= x - 1; i++) {
        sequenciaFibonacci[i] = sequenciaFibonacci[i - 2] + sequenciaFibonacci[i - 1];
    }

    return sequenciaFibonacci;

}

console.log(fibonacci(10));
