export class UI {
    constructor() {
        this.employesList = document.getElementById("employees")
        this.updateEmpBtn = document.getElementById("update")
        this.nameInput = document.getElementById("name")
        this.departmentInput = document.getElementById("department")
        this.salaryInput = document.getElementById("salary")
    }

    addAllEmployesToUI(employes) {
        let result = ""

        employes.forEach(emp => {
            result += `
                <tr>
                    <td>${emp.name}</td>
                    <td>${emp.department}</td>
                    <td>${emp.salary}</td>
                    <td>${emp.id}</td>
                    <td><a href="#" id="update-employee" class="btn btn-success">Update</a></td>
                    <td> <a href="#" id="delete-employee" class="btn btn-danger">Delete</a></td>
                </tr>
            `
        })

        this.employesList.innerHTML += result
    }

    addEmployeeToUI(newEmployee) {
        this.employesList.innerHTML += `
                <tr>
                    <td>${newEmployee.name}</td>
                    <td>${newEmployee.department}</td>
                    <td>${newEmployee.salary}</td>
                    <td>${newEmployee.id}</td>
                    <td><a href="#" id="update-employee" class="btn btn-success">Update</a></td>
                    <td> <a href="#" id="delete-employee" class="btn btn-danger">Delete</a></td>
                </tr>
            `
    }

    deleteEmployeeFromUI(parentElement) {
        parentElement.remove()
    }

    clearInputs() {
        this.nameInput.value = ""
        this.salaryInput.value = ""
        this.departmentInput.value = ""
    }

} // end of UI class