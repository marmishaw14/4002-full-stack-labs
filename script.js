import employees from "./employees.js"
import departments from "./departments.js"

const employeeListNode = document.querySelector("#employees");

employees.forEach (employee => {
    // search through array of departments to extract name that applies to appropriate dept id mentioned in employees array.
    const department = departments.find(
        dept => dept.id === employee.departmentId
    );

    const employeeListElement = document.createElement("li");
    // employee and department object fields extracted to show specific information rather than entire JSON object in each list item.
    employeeListElement.innerText = `${employee.firstName} ${employee.lastName} ${department.name}`;
    employeeListNode.appendChild(employeeListElement);
});

// using dynamic footer to automatically show current year, avoiding manual updates when new year rolls over: http://codeeverydamnday.hashnode.dev/add-a-dynamic-copyright-year-to-your-website-footer-in-60-seconds 
const footerYear = document.querySelectorAll(".year");
footerYear.forEach(copyright => {
    copyright.innerHTML = new Date().getFullYear();
});