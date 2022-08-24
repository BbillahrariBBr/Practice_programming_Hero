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
    provideFeedback() {
        console.log(`${this.name} thank u for ur feedback`);
    }
}


class Developer {
    name;
    designation = 'web Course Instructor';
    team = 'Web Team';
    location;
    tech;
    constructor(name, location, tech) {
        this.name = name;
        this.location = location;
        this.tech = tech;

    }
    developFeature(feature) {
        console.log(`plz develop the  ${feature}`);
    }
    release(version) {
        console.log(`plz release the  ${version}`);
    }
    provideFeedback() {
        console.log(`${this.name} thank u for ur feedback`);
    }
}