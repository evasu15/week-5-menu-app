class Exercise {
    constructor(name, reps) {
        this.name = name;
        this.reps = reps;
    }

    describe() {
        return `${this.name} did ${this.reps} reps.`
    }
}

class Workout {
    constructor(name){
        this.name = name;
        this.exercises = [];
    }

    addExercise(exercise) {
        if (exercise instanceof exercise) {
            this.exercise.push(play)
        } 
    }

    describe() {
        return `${this.name} has ${this.exercises.length} exercise(s).`;
    }
}

class Menu {
  constructor() {
    this.workouts = [];
    this.selectedWorkout = null 
  }

  start() {
    let selection = this.showMainMenuOptions();

    while (selection != 0) {
        switch (selection) {
            case '1':
                this.createWorkout();
                break;
            case '2':
                this.viewWorkout();
                break;
            case '3':
                this.deleteWorkout();
                break;
            case '4':
                this.displayWorkouts();
                break;
        
            default:
                selection = 0;
        }
        selection = this.showMainMenuOptions();
    }

    alert('Goodbye!');
  } 

  showMainMenuOptions() {
    return prompt( `
      0) exit
      1) Create a new workout
      2) view workout
      3) delete workout
      4) display all workout
    `);
  }

  showExerciseMenuOptions(exerciseInfo) {
    return prompt(`
        0) back
        1) create exercise
        2) delete exercise
        ----------------------
        ${exerciseInfo}
    `);
  }

  displayWorkouts() {
    let workoutString = '';
    if(this.workouts.length > 0) {
        for(let i = 0; i < this.workouts.length; i++) {
            workoutString += i + ') ' + this.workouts[i].describe() + '\n';
        }
    } else {
        workoutString = "No workouts!";
    }
    alert(workoutString);
  }

  createWorkout() {
    let name = prompt('Enter name for new workout:');
    this.workouts.push(new Workout(name));
  }

  deleteWorkout() {
    let index = prompt('Enter the index of the workout you wish to delete:');
    if(index > -1 && index < this.workouts.length) {
        this.workouts.splice(index, 1);
    }
  }

  viewWorkout() {
    let index = prompt('Enter the index of the workout you wish to view:');
    
    if (index > -1 && index < this.workouts.length) {
        this.selectedWorkout = this.workouts[index];
        let description = 'Workout Name: ' + this.selectedWorkout.name + '\n'

        if (this.selectedWorkout.exercises.length > 0){
            for (let i = 0; i < this.selectedWorkout.exercises.length; i++) {
                description += i + ') ' + this.selectedWorkout.exercises[i].describe() + '\n';
            } 
        } else {
            description += "No exercises!";
        }

        let selection = this.showExerciseMenuOptions(description);
        switch (selection) {
            case '1':
                this.createExercise();
                break;
            case '2':
                this.deleteExercise();
        }
    }
  }

  createExercise() {
    let workout = prompt('Enter name for new workout:');
    let reps = prompt('Enter number of reps for workout:');
    this.selectedWorkout.exercises.push(new Exercise(workout, reps))
  }

  deleteExercise() {
    let index = prompt('Enter the index of the workout you wish to delete:');
    if(index > -1 && index < this.selectedWorkout.exercises.length) {
        this.selectedWorkout.exercises.splice(index, 1);
    }
  }
}

let startMenu = new Menu();
startMenu.start();