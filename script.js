function renderBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book-item';
        bookDiv.innerHTML = `
            <div class="book-card">
                <div class="book-header">
                    <h2>${book.name}</h2>
                    <span class="book-genre">${book.genre}</span>
                </div>
                <div class="book-image">
                    <img src="${book.pic}" alt="${book.name}">
                </div>
                <div class="book-meta">
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>Likes:</strong> ❤️ ${book.likes.toLocaleString()}</p>
                    <p><strong>Price:</strong> €${book.price.toFixed(2)}</p>
                    <p><strong>Year:</strong> ${book.publishedYear}</p>
                </div>
                <div class="book-comments">
                    <input type="text" class="commentinput" id="comment-input-${index}" placeholder="schreibe ein Kommentar..." required>
                    <button type="button" class="add-comment-btn" data-index="${index}">Absenden</button>
                    <h3>💬 Kommentare:</h3>
                    ${book.comments.map(comment => `
                        <div class="comment">
                            <strong>${comment.name}:</strong> ${comment.comment}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        bookList.appendChild(bookDiv);
    });

    // Event Listener für alle Absenden-Buttons
    document.querySelectorAll('.add-comment-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = this.getAttribute('data-index');
            const input = document.getElementById(`comment-input-${idx}`);
            const value = input.value.trim();
            if (value) {
                books[idx].comments.push({ name: "Gast", comment: value });
                renderBooks(books); // Neu rendern, damit Kommentar erscheint
            }
        });
    });
}

renderBooks(books);