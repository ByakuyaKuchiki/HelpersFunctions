// Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the maximum value.

// The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

// 0 1 1 2 3 5 8 13 21...

const fibonacci = num => {
    var fibArr = [0,1];
    // for()
}

const fibonacciElt = num => {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}