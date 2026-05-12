
export {hideErrorBox};
export {addClickVerification};
export {clearErrorBoxWhenCloseModal};
export {clearErrorBoxWhenOpenModal};

const bookName = document.querySelector('#bookName');
const author = document.querySelector('#author');
const pageNr = document.querySelector('#pageNr');
const statusBook = document.querySelector('#statusBook');

const infoMessage = document.querySelector('.infoMessage');
const submitForm = document.querySelector('.submitForm');
const bookCardContainer = document.querySelector('.bookCardContainer');

function hideErrorBox() {
  const getAllErrorBox = document.querySelectorAll(".errorMsj");
  getAllErrorBox.forEach( (item) => {
    item.classList.add("hideError");
    console.log(item.classList);
  }); 
};

function checkValidityBookName() {
  const errorMessageBook = document.querySelector(".errorMessageBook");
  if ( !(bookName.checkValidity()) ) {
    errorMessageBook.textContent = "Book name is empty.";
    errorMessageBook.classList.remove("hideError");
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
  } else {
    errorMessageAuthor.textContent = "";
    errorMessageAuthor.classList.add("hideError");
  };
};

function checkValidityPageNr() {
  const errorMessagePage = document.querySelector(".errorMessagePage");
  if ( !(pageNr.checkValidity()) ) {
    errorMessagePage.textContent = "Page number is empty.";
    errorMessagePage.classList.remove("hideError");
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
  } else {
    errorMessageStatus.textContent = "";
    errorMessageStatus.classList.add("hideError");
  };
};

function addClickVerification() {
  submitForm.addEventListener('click', checkValidityBookName);
  submitForm.addEventListener("click", checkValidityAuthor);
  submitForm.addEventListener("click", checkValidityPageNr);
  submitForm.addEventListener("click", checkValidityStatusBook);
};

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