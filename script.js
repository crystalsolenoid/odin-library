const myLibrary = [];

function Book (title, author, read) {
	this.title = title;
	this.author = author;
	this.read = read;

	[this.element, this.deleteButton, this.readElement] = this.generateElement();
}

Book.prototype.generateElement = function() {
	let bookElement = document.createElement('li');
	bookElement.textContent = `${this.title} by ${this.author}`;

	let readElement = document.createElement('button');
	readElement.textContent = this.read ? "read" : "not read";
	readElement.addEventListener("click", toggleRead);
	readElement.book = this;
	bookElement.append(readElement);

	deleteButton = document.createElement('button');
	deleteButton.textContent = "delete";
	bookElement.append(deleteButton);
	deleteButton.addEventListener("click", deleteBook);

	return [bookElement, deleteButton, readElement];
};

Book.prototype.setIndex = function(index) {
	this.index = index;
	this.element.id = `book-${index}`;
	this.deleteButton.index = index;
};

Book.prototype.addToLibrary = function(library) {
	index = library.push(this) - 1;
	this.setIndex(index);
	let libraryElement = document.getElementById('library');
	libraryElement.append(this.element);
}

Book.prototype.deleteFromLibrary = function() {
	document.getElementById(`book-${this.index}`).remove();
	delete this;
}

function deleteBook(event) {
	let book = myLibrary[this.index];
	book.deleteFromLibrary()
}

function toggleRead(event) {
	this.book.read = !this.book.read;
	this.textContent = this.book.read ? "read" : "not read";
}


// TODO: don't allow empty books to be submitted (validate first)
function submitNewBook(event) {
	event.preventDefault();
	var newBook = addBookToLibrary(this[0].value, this[1].value, this[2].checked);
	this.reset();
}

function addBookToLibrary(title, author, read) {
	var newBook = new Book(title, author, read);
	newBook.addToLibrary(myLibrary);
	return newBook;
}

const addBookForm = document.getElementById('add-book');
addBookForm.addEventListener("submit", submitNewBook);

addBookToLibrary("The Hobbit", "Tolkein", true);
addBookToLibrary("So You Want To Be A Wizard", "Diane Duane", true);
addBookToLibrary("Going Postal", "Terry Pratchett", false);
