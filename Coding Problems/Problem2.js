// 2. JavaScript Objects: (10 marks)
// Define a JavaScript object representing a library book with properties title, author, year,
// and a method getBookInfo() that returns a string containing book details.

function getBookInfo(title, author, year) {
    return title + " by " + author + ", Published in " + year + "."
}

const libraryBook = {
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932
}

const bookInfo = getBookInfo(libraryBook.title, libraryBook.author, libraryBook.year);
console.log(bookInfo);
