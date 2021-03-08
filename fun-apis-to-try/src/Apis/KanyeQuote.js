import React from 'react';
import ApiCards from "../components/card/card";



class KayneQuotes extends React.Component {
    render() {

        let kayneQuotes = "something dumb"
        fetch('https://api.kanye.rest')
            .then(response => response.json())
            .then(data =>
                console.log("this hall be le data kayne's words", data)
            );

        return (
            <ApiCards
            information = {kayneQuotes}
            pic="https://im-media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/2020-07/2020-07-08T071142Z_1442775454_RC2VOH95XAFN_RTRMADP_3_USA-ELECTION-KANYE-WEST.JPG?itok=9rhfcgvx"
            btnText="click for Kanye's words of wisdom"
            />
        )
    }
}

export default KayneQuotes;




// $(".kanyeBtn").click(function(){

//     $.ajax({
//         url: "https://api.kanye.rest",
//         method: "GET"
//     }).then(function(response){
//         console.log(response)
//         var kanyeQuote = response

//         $("#kanyeDiv").prepend(response.quote + "<br>")
//     })
// })