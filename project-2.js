// Check Even or Odd
// #1
let num = 2;

if (num % 2 == 0) {
   console.log("this is even num");
} else {
    console.log("this is odd num");
}

// Temperature Check
// #2

let celsius = 50;
    if (celsius < 0) 
    {
        console.log("Below Freezing");
    } 
    else if (celsius >= 0 && celsius < 20) 
    {
        console.log("Cool");
    } else {
        console.log("Warm");
    }

// Grade Classification    
// #3
 let score = 90 ;
    if (score < 0 || score > 100)
     {
        console.log("Invalid score. Please enter a score between 0 and 100.");
       
    }
    if (score >= 90) {
        console.log("A");
    } else if (score >= 80) {
        console.log("B");
    } else if (score >= 70) {
        console.log("C");
    } else if (score >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }

// Age Group Check   
// #4
let age= 18; 
    if (age < 0) 
    {
        console.log("Invalid age. Please enter a non-negative number.");
    }

    if (age <= 12)
     {
        console.log("Child");
    } else if (age >= 13 && age <= 19)
     {
        console.log("Teenager");
    } else if (age >= 20 && age <= 64) 
    {
        console.log("Adult");
    } else 
    {
        console.log("Senior");
    }

// Discount Eligibility
// #5
let totalAmount = 100; 
    if (totalAmount > 100 && isMember)
     {
        console.log("Discount Applied");
    } else 
    {
        console.log("No Discount");
    }
