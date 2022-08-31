const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "Tom Borlin";
    const employeeInstance = new Engineer("Tom", 2, "Tomborlin@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Tom Borlin";
    const employeeInstance = new Engineer("Tom", 2, "Tomborlin@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Tom", 2, "Tomborlin@gmail.com", "Tomborlin");
    expect(employeeInstance.getRole()).toBe(returnValue);
});