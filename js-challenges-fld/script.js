// Creator Analytics & Upload Scheduler

let videoData = {

    channelName: "  coDin fAm",
    viewPerShort: [1250, 4800, 3200, 9500, 2100],
    avgTimeMinutes: 1.8459,
    uploadDate: new Date("2026-10-04"),

}

let trimName = videoData.channelName ;

let trimFunc = (channelName) => {

    trimName = channelName.toLowerCase().trim();
    console.log(trimName);


}

trimFunc(videoData.channelName)

let views = undefined ;
let avgTime = undefined ;

let veiwShortFunc = (viewPerShort , avgTimeMin) => {
views = Math.max(...viewPerShort);
console.log(views);

avgTime = Math.round(avgTimeMin)
console.log(avgTime);

}
veiwShortFunc(videoData.viewPerShort , videoData.avgTimeMinutes);

let channelPerformance = undefined ;

if (views >= 8000) {
    channelPerformance = "Viral / High Engagement" ;
    
}else{
    channelPerformance = "Steady Growth";
    
}


let nextUploadDate = new Date(videoData.uploadDate);
nextUploadDate.setDate(videoData.uploadDate.getDate() + 3);

let options = { day: '2-digit', month: 'short', year: 'numeric' };
let formattedDate = nextUploadDate.toLocaleDateString('en-GB', options).replace(/,/g, '');

console.log(formattedDate);

let creatorAnalytics = () => {

let creator_Analytics = {

    Channel_Handle : trimName ,
    Total_Upload : "5 Shorts" ,
    Total_Views : 20850 ,
    best_Views : views,
    Avg_WatchTime : avgTime,
    Channel_Perfomance : channelPerformance ,
    Last_Upload : videoData.uploadDate ,
    Next_Schedule : formattedDate ,
    Tip : "Ready For The Next Post !"

}

console.log(creator_Analytics);

}

creatorAnalytics();