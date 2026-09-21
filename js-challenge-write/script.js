// Profile Orbit :================================================

let mySym = Symbol("id");

let userProfile = {
  name: "sarhan",
  age: 20,
  skills: "Mern Stack Web App Development",
  [mySym]: "Shadow",
  education: {
    degree: {
      insititue: "Learnify Acadmey",
    },
  },
  wellcomeMsg: function () {
    console.log(`My Name Is ${this.name} and My Age Is ${this.age}`);
  },
};

console.log(userProfile?.education?.degree?.insititue);
console.log(userProfile.name, userProfile.age, userProfile[mySym]);

let Obj1 = {
  location: "Karachi",
};

let Obj2 = {
  socialLinks: "Fb,Tw,Li,Yt",
};

Object.assign(userProfile, Obj1, Obj2);

console.log(userProfile);

Object.freeze(userProfile);

userProfile.age = 25;
console.log(userProfile.age);

