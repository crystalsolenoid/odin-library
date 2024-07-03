const myLibrary = [];

function Book (title, author) {
	this.title = title;
	this.author = author;

	[this.element, this.deleteButton] = this.generateElement();
}

Book.prototype.generateElement = function() {
	let bookElement = document.createElement('li');
	bookElement.textContent = `${this.title} by ${this.author}`;
	deleteButton = document.createElement('button');
	deleteButton.textContent = "delete";
	bookElement.append(deleteButton);
	deleteButton.addEventListener("click", deleteBook);
	return [bookElement, deleteButton];
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

// TODO: don't allow empty books to be submitted (validate first)
function submitNewBook(event) {
	event.preventDefault();
	var newBook = addBookToLibrary(this[0].value, this[1].value);
	this.reset();
}

function addBookToLibrary(title, author) {
	var newBook = new Book(title, author);
	newBook.addToLibrary(myLibrary);
	return newBook;
}

const addBookForm = document.getElementById('add-book');
addBookForm.addEventListener("submit", submitNewBook);

addBookToLibrary("The Hobbit", "Tolkein");
addBookToLibrary("So You Want To Be A Wizard", "Diane Duane");
addBookToLibrary("Going Postal", "Terry Pratchett");
