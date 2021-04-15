let myLibrary = [];

function Book (title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

const addBookButton = document.getElementById("newBookBtn");
addBookButton.addEventListener("click", addBookToLibrary);

const titleOfBooka = document.getElementById("title")
const authorOfBooka = document.getElementById("author")
const pagesOfBooka = document.getElementById("pages")
const statusOfBooka = document.getElementById("status")


function addBookToLibrary(){
    const book = new Book(`${titleOfBooka.value}`, `${authorOfBooka.value}`, `${pagesOfBooka.value}`, `${statusOfBooka.value}`)
    myLibrary.push(book)
    const bookContainer = document.getElementById("bookContainer");    
    const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = titleOfBooka.value
    bookContainer.appendChild(bookDiv);
    event.preventDefault();
}


