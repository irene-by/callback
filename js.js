let foo = function foo (num1, num2){
    return num2+num1;
};

function sum(num1, foo) {
    console.log(num1+ foo(5, 5));
}


sum(5, foo);

