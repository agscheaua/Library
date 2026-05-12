
export {hideErrorBox};
export {addClickVerification};
export {clearErrorBoxWhenCloseModal};
export {clearErrorBoxWhenOpenModal};

// get all the necesary elements to assign them different actions;


const bookName = document.querySelector('#bookName');
const author = document.querySelector('#author');
const pageNr = document.querySelector('#pageNr');
const statusBook = document.querySelector('#statusBook');

const submitForm = document.querySelector('.submitForm');

// hide all error boxes to not be seen when we open the modal;

function hideErrorBox() {
  const getAllErrorBox = document.querySelectorAll(".errorMsj");
  getAllErrorBox.forEach( (item) => {
    item.classList.add("hideError");
    console.log(item.classList);
  }); 
};

// functions to set the the text and style it when the control do not meet the; 
// requirements;

function checkValidityBookName() {
  const errorMessageBook = document.querySelector(".errorMessageBook");
  if ( !(bookName.checkValidity()) ) {
    errorMessageBook.textContent = "Book name is empty.";
    errorMessageBook.classList.remove("hideError");
    errorMessageBook.classList.add("error");
  } else {
    errorMessageBook.textContent = "";
    errorMessageBook.classList.add("hideError");
  };
};

function checkValidityAuthor() {
  const errorMessageAuthor = document.querySelector(".errorMessageAuthor");
  if ( !(author.checkValidity()) ) {
    errorMessageAuthor.textContent = "Author name is empty.";
    errorMessageAuthor.classList.remove("hideError");
    errorMessageAuthor.classList.add("error");
  } else {
    errorMessageAuthor.textContent = "";
    errorMessageAuthor.classList.add("hideError");
  };
};

function checkValidityPageNr() {
  const regexNrOnly = new RegExp("^[0-9]");
  const errorMessagePage = document.querySelector(".errorMessagePage");
  if ( !(regexNrOnly.test(pageNr.value)) ) {
    errorMessagePage.textContent = "Invalid value inputed, only numbers between 0-9";
    errorMessagePage.classList.remove("hideError");
    errorMessagePage.classList.add("error");
  } else if ( !(pageNr.checkValidity()) ) {
    errorMessagePage.textContent = "Page number is empty.";
    errorMessagePage.classList.remove("hideError");
    errorMessagePage.classList.add("error");
  } else {
    errorMessagePage.textContent = "";
    errorMessagePage.classList.add("hideError");
  };
};

function checkValidityStatusBook() {
  const errorMessageStatus = document.querySelector(".errorMessageStatus");
  if ( !(statusBook.checkValidity()) ) {
    errorMessageStatus.textContent = "Status is empty.";
    errorMessageStatus.classList.remove("hideError");
    errorMessageStatus.classList.add("error");
  } else {
    errorMessageStatus.textContent = "";
    errorMessageStatus.classList.add("hideError");
  };
};

// add the checkingValidation function as events for the submit form modal button;

function addClickVerification() {
  submitForm.addEventListener('click', checkValidityBookName);
  submitForm.addEventListener("click", checkValidityAuthor);
  submitForm.addEventListener("click", checkValidityPageNr);
  submitForm.addEventListener("click", checkValidityStatusBook);
};

// clear modal of text when closeing and opening;

const dialogShow = document.querySelector('.dialogShow');
const dialogWindow = document.querySelector('.dialogWindow');
const dialogClose = document.querySelector('.dialogClose');

function clearErrorBoxWhenCloseModal() {
  dialogClose.addEventListener("click", () => {
    dialogWindow.close();
    const getAllErrorBox = document.querySelectorAll(".errorMsj");
    getAllErrorBox.forEach( (item) => {
      item.textContent = "";
      item.classList.add("hideError");
    }); 
  });
};

function clearErrorBoxWhenOpenModal() {
  dialogShow.addEventListener("click", () => {
    dialogWindow.showModal();
    const getAllErrorBox = document.querySelectorAll(".errorMsj");
    getAllErrorBox.forEach( (item) => {
      item.textContent = "";
      item.classList.add("hideError");
    });
  });
};
