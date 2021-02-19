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
        console.log("catfacts response",response[i].text)
        catFactsArr.push(catFacts)
    }
    console.log("le arrray",catFactsArr)


    $("#catDiv").prepend(catFactsArr + "<br>")
})