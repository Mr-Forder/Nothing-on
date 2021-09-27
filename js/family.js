//gives us popular movies
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?with_genres=10751&sort_by=popularity.desc&api_key=791d692772ac0e2bde4112747a59eeed";
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

const cost = 19 + 57 + 7 + 37 + 4 + 28 + 26 + 39 + 3 + 20 + 18 + 16;
console.log(cost);
//////////////////////////////////////////////////////////////
function showMovies(movies) {
  main.innerHTML = ""; //reset contents of main to null
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const movieElement = document.createElement("div");
  movieElement.classList.add("movie");
  movieElement.innerHTML = `
         <img src="${IMG_PATH + movies[0].poster_path} " alt="${
    movies[0].title
  }">
        <div class="movie-info">
        <h3>${movies[0].title}</h3>
        <span class="${getClassByRating(movies[0].vote_average)}">${
    movies[0].vote_average
  }</span>
        </div>
        <div class="overview">
        <h3>${movies[0].title}</h3>
        ${movies[0].overview}
        <button class="more more0">find out more</button>
        </div>
        `;
  console.log(movies[0]);
  main.appendChild(movieElement); //append main div wit contents we've just created
  let moreButton = document.querySelector(".more0");
  moreButton.addEventListener("click", () => {
    showMovie0();
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function showMovie0() {
    console.log(movies[0].title);
    const fullElement = document.createElement("div");
    fullElement.classList.add("movie-full");
    fullElement.classList.add("fade-in");
    fullElement.innerHTML = `
    <div class="movie-wrapper">
    <div class="full-info">
        <h1>${movies[0].title}</h1>
        <h3>Overview</h3>
        <p>${movies[0].overview}</p>
        <div class="inner-info">
            <div class="ins"> 
                <h3>Released</h3>
                <p>${movies[0].release_date}</p>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[0].id
                }">Watch and Rate!</a>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[0].id
                }/videos">View Trailers</a>
            </div>
        </div>

    </div>
    <div class="full-pic">
    <img src="${IMG_PATH + movies[0].poster_path} " alt="${movies[0].title}">
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
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const movieElement1 = document.createElement("div");
  movieElement1.classList.add("movie");
  movieElement1.innerHTML = `
 <img src="${IMG_PATH + movies[1].poster_path} " alt="${movies[1].title}">
<div class="movie-info">
<h3>${movies[1].title}</h3>
<span class="${getClassByRating(movies[1].vote_average)}">${
    movies[1].vote_average
  }</span>
</div>
<div class="overview">
<h3>${movies[1].title}</h3>
${movies[1].overview}
<button class="more more1">find out more</button>
</div>
`;

  main.appendChild(movieElement1); //append main div wit contents we've just created
  let moreButton1 = document.querySelector(".more1");
  moreButton1.addEventListener("click", () => {
    showMovie1();
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function showMovie1() {
    const fullElement1 = document.createElement("div");
    fullElement1.classList.add("movie-full");
    fullElement1.classList.add("fade-in");
    fullElement1.innerHTML = `
    <div class="movie-wrapper">
    <div class="full-info">
        <h1>${movies[1].title}</h1>
        <h3>Overview</h3>
        <p>${movies[1].overview}</p>
        <div class="inner-info">
            <div class="ins"> 
                <h3>Released</h3>
                <p>${movies[1].release_date}</p>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[1].id
                }">Watch and Rate!</a>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[1].id
                }/videos">View Trailers</a>
            </div>
        </div>
        
    </div>
    <div class="full-pic">
    <img src="${IMG_PATH + movies[1].poster_path} " alt="${movies[1].title}">
    </div>
    <div class="close">
        <button class="close"><i class="fas fa-window-close"></i></button>
    </div>
</div>
    `;
    main.appendChild(fullElement1); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement1.innerHTML = ``;
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const movieElement2 = document.createElement("div");
  movieElement2.classList.add("movie");
  movieElement2.innerHTML = `
 <img src="${IMG_PATH + movies[2].poster_path} " alt="${movies[2].title}">
<div class="movie-info">
<h3>${movies[2].title}</h3>
<span class="${getClassByRating(movies[2].vote_average)}">${
    movies[2].vote_average
  }</span>
</div>
<div class="overview">
<h3>${movies[2].title}</h3>
${movies[2].overview}
<button class="more more2">find out more</button>
</div>
`;

  main.appendChild(movieElement2); //append main div wit contents we've just created
  let moreButton2 = document.querySelector(".more2");
  moreButton2.addEventListener("click", () => {
    showMovie2();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie2() {
    const fullElement2 = document.createElement("div");
    fullElement2.classList.add("movie-full");
    fullElement2.classList.add("fade-in");
    fullElement2.innerHTML = `
    <div class="movie-wrapper">
    <div class="full-info">
        <h1>${movies[2].title}</h1>
        <h3>Overview</h3>
        <p>${movies[2].overview}</p>
        <div class="inner-info">
            <div class="ins"> 
                <h3>Released</h3>
                <p>${movies[2].release_date}</p>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[2].id
                }">Watch and Rate!</a>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[2].id
                }/videos">View Trailers</a>
            </div>
        </div>
       
    </div>
    <div class="full-pic">
    <img src="${IMG_PATH + movies[2].poster_path} " alt="${movies[2].title}">
    </div>
    <div class="close">
        <button class="close"><i class="fas fa-window-close"></i></button>
    </div>
