"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {


  $.get('/fortune', (resp) => {
    $('#fortune-text').html(resp)
  })
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    $.get(url, formData, (resp) => {
      $('#weather-info').html(resp.forecast)
    })
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    // evt.stopPropagation();
    let formData = {'qty': $('#qty-field').val(),
                    'melon_type': $('#melon-type-field').val()}
    
    $.post('/order-melons.json', formData, (resp) => {
      if (resp.code === 'ERROR'){
          $('#order-status').addClass('order-error')
        }
        $('#order-status').html(resp.msg)
    })
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


