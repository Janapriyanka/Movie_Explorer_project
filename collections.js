// Prevent script from running on pages that don't have the movie section

const movieContainer = document.getElementById("movieContainer");

if (movieContainer) {

const movies = [

{
title:"Avengers",
genre:"Action",
img:"collection images/avengers.jpg"
},

{
title:"Batman Begins",
genre:"Action",
img:"collection images/batman.jpg"
},

{
title:"Inception",
genre:"Sci-Fi",
img:"collection images/inception.webp"
},

{
title:"Titanic",
genre:"Drama",
img:"collection images/titanic.webp"
},

{
title:"Joker",
genre:"Drama",
img:"collection images/joker.jpg"
},

{
title:"Interstellar",
genre:"Sci-Fi",
img:"collection images/interstellar.jpg"
},

{
title:"Gladiator",
genre:"Action",
img:"collection images/gladiator.webp"
},

{
title:"Parasite",
genre:"Thriller",
img:"collection images/parasite.png"
},

{
title:"The Dark Knight",
genre:"Action",
img:"collection images/dark knight.webp"
},

{
title:"Shutter Island",
genre:"Thriller",
img:"collection images/shutterisland.jpg"
},

{
title:"The Matrix",
genre:"Sci-Fi",
img:"collection images/matrix.jpg"
},

{
title:"Fight Club",
genre:"Drama",
img:"collection images/fightclub.jpg"
},

{
title:"John Wick",
genre:"Action",
img:"collection images/johnwick.jpg"
},

{
title:"Avatar",
genre:"Sci-Fi",
img:"collection images/avatar.jpg"
},

{
title:"The Prestige",
genre:"Drama",
img:"collection images/prestige.jpg"
},

{
title:"Se7en",
genre:"Thriller",
img:"collection images/seven.jpg"
},

{
title:"Mad Max Fury Road",
genre:"Action",
img:"collection images/madmax.webp"
},

{
title:"Gravity",
genre:"Sci-Fi",
img:"collection images/gravity.jpg"
},

{
title:"Whiplash",
genre:"Drama",
img:"collection images/whiplash.jpg"
},

{
title:"Gone Girl",
genre:"Thriller",
img:"collection images/gonegirl.jpg"
}

];

const searchInput = document.getElementById("searchInput");
const filterGenre = document.getElementById("filterGenre");


// Function to display movies

function displayMovies(movieList){

movieContainer.innerHTML="";

movieList.forEach(movie => {

movieContainer.innerHTML +=

`<div class="movie-card bg-gray-800 rounded-lg overflow-hidden shadow-lg">

<img src="${movie.img}" alt="${movie.title}" class="w-full h-80 object-cover">

<div class="p-3">

<h2 class="text-lg font-bold">${movie.title}</h2>

<p class="text-gray-400">${movie.genre}</p>

</div>

</div>`;

});

}


// Show all movies initially

displayMovies(movies);


// Search functionality

searchInput.addEventListener("input", () => {

let searchValue = searchInput.value.toLowerCase();

let filteredMovies = movies.filter(movie =>
movie.title.toLowerCase().includes(searchValue)
);

displayMovies(filteredMovies);

});


// Genre filter

filterGenre.addEventListener("change", () => {

let genre = filterGenre.value;

if(genre === "all"){

displayMovies(movies);

}else{

let filteredMovies = movies.filter(movie =>
movie.genre === genre
);

displayMovies(filteredMovies);

}

});

}

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});