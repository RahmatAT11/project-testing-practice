import project from "./project"

test("Capitalize a string", () => {
    expect(project.capitalize("rahmat")).toEqual("Rahmat");
    expect(project.capitalize("RAHMAT")).toEqual("RAHMAT");
    expect(project.capitalize("Rahmat")).toEqual("Rahmat");
    expect(project.capitalize("rAHMAT")).toEqual("RAHMAT");

    expect(project.capitalize("rahmat", 'alrafi', 'trikada')).toEqual('Rahmat Alrafi Trikada');
});

// test("Reverse a string", () => {
//     expect(project.reverseString("Rahmat")).toEqual("tamhaR");
// })