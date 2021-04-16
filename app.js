
let myLibrary = [];

function Book(title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

const addBookButton = document.getElementById("newBookBtn");
addBookButton.addEventListener("click", addBookToLibrary);

let titleOfBook = document.querySelector(".title");
let authorOfBook = document.querySelector(".author");
let pagesOfBook = document.querySelector(".pages");


function addBookToLibrary(){
    myLibrary.push(new Book(titleOfBook.value, authorOfBook.value, pagesOfBook.value));
    titleOfBook.value = "";
    authorOfBook.value = "";
    pagesOfBook.value = "";
    addBooksToPage();
}

function addBooksToPage(){
    if(bookContainer.firstChild){
        while(bookContainer.firstChild){
            bookContainer.removeChild(bookContainer.firstChild);
        }
    } 
    for (let i = 0; i < myLibrary.length; i++) {
        const bookContainer = document.getElementById("bookContainer");    
        const bookDiv = document.createElement("div");
        const bookTitleInDiv = document.createElement("h1");  
            bookTitleInDiv.classList.add("titleOfBook");
            bookTitleInDiv.textContent = myLibrary[i].title
            bookDiv.appendChild(bookTitleInDiv);
    
        const bookAuthorInDiv = document.createElement("h2")
            bookAuthorInDiv.classList.add("authorOfBook");
            bookAuthorInDiv.textContent = myLibrary[i].author
            bookDiv.appendChild(bookAuthorInDiv);
    
        const bookPagesInDiv = document.createElement("h2")
            bookPagesInDiv.classList.add("numberOfPages");    
            bookPagesInDiv.textContent = myLibrary[i].pages
            bookDiv.appendChild(bookPagesInDiv);
    
        bookDiv.classList.add("book");
        bookContainer.appendChild(bookDiv);
    }
    event.preventDefault();
}

function addOneBook(){
    
}

