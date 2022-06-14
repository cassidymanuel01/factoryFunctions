function practice(name, hours, rate) {
    return {
        name: name,
        salary: ()=>{
            return hours * rate;
        }
    }
}

let employee1 = practice('Peter', 40, 500);
let employee2 = practice('Samuel', 80, 300);

document.write(employee1.salary());
document.write(employee2.salary());
