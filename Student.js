class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

    stringGPA() {
        return this.gpa.toString();
    }

    get level() {
        if (this.credits > 90 ) {
            return 'Senior';
        } else if (this.credits > 60) {
            return 'Junior';
        } else if (this.credits > 30) {
            return 'Sophomore';
        } else {
            return 'Freshman';
        }
    }

    get major(){
        return this._major;
    }

    set major(major){

        if(this.level === 'Junior' || this.level === 'Senior'){
            this._major = major;
        } else if(this.level === 'Freshman' || this.level === 'Sophomore'){
            this._major = 'None';
        }
    }
}

var student = new Student(3.9, 60);

