
// Variables
const URL = 'https://api.kanye.rest/'    // url link to api

// Elements
const $btn = $('#getQuoteBtn');    


// Event listeners
$btn.on('click', handleGetData)      // when button is clicked data will be ran 



// Functions

function handleGetData() {
    $.ajax(URL).then(function(data) {
   console.log(data) 
   $('main').empty()     // removes content inside main element
   $('main').append(`<p>"${data.quote}"</p>`)     
   $('main').append(`<p> ~ Kanye West </p>`)

    })


    
} 
