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

const calculator = {
  add: (a, b) => {
    return a + b;
  },

  subtract: (a, b) => {
    return a - b;
  },

  divide: (a, b) => {
    return Math.floor(a / b);
  },

  multiply: (a, b) => {
    return Math.floor(a * b);
  },
};

const caesarCipher = (str, move = 0) => {
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz".split("");
  let cipher = "";

  for (let i = 0; i < str.length; i++) {
    const properIndex = (upperLetters.indexOf(str[i]) + move) % upperLetters.length;
    if (upperLetters.includes(str[i])) {
      const properIndex = lowerLetters.indexOf(str[i]) + move;
      cipher += upperLetters.find((value, index) => {
        const properIndex = (index + move) % upperLetters.length;
        if (properIndex === index) {
          return value;
        }
      });

      continue;
    }

    if (lowerLetters.includes(str[i])) {
      const properIndex = (lowerLetters.indexOf(str[i]) + move) % lowerLetters.length;
      cipher += lowerLetters.find((value, index) => {
        if (properIndex === index) {
          return value;
        }
      });

      continue;
    }

    if (!upperLetters.includes(str[i]) && !lowerLetters.includes(str[i])) {
      cipher += str[i];
    }
  }
  return cipher;
};

module.exports = {
  capitalize,
  reverseString,
  get Calculator() {
    return calculator;
  },
  caesarCipher,
};
