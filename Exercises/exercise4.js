//EXERCISE 4
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

console.log('EXERCISE 4');

class library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    // issueBook is a function.
    // issuedBooks is an object 

    getBookList() {
        // here we have to return a bookList whatever book we are having in our library.
        // so we will iterate over each book using forEach() and return each book.
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user) {
        if (this.issuedBooks[bookname] == undefined) {
            this.issuedBooks[bookname] = user;
        }
        else {
            console.log("this book is already issued");
        }
    }

    returnBook(bookname) {
        delete this.issuedBooks[bookname];
    }
}