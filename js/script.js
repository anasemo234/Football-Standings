
// Variables
const URL = 'https://api.kanye.rest/'    // url link to api

// Elements
const $btn = $('#getQuoteBtn');    


// Event listeners
$btn.on('click', handleGetData)      // when button is clicked data will be ran (function will run to then get data from api)



// Functions

function handleGetData() {
    $.ajax(URL).then(function(data) {
   console.log(data) 
   $('main').empty()     // removes content inside main element (stops from adding quotes on the page)
   $('main').append(`<p>"${data.quote}"</p>`)     // adds quote by creating p tags so quote can be placed and is appended to the main
   $('main').append(`<p> ~ Kanye West </p>`)     // adds p element after the quote appending to the main 

    })


    
} 
