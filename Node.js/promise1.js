const roomCleaning = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Room cleaned...");
            reject();
        },3000)
    })
}

const goingToTrip = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("HUM PICNIC JA RHE HE");
            resolve();
        },3000)
    })
}

Promise.all([roomCleaning(),goingToTrip()])
.then(() => {
    console.log("Finally HO GYA KAAM");
})
.catch(() => {
    console.log("Hurrey! We are going to trip");
})