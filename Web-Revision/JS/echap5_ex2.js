function loop(value, test, update, body) {
    for (let current = value; test(current); current = update(current)) {
        body(current);
    }
}

// Example usage:
loop(3, n => n > 0, n => n - 1, console.log);
// Output:
// 3
// 2
// 1