</div>
    `;
    main.appendChild(fullElement2); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement2.innerHTML = ``;
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement3 = document.createElement("div");
  movieElement3.classList.add("movie");
  movieElement3.innerHTML = `
     <img src="${IMG_PATH + movies[3].poster_path} " alt="${movies[3].title}">
    <div class="movie-info">
    <h3>${movies[3].title}</h3>
    <span class="${getClassByRating(movies[3].vote_average)}">${
    movies[3].vote_average
  }</span>
    </div>
    <div class="overview">
    <h3>${movies[3].title}</h3>
    ${movies[3].overview}
    <button class="more more3">find out more</button>
    </div>
    `;
  main.appendChild(movieElement3); //append main div wit contents we've just created
  let moreButton3 = document.querySelector(".more3");
  moreButton3.addEventListener("click", () => {
    showMovie3();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie3() {
    const fullElement3 = document.createElement("div");
    fullElement3.classList.add("movie-full");
    fullElement3.classList.add("fade-in");
    fullElement3.innerHTML = `
    <div class="movie-wrapper">
    <div class="full-info">
        <h1>${movies[3].title}</h1>
        <h3>Overview</h3>
        <p>${movies[3].overview}</p>
        <div class="inner-info">
            <div class="ins"> 
                <h3>Released</h3>
                <p>${movies[3].release_date}</p>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[3].id
                }">Watch and Rate!</a>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[3].id
                }/videos">View Trailers</a>
            </div>
        </div>
       
    </div>
    <div class="full-pic">
    <img src="${IMG_PATH + movies[3].poster_path} " alt="${movies[3].title}">
    </div>
    <div class="close">
        <button class="close"><i class="fas fa-window-close"></i></button>
    </div>
</div>
    `;
    main.appendChild(fullElement3); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement3.innerHTML = ``;
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement4 = document.createElement("div");
  movieElement4.classList.add("movie");
  movieElement4.innerHTML = `
 <img src="${IMG_PATH + movies[4].poster_path} " alt="${movies[4].title}">
<div class="movie-info">
<h3>${movies[4].title}</h3>
<span class="${getClassByRating(movies[4].vote_average)}">${
    movies[4].vote_average
  }</span>
