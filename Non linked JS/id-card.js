// Step 1: Store your details[span_1](start_span)[span_1](end_span)
// Use 'const' for values that won't change, and 'let' for values that will change in Step 3[span_2](start_span)[span_2](end_span).
const fullName = "Samuel Seraph";
const age = 22;
const courseName = "JavaScript Fundamentals";
let favouriteLanguage = "Dart";
let hasPaidFee = true;

// Step 2: Print your card[span_3](start_span)[span_3](end_span)
// Uses template literals (backticks) to print the card format[span_4](start_span)[span_4](end_span)
console.log(
Name:     ${fullName}
Age:      ${age}
Course:   ${courseName}
Language: ${favouriteLanguage}
Paid:     ${hasPaidFee}
===================================`);

// Step 3: Change your mind[span_5](start_span)[span_5](end_span)
// Update the 'let' variables with new values[span_6](start_span)[span_6](end_span)
favouriteLanguage = "Python"; 
hasPaidFee = true; 

// Print the updated card[span_7](start_span)[span_7](end_span)
console.log(`\n===================================
M TECH HUB STUDENT CARD
===================================
Name:     ${fullName}
Age:      ${age}
Course:   ${courseName}
Language: ${favouriteLanguage}
Paid:     ${hasPaidFee}
===================================`);

// Step 4: Check your types[span_8](start_span)[span_8](end_span)
console.log("\n--- Variable Types ---");
console.log(typeof fullName);
console.log(typeof age);
console.log(typeof courseName);
console.log(typeof favouriteLanguage);
console.log(typeof hasPaidFee);
