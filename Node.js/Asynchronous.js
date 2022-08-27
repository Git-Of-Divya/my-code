console.log("At the start");

function eatingPatashe(){
    console.log("eating patashe function called...");
}

function doingHomework(){
    console.log("doing homework function called...");
}

console.log("At the end");

// eatingPatashe();
// setTimeout(eatingPatashe,2000);
let myFunction = setInterval(eatingPatashe,500);

// doingHomework();
// setTimeout(doingHomework,3000);
let myFunction2= setInterval(doingHomework,0);

// clearInterval(myFunction);
 clearInterval(myFunction2);