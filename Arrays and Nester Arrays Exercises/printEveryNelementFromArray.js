function solve(arr, step) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (i % step === 0) {
            result.push(element);
        }
    }
    return result;
}
solve(["5", "20", "31", "4", "20"], 2);
