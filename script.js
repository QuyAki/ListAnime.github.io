// This script is optional and provides a way to dynamically add movies.
// For a static list, you can simply add the HTML directly in index.html.

document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        {
            title: "Your Name (Kimi no Na wa.)",
            cover: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.jpg", // Replace with actual path or URL
            rating: "⭐⭐⭐⭐⭐",
            genre: "Anime, Fantasy, Romance",
            description: "A high school boy and a high school girl swap bodies, leading to a profound connection across time and space."
        },
        {
            title: "A Silent Voice (Koe no Katachi)",
            cover: "https://upload.wikimedia.org/wikipedia/en/b/b3/A_Silent_Voice_film_poster.jpg", // Replace with actual path or URL
            rating: "⭐⭐⭐⭐⭐",
            genre: "Anime, Drama, Romance",
            description: "A former bully tries to make amends with a deaf girl he tormented in elementary school."
        },
        {
            title: "5 Centimeters Per Second",
            cover: "https://upload.wikimedia.org/wikipedia/en/c/ce/5_Centimeters_Per_Second_film_poster.jpg", // Replace with actual path or URL
            rating: "⭐⭐⭐⭐",
            genre: "Anime, Drama, Romance",
            description: "A series of short stories following a young man's relationships with the girls in his life and the distance that grows between them."
        }
        // Add more movie objects here
    ];

    const movieListContainer = document.querySelector('.movie-list-container');

    movies.forEach(movie => {
        const movieEntry = document.createElement('div');
        movieEntry.classList.add('movie-entry');

        movieEntry.innerHTML = `
            <div class="movie-cover">
                <img src="${movie.cover}" alt="${movie.title} cover">
            </div>
            <div class="movie-details">
                <h2 class="movie-title">${movie.title}</h2>
                <p class="movie-rating">Đánh giá: ${movie.rating}</p>
                <p class="movie-genre">Thể loại: ${movie.genre}</p>
                <p class="movie-description">${movie.description}</p>
            </div>
        `;

        movieListContainer.appendChild(movieEntry);
    });
});
