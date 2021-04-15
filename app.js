let myLibrary = [];

function Book (title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

const addBookButton = document.getElementById("newBookBtn");
addBookButton.addEventListener("click", addBookToLibrary);

const titleOfBook = document.getElementById("title")
const authorOfBook = document.getElementById("author")
const pagesOfBook = document.getElementById("pages")
const statusOfBook = document.getElementById("status")


function addBookToLibrary(){
    const book = new Book(titleOfBook.value, authorOfBook.value, pagesOfBook.value, statusOfBook.value)
    myLibrary.push(book)
    // const bookContainer = document.getElementById("bookContainer");    
    // const bookDiv = document.createElement("div");
    // const bookTitleInDiv = document.createElement("h1");
    //     bookTitleInDiv.classList.add("titleOfBook");
    //     bookTitleInDiv.textContent = titleOfBook.value
    //     bookDiv.appendChild(bookTitleInDiv);

    // const bookAuthorInDiv = document.createElement("h2")
    //     bookAuthorInDiv.classList.add("authorOfBook");
    //     bookAuthorInDiv.textContent = authorOfBook.value
    //     bookDiv.appendChild(bookAuthorInDiv);

    // const bookPagesInDiv = document.createElement("h2")
    //     bookPagesInDiv.classList.add("numberOfPages");    
    //     bookPagesInDiv.textContent = pagesOfBook.value
    //     bookDiv.appendChild(bookPagesInDiv);

    // bookDiv.classList.add("book");
    // bookContainer.appendChild(bookDiv);
    addAllBooks();
    event.preventDefault();
    titleOfBook.value = "";
    authorOfBook.value = "";
    pagesOfBook.value = "";
}

function addAllBooks(){
    myLibrary.forEach(element => {
        const bookContainer = document.getElementById("bookContainer");    
        const bookDiv = document.createElement("div");
        const bookTitleInDiv = document.createElement("h1");
            bookTitleInDiv.classList.add("titleOfBook");
            bookTitleInDiv.textContent = titleOfBook.value
            bookDiv.appendChild(bookTitleInDiv);
    
        const bookAuthorInDiv = document.createElement("h2")
            bookAuthorInDiv.classList.add("authorOfBook");
            bookAuthorInDiv.textContent = authorOfBook.value
            bookDiv.appendChild(bookAuthorInDiv);
    
        const bookPagesInDiv = document.createElement("h2")
            bookPagesInDiv.classList.add("numberOfPages");    
            bookPagesInDiv.textContent = pagesOfBook.value
            bookDiv.appendChild(bookPagesInDiv);
    
        bookDiv.classList.add("book");
        bookContainer.appendChild(bookDiv);
    });
}

