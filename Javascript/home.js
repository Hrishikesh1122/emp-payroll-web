/*
Purpose :- JavaScript functions for home page.
@author :- Hrishikesh
@Version :- 1.0
@Since :- 19/07/2021
*/

/*
UC 6 
Local storage 
*/
let empPayrollList ;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmpPayrollDataFromstorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
});

const getEmpPayrollDataFromstorage = () => {
    return localStorage.getItem('empListLocal') ? JSON.parse(localStorage.getItem('empListLocal')) : [];
}

/*
This function loads Employee details
*/
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = getEmpPayrollDataFromstorage();
    for (const employee of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
    let employee = new EmployeePayroll(name,gender,deptArray,salary,startDate,notes)
            <td><img class="profile" src="${employee._profile}" alt=""></td>
            <td>${employee._name}</td>
            <td>${employee._gender}</td>
            <td>${getDeptHtml(employee._department)}</td>
            <td>${employee._salary}</td>
            <td>${employee._startDate}</td>
            <td>
                <img name="${employee._id}" onclick="remove(this)" 
                    src="../assets/icons/delete-black-18dp.svg" alt="delete">
                <img name="${employee._id}" onclick="update(this)"
                    src="../assets/icons/create-black-18dp.svg" alt="edit">
            </td> 
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}

const remove=(node)=> {
    let empPayrollData=empPayrollList.find(empData=>empData._id==node.name);
    if(!empPayrollData) {
        return;
    }
    const index=empPayrollList.map(empData=>empData._id).indexOf(empPayrollData._id);
    empPayrollList.splice(index,1);
    localStorage.setItem("empListLocal", JSON.stringify(empPayrollList));
    document.querySelector('.emp-count').textContent=empPayrollList.length;
    createInnerHtml();
}