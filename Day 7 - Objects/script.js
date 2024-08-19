// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
  title: "Psychology of money",
  author: "Morgan Housel",
  year: 2020,
};
console.log(book);

// • Task 2: Access and log the title and author properties of the book object.
console.log(book.year);

// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
let book_2 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  getTitleAndAuthor: function () {
    return `${book_2.title} by ${book_2.author}`;
  },
};
console.log(book_2.getTitleAndAuthor());

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
let book_3 = {
  title: "1984",
  author: "George orwell",
  year: 1950,
  updateYear: function (year) {
    book_3.year = year;
    return year;
  },
};
console.log(book_3.updateYear(1949));

// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
  name: "School Library",
  books: [
    {
      title: "Psychology of money",
      author: "Morgan Housel",
      year: 2020,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "1984",
      author: "George orwell",
      year: 1949,
    },
  ],
  getAllBooks: function () {
    return library.books.map((book) => book.title);
  },
  getTitleAndYear: function () {
    return this.books.map((book) => {
      return `${book.title}, ${book.year}`;
    });
  },
};
console.log(library);

// • Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);
console.log(library.getAllBooks());

// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
console.log(library.getTitleAndYear());

// Activity 5: Object Iteration
// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
let book_4 = {
  title: "The Invisible Life of Addie LaRue",
  author: "V.E. Schwab",
  year: 2020,
};

for (key in book_4) {
  console.log(book_4[key]);
}

// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
let book_5 = {
  title: "The Midnight Library",
  author: "Matt Haig",
  year: 2020,
};
console.log(Object.keys(book_5), Object.values(book_5));
