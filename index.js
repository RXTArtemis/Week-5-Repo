class Doctor{
    constructor(name, specialty){
        this.name = name;
        this.specialty = specialty;
    }
    describe(){
        return `Dr. ${this.name} specializes in ${this.specialty}.`
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
        return `${this.name} is a part of a practice of ${this.doctors.length} doctors.`;
    }
}

class Menu{
    constructor(){
        this.doctors = [];
        this.selectedDoctor = null;
    }
    start(){
        let selection = showAllMenuOptions();
        while(selection != 0) {
            switch (selection){
                case '1':
                    this.createNewDoctor();
                    break;
                case '2':
                    this.viewDoctor();
                    break;
                case '3':
                    this.removeDoctor();
                    break;
                case '4':
                    this.displayDoctors();
                    break;
                default:
                    selection = 0;       
            }
            selection = this.showAllMenuOptions();
        }
        alert('Goodbye! Have a great day!');
    }

    showAllMenuOptions(){
        return prompt(`
        0)exit
        1)create new doctor
        2)view doctor
        3)remove doctor
        4)display all doctors
        `);
    }

    showAllMenuOptions(doctorInfo){
        return prompt(`
        0) back
        1)create doctor
        2)delete doctor
        ------------------
        ${doctorInfo}
        `);
    }

    displayDoctors(){
        let doctorString ='';
        for(let i = 0; i < this.doctors.length; i++){
        doctorString += i + `) ` + this.doctors[i].name + '\n';
        }
        alert(doctorString);
    }

    createNewDoctor(){
        let name = prompt('Enter Doctor Name.');
        this.doctors.push(new Doctor(name));
    }

   viewDoctor(){
    let index= prompt('Enter the index of the doctor you would like to see.');
    if(index > -1 && index < this.teams.length){
      this.selectedDoctor=this.doctors[index]; 
      let description = "Doctor Name:" + this.selectedDoctor.name + '\n';
      
      for(let i = 0; i < this.selectedDoctor.doctors.length; i++){
        description += i + ') ' + this.selectedDoctor.doctors[i].name 
        + '-'+ this.selectedDoctor.doctors[i].specialty + '\n';
      }
      let selection = this.showAllMenuOptions(description);
      switch(subSelection){
        case '1':
            this.createNewDoctor();
            break;
        case '2':
            this.removeDoctor();
      }
    }
   } 

   createNewDoctor(){
    let name = prompt("Enter name for new doctor.");
    let speciality = prompt("Enter new specialty.");
    this.selectedDoctor.doctors.push(new Doctor(name, specialty));
   }

   deleteDoctor(){
    let index = prompt('Enter the index of doctor you would like to remove.');
    if(index > -1 && index < this.selectedDoctor.doctors.length){
        this.selectedDoctor.doctors.splice(index, 1);
    }
   }
}

let menu = new Menu();
menu.start();