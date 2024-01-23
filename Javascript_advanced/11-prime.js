function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

const startTime = performance.now();

function execute100Times() {
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
const endTime = performance.now();

const timeUsed = endTime - startTime;

console.log('Execution time of printing countPrimeNumbers was ' + timeUsed + ' milliseconds.');
}

setTimeout(execute100Times, 0);