</div>
<div class="overview">
<h3>${movies[4].title}</h3>
${movies[4].overview}
<button class="more more4">find out more</button>
</div>
`;
  main.appendChild(movieElement4); //append main div wit contents we've just created
  let moreButton4 = document.querySelector(".more4");
  moreButton4.addEventListener("click", () => {
    showMovie4();
  });
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie4() {
    const fullElement4 = document.createElement("div");
    fullElement4.classList.add("movie-full");
    fullElement4.classList.add("fade-in");
    fullElement4.innerHTML = `
    <div class="movie-wrapper">
    <div class="full-info">
        <h1>${movies[4].title}</h1>
        <h3>Overview</h3>
        <p>${movies[4].overview}</p>
        <div class="inner-info">
            <div class="ins"> 
                <h3>Released</h3>
                <p>${movies[4].release_date}</p>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[4].id
                }">Watch and Rate!</a>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[4].id
                }/videos">View Trailers</a>
            </div>
        </div>
        
    </div>
    <div class="full-pic">
    <img src="${IMG_PATH + movies[4].poster_path} " alt="${movies[4].title}">
    </div>
    <div class="close">
        <button class="close"><i class="fas fa-window-close"></i></button>
    </div>
    </div>
    `;
    main.appendChild(fullElement4); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement4.innerHTML = ``;
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement5 = document.createElement("div");
  movieElement5.classList.add("movie");
  movieElement5.innerHTML = `
     <img src="${IMG_PATH + movies[5].poster_path} " alt="${movies[5].title}">
    <div class="movie-info">
    <h3>${movies[5].title}</h3>
    <span class="${getClassByRating(movies[5].vote_average)}">${
    movies[5].vote_average
  }</span>
    </div>
    <div class="overview">
    <h3>${movies[5].title}</h3>
    ${movies[5].overview}
    <button class="more more5">find out more</button>
    </div>
    `;
  main.appendChild(movieElement5); //append main div wit contents we've just created
  let moreButton5 = document.querySelector(".more5");
  moreButton5.addEventListener("click", () => {
    showMovie5();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie5() {
    const fullElement5 = document.createElement("div");
    fullElement5.classList.add("movie-full");
    fullElement5.classList.add("fade-in");
    fullElement5.innerHTML = `
        <div class="movie-wrapper">
        <div class="full-info">
            <h1>${movies[5].title}</h1>
            <h3>Overview</h3>
            <p>${movies[5].overview}</p>
            <div class="inner-info">
                <div class="ins"> 
                    <h3>Released</h3>
                    <p>${movies[5].release_date}</p>
                </div>
                <div class="ins"> 
                    <a class="linky" href="https://www.themoviedb.org/movie/${
                      movies[5].id
                    }">Watch and Rate!</a>
                </div>
                <div class="ins"> 
                    <a class="linky" href="https://www.themoviedb.org/movie/${
                      movies[5].id
                    }/videos">View Trailers</a>
                </div>
            </div>
        
        </div>
        <div class="full-pic">
        <img src="${IMG_PATH + movies[5].poster_path} " alt="${
      movies[5].title
    }">
        </div>
        <div class="close">
            <button class="close"><i class="fas fa-window-close"></i></button>
        </div>
        </div>
        `;
    main.appendChild(fullElement5); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement5.innerHTML = ``;
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement6 = document.createElement("div");
  movieElement6.classList.add("movie");
  movieElement6.innerHTML = `
         <img src="${IMG_PATH + movies[6].poster_path} " alt="${
    movies[6].title
  }">
        <div class="movie-info">
        <h3>${movies[6].title}</h3>
        <span class="${getClassByRating(movies[6].vote_average)}">${
    movies[6].vote_average
  }</span>
        </div>
        <div class="overview">
        <h3>${movies[6].title}</h3>
        ${movies[6].overview}
        <button class="more more6">find out more</button>
        </div>
        `;
  main.appendChild(movieElement6); //append main div wit contents we've just created
  let moreButton6 = document.querySelector(".more6");
  moreButton6.addEventListener("click", () => {
    showMovie6();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie6() {
    const fullElement6 = document.createElement("div");
    fullElement6.classList.add("movie-full");
    fullElement6.classList.add("fade-in");
    fullElement6.innerHTML = `
            <div class="movie-wrapper">
            <div class="full-info">
                <h1>${movies[6].title}</h1>
                <h3>Overview</h3>
                <p>${movies[6].overview}</p>
                <div class="inner-info">
                    <div class="ins"> 
                        <h3>Released</h3>
                        <p>${movies[6].release_date}</p>
                    </div>
                    <div class="ins"> 
                        <a class="linky" href="https://www.themoviedb.org/movie/${
                          movies[6].id
                        }">Watch and Rate!</a>
                    </div>
                    <div class="ins"> 
                        <a class="linky" href="https://www.themoviedb.org/movie/${
                          movies[6].id
                        }/videos">View Trailers</a>
                    </div>
                </div>
            
            </div>
            <div class="full-pic">
            <img src="${IMG_PATH + movies[6].poster_path} " alt="${
      movies[6].title
    }">
            </div>
            <div class="close">
                <button class="close"><i class="fas fa-window-close"></i></button>
            </div>
            </div>
            `;
    main.appendChild(fullElement6); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement6.innerHTML = ``;
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement7 = document.createElement("div");
  movieElement7.classList.add("movie");
  movieElement7.innerHTML = `
             <img src="${IMG_PATH + movies[7].poster_path} " alt="${
    movies[7].title
  }">
            <div class="movie-info">
            <h3>${movies[7].title}</h3>
            <span class="${getClassByRating(movies[7].vote_average)}">${
    movies[7].vote_average
  }</span>
            </div>
            <div class="overview">
            <h3>${movies[7].title}</h3>
            ${movies[7].overview}
            <button class="more more7">find out more</button>
            </div>
            `;
  main.appendChild(movieElement7); //append main div wit contents we've just created
  let moreButton7 = document.querySelector(".more7");
  moreButton7.addEventListener("click", () => {
    showMovie7();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie7() {
    const fullElement7 = document.createElement("div");
    fullElement7.classList.add("movie-full");
    fullElement7.classList.add("fade-in");
    fullElement7.innerHTML = `
                <div class="movie-wrapper">
                <div class="full-info">
                    <h1>${movies[7].title}</h1>
                    <h3>Overview</h3>
                    <p>${movies[7].overview}</p>
                    <div class="inner-info">
                        <div class="ins"> 
                            <h3>Released</h3>
                            <p>${movies[7].release_date}</p>
                        </div>
                        <div class="ins"> 
                            <a class="linky" href="https://www.themoviedb.org/movie/${
                              movies[7].id
                            }">Watch and Rate!</a>
                        </div>
                        <div class="ins"> 
                            <a class="linky" href="https://www.themoviedb.org/movie/${
                              movies[7].id
                            }/videos">View Trailers</a>
                        </div>
                    </div>
                  
                </div>
                <div class="full-pic">
                <img src="${IMG_PATH + movies[7].poster_path} " alt="${
      movies[7].title
    }">
                </div>
                <div class="close">
                    <button class="close"><i class="fas fa-window-close"></i></button>
                </div>
                </div>
                `;
    main.appendChild(fullElement7); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement7.innerHTML = ``;
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement8 = document.createElement("div");
  movieElement8.classList.add("movie");
  movieElement8.innerHTML = `
                 <img src="${IMG_PATH + movies[8].poster_path} " alt="${
    movies[8].title
  }">
                <div class="movie-info">
                <h3>${movies[8].title}</h3>
                <span class="${getClassByRating(movies[8].vote_average)}">${
    movies[8].vote_average
  }</span>
                </div>
                <div class="overview">
                <h3>${movies[8].title}</h3>
                ${movies[8].overview}
                <button class="more more8">find out more</button>
                </div>
                `;
  main.appendChild(movieElement8); //append main div wit contents we've just created
  let moreButton8 = document.querySelector(".more8");
  moreButton8.addEventListener("click", () => {
    showMovie8();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie8() {
    const fullElement8 = document.createElement("div");
    fullElement8.classList.add("movie-full");
    fullElement8.classList.add("fade-in");
    fullElement8.innerHTML = `
                    <div class="movie-wrapper">
                    <div class="full-info">
                        <h1>${movies[8].title}</h1>
                        <h3>Overview</h3>
                        <p>${movies[8].overview}</p>
                        <div class="inner-info">
                            <div class="ins"> 
                                <h3>Released</h3>
                                <p>${movies[8].release_date}</p>
                            </div>
                            <div class="ins"> 
                                <a class="linky" href="https://www.themoviedb.org/movie/${
                                  movies[8].id
                                }">Watch and Rate!</a>
                            </div>
                            <div class="ins"> 
                                <a class="linky" href="https://www.themoviedb.org/movie/${
                                  movies[8].id
                                }/videos">View Trailers</a>
                            </div>
                        </div>
       
                    </div>
                    <div class="full-pic">
                    <img src="${IMG_PATH + movies[8].poster_path} " alt="${
      movies[8].title
    }">
                    </div>
                    <div class="close">
                        <button class="close"><i class="fas fa-window-close"></i></button>
                    </div>
                    </div>
                    `;
    main.appendChild(fullElement8); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement8.innerHTML = ``;
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement9 = document.createElement("div");
  movieElement9.classList.add("movie");
  movieElement9.innerHTML = `
                     <img src="${IMG_PATH + movies[9].poster_path} " alt="${
    movies[9].title
  }">
                    <div class="movie-info">
                    <h3>${movies[9].title}</h3>
                    <span class="${getClassByRating(movies[9].vote_average)}">${
    movies[9].vote_average
  }</span>
                    </div>
                    <div class="overview">
                    <h3>${movies[9].title}</h3>
                    ${movies[9].overview}
                    <button class="more more9">find out more</button>
                    </div>
                    `;
  main.appendChild(movieElement9); //append main div wit contents we've just created
  let moreButton9 = document.querySelector(".more9");
  moreButton9.addEventListener("click", () => {
    showMovie9();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie9() {
    const fullElement9 = document.createElement("div");
    fullElement9.classList.add("movie-full");
    fullElement9.classList.add("fade-in");
    fullElement9.innerHTML = `
                        <div class="movie-wrapper">
                        <div class="full-info">
                            <h1>${movies[9].title}</h1>
                            <h3>Overview</h3>
                            <p>${movies[9].overview}</p>
                            <div class="inner-info">
                                <div class="ins"> 
                                    <h3>Released</h3>
                                    <p>${movies[9].release_date}</p>
                                </div>
                                <div class="ins"> 
                                    <a class="linky" href="https://www.themoviedb.org/movie/${
                                      movies[9].id
                                    }">Watch and Rate!</a>
                                </div>
                                <div class="ins"> 
                                    <a class="linky" href="https://www.themoviedb.org/movie/${
                                      movies[9].id
                                    }/videos">View Trailers</a>
                                </div>
                            </div>
                          
                        </div>
                        <div class="full-pic">
                        <img src="${IMG_PATH + movies[9].poster_path} " alt="${
      movies[9].title
    }">
                        </div>
                        <div class="close">
                            <button class="close"><i class="fas fa-window-close"></i></button>
                        </div>
                        </div>
                        `;
    main.appendChild(fullElement9); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement9.innerHTML = ``;
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement10 = document.createElement("div");
  movieElement10.classList.add("movie");
  movieElement10.innerHTML = `
                         <img src="${
                           IMG_PATH + movies[10].poster_path
                         } " alt="${movies[10].title}">
                        <div class="movie-info">
                        <h3>${movies[10].title}</h3>
                        <span class="${getClassByRating(
                          movies[10].vote_average
                        )}">${movies[10].vote_average}</span>
                        </div>
                        <div class="overview">
                        <h3>${movies[10].title}</h3>
                        ${movies[10].overview}
                        <button class="more more10">find out more</button>
                        </div>
                        `;
  main.appendChild(movieElement10); //append main div wit contents we've just created
  let moreButton10 = document.querySelector(".more10");
  moreButton10.addEventListener("click", () => {
    showMovie10();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie10() {
    const fullElement10 = document.createElement("div");
    fullElement10.classList.add("movie-full");
    fullElement10.classList.add("fade-in");
    fullElement10.innerHTML = `
                            <div class="movie-wrapper">
                            <div class="full-info">
                                <h1>${movies[10].title}</h1>
                                <h3>Overview</h3>
                                <p>${movies[10].overview}</p>
                                <div class="inner-info">
                                    <div class="ins"> 
                                        <h3>Released</h3>
                                        <p>${movies[10].release_date}</p>
                                    </div>
                                    <div class="ins"> 
                                        <a class="linky" href="https://www.themoviedb.org/movie/${
                                          movies[10].id
                                        }">Watch and Rate!</a>
                                    </div>
                                    <div class="ins"> 
                                        <a class="linky" href="https://www.themoviedb.org/movie/${
                                          movies[10].id
                                        }/videos">View Trailers</a>
                                    </div>
                                </div>
                                <h2>Average Rating:</h2>

                            </div>
                            <div class="full-pic">
                            <img src="${
                              IMG_PATH + movies[10].poster_path
                            } " alt="${movies[10].title}">
                            </div>
                            <div class="close">
                                <button class="close"><i class="fas fa-window-close"></i></button>
                            </div>
                            </div>
                            `;
    main.appendChild(fullElement10); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement10.innerHTML = ``;
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement11 = document.createElement("div");
  movieElement11.classList.add("movie");
  movieElement11.innerHTML = `
                             <img src="${
                               IMG_PATH + movies[11].poster_path
                             } " alt="${movies[11].title}">
                            <div class="movie-info">
                            <h3>${movies[11].title}</h3>
                            <span class="${getClassByRating(
                              movies[11].vote_average
                            )}">${movies[11].vote_average}</span>
                            </div>
                            <div class="overview">
                            <h3>${movies[11].title}</h3>
                            ${movies[11].overview}
                            <button class="more more11">find out more</button>
                            </div>
                            `;
  main.appendChild(movieElement11); //append main div wit contents we've just created
  let moreButton11 = document.querySelector(".more11");
  moreButton11.addEventListener("click", () => {
    showMovie11();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie11() {
    const fullElement11 = document.createElement("div");
    fullElement11.classList.add("movie-full");
    fullElement11.classList.add("fade-in");
    fullElement11.innerHTML = `
                                <div class="movie-wrapper">
                                <div class="full-info">
                                    <h1>${movies[11].title}</h1>
                                    <h3>Overview</h3>
                                    <p>${movies[11].overview}</p>
                                    <div class="inner-info">
                                        <div class="ins"> 
                                            <h3>Released</h3>
                                            <p>${movies[11].release_date}</p>
                                        </div>
                                        <div class="ins"> 
                                            <a class="linky" href="https://www.themoviedb.org/movie/${
                                              movies[11].id
                                            }">Watch and Rate!</a>
                                        </div>
                                        <div class="ins"> 
                                            <a class="linky" href="https://www.themoviedb.org/movie/${
                                              movies[11].id
                                            }/videos">View Trailers</a>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div class="full-pic">
                                <img src="${
                                  IMG_PATH + movies[11].poster_path
                                } " alt="${movies[11].title}">
                                </div>
                                <div class="close">
                                    <button class="close"><i class="fas fa-window-close"></i></button>
                                </div>
                                </div>
                                `;
    main.appendChild(fullElement11); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement11.innerHTML = ``;
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement12 = document.createElement("div");
  movieElement12.classList.add("movie");
  movieElement12.innerHTML = `
                                 <img src="${
                                   IMG_PATH + movies[12].poster_path
                                 } " alt="${movies[12].title}">
                                <div class="movie-info">
                                <h3>${movies[12].title}</h3>
                                <span class="${getClassByRating(
                                  movies[12].vote_average
                                )}">${movies[12].vote_average}</span>
                                </div>
                                <div class="overview">
                                <h3>${movies[12].title}</h3>
                                ${movies[12].overview}
                                <button class="more more12">find out more</button>
                                </div>
                                `;
  main.appendChild(movieElement12); //append main div wit contents we've just created
  let moreButton12 = document.querySelector(".more12");
  moreButton12.addEventListener("click", () => {
    showMovie12();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie12() {
    const fullElement12 = document.createElement("div");
    fullElement12.classList.add("movie-full");
    fullElement12.classList.add("fade-in");
    fullElement12.innerHTML = `
                                    <div class="movie-wrapper">
                                    <div class="full-info">
                                        <h1>${movies[12].title}</h1>
                                        <h3>Overview</h3>
                                        <p>${movies[12].overview}</p>
                                        <div class="inner-info">
                                            <div class="ins"> 
                                                <h3>Released</h3>
                                                <p>${
                                                  movies[12].release_date
                                                }</p>
                                            </div>
                                            <div class="ins"> 
                                                <a class="linky" href="https://www.themoviedb.org/movie/${
                                                  movies[12].id
                                                }">Watch and Rate!</a>
                                            </div>
                                            <div class="ins"> 
                                                <a class="linky" href="https://www.themoviedb.org/movie/${
                                                  movies[12].id
                                                }/videos">View Trailers</a>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <div class="full-pic">
                                    <img src="${
                                      IMG_PATH + movies[12].poster_path
                                    } " alt="${movies[12].title}">
                                    </div>
                                    <div class="close">
                                        <button class="close"><i class="fas fa-window-close"></i></button>
                                    </div>
                                    </div>
                                    `;
    main.appendChild(fullElement12); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement12.innerHTML = ``;
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement13 = document.createElement("div");
  movieElement13.classList.add("movie");
  movieElement13.innerHTML = `
 <img src="${IMG_PATH + movies[13].poster_path} " alt="${movies[13].title}">
