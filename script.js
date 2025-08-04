if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeBookButtons = document.getElementsByClassName("remove");
  for (var i = 0; i < removeBookButtons.length; i++) {
    let button = removeBookButtons[i];
    button.addEventListener("click", removeBook);
  }
  let readButtons = document.getElementsByClassName("read");
  for (var i = 0; i < readButtons.length; i++) {
    let button = readButtons[i];
    button.addEventListener("click", updateRead);
  }
  updateLibrary();
  addBook();
}

function updateReadClicked(event) {
  var buttonClicked = event.target
  var bookId = buttonClicked.parentElement.id;
  var book = myLibrary.find(book => book.id == bookId);
  book.updateRead();
  let bookElement = document.getElementById(book.id);
  let bookReadStatus = bookElement.querySelector('.read-status');
  bookReadStatus.textContent = "Read: " + book.read;
}

function removeBook(event) {
  var newLibrary = [];
  var buttonClicked = event.target;
  myLibrary.forEach((book) => {
    if (book.id != buttonClicked.parentElement.id) {
      newLibrary.push(book);
    }
  });
  myLibrary = newLibrary;
  buttonClicked.parentElement.remove();
}

function addBook() {
  let add_book_button = document.getElementsByClassName("add-book")[0];
  add_book_button.addEventListener("click", bringUpInput);
  let submit = document.getElementsByClassName("new-book")[0];
  submit.addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(submit);
    addBookToLibrary(
      Object.fromEntries(formData).book_title,
      Object.fromEntries(formData).book_author,
      Object.fromEntries(formData).book_pages,
      Object.fromEntries(formData).book_read
    );
    updateLibrary();
    let form = document.getElementsByClassName("new-book-form")[0];
    form.style.display = "none";
    document.getElementsByClassName("new-book")[0].reset();
  });
}
function bringUpInput() {
  let form = document.getElementsByClassName("new-book-form")[0];
  if (form.style.display === "none") {
    form.style.display = null;
  } else {
    form.style.display = "none";
  }
}
function updateLibrary() {
  myLibrary.forEach((book) => {
    card_id = document.getElementById(book.id);
    if (card_id) {
      return;
    }
    let content = document.getElementsByClassName("content")[0];
    let card = document.createElement("div");
    card.className = "card";
    card.id = book.id;
    let cardContents = `
                <h1>${book.name}</h1>
                <ul>
                    <li>Author: ${book.author}</li>
                    <li>Pages:${book.pages}</li>
                    <li class="read-status">Read:${book.read}</li>
                </ul>
                <button class="read">Read</button>
                <button class="remove">Remove</button>
            `;
    card.innerHTML = cardContents;
    content.append(card);
    card
      .getElementsByClassName("remove")[0]
      .addEventListener("click", removeBook);
    card.getElementsByClassName("read")[0].addEventListener("click", updateReadClicked);
  });
}
let myLibrary = [];

function Book(id, name, author, pages, read) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.updateRead = function () {
  if (this.read === true) {
    this.read = false;
  } else {
    this.read = true;
  }
  console.log(this.read)
};

function addBookToLibrary(name, author, pages, read) {
  id = crypto.randomUUID();
  let new_book = new Book(id, name, author, pages, read);
  myLibrary.push(new_book);
}
