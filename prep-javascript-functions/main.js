function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

addTwoNumbers(2, 2);

function convertHoursToMinutes(hour) {
  var minutes = hour * 60;
  return minutes;
}
convertHoursToMinutes(2);

function getGreeting(name) {
  return 'Hello ' + name;
}

getGreeting('Sang');

function addAndMultiplyBy5(num1, num2) {
  var sum = num1 + num2;
  return sum * 5;
}

addAndMultiplyBy5(19, 2);

function multiplyAndDivideBy5(num1, num2) {
  var multiplyResults = num1 * num2;
  return multiplyResults / 5;
}

multiplyAndDivideBy5(2, 25);

function subtractTwoNumber(num1, num2) {
  return num1 - num2;
}

subtractTwoNumber(5, 3);

function getCircleCircumference(radius) {
  const pi = 3.14;
  var circumferenceResult = 2 * pi * radius;
  return circumferenceResult;
}

getCircleCircumference(4);

function getFullname(firstName, lastName) {
  return firstName + ' ' + lastName;
}

getFullname('Sang', 'Tran');

function cube(number) {
  return number ** 3;
}

cube(10);
