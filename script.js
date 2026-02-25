
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

addBookToLibrary("theHobbit", "JJJ Tolkien", 346, "I did not read it");
addBookToLibrary("theHobbit", "JJJ Tolkien", 346, "I read it");
console.log(myLibrary)

// create the book cards; 

myLibrary.forEach( (book) => {
    const bookCardContainer = document.querySelector(".bookCardContainer");
    const newDiv = document.createElement("div")
    newDiv.classList.add("book");
    bookCardContainer.appendChild(newDiv);
    newDiv.textContent = book.title + ", written by " +book.author + ", has " + book.pages + " pages, and " + book.status + ".";
} );

// dialog window; 

const dialogShow = document.querySelector(".dialogShow");
const dialogWindow = document.querySelector(".dialogWindow");
const dialogClose = document.querySelector(".dialogClose");
dialogShow.addEventListener("click", () => {
    dialogWindow.showModal();
    infoMessage.textContent = "";
});
dialogClose.addEventListener("click", () => {
    dialogWindow.close();
    bookName.value = "";
    author.value = "";
    pageNr.value = "";
    statusBook.value = "";   
    infoMessage.textContent = "";
});

// create new book cards;

const bookName = document.querySelector("#bookName");
const author = document.querySelector("#author");
const pageNr = document.querySelector("#pageNr");
const statusBook = document.querySelector("#statusBook");
const infoMessage = document.querySelector(".infoMessage");
const submitForm = document.querySelector(".submitForm");

submitForm.addEventListener("click", (elem) => { 
    elem.preventDefault();
    if (bookName.value && author.value && pageNr.value && statusBook.value) {
        addBookToLibrary(bookName.value, author.value, pageNr.value, statusBook.value);
        const bookCardContainer = document.querySelector(".bookCardContainer");
        const newDiv = document.createElement("div")
        newDiv.classList.add("book");
        bookCardContainer.appendChild(newDiv);
        newDiv.textContent = bookName.value + ", written by " + author.value + ", has " + pageNr.value + " pages, and " + statusBook.value + ".";
        bookName.value = "";
        author.value = "";
        pageNr.value = "";
        statusBook.value = "";
    }
    else {
        infoMessage.textContent = "You didn't fill in all the forms!";
        bookName.value = "";
        author.value = "";
        pageNr.value = "";
        statusBook.value = "";
    };
}) 

