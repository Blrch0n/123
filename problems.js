// 1
let mas = [
    1,
    6,
    2,
    3,
    4,
    5
];
let mas2 = [
    5,
    6,
    1,
    4,
    7,
    9
];
let mas3 = [
    3,
    4,
    5,
    7,
    8,
    2,
    3
];
let a = 2,
    b = 4;
let name = "helo";
function sum1(mas1) {
    let ans = 0;
    for (let i = 0; i < mas1.length; i++) {
        ans += mas1[i];
    }
    return ans;
}
console.log("1.)", sum1(mas));
// 2
function sum2(mas1) {
    let ans = 0;
    for (let i = 0; i < mas1.length; i++) {
        ans += mas1[i];
    }
    return ans / mas1.length;
}
console.log("2.)", sum2(mas));
// 3
function pow3(a1, b1) {
    let ans = a1;
    if (b1 == 0) {
        ans = 1;
    } else {
        for (i = 1; i < b1; i ++) {
            ans = ans * a1;
        }
    }
    return ans;
}
console.log("3.)", pow3(a, b));
// 4
function great4(mas) {
    let ans = 0;
    for (let i = 0; i < mas.length; i++) {
        if (ans <= mas[i]) {
            ans = mas[i];
        }
    }
    return ans;
}
console.log("4.)", great4(mas));
// 5
function reverseWord(string1) {
    let extra = [];
    let name = "";
    let length = string1.length;
    for (let i = 1; i <= length; i++) {
        name += string1[length - i];
    }
    return name;
}
console.log("5.)", reverseWord(name));
// 6
function checkString(string1) {
    for (let i = 0; i < string1.length; i++) {
        for (let y = i + 1; y < string1.length; y++) {
            if ((string1[i] == string1[y])) {
                return false;
            }
        }
    }
    return true;
}
console.log("6.)", checkString("Bolor"));
// 7
function commonNumber(mas1, mas2) {
    for (let i = 0; i < mas1.length; i++) {
        for (let j = 0; mas2.length; j++) {
            if (mas1[i] == mas2[j]) {
                return [i, j];
            }
        }
    }
}
console.log("7.)", commonNumber(mas, mas2));
// 8
console.log("8.)")
function pyramid(number1) {
    let n = number1;
    let string = "";
    // External loop
    for (let i = 1; i <= n; i++) { // printing spaces
        for (let j = 1; j <= n - i; j++) {
            string += " ";
        }
        // printing star
        for (let k = 0; k < 2 * i - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}
pyramid(5)
// 9
function factorial(number1) {
    let ans = 1;
    for (let i = 1; i <= number1; i++) {
        ans *= i;
    }
    return ans;
}
console.log("9.)", factorial(3));
// 10
function evenNumber(number2) {
    let numbers = '';
    for (let i = 1; i <= number2; i++) {
        if (i % 2 == 0) {
            numbers += i + " ";
        }
    }
    console.log("10.)", numbers);
}
evenNumber(5);
// 11
function isPalindrome(x) {
    let number = String(x);
    let length = number.length;
    let y = 0;
    for (let i = 0; i < length / 2; i++) {
        if (number[i] == number[(length - 1) - i]) {} else {
            y++;
        }
    }
    if (y == 0) {
        return true;
    } else {
        return false;
    }
};
console.log("11.)", isPalindrome(1221));
// 12
function PrimeNumber(number1) {
    let times = 0;
    for (let i = 1; i <= number1; i++) {
        if (number1 % i == 0) {
            times++;
        }
    }
    if (times == 2) {
        return true;
    } else {
        return false;
    }
}
console.log("12.)", PrimeNumber(3));
// 13
function EveryPrimeNumber(number1) {
    let times = 0;
    let print = [];
    let array = '';
    for (let j = 1; j <= number1; j++) {
        for (let i = 1; i <= j; i++) {
            if (j % i == 0) {
                times++;
            }
        }
        if (times == 2) {
            array += j + " ";
        }
        times = 0;
    }
    console.log("13.)", array);
}
EveryPrimeNumber(100);
// 14
function fibonacci(number1) {
    let mas = [];
    let array = "";
    for (let y = 0; y < number1; y++) {
        mas[y] = 1;
    }
    for (let i = 2; i < number1; i++) {
        mas[i] = mas[i - 1] + mas[i - 2];
    }
    for (let j = 0; j < number1; j++) {
        array += mas[j] + " ";
    }
    console.log("14.)", array);
}
fibonacci(12);
// 15
function sliceArray(mas) {
    // for (let i = 0;) 
    
}
sliceArray();
