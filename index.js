fetch("https://www.omdbapi.com/?type=movie&s=batman&y=&apikey=c9071015")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    let movies = data.Search;
    let output = "";
    for (let movie of movies) {
      output += `
        <div>
            <img src="${movie.Poster}" alt="Poster">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        </div>
        `;
    }
    const storedData = localStorage.getItem("movieData");

    let x = document.getElementById("movies");
    x.innerHTML = output;
    if (storedData) {
      x.innerHTML = storedData;
    }
  })
  .catch((error) => {
    console.log(error);
    alert("Data Not Fetch Properly");
  });
function myFunction() {
  alert("Searching");
  const sResult = document.getElementById("searchm").value;
  const sYear = document.getElementById("searchy").value;
  console.log(sResult);
  fetch(
    `https://www.omdbapi.com/?type=movie&s=${sResult}&y= ${sYear} &apikey=c9071015`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let movies = data.Search;
      let res = "";

      for (let movie of movies) {
        res =
          res +
          `
        <div>
            <img src="${movie.Poster}" alt="Poster">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        </div>
        `;
      }
      let x = document.getElementById("movies");
      x.innerHTML = res;
      localStorage.setItem("movieData", x.innerHTML);
    })
    .catch((error) => {
      console.log(error);
      alert("Not Found");
    });
}
