// using an API
let clientID = "czyekumrxlshglhuZvwwEDxTeIVkY3Hv2172cwv3Pjg";
let endpoint = 'https://api.unsplash.com/photos/random/?client_id=${clientID}';

// mapping data points with DOM elements

let imageElement = document.querySelector("#unsplashImage");
let imageLink = document.querySelector("#imageLink");
let creator = document.querySelector("#creator");

// being displayed 
fetch(endpoint)
  .then(function (response){
    return response.json();
  })
  .then(function (jsonData){
    imageElement.src = jsonData.urls.regular;
    imageLink.setAttribute("href", jsonData.links.html);

  creator.innerText = jsonData.user.name;
  creator.setAttribute("href", jsonData.user.portfolio_url);
})

// error handling 
.catch(function (error){
console.log ("Error: " + error);
});