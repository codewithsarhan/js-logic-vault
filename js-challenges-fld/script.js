// Challenge: Mission Control — Space Launch Console

(() => {
    console.log("Mission Control System Initializing")
})()

const astronaut = {
    name: "Alin",
    age: 38,
    country: "America",
    experienceYears: 12,
    missionName: "Space Launch Mission",
    oxygenLevel: 94,
    fuelLevel: 87,
    isReady: true
};

function missionScore(agent) {

    const baseValue = agent.age || agent.experienceYears || 0;

    return baseValue * 10;
}

let missionScoreResult = missionScore(astronaut);
console.log(`Mission Score : ${missionScoreResult}`);

let checkingFunction = (astronaut) => {

    if (astronaut.oxygenLevel >= 80 &&
        astronaut.fuelLevel >= 75 &&
        astronaut.isReady >= true &&
        astronaut.experienceYears >= 7) {
        console.log("All Requiremnets Is Good You Ready To Going");
    } else {
        console.log("You Not Gone");
    }

}

checkingFunction(astronaut);


let emergencyLevel = () => {

    let emergencyLevel = "low";

    if (emergencyLevel == "low") {
        console.log("Normal Launch");
    } else if (emergencyLevel == "medium") {
        console.log("Medium Launch");
    } else {
        console.log("High Launch");
    }

}

emergencyLevel()

let missionStart = new Date();

let expectedLaunch = new Date();

expectedLaunch.setDate(missionStart.getDate() + 45);
expectedLaunch.setHours(missionStart.getHours() + 3);

console.log(`Mission Start Date ${missionStart.toLocaleString()}`);
console.log(`Expected Launch ${expectedLaunch.toLocaleString()}`);

