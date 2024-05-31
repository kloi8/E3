function getSum(a) {
    return function(b) {
        return a + b
    }
};

let sumFunction = getSum(4);
const sum = sumFunction(3)

console.log(sum)