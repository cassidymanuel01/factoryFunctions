function practice(name, hours, rate) {
    return {
        name: name,
        salary: ()=>{
            return hours * rate;
        },
        display: () => {
            document.write(`
            <br>Name: ${name} <br>
                Salary: ${hours * rate}<br>`
            );
        }
    }
}

let employee1 = practice('Peter', 40, 500);
let employee2 = practice('Samuel', 80, 300);

employee1.display();
employee2.display();
