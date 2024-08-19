// Activity 1: Basic Regular Expressions
// • Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
function findAllOccurrences(text, pattern) {
  const regex = new RegExp(pattern, "g");
  const matches = text.match(regex);
  console.log(`Matches for pattern '${pattern}':`, matches);
  return matches;
}

// Example usage:
const text =
  "JavaScript is a versatile language. Many developers love JavaScript because it is so powerful.";
const pattern = "JavaScript";

findAllOccurrences(text, pattern);

// • Task 2: Write a regular expression to match all digits in a string. Log the matches.
function findAllDigits(string) {
  const regex = /\d/g;
  const matches = string.match(regex);
  console.log(`All digits in the string are: ${matches}`);
  return matches;
}
const text_2 = "There are 123 apples and 45 oranges in 678 baskets.";
findAllDigits(text_2);

// Activity 2: Character Classes and Quantifiers
// • Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
function findCapitalizedWords(text) {
  const regex = /\b[A-Z][a-z]*\b/g;
  const matches = text.match(regex);
  console.log(`Capitalized words found:`, matches);
  return matches;
}

// Example usage:
const text_3 = "Alice went to the Wonderland and met the Queen of Hearts.";
findCapitalizedWords(text_3);

// • Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
function findAllDigitSequences(text) {
  const regex = /\d+/g;
  const matches = text.match(regex);
  console.log(`Digit sequences found:`, matches);
  return matches;
}

// Example usage:
const text_4 = "There are 123 apples, 45 oranges, and 6789 bananas.";
findAllDigitSequences(text_4);

// Activity 3: Grouping and Capturing
// • Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123)
// 456-7890). Log the captures.
function extractPhoneNumberParts(phoneNumber) {
  const regex = /\((\d{3})\) (\d{3})-(\d{4})/;
  const matches = phoneNumber.match(regex);

  if (matches) {
    const [fullMatch, areaCode, centralOfficeCode, lineNumber] = matches;
    console.log(`Full match: ${fullMatch}`);
    console.log(`Area code: ${areaCode}`);
    console.log(`Central office code: ${centralOfficeCode}`);
    console.log(`Line number: ${lineNumber}`);
  } else {
    console.log("No match found.");
  }

  return matches;
}

// Example usage:
const phoneNumber = "(123) 456-7890";
extractPhoneNumberParts(phoneNumber);

// • Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
function extractEmailParts(email) {
  const regex = /^([^@]+)@(.+)$/;
  const matches = email.match(regex);

  if (matches) {
    const [fullMatch, username, domain] = matches;
    console.log(`Full match: ${fullMatch}`);
    console.log(`Username: ${username}`);
    console.log(`Domain: ${domain}`);
  } else {
    console.log("No match found.");
  }

  //   return { username, domain };
}

// Example usage:
const email = "user@example.com";
extractEmailParts(email);

// Activity 4: Assertions and Boundaries
// • Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
function matchWordAtBeginning(text) {
  const regex = /^\b\w+\b/;
  const match = text.match(regex);

  if (match) {
    console.log(`Word at the beginning: ${match[0]}`);
  } else {
    console.log("No match found.");
  }

  return match ? match[0] : null;
}

// Example usage:
const text_5 = "Hello world!";
matchWordAtBeginning(text_5);

// • Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
function matchWordAtEnd(text) {
  const regex = /\b\w+\b$/;
  const match = text.match(regex);

  if (match) {
    console.log(`Word at the end: ${match[0]}`);
  } else {
    console.log("No match found.");
  }

  return match ? match[0] : null;
}

// Example usage:
const text_6 = "Hello world";
matchWordAtEnd(text_6);

// Activity 5: Practical Applications
// • Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
function validatePassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()_+!])[A-Za-z\d@#$%^&*()_+!]{8,}$/;
  const isValid = regex.test(password);

  if (isValid) {
    console.log("Password is valid.");
  } else {
    console.log("Password is invalid.");
  }

  return isValid;
}

// Example usage:
const password = "A1b@3456";
validatePassword(password);

// • Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
function validateURL(url) {
  const regex =
    /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9-_.]*)*(\?[a-zA-Z0-9-_=&]*)?$/;
  const isValid = regex.test(url);

  if (isValid) {
    console.log("URL is valid.");
  } else {
    console.log("URL is invalid.");
  }

  return isValid;
}

// Example usage:
const url1 = "https://www.example.com/path/to/resource?query=param";
const url2 = "ftp://example.com";
const url3 = "http://localhost:3000";

validateURL(url1); // Valid URL
validateURL(url2); // Invalid URL
validateURL(url3); // Invalid URL
