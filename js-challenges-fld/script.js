// The Secret Agent Profile Generator++++++++++++++++++++++++++++++++++++++++

const agentInfo = {
  fullName: "james bond",
  birthDate: "1985-04-15",
  skills: ["hacking", "driving", "combat", "stealth"],
};

let agentName = agentInfo.fullName;
let splitName = agentName.split(" ");
let firstName = splitName[0];
let lastName = splitName[1];
let reverseName = firstName.split("").reverse().join("");
let codeName = reverseName.concat(" ", lastName);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let ageBod = agentInfo.birthDate;

let birthDate = new Date(ageBod);
let currentDate = new Date();

let diffMilSec = currentDate - birthDate;
let ageinYear = diffMilSec / (1000 * 60 * 60 * 24 * 365.25);
let finalAge = parseInt(ageinYear);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let clearanceLevel = Math.floor(Math.random() * 10) + 1;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let primarySkill = agentInfo.skills[0];

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let formatingObject = {
  agentCodeName: codeName,
  agentAge: finalAge,
  clearanceLevelAgent: clearanceLevel,
  primarySkillAgent: primarySkill,
};

let finalObject = Object.assign({}, agentInfo, formatingObject);

myfunction = () => {
  console.log(finalObject);
};
