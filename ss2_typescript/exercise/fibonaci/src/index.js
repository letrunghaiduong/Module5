// happy coding 👻
var fibonaci = function (num) {
    if (num <= 1) {
        return num;
    }
    return fibonaci(num - 1) + fibonaci(num - 2);
};
var sum = 0;
var num = 10;
console.log("Dãy 10 số fibonacci: ");
for (var i = 0; i < num; i++) {
    console.log(fibonaci(i));
    sum += fibonaci(i);
}
console.log("Tổng: " + sum);
