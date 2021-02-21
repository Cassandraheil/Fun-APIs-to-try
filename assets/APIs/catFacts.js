var div = $("<div id='catDiv'>");
$("section").append(div)



var button = document.createElement("button");
button.innerHTML = "Cat Facts!"
button.classList.add("catFactBtn")
$("#catDiv").append(button)



$.ajax({
    url: "https://cat-fact.herokuapp.com/facts",
    method: "GET"
}).then(function(response){

    catFactsArr = []

    for (i = 0; i < response.length; i++) {
        
        var catFacts = response[i].text
        // console.log("catfacts response",response[i].text)
        catFactsArr.push(catFacts, "<br>")
    }
    // console.log("le arrray",catFactsArr)


    $("#catDiv").prepend(catFactsArr + "<br>")
})


// var apiKey = "c8a4f62e-0bd4-4f64-8c9b-8717e29bd776"
$(".catFactBtn").click(function(){
  
    $.ajax({
        url: "https://api.thecatapi.com/v1/images/search",
        method: "GET"
    }).then(function(response){
        console.log("this be the cat pics", response[0].url)

        function makeImage() { 
            console.log("this be working");
            var img = document.createElement('img'); 
                img.src =  response[0].url; 
                document.getElementById('catDiv').prepend(img);   
        }  
        makeImage()
    })
})