<div class="movie-info">
<h3>${movies[13].title}</h3>
<span class="${getClassByRating(movies[13].vote_average)}">${
    movies[13].vote_average
  }</span>
</div>
<div class="overview">
<h3>${movies[13].title}</h3>
${movies[13].overview}
<button class="more more13">find out more</button>
</div>
`;
  main.appendChild(movieElement13); //append main div wit contents we've just created
  let moreButton13 = document.querySelector(".more13");
  moreButton13.addEventListener("click", () => {
    showMovie13();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie13() {
    const fullElement13 = document.createElement("div");
    fullElement13.classList.add("movie-full");
    fullElement13.classList.add("fade-in");
    fullElement13.innerHTML = `
    <div class="movie-wrapper">
    <div class="full-info">
        <h1>${movies[13].title}</h1>
        <h3>Overview</h3>
        <p>${movies[13].overview}</p>
        <div class="inner-info">
            <div class="ins"> 
                <h3>Released</h3>
                <p>${movies[13].release_date}</p>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[13].id
                }">Watch and Rate!</a>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[13].id
                }/videos">View Trailers</a>
            </div>
        </div>
     
    </div>
    <div class="full-pic">
    <img src="${IMG_PATH + movies[13].poster_path} " alt="${movies[13].title}">
    </div>
    <div class="close">
        <button class="close"><i class="fas fa-window-close"></i></button>
    </div>
    </div>
    `;
    main.appendChild(fullElement13); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement13.innerHTML = ``;
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement14 = document.createElement("div");
  movieElement14.classList.add("movie");
  movieElement14.innerHTML = `
 <img src="${IMG_PATH + movies[14].poster_path} " alt="${movies[14].title}">
