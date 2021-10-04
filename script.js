// EXCERCISE-1--------------------------------------containsElement------------------------>

function containsElement(array, element) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] == element) return true;
  }
  return false;
}

function main() {
  console.log("Output of ContainsElement =>");
  let array = [1, 7, 1, 0, 5];
  let element = 1;
  let output = containsElement(array, element);
  console.log(output);
}
main();

// EXERCISE-2 ----------------------------------------indexOfElement---------------------->

function indexOfElement(array, element) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] == element) return i;
  }
  return -1;
}
function main1() {
  console.log("Output of indexOfElement =>");
  let array = [1, 7, 1, 0, 5];
  let num = 76;
  let output = indexOfElement(array, num);
  console.log(output);
}
main1();

// EXERCISE---------------------------------------------min------------------------------>

function minnimum(array) {
  let minValue = array[0]; // Assume that 1st elements of array is minnimum

  for (let i = 1; i < array.length; i += 1) {
    // When any [i] in array is less than assumed minimum, minValue update with the same [i].
    if (minValue > array[i]) {
      minValue = array[i];
    }
  }
  return minValue;
}

function main2() {
  console.log("Output of the minimum =>");
  let array = [1, 7, 1, 10, 5];
  let output = minnimum(array);
  console.log(output);
}
main2();

// EXERCISE-3 ---------------------------------------------max----------------------------->

function maximum(array) {
  let maxValue = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (maxValue < array[i]) maxValue = array[i];
  }
  return maxValue;
}

function main3() {
  console.log("Output of maximum => ");
  let array = [1, 7, 18, 10, 5];
  let output = maximum(array);
  console.log(output);
}
main3();

// EXERCISE -4 ------------------------------------------------sum---------------------------->

function sum(array) {
  let sumOf = 0;
  for (let i = 0; i < array.length; i += 1) {
    sumOf = sumOf + array[i];
  }
  return sumOf;
}

function main4() {
  console.log("Output of sum =>");
  let array = [1, 7, 4, 10, 5];
  let output = sum(array);
  console.log(output);
}
main4();

//  EXERCISE-5 ----------------------------------------------------mean------------------------->

function mean(array) {
  let sumOf = 0;
  for (let i = 0; i < array.length; i += 1) {
    sumOf = sumOf + array[i];
  }
  sumOf = sumOf / array.length;
  return sumOf;
}
function main5() {
  console.log("Output of mean =>");
  let array = [1, 7, 4, 10, 5];
  let output = mean(array);
  console.log(output);
}
main5();

// EXERCISE-6-------------------------------------------------------reverse------------------------>

function reverse(array) {
  let revOutPut = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    revOutPut.push(array[i]);
  }
  return revOutPut;
}
function main6() {
  console.log("Output of reverse =>");
  let array = ["olof", "arne", "bengt"];
  let output = reverse(array);
  console.log(output);
}
main6();

// EXERCISE - 7 ------------------------------------------------------filterOutPut------------------>

function filterOutPut(array, element) {
  let filterOutPut = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] == element) filterOutPut.push(array[i]); // Take only the expected element
  }
  return filterOutPut;
}
function main7() {
  console.log("Output of filterOutPut =>");
  let array = [1, 7, 1, 0, 5];
  let num = 5;
  let output = filterOutPut(array, num);
  console.log(output);
}
main7();

// EXERCISE-8--------------------------------------------------------------exclude--------------------->

function exclude(array, element) {
  let res = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] != element) res.push(array[i]); // Take all elements except only the specific element.
  }
  return res;
}
function main8() {
  console.log("Output of exclude =>");
  let array = [1, 7, 1, 0, 5];
  let num = 0;
  let output = exclude(array, num);
  console.log(output);
}
main8();

// EXERCISE-9--------------------------------------------------------------unique---------------------->

function unique(arr) {
  let res = [];
  res.push(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    let count = 0; // This is just counter

    // For checking every element in assumed variable..

    for (let j = 0; j < arr.length; j++) {
      if (res[j] == arr[i])
        // if same, count will increase, or this same ele is not be pushed..
        count++;
    }
    if (count == 0) res.push(arr[i]);
  }
  return res;
}

function main9() {
  console.log("Output of unique =>");
  let array = [1, 7, 1, 4, 0, 5, 0, 5, 6, 9, 9, 9];
  let output = unique(array);
  console.log(output);
}
main9();

// EXERCISE -----------------------------------------------------------------reverseString--------------->.

function revStrings(arr) {
  let arrayay = [];

  for (let i = 0; i < arr.length; i++) {
    let newStrings = ""; // To store all strings as just reverse strings here.

    for (let j = arr[i].length - 1; j >= 0; j--) {
      newStrings += arr[i][j]; // To send reverse strings to newStrings variable above.
    }
    arrayay.push(newStrings); // To send reverse strings stored in varible to arrayay (expected output).
  }

  return arrayay;
}

function main10() {
  console.log("Output of reverse strings =>");
  let arr = ["Hunty", "Bunty", "Munty"];
  let output = revStrings(arr);
  console.log(output);
}

main10();

// EXERCISE -------------------------------------------------------------------split----------------------->

function split(strings, delimiter) {
  let array = [];
  let prestrings = "";

  strings =
    strings + delimiter; /* Delimiter is added immidiate after the original 
                                 string to grab and push the last word of string.*/

  for (let i = 0; i < strings.length; i++) {
    let index = strings[i];

    if (index == delimiter) {
      array.push(prestrings);
      prestrings = "";
    } else {
      prestrings += index;
    }
  }
  return array;
}

function main11() {
  console.log("Output of split =>");
  let strings = "Kalle,Olof,Gösta";
  let delimiter = ",";
  let output = split(strings, delimiter);
  console.log(output);
}

main11();

// EXERCISE---------------------------------------------------------------join------------------------------>

function join(array, delimiter) {
  let newArray = [...array];
  newArray += delimiter;
  let newString = "";

  for (i = 0; i < newArray.length; i++) {
    let index = newArray[i];

    if (index != delimiter) {
      newString += index;
    }
  }
  newString = '"' + newString + '"';
  return newString;
}

function main12() {
  console.log("Output of join =>");
  let array = ["Kalle", "Olof", "Gösta"];
  let delimiter = " ";
  let output = join(array, delimiter);
  console.log(output);
}

main12();
