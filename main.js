let plus = document.getElementById("plus");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");
let clear = document.getElementById("clear");
let dec = document.getElementById("dec");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

let equal = document.getElementById("equal");

let output = document.getElementById("output");
let operations = "";
let check = undefined;

equal.addEventListener("click", () => {
  check = true;
  output.innerText = eval(operations);
});


clear.addEventListener("click", () => {
  operations = "";
  output.innerText = operations;
});

//Operations function 
function operate(operator){
  operator.addEventListener("click", () => {
  operations = operations.concat(operator.value);
  output.innerText = operations;
});
}

operate(plus)
operate(sub)
operate(mul)
operate(div)

//Number Calling function
function numberPrinter(num){
  num.addEventListener("click", () => {
  if (check) {
    operations = "";
    check = false;
  }
  operations = operations.concat(num.value);
  output.innerText = operations;
});
}

numberPrinter(one)
numberPrinter(two)
numberPrinter(three)
numberPrinter(four)
numberPrinter(five)
numberPrinter(six)
numberPrinter(seven)
numberPrinter(eight)
numberPrinter(nine)
numberPrinter(zero)
numberPrinter(dec)