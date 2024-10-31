import project from "./project";

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
    expect(project.calculator.add(2, 2)).toBe(4);
    expect(project.calculator.subtract(2, 2)).toBe(0);
    expect(project.calculator.divide(2, 2)).toBe(1);
    expect(project.calculator.multiply(2, 2)).toBe(4);
});