const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookId = document.getElementById('bookId');
const addBook = document.getElementById('addBook');

addBook.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(bookTitle.value);
    console.log(bookAuthor.value);
    console.log(bookId.value);

    // Creating rows for the table 
    const bookList = document.querySelector('#book-list');
    const bookRow = document.createElement('tr');

    bookRow.innerHTML = `
        <td>${bookTitle.value}</td>
        <td>${bookAuthor.value}</td>
        <td>${bookId.value}</td>
        <td><a href="#" class="btn btn-danger btn-sm-delete">X</a></td>
    `;

    bookList.appendChild(bookRow);

});
