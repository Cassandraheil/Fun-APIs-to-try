import React from "react";


class CatFacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }


    componentDidMount(){
        fetch("https://cat-fact.herokuapp.com/facts")
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                items: result.items
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        })
    }


    render(){
        const {error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div> Loading....</div>;
        } else {
            return (      
                <div>  
                    <h3>this will pass some cat facts when I get it working{items}</h3>
                </div>
            );
        }
    }
}

export default CatFacts;






// $.ajax({
//     url: "https://cat-fact.herokuapp.com/facts",
//     method: "GET"
// }).then(function(response){

//     catFactsArr = []

//     for (i = 0; i < response.length; i++) {
        
//         var catFacts = response[i].text
//         // console.log("catfacts response",response[i].text)
//         catFactsArr.push(catFacts, "<br>")
//     }
//     // console.log("le arrray",catFactsArr)


//     $("#catDiv").prepend(catFactsArr + "<br>")
// })


// $(".catFactBtn").click(function(){
  
//     $.ajax({
//         url: "https://api.thecatapi.com/v1/images/search",
//         method: "GET"
//     }).then(function(response){
//         console.log("this be the cat pics", response[0].url)

//         function makeImage() { 
//             console.log("this be working");
//             var img = document.createElement('img'); 
//                 img.src =  response[0].url; 
//                 document.getElementById('catDiv').prepend(img);   
//         }  
//         makeImage()
//     })
// })


// 28:00 minutes in bootcampspot goes over this 