
function createBookElement(book, index) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book-item';
    bookDiv.innerHTML = getBookTemplate(book, index);
    return bookDiv;
}

function getBookTemplate(book, index) {
    return `
            <div class="book-card">
                <div class="book-header">
                    <h2 class="name">${book.name}</h2>
                    <span class="book-genre">${book.genre}</span>
                </div>
                <div class="book-image">
                    <img src="${book.pic}" alt="${book.name}">
                </div>
                <div class="book-meta">
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>Likes:</strong>  ${book.likes.toLocaleString()}
                        <button class="like-btn" data-index="${index}">
                        ${book.liked ? '❤️' : '🤍'}
                        </button>
                    </p>
                    <p><strong>Price:</strong> €${book.price.toFixed(2)}</p>
                    <p><strong>Year:</strong> ${book.publishedYear}</p>
                </div>
                <div class="book-comments">
                    <input type="text" class="commentinput" id="comment-input-${index}" placeholder="schreibe ein Kommentar..." required>
                    <button type="button" class="add-comment-btn" data-index="${index}">Absenden</button>
                    <h3>💬 Kommentare:</h3>
                    ${book.comments.map(comment => `
                        <div class="comment">
                            <b>${comment.name}:</b> ${comment.comment}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
}

function addEventListeners() {
    addCommentListeners();
    addLikeListeners();
}

function addCommentListeners() {
    document.querySelectorAll('.add-comment-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = this.getAttribute('data-index');
            const input = document.getElementById(`comment-input-${idx}`);
            const value = input.value.trim();
            if (value) {
                books[idx].comments.push({ name: "Gast", comment: value });
                renderBooks(books);
            }
        });
    });
}

function addLikeListeners() {
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = this.getAttribute('data-index');
            books[idx].liked = !books[idx].liked;
            if (books[idx].liked) {
                books[idx].likes++;
            } else {
                books[idx].likes--;
            }
            localStorage.setItem('liked', JSON.stringify(books));
            this.innerHTML = books[idx].liked ? '❤️' : '🤍';
            renderBooks(books);
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
    const storedBooks = localStorage.getItem('liked');
    return storedBooks ? JSON.parse(storedBooks) : [];
}
function init() {
    renderBooks(getFromLocalStorage());
}
renderBooks(books);