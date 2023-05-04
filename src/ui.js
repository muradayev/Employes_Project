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

    toggleUpdateButton(targetEmployee) {
        if (this.updateEmpBtn.style.display === "none") {
            this.updateEmpBtn.style.display = "block"
            this.addEmployeeInfoToInputs(targetEmployee)
        }
        else {
            this.updateEmpBtn.style.display = "none"
            this.clearInputs()
        }
    }

    addEmployeeInfoToInputs(targetEmployee) {
        const children = targetEmployee.children

        this.nameInput.value = children[0].textContent
        this.departmentInput.value = children[1].textContent
        this.salaryInput.value = children[2].textContent

    }

    updateEmployeeOnUI(updatedEmployee, parent) {
        parent.innerHTML = `
                <tr>
                    <td>${updatedEmployee.name}</td>
                    <td>${updatedEmployee.department}</td>
                    <td>${updatedEmployee.salary}</td>
                    <td>${updatedEmployee.id}</td>
                    <td><a href="#" id="update-employee" class="btn btn-success">Update</a></td>
                    <td> <a href="#" id="delete-employee" class="btn btn-danger">Delete</a></td>
                </tr>
            `
    }

    clearInputs() {
        this.nameInput.value = ""
        this.salaryInput.value = ""
        this.departmentInput.value = ""
    }

} // end of UI class