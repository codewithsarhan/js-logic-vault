//          "The Vault & Agent System"           //
//       :================================:      //

const secretKey = Symbol("secretKey");

const agent = {
  name: "Agent 007",
  codeName: "Shadow",
  characterLevel: 5,
  [secretKey]: "ALPHA-123",

  getDetails: function () {
    console.log(`Agent Name: ${this.name}, Level: ${this.characterLevel}`);
  },
};

const targetProp = "codeName";

console.log(agent[targetProp]);
console.log(agent[secretKey]);

agent.getDetails();

Object.freeze(agent);
agent.characterLevel = 10;

console.log(agent);

