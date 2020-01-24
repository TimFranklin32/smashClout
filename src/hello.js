
let cloutDiv = document.getElementById("quote")

let button = document.getElementById("checkClout")

let buttonDiv = document.getElementById("checkClout")

var apiEndpoint = 'https://www.ssbwiki.com/api.php';
var params = 'action=query&prop=linkshere&lhlimit=500&titles=smasher%3A';
var smashTag = 'Extra';
var format = '&format=json';


fetch(apiEndpoint + "?" + params + smashTag + format + "&origin=*")
    .then(function(response){return response.json();})
    .then(function(response) {
          var cloutResponse = response.query.pages; // Process the output to get the image names
          var score = 0

          Object.keys(cloutResponse).forEach(function(key) {
              console.log((cloutResponse[key].linkshere).length);
          });

          //cloutResponse[-1].linkshere.forEach(function(link){
            //console.log(link);
          //});
          //Object.keys(allimages).forEach(function(key) {
               console.log(response.query);
          //});
     });


  buttonDiv.addEventListener("click", evt => {
    let cloutDiv = document.getElementById('quote')
    let tagDiv = document.getElementById('tagInput')

    smashTag = tagDiv.value

    fetch(apiEndpoint + "?" + params + smashTag + format + "&origin=*")
        .then(function(response){return response.json();})
        .then(function(response) {
              var cloutResponse = response.query.pages; // Process the output to get the image names
              var score = 0

              Object.keys(cloutResponse).forEach(function(key) {
                  score = (cloutResponse[key].linkshere).length;
              });

              //cloutResponse[-1].linkshere.forEach(function(link){
                //console.log(link);
              //});
              //Object.keys(allimages).forEach(function(key) {
                  cloutDiv.innerHTML = score
              //});
         });

    })
