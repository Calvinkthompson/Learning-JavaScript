/*let country = 'Canada';
let continent = 'North America';
let population = '8 Million';

console.log(typeof country);
// console.log(continent);
console.log(typeof population);

let isIsland = false;
let language = undefined;

console.log(typeof isIsland);
console.log(typeof language);

const now = 2030;
const ageJonas = now - 2001;
const ageSara = now - 2002;
console.log(ageJonas, ageSara);

const firstName = 'jonas';
const lastName = 'jones';
console.log(firstName, lastName);
console.log(firstName + ' ' + lastName);*/


/*const bmi = mass / (height * height);
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.96;

// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const BMIMark = massMark / (heightMark * heightMark);

const BMIJohn = massJohn / (heightJohn ** 2);
const BMIMark = massMark / (heightMark ** 2);

console.log(BMIMark);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

const scoreDolphins = 96 + 108 + 89;
const scoreKoalas = 88 + 91 + 110;

if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the trophy`);
} else if (scoreDolphins < scoreKoalas) {
    console.log(`Koalas win the trophy`);
} else if (scoreDolphins == scoreKoalas) {
    console.log(`Both win the trophy`);
}


const day = 'sunday';

if (day == 'monday') {
    console.log('Plan course structure');
    console.log('go to coding meeting');
} else if (day == 'tuesday') {
    console.log('prepare theory');
} else if (day == 'wednesday' || day == 'thursday') {
    console.log('write code exaples');
} else if (day == 'friday') {
    console.log('record videos');
} else if (day == 'saturday' || day == 'sunday') {
    console.log('enjoy the weekend');
} else {
    console.log('invalid');
}

const bill = 80;


const billWithTip = bill >= 50 && bill <= 300 ? bill * 1.15 : bill * 1.20;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${billWithTip}`);


'use strict';

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

function calcAge1(birthYear) {
    return 2024 - birthYear;
}

const age1 = calcAge1(1991);

const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}
--> time until retirement including years and months from today.
const age2 = calcAge2(1999);
console.log(age1, age2);

const ageDay = 30;
const ageMonth = 06;
const ageYear = 2001;
const currentDay = 06;
const currentMonth = 04;
const currentYear = 2024;


const manyMonths = function (months) {
    return ageMonth - 4;
};

const manyYears = function (years) {
    return 65 - (2024 - ageYear);
};


const figured = function (ageMonth, ageYear) {

    const timeLeft = manyMonths(ageMonth);
    const timeLeft2 = manyYears(ageYear);

    const retire = `you have ${timeLeft} more months and ${timeLeft2} more years.`;
    return retire;
};

console.log(figured(ageMonth, ageYear));
----------------------------------------->
---using array with method--
const dolphins = [44, 23, 71];
const koalas = [65, 54, 49];

const calcAverage = (scores) => scores.reduce((total, current) => total + current, 0) / scores.length;

const calcDolphinsAvg1 = calcAverage(dolphins);
const calcKoalasAvg1 = calcAverage(koalas);
const game1 = [calcDolphinsAvg1, calcKoalasAvg1];

const checkWinner = (game1) => {
    if (game1[0] > game1[1]) {
        return 'dolphins win';
    } else if (game1[0] < game1[1]) {
        return 'koalas win';
    } else {
        return 'dolphins and koalas tie';
    }
};


// const winnerMessage = checkWinner(game1);
console.log(`${checkWinner(game1)} ${game1[0]} vs ${game1[1]}`);


const dolphins2 = [85, 54, 41];
const koalas2 = [23, 34, 27];

const calcDolphinsAvg2 = calcAverage(dolphins2);
const calcKoalasAvg2 = calcAverage(koalas2);
const game2 = [calcDolphinsAvg2, calcKoalasAvg2];


const winnerMessage2 = checkWinner(game2);
console.log(`${winnerMessage2} ${game2[0]} vs ${game2[1]}`);


---------Same thing different method----------


const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphins = calcAverage(44, 23, 71);
const koalas = calcAverage(65, 54, 49);


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        return 'dolphins win';
    } else if (avgDolphins < avgKoalas) {
        return 'koalas win';
    } else {
        return 'dolphins and koalas tie';
    }
};

const checkWinnerMessage = checkWinner(dolphins, koalas);
console.log(`${checkWinnerMessage} ${dolphins} vs ${koalas}`);

const dolphins2 = calcAverage(85, 54, 41);
const koalas2 = calcAverage(23, 34, 27);

const checkWinnerMessage2 = checkWinner(dolphins2, koalas2);
console.log(`${checkWinnerMessage2} ${dolphins2} vs ${koalas2}`);
----------------------------------------

const jonas = {
    firstName: 'jonas',
    lastName: 'Smith',
    age: 25,
    job: 'teacher',
    friends: ['mike', 'peter', 'stven']
}

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('what do you want to know? choose either firstname, lastname, age, job, and friends');

// console.log(jonas.interestedIn); // wont work because 'interestedIn' isnt a variable in jonas array//
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('wrong request... choose either firstname, lastname, age, job, and friends');
}

//add more variables to jonas array
jonas.location = 'canada';
jonas['twitter'] = '@jonas';

const betsFriend = jonas.friends[0];
const numberFriends = jonas.friends.length;
const who = jonas.firstName;

console.log(`${who} has ${numberFriends} friends, and his best friend is called ${betsFriend}`);
// ----------------------------------- 

// challenge 3


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
};


const calcBMIMark = mark.mass / (mark.height ** 2);
// return calcBMIMark;
const calcBMIJohn = john.mass / (john.height ** 2);
// return calcBMIJohn;

// cuts the number off after one decimal space//
mark.bmi = calcBMIMark.toFixed(1);
john.bmi = calcBMIJohn.toFixed(1);

// console.log(mark);
// console.log(john);

// console.log(`${calcBMIMark}, ${calcBMIJohn}`);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else if (mark.bmi == john.bmi) {
    console.log(`same`);
};

// challenge 3 using this statement//

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

mark.bmi = mark.bmi.toFixed(1);
john.bmi = john.bmi.toFixed(1);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else if (mark.bmi == john.bmi) {
    console.log(`same`);
};
----------------------------------------

/// LOOPS ////

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


// const jonas = {
//     firstName: 'jonas',
//     lastName: 'Smith',
//     age: 25,
//     job: 'teacher',
//     friends: ['mike', 'peter', 'stven']
// };

// for (let key in jonas) {
//     console.log(jonas[key]);
// };

const jonas = [
    'jonas',
    'Smith',
    25,
    'teacher',
    ['mike', 'peter', 'stven']
];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i]);
};


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);


const jonas = [
    'jonas',
    'Smith',
    25,
    'teacher',
    ['mike', 'peter', 'stven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} lifting weight repitition ${rep}`);
    }
}


for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repitition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`lifting weights repitition ${rep}`);
    rep++;
}
*/

