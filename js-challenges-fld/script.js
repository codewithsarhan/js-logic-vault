// Mobile Data Checker :==

const totalData = 5;
const usedData = 3.2;

let dataChecker = () => {

    let remaingData = totalData - usedData;
    console.log(`Remaning Data : ${remaingData}`);

    if (usedData <= totalData) {
        console.log("You Not Used Complete Data");

    } else {
        console.log("You Used Complete Data");

    }

}

dataChecker()