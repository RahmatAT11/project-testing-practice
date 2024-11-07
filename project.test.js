import project from "./project";
import { Calculator } from "./project";

test("Capitalize a string", () => {
  expect(project.capitalize("rahmat")).toEqual("Rahmat");
  expect(project.capitalize("RAHMAT")).toEqual("RAHMAT");
  expect(project.capitalize("Rahmat")).toEqual("Rahmat");
  expect(project.capitalize("rAHMAT")).toEqual("RAHMAT");

  expect(project.capitalize("rahmat", "alrafi", "trikada")).toEqual(
    "Rahmat Alrafi Trikada"
  );
});

test("Reverse a string", () => {
  expect(project.reverseString("Rahmat")).toEqual("tamhaR");
  expect(project.reverseString("rahmat", "alrafi", "trikada")).toEqual([
    "tamhar",
    "ifarla",
    "adakirt",
  ]);
});

test("Test calculator's basic functionality", () => {
    expect(Calculator.add(2, 2)).toBe(4);
    expect(Calculator.subtract(2, 2)).toBe(0);
    expect(Calculator.divide(2, 2)).toBe(1);
    expect(Calculator.multiply(2, 2)).toBe(4);
});

test("Test Caesar's cipher", () => {
  expect(project.caesarCipher('xyz', 3)).toEqual('abc');
  expect(project.caesarCipher('abcd!!!!!, wxyz', 4)).toEqual('efgh!!!!!, abcd');
});