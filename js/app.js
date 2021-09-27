//gives us popular movies
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=791d692772ac0e2bde4112747a59eeed";
//image paths
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
//search endpoint - will concatonate search terms in single quote at end
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=791d692772ac0e2bde4112747a59eeed&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

//Get movies call
getMovies(API_URL);

//get movies func
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json(); //gets us the data
  showMovies(data.results); //runs showmovies func with results object as argument
}

//////////////////////////////////////////////////////////////
function showMovies(movies) {
  main.innerHTML = ""; //reset contents of main to null

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  movies.map((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
         <img src="${IMG_PATH + movie.poster_path} " alt="${movie.title}">


        <div class="movie-info">
        <h3>${movie.title}</h3>
        <span class="${getClassByRating(movie.vote_average)}">${
      movie.vote_average
    }</span>
        </div>





     
        `;

    main.appendChild(movieElement); //append main div wit contents we've just created
    const overview = document.createElement("div");
    overview.classList.add("overview");
    overview.innerHTML = `<h3>${movie.title}</h3>
        ${movie.overview}`;
    movieElement.appendChild(overview);

    //more info button

    const moreButton = document.createElement("button");
    moreButton.classList.add("more");
    moreButton.innerText = `Find out More`;
    overview.appendChild(moreButton);
    moreButton.addEventListener("click", () => {
      console.log(`click`);
      const fullElement = document.createElement("div");
      fullElement.classList.add("movie-full");
      fullElement.classList.add("fade-in");
      fullElement.innerHTML = `
    <div class="movie-wrapper">
    <div class="full-info">
        <h1>${movie.title}</h1>
        <h3>Overview</h3>
        <p>${movie.overview}</p>
        <div class="inner-info">
            <div class="ins"> 
                <h3>Released</h3>
                <p>${movie.release_date}</p>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movie.id
                }">Watch and Rate!</a>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movie.id
                }/videos">View Trailers</a>
            </div>
        </div>

    </div>
    <div class="full-pic">
    <img src="${IMG_PATH + movie.poster_path} " alt="${movie.title}">
    </div>
    <div class="close">
        <button class="close"><i class="fas fa-window-close"></i></button>
    </div>
      </div>
     `;
      main.appendChild(fullElement); //append main div wit contents we've just created
      const close = document.querySelector(".close");
      close.addEventListener("click", () => {
        fullElement.innerHTML = ``;
      });
    });
  });
}
function getClassByRating(vote) {
  //rating colour classes - will return string that will be interpolated into class rating - css class will be applied to it
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent reload
  const searchTerm = search.value; //searchterm const = input of search
  if (searchTerm && searchTerm !== "") {
    //checks if searchterm is null or not
    getMovies(SEARCH_API + search.value); //runs getmovies with search api const concatonated with contents of searchbox
    search.value = ""; //resets constense of search box
  } else {
    window.location.reload(); //just relaods the page in submit iwth notihng in search box
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////
