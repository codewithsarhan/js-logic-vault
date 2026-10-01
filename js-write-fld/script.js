// Game Score Tracker :::===

let gameplayers = [

    {
        name: "Player 1",
        score: 80,
    },
    {
        name: "Player 2",
        score: 90,
    },
    {
        name: "Player 3",
        score: 100,
    },

]

function dataPrint(playersData) {
    console.log(`Name : ${playersData.name} 
Score : ${playersData.score}`);
}
dataPrint(gameplayers[1])


let valueReturn = (plyrScr) => {
    let score = plyrScr + plyrScr;
    console.log(`Total Score : ${score}`);
}
valueReturn(gameplayers[1].score)
