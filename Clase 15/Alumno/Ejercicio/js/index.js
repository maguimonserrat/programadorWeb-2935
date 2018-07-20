$(document).ready(function () {
  console.log('Init app')

  function getData (url, cbk) {
    var jqxhr = $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  // var urlBase = 'https://swapi.co/api/' + 'people/5/'

  getData('https://swapi.co/api/people/5/', showData)

  function showData (error, data) {
    if (!error) {
      console.log(data.name)
    }
  }
})