<div class="movie-info">
<h3>${movies[14].title}</h3>
<span class="${getClassByRating(movies[14].vote_average)}">${
    movies[14].vote_average
  }</span>
</div>
<div class="overview">
<h3>${movies[14].title}</h3>
${movies[14].overview}
<button class="more more14">find out more</button>
</div>
`;
  main.appendChild(movieElement14); //append main div wit contents we've just created
  let moreButton14 = document.querySelector(".more14");
  moreButton14.addEventListener("click", () => {
    showMovie14();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie14() {
    const fullElement14 = document.createElement("div");
    fullElement14.classList.add("movie-full");
    fullElement14.classList.add("fade-in");
    fullElement14.innerHTML = `
    <div class="movie-wrapper">
    <div class="full-info">
        <h1>${movies[14].title}</h1>
        <h3>Overview</h3>
        <p>${movies[14].overview}</p>
        <div class="inner-info">
            <div class="ins"> 
                <h3>Released</h3>
                <p>${movies[14].release_date}</p>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[14].id
                }">Watch and Rate!</a>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[14].id
                }/videos">View Trailers</a>
            </div>
        </div>
     
    </div>
    <div class="full-pic">
    <img src="${IMG_PATH + movies[14].poster_path} " alt="${movies[14].title}">
    </div>
    <div class="close">
        <button class="close"><i class="fas fa-window-close"></i></button>
    </div>
    </div>
    `;
    main.appendChild(fullElement14); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement14.innerHTML = ``;
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement15 = document.createElement("div");
  movieElement15.classList.add("movie");
  movieElement15.innerHTML = `
 <img src="${IMG_PATH + movies[15].poster_path} " alt="${movies[15].title}">
