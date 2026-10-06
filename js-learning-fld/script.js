// Freelancer Invoice Checker ++++++++++

const project = [
    {
        name: "Portfolio Website",
        hours: 12,
        hourlyRate: 1500,
        paid: true
    },
    {
        name: "Landing Page",
        hours: 8,
        hourlyRate: 1200,
        paid: false
    },
    {
        name: "Dashboard UI",
        hours: 15,
        hourlyRate: 1800,
        paid: true
    }
];


let totalCalc = (projectData) => {


    for (let i = 0; i < projectData.length; i++) {

        let time = projectData[i];

        console.log(`Name : ${time.name} : Total Price ${time.hours * time.hourlyRate}`);

        let status = projectData[i];

        if (status.paid === true) {
            console.log("Status : Paid");

        } else {
            console.log("Status : Pending");

        }

    }





}


totalCalc(project)


