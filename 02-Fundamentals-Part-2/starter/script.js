'use strict';



// const caclage2= function (birthYear){
//     return 2037-birthYear;
// }

// const calcage3 = birthYear => 2021 -birthYear;

// console.log(calcage3(1991));


// const yearsUntilRetirement = (birthYear, firstName) =>{
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }


// console.log(yearsUntilRetirement(1991, 'keith'));

// const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;
// const avgDolphin = calcAverage(85,54,41), avgKoala=calcAverage(23,34,27);

// function checkWinner(avgDolphin,AvgKoala){
//     if (avgDolphin > AvgKoala && (AvgKoala*2)<=avgDolphin){
//         console.log(`Dolphins win (${avgDolphin} vs ${AvgKoala})🏆`);
        
//      }
//     else if (AvgKoala > avgDolphin && (avgDolphin*2)<= AvgKoala){
//         console.log(`Koalas win (${AvgKoala} vs ${avgDolphin})`);
       
        
//     }else{
//         console.log('no team wins!')
        
//     }    
// }

// checkWinner(avgDolphin,avgKoala)
// console.log(`D: ${avgDolphin}
// K: ${avgKoala}`)


// let friends =['keith', 'mj','rj'];
// console.log(friends[1]);
// friends[1]='cjj';
// console.log(friends[1]);
// friends =['joe','nimma'];
// console.log(friends[1]);
// friends.push('jay')
// console.log(friends)
// friends.push('jay')
// console.log(friends)
// console.log(friends.indexOf('jay'))


// const bills=[125,555,44];
// const calctip = (bill) => (bill<=300 && bill>=50) ? bill*.15 : bill*.2;

// // console.log(calctip(bills[bills.length-3]));

// const tip=[calctip(bills[bills.length-3]), calctip(bills[bills.length-2]), calctip(bills[bills.length-1])]
// const total = [bills[bills.length-3]+tip[tip.length-3], bills[bills.length-2]+tip[tip.length-2], bills[bills.length-1]+tip[tip.length-1]]

// console.log(`Bill value is ${bills[2]}, tip is ${tip[2]}, total value to pay is ${total[2]}`);

// const jonasArray =[
//         'jonas',
//         'keith',
//         ['michael','steven','peter']
// ];

// console.log(jonasArray[2][0]);

// const jonas ={
//     fName: 'Jonas',
//     lName: 'Schmedtmann',
//     location: 'Portugal',
//     age: 2037-1991,
//     bYear: 1991,
//     job: 'teacher',
//     twitter: '@rvrak13',
//     friends: ['Michael','Peter','Steven'],
//     hasDriversLicense: false,
//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear
//     // }
//     calcAge: function() {
//         this.age2 = 2037-this.bYear
//         return  this.age2
//     }

// }

// console.log(`${jonas.fName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)

// console.log(jonas.calcAge())

// console.log(jonas.age)

// console.log(jonas.calcAge(5000))

// console.log(`${jonas.fName} ${jonas.lName} is a ${jonas.age2} year old ${jonas.job} that ${jonas.hasDriversLicense ? 'has a' : 'has no'} driver's license`)


// const markInfo={
//     fName: 'Mark',
//     lName: 'Miller',
//     weight: 78,
//     height: 1.69,
//     calcBMi: function(){
//         this.bmi= this.weight/this.height**2
//         return this.bmi
//     }
// }

// const JohnInfo={
//     fName: 'John',
//     lName: 'Smith',
//     weight: 112,
//     height: 1.95,
//     calcBMi: function(){
//         this.bmi= this.weight/this.height**2
//         return this.bmi
//     }
// }



// // const markWeight = 78, markHeight=1.69, johnWeight=92, johnHeight=1.95;
// // const bmiMark= markWeight / markHeight ** 2, bmiJohn=johnWeight/johnHeight**2;
// // const markHigherBMI =bmiMark>bmiJohn;

// console.log(markInfo.calcBMi(),JohnInfo.calcBMi());
// // console.log(markHigherBMI);

// if(markInfo.bmi > JohnInfo.bmi){
//         console.log(`${markInfo.fName} ${markInfo.lName}'s BMI (${markInfo.bmi}) is higher than ${JohnInfo.fName} ${JohnInfo.lName}'s BMI (${JohnInfo.bmi})`);
// }else console.log(`${JohnInfo.fName} ${JohnInfo.lName}'s BMI (${JohnInfo.bmi}) is higher than ${markInfo.fName} ${markInfo.lName}'s BMI (${markInfo.bmi})`);



const bills=[22,295,176,440,37,105,10,1100,86,52];
const calctip = (bill) => (bill<=300 && bill>=50) ? bill*.15 : bill*.2;
const tip=[];
const total=[];
let avgTip=0, avgTotal=0;
let sumTotal=0, sumTip=0;
function calcAverage(arr)  {
    const avg=arr/bills.length;
    return avg;
}

for (let i=0; i<bills.length; i++){
    tip.push(calctip(bills[i]));
    total.push(tip[i]+bills[i]);
    sumTotal=sumTotal+total[i];
    sumTip=sumTip+tip[i];
    console.log('T :'+ tip[i], 'Total :' + total[i]);
}

console.log(`Average Total: ${calcAverage(sumTotal)}, Average Tip: ${calcAverage(sumTip)}`)

// console.log(calctip(bills[bills.length-3]));

//const tip=[calctip(bills[bills.length-3]), calctip(bills[bills.length-2]), calctip(bills[bills.length-1])]
//const total = [bills[bills.length-3]+tip[tip.length-3], bills[bills.length-2]+tip[tip.length-2], bills[bills.length-1]+tip[tip.length-1]]

//console.log(`Bill value is ${bills[2]}, tip is ${tip[2]}, total value to pay is ${total[2]}`);