<div class="movie-info">
<h3>${movies[15].title}</h3>
<span class="${getClassByRating(movies[15].vote_average)}">${
    movies[15].vote_average
  }</span>
</div>
<div class="overview">
<h3>${movies[15].title}</h3>
${movies[15].overview}
<button class="more more15">find out more</button>
</div>
`;
  main.appendChild(movieElement15); //append main div wit contents we've just created
  let moreButton15 = document.querySelector(".more15");
  moreButton15.addEventListener("click", () => {
    showMovie15();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie15() {
    const fullElement15 = document.createElement("div");
    fullElement15.classList.add("movie-full");
    fullElement15.classList.add("fade-in");
    fullElement15.innerHTML = `
    <div class="movie-wrapper">
    <div class="full-info">
        <h1>${movies[15].title}</h1>
        <h3>Overview</h3>
        <p>${movies[15].overview}</p>
        <div class="inner-info">
            <div class="ins"> 
                <h3>Released</h3>
                <p>${movies[15].release_date}</p>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[15].id
                }">Watch and Rate!</a>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[15].id
                }/videos">View Trailers</a>
            </div>
        </div>
        
    </div>
    <div class="full-pic">
    <img src="${IMG_PATH + movies[15].poster_path} " alt="${movies[15].title}">
    </div>
    <div class="close">
        <button class="close"><i class="fas fa-window-close"></i></button>
    </div>
    </div>
    `;
    main.appendChild(fullElement15); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement15.innerHTML = ``;
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement16 = document.createElement("div");
  movieElement16.classList.add("movie");
  movieElement16.innerHTML = `
 <img src="${IMG_PATH + movies[16].poster_path} " alt="${movies[16].title}">
