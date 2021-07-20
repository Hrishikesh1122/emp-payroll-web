/*
Purpose :- Contains JSON object for employee data.
Note :- This file is currently not in use for home.html as local storage is used.
@author :- Hrishikesh
@Version :- 1.0
@Since :- 19/07/2021
*/


/*
JSON Object for employees
*/
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [{
            _name: 'Rohan',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '50000',
            _startDate: '29 Oct 2019',
            _notes: '',
            _id: new Date().getTime(),
            _profile: '../assets/profile-images/Ellipse -1.png'
        },
        {
            _name: 'Julia',
            _gender: 'female',
            _department: [
                'Sales',
            ],
            _salary: '40000',
            _startDate: '29 Oct 2019',
            _notes: '',
            _id: new Date().getTime(),
            _profile: '../assets/profile-images/Ellipse -8.png'
        }
    ];
    return empPayrollListLocal;
}