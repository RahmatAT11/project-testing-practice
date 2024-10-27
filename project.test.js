import project from "./project"

test("Capitalize a string", () => {
    expect(project.capitalize("rahmat")).toEqual("Rahmat");
    expect(project.capitalize("RAHMAT")).toEqual("RAHMAT");
    expect(project.capitalize("Rahmat")).toEqual("Rahmat");
    expect(project.capitalize("rAHMAT")).toEqual("RAHMAT");
});