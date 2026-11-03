//ATM check: Given let hasCard = true; let pin = 1234; let balance = 5000; let amount = 2000;

console.log("***** DAY 3-5 IN CODING *****");
/*console.log("Legal Age Group to Vote!");
//Voting check: Given let age = 17;, print "Eligible to vote" if age is 18 or above, otherwise print "Not eligible".
let age = 18
let universityStudent = true;

if (age >= 18 && universityStudent === true) {
  console.log("You can vote");
  if (age >=18 && universityStudent === false) {
    console.log("You can Vote");
  }else{
    console.log("Not Able to Vote")
  }
}else {console.log("Not Eligible to Vote")}
let mark = 85;

if (mark >= 80) {
  console.log("Excellent");
} else if (mark >= 50) {
  console.log("Average");
} else {
  console.log("Poor");
}*/

console.log("ATM REQUIREMEMT CHECK");

let hasCard = true;
let pin = 1234;
let balance = 5000;
let amount = 2000;

if (hasCard === true) {
  console.log("Insert your pin!");
  if (pin === 1234) {
  console.log("Check Balance");
    if (balance >= amount) {
      console.log("transaction complete");
    }else{
      console.log("Insifficient funds");
    }
  }else{
    console.log("Incorrect Pin");
  }
}else{
  console.log("Insert a card");
}
