class EmployeePayroll{
    constructor(...params){
        this.name = params[0];
        this.gender=params[1];
        this.department = params[2];
        this.salary = params[3];
        this.startDate = params[4];
        this.notes = params[5];     
    }
    toString(){
        return ("Name : "+this.name+" Gender : "+this.gender+" Departments : "+this.department+" Salary : "+this.salary+" StartDate : "
        +this.startDate +" Notes : "+this.notes); 
    }
}

const salary = document.querySelector('#salary')
const output = document.querySelector('.salary-output')
output.textContent = salary.value;
salary.addEventListener('input',function(){
         output.textContent = salary.value;
        });



function save(){
    console.log("Hello")
    let name = document.querySelector('#name').value;
    let gender = document.querySelector('input[name=gender]:checked').value;
    let departments = document.querySelectorAll('input[name=dept]:checked');
    let deptArray=[];
    departments.forEach((department)=>{
        deptArray.push(department.value)
    })
    let salary = document.querySelector('#salary').value
    let day = document.querySelector('#day').value
    let month = document.querySelector('#month').value
    let year = document.querySelector('#year').value
    let dateStr = `${day}-${month}-${year}`;
    let parts = dateStr.split('-');
    let startDate = new Date(
        parseInt(parts[2]),
        parseInt(parts[1])-1,
        parseInt(parts[0])
    )
    let notes = document.querySelector('#notes').value

    try{
    let employee = new EmployeePayroll(name,gender,deptArray,salary,startDate,notes)
    console.log(employee.toString());
    }
    catch (E){
        console.error(E)
    }
    
}
