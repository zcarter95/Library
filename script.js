if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
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

