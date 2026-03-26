
//the array where the books will be stored;

const myLibrary = [];

//the class that will create all Book instances;

class Book {
    constructor (title, author, pages, status) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    changeStatus() {
        if (this.status === "I did not read it") {
            this.status = "I read it";  
        }
        else if (this.status === "I read it") {
            this.status = "I did not read it";
        }
        else {};
    }
};

// the function to create new Book instances and store them in the array;

function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
};

// library logic and ui logic made with a IIFEs (old style module?); 

(function controlLibrary() {
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

// create new book cards, delete them, and change their status; 

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

                const statusButtons = document.createElement("button");
                statusButtons.classList.add("statusButton");
                statusButtons.textContent = "Change status";
                buttonsControl.appendChild(statusButtons);
        
                buttonsControl.addEventListener("click", (elem) => {
                    const statusButtonsSibling = (elem.target.parentElement).previousElementSibling;
                    const elemPPElement = (elem.target.parentElement).parentElement; 
                    if (elem.target.textContent === "Change status") { 
                        myLibrary.forEach( (obj) => {
                            if (obj.id === elemPPElement.dataset.id) {
                                const objStat = myLibrary.indexOf(obj);
                                myLibrary[objStat].changeStatus(); 
                                const obj1 = myLibrary[objStat];
                                statusButtonsSibling.textContent = obj1.title + ", written by " + obj1.author + ", has " + obj1.pages + " pages, and " + obj1.status + ".";    
                            }
                            else {};
                        } ); 
                    }
                    else if (elem.target.textContent = "Delete") {
                        myLibrary.forEach( (obj) => {
                            if (obj.id === elemPPElement.dataset.id) { 
                                const objDel = myLibrary.indexOf(obj);
                                myLibrary.splice(objDel, 1);
                            }
                            else {
                                false; 
                            };
                            elemPPElement.remove(); 
                        }); 
                    }
                    else {};
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
            };
        console.log(myLibrary); 
    } ); 
}) ();




