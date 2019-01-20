class Human {
    constructor(name, age, dateOfBirth) {
        Object.assign(this, {name, age, dateOfBirth});

    }

    displayInfo() {
        return Object.values(this).join(', ')
    }
}

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        Object.assign(this, {salary, department});

    }

    displayInfo() {
        return super.displayInfo(this);
    }
}

class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department, developers = []) {
        super(name, age, dateOfBirth, salary, department);

        Object.assign(this, {developers});
    }

    addDeveloper(developer) {
        this.developers.push(developer);
    }

    removeDeveloper(developer) {
        let index = this.developers.indexOf(developer);
        if (index > -1) {
            this.developers.splice(index, 1);
        }
    }
}

class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department, manager) {
        super(name, age, dateOfBirth, salary, department);

        Object.assign(this, {manager});
    }

    setManager (manager) {
        this.manager = manager
    }
}

const myHuman = new Human('Leno', 32, '25.09.86');
const myHumanInfo = myHuman.displayInfo();
//console.log(myHumanInfo);

const myEmployee = new Employee('Dan', 25, '25.09.91', 3000, 'Research');
const myEmployeeInfo = myEmployee.displayInfo();
//console.log(myEmployeeInfo);

const myManager = new Manager('Jill', 25, '25.09.91', 3000, 'Research');
const myDeveloper = new Developer('Ben', 25, '25.09.91', 3000, 'Internal', myManager);
//console.log(myDeveloper);

const myOtherManager = new Manager('Gal', 25, '25.09.91', 3000, 'Development');
//этот девелопер для того чтобы кому-то заасайнить myOtherManager в качестве менеджера
const myOtherDeveloper = new Developer('Praveen', 25, '25.09.91', 3000, 'External', myOtherManager);
const myNextDeveloper = new Developer('Pam', 25, '25.09.91', 3000, 'External', myManager);

myOtherManager.addDeveloper(myNextDeveloper);
console.log(myOtherManager);
console.log('-----');

myOtherManager.removeDeveloper(myNextDeveloper);
console.log(myOtherManager);

myDeveloper.setManager(myOtherManager);
//console.log(myDeveloper);

