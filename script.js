function renderBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; 

    books.forEach(book => {
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
                <div class="book-meta">
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Likes:</strong> ❤️ ${book.likes.toLocaleString()}</p>
                <p><strong>Price:</strong> €${book.price.toFixed(2)}</p>
                <p><strong>Year:</strong> ${book.publishedYear}</p>
                </div>
                <div class="book-comments">
                <input type="text" class="commentinput" id="comment" placeholder="schreibe ein Kommentar..." required>
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
}

console.log(books[1].author);
renderBooks(books);