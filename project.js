function capitalize(...str) {
  console.log(str);
  if (str.length === 1) {
    let newStr = str[0].at(0).toUpperCase() + str[0].slice(1, str[0].length);
    return newStr;
  } else {
    let newCombStr = "";
    str.forEach((element, index) => {
      let capStr =
        element.at(0).toUpperCase() + element.slice(1, element.length);

      if (index === 0) {
        newCombStr += capStr;
        return;
      }
      newCombStr += " " + capStr;
    });

    return newCombStr;
  }
}

function reverseString(...str) {
  if (str.length === 1) {
    return str[0].split("").reverse().join("");
  } else {
    let arrOfReverse = [];
    str.forEach((value) => {
      arrOfReverse.push(value.split("").reverse().join(""));
    });

    return arrOfReverse;
  }
}

const calculator = () => {
  const add = (a, b) => {
    return a + b;
  }

  const subtract = (a, b) => {
    return a - b;
  }

  const divide = (a, b) => {
    return Math.floor(a / b);
  }

  const multiply = (a, b) => {
    return Math.floor(a * b);
  }

  return { add, subtract, divide, multiply };
};

module.exports = { capitalize, reverseString, calculator };
