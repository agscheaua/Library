
// the array where the books will be placed;

const myLibrary = [];

// the constructor function for new book prototypes;

function Book(title, author, pages, status) {
    if (!new.target) {
        throw Error("You forgot 'new'");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

// the function to create new books and store them in the array;

function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
};

// created books;

addBookToLibrary("alex", "george", 12, "yes");
addBookToLibrary("alex", "george", 12, "yes");
console.log(myLibrary)

// 

myLibrary.forEach( (book) => {
    ; 
} );