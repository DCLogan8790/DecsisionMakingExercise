// 1a
let randomNum = Math.random();
randomNum *= 5;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);

// 1b
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
}
else if (randomNum == 2 || 3) {
    console.log("Equal to 2 or 3");
}
else if (randomNum == 1) {
    console.log("Equal to 1");
};

// 1c
if (randomNum != 3) {
    console.log("Not equal to 3");
}

// 1d
if (randomNum != 3 && randomNum != 5) {
    console.log("NOT equal to 3 AND not equal to 5");
}

// 1e
if (randomNum == 2 || randomNum == 4) {
    console.log("Equal to 2 OR equal to 4");
}

// Bonus
// 2
randomNum = (randomNum >= 4), (randomNum < 4) ? "Greater than or equal to 4" : "Less than 4";

// 3
switch (randomNum) {
    case 1:
        randomNum = "one"
        break;

    case 2:
        randomNum = "two"
        break;

    case 3:
        randomNum = "three"
        break;

    case 4:
        randomNum = "four"
        break;

    case 5:
        randomNum = "five"
}
console.log(randomNum);