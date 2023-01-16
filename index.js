class Doctor{
    constructor(name, specialty){
        this.name = name;
        this.speciality = speciality;
    }
    describe(){
        return `Dr. ${this.name} specializes in ${this.speciality}.`
    }
}

class Practice{
    constructor(officeName){
        this.officeName;
        this.doctors= [];
    }
    addDoctor(doctor){
        if(doctors instanceof Doctor){
this.doctors.push(doctor);
        }else{
            throw new Error(`You can only add instance of Doctor. Argument is not a doctor: ${doctors}. Try again.`);
        }
    }
    describe(){
        return `${this.name} is a part of a practice with ${this.doctors.length} doctors.`;
    }
}

