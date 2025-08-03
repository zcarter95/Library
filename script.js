if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    updateLibrary();
    addBook();
}

function addBook() {
    let add_book_button = document.getElementsByClassName('add-book')[0];
    add_book_button.addEventListener('click', bringUpInput)

}
function bringUpInput() {
    let header = document.getElementsByClassName('header')[0];
    let form = document.createElement('form');
    form.className = 'new-book';
    let formContents = `
            <div class="input book-title">
                <label for="title">Title</label>
                <input type="text" id="title" name="book_title">
            </div>
            <div class="input book-author">
                <label for="author">Author</label>
                <input type="text" id="author" name="book_author">
            </div>
            <div class="input book-pages">
                <label for="pages">Pages</label>
                <input type="number" id="pages" name="book_pages">
            </div>
            <div class="input book-read">
                <label for="read">Read?</label>
                <select name="book_read" id="read">
                    <optgroup>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </optgroup>
                </select>
            </div>
            <button type="submit">Add</button>
        `
        form.innerHTML = formContents;
        header.append(form);
}
function updateLibrary() {
    myLibrary.forEach((book) => {
        let content = document.getElementsByClassName('content')[0];
        let card = document.createElement("div");
        card.className = 'card';
        let cardContents = `
                <h1>${book.name}</h1>
                <ul>
                    <li>Author: ${book.author}</li>
                    <li>Pages:${book.pages}</li>
                    <li>Read:${book.read}</li>
                </ul>
                <button class="remove">Remove</button>
            `
        card.innerHTML = cardContents;
        content.append(card);
    });
}
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
addBookToLibrary("Harry Potter and the Sorcer's Stone", "J.K. Rowling", 500, true);

