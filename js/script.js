
// Variables
const URL = 'https://api.kanye.rest/'

// Elements
const $quote = $('#quote');
const $para = $('#para');
const $btn = $('#getQuoteBtn');
// Event listeners
$btn.on('click', handleGetData)  // when button is clicked data will be ran 



// Functions

function handleGetData(event) {

    event.preventDefault()      // prevent refreshing the whole page

    $.ajax(URL).then(function(data) {
   console.log(data) 
   $para.text(data.quote)
//    $('#content').append(``)      // gets data when called
    })


    
} 
