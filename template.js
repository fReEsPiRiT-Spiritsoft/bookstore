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


function showFavoritOverlay() {
    const overlay = document.getElementById('favoritOverlay');
    const favList = document.getElementById('favorit-list');
    const favorites = getFromLocalStorage().filter(book => book.liked);

    if (favorites.length === 0) {
        favList.innerHTML = "<p>Keine Favoriten vorhanden.</p>";
    } else {
        favList.innerHTML = favorites.map(book =>
            `<div class="fav-book">
                <h3>${book.name}</h3>
                <p>von ${book.author}</p>
                <img src="${book.pic}" alt="${book.name}" style="max-width:100px;">
            </div>`
        ).join('');
    }
    overlay.style.display = 'block';
}