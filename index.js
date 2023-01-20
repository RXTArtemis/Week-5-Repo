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
        this.officeName = officeName;
        this.doctors= [];
    }
    addDoctor(doctor){
     if(doctors instanceof Doctor){
        this.doctors.push(doctor);
        }else{
            throw new Error(`You can only add instance of Doctor. Argument is not a doctor: ${doctors}. Try again.`);
        }
    }
    addPractice(officeName){
        if(officeName instanceof Practice){
            this.practices.push(officeName);
        }else{
            alert('Function not permitted. Only add instance of Practice.');
        }
    }

    describe(){
        return `${this.name} is a part of a practice of ${this.doctors.length} doctors.`;
    }
}

class Menu{
    constructor(){
        this.practices = [];
        this.selectedDoctor = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while(selection != 0) {
            switch (selection){
                case '1':
                    this.createNewPractice();
                    break;
                case '2':
                    this.viewPractice();
                    break;
                case '3':
                    this.deletePractice();
                    break;
                case '4':
                    this.displayAllPractices();
                    break;
                default:
                    selection = 0;       
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye! Have a great day!');
    }
    showMainMenuOptions(){
        return prompt(`
        0)exit
        1)create new practice
        2)view practice
        3)delete practice
        4)display all practices
        `);
    }

    showPracticeMenuOptions(practiceInfo){
        return prompt(`
        0)back
        1)create doctor
        2)remove doctor
        ------------------
        ${practiceInfo}
        `);
    }
    displayAllPractices(){
        let practiceString = " ";
        for(let i = 0; i < this.practices.length; i++){
        practiceString += i + `) ` + this.practices[i].officeName + '\n';
        }
        alert(practiceString);
        }
    
    createNewPractice(){
        let name = prompt('Enter Practice Name.');
        this.practices.push(new Practice(name));
    }

    viewPractice(){
    let index= prompt('Enter the index of the practice you would like to see.');
    if(index > -1 && index < this.practices.length){
      this.selectedPractice=this.practices[index]; 
      let description = `Practice Name:${this.selectedPractice.officeName}\n`;
      
      for(let i = 0; i < this.selectedPractice.doctors.length; i++){
        description += i + ') ' + this.selectedPractice.doctors[i].name 
        + '-'+ this.selectedPractice.doctors[i].specialty + '\n';
      }

      let selection = this.showPracticeMenuOptions(description);
      switch(selection){
        case '1':
            this.createNewDoctor();
            break;
        case '2':
            this.removeDoctor();
      }
    }
}
deletePractice(){
    let index = prompt('Enter the index of the practice you wish to remove.');
    if(index> -1 && index < this.practices.length){
        this.practices.splice(index, 1);
             }
         }

 createNewDoctor(){
    let name = prompt("Enter name for new doctor.");
    let specialty = prompt("Enter new specialty.");
    this.selectedPractice.doctors.push(new Doctor(name,specialty));
    }
   removeDoctor(){
    let index = prompt('Enter the index of doctor you would like to remove.');
    if(index > -1 && index < this.selectedPractice.doctors.length){
        this.selectedPractice.doctors.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();