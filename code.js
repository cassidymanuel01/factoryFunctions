function practice(name, hours, rate) {
    return {
        name: name,
        salary: ()=>{
            return hours * rate;
        },
    }
}

let employee1 = practice('Peter', 40, 500);
let employee2 = practice('Samuel', 80, 300);

document.write(`<br>Name: ${employee1.name}<br>
Salary: R ${employee1.salary()}<br>`) ;
document.write(`<br>Name: ${employee2.name}<br>
Salary: R ${employee2.salary()}<br>`) ;
