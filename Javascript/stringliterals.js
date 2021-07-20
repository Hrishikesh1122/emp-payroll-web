/*
Purpose :- Display table using string literals.
Note :- This file is currently not in use for home.html as JSON object is used
@author :- Hrishikesh
@Version :- 1.0
@Since :- 19/07/2021
*/

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//Use of string literals to create inner Html
const createInnerHtml = () => {
    const innerHtml = `     
    <tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>StartDate</th>
    <th>Actions</th>
</tr>
<tr>
    <td>
        <img src="../assets/profile-images/Ellipse -2.png" class="profile" alt="">
    </td>
    <td>Hrishi</td>
    <td>Male</td>
    <td><div class="dept-label">Sales</div>
    <div class="dept-label">Finance</div></td>
    <td>300000</td>
    <td>1 Nov 2020</td>
    <td>
        <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img src="../assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
    </td>
</tr>`;

document.querySelector('#display').innerHTML = innerHtml;
}