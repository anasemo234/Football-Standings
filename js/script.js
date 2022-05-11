
// Variables
const URL = 'https://api.kanye.rest/'

// Elements
const $btn = $('#getQuoteBtn'); 


// Event listeners
$btn.on('click', handleGetData)  // when button is clicked data will be ran 



// Functions

function handleGetData() {
    $.ajax(URL).then(function(data) {
   console.log(data) 
   const $quote = $
   $('main').append(`<p>"${data.quote}" - Kanye West</p>`)

    })


    
} 
