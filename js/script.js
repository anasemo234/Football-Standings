const URL = 'https://api.kanye.rest/'
function handleGetData() {

    $.ajax(URL).then(function(data) {
    console.log(data)
    })


    $getQuoteBtn.on('click', getQuote);
} 