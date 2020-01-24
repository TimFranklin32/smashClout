let buttonDiv = document.getElementById("checkClout")

var apiEndpoint = 'https://www.ssbwiki.com/api.php';
var params = 'action=query&prop=linkshere&lhlimit=500&titles=smasher%3A';
var smashTag = '';
var format = '&format=json';


  buttonDiv.addEventListener("click", evt => {
    let cloutDiv = document.getElementById('cloutNumber')
    let tagDiv = document.getElementById('tagInput')

    smashTag = tagDiv.value

    fetch(apiEndpoint + "?" + params + smashTag + format + "&origin=*")
        .then(function(response){return response.json();})
        .then(function(response) {
              var cloutResponse = response.query.pages;
              var score = 0

              Object.keys(cloutResponse).forEach(function(key) {
                Object.keys(cloutResponse[key]).forEach(function(key2) {
                    if (key2 == "linkshere"){
                      score = (cloutResponse[key].linkshere).length;
                    }
                 });

              });
                  cloutDiv.innerHTML = score
         });
    })
