//! Question # 01 //

/*function power(a, b) {
    // Base case: If b is 0, a^0 is always 1.
    if (b === 0) {
      return 1;
    }
  
    // Recursive case: Calculate a^(b-1) and multiply it by 'a'.
    return a * power(a, b - 1);
  }
  
  // Test the power function
  console.log(power(2, 3)); // Should output 8 (2^3)
  console.log(power(5, 0)); // Should output 1 (5^0)
  console.log(power(10, 4)); // Should output 10000 (10^4)*/
  
//! Question # 02 //

/*function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
      // If it's divisible by 100, it should also be divisible by 400 to be a leap year
      if (year % 100 === 0) {
        return year % 400 === 0;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  // You can take input from the user and check if it's a leap year
  const inputYear = parseInt(prompt("Enter a year:"));
  if (isLeapYear(inputYear)) {
    console.log(inputYear + " is a leap year.");
  } else {
    console.log(inputYear + " is not a leap year.");
  }*/
  
//! Question # 03 //

/*function calculateTriangleArea(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Invalid input. Side lengths must be positive.";
    }

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    if (isNaN(area)) {
        return "Invalid input. The given side lengths cannot form a triangle.";
    }
    
    return area;
}

const a = parseFloat(prompt("Enter the length of side 'a':"));
const b = parseFloat(prompt("Enter the length of side 'b':"));
const c = parseFloat(prompt("Enter the length of side 'c':"));

const result = calculateTriangleArea(a, b, c);
alert(`The area of the triangle is: ${result}`);*/

//! Question # 04 //

/*// Function to calculate the average of three subjects
function calculateAverage(subject1, subject2, subject3) {
    return (subject1 + subject2 + subject3) / 3;
  }
  
  // Function to calculate the percentage based on total marks (e.g., 100)
  function calculatePercentage(subject1, subject2, subject3, totalMarks) {
    const totalObtainedMarks = subject1 + subject2 + subject3;
    return (totalObtainedMarks / (totalMarks * 3)) * 100;
  }
  
  // Main function to get user input, calculate average and percentage, and display the result
  function mainFunction() {
    // Get user input for marks in three subjects
    const subject1 = parseFloat(prompt("Enter marks for subject 1:"));
    const subject2 = parseFloat(prompt("Enter marks for subject 2:"));
    const subject3 = parseFloat(prompt("Enter marks for subject 3:"));
  
    // Check if the input is valid (non-empty and numeric)
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3)) {
      alert("Invalid input. Please enter numeric marks.");
      return;
    }
  
    const totalMarks = 100; // Assuming total marks for each subject is 100
  
    // Calculate average and percentage
    const average = calculateAverage(subject1, subject2, subject3);
    const percentage = calculatePercentage(subject1, subject2, subject3, totalMarks);
  
    // Display the result
    alert(`Average marks: ${average.toFixed(2)}`);
    alert(`Percentage: ${percentage.toFixed(2)}%`);
  }
  
  // Call the main function to start the program
  mainFunction();*/
  
//! Question # 05 //

// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; // Return the index of the first occurrence of the character
//         }
//     }
//     return -1; // Return -1 if the character is not found in the string
// }

// // Example of how to use the customIndexOf function:
// const inputString = prompt("Enter a string:"); // Prompt the user for a string
// const searchChar = prompt("Enter a character to search for:"); // Prompt the user for a character to search for

// const index = customIndexOf(inputString, searchChar);

// if (index !== -1) {
//     alert(`The character '${searchChar}' was found at index ${index}.`);
// } else {
//     alert(`The character '${searchChar}' was not found in the string.`);
// }

  
//! Question # 06 //

// function deleteVowels() {
//     //? Prompt the user for input
//     const sentence = prompt("Enter a sentence (not more than 25 characters long):");
    
//     //? Check if the sentence is provided and not longer than 25 characters
//     if (!sentence || sentence.length > 25) {
//       alert("Invalid input. Please enter a sentence that is not more than 25 characters long.");
//       return;
//     }
    
//     //? Define a regular expression to match vowels (case-insensitive)
//     const vowelsRegex = /[aeiouAEIOU]/g;
  
//     //? Remove vowels from the sentence using the regex
//     const result = sentence.replace(vowelsRegex, '');
  
//     //? Display the result
//     alert("Original Sentence: " + sentence);
//     alert("Sentence with Vowels Removed: " + result);
//   }
  
//   //? Call the function
//   deleteVowels();
  
//! Question # 07 //

