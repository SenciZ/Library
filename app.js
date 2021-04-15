let myLibrary = [];

function Book (title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

const addBookButton = document.getElementById("newBookBtn").addEventListener("click", addBookToLibrary);

function addBookToLibrary(){
    const bookContainer = document.getElementById("bookContainer");    
    const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
    bookContainer.appendChild(bookDiv);
}