<div class="movie-info">
<h3>${movies[16].title}</h3>
<span class="${getClassByRating(movies[16].vote_average)}">${
    movies[16].vote_average
  }</span>
</div>
<div class="overview">
<h3>${movies[16].title}</h3>
${movies[16].overview}
<button class="more more16">find out more</button>
</div>
`;
  main.appendChild(movieElement16); //append main div wit contents we've just created
  let moreButton16 = document.querySelector(".more16");
  moreButton16.addEventListener("click", () => {
    showMovie16();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie16() {
    const fullElement16 = document.createElement("div");
    fullElement16.classList.add("movie-full");
    fullElement16.classList.add("fade-in");
    fullElement16.innerHTML = `
    <div class="movie-wrapper">
    <div class="full-info">
        <h1>${movies[16].title}</h1>
        <h3>Overview</h3>
        <p>${movies[16].overview}</p>
        <div class="inner-info">
            <div class="ins"> 
                <h3>Released</h3>
                <p>${movies[16].release_date}</p>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[16].id
                }">Watch and Rate!</a>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[16].id
                }/videos">View Trailers</a>
            </div>
        </div>
       
    </div>
    <div class="full-pic">
    <img src="${IMG_PATH + movies[16].poster_path} " alt="${movies[16].title}">
    </div>
    <div class="close">
        <button class="close"><i class="fas fa-window-close"></i></button>
    </div>
    </div>
    `;
    main.appendChild(fullElement16); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement16.innerHTML = ``;
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement17 = document.createElement("div");
  movieElement17.classList.add("movie");
  movieElement17.innerHTML = `
 <img src="${IMG_PATH + movies[17].poster_path} " alt="${movies[17].title}">
<div class="movie-info">
<h3>${movies[17].title}</h3>
<span class="${getClassByRating(movies[17].vote_average)}">${
    movies[17].vote_average
  }</span>
