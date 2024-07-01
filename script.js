const myLibrary = [];

function Book () {
	// the constructor...
}

function addBookToLibrary(input) {
	myLibrary.push(new Book(input));
}

function displayLibrary() {
	let library = myLibrary;
	let libraryElement = document.getElementById('library');
	library.forEach((book) => {
		let bookElement = document.createElement('li');
		bookElement.textContent = `${book.title} by ${book.author}`;
		libraryElement.append(bookElement);
	});
}

myLibrary.push({title: "The Hobbit", author: "Tolkein"});
myLibrary.push({title: "So You Want To Be A Wizard", author: "Diane Duane"});
myLibrary.push({title: "Going Postal", author: "Terry Pratchett"});

displayLibrary();
