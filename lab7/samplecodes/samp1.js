class Student {
    constructor(name, rollno) {
        this.name = name;
        this.rollno = rollno;
    }

    display() {
        console.log(this.name + " - " + this.rollno);
    }
}

let l1 = new Student("Thrilok", 341); 
l1.display(); 