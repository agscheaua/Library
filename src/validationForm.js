function checkValidityBookName() {
  if (bookName.checkValidity()) {
    console.log('hello')
  }
}

submitForm.addEventListener('click', checkValidityBookName)
