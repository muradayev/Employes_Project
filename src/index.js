import { Requests } from "./requests"
import { UI } from "./ui"

const form = document.getElementById("employee-form")
const nameInput = document.getElementById("name")
const departmentInput = document.getElementById("department")
const salaryInput = document.getElementById("salary")
const employesList = document.getElementById("employees")
const updateEmpBtn = document.getElementById("update")

const request = new Requests("http://localhost:3000/employees")
const ui = new UI()

eventListeners()

function eventListeners() {
    document.addEventListener("DOMContentLoaded", getAllEmployes)
    form.addEventListener("submit", addEmployee)
    employesList.addEventListener("click", updateOrDelete)
}

function getAllEmployes() {
    request.get()
        .then(emp => {
            ui.addAllEmployesToUI(emp)
        })
        .catch(err => console.error(err))
}

function addEmployee(e) {
    const newEmployeeName = nameInput.value
    const newEmployeeSalary = Number(salaryInput.value)
    const newEmployeeDepartment = departmentInput.value

    if (newEmployeeName === "" || newEmployeeSalary === "" || newEmployeeDepartment === "") {
        alert("Please, fill out the form!")
    }
    else {
        const newEmployee = {
            name: newEmployeeName,
            department: newEmployeeDepartment,
            salary: newEmployeeSalary
        }

        request.post(newEmployee)
            .then(newEmp => {
                ui.addEmployeeToUI(newEmp)
            })
            .catch(err => console.error(err))
    }

    ui.clearInputs()
    e.preventDefault()
}

function updateOrDelete(e) {
    if (e.target.id === "delete-employee") {
        deleteEmployee(e.target)
    }
    else if (e.target.id === "update-employee") {
        updateEmployeeController(e.target.parentElement.parentElement)
    }
}

function deleteEmployee(targetEmployee) {
    const employeeId = targetEmployee
        .parentElement
        .previousElementSibling
        .previousElementSibling.textContent

    request.delete(employeeId)
        .then(msg => {
            const parentElement = targetEmployee.parentElement.parentElement
            ui.deleteEmployeeFromUI(parentElement)
        })
        .catch(err => console.error(err))
}

function updateEmployeeController(targetEmployee) {
    ui.toggleUpdateButton(targetEmployee)
}