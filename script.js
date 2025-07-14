
function createBookElement(book, index) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book-item';
    bookDiv.innerHTML = getBookTemplate(book, index);
    return bookDiv;
}


function getBookHeader(book) {
    return `
        <div class="book-header">
            <h2 class="name">${book.name}</h2>
            <span class="book-genre">${book.genre}</span>
        </div>
    `;
}


function getBookImage(book) {
    return `
        <div class="book-image">
            <img src="${book.pic}" alt="${book.name}">
        </div>
    `;
}


function getBookMeta(book, index) {
    return `
        <div class="book-meta">
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Likes:</strong> ${book.likes.toLocaleString()}
                <button class="like-btn" data-index="${index}">
                ${book.liked ? '❤️' : '🤍'}
                </button>
            </p>
            <p><strong>Price:</strong> ${book.price.toFixed(2)} €</p>
            <p><strong>Year:</strong> ${book.publishedYear}</p>
        </div>
    `;
}


function getBookComments(book, index) {
    return `
        <div class="book-comments">
            <input type="text" class="commentinput" id="comment-input-${index}" placeholder="schreibe ein Kommentar..." required>
            <button type="button" class="add-comment-btn" data-index="${index}">Absenden</button>
            <h3>💬 Kommentare:</h3>
            ${book.comments.slice().reverse().map(comment => `
                <div class="comment">
                    <b>${comment.name}:</b> ${comment.comment}
                </div>
            `).join('')}
        </div>
    `;
}


function getBookTemplate(book, index) {
    return `
        <div class="book-card">
            ${getBookHeader(book)}
            ${getBookImage(book)}
            ${getBookMeta(book, index)}
            ${getBookComments(book, index)}
        </div>
    `;
}


function addEventListeners() {
    addCommentListeners();
    addLikeListeners();
}


function addLikeListeners() {
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = this.getAttribute('data-index');
            let currentBooks = getFromLocalStorage();
            currentBooks[idx].liked = !currentBooks[idx].liked;
            if (currentBooks[idx].liked) {
                currentBooks[idx].likes++;
            } else {
                currentBooks[idx].likes--;
            }
            localStorage.setItem('bookData', JSON.stringify(currentBooks));
            this.innerHTML = currentBooks[idx].liked ? '❤️' : '🤍';
            renderBooks(currentBooks);
        });
    });
}


function addCommentListeners() {
    document.querySelectorAll('.add-comment-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = this.getAttribute('data-index');
            const input = document.getElementById(`comment-input-${idx}`);
            const value = input.value.trim();
            if (value) {
                let currentBooks = getFromLocalStorage();
                currentBooks[idx].comments.push({ name: "Gast", comment: value });
                localStorage.setItem('bookData', JSON.stringify(currentBooks));
                renderBooks(currentBooks);
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
