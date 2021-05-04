// Stores book objects
let myLibrary = [];

// Object constructor that constructs each individual book object
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.statusChange = function (id) {
  if (myLibrary[id].status === false) {
    myLibrary[id].status = true;
  } else if (myLibrary[id].status === true) {
    myLibrary[id].status = false;
  }
};

// Button that is used to add books to the myLibrary array
const addBookButton = document.getElementById("newBookBtn");
addBookButton.addEventListener("click", addBookToLibrary);

let titleOfBook = document.querySelector(".title");
let authorOfBook = document.querySelector(".author");
let pagesOfBook = document.querySelector(".pages");
let statusOfBook = document.querySelector(".status");

// Gets called by the addBookButton and pushes an object to the myLibrary array using the Book constructor
function addBookToLibrary() {
  myLibrary.push(
    new Book(
      titleOfBook.value,
      authorOfBook.value,
      pagesOfBook.value,
      statusOfBook.checked
    )
  );
  titleOfBook.value = "";
  authorOfBook.value = "";
  pagesOfBook.value = "";
  statusOfBook.checked = false;
  addBooksToPage();
  event.preventDefault();
}

//Looks at all the array objects and appends them to the DOM
function addBooksToPage() {
  if (bookContainer.firstChild) {
    while (bookContainer.firstChild) {
      bookContainer.removeChild(bookContainer.firstChild);
    }
  }
  for (let i = 0; i < myLibrary.length; i++) {
    const bookContainer = document.getElementById("bookContainer");
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.setAttribute("id", i);
    bookContainer.appendChild(bookDiv);

    const bookTitleInDiv = document.createElement("h1");
    bookTitleInDiv.classList.add("titleOfBook");
    bookTitleInDiv.textContent = myLibrary[i].title;
    bookDiv.appendChild(bookTitleInDiv);

    const bookAuthorInDiv = document.createElement("h2");
    bookAuthorInDiv.classList.add("authorOfBook");
    bookAuthorInDiv.textContent = myLibrary[i].author;
    bookDiv.appendChild(bookAuthorInDiv);

    const bookPagesInDiv = document.createElement("h2");
    bookPagesInDiv.classList.add("numberOfPages");
    bookPagesInDiv.textContent = myLibrary[i].pages;
    bookDiv.appendChild(bookPagesInDiv);

    const readStatus = document.createElement("input", "checkbox");
    readStatus.setAttribute("type", "checkbox");
    readStatus.setAttribute("id", i);
    readStatus.checked = myLibrary[i].status;
    readStatus.addEventListener("change", () => {
      myLibrary[i].statusChange(i);
    });
    bookDiv.appendChild(readStatus);

    const removeButton = document.createElement("button");
    removeButton.classList.add("removeBtn");
    removeButton.textContent = "Remove Book";
    removeButton.addEventListener("click", () => {
      myLibrary.splice(`${bookDiv.id}`, 1);
      addBooksToPage();
    });
    bookDiv.appendChild(removeButton);
  }
}
