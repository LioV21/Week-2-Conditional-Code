// 'myGrade' and assign it between 0-100
let myGrade = 1; 

// if/else-if/else statement
if (myGrade >= 90) {
    console.log("A still not good");
} else if (myGrade >= 80) {
    console.log("B you did alright");
} else if (myGrade >= 70) {
    console.log("C You could do better");
} else if (myGrade >= 60) {
    console.log("D your going to be a scholar");
} else {
    console.log("F welcome president");  //  anything below 60 is an F 
}

// Switch statement to do the same thing
switch (true) {
    case (myGrade >= 90):
        console.log("A");
        break;
    case (myGrade >= 80):
        console.log("B");
        break;
    case (myGrade >= 70):
        console.log("C");
        break;
    case (myGrade >= 60):
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}

// Loop to print values from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i); // Even numbers
    } else {
        console.log("!"); // '!' for odd numbers
    }
}
