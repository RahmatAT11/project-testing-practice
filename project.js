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

module.exports = { capitalize };
