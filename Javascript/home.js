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
let empPayrollList =[];
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmpPayrollDataFromstorage();
   // document.querySelector(".emp-count").textContent = empPayrollList.length;
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
    if(empPayrollList.length == 0 ) return;
    let innerHtml = `${headerHtml}`;
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" src="${empPayrollData._profile}" alt=""></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name="${empPayrollData._id}" onclick="remove(this)" 
                    src="../assets/icons/delete-black-18dp.svg" alt="delete">
                <img name="${empPayrollData._id}" onclick="update(this)"
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
