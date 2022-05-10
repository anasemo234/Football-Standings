
// Variables
const URL = 'https://api.kanye.rest/'

// Elements
const $quote = $('#quote')
const $para = $('#para')

// Event listeners




// Functions

function handleGetData() {

    $.ajax(URL).then(function(data) {
   console.log(data) 
   $quote.text(data.quote)      // gets data when called
    })


    
} 