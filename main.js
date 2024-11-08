const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookId = document.getElementById('bookId');
const addBook = document.getElementById('addBook');
const removeBook = document.getElementById('removeBook');

function dangerAlert(){
    const div = document.createElement('div');
    div.className = `alert alert-danger`;
    div.appendChild(document.createTextNode('Fill the form'));
    const container = document.querySelector('.container');
    const bookForm = document.querySelector('#book-form');
    container.insertBefore(div,bookForm);
    setTimeout(()=>document.querySelector('.alert').remove(),3000);

}

function successAlert(){
    const div = document.createElement('div');
    div.className = `alert alert-success`;
    div.appendChild(document.createTextNode('Successfully Added'));
    const container = document.querySelector('.container');
    const bookForm = document.querySelector('#book-form');
    container.insertBefore(div,bookForm);
    setTimeout(()=>document.querySelector('.alert').remove(),3000);

}

function removeAlert(){
    const div = document.createElement('div');
    div.className = `alert alert-warning`;
    div.appendChild(document.createTextNode('Entry removed'));
    const container = document.querySelector('.container');
    const bookForm = document.querySelector('#book-form');
    container.insertBefore(div,bookForm);
    setTimeout(()=>document.querySelector('.alert').remove(),3000);

}



addBook.addEventListener('click',(event)=>{
    event.preventDefault();
    // console.log(bookTitle.value);
    // console.log(bookAuthor.value);
    // console.log(bookId.value);

    // Creating rows for the table 
    const bookList = document.querySelector('#book-list');
    const bookRow = document.createElement('tr');


    if (bookTitle.value === '' || bookAuthor.value === '' || bookId.value === '') {

        dangerAlert();

    }

    else {
        bookRow.innerHTML = `
        <td>${bookTitle.value}</td>
        <td>${bookAuthor.value}</td>
        <td>${bookId.value}</td>
        <td><a href="#" class="removeBook" id="removeBook">X</a></td>
    `;
    bookList.appendChild(bookRow);
    successAlert();

    bookTitle.value = '';
    bookAuthor.value =  '';
    bookId.value = '';


    bookRow.querySelector('.removeBook').addEventListener('click',(event) => {
        bookRow.remove();
        removeAlert();
    });
    }

});
