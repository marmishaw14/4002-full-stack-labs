import Header from "../header/Header";
import Footer from "../footer/Footer";
import { employees } from "../../../data/employeeData";
import "./EmployeeDirectory.css";

export default function EmployeeDirectory() {
    return (
        <>
            <Header />
            <ListEmployeeInfo />
            <Footer />
        </>
    )
}

function ListEmployeeInfo() {
    return (
        <ul>
            {employees.map((employee) => 
            <li key={employee.id}>
                {employee.employeeFirstName} {employee.employeeLastName} {employee.department}
            </li>)}
        </ul>
    )
}