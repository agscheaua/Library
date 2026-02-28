
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
Book.prototype.changeStatus = function () {
    if (this.status === "I did not read it") {
        this.status = "I read it";  
    }
    else if (this.status === "I read it") {
        this.status = "I did not read it";
    }
    else {};
}; 

// the function to create new books and store them in the array;

function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
};

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

// create new book cards and delete them;

const bookName = document.querySelector("#bookName");
const author = document.querySelector("#author");
const pageNr = document.querySelector("#pageNr");
const statusBook = document.querySelector("#statusBook");

const infoMessage = document.querySelector(".infoMessage");
const submitForm = document.querySelector(".submitForm");
const bookCardContainer = document.querySelector(".bookCardContainer");

submitForm.addEventListener("click", (elem) => { 
    elem.preventDefault();
    if (bookName.value && author.value && pageNr.value && statusBook.value) {

        addBookToLibrary(bookName.value, author.value, pageNr.value, statusBook.value);

        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        const idAttribute = myLibrary.length -1;
        bookCard.setAttribute("data-id", myLibrary[idAttribute].id);
        bookCardContainer.appendChild(bookCard);

            const book = document.createElement("div");
            book.classList.add("book");
            bookCard.appendChild(book);
            book.textContent = bookName.value + ", written by " + author.value + ", has " + pageNr.value + " pages, and " + statusBook.value + ".";

            const buttonsControl = document.createElement("div");
            buttonsControl.classList.add("buttonsControls");
            bookCard.appendChild(buttonsControl);
             
                const delButton = document.createElement("button");
                delButton.classList.add("delButton")
                delButton.textContent = "Delete";
                buttonsControl.appendChild(delButton);

        const getdelButtons = Array.from(document.querySelectorAll(".delButton"));
        getdelButtons.forEach( (elem) => { 
            elem.addEventListener("click", () => {
                const elemPPElement = (elem.parentElement).parentElement;
                elemPPElement.remove();  
                myLibrary.forEach( (obj) => {
                    if (obj.id === elemPPElement.dataset.id) { 
                        const objDel = myLibrary.indexOf(obj);
                        myLibrary.splice(objDel, 1);
                    }
                    else {
                        false;
                    };
                }); 
            });
        }); 

        const statusButtons = document.createElement("button");
        statusButtons.classList.add("statusButton");
        statusButtons.textContent = "text";
        buttonsControl.appendChild(statusButtons);
        
        const getstatusButtons = Array.from(document.querySelectorAll(".statusButton"));
        getstatusButtons.forEach( (elem) => {
            elem.addEventListener("click", () => {
                const statusButtonsSibling = (elem.parentElement).previousElementSibling;
                const elemPPElement = (elem.parentElement).parentElement;
                myLibrary.forEach( (obj) => {
                    if (obj.id === elemPPElement.dataset.id) {
                        const objStat = myLibrary.indexOf(obj);
                        myLibrary[objStat].changeStatus(); 
                        const obj1 = myLibrary[objStat];
                        statusButtonsSibling.textContent = obj1.title + ", written by " + obj1.author + ", has " + obj1.pages + " pages, and " + obj1.status + ".";  
                    }
                    else {
                    };
                } );
            });
        });
        
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
    }
    console.log(myLibrary);
} ) 






