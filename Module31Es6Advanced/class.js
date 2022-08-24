//syntactic sugar
class Instructor {
    name;
    designation = 'web Course Instructor';
    team = 'Web Team';
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;

    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuize(module) {
        console.log(`plz create quiz for module ${module}`);
    }
}
const amir = new Instructor('amir', 'dhaka');
console.log(amir);