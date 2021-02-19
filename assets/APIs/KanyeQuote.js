var div = $("<div id='kanyeDiv'>");
$("section").append(div)



var button = document.createElement("button");
button.innerHTML = "click for Kanye's words of wisdom"
button.classList.add("kanyeBtn")
$("#kanyeDiv").append(button)




$(".kanyeBtn").click(function(){
    
    $.ajax({
        url: "https://api.kanye.rest",
        method: "GET"
    }).then(function(response){
        console.log(response)
        var kanyeQuote = response

        $("#kanyeDiv").prepend(response.quote + "<br>")
    })
})