</div>
<div class="overview">
<h3>${movies[17].title}</h3>
${movies[17].overview}
<button class="more more17">find out more</button>
</div>
`;
  main.appendChild(movieElement17); //append main div wit contents we've just created
  let moreButton17 = document.querySelector(".more17");
  moreButton17.addEventListener("click", () => {
    showMovie17();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie17() {
    const fullElement17 = document.createElement("div");
    fullElement17.classList.add("movie-full");
    fullElement17.classList.add("fade-in");
    fullElement17.innerHTML = `
    <div class="movie-wrapper">
    <div class="full-info">
        <h1>${movies[17].title}</h1>
        <h3>Overview</h3>
        <p>${movies[17].overview}</p>
        <div class="inner-info">
            <div class="ins"> 
                <h3>Released</h3>
                <p>${movies[17].release_date}</p>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[17].id
                }">Watch and Rate!</a>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[17].id
                }/videos">View Trailers</a>
            </div>
        </div>
    
    </div>
    <div class="full-pic">
    <img src="${IMG_PATH + movies[17].poster_path} " alt="${movies[17].title}">
    </div>
    <div class="close">
        <button class="close"><i class="fas fa-window-close"></i></button>
    </div>
    </div>
    `;
    main.appendChild(fullElement17); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement17.innerHTML = ``;
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement18 = document.createElement("div");
  movieElement18.classList.add("movie");
  movieElement18.innerHTML = `
 <img src="${IMG_PATH + movies[18].poster_path} " alt="${movies[18].title}">
<div class="movie-info">
<h3>${movies[18].title}</h3>
<span class="${getClassByRating(movies[18].vote_average)}">${
    movies[18].vote_average
  }</span>
</div>
<div class="overview">
<h3>${movies[18].title}</h3>
${movies[18].overview}
<button class="more more18">find out more</button>
</div>
`;
  main.appendChild(movieElement18); //append main div wit contents we've just created
  let moreButton18 = document.querySelector(".more18");
  moreButton18.addEventListener("click", () => {
    showMovie18();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie18() {
    const fullElement18 = document.createElement("div");
    fullElement18.classList.add("movie-full");
    fullElement18.classList.add("fade-in");
    fullElement18.innerHTML = `
    <div class="movie-wrapper">
    <div class="full-info">
        <h1>${movies[18].title}</h1>
        <h3>Overview</h3>
        <p>${movies[18].overview}</p>
        <div class="inner-info">
            <div class="ins"> 
                <h3>Released</h3>
                <p>${movies[18].release_date}</p>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[18].id
                }">Watch and Rate!</a>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[18].id
                }/videos">View Trailers</a>
            </div>
        </div>
     
    </div>
    <div class="full-pic">
    <img src="${IMG_PATH + movies[18].poster_path} " alt="${movies[18].title}">
    </div>
    <div class="close">
        <button class="close"><i class="fas fa-window-close"></i></button>
    </div>
    </div>
    `;
    main.appendChild(fullElement18); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement18.innerHTML = ``;
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const movieElement19 = document.createElement("div");
  movieElement19.classList.add("movie");
  movieElement19.innerHTML = `
 <img src="${IMG_PATH + movies[19].poster_path} " alt="${movies[19].title}">
<div class="movie-info">
<h3>${movies[19].title}</h3>
<span class="${getClassByRating(movies[19].vote_average)}">${
    movies[19].vote_average
  }</span>
</div>
<div class="overview">
<h3>${movies[19].title}</h3>
${movies[19].overview}
<button class="more more19">find out more</button>
</div>
`;
  main.appendChild(movieElement19); //append main div wit contents we've just created
  let moreButton19 = document.querySelector(".more19");
  moreButton19.addEventListener("click", () => {
    showMovie19();
  });
  ////////////////////////////////////////////////////////////////////////////////
  function showMovie19() {
    const fullElement19 = document.createElement("div");
    fullElement19.classList.add("movie-full");
    fullElement19.classList.add("fade-in");
    fullElement19.innerHTML = `
    <div class="movie-wrapper">
    <div class="full-info">
        <h1>${movies[19].title}</h1>
        <h3>Overview</h3>
        <p>${movies[19].overview}</p>
        <div class="inner-info">
            <div class="ins"> 
                <h3>Released</h3>
                <p>${movies[19].release_date}</p>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[19].id
                }">Watch and Rate!</a>
            </div>
            <div class="ins"> 
                <a class="linky" href="https://www.themoviedb.org/movie/${
                  movies[19].id
                }/videos">View Trailers</a>
            </div>
        </div>

    </div>
    <div class="full-pic">
    <img src="${IMG_PATH + movies[19].poster_path} " alt="${movies[19].title}">
    </div>
    <div class="close">
        <button class="close"><i class="fas fa-window-close"></i></button>
    </div>
    </div>
    `;
    main.appendChild(fullElement19); //append main div wit contents we've just created
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      fullElement19.innerHTML = ``;
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
} //FUNC ENDS

function getClassByRating(vote) {
  //rating colour classes - will retun string that will be interpolated into class rating - css class will be applied to it
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
    getMovies(SEARCH_API + search.value); //runs getmovies with search api const contcatonated with contents of searchbox
    search.value = ""; //resets constense of search box
  } else {
    window.location.reload(); //just relaods the page in submit iwth notihng in search box
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////