// function countSuccessiveVowels(text) {
//     text = text.toLowerCase(); // Convert the text to lowercase to make it case-insensitive.
//     let count = 0;

//     for (let i = 0; i < text.length - 1; i++) {
//         const currentChar = text[i];
//         const nextChar = text[i + 1];

//         //? Check if both the current and next characters are vowels.
//         switch (currentChar) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 switch (nextChar) {
//                     case 'a':
//                     case 'e':
//                     case 'i':
//                     case 'o':
//                     case 'u':
//                         count++;
//                         break;
//                     default:
//                         break;
//                 }
//                 break;
//             default:
//                 break;
//         }
//     }

//     return count;
// }

// //? Example usage:
// const userInput = prompt("Enter a line of text:"); // You can use prompt or any other method to get user input.
// const result = countSuccessiveVowels(userInput);
// console.log(`Number of successive vowels in the text: ${result}`);

//! Question # 08 //

// //? Function to get user input
// function getInput() {
//     const distanceInKm = parseFloat(prompt("Enter the distance between two cities (in kilometers):"));
//     return distanceInKm;
//   }
  
//   //? Function to convert kilometers to meters
//   function convertToMeters(kilometers) {
//     return kilometers * 1000;
//   }
  
//   //? Function to convert kilometers to feet
//   function convertToFeet(kilometers) {
//     return kilometers * 3280.84;
//   }
  
//   //? Function to convert kilometers to inches
//   function convertToInches(kilometers) {
//     return kilometers * 39370.1;
//   }
  
//   //? Function to convert kilometers to centimeters
//   function convertToCentimeters(kilometers) {
//     return kilometers * 100000;
//   }
  
//   //? Main program
//   const distanceInKm = getInput();
  
//   if (!isNaN(distanceInKm)) {
//     const distanceInMeters = convertToMeters(distanceInKm);
//     const distanceInFeet = convertToFeet(distanceInKm);
//     const distanceInInches = convertToInches(distanceInKm);
//     const distanceInCentimeters = convertToCentimeters(distanceInKm);
  
//     console.log(`Distance in Meters: ${distanceInMeters} meters`);
//     console.log(`Distance in Feet: ${distanceInFeet} feet`);
//     console.log(`Distance in Inches: ${distanceInInches} inches`);
//     console.log(`Distance in Centimeters: ${distanceInCentimeters} centimeters`);
//   } else {
//     console.log("Invalid input. Please enter a valid distance in kilometers.");
//   }
  
//! Question # 09 //

// //? Prompt the user for the number of hours worked
// const hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));

// //? Check if the input is a valid number
// if (!isNaN(hoursWorked)) {
//   const regularHours = 40; // The regular working hours
//   const hourlyRate = 12.00; // Rate per hour

//   //? Calculate overtime pay if applicable
//   if (hoursWorked > regularHours) {
//     const overtimeHours = hoursWorked - regularHours;
//     const overtimePay = overtimeHours * hourlyRate;
//     const regularPay = regularHours * hourlyRate;
//     const totalPay = regularPay + overtimePay;

//     console.log(`Regular Pay: Rs. ${regularPay.toFixed(2)}`);
//     console.log(`Overtime Pay: Rs. ${overtimePay.toFixed(2)}`);
//     console.log(`Total Pay: Rs. ${totalPay.toFixed(2)}`);
//   } else {
//     const regularPay = hoursWorked * hourlyRate;
//     console.log(`Regular Pay: Rs. ${regularPay.toFixed(2)}`);
//   }
// } else {
//   console.log("Invalid input. Please enter a valid number of hours worked.");
// }

//! Question # 10 //

// //? Prompt the user for the amount to be withdrawn in hundreds
// const amountInHundreds = parseInt(prompt("Enter the amount to be withdrawn in hundreds:"));

// //? Calculate the number of each denomination of currency notes
// const notes100 = Math.floor(amountInHundreds);
// const remainingAmount = amountInHundreds - notes100;

// //? Convert the remaining amount to the actual amount in hundreds
// const remainingAmountInHundreds = remainingAmount * 100;

// const notes50 = Math.floor(remainingAmountInHundreds / 50);
// const notes10 = Math.floor((remainingAmountInHundreds % 50) / 10);

// //? Display the result
// console.log(`Number of 100 rupee notes: ${notes100}`);
// console.log(`Number of 50 rupee notes: ${notes50}`);
// console.log(`Number of 10 rupee notes: ${notes10}`);
