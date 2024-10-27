function capitalize(str) {
  let newStr = str.at(0).toUpperCase() + str.slice(1, str.length);
  return newStr;
}

module.exports = { capitalize };
