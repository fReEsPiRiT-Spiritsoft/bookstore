function createBookElement(book, index) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book-item';
    bookDiv.id = `book-item-${index}`; // Eindeutige ID
    bookDiv.innerHTML = getBookTemplate(book, index);
    return bookDiv;
}


function addEventListeners() {
    addCommentListeners();
    addLikeListeners();
}


function addLikeListeners() {
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const idx = this.getAttribute('data-index');
            let currentBooks = getFromLocalStorage();
            currentBooks[idx].liked = !currentBooks[idx].liked;
            if (currentBooks[idx].liked) {
                currentBooks[idx].likes++;
            } else {
                currentBooks[idx].likes--;
            }
            localStorage.setItem('bookData', JSON.stringify(currentBooks));
            const bookDiv = document.getElementById(`book-item-${idx}`);
            bookDiv.outerHTML = createBookElement(currentBooks[idx], idx).outerHTML;
            addCommentListeners();
            addLikeListeners();
        });
    });
}


function addCommentListeners() {
    document.querySelectorAll('.add-comment-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const idx = this.getAttribute('data-index');
            const input = document.getElementById(`comment-input-${idx}`);
            const value = input.value.trim();
            if (value) {
                let currentBooks = getFromLocalStorage();
                currentBooks[idx].comments.push({ name: "Gast", comment: value });
                const bookDiv = document.getElementById(`book-item-${idx}`);
                bookDiv.outerHTML = createBookElement(currentBooks[idx], idx).outerHTML;
                addCommentListeners();
                addLikeListeners();
            }
        });
    });
}


function renderBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const bookDiv = createBookElement(book, index);
        bookList.appendChild(bookDiv);
    });
    addEventListeners();
}


function getFromLocalStorage() {
    const storedData = localStorage.getItem('bookData');
    if (storedData) {
        return JSON.parse(storedData);
    }
    return books;
}


function init() {
    renderBooks(getFromLocalStorage());
}