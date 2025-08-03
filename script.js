const myLibrary = [];

function Book(id, name, author, pages, read) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
  id = crypto.randomUUID();
  let new_book = new Book(id, name, author, pages, read);
  myLibrary.push(new_book);
}

addBookToLibrary("The Way of Kings", "Brandon Sanderson", 1007, true);