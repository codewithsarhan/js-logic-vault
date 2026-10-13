// Day 5 — Login Security Checker

const username = "Sarhan";
const password = "jsMaster16";
const accountActive = true;
const loginAttempts = 2;

let login_Details = () => {

    if (username === "Sarhan" && password === "jsMaster16") {
        console.log("Uswerame Password Is Correct");

    } else {
        console.log("Username Password Is Incorrect");

    }

    if (accountActive === true) {
        console.log(`Account Status : ${accountActive}`);

    } else {
        console.log(`Account Status : ${accountActive}`);

    }

    if (loginAttempts >= 3) {
        console.log("Account Is Temprory Blocked");

    } else {
        console.log("Login SucessFull");

    }

}

login_Details()