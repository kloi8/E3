num = 15;

function getNum(num) {

    if (num >= 1000 && typeof num != 'number' && num <= 1) {
        return 'Некорректное число, введите значение от 1 и не больше 1000 ';
    } else if (num === 2) {
        return `Число ${num} простое`;
    } else {
        for (let i = 2; i <= num; i++){
            if (num % i === 0) {
                return `Число ${num} не простое`;
            } else {
                return `Число ${num} простое`
        }
    }
}
}

let res = getNum(num)
console.log(